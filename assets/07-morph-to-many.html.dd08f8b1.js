import{e}from"./app.4aa5d636.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},s=e(`<h1 id="\u591A\u5BF9\u591A\u591A\u6001\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#\u591A\u5BF9\u591A\u591A\u6001\u5173\u8054" aria-hidden="true">#</a> \u591A\u5BF9\u591A\u591A\u6001\u5173\u8054</h1><p>\u591A\u5BF9\u591A\u591A\u6001\u6700\u5E38\u89C1\u7684\u5E94\u7528\u573A\u666F\u5C31\u662F\u6807\u7B7E\uFF0C\u6BD4\u5982\u4E00\u7BC7\u6587\u7AE0\u5BF9\u5E94\u591A\u4E2A\u6807\u7B7E\uFF0C\u4E00\u4E2A\u89C6\u9891\u4E5F\u5BF9\u5E94\u591A\u4E2A\u6807\u7B7E\uFF0C\u540C\u65F6\u4E00\u4E2A\u6807\u7B7E\u53EF\u80FD\u5BF9\u5E94\u591A\u7BC7\u6587\u7AE0\u6216\u591A\u4E2A\u89C6\u9891\uFF0C\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u201C\u591A\u5BF9\u591A\u591A\u6001\u5173\u8054\u201D\u3002</p><p>\u6B64\u65F6\u4EC5\u4EC5\u5728\u6807\u7B7E\u8868 <code>tags</code> \u4E0A\u5B9A\u4E49\u4E00\u4E2A <code>item_id</code> \u548C <code>item_type</code> \u5DF2\u7ECF\u4E0D\u591F\u4E86\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u6807\u7B7E\u53EF\u80FD\u5BF9\u5E94\u591A\u4E2A\u6587\u7AE0\u6216\u89C6\u9891\uFF0C\u90A3\u4E48\u5982\u4F55\u5EFA\u7ACB\u5173\u8054\u5173\u7CFB\u5462\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E00\u5F20\u4E2D\u95F4\u8868 <code>taggables</code> \u6765\u5B9E\u73B0\uFF1A\u8BE5\u8868\u4E2D\u5B9A\u4E49\u4E86\u6587\u7AE0/\u89C6\u9891\u4E0E\u6807\u7B7E\u7684\u5BF9\u5E94\u5173\u7CFB\u3002</p><h2 id="\u8F6F\u4EF6\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u7248\u672C" aria-hidden="true">#</a> \u8F6F\u4EF6\u7248\u672C</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="\u5173\u952E\u5B57\u548C\u8868" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57\u548C\u8868" aria-hidden="true">#</a> \u5173\u952E\u5B57\u548C\u8868</h2><ul><li><p><code>morphToMany()</code></p></li><li><p><code>morphedByMany()</code></p></li><li><p><code>attach()</code></p></li><li><p><code>detach()</code></p></li><li><p><code>sync()</code></p></li><li><p><code>toggle()</code></p></li><li><p><code>posts</code> \u3001<code>videos</code> \u3001<code>tags</code>\u3001<code>taggables</code> \u548C <code>users</code> \u8868</p></li></ul><h2 id="\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:model Post -m
php artisan make:model Video -m
php artisan make:model Tag -m
php artisan make:model Taggable -m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6</h3><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_users_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;users&#39; , function(Blueprint $table){
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;string(&#39;name&#39;);
    $table-&gt;string(&#39;email&#39; , 30)-&gt;unique();
    $table-&gt;string(&#39;password&#39;);
    $table-&gt;rememberToken();
    $table-&gt;timestamps();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;posts&#39; , function(Blueprint $table){
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;unsignedInteger(&#39;user_id&#39;);
    $table-&gt;string(&#39;title&#39; , 60);
    $table-&gt;unsignedInteger(&#39;views&#39;)-&gt;comment(&#39;\u6D4F\u89C8\u6570&#39;);
    $table-&gt;text(&#39;body&#39;);
    $table-&gt;timestamp(&#39;published_at&#39;)-&gt;nullable();
    $table-&gt;timestamps();

    $table-&gt;foreign(&#39;user_id&#39;)
        -&gt;references(&#39;id&#39;)
        -&gt;on(&#39;users&#39;)
        -&gt;onUpdate(&#39;cascade&#39;)
        -&gt;onDelete(&#39;cascade&#39;);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_videos_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;videos&#39; , function(Blueprint $table){
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;unsignedInteger(&#39;user_id&#39;)-&gt;comment(&#39;\u7528\u6237id&#39;);
    $table-&gt;unsignedTinyInteger(&#39;status&#39;)-&gt;comment(&#39;\u6570\u636E\u72B6\u6001&#39;);
    $table-&gt;string(&#39;title&#39; , 30)-&gt;comment(&#39;\u6807\u9898&#39;);
    $table-&gt;string(&#39;description&#39; , 120)-&gt;comment(&#39;\u63CF\u8FF0&#39;);
    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;\u5185\u5BB9&#39;);
    $table-&gt;timestamps();

    $table-&gt;foreign(&#39;user_id&#39;)
        -&gt;references(&#39;id&#39;)
        -&gt;on(&#39;users&#39;)
        -&gt;onUpdate(&#39;cascade&#39;)
        -&gt;onDelete(&#39;cascade&#39;);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_tags_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;tags&#39;, function (Blueprint $table) {
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;string(&#39;name&#39;,20)-&gt;default(&#39;&#39;)-&gt;comment(&#39;\u6807\u7B7E\u540D&#39;);
    $table-&gt;timestamps();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_taggables_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;taggables&#39; , function(Blueprint $table){
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;unsignedInteger(&#39;taggable_id&#39;)-&gt;comment(&#39;\u6570\u636Eid&#39;);
    $table-&gt;string(&#39;taggable_type&#39; , 40)-&gt;comment(&#39;\u5173\u8054\u6A21\u578B&#39;);
    $table-&gt;unsignedInteger(&#39;tag_id&#39;)-&gt;comment(&#39;\u6807\u7B7Eid&#39;);
    $table-&gt;timestamps();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FD0\u884C php artisan \u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\u6570\u636E\u5E93\u5C06\u751F\u6210\u4E03\u5F20\u8868\uFF0C migrations password_resets posts taggables tags users videos</p></blockquote><h2 id="\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" aria-hidden="true">#</a> \u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684 fillable \u5C5E\u6027</h2><p>\u5728 <code>Post</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function tags()
{
  return $this-&gt;morphToMany(&#39;App\\Tag&#39;,&#39;taggable&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728 <code>Video</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function tags()
{
  return $this-&gt;morphToMany(&#39;App\\Tag&#39;,&#39;taggable&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728 <code>Tag</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public $timestamps = false;

// \u591A\u5BF9\u591A\u591A\u6001\u5173\u8054
public function posts()
{
return $this-&gt;morphedByMany(&#39;App\\Post&#39;,&#39;taggable&#39;)-&gt;withTimestamps();
}
// \u591A\u5BF9\u591A\u591A\u6001\u5173\u8054
public function videos()
{
return $this-&gt;morphedByMany(&#39;App\\Video&#39;,&#39;taggable&#39;)-&gt;withTimestamps();
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528 tinker \u586B\u5145\u6570\u636E</h2><p>\u4FEE\u6539\xA0<code>/databases/factories/ModelFactory.php</code>\uFF0C\u65B0\u589E\u5173\u8054\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */
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
        &#39;title&#39; =&gt; $faker-&gt;title,
        &#39;body&#39; =&gt; $faker-&gt;text(),
        &#39;views&#39; =&gt; $faker-&gt;numberBetween(0, 1000),
    ];
});

$factory-&gt;define(App\\Video::class, function (Faker\\Generator $faker) {
    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();
    return [
        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids),
        &#39;title&#39; =&gt; $faker-&gt;title,
        &#39;body&#39; =&gt; $faker-&gt;text(),
        &#39;description&#39; =&gt; $faker-&gt;title,
        &#39;status&#39; =&gt; 1
    ];
});

$factory-&gt;define(App\\Tag::class, function (Faker\\Generator $faker) {
    return [
        &#39;name&#39; =&gt; $faker-&gt;lastName,
    ];
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u4F7F\u7528 tinker \u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan tinker

## \u8FDB\u5165\u5230 tinker \u754C\u9762\u6267\u884C\u5982\u4E0B\u547D\u4EE4
namespace App
factory(User::class,4)-&gt;create(); // \u751F\u62104\u4E2A\u7528\u6237
factory(Post::class,20)-&gt;create() // \u751F\u621020\u6761 posts \u8868\u7684\u6D4B\u8BD5\u6570\u636E
factory(Video::class,20)-&gt;create() // \u751F\u621020\u6761 videos \u8868\u7684\u6D4B\u8BD5\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5173\u8054\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u64CD\u4F5C" aria-hidden="true">#</a> \u5173\u8054\u64CD\u4F5C</h2><h3 id="\u65B0\u589E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6570\u636E" aria-hidden="true">#</a> \u65B0\u589E\u6570\u636E</h3><h4 id="\u6DFB\u52A0\u4E00\u4E2A\u6587\u7AE0\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E00\u4E2A\u6587\u7AE0\u6807\u7B7E" aria-hidden="true">#</a> \u6DFB\u52A0\u4E00\u4E2A\u6587\u7AE0\u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag = new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 1.&#39;]);
$post = \\App\\Post::find(1);
$post-&gt;tags()-&gt;save($tag); // \u65B0\u589E\u7684 \`tag\` \u6A21\u578B\u4E2D \`taggable_id\` \u548C \`taggable_type\` \u5B57\u6BB5\u4F1A\u88AB\u81EA\u52A8\u8BBE\u5B9A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u6DFB\u52A0\u591A\u4E2A\u6587\u7AE0\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u591A\u4E2A\u6587\u7AE0\u6807\u7B7E" aria-hidden="true">#</a> \u6DFB\u52A0\u591A\u4E2A\u6587\u7AE0\u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tags = [
    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;]),
    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;])
];
$post = \\App\\Post::find(2);
$post-&gt;tags()-&gt;saveMany($tags); // \u65B0\u589E\u7684 \`tag\` \u6A21\u578B\u4E2D \`taggable_id\` \u548C \`taggable_type\` \u5B57\u6BB5\u4F1A\u88AB\u81EA\u52A8\u8BBE\u5B9A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="\u6DFB\u52A0\u4E00\u4E2A\u89C6\u9891\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E00\u4E2A\u89C6\u9891\u6807\u7B7E" aria-hidden="true">#</a> \u6DFB\u52A0\u4E00\u4E2A\u89C6\u9891\u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag = new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;]);
$video = \\App\\Video::find(2);
$video-&gt;tags()-&gt;save($tag); // \u65B0\u589E\u7684 \`tag\` \u6A21\u578B\u4E2D \`taggable_id\` \u548C \`taggable_type\` \u5B57\u6BB5\u4F1A\u88AB\u81EA\u52A8\u8BBE\u5B9A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u6DFB\u52A0\u591A\u4E2A\u89C6\u9891\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u591A\u4E2A\u89C6\u9891\u6807\u7B7E" aria-hidden="true">#</a> \u6DFB\u52A0\u591A\u4E2A\u89C6\u9891\u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tags = [
    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Video Tag For 1.&#39;]),
    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Video Tag For 1.&#39;]),
];
$video = \\App\\Video::find(1);
$video-&gt;tags()-&gt;saveMany($tags);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E</h3><h4 id="\u5220\u9664\u4E00\u7BC7\u6587\u7AE0\u4E0B\u7684\u6240\u6709\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u7BC7\u6587\u7AE0\u4E0B\u7684\u6240\u6709\u6807\u7B7E" aria-hidden="true">#</a> \u5220\u9664\u4E00\u7BC7\u6587\u7AE0\u4E0B\u7684\u6240\u6709\u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1);

$post-&gt;tags()-&gt;delete();  // \u5220\u9664tags Table \u4E2D\u7684\u5173\u8054\u6570\u636E
$post-&gt;tags()-&gt;detach(); // \u540C\u6B65\u5220\u9664 toggables Table\u4E2D\u7684\u5173\u8054\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3><h4 id="\u67E5\u8BE2\u4E00\u7BC7\u6587\u7AE0\u7684\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u4E00\u7BC7\u6587\u7AE0\u7684\u6807\u7B7E" aria-hidden="true">#</a> \u67E5\u8BE2\u4E00\u7BC7\u6587\u7AE0\u7684\u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(2);
$tags = $post-&gt;tags;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u67E5\u8BE2\u4E00\u4E2A\u89C6\u9891\u7684\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u4E00\u4E2A\u89C6\u9891\u7684\u6807\u7B7E" aria-hidden="true">#</a> \u67E5\u8BE2\u4E00\u4E2A\u89C6\u9891\u7684\u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$video = \\App\\Video::find(1);
$tags = $video-&gt;tags;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u67E5\u8BE2\u6807\u7B7E\u5BF9\u5E94\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6807\u7B7E\u5BF9\u5E94\u8282\u70B9" aria-hidden="true">#</a> \u67E5\u8BE2\u6807\u7B7E\u5BF9\u5E94\u8282\u70B9</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag = \\App\\Tag::find(1);
$posts = $tag-&gt;posts;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u7F16\u8F91\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u6570\u636E" aria-hidden="true">#</a> \u7F16\u8F91\u6570\u636E</h3><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><h3 id="\u5EFA\u7ACB\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u5173\u8054" aria-hidden="true">#</a> \u5EFA\u7ACB\u5173\u8054</h3><h4 id="tags-\u8DDF-videos-posts-\u505A\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#tags-\u8DDF-videos-posts-\u505A\u5173\u8054" aria-hidden="true">#</a> <code>tags</code>\xA0\u8DDF\xA0<code>videos</code>,\xA0<code>posts</code>\xA0\u505A\u5173\u8054</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag-&gt;videos()-&gt;attach($video-&gt;id);

$tag-&gt;posts()-&gt;attach($post-&gt;id);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="videos-posts-\u8DDF-tag-\u505A\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#videos-posts-\u8DDF-tag-\u505A\u5173\u8054" aria-hidden="true">#</a> <code>videos</code>,\xA0<code>posts</code>\xA0\u8DDF\xA0<code>tag</code>\xA0\u505A\u5173\u8054</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$videos-&gt;tags()-&gt;attach($tag-&gt;id);

$post-&gt;tags()-&gt;attach($tag-&gt;id);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u5C06\u89C6\u9891\u6216\u8005\u6587\u5B57\u6DFB\u52A0\u67D0\u4E2A\u6807\u7B7E</p></blockquote><h4 id="\u5220\u9664\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5173\u8054" aria-hidden="true">#</a> \u5220\u9664\u5173\u8054</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag-&gt;videos()-&gt;detach($vedio-&gt;id);

$tag-&gt;posts()-&gt;detach($post-&gt;id);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,65);function r(t,l){return s}var c=a(n,[["render",r]]);export{c as default};
