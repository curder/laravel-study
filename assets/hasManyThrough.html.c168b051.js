import{e}from"./app.af44c7c5.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=e(`<h1 id="\u8FDC\u5C42\u4E00\u5BF9\u591A" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u5C42\u4E00\u5BF9\u591A" aria-hidden="true">#</a> \u8FDC\u5C42\u4E00\u5BF9\u591A</h1><p>\u201C\u8FDC\u5C42\u4E00\u5BF9\u591A\u201D\u6307\u7684\u662F\u901A\u8FC7\u4E00\u4E2A\u4E2D\u95F4\u5173\u8054\u5BF9\u8C61\u8BBF\u95EE\u8FDC\u5C42\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u6BD4\u5982\u7528\u6237\u4E0E\u6587\u7AE0\u4E4B\u95F4\u5B58\u5728\u4E00\u5BF9\u591A\u5173\u7CFB\uFF0C\u56FD\u5BB6\u4E0E\u7528\u6237\u4E4B\u95F4\u4E5F\u5B58\u5728\u4E00\u5BF9\u591A\u5173\u7CFB\uFF0C\u90A3\u4E48\u901A\u8FC7\u7528\u6237\u53EF\u4EE5\u5EFA\u7ACB\u56FD\u5BB6\u4E0E\u6587\u7AE0\u7684\u4E4B\u95F4\u7684\u4E00\u5BF9\u591A\u5173\u8054\u5173\u7CFB\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u201C\u8FDC\u5C42\u4E00\u5BF9\u591A\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u79CD\u5173\u8054\u5173\u7CFB\u5904\u7406\u591A\u8BED\u8A00\u73AF\u5883\u4E0B\u7684\u6587\u7AE0\u5217\u8868\u3002</p><h2 id="\u8F6F\u4EF6\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u7248\u672C" aria-hidden="true">#</a> \u8F6F\u4EF6\u7248\u672C</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="\u5173\u952E\u5B57\u548C\u8868" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57\u548C\u8868" aria-hidden="true">#</a> \u5173\u952E\u5B57\u548C\u8868</h2><ul><li><p><code>hasOne()</code></p></li><li><p><code>hasMany()</code></p></li><li><p><code>belongsTo()</code></p></li><li><p><code>hasManyThrough()</code></p></li><li><p><code>posts</code> \u3001<code>countries</code> \u548C <code>users</code> \u8868</p></li></ul><p>\u6570\u636E\u64CD\u4F5C\u4E4B\u524D\u8BF7\u5148\u914D\u7F6E\u597D\uFF0C\u6570\u636E\u5E93\u7684\u4E00\u4E9B\u8FDE\u63A5\u4FE1\u606F\u3002\u4F8B\u5982\u4E0B\u9762\u4F7F\u7528mysql\u6570\u636E\u5E93\uFF0C\u4FEE\u6539\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>.env</code> \u6587\u4EF6\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6211\u4EEC\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\uFF0C\u6587\u7AE0\u8868 <code>posts</code> \u548C \u56FD\u5BB6\u8868 <code>countries</code>\uFF08<strong>\u5047\u8BBE\u7528\u6237\u8868\u4F7F\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684</strong>\uFF09</p><h2 id="\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:migration create_posts_table --create<span class="token operator">=</span>posts

php artisan make:migration create_countries_table --create<span class="token operator">=</span>countries

php artisan make:model Post
php artisan make:model Country
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6</h3><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_users_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> $table-&gt;increments(&#39;id&#39;);
 $table-&gt;string(&#39;name&#39;);
 $table-&gt;unsignedInteger(&#39;country_id&#39;); // \u65B0\u589E\u8FD9\u4E2A\u8868\u5B57\u6BB5
 $table-&gt;string(&#39;email&#39;,30)-&gt;unique();
 $table-&gt;string(&#39;password&#39;);
 $table-&gt;rememberToken();
 $table-&gt;timestamps();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> $table-&gt;increments(&#39;id&#39;);
 $table-&gt;unsignedInteger(&#39;user_id&#39;);
 $table-&gt;string(&#39;title&#39;, 60);
 $table-&gt;text(&#39;body&#39;);
 $table-&gt;timestamps();
 $table-&gt;timestamp(&#39;published_at&#39;)-&gt;nullable();
 $table-&gt;foreign(&#39;user_id&#39;)
 		-&gt;references(&#39;id&#39;)
 		-&gt;on(&#39;users&#39;)
 		-&gt;onUpdate(&#39;cascade&#39;)
 		-&gt;onDelete(&#39;cascade&#39;);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_countries_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> $table-&gt;increments(&#39;id&#39;);
 $table-&gt;string(&#39;name&#39;,20);
 $table-&gt;string(&#39;display_name&#39;,20);
 $table-&gt;timestamps();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FD0\u884C php artisan \u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\u6570\u636E\u5E93\u5C06\u751F\u6210\u4E94\u5F20\u8868\uFF0C migrations password_resets post users countries</p></blockquote><h3 id="\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" aria-hidden="true">#</a> \u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684 fillable \u5C5E\u6027</h3><p><code>App\\Country</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u4E0E <code>App\\Post</code> \u6A21\u578B\u7684\u8FDC\u5C42\u4E00\u5BF9\u591A\u5173\u7CFB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function user()
{
    /**
     * User::class related \u5173\u8054\u6A21\u578B
     * country_id foreignKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
     * id localKey \u5173\u8054\u8868\u5B57\u6BB5
     */
    return $this-&gt;hasMany(&#39;App\\User&#39; , &#39;country_id&#39; , &#39;id&#39;);
}

public function posts()
{
    /**
     * @param  string      $related
     * @param  string      $through
     * @param  string|null $firstKey
     * @param  string|null $secondKey
     * @param  string|null $localKey \u4E0D\u586B\u9ED8\u8BA4\u4E3A\u5F53\u524D\u6A21\u578B\u7684\u4E3B\u952E
     */
    return $this-&gt;hasManyThrough(&#39;App\\Post&#39; , &#39;App\\User&#39; , &#39;country_id&#39; , &#39;user_id&#39;, &#39;id&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p>\u7531\u6B64\u53EF\u89C1\u6211\u4EEC\u901A\u8FC7 <code>hasManyThrough()</code> \u65B9\u6CD5\u6765\u5B9A\u4E49\u8FDC\u5C42\u4E00\u5BF9\u591A\u5173\u8054\u3002\u5176\u4E2D\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u5173\u8054\u5BF9\u8C61\u7C7B\u540D\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E2D\u95F4\u5BF9\u8C61\u7C7B\u540D\u3002</p></blockquote><p><code>App\\Post</code> \u6A21\u578B\u5173\u8054\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected $fillable = [&#39;title&#39; , &#39;user_id&#39; , &#39;body&#39; , &#39;published_at&#39;];

public function user()
{
    /**
    * User::class related \u5173\u8054\u6A21\u578B
    * user_id ownerKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
    * id relation \u5173\u8054\u8868\u5B57\u6BB5
    */
    return $this-&gt;belongsTo(User::class , &#39;user_id&#39; , &#39;id&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>App\\User</code> \u6A21\u578B\u5173\u8054\u5173\u7CFB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function posts()
{
    /**
     * Post::class related \u5173\u8054\u6A21\u578B
     * user_id foreignKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
     * id localKey \u5173\u8054\u8868\u5B57\u6BB5
     */
    return $this-&gt;hasMany(Post::class , &#39;user_id&#39; , &#39;id&#39;);
}

public function country()
{
    /**
     * Country::class related \u5173\u8054\u6A21\u578B
     * id foreignKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
     * country_id localKey \u5173\u8054\u8868\u5B57\u6BB5
     */
    return $this-&gt;hasOne(Country::class , &#39;id&#39; , &#39;country_id&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528 tinker \u586B\u5145\u6570\u636E</h3><p>\u4FEE\u6539\xA0<code>/databases/factories/ModelFactory.php</code>\uFF0C\u65B0\u589E\u5173\u8054\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$factory-&gt;define(App\\User::class , function(Faker\\Generator $faker){
    static $password;
    $country_ids = \\App\\Country::pluck(&#39;id&#39;)-&gt;toArray();

    return [
        &#39;name&#39;           =&gt; $faker-&gt;name ,
        &#39;country_id&#39;     =&gt; $faker-&gt;randomElement($country_ids) ,
        &#39;email&#39;          =&gt; $faker-&gt;unique()-&gt;safeEmail ,
        &#39;password&#39;       =&gt; $password ? : $password = bcrypt(&#39;secret&#39;) ,
        &#39;remember_token&#39; =&gt; str_random(10) ,
    ];
});
$factory-&gt;define(App\\Post::class , function(Faker\\Generator $faker){
    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();

    return [
        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids) ,
        &#39;title&#39;   =&gt; $faker-&gt;word ,
        &#39;body&#39;    =&gt; $faker-&gt;text() ,
    ];
});

$factory-&gt;define(App\\Country::class , function(Faker\\Generator $faker){
    return [
        &#39;name&#39;         =&gt; $faker-&gt;country ,
        &#39;display_name&#39; =&gt; $faker-&gt;country ,
    ];
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan tinker

## \u8FDB\u5165\u5230 tinker \u754C\u9762\u6267\u884C\u5982\u4E0B\u547D\u4EE4
namespace App
factory(Country::class,2)-&gt;create(); // \u751F\u6210\u4E24\u4E2A\u56FD\u5BB6\u6570\u636E
factory(User::class,3)-&gt;create(); // \u751F\u62103\u4E2A\u7528\u6237
factory(Post::class,30)-&gt;create() // \u751F\u621030\u6761 posts \u8868\u7684\u6D4B\u8BD5\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5173\u8054\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u64CD\u4F5C" aria-hidden="true">#</a> \u5173\u8054\u64CD\u4F5C</h2><h3 id="\u65B0\u589E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6570\u636E" aria-hidden="true">#</a> \u65B0\u589E\u6570\u636E</h3><h4 id="\u4F7F\u7528-save-\u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-save-\u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E" aria-hidden="true">#</a> \u4F7F\u7528 save() \u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E</h4><p>\u5E38\u89C1\u7684\u65B0\u589E <code>posts</code> \u6570\u636E\u573A\u666F\u662F\u7528\u6237\u53D1\u5E03\u4E00\u7BC7\u6587\u7AE0\uFF0C\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = new \\App\\Post([
	&#39;title&#39; =&gt; &#39;test title&#39;,
	&#39;body&#39; =&gt; &#39;test body&#39;,
	&#39;published_at&#39; =&gt; null,
]);
\\Auth::user()-&gt;posts()-&gt;save($post);

// \u6216\u8005\u83B7\u53D6 \\Request \u5BF9\u8C61\u4F20\u9012\u7684\u6570\u636E\u5199\u5165
$post = new \\App\\Post($request-&gt;all());
\\Auth::user-&gt;posts()-&gt;save($post));
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u4F7F\u7528-savemany-\u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u6279\u91CF\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-savemany-\u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u6279\u91CF\u65B0\u589E" aria-hidden="true">#</a> \u4F7F\u7528 saveMany() \u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u6279\u91CF\u65B0\u589E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5982\u679C\u9700\u8981\u4FDD\u5B58\u591A\u4E2A\u5173\u8054\u6A21\u578B\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`saveMany()\` \u65B9\u6CD5\uFF0C\u5982\u4E0B\uFF1A
\\Auth::user()-&gt;posts()-&gt;saveMany([
	new \\App\\Post([&#39;title&#39; =&gt; &#39;test title&#39;, &#39;body&#39; =&gt; &#39;test body&#39;, &#39;published_at&#39; =&gt; null]),
	new \\App\\Post([&#39;title&#39; =&gt; &#39;test title2&#39;, &#39;body&#39; =&gt; &#39;test body2&#39;, &#39;published_at&#39; =&gt; null])
]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u4F7F\u7528-create-\u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-create-\u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E" aria-hidden="true">#</a> \u4F7F\u7528 create() \u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\Auth::user()-&gt;posts()-&gt;create([
	&#39;title&#39; =&gt; &#39;test title3&#39;,
	&#39;body&#39; =&gt; &#39;test body3&#39;,
	&#39;published_at&#39; =&gt; null,
]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>create()</code> \u65B9\u6CD5\u63A5\u53D7\u5C5E\u6027\u6570\u7EC4\u3001 \u521B\u5EFA\u6A21\u578B\uFF0C\u7136\u540E\u5199\u5165\u6570\u636E\u5E93\uFF0C<code>save()</code>\xA0\u548C\xA0<code>create()</code>\xA0\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\xA0<code>save()</code>\xA0\u63A5\u6536\u6574\u4E2A Eloquent \u6A21\u578B\u5B9E\u4F8B\uFF0C\u800C\xA0<code>create()</code>\xA0\u63A5\u6536\u539F\u751F PHP \u6570\u7EC4\u3002 <strong>\u6CE8\u610F\uFF1A</strong> \u4F7F\u7528 create \u65B9\u6CD5\u4E4B\u524D\u786E\u4FDD <code>$fillable</code> \u5C5E\u6027\u586B\u5145\u6279\u91CF\u8D4B\u503C\u3002</p></blockquote><h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3><h4 id="\u6839\u636E\u56FD\u5BB6\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u56FD\u5BB6\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u6839\u636E\u56FD\u5BB6\u67E5\u8BE2\u6570\u636E</h4><h5 id="\u67E5\u8BE2\u56FD\u5BB6\u4E0B\u7684\u7528\u6237\u548C\u53D1\u5E03\u7684\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u56FD\u5BB6\u4E0B\u7684\u7528\u6237\u548C\u53D1\u5E03\u7684\u6587\u7AE0" aria-hidden="true">#</a> \u67E5\u8BE2\u56FD\u5BB6\u4E0B\u7684\u7528\u6237\u548C\u53D1\u5E03\u7684\u6587\u7AE0</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u8BE2\u56FD\u5BB6\u4E0B\u7684\u6240\u6709\u6587\u7AE0\u6570\u636E
$country = \\App\\Country::find(1);
$posts = $country-&gt;posts;

// \u6216\u8005\u901A\u8FC7\u4E0B\u9762\u7684\u5173\u8054\u5173\u7CFB
$posts = \\App\\Country::with(array(&#39;user&#39;,&#39;posts&#39;))-&gt;find(1);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="\u67E5\u8BE2\u56FD\u5BB6\u4E0B\u7684\u7528\u6237\u6216\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u56FD\u5BB6\u4E0B\u7684\u7528\u6237\u6216\u6587\u7AE0" aria-hidden="true">#</a> \u67E5\u8BE2\u56FD\u5BB6\u4E0B\u7684\u7528\u6237\u6216\u6587\u7AE0</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$posts = \\App\\Country::with(array(&#39;user&#39;))-&gt;find(1);
$posts = \\App\\Country::with(array(&#39;user.posts&#39;))-&gt;find(1);
$posts = \\App\\Country::with(array(&#39;posts.user&#39;))-&gt;find(1);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u56FD\u5BB6\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u56FD\u5BB6\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u56FD\u5BB6\u4FE1\u606F</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$posts = \\App\\Post::with([&#39;user.country&#39;])-&gt;get();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="\u83B7\u53D6\u7528\u6237\u5217\u8868\u5E76\u5173\u8054\u6240\u5C5E\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u5217\u8868\u5E76\u5173\u8054\u6240\u5C5E\u6587\u7AE0" aria-hidden="true">#</a> \u83B7\u53D6\u7528\u6237\u5217\u8868\u5E76\u5173\u8054\u6240\u5C5E\u6587\u7AE0</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\App\\User::with(&#39;posts&#39;)-&gt;get()-&gt;toArray();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="\u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u7528\u6237" aria-hidden="true">#</a> \u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u7528\u6237</h4><h5 id="\u67E5\u8BE2\u5355\u4E2A\u6587\u7AE0\u7684\u5173\u8054\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5355\u4E2A\u6587\u7AE0\u7684\u5173\u8054\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u8BE2\u5355\u4E2A\u6587\u7AE0\u7684\u5173\u8054\u7528\u6237\u4FE1\u606F</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1); // \u83B7\u53D6\u6587\u7AE0\u6570\u636E
$user = $post-&gt;user-&gt;toArray(); // \u83B7\u53D6\u6587\u5B57\u6240\u5C5E\u7528\u6237
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="\u6587\u7AE0\u5217\u8868\u5173\u8054\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u5217\u8868\u5173\u8054\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> \u6587\u7AE0\u5217\u8868\u5173\u8054\u7528\u6237\u4FE1\u606F</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::with(&#39;user&#39;)-&gt;get()-&gt;toArray();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5173\u8054\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u5220\u9664" aria-hidden="true">#</a> \u5173\u8054\u5220\u9664</h3><p>\u901A\u8FC7\u7528\u6237\u5173\u8054\u5220\u9664\u6587\u7AE0\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);
$user-&gt;posts()-&gt;delete(); // \u5220\u9664 posts \u8868\u4E2D\u76F8\u5173\u8BB0\u5F55
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u901A\u8FC7\u56FD\u5BB6\u5173\u8054\u5220\u9664\u6587\u7AE0\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$country = \\App\\Country::find(1);
$country-&gt;posts()-&gt;delete(); // \u5173\u8054\u5220\u9664 posts \u8868\u4E2Dcountry_id \u4E3A 1 \u7684\u76F8\u5173\u8BB0\u5F55\uFF0C\u6B64\u5904country_id \u4E3A 1 \u901A\u8FC7\u7528\u6237\u8868\u5173\u8054\u5F97\u51FA\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u76F8\u5173\u7684\u66F4\u591A\u7684\u5173\u8054\u5220\u9664\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u81EA\u884C\u5C1D\u8BD5\u3002</p></blockquote><h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3><h4 id="\u901A\u8FC7\u5173\u8054-user-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5173\u8054-user-\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u5173\u8054 User \u6570\u636E</h4>`,66);function r(l,t){return a}var c=n(s,[["render",r]]);export{c as default};
