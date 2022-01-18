import{e}from"./app.c8e1e5e7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=e(`<h1 id="\u591A\u5BF9\u591A" tabindex="-1"><a class="header-anchor" href="#\u591A\u5BF9\u591A" aria-hidden="true">#</a> \u591A\u5BF9\u591A</h1><p>\u6570\u636E\u8868\u4E4B\u95F4\u5F80\u5F80\u4E0D\u662F\u5B64\u7ACB\u7684\uFF0C\u800C\u662F\u7EB5\u6A2A\u4EA4\u53C9\u3001\u76F8\u4E92\u5173\u8054\u7684\uFF0C\u6BD4\u5982\u4E00\u4E2A\u7528\u6237\u5BF9\u5E94\u591A\u4E2A\u89D2\u8272\uFF0C\u4E00\u4E2A\u89D2\u8272\u62E5\u6709\u591A\u4E2A\u7528\u6237\u7B49\u7C7B\u4F3C\u7684\u591A\u5BF9\u591A\u5173\u8054\u3002</p><h2 id="\u8F6F\u4EF6\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u7248\u672C" aria-hidden="true">#</a> \u8F6F\u4EF6\u7248\u672C</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="\u5173\u952E\u5B57\u548C\u8868" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57\u548C\u8868" aria-hidden="true">#</a> \u5173\u952E\u5B57\u548C\u8868</h2><ul><li><p><code>belongsToMany()</code></p></li><li><p><code>attach()</code></p></li><li><p><code>detach()</code></p></li><li><p><code>sync()</code></p></li><li><p><code>toggle()</code></p></li><li><p><code>roles</code> \u3001<code>role_user</code> \u548C <code>users</code> \u8868</p></li><li><p><code>User</code> \u3001<code>Role</code> \u548C <code>RoleUser</code> \u6A21\u578B</p></li></ul><p>\u4E00\u79CD\u5E38\u89C1\u7684\u5173\u8054\u5173\u7CFB\u662F\u591A\u5BF9\u591A\uFF0C\u5373\u8868A\u7684\u67D0\u6761\u8BB0\u5F55\u901A\u8FC7\u4E2D\u95F4\u8868 C \u4E0E\u8868 B \u7684\u591A\u6761\u8BB0\u5F55\u5173\u8054\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002\u6BD4\u5982\u4E00\u4E2A\u7528\u6237\u6709\u591A\u79CD\u89D2\u8272\uFF0C\u53CD\u4E4B\u4E00\u4E2A\u89D2\u8272\u5BF9\u5E94\u591A\u4E2A\u7528\u6237\u3002 \u3000\u3000\u6BD4\u5982\u7528\u6237\u4E0E\u89D2\u8272\u7EC4\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u6211\u4EEC\u5EFA\u7ACB\u4E00\u4E2A\u4E2D\u95F4\u8868 <code>role_user</code>\uFF0C\u8FD9\u4E2A\u8868\u5173\u8054\u7528\u6237\u8868 <code>users</code> <strong>(\u4F7F\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684users\u8868)</strong> \u548C <code>roles</code> \u8868\uFF0C\u5982\u4E0B</p><h2 id="\u751F\u6210\u8FC1\u79FB\u6587\u4EF6\u548C\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u8FC1\u79FB\u6587\u4EF6\u548C\u6A21\u578B" aria-hidden="true">#</a> \u751F\u6210\u8FC1\u79FB\u6587\u4EF6\u548C\u6A21\u578B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:migration create_role_user_table --create=role_user

php artisan make:model Role -m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6</h3><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_users_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;users&#39;, function (Blueprint $table) {
    $table-&gt;increments(&#39;id&#39;);
    $table-&gt;string(&#39;name&#39;);
    $table-&gt;string(&#39;email&#39;,30)-&gt;unique();
    $table-&gt;string(&#39;password&#39;);
    $table-&gt;rememberToken();
    $table-&gt;timestamps();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_roles_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;roles&#39;, function (Blueprint $table) {
    $table-&gt;increments(&#39;id&#39;)-&gt;comment(&#39;\u89D2\u8272ID&#39;);
    $table-&gt;string(&#39;name&#39;,20)-&gt;unique()-&gt;comment(&#39;\u89D2\u8272\u82F1\u6587\u540D\u79F0&#39;);
    $table-&gt;char(&#39;display_name&#39;,20)-&gt;nullable()-&gt;comment(&#39;\u89D2\u8272\u4E2D\u6587\u540D\u79F0&#39;);
    $table-&gt;string(&#39;description&#39;,180)-&gt;nullable()-&gt;comment(&#39;\u89D2\u8272\u7B80\u8981\u63CF\u8FF0&#39;);
    $table-&gt;timestamps();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6587\u4EF6 <code>&lt;project&gt;/database/migrate/*_create_role_user_table.php</code> \u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;role_user&#39; , function(Blueprint $table){
    $table-&gt;unsignedInteger(&#39;user_id&#39;)-&gt;comment(&#39;\u7528\u6237id\uFF0C\u5173\u8054users\u8868&#39;);
    $table-&gt;unsignedInteger(&#39;role_id&#39;)-&gt;comment(&#39;\u89D2\u8272id\uFF0C\u5173\u8054roles\u8868&#39;);

    $table-&gt;foreign(&#39;user_id&#39;)-&gt;references(&#39;id&#39;)-&gt;on(&#39;users&#39;)
        -&gt;onUpdate(&#39;cascade&#39;)-&gt;onDelete(&#39;cascade&#39;);
    $table-&gt;foreign(&#39;role_id&#39;)-&gt;references(&#39;id&#39;)-&gt;on(&#39;roles&#39;)
        -&gt;onUpdate(&#39;cascade&#39;)-&gt;onDelete(&#39;cascade&#39;);

    $table-&gt;primary([&#39;user_id&#39; , &#39;role_id&#39;]);
    $table-&gt;timestamps();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FD0\u884C php artisan \u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\u6570\u636E\u5E93\u5C06\u751F\u6210\u4E94\u5F20\u8868\uFF0C migrations password_resets users roles role_user</p></blockquote><h2 id="\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" aria-hidden="true">#</a> \u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684 fillable \u5C5E\u6027</h2><p>\u5728 <code>User</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u4E0E <code>Role</code> \u6A21\u578B\u7684\u5BF9\u5E94\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function roles()
{
    /**
     * @param  string $related    \u5173\u8054\u5173\u7CFB
     * @param  string $table      \u5173\u8054\u4E2D\u95F4\u8868 \u4E0D\u586B\u8FD9\u91CC\u9ED8\u8BA4\u4E3A role_user \u89C4\u5219\u4E3A\uFF1AStr::snake(class_basename($related)). &#39;_&#39; . Str::snake(class_basename($this)) \u5E76\u5728\u6570\u636E\u62FC\u63A5\u524D\u4F7F\u7528 sort() \u6392\u5E8F\uFF1B
     * @param  string $foreignKey \u5F53\u524D\u6A21\u578B\u7684\u5916\u952Eid,\u4E0D\u586B\u9ED8\u8BA4\u4E3A user_id \u89C4\u5219\u4E3A\uFF1AStr::snake(class_basename($this)).&#39;_&#39;.$this-&gt;primaryKey;
     * @param  string $relatedKey \u5173\u8054\u6A21\u578B\u7684\u5916\u952Eid\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u4E3A role_id \u89C4\u5219\u4E3A\uFF1AStr::snake(class_basename($related)).&#39;_&#39;.$related-&gt;primaryKey
     * @param  string $relation   \u5173\u8054\u65B9\u6CD5\u540D \u4E0D\u586B\u9ED8\u8BA4\u4E3Aroles
     */
    return $this-&gt;belongsToMany(&#39;App\\Role&#39; , &#39;role_user&#39; , &#39;user_id&#39; , &#39;role_id&#39; , &#39;roles&#39;)-&gt;withTimestamps();
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728 <code>Role</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u4E0E <code>User</code> \u6A21\u578B\u7684\u5173\u8054\u5BF9\u5E94\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function users()
{
    /**
     * @param  string $related    \u5173\u8054\u5173\u7CFB
     * @param  string $table      \u5173\u8054\u4E2D\u95F4\u8868 \u4E0D\u586B\u9ED8\u8BA4\u4E3A role_user \u89C4\u5219\u4E3A\uFF1AStr::snake(class_basename($related)). &#39;_&#39; . Str::snake(class_basename($this)) \u5E76\u5728\u6570\u636E\u62FC\u63A5\u524D\u4F7F\u7528 sort() \u6392\u5E8F\uFF1B
     * @param  string $foreignKey \u5F53\u524D\u6A21\u578B\u7684\u5916\u952Eid,\u4E0D\u586B\u9ED8\u8BA4\u4E3A role_id \u89C4\u5219\u4E3A\uFF1AStr::snake(class_basename($this)).&#39;_&#39;.$this-&gt;primaryKey;
     * @param  string $relatedKey \u5173\u8054\u6A21\u578B\u7684\u5916\u952Eid\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u4E3A user_id \u89C4\u5219\u4E3A\uFF1AStr::snake(class_basename($related)).&#39;_&#39;.$related-&gt;primaryKey
     * @param  string $relation   \u5173\u8054\u65B9\u6CD5\u540D \u4E0D\u586B\u9ED8\u8BA4\u4E3A users
     */
    return $this-&gt;belongsToMany(User::class , &#39;role_user&#39; , &#39;role_id&#39; , &#39;user_id&#39; , &#39;users&#39;)
                      -&gt;withPivot([&#39;created_at&#39;,&#39;updated_at&#39;]) // \u4E2D\u95F4\u8868\u7684\u5B57\u6BB5\uFF0C\u8FD9\u91CC\u7684\u4E2D\u95F4\u8868\u662F role_user
                      -&gt;withTimestamps();
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u5982\u679C\u60F3\u8981\u4E2D\u95F4\u8868\u81EA\u52A8\u7EF4\u62A4\xA0<code>created_at</code>\xA0\u548C\xA0<code>updated_at</code>\xA0\u65F6\u95F4\u6233\uFF0C\u53EF\u5728\u5B9A\u4E49\u5173\u8054\u65B9\u6CD5\u65F6\u52A0\u4E0A\xA0<code>withTimestamps()</code>\xA0\u65B9\u6CD5</p></blockquote><h2 id="\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528 tinker \u586B\u5145\u6570\u636E</h2><p>\u4FEE\u6539\xA0<code>/databases/factories/ModelFactory.php</code>\uFF0C\u65B0\u589E\u5173\u8054\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */
$factory-&gt;define(App\\User::class , function(Faker\\Generator $faker){
    static $password;

    return [
        &#39;name&#39;           =&gt; $faker-&gt;name ,
        &#39;email&#39;          =&gt; $faker-&gt;unique()-&gt;safeEmail ,
        &#39;password&#39;       =&gt; $password ? : $password = bcrypt(&#39;secret&#39;) ,
        &#39;remember_token&#39; =&gt; str_random(10) ,
    ];
});

$factory-&gt;define(App\\Role::class , function(Faker\\Generator $faker){
    return [
        &#39;name&#39;         =&gt; $faker-&gt;name ,
        &#39;display_name&#39; =&gt; $faker-&gt;name ,
        &#39;description&#39;  =&gt; $faker-&gt;text(150) ,
    ];
});
$factory-&gt;define(App\\RoleUser::class , function(Faker\\Generator $faker){
    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();
    $role_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();

    return [
        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids) ,
        &#39;role_id&#39; =&gt; $faker-&gt;randomElement($role_ids)
    ];
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u4F7F\u7528 tinker \u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan tinker

## \u8FDB\u5165\u5230 tinker \u754C\u9762\u6267\u884C\u5982\u4E0B\u547D\u4EE4
namespace App
factory(User::class,4)-&gt;create(); // \u751F\u62104\u4E2A\u7528\u6237
factory(Role::class,4)-&gt;create() // \u751F\u62104\u6761 role_user \u8868\u7684\u6D4B\u8BD5\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u5173\u8054\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u64CD\u4F5C" aria-hidden="true">#</a> \u5173\u8054\u64CD\u4F5C</h2><h3 id="\u65B0\u589E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6570\u636E" aria-hidden="true">#</a> \u65B0\u589E\u6570\u636E</h3><h4 id="\u5C06\u7528\u6237\u5173\u8054\u5230\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u5C06\u7528\u6237\u5173\u8054\u5230\u89D2\u8272" aria-hidden="true">#</a> \u5C06\u7528\u6237\u5173\u8054\u5230\u89D2\u8272</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role_id = 2;
$user = \\App\\User::find(1);
$user-&gt;roles()-&gt;attach($role_id);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u5C06\u7528\u6237\u6279\u91CF\u653E\u5165\u5230\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u5C06\u7528\u6237\u6279\u91CF\u653E\u5165\u5230\u89D2\u8272" aria-hidden="true">#</a> \u5C06\u7528\u6237\u6279\u91CF\u653E\u5165\u5230\u89D2\u8272</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role_ids = [1,3,4];
$user = \\App\\User::find(1);
$user-&gt;roles()-&gt;attach($role_ids);

// $user-&gt;roles()-&gt;attach([1 =&gt; [&#39;attribute1&#39; =&gt; &#39;value1&#39;], 2, 3]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6709\u65F6\u53EF\u80FD\u60F3\u8981\u4F7F\u7528\u4E00\u4E2A\u547D\u4EE4\uFF0C\u5728\u5EFA\u7ACB\u65B0\u6A21\u578B\u6570\u636E\u7684\u540C\u65F6\u9644\u52A0\u5173\u8054\u3002\u53EF\u4EE5\u4F7F\u7528\xA0<code>save</code>\u65B9\u6CD5\u8FBE\u6210\u76EE\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role = new Role([&#39;name&#39; =&gt; &#39;Editor&#39;]);

\\App\\User::find(1)-&gt;roles()-&gt;save($role);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C\u65B0\u7684\xA0<code>Role</code>\xA0\u6A21\u578B\u5BF9\u8C61\u4F1A\u5728\u50A8\u5B58\u7684\u540C\u65F6\u5173\u8054\u5230\xA0<code>user</code>\xA0\u6A21\u578B\u3002\u4E5F\u53EF\u4EE5\u4F20\u5165\u5C5E\u6027\u6570\u7EC4\u628A\u6570\u636E\u52A0\u5230\u5173\u8054\u6570\u636E\u5E93\u8868\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\App\\User::find(1)-&gt;roles()-&gt;save($role, [&#39;field&#39; =&gt; &#39;value&#39;]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3><p>\u67E5\u8BE2\u7528\u6237\u6240\u62E5\u6709\u7684\u89D2\u8272</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);
$roles = $user-&gt;roles;
dd($roles-&gt;toArray());
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u67E5\u8BE2\u89D2\u8272\u4E0B\u5C5E\u7684\u6240\u6709\u7528\u6237</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role = \\App\\Role::find(2);
$users = $role-&gt;users;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5173\u8054\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u5220\u9664" aria-hidden="true">#</a> \u5173\u8054\u5220\u9664</h3><p>\u5C06\u7528\u6237\u4ECE\u89D2\u8272\u4E2D\u79FB\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role_id = 1;
$user = \\App\\User::find(1);
$user-&gt;roles()-&gt;detach($role_id);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5C06\u7528\u6237\u4ECE\u6240\u6709\u89D2\u8272\u4E2D\u79FB\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);
$user-&gt;roles()-&gt;detach();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5220\u9664\u89D2\u8272\u4E0B\u7684\u6240\u6709\u7528\u6237\u5173\u8054\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role = \\App\\Role::find(2);
$role-&gt;users()-&gt;delete();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3><h4 id="\u628A\u7528\u6237-\u540C\u6B65-\u5230\u89D2\u8272\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u628A\u7528\u6237-\u540C\u6B65-\u5230\u89D2\u8272\u4E2D" aria-hidden="true">#</a> \u628A\u7528\u6237&quot;\u540C\u6B65&quot;\u5230\u89D2\u8272\u4E2D</h4><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\xA0<code>sync</code>\xA0\u65B9\u6CD5\u9644\u52A0\u5173\u8054\u6A21\u578B\u3002\xA0<code>sync</code>\xA0\u65B9\u6CD5\u4F1A\u628A\u6839\u636E ID \u6570\u7EC4\u628A\u5173\u8054\u5B58\u5230\u4E2D\u95F4\u8868\u3002\u9644\u52A0\u5B8C\u5173\u8054\u540E\uFF0C\u4E2D\u95F4\u8868\u91CC\u7684\u6A21\u578B\u53EA\u4F1A\u5173\u8054\u5230 ID \u6570\u7EC4\u91CC\u7684 id\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);
$user-&gt;roles()-&gt;sync([1,2,4]);

$user-&gt;roles()-&gt;sync([1 =&gt; [&#39;field&#39; =&gt; &#39;value&#39;]]); // \u52A0\u5165\u5176\u4ED6\u5B57\u6BB5\u7684\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u628A\u89D2\u8272-\u540C\u6B65-\u7ED9\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u628A\u89D2\u8272-\u540C\u6B65-\u7ED9\u7528\u6237" aria-hidden="true">#</a> \u628A\u89D2\u8272&quot;\u540C\u6B65&quot;\u7ED9\u7528\u6237</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role = \\App\\Role::find(3);
$role-&gt;users()-&gt;sync([1]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u5982\u679C\u5728\u5B9A\u4E49 <code>belongsToMany()</code> \u5173\u8054\u5173\u7CFB\u7684\u65F6\u5019\uFF0C\u540C\u65F6\u60F3\u64CD\u4F5C\u4E2D\u95F4\u5173\u8054\u8868\u7684\u6570\u636E\uFF0C\u8FD9\u91CC\u6307\u7684\u662F<code>role_user</code>\xA0\u8868\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5B9A\u4E49 <code>with-&gt;withPivot($columns)</code> \uFF08\u53C2\u6570\u586B\u5199\u4E2D\u95F4\u8868\u7684\u5B57\u6BB5\uFF09 \u90A3\u4E48\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4F7F\u7528 <code>attach()</code> \u65B9\u6CD5\u7684\u65F6\u5019\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8FDB\u884C\u6570\u636E\u7684\u540C\u6B65\u66F4\u65B0\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dd($user-&gt;roles()-&gt;attach($role_id,[&#39;created_at&#39;=&gt;&#39;2019-04-24 06:08:22&#39;]));
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F53\u7136\uFF0C\u5982\u679C\u5355\u72EC\u9700\u8981\u66F4\u65B0\u4E2D\u95F4\u8868\uFF0C\u8FD9\u91CC\u6307\u7684\u662F<code>role_user</code> \u8868\u7684\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>updateExistingPivot()</code>\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role_id = 2;
$user = \\App\\User::find(1);
$user-&gt;roles()-&gt;updateExistingPivot($role_id,[&#39;created_at&#39;=&gt;&#39;2019-04-24 06:08:22&#39;]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote><h3 id="\u4E00\u4E9B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u65B9\u6CD5" aria-hidden="true">#</a> \u4E00\u4E9B\u65B9\u6CD5</h3><h4 id="toggle" tabindex="-1"><a class="header-anchor" href="#toggle" aria-hidden="true">#</a> <code>toggle</code></h4><p>\u987E\u540D\u601D\u4E49\uFF0C\u5982\u679C\u8868\u4E2D\u5B58\u5728\u5219\u5220\u9664\u6570\u636E\uFF0C\u5982\u679C\u8868\u4E2D\u4E0D\u5B58\u5728\u5219\u65B0\u589E\u6570\u636E\u3002\u8FD0\u7528\u573A\u666F\u6BD4\u5982\uFF1A\u70B9\u8D5E\u3001\u559C\u6B22\u6216\u8E29\u7B49\u5207\u6362\u64CD\u4F5C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$role_id = 2; // \u5165\u53C2 integer | array
$user = \\App\\User::find(1);
$user-&gt;roles()-&gt;toggle($role_id);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,63);function r(l,t){return a}var c=s(n,[["render",r]]);export{c as default};
