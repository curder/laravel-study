import{e as n}from"./app.ac22b6cd.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<h1 id="\u591A\u6001\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#\u591A\u6001\u5173\u8054" aria-hidden="true">#</a> \u591A\u6001\u5173\u8054</h1><p>\u591A\u6001\u5173\u8054\u5141\u8BB8\u4E00\u4E2A\u6A21\u578B\u5728\u5355\u4E2A\u5173\u8054\u4E0B\u5C5E\u4E8E\u591A\u4E2A\u4E0D\u540C\u7236\u6A21\u578B\u3002\u5E38\u89C1\u7684\u591A\u6001\u5173\u8054\u5C31\u662F\u8BC4\u8BBA\uFF0C\u8BC4\u8BBA\u5185\u5BB9\u53EF\u80FD\u662F\u5C5E\u4E8E\u6587\u7AE0\u6216\u89C6\u9891\u3002</p><h2 id="\u8F6F\u4EF6\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u7248\u672C" aria-hidden="true">#</a> \u8F6F\u4EF6\u7248\u672C</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="\u5173\u952E\u5B57\u548C\u8868" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57\u548C\u8868" aria-hidden="true">#</a> \u5173\u952E\u5B57\u548C\u8868</h2><ul><li><p><code>morphTo()</code></p></li><li><p><code>morphMany()</code></p></li><li><p><code>attach()</code></p></li><li><p><code>detach()</code></p></li><li><p><code>sync()</code></p></li><li><p><code>toggle()</code></p></li><li><p><code>posts</code> \u3001<code>videos</code>\u3001<code>comments</code> \u548C <code>users</code> \u8868</p></li></ul><p>\u5E38\u89C1\u7684\u591A\u6001\u5173\u8054\u5C31\u662F\u8BC4\u8BBA\uFF0C\u73B0\u5728\u6211\u4EEC\u7684\u5185\u5BB9\u7C7B\u578B\u5305\u62EC\u6587\u7AE0\u548C\u89C6\u9891\uFF0C\u7528\u6237\u65E2\u53EF\u4EE5\u8BC4\u8BBA\u6587\u7AE0 \uFF0C\u4E5F\u53EF\u4EE5\u8BC4\u8BBA\u89C6\u9891 \u3002\u6587\u7AE0\u5B58\u5728\u6587\u7AE0\u8868 <code>posts</code>\uFF0C\u89C6\u9891\u5B58\u5728\u89C6\u9891\u8868 <code>videos</code> \uFF0C\u8BC4\u8BBA\u5B58\u5728\u8BC4\u8BBA\u8868 <code>comments</code> \uFF0C\u67D0\u4E00\u6761\u8BC4\u8BBA\u53EF\u80FD\u5F52\u5C5E\u4E8E\u67D0\u7BC7\u6587\u7AE0\uFF0C\u4E5F\u53EF\u80FD\u5F52\u5C5E\u4E8E\u67D0\u4E2A\u89C6\u9891\u3002 \u5728\u8BC4\u8BBA\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A <code>commentable_id</code> \u5B57\u6BB5\u8868\u793A\u5176\u5F52\u5C5E\u8282\u70B9 ID \uFF0C\u540C\u65F6\u5B9A\u4E49\u4E00\u4E2A <code>commentable_type</code> \u5B57\u6BB5\u8868\u793A\u5176\u5F52\u5C5E\u8282\u70B9\u7C7B\u578B\uFF0C\u6BD4\u5982 <code>App\\Post</code> \u6216\u8005 <code>App\\Video</code> \u3002</p><h2 id="\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:model  Post -m
php artisan make:model Video -m
php artisan make:model Comment -m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6</h3><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_users_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  Schema::create(&#39;users&#39; , function(Blueprint $table){
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;string(&#39;name&#39;);
    $table-&gt;string(&#39;email&#39; , 30)-&gt;unique();
    $table-&gt;string(&#39;password&#39;);
    $table-&gt;rememberToken();
    $table-&gt;timestamps();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;posts&#39;, function (Blueprint $table) {
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_videos_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;videos&#39; , function(Blueprint $table){
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;unsignedInteger(&#39;user_id&#39;)-&gt;comment(&#39;\u7528\u6237id&#39;);
    $table-&gt;string(&#39;title&#39; , 30)-&gt;comment(&#39;\u6807\u9898&#39;);
    $table-&gt;string(&#39;description&#39; , 120)-&gt;comment(&#39;\u63CF\u8FF0&#39;);
    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;\u5185\u5BB9&#39;);
    $table-&gt;unsignedTinyInteger(&#39;status&#39;)-&gt;comment(&#39;\u6570\u636E\u72B6\u6001&#39;);
    $table-&gt;timestamps();

    $table-&gt;foreign(&#39;user_id&#39;)
        -&gt;references(&#39;id&#39;)
        -&gt;on(&#39;users&#39;)
        -&gt;onUpdate(&#39;cascade&#39;)
        -&gt;onDelete(&#39;cascade&#39;);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_comments_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;comments&#39; , function(Blueprint $table){
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;unsignedInteger(&#39;user_id&#39;);
    $table-&gt;unsignedInteger(&#39;commentable_id&#39;)-&gt;comment(&#39;\u8BC4\u8BBA\u6240\u5728\u8868\u6570\u636Eid&#39;);
    $table-&gt;string(&#39;commentable_type&#39; , 60)-&gt;comment(&#39;\u8BC4\u8BBA\u6240\u5C5E\u6A21\u578B&#39;);
    $table-&gt;char(1)-&gt;notNull()-&gt;default(&#39;F&#39;)-&gt;comment(&#39;\u6570\u636E\u72B6\u6001&#39;);
    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;\u8BC4\u8BBA\u5185\u5BB9&#39;);

    $table-&gt;timestamps();

    $table-&gt;foreign(&#39;user_id&#39;)
        -&gt;references(&#39;id&#39;)
        -&gt;on(&#39;users&#39;)
        -&gt;onUpdate(&#39;cascade&#39;)
        -&gt;onDelete(&#39;cascade&#39;);
});
// \u6CE8\u610F\uFF1A \u8FD9\u91CC \`commentable_id\` \u548C \`commentable_type\`\uFF0C\u5B57\u6BB5\u524D\u7F00\u4E0E\u6A21\u578B\u7684\u65B9\u6CD5\u4FDD\u6301\u4E00\u4E9B\u3002\u6BD4\u5982\u8FD9\u5217\u4F7F\u7528 \`commentable_\` \u90A3\u4E48\u5B9A\u4E49\u7684\u5173\u8054\u65B9\u6CD5\u4E3A \`commentable()\`
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FD0\u884C php artisan \u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\u6570\u636E\u5E93\u5C06\u751F\u6210\u516D\u5F20\u8868\uFF0C\u5982\u4E0B\uFF1A</p><ul><li>migrations</li><li>password_resets</li><li>users</li><li>commons</li><li>posts</li><li>videos</li></ul></blockquote><h2 id="\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" aria-hidden="true">#</a> \u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684 fillable \u5C5E\u6027</h2><p>\u5728 <code>User</code> \u6A21\u578B\u4E2D\u7684\u5BF9\u5E94\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function comments()
{
    /**
     * Comment::class related \u5173\u8054\u6A21\u578B
     * id foreignKey \u5173\u8054\u8868\u5B57\u6BB5
     * user_id localKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
     */
    return $this-&gt;hasMany(\\App\\Comment::class , &#39;user_id&#39; , &#39;id&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728 <code>Post</code> \u6A21\u578B\u4E2D\u7684\u5BF9\u5E94\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected $fillable = [&#39;user_id&#39; , &#39;title&#39; , &#39;body&#39; , &#39;published_at&#39;];

public function user()
{
    /**
     * User::class related \u5173\u8054\u6A21\u578B
     * id foreignKey \u8868 User::table \u7684\u5173\u8054\u5B57\u6BB5
     * user_id localKey \u5173\u8054\u8868\u5B57\u6BB5
     */
    return $this-&gt;hasOne(\\App\\User::class , &#39;id&#39; , &#39;user_id&#39;);
}

public function comments()
{
    /**
     * @param  string $related  \u5173\u8054\u6A21\u578B
     * @param  string $name     \u5173\u8054\u7684\u540D\u79F0\uFF0C\u6A21\u578B\u7684\u65B9\u6CD5\u540D\u79F0
     * @param  string $type     \u5173\u8054\u7684\u5B57\u6BB5type
     * @param  string $id       \u5173\u8054\u7684\u5B57\u6BB5id
     * @param  string $localKey \u5F53\u524D\u6A21\u578B\u7684\u4E3B\u952Eid
     */
    return $this-&gt;morphMany(Comment::class , &#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39; , &#39;id&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u5728 <code>Video</code> \u6A21\u578B\u4E2D\u7684\u5BF9\u5E94\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected $fillable = [&#39;user_id&#39; , &#39;title&#39; , &#39;description&#39; , &#39;content&#39; , &#39;status&#39;];

public function user()
{
    /**
     * User::class related \u5173\u8054\u6A21\u578B
     * id foreignKey \u8868 User::table \u7684\u5173\u8054\u5B57\u6BB5
     * user_id localKey \u5173\u8054\u8868\u5B57\u6BB5
     */
    return $this-&gt;hasOne(\\App\\User::class , &#39;id&#39; , &#39;user_id&#39;);
}

public function comments()
{
    /**
     * @param  string $related  \u5173\u8054\u6A21\u578B
     * @param  string $name     \u5173\u8054\u7684\u540D\u79F0\uFF0C\u6A21\u578B\u7684\u65B9\u6CD5\u540D\u79F0
     * @param  string $type     \u5173\u8054\u7684\u5B57\u6BB5type
     * @param  string $id       \u5173\u8054\u7684\u5B57\u6BB5id
     * @param  string $localKey \u5F53\u524D\u6A21\u578B\u7684\u4E3B\u952Eid
     */
    return $this-&gt;morphMany(\\App\\Comment::class , &#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39; , &#39;id&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u5728 <code>Comment</code> \u6A21\u578B\u4E2D\u7684\u5BF9\u5E94\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected $fillable = [&#39;user_id&#39; , &#39;body&#39;];


public function commentable()
{
    /**
     * @param  string $name \u4E0E\u6570\u636E\u5E93\u7684 commentable \u524D\u7F00\u4FDD\u6301\u4E00\u81F4,\u5E76\u4E14\u65B9\u6CD5\u540D\u8981\u4E0E\u4E4B\u4E00\u81F4
     * @param  string $type \u4E0E\u6570\u636E\u5E93\u7684 commentable_type \u5B57\u6BB5\u4FDD\u6301\u4E00\u81F4
     * @param  string $id   \u4E0E\u6570\u636E\u5E93\u7684 commentable_id \u5B57\u6BB5\u4FDD\u6301\u4E00\u81F4
     */
    return $this-&gt;morphTo(&#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39;);
}

public function user()
{
    /**
     * User::class related \u5173\u8054\u6A21\u578B
     * user_id ownerKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
     * id relation \u5173\u8054\u8868\u5B57\u6BB5
     */
    return $this-&gt;belongsTo(&#39;App\\User&#39; , &#39;user_id&#39; , &#39;id&#39;);
}

public function post()
{
    /**
     * Post::class related \u5173\u8054\u6A21\u578B
     * commentable_id ownerKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
     * id relation \u5173\u8054\u8868\u5B57\u6BB5
     */
    return $this-&gt;belongsTo(&#39;App\\Post&#39; , &#39;commentable_id&#39; , &#39;id&#39;);
}

public function video()
{
    /**
     * Post::class related \u5173\u8054\u6A21\u578B
     * commentable_id ownerKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
     * id relation \u5173\u8054\u8868\u5B57\u6BB5
     */
    return $this-&gt;belongsTo(&#39;App\\Video&#39;, &#39;commentable_id&#39; , &#39;id&#39;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="\u4F7F\u7528-tinker-\u586B\u5145\u6D4B\u8BD5\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-tinker-\u586B\u5145\u6D4B\u8BD5\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528 tinker \u586B\u5145\u6D4B\u8BD5\u6570\u636E</h2><p>\u4FEE\u6539\xA0<code>/databases/factories/ModelFactory.php</code>\uFF0C\u4FEE\u6539\u5173\u8054\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */
$factory-&gt;define(App\\User::class , function(Faker\\Generator $faker){
    static $password;

    return [
        &#39;name&#39;           =&gt; $faker-&gt;name ,
        &#39;email&#39;          =&gt; $faker-&gt;unique()-&gt;safeEmail ,
        &#39;password&#39;       =&gt; $password ? : $password = bcrypt(&#39;secret&#39;) ,
        &#39;remember_token&#39; =&gt; str_random(10) ,
    ];
});

$factory-&gt;define(App\\Post::class , function(Faker\\Generator $faker){
    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();

    return [
        &#39;user_id&#39;      =&gt; $faker-&gt;randomElement($user_ids) ,
        &#39;title&#39;        =&gt; $faker-&gt;title ,
        &#39;body&#39;         =&gt; $faker-&gt;paragraph ,
        &#39;published_at&#39; =&gt; $faker-&gt;time(&#39;Y-m-d H:i:s&#39;) ,
    ];
});
$factory-&gt;define(App\\Video::class , function(Faker\\Generator $faker){
    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();

    return [
        &#39;user_id&#39;     =&gt; $faker-&gt;randomElement($user_ids) ,
        &#39;title&#39;       =&gt; $faker-&gt;title ,
        &#39;description&#39; =&gt; $faker-&gt;title ,
        &#39;body&#39;     =&gt; $faker-&gt;paragraph ,
        &#39;status&#39;      =&gt; 1
    ];
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u4F7F\u7528 tinker \u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan tinker

## \u8FDB\u5165\u5230 tinker \u754C\u9762\u6267\u884C\u5982\u4E0B\u547D\u4EE4
namespace App
factory(User::class,5)-&gt;create(); // \u751F\u62105\u4E2A\u7528\u6237
factory(Post::class,10)-&gt;create() // \u751F\u621010\u6761 posts \u8868\u7684\u6D4B\u8BD5\u6570\u636E
factory(Video::class,10)-&gt;create(); // \u751F\u621010\u6761 videos \u8868\u7684\u6D4B\u8BD5\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u81F3\u6B64\uFF0C\u4E0A\u9762\u7684 <code>users</code> \u3001<code>posts</code> \u548C <code>videos</code> \u8868\u6570\u636E\u90FD\u5DF2\u586B\u5145\u5B8C\u6BD5\u3002</p><h2 id="\u5173\u8054\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u64CD\u4F5C" aria-hidden="true">#</a> \u5173\u8054\u64CD\u4F5C</h2><h3 id="\u65B0\u589E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6570\u636E" aria-hidden="true">#</a> \u65B0\u589E\u6570\u636E</h3><h4 id="\u6DFB\u52A0\u4E00\u4E2A\u6587\u7AE0\u8BC4\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E00\u4E2A\u6587\u7AE0\u8BC4\u8BBA" aria-hidden="true">#</a> \u6DFB\u52A0\u4E00\u4E2A\u6587\u7AE0\u8BC4\u8BBA</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1);
$comment = new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Post 1.&#39; , &#39;user_id&#39; =&gt; \\Auth::user()-&gt;id]);
$post-&gt;comments()-&gt;save($comment); // \u65B0\u589E\u7684 \`comment\` \u6A21\u578B\u4E2D \`commentable_id\` \u548C \`commentable_type\` \u5B57\u6BB5\u4F1A\u88AB\u81EA\u52A8\u8BBE\u5B9A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u6DFB\u52A0\u591A\u6761\u6587\u7AE0\u8BC4\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u591A\u6761\u6587\u7AE0\u8BC4\u8BBA" aria-hidden="true">#</a> \u6DFB\u52A0\u591A\u6761\u6587\u7AE0\u8BC4\u8BBA</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user_id = \\Auth::user()-&gt;id;
$comments = [
    new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id]) ,
    new \\App\\Comment([&#39;body&#39; =&gt; &#39;Another comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id]) ,
    new \\App\\Comment([&#39;body&#39; =&gt; &#39;The latest comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id])
];
$post = \\App\\Post::find(2);
$post-&gt;comments()-&gt;saveMany($comments);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="\u6DFB\u52A0\u89C6\u9891\u8BC4\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u89C6\u9891\u8BC4\u8BBA" aria-hidden="true">#</a> \u6DFB\u52A0\u89C6\u9891\u8BC4\u8BBA</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user_id = \\Auth::user()-&gt;id;
$video = \\App\\Video::find(10);
$comment = new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new Comment For Video 10.&#39;, &#39;user_id&#39; =&gt; $user_id]);
$video-&gt;comments()-&gt;save($comment); //
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u6DFB\u52A0\u591A\u6761\u89C6\u9891\u8BC4\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u591A\u6761\u89C6\u9891\u8BC4\u8BBA" aria-hidden="true">#</a> \u6DFB\u52A0\u591A\u6761\u89C6\u9891\u8BC4\u8BBA</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user_id = \\Auth::user()-&gt;id;
$comments = [
    new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id]) ,
    new \\App\\Comment([&#39;body&#39; =&gt; &#39;Another comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id]) ,
    new \\App\\Comment([&#39;body&#39; =&gt; &#39;The latest comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id])
];
$video = \\App\\Video::find(5);
$video-&gt;comments()-&gt;saveMany($comments);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u8BE2\u4E00\u7BC7\u6587\u7AE0\u4E0B\u7684\u8BC4\u8BBA\u548C\u53D1\u5E03\u8BC4\u8BBA\u8005
$comments = \\App\\Post::find(1)-&gt;with([&#39;user&#39; , &#39;comments&#39;])-&gt;first();

// \u901A\u8FC7\u8BC4\u8BBA\u67E5\u8BE2\u51FA\u6570\u636E\u548C\u53D1\u5E03\u8BC4\u8BBA\u7684\u7528\u6237\u4FE1\u606F
$commentable = \\App\\Comment::find(1)-&gt;commentable()-&gt;with(&#39;user&#39;)-&gt;first();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E</h3><h4 id="\u5220\u9664\u4E00\u7BC7\u6587\u7AE0\u4E0B\u7684\u6240\u6709\u8BC4\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u7BC7\u6587\u7AE0\u4E0B\u7684\u6240\u6709\u8BC4\u8BBA" aria-hidden="true">#</a> \u5220\u9664\u4E00\u7BC7\u6587\u7AE0\u4E0B\u7684\u6240\u6709\u8BC4\u8BBA</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1);
$post-&gt;comments()-&gt;delete();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u5220\u9664\u7528\u6237\u7684\u6240\u6709\u8BC4\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u7528\u6237\u7684\u6240\u6709\u8BC4\u8BBA" aria-hidden="true">#</a> \u5220\u9664\u7528\u6237\u7684\u6240\u6709\u8BC4\u8BBA</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);
$user-&gt;comments()-&gt;delete();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3>`,54);function r(l,p){return a}var b=e(s,[["render",r]]);export{b as default};
