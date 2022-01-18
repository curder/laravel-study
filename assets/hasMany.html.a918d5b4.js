import{e as n}from"./app.e716e27d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<h1 id="\u4E00\u5BF9\u591A" tabindex="-1"><a class="header-anchor" href="#\u4E00\u5BF9\u591A" aria-hidden="true">#</a> \u4E00\u5BF9\u591A</h1><p>\u6570\u636E\u8868\u4E4B\u95F4\u5F80\u5F80\u4E0D\u662F\u5B64\u7ACB\u7684\uFF0C\u800C\u662F\u7EB5\u6A2A\u4EA4\u53C9\u3001\u76F8\u4E92\u5173\u8054\u7684\uFF0C\u6BD4\u5982\u4E00\u4E2A\u7528\u6237\u53D1\u8868\u4E86\u591A\u7BC7\u6587\u7AE0\uFF0C\u4E00\u7BC7\u6587\u7AE0\u53EA\u5C5E\u4E8E\u4E00\u4E2A\u7528\u6237\u7B49\u3002</p><h2 id="\u8F6F\u4EF6\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u7248\u672C" aria-hidden="true">#</a> \u8F6F\u4EF6\u7248\u672C</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="\u5173\u952E\u5B57\u548C\u8868" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57\u548C\u8868" aria-hidden="true">#</a> \u5173\u952E\u5B57\u548C\u8868</h2><ul><li><p><code>hasMany()</code></p></li><li><p><code>belongsTo()</code></p></li><li><p><code>posts</code> \u548C <code>users</code> \u8868</p></li></ul><p>\u6570\u636E\u64CD\u4F5C\u4E4B\u524D\u8BF7\u5148\u914D\u7F6E\u597D\uFF0C\u6570\u636E\u5E93\u7684\u4E00\u4E9B\u8FDE\u63A5\u4FE1\u606F\u3002\u4F8B\u5982\u4E0B\u9762\u4F7F\u7528mysql\u6570\u636E\u5E93\uFF0C\u4FEE\u6539\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>.env</code> \u6587\u4EF6\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E00\u5BF9\u591A\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u8868\u793A\u8868A\u5BF9\u5E94\u8868B\u7684N\u6761\u8BB0\u5F55\uFF0C\u4F8B\u5982\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u53D1\u8868\u591A\u6761\u6587\u7AE0\u3002</p><p>\u6211\u4EEC\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\uFF0C\u6587\u7AE0\u8868 <code>posts</code> \uFF08<strong>\u5047\u8BBE\u7528\u6237\u8868\u4F7F\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684</strong>\uFF09</p><h2 id="\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:migration create_posts_table --create<span class="token operator">=</span>posts

php artisan make:model Post
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6</h3><p><code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code>\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

use Illuminate\\Support\\Facades\\Schema;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Database\\Migrations\\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(&#39;posts&#39;, function (Blueprint $table) {
            $table-&gt;increments(&#39;id&#39;);
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
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(&#39;posts&#39;);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FD0\u884C php artisan \u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\u6570\u636E\u5E93\u5C06\u751F\u6210\u56DB\u5F20\u8868\uFF0C migrations password_resets post users</p></blockquote><h3 id="\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" aria-hidden="true">#</a> \u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684 fillable \u5C5E\u6027</h3><p><code>App\\Post</code> \u6A21\u578B\u5173\u8054\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace App;

use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    protected $fillable = [&#39;title&#39;, &#39;user_id&#39;, &#39;body&#39;, &#39;published_at&#39;];

    public function user()
    {
        /**
         * User::class related \u5173\u8054\u6A21\u578B
         * user_id ownerKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
         * id relation \u5173\u8054\u8868\u5B57\u6BB5\uFF0C\u8FD9\u91CC\u6307 user \u8868
         */
        return $this-&gt;belongsTo(User::class, &#39;user_id&#39;, &#39;id&#39;);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code>App\\User</code> \u6A21\u578B\u5173\u8054\u5173\u7CFB\uFF1B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace App;

use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        &#39;name&#39;, &#39;email&#39;, &#39;password&#39;,
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        &#39;password&#39;, &#39;remember_token&#39;,
    ];

    public function posts()
    {
        /**
         * Post::class related \u5173\u8054\u6A21\u578B
         * user_id foreignKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
         * id localKey \u5173\u8054\u8868\u5B57\u6BB5
         */
        return $this-&gt;hasMany(Post::class, &#39;user_id&#39;, &#39;id&#39;);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528 tinker \u586B\u5145\u6570\u636E</h3><p>\u4FEE\u6539\xA0<code>/databases/factories/ModelFactory.php</code>\uFF0C\u65B0\u589E\u5173\u8054\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */
$factory-&gt;define(App\\User::class, function (Faker\\Generator $faker) {
    static $password;

    return [
        &#39;name&#39; =&gt; $faker-&gt;name,
        &#39;email&#39; =&gt; $faker-&gt;unique()-&gt;safeEmail,
        &#39;password&#39; =&gt; $password ?: $password = bcrypt(&#39;secret&#39;),
        &#39;remember_token&#39; =&gt; str_random(10),
    ];
});

$factory-&gt;define(App\\Post::class, function (Faker\\Generator $faker) {
    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();
    return [
        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids),
        &#39;title&#39; =&gt; $faker-&gt;word,
        &#39;body&#39; =&gt; $faker-&gt;text(),
    ];
});

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan tinker

## \u8FDB\u5165\u5230 tinker \u754C\u9762\u6267\u884C\u5982\u4E0B\u547D\u4EE4
namespace App
factory(User::class,3)-&gt;create(); // \u751F\u62103\u4E2A\u7528\u6237
factory(Post::class,30)-&gt;create() // \u751F\u621030\u6761 posts \u8868\u7684\u6D4B\u8BD5\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u5173\u8054\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u64CD\u4F5C" aria-hidden="true">#</a> \u5173\u8054\u64CD\u4F5C</h2><h3 id="\u65B0\u589E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6570\u636E" aria-hidden="true">#</a> \u65B0\u589E\u6570\u636E</h3><h4 id="\u4F7F\u7528-save-\u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-save-\u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E" aria-hidden="true">#</a> \u4F7F\u7528 save() \u65B9\u6CD5\u8FDB\u884C\u5173\u8054\u6570\u636E\u7684\u65B0\u589E</h4><p>\u5E38\u89C1\u7684\u65B0\u589E <code>posts</code> \u6570\u636E\u573A\u666F\u662F\u7528\u6237\u53D1\u5E03\u4E00\u7BC7\u6587\u7AE0\uFF0C\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = new \\App\\Post([
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>create()</code> \u65B9\u6CD5\u63A5\u53D7\u5C5E\u6027\u6570\u7EC4\u3001 \u521B\u5EFA\u6A21\u578B\uFF0C\u7136\u540E\u5199\u5165\u6570\u636E\u5E93\uFF0C<code>save()</code>\xA0\u548C\xA0<code>create()</code>\xA0\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\xA0<code>save()</code>\xA0\u63A5\u6536\u6574\u4E2A Eloquent \u6A21\u578B\u5B9E\u4F8B\uFF0C\u800C\xA0<code>create()</code>\xA0\u63A5\u6536\u539F\u751F PHP \u6570\u7EC4\u3002 <strong>\u6CE8\u610F\uFF1A</strong> \u4F7F\u7528 create \u65B9\u6CD5\u4E4B\u524D\u786E\u4FDD <code>$fillable</code> \u5C5E\u6027\u586B\u5145\u6279\u91CF\u8D4B\u503C\u3002</p></blockquote><h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3><h4 id="\u67E5\u8BE2\u7528\u6237\u53D1\u5E03\u7684\u6240\u6709\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u7528\u6237\u53D1\u5E03\u7684\u6240\u6709\u6587\u7AE0" aria-hidden="true">#</a> \u67E5\u8BE2\u7528\u6237\u53D1\u5E03\u7684\u6240\u6709\u6587\u7AE0</h4><h5 id="\u83B7\u53D6\u5355\u4E2A\u7528\u6237\u7684\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5355\u4E2A\u7528\u6237\u7684\u6587\u7AE0" aria-hidden="true">#</a> \u83B7\u53D6\u5355\u4E2A\u7528\u6237\u7684\u6587\u7AE0</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u8BE2\u5F53\u524D\u7528\u6237\u7684\u6240\u6709\u6587\u7AE0
$posts = \\Auth::user()-&gt;posts-&gt;toArray();


// \u6839\u636E\u6761\u4EF6\u7B5B\u9009\u5F53\u524D\u7528\u6237\u7684\u6587\u5B57
$posts = \\Auth::user()-&gt;posts()-&gt;where(&#39;id&#39;,&#39;&gt;&#39;,10)-&gt;get()-&gt;toArray();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="\u83B7\u53D6\u7528\u6237\u5217\u8868\u5E76\u5173\u8054\u6240\u5C5E\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u5217\u8868\u5E76\u5173\u8054\u6240\u5C5E\u6587\u7AE0" aria-hidden="true">#</a> \u83B7\u53D6\u7528\u6237\u5217\u8868\u5E76\u5173\u8054\u6240\u5C5E\u6587\u7AE0</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\App\\User::with(&#39;posts&#39;)-&gt;get()-&gt;toArray();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="\u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u7528\u6237" aria-hidden="true">#</a> \u67E5\u8BE2\u6587\u7AE0\u6240\u5C5E\u7528\u6237</h4><h5 id="\u67E5\u8BE2\u5355\u4E2A\u6587\u7AE0\u7684\u5173\u8054\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5355\u4E2A\u6587\u7AE0\u7684\u5173\u8054\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u8BE2\u5355\u4E2A\u6587\u7AE0\u7684\u5173\u8054\u7528\u6237\u4FE1\u606F</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1); // \u83B7\u53D6\u6587\u7AE0\u6570\u636E
$user = $post-&gt;user-&gt;toArray(); // \u83B7\u53D6\u6587\u5B57\u6240\u5C5E\u7528\u6237
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="\u6587\u7AE0\u5217\u8868\u5173\u8054\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u5217\u8868\u5173\u8054\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> \u6587\u7AE0\u5217\u8868\u5173\u8054\u7528\u6237\u4FE1\u606F</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::with(&#39;user&#39;)-&gt;get()-&gt;toArray();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5173\u8054\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u5220\u9664" aria-hidden="true">#</a> \u5173\u8054\u5220\u9664</h3><p>\u5220\u9664\u67D0\u7528\u6237\u4E0B\u7684\u6240\u6709\u6587\u7AE0\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);
$user-&gt;posts()-&gt;delete(); // \u5220\u9664 posts \u8868\u4E2D\u76F8\u5173\u8BB0\u5F55
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3><h4 id="\u901A\u8FC7\u5173\u8054-user-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5173\u8054-user-\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u5173\u8054 User \u6570\u636E</h4>`,53);function r(l,p){return a}var b=s(e,[["render",r]]);export{b as default};
