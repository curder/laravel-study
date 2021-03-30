# 数据库优化建议

当我们在编写数据库查询的时候，往往不注意会产生很多额外的查询。

下面列举一些常见优化方法。

## 检索大型数据集

如果应用程序需要处理大量记录，而不是一次检索所有记录，则可以检索结果的子集并按组进行处理。

如要从 `posts` 表中检索大量数据，通常会像下面这样进行操作。

```php
// when using eloquent
$posts = Post::all();
 
// when using query builder
$posts = DB::table('posts')->get(); 

foreach ($posts as $post) {
 // Process posts
}
```

上面的示例从 `posts` 表中检索所有记录并进行处理。

如果此表有100万行怎么办？我们将很容易耗尽内存。 为了避免在处理大型数据集时出现问题，我们可以检索结果的子集并按以下方式处理它们。

### 使用 chunk

```php
// when using eloquent
$posts = Post::chunk(100, function ($posts) {
    foreach ($posts as $post) {
     // Process posts
    }
});

// when using query builder
$posts = DB::table('posts')->chunk(100, function ($posts) {
    foreach ($posts as $post) {
     // Process posts
    }
});
```

上面的示例从 `posts` 表中每次检索 `100` 条记录后对其进行处理，再检索另外 `100` 条记录并对其进行处理。 该迭代将继续进行，直到处理完所有记录。

这种方法将发送更多的数据库查询，但具有很高的内存效率。

通常，大型数据集的处理将在后台完成。因此，在后台运行时可以进行更多查询，以避免在处理大型数据集时耗尽内存。

### 使用 cursor

```php
// when using eloquent
foreach (Post::cursor() as $post) {
   // Process a single post
}

// when using query builder
foreach (DB::table('posts')->cursor() as $post) {
   // Process a single post
}
```

上面的示例将进行单个数据库查询，从表中检索所有记录，并一次一次地建立 Eloquent 的模型。

这种方法将仅使一个数据库查询来检索所有数据，但是使用 [php generator](https://www.php.net/manual/zh/language.generators.overview.php) 来优化内存使用。

#### 什么时候可以使用？

尽管使用 [php generator](https://www.php.net/manual/zh/language.generators.overview.php) 的方式极大地优化了应用程序级别的内存使用率，但是由于我们正在从表中检索所有条目，因此数据库实例上的内存使用率仍然会更高。

如果运行当前应用程序的Web应用程序具有较少的内存，并且数据库实例具有更多的内存，则最好使用游标。

但是，如果数据库实例没有足够的内存，则还是选择 [使用 chunk](#使用-chunk) 的方式。


### 使用 chunkById

```php
// when using eloquent
$posts = Post::chunkById(100, function($posts) {
    foreach ($posts as $post) {
     // Process posts
    }
});

// when using query builder
$posts = DB::table('posts')->chunkById(100, function ($posts) {
    foreach ($posts as $post) {
     // Process posts
    }
});
```

`chunk` 和之间的主要区别 `chunkById` 是，`chunk` 基于偏移量和检索限制。而 `chunkById` 基于数据库 `id` 字段检索数据库结果。

这个 `id` 字段通常是一个整数字段，在大多数情况下，它将是一个自动递增字段。

`chunk` 和 `chunkById` 进行的查询如下。
                                      
- `chunk`
  ```sql
  select * from posts offset 0 limit 100
  select * from posts offset 101 limit 100
  ```
- `chunkById`
  ```sql
  select * from posts order by id asc limit 100
  select * from posts where id > 100 order by id asc limit 100
  ```

通常，使用带偏移量的限制比较慢，我们应尽量避免使用它。

由于 `chunkById` 使用的 `id` 字段是一个整数，而查询使用的是 `where clause`，因此查询会更快。

那么什么时候可以使用`chunkById`呢？如果数据库表中有主键自增列。

## 仅查询所需要列

通常，要从数据库表中检索结果执行以下查询操作。

```php
// When using eloquent
$posts = Post::find(1);

// When using query builder
$posts = DB::table('posts')->where('id', 1)->first();
```

上面的代码将产生如下查询

```sql
select * from posts where id = 1 limit 1
```

上面的查询意味着它将从数据库表中检索所有列。如果实际业务中确实需要表中的所有列，则很好。

相反，如果只需要特定的列（比如 `id`，`title`），则可以按以下方式检索这些列。

```php
// When using eloquent
$posts = Post::select(['id', 'title'])->find(1);

// When using query builder
$posts = DB::table('posts')->where('id', 1)->select(['id', 'title'])->first();
```

上面的代码将导致如下查询

```sql
select id, title from posts where id = 1 limit 1
```

## 适当使用 pluck

要检索特定的列，将执行如下代码。

```php
// When using eloquent
$posts = Post::select(['title','slug'])->get();
 
// When using query builder
$posts = DB::table('posts')->select(['title','slug'])->get();
```

上述代码执行后，将在后台进行以下操作。

- 在数据库上执行查询语句 `select title, slug from posts`，获得结果集。
- `Post` 为它检索到的每一行创建一个新的模型对象（对于查询生成器，它创建一个PHP标准对象）
- 用 `Post` 模型创建一个新集合
- 返回集合

要访问结果，我们将

```php
foreach ($posts as $post) {
    // $post is a Post model or php standard object
    $post->title;
    $post->slug;
}
```

上面的方法具有 `Post` 为每一行模型并为这些对象创建集合的额外开销。

如果确实需要 `Post` 模型实例而不仅仅是数据，那最好。但是，如果实际情况只需要这两个列，则可以执行以下操作。

```php
// When using eloquent
$posts = Post::pluck('title', 'slug');

// When using query builder
$posts = DB::table('posts')->pluck('title','slug');
```

执行以上代码后，将在后台执行以下操作。


- 在数据库上执行查询 `select title, slug from posts`
- 用 `title` 数组的值和 `slug` 创建数组的键。
- 返回数组（数组格式为：`[ slug => title, slug => title ]`）

现在，要访问结果，我们将

```php
foreach ($posts as $slug => $title){
  // $title is the title of a post
  // $slug is the slug of a post
}
```

如果只想检索一列，则可以

```php
// When using eloquent
$posts = Post::pluck('title');

// When using query builder
$posts = DB::table('posts')->pluck('title');

foreach ($posts as  $title) {
  // $title is the title of a post
}
```

上述方法消除了 Post 每行对象的创建。因此，减少了内存使用量和处理查询结果所花费的时间。

## 使用数据库查询 count

要计算表中的总行数，我们通常会这样做

```php
// When using eloquent
$posts = Post::all()->count();

// When using query builder
$posts = DB::table('posts')->get()->count();
```

生成以下查询

```sql
select * from posts
```

上面的方法将从表中检索所有行，将它们加载到一个 collection 对象中，然后对结果进行计数。

当数据库表中的行较少时，这可以很好地工作。但是随着表的增长，我们将很快耗尽内存。

代替上面的方法，我们可以直接计算数据库本身的总行数。

```php
// When using eloquent
$posts = Post::count();

// When using query builder
$posts = DB::table('posts')->count();
```

生成以下查询

```php
select count(*) from posts
```

> 在 sql 语句中对行进行计数是一个缓慢的过程，并且当数据库表中的行太多时，其执行效果会很差。最好避免尽可能多地计算行数。


## 使用 eager loading 避免 N+1 查询

假设有如下情况

```php
class PostController extends Controller
{
  public function index()
  {
    $posts = Post::all();
    return view('posts.index', ['posts' => $posts ]);
  }
}
```

```php
// posts/index.blade.php file

@foreach($posts as $post)
<li>
<h3>{{ $post->title }}</h3>
<p>Author: {{ $post->author->name }}</p>
</li>
@endforeach
```

上面的代码检索所有帖子，并在网页上显示帖子标题及其作者。上面的代码假定 `Post` 模型上有 `author` 关联关系。

执行上面的代码将导致运行以下查询。

```sql
select * from posts // Assume this query returned 5 posts
select * from authors where id = { post1.author_id }
select * from authors where id = { post2.author_id }
select * from authors where id = { post3.author_id }
select * from authors where id = { post4.author_id }
select * from authors where id = { post5.author_id }
```

因为一个查询来检索帖子，额外引发了 5 个查询来检索帖子的作者（因为我们假设我们有5个帖子。）因此，对于检索到的每个帖子，它都会进行单独的查询来检索其作者。

假如有 N 个帖子，它将进行 N + 1 个查询（每个帖子1个查询以检索帖子，而N个查询以检索作者）。这通常称为N + 1查询问题。

为避免这种情况，可以按如下所示将作者的关系加载到帖子中。

```php
$posts = Post::all(); // Avoid doing this
$posts = Post::with(['author'])->get(); // Do this instead
```

执行上面的代码将导致运行以下查询。

```sql
select * from posts // Assume this query returned 5 posts
select * from authors where id in( { post1.author_id }, { post2.author_id }, { post3.author_id }, { post4.author_id }, { post5.author_id } )
```

## 优化嵌套关联

从上面的示例中，考虑作者属于一个团队，并且还希望在页面展示该团队的名称。因此，在 blade 模版文件中，将使用以下操作。

```php
@foreach($posts as $post)
    <li>
        <h3>{{ $post->title }}</h3>
        <p>Author: {{ $post->author->name }}</p>
        <p>Author's Team: {{ $post->author->team->name }}</p>
    </li>
@endforeach
```

```php
$posts = Post::with(['author'])->get();
```

导致以下查询

```sql
select * from posts // Assume this query returned 5 posts
select * from authors where id in( { post1.author_id }, { post2.author_id }, { post3.author_id }, { post4.author_id }, { post5.author_id } )
select * from teams where id = { author1.team_id }
select * from teams where id = { author2.team_id }
select * from teams where id = { author3.team_id }
select * from teams where id = { author4.team_id }
select * from teams where id = { author5.team_id }
```

即使使用eager loading 加载了 `authors` 关系，它仍在进行更多查询。因为我们没有在 `authors` 上加载 `team` 。

可以通过以下操作解决此问题。

```php
$posts = Post::with(['author.team'])->get();
```

执行上面的代码将导致运行以下查询。

```sql
select * from posts // Assume this query returned 5 posts
select * from authors where id in( { post1.author_id }, { post2.author_id }, { post3.author_id }, { post4.author_id }, { post5.author_id } )
select * from teams where id in( { author1.team_id }, { author2.team_id }, { author3.team_id }, { author4.team_id }, { author5.team_id } )
```

因此，通过渴望加载嵌套关系，将查询总数从11个减少到3个。

## 按需加载

假设您有两个表 `posts` 和 `authors` 。`Posts` 表具有一列 `author_id` ，该列代表 `authors` 表上的 `belongsTo` 关系。

要获取帖子的作者ID，通常会这样做

```php
$post = Post::findOrFail(<post id>);
$post->author->id;
```

这将导致执行两个查询。

```sql
select * from posts where id = <post id> limit 1
select * from authors where id = <post author id> limit 1
```

相反，可以通过执行以下操作直接获取作者ID。

```php
$post = Post::findOrFail(<post id>);
$post->author_id; // posts table has a column author_id which stores id of the author
```

> **什么时候可以使用上述方法？**
> 
> 在 `posts` 表中引用了行，并且可以确信在 `authors` 表中始终存在一行，则可以使用上述方法。


## 避免不必要的查询

通常，会进行不必要的数据库查询。

```php
<?php

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        $private_posts = PrivatePost::all();
        return view('posts.index', ['posts' => $posts, 'private_posts' => $private_posts ]);
    }
}
```

上面的代码是从两个不同的表中检索的行（例如：`posts`，`private_posts`）并传递给模版展示，视图文件如下所示。

```php
// posts/index.blade.php

@if( request()->user()->isAdmin() )
    <h2>Private Posts</h2>
    <ul>
        @foreach($private_posts as $post)
            <li>
                <h3>{{ $post->title }}</h3>
                <p>Published At: {{ $post->published_at }}</p>
            </li>
        @endforeach
    </ul>
@endif

<h2>Posts</h2>
<ul>
    @foreach($posts as $post)
        <li>
            <h3>{{ $post->title }}</h3>
            <p>Published At: {{ $post->published_at }}</p>
        </li>
    @endforeach
</ul>
```

上面 `$private_posts` 展示的那样，仅对的 `admin` 用户可见，其它用户都看不到这些帖子。

这里的问题是，当我们做的时候

```php
$posts = Post::all();
$private_posts = PrivatePost::all();
```

在进行两个查询。一个从 `posts` 表中获取记录，另一个从表中获取记录 `private_posts`。

`private_posts` 表中的记录仅对可见 `admin` 用户，即使它们不可见。

可以将下面的逻辑修改为避免这种额外的查询。

```php
$posts = Post::all();
$private_posts = collect();
if( request()->user()->isAdmin() ){
    $private_posts = PrivatePost::all();
}
```

通过将逻辑更改为上述内容，对 `admin` 用户进行两个查询，并对所有其他用户进行一个查询。

## 合并类似的查询

有时需要进行查询以从同一张表中检索不同类型的行。

```php
$published_posts = Post::where('status','=','published')->get();
$featured_posts = Post::where('status','=','featured')->get();
$scheduled_posts = Post::where('status','=','scheduled')->get();
```

上面的代码正在检索状态与同一表不同的行。该代码将导致进行以下查询。

```sql
select * from posts where status = 'published'
select * from posts where status = 'featured'
select * from posts where status = 'scheduled'
```

它将对同一张表进行3个不同的查询以检索记录。可以重构此代码以仅进行一个数据库查询。

```php
$posts =  Post::whereIn('status',['published', 'featured', 'scheduled'])->get();
$published_posts = $posts->where('status', 'published');
$featured_posts = $posts->where('status', 'featured');
$scheduled_posts = $posts->where('status', 'scheduled');
```

```sql
select * from posts where status in ( 'published', 'featured', 'scheduled' )
```

上面的代码执行一个查询以检索具有任何指定状态的所有帖子，并通过按其状态过滤返回的帖子来为每种状态创建单独的集合。

因此，我们将仍然具有三个不同的变量及其状态，并且只会进行一个查询。


## 给经常查询列添加索引

如果是通过将进行查询where的条件string基础column，最好是一个索引添加到列。使用索引列查询行时，查询要快得多。

```php
$posts = Post::where('status', 'published')->get();
```

在上面的示例中，通过向 `status` 列中添加 `where` 条件来查询记录。可以通过添加以下数据库迁移来提高查询的性能。

```php
Schema::table('posts', function (Blueprint $table) {
  $table->index('status');
});

Schema::table('posts', function (Blueprint $table) {
  $table->dropIndex('status');
});
```

## 使用 simplePaginate 代替 Paginate

分页结果时，我们通常会

```php
$posts = Post::paginate(20);
```

这将进行 2 个查询。1 个查询检索分页结果，另一个则计算表中的总行数。

对表中的行进行计数是一项缓慢的操作，会对查询性能产生负面影响。

那么 laravel 为什么要计算总行数呢？

答案是要生成分页链接，Laravel会计算总行数。

另一方面，这样做 simplePaginate 不会计算总行数，查询将比该 paginate 方法快得多。

但是，您将失去知道最后一页编号并无法跳转到其他页面的能力。

如果您的数据库表有很多行，最好避免 paginate 这样做 simplePaginate 。

```php
$posts = Post::paginate(20); // Generates pagination links for all the pages
$posts = Post::simplePaginate(20); // Generates only next and previous pagination links
```

## 避免使用模糊匹配查询

当尝试查询与特定模式匹配的结果时，我们通常会选择

```sql
select * from table_name where column like %keyword%
```

上面的查询将导致全表扫描。如果我们知道关键字出现在列值的开头，则可以查询以下结果。

```sql
select * from table_name where column like keyword%
```

## 避免在where子句中使用SQL函数

始终最好避免在 where 子句中使用SQL函数，因为它们会导致全表扫描。要根据特定日期查询结果，通常会

```php
$posts = POST::whereDate('created_at', '>=', now() )->get();
```

这将导致类似于以下的查询

```sql
select * from posts where date(created_at) >= 'timestamp-here'
```

上面的查询将导致全表扫描，因为在 date 评估函数之前不会应用 where 条件。

我们可以重构它以避免datesql函数，如下所示

```php
$posts = Post::where('created_at', '>=', now() )->get();
```

```sql
select * from posts where created_at >= 'timestamp-here'
```

## 避免在表中添加太多列

最好限制表中的列总数。可以利用关系数据库（如mysql）将具有这么多列的表拆分为多个表。可以使用主键和外键将它们结合在一起。

在表中添加太多列会增加单个记录的长度，并会减慢表扫描的速度。

当执行 select * 查询时，最终将检索一堆您真正不需要的列。

## 将具有文本数据类型的列分隔到自己的表中

该技巧来自个人经验，并不是架构数据库表的标准方法。我建议仅在您的表有太多记录或将迅速增长的情况下才遵循此技巧。

如果表具有存储大量数据的列（例如：数据类型为TEXT的列），则最好将它们分为自己的表或不经常被查询的表。

当表中的列中包含大量数据时，单个记录的大小会非常大。我个人观察到它影响了我们项目之一的查询时间。

考虑一种情况，有一个名为的表 `posts` ，该表的一列 `content` 存储博客文章内容。

博客文章的内容将非常庞大，而且通常很多时候，只有当某人正在查看此特定博客文章时，才需要此数据。

因此，当帖子过多时，将此列与 `posts` 表分开可以大大提高查询性能。

## 从表中检索最新行的更好方法

当我们想从表中检索最新行时，我们通常会这样做

```php
$posts = Post::latest()->get();
// or $posts = Post::orderBy('created_at', 'desc')->get();
```

上面的方法将产生以下sql查询。

```php
select * from posts order by created_at desc
```

该查询基本上是基于 `created_at` 列以降序对行进行排序。

由于 `created_at` 列是基于字符串的列，因此以这种方式对结果进行排序通常较慢。

如果您的数据库表具有自动递增的主键ID，则在大多数情况下，最新行将始终具有最高ID。
由于 id 字段既是整数字段又是主键，因此基于此键对结果进行排序要快得多。因此，检索最新行的更好方法如下。

```php
$posts = Post::latest('id')->get();
// or $posts = Post::orderBy('id', 'desc')->get();
select * from posts order by id desc
```

## 原文地址

[18 Tips to optimize laravel database queries](https://dudi.dev/optimize-laravel-database-queries)
