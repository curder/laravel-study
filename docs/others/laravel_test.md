# Laravel测试

* Laravel 5.4.24

## 测试前的准备

### 安装Laravel
```
composer create-project laravel/laravel testing-laravel
```

### 安装依赖
```
composer require mockery/mockery --dev
```

### 修改配置
修改 `phpunit.xml` 定义测试数据库
```
<env name="DB_CONNECTION" value="sqlite"/>
<env name="DB_DATABASE" value=":memory:"/>
```

> 使用`sqlite`的连接方式，使用`memory`进行数据存储。

## 针对Model进行测试
### 测试前的准备

* 建立数据库模型和数据库迁移文件

```
php artisan make:model Article -m
```

* 编辑迁移文件

```
public function up()
{
    Schema::create('articles', function (Blueprint $table) {
        $table->increments('id');
        $table->string('title');
        $table->text('body');
        $table->timestamps();
    });
}
```
* 修改ModelFactory

文件在`databases\factories\ModelFactory.php`

```
$factory->define(App\Article::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'body' => $faker->sentence,
    ];
});
```

* 修改模型文件

```
namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    // 定义使用 __construct($data) 或 create($data) 时，可以被修改的字段，从而保证其他字段不被修改
    protected $fillable = ['title', 'body'];
}
```

### 新增并修改测试文件

* 测试有没有文章

```
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ArticleTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function the_articles_is_empty_result()
    {
        // 取得所有文章
        $articles = Article::all();

        // 确认 $articles 是 Collection
        $this->assertInstanceOf(Collection::class, $articles);

        // 而文章数量为 0
        $this->assertCount(0, $articles);
    }
}
```

* 测试新增数据并列出数据

```
use App\Article;

class ArticleTest extends TestCase
{
    // ...
    
    /** @test */
    public function the_articles_create_and_list_the_data()
    {
      // 新增 10 条记录
      for ($i = 1; $i <= 10; $i++) {
        factory(Article::class,10)->make([
            'name' => 'name ' . $i,
            'body' => 'body ' . $i
        ]);
      }

      // 确认数据库中有10条记录
      $articles = Article::all();
      $this->assertCount(10, $articles);
    }
}
```

> 在实际使用Laravel项目中，我们常常不会直接通过Controller向模型获取数据，而是会使用到Repository的开发模式，那么如何测试Repository呢？

## 使用Repository模式

### 新建Repository文件 

`app/Repositories/ArticleRepository.php`

```
<?php

namespace App\Repositories;

/**
 * Class ArticleRepository
 * @package App\Repositories
 * @method latest($limit)
 * @method create($attributes = array())
 */
class ArticleRepository
{
}
```

> 先建立一个空的Repository文件，后期在测试的过程中添加方法。

### 建立Repository测试文件

#### 测试Repository查询

* 建立文件并编写测试代码，文件在`tests/Feature/ArticleRepositoryTest.php`

```
<?php

namespace Tests\Feature;

use App\Article;
use App\Repositories\ArticleRepository;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ArticleRepositoryTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @var ArticleRepository
     */
    protected $repository;

    protected function setUp()
    {
        parent::setUp();
        // 填充数据
        $this->repository = new ArticleRepository();
    }
    
    // 测试获取最后的10条资料
    /** @test */
    public function fetch_latest_10_articles()
    {
        // given data.
        for ($i = 1; $i <= 100; $i++) {
            factory(Article::class)->create([
                'name' => 'name ' . $i,
                'body' => 'body ' . $i,
            ]);
        }

        // 从 repository 中取得最新 10 条数据
        $articles = $this->repository->latest(10)->get();
        $this->assertCount(10, $articles);

        // 确认标题是从 100 .. 91 倒数
        // "title 100" .. "title 91"
        $i = 10;
        /** @var \App\Article[] $articles */
        foreach ($articles as $article) {
            $this->assertEquals('name ' . $i, $article->name);
            --$i;
        }
    }
}
```

* 抛出错误并修复

```
Error: Call to undefined method App\Repositories\ArticleRepository::latest()
```

1. 先向Repository中添加`latest()`方法

```
public function latest10()
{
}
```

> 执行phpunit报错。
> `Error: Call to a member function get() on null`

2. 再向Repository添加`latest()`方法

```
/**
 * @param int $limit
 * @return ArticleRepository|\Illuminate\Database\Eloquent\Builder
 */
public function latest($limit)
{
    return Article::query()->orderBy('id', 'desc')->limit($limit);
}
```
> 此时测试通过。

#### 测试Repository添加操作

1. 编写测试代码

```
/** @test */
public function create_article()
{

    $article = $this->repository->create([
        'name' => 'name',
        'body' => 'body',
    ]);

    $this->assertEquals(1, $article->id);
}
```

抛出如下错误:

```
Error: Call to undefined method App\Repositories\ArticleRepository::create()
```

2. 修改Repository中代码，新增`create()`方法：

```
use App\Article;

public function create()
{
}
```

抛出如下错误：

```
ErrorException: Trying to get property of non-object
```

3. 修改Repository中`create()`方法，添加逻辑代码：

```
use App\Article;

 /**
 * Create new data.
 * @param array $attributes
 * @return mixed
 */
public function create(array $attributes = array())
{
    return Article::create($attributes);
}
```

> 以上测试过程即为TDD测试流程
 
## Reference
[Web Development with Laravel 5](https://gist.github.com/jaceju/c415c1b42daf4c589f2a)