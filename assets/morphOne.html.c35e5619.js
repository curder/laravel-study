import{e}from"./app.9d6e082c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=e(`<h1 id="\u591A\u6001\u4E00\u5BF9\u4E00" tabindex="-1"><a class="header-anchor" href="#\u591A\u6001\u4E00\u5BF9\u4E00" aria-hidden="true">#</a> \u591A\u6001\u4E00\u5BF9\u4E00</h1><p>\u4E00\u5BF9\u4E00\u7684\u591A\u6001\u5173\u8054\u548C\u7B80\u5355\u7684\u4E00\u5BF9\u4E00\u5173\u8054\u7C7B\u4F3C\uFF0C\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\u76EE\u6807\u6A21\u578B\u5728\u5355\u4E2A\u5173\u8054\u4E0B\u53EF\u4EE5\u5F52\u5C5E\u4E8E\u591A\u79CD\u4E0D\u540C\u7684\u6A21\u578B\u3002</p><p>\u4F8B\u5982\uFF0C<code>Post</code> \u548C <code>User</code> \u53EF\u4EE5\u5171\u4EAB\u4E0E <code>Image</code> \u6A21\u578B\u7684\u591A\u6001\u5173\u8054\u3002</p><p>\u4F7F\u7528\u4E00\u5BF9\u4E00\u591A\u6001\u5173\u8054\uFF0C\u53EF\u4EE5\u62E5\u6709\u4E00\u4E2A\u53EF\u7528\u4E8E\u535A\u5BA2\u6587\u7AE0\u548C\u7528\u6237\u8D26\u6237\u7684\u552F\u4E00\u56FE\u7247\u5217\u8868\u3002</p><h2 id="\u8F6F\u4EF6\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u7248\u672C" aria-hidden="true">#</a> \u8F6F\u4EF6\u7248\u672C</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u8868\u7ED3\u6784" aria-hidden="true">#</a> \u8868\u7ED3\u6784</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>posts
    id - integer
    name - string

users
    id - integer
    name - string

images
    id - integer
    url - string
    imageable_id - integer
    imageable_type - string
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6CE8\u610F <code>images</code> \u8868\u4E2D\u7684 <code>imageable_id</code> \u548C <code>imageable_type</code> \u5B57\u6BB5\uFF0C<code>imageable_id</code> \u5B57\u6BB5\u5B58\u50A8\u7684\u662F\u6587\u7AE0\u6216\u7528\u6237\u7684 ID \u503C\uFF0C\u800C <code>imageable_type</code> \u5B57\u6BB5\u5B58\u50A8\u7684\u662F\u5F52\u5C5E\u7236\u6A21\u578B\u7684\u7C7B\u540D\u3002</p><p>\u8BBF\u95EE <code>imageable</code> \u5173\u8054\u65F6\uFF0C<code>Eloquent</code> \u4F7F\u7528 <code>imageable_type</code> \u5B57\u6BB5\u6765\u5224\u5B9A\u8FD4\u56DE\u54EA\u79CD\u7C7B\u578B\u7684\u7236\u6A21\u578B\uFF08<code>Post</code> \u8FD8\u662F <code>User</code>\uFF09\u3002</p><h2 id="\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57" aria-hidden="true">#</a> \u5173\u952E\u5B57</h2><ul><li><p><code>morphTo()</code></p></li><li><p><code>morphOne()</code></p></li></ul><h2 id="\u5B9A\u4E49-eloquent-\u5173\u8054\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49-eloquent-\u5173\u8054\u5173\u7CFB" aria-hidden="true">#</a> \u5B9A\u4E49 Eloquent \u5173\u8054\u5173\u7CFB</h2><ul><li>\u5728 <code>Image</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u5173\u8054\u5173\u7CFB</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace App;

use Illuminate\\Database\\Eloquent\\Model;

class Image extends Model
{
    /**
     * Get all of the owning imageable models.
     */
    public function imageable()
    {
        return $this-&gt;morphTo();
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>\u5728 <code>Post</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u4E00\u5BF9\u4E00\u5173\u8054\u5173\u7CFB</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

class Post extends Model
{
    /**
     * Get the post&#39;s image.
     */
    public function image()
    {
        return $this-&gt;morphOne(&#39;App\\Image&#39;, &#39;imageable&#39;);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u5728 <code>User</code> \u6A21\u578B\u4E2D\u5B9A\u4E49\u4E00\u5BF9\u4E00\u5173\u8054\u5173\u7CFB</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

class User extends Model
{
    /**
     * Get the user&#39;s image.
     */
    public function image()
    {
        return $this-&gt;morphOne(&#39;App\\Image&#39;, &#39;imageable&#39;);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u5173\u8054\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u64CD\u4F5C" aria-hidden="true">#</a> \u5173\u8054\u64CD\u4F5C</h2><h3 id="\u65B0\u589E\u5173\u8054\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u5173\u8054\u6570\u636E" aria-hidden="true">#</a> \u65B0\u589E\u5173\u8054\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user-&gt;image()-&gt;save($image); // \u6267\u884C\u5173\u8054\u5199\u5165\u64CD\u4F5C

$post-&gt;image()-&gt;save($image);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u67E5\u8BE2\u5173\u8054\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5173\u8054\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u5173\u8054\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = App\\Post::find(1);
$user = App\\User::first();

$user-&gt;image;
$image = $post-&gt;image; // \u901A\u8FC7 image \u52A8\u6001\u5C5E\u6027\u83B7\u53D6\u5173\u8054\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u4ECE\u591A\u6001\u6A21\u578B\u4E2D\u901A\u8FC7\u8BBF\u95EE\u8C03\u7528 <code>morphTo</code> \u7684\u65B9\u6CD5\u540D\u6765\u83B7\u53D6\u5176\u5F52\u5C5E\u7684\u7236\u6A21\u578B\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5C31\u662F <code>Image</code> \u6A21\u578B\u7684 <code>imageable</code> \u65B9\u6CD5\u3002</p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u52A8\u6001\u5C5E\u6027\u7684\u65B9\u5F0F\u6765\u8BBF\u95EE\u8BE5\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$image = App\\Image::find(1);

$imageable = $image-&gt;imageable;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>Image</code> \u6A21\u578B\u4E0A\u7684 <code>imageable</code> \u5173\u8054\u5C06\u4F1A\u8FD4\u56DE <code>Post</code> \u6216 <code>User</code> \u5B9E\u4F8B\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u54EA\u4E2D\u6A21\u578B\u62E5\u6709\u8BE5\u56FE\u7247\u3002</p></blockquote><h3 id="\u66F4\u65B0\u5173\u8054\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u5173\u8054\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u5173\u8054\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::first();
$image = $user-&gt;image; // \u83B7\u53D6\u5230\u5173\u8054\u4FE1\u606F
$image-&gt;url = &#39;new url&#39;;
$image-&gt;save();

// \u6216\u8005\u4F7F\u7528\u94FE\u5F0F\u8C03\u7528
\\App\\User::first()-&gt;image()-&gt;save([&#39;url&#39; =&gt; &#39;new url&#39;]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u5220\u9664\u5173\u8054\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5173\u8054\u6570\u636E" aria-hidden="true">#</a> \u5220\u9664\u5173\u8054\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::first();
$user-&gt;image-&gt;delete(); // \u5220\u9664\u7528\u6237 users \u8868\u548C images \u76F8\u5173\u8BB0\u5F55
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,32);function r(l,i){return a}var b=n(s,[["render",r]]);export{b as default};
