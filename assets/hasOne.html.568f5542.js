import{o as e,c as p,b as n,F as t,e as a,d as c}from"./app.49fe9016.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const o={},r=a(`<h1 id="\u4E00\u5BF9\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E00\u5BF9\u4E00" aria-hidden="true">#</a> \u4E00\u5BF9\u4E00</h1><p>\u6570\u636E\u8868\u4E4B\u95F4\u5F80\u5F80\u4E0D\u662F\u5B64\u7ACB\u7684\uFF0C\u800C\u662F\u7EB5\u6A2A\u4EA4\u53C9\u3001\u76F8\u4E92\u5173\u8054\u7684\uFF0C\u6BD4\u5982\u4E00\u4E2A\u7528\u6237\u5BF9\u5E94\u4E00\u4E2A\u8D26\u6237\uFF0C\u4E00\u4E2A\u8D26\u6237\u53EA\u5C5E\u4E8E\u4E00\u4E2A\u7528\u6237\u5C31\u5C5E\u4E8E\u4E00\u5BF9\u4E00\u5173\u8054\u3002</p><h2 id="\u8F6F\u4EF6\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u7248\u672C" aria-hidden="true">#</a> \u8F6F\u4EF6\u7248\u672C</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="\u5173\u952E\u5B57\u548C\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57\u548C\u6570\u636E\u8868" aria-hidden="true">#</a> \u5173\u952E\u5B57\u548C\u6570\u636E\u8868</h2><ul><li><p><code>hasOne()</code></p></li><li><p><code>belongsTo()</code></p></li><li><p><code>users</code> \u548C <code>user_accounts</code> \u8868</p></li></ul><p>\u6570\u636E\u64CD\u4F5C\u4E4B\u524D\u8BF7\u5148\u914D\u7F6E\u597D\uFF0C\u6570\u636E\u5E93\u7684\u4E00\u4E9B\u8FDE\u63A5\u4FE1\u606F\u3002\u4F8B\u5982\u4E0B\u9762\u4F7F\u7528mysql\u6570\u636E\u5E93\uFF0C\u4FEE\u6539\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>.env</code> \u6587\u4EF6\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E00\u5BF9\u4E00\u662F\u6700\u7B80\u5355\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u8868\u793A\u8868A\u548C\u8868B\u7684\u8BB0\u5F55\u4E00\u4E00\u5BF9\u5E94\u3002</p><p>\u6BD4\u5982\u4E00\u4E2A\u7528\u6237\u5BF9\u5E94\u4E00\u4E2A\u793E\u4EA4\u8D26\u53F7\uFF0C\u5728\u6F14\u793A\u8BE5\u5173\u8054\u5173\u7CFB\u4E4B\u524D\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u4E2A\u793E\u4EA4\u8D26\u53F7\u8868 <code>user_accounts</code> \uFF08<strong>\u5047\u8BBE\u7528\u6237\u8868\u4F7F\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684</strong>\uFF09</p><h2 id="\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210\u6A21\u578B\u548C\u8FC1\u79FB\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:model UserAccount -m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6</h3><p><code>&lt;project&gt;/database/migrate/*_create_user_accounts_table.php</code>\u5982\u4E0B</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Schema</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Blueprint</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>Migration</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CreateUserAccountsTable</span> <span class="token keyword">extends</span> <span class="token class-name">Migration</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the migrations.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_accounts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">increments</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">unsigned</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">char</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;qq&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;wechat&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;weibo&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span>
                      <span class="token operator">-&gt;</span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span>
                      <span class="token operator">-&gt;</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span>
                      <span class="token operator">-&gt;</span><span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cascade&#39;</span><span class="token punctuation">)</span>
                      <span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cascade&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Reverse the migrations.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">dropIfExists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_accounts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C-php-artisan-\u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FD0\u884C php artisan \u547D\u4EE4\u4FDD\u5B58\u4FEE\u6539\u5230\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\u6570\u636E\u5E93\u5C06\u751F\u6210\u56DB\u5F20\u8868\uFF0C migrations password_resets user_accounts users</p></blockquote><h2 id="\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684-fillable-\u5C5E\u6027" aria-hidden="true">#</a> \u5B9A\u4E49\u5173\u8054\u5173\u7CFB\u548C\u4FEE\u6539\u6A21\u578B\u7684 fillable \u5C5E\u6027</h2><p>\u5E76\u5B9A\u4E49\u53EF\u586B\u5145\u7684\u6570\u636E\uFF0C\u5373 <code>$fillable</code> \u6570\u7EC4\u7684\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace App;

use Illuminate\\Database\\Eloquent\\Model;

/**
 * Class UserAccount
 *
 * @package App
 */
class UserAccount extends Model
{
    /**
     * @var array
     */
    protected $fillable = [&#39;user_id&#39;, &#39;qq&#39;, &#39;wechat&#39;, &#39;weibo&#39;];
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-tinker-\u586B\u5145\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528 tinker \u586B\u5145\u6570\u636E</h3><p>\u4FEE\u6539 <code>/databases/factories/ModelFactory.php</code>\uFF0C\u65B0\u589E\u5173\u8054\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

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

$factory-&gt;define(App\\UserAccount::class, function (Faker\\Generator $faker) {
    return [
        &#39;user_id&#39; =&gt; 1,
        &#39;qq&#39; =&gt; $faker-&gt;numberBetween(100000, 999999999),
        &#39;wechat&#39; =&gt; bcrypt(&#39;secret&#39;),
        &#39;weibo&#39; =&gt; bcrypt(&#39;secret&#39;)
    ];
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="\u6267\u884C\u4E0A\u8FF0\u8FC1\u79FB\u6587\u4EF6\u586B\u5145\u6570\u636E\u5230\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u8FF0\u8FC1\u79FB\u6587\u4EF6\u586B\u5145\u6570\u636E\u5230\u6570\u636E\u5E93" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u8FF0\u8FC1\u79FB\u6587\u4EF6\u586B\u5145\u6570\u636E\u5230\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan tinker

// \u8FDB\u5165\u5230\u4EA4\u4E92\u754C\u9762\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u751F\u6210\u5173\u8054\u6570\u636E
namespace App
factory<span class="token punctuation">(</span>User::class,1<span class="token punctuation">)</span>-<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span> // \u968F\u673A\u751F\u6210\u4E00\u4E2A\u7528\u6237\u4FE1\u606F
factory<span class="token punctuation">(</span>UserAccount::class,1<span class="token punctuation">)</span>-<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span> // \u968F\u673A\u751F\u6210\u4E00\u4E2A\u7528\u6237\u5173\u8054\u4FE1\u606F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u67E5\u770B\u6267\u884C\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6267\u884C\u7ED3\u679C" aria-hidden="true">#</a> \u67E5\u770B\u6267\u884C\u7ED3\u679C</h3><p>\u5728\u4E24\u4E2A\u8868\u4E2D\u53EF\u4EE5\u770B\u5230\u5199\u5165\u7684\u6570\u636E\uFF1A</p><p><code>users</code>\u8868\u6570\u636E\uFF1A</p>`,29),u=["src"],i=n("p",null,[n("code",null,"users_accounts"),c("\u8868\uFF1A")],-1),b=["src"],d=a(`<h2 id="\u5B9A\u4E49eloquent\u5173\u8054\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49eloquent\u5173\u8054\u5173\u7CFB" aria-hidden="true">#</a> \u5B9A\u4E49Eloquent\u5173\u8054\u5173\u7CFB</h2><p>\u6587\u4EF6\u5728<code>&lt;project&gt;/app/User.php</code>\u548C<code>&lt;project&gt;/app/UserAccount.php</code>\u3002</p><h3 id="\u5B9A\u4E49\u5173\u8054\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5173\u8054\u5173\u7CFB" aria-hidden="true">#</a> \u5B9A\u4E49\u5173\u8054\u5173\u7CFB</h3><ul><li>\u5728 <code>User</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u4E0E <code>UserAccount</code> \u6A21\u578B\u7684\u4E00\u5BF9\u4E00\u5BF9\u5E94\u5173\u7CFB</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>

<span class="token operator">...</span>

   <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Relations<span class="token punctuation">\\</span>HasOne</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">account</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * UserAccount::class related \u5173\u8054\u6A21\u578B
         * user_id foreignKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
         * id localKey \u5173\u8054\u8868\u5B57\u6BB5
         */</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">UserAccount</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>\u5728 <code>UserAccount</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u4E0E <code>User</code> \u7684\u4E00\u5BF9\u4E00\u5173\u7CFB</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserAccount</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>

<span class="token operator">...</span> 

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Relations<span class="token punctuation">\\</span>BelongsTo</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * User::class related \u5173\u8054\u6A21\u578B
         * user_id ownerKey \u5F53\u524D\u8868\u5173\u8054\u5B57\u6BB5
         * id relation \u5173\u8054\u8868\u5B57\u6BB5
         */</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u5173\u8054\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u64CD\u4F5C" aria-hidden="true">#</a> \u5173\u8054\u64CD\u4F5C</h2><h3 id="\u65B0\u589E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6570\u636E" aria-hidden="true">#</a> \u65B0\u589E\u6570\u636E</h3><p>\u540C\u65F6\u65B0\u589E <code>users</code> \u548C <code>user_accounts</code> \u8868\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::create([
  &#39;name&#39; =&gt; &#39;curder&#39;,
  &#39;email&#39; =&gt; &#39;curder@foxmail.com&#39;,
  &#39;password&#39; =&gt; bcrypt(&#39;secret&#39;),
  &#39;remember_token&#39; =&gt; str_random(10),
]); // \u65B0\u589E\u4E00\u4E2A\u7528\u6237\u4FE1\u606F

$account = new \\App\\UserAccount([&#39;qq&#39; =&gt; &#39;qq Number&#39;, &#39;wechat&#39; =&gt; &#39;wechatNumber&#39;, &#39;weibo&#39; =&gt; &#39;weiboNumber&#39;]); // \u751F\u6210 UserAccount \u5BF9\u8C61

$user-&gt;account()-&gt;save($account); // \u6267\u884C\u5173\u8054\u5199\u5165\u64CD\u4F5C
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u4E5F\u53EF\u4EE5\u662F\u6211\u4EEC\u4F7F\u7528 <code>find()</code> \u65B9\u6CD5\u83B7\u5F97\u7528\u6237\u4FE1\u606F\uFF08\u6216\u8005\u4F7F\u7528 <code>\\Auth::id()</code>\u83B7\u5F97\u7528\u6237\u4FE1\u606F\uFF09\uFF0C\u518D\u5199\u5165\u5230\u5173\u8054\u8868 <code>user_accounts</code>\u3002\u5982\u4E0B\uFF1A\uFF08\u8FD9\u79CD\u60C5\u51B5\u5E38\u89C1\u4E8E\u7528\u6237\u4FEE\u6539\u521B\u5EFA\u3001\u4FEE\u6539\u81EA\u5DF1\u7684\u8D26\u6237\u4FE1\u606F\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> $account = new \\App\\UserAccount([&#39;qq&#39; =&gt; &#39;another qq&#39;, &#39;wechat&#39; =&gt; &#39;another wechat&#39;, &#39;weibo&#39; =&gt; &#39;another weibo&#39;]); // \u751F\u6210 UserAccount \u5BF9\u8C61\uFF0C\u6216\u8005\u6570\u636E\u901A\u8FC7 Request \u5BF9\u8C61\u83B7\u53D6 $account = new \\App\\Account($request-&gt;all());
 \\Auth::user()-&gt;account()-&gt;save($account);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3><p>\u901A\u8FC7\u7528\u6237\u83B7\u53D6\u7528\u6237\u5173\u8054\u4FE1\u606F</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u7528\u6237\u8868\u6570\u636E</span>

<span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">account</span><span class="token punctuation">;</span> <span class="token comment">// \u901A\u8FC7\u7528\u6237\u4FE1\u606F\u83B7\u53D6\u7528\u6237\u5173\u8054\u4FE1\u606F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u901A\u8FC7\u7528\u6237\u5173\u8054\u4FE1\u606F\u83B7\u53D6\u7528\u6237\u4FE1\u606F</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$account</span> <span class="token operator">=</span> <span class="token class-name static-context">UserAccount</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u7528\u6237\u5173\u8054\u4FE1\u606F</span>

<span class="token variable">$account</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token punctuation">;</span> <span class="token comment">// \u901A\u8FC7\u5173\u8054\u4FE1\u606F\u83B7\u53D6\u7528\u6237\u4FE1\u606F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5173\u8054\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u5220\u9664" aria-hidden="true">#</a> \u5173\u8054\u5220\u9664</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$account = \\App\\UserAccount::find(1);
$account-&gt;user-&gt;delete(); // \u5220\u9664\u7528\u6237 users \u8868\u548C user_account \u76F8\u5173\u8BB0\u5F55
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3><p>\u901A\u8FC7\u7528\u6237\u8868 <code>users</code> \u6570\u636E\uFF0C\u66F4\u65B0\u5173\u8054 <code>user_accounts</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);
$account = $user-&gt;account; // \u83B7\u53D6\u5230\u5173\u8054\u4FE1\u606F
$account-&gt;qq = &#39;new qq&#39;;
$account-&gt;wechat = &#39;new Wechat&#39;;
$account-&gt;save();

// \u6216\u8005\u5F53\u7528\u6237\u767B\u5F55\u65F6\uFF0C\u76F4\u63A5\u901A\u8FC7\u5173\u8054\u5173\u7CFB\u8FDB\u884C\u66F4\u65B0\u6570\u636E
\\Auth::user()-&gt;account()-&gt;update([&#39;qq&#39; =&gt; &#39;new QQ&#39;, &#39;wechat&#39; =&gt; &#39;new Wechat&#39;]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u901A\u8FC7 \u7528\u6237\u4FE1\u606F\u8868 <code>user_accounts</code> \u5173\u8054\u66F4\u65B0 <code>users</code> \u6570\u636E\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$account = \\App\\UserAccount::find(1);
$user = $account-&gt;user; // \u83B7\u53D6\u5230\u5173\u8054\u4FE1\u606F

$user-&gt;email = &#39;new@test.com&#39;;
$user-&gt;save();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u901A\u8FC7\u5173\u8054-user-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5173\u8054-user-\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u5173\u8054 User \u6570\u636E</h4><p>\u53E6\u5916\uFF0C\u5982\u679C\u9700\u8981\u540C\u6B65\u66F4\u65B0\u5173\u8054\u8868\u7684 <code>updated_at</code> \u5B57\u6BB5\uFF0C\u5728\u6A21\u578B\u4E2D\u5B9A\u4E49 <code>$touches</code> \u5C5E\u6027\uFF0C\u4F8B\u5982\uFF0C\u6211\u4EEC\u5728 UserAccount \u4E2D\u5B9A\u4E49\u5982\u4E0B\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u8981\u89E6\u53D1\u7684\u6240\u6709\u5173\u8054\u5173\u7CFB
 *
 * @var array
 */
 protected $touches = [&#39;user&#39;];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728\u66F4\u65B0 <code>user_accounts</code> \u8868\u4E2D\u6570\u636E\u65F6\uFF0C\u540C\u6B65\u66F4\u65B0 <code>users</code> \u8868\u7684 <code>updated_at</code> \u6570\u636E\u3002</p>`,28);function m(s,k){return e(),p(t,null,[r,n("img",{src:s.$withBase("/images/related_relationship/screenshot_1492077162810.png"),alt:""},null,8,u),i,n("img",{src:s.$withBase("/images/related_relationship/screenshot_1492077196226.png"),alt:""},null,8,b),d],64)}var f=l(o,[["render",m]]);export{f as default};
