import{_ as s,c as n,a2 as e,o as p}from"./chunks/framework.BL1pH_9P.js";const g=JSON.parse('{"title":"多态一对一","description":"","frontmatter":{},"headers":[],"relativePath":"model/relationships/07-morph-one.md","filePath":"model/relationships/07-morph-one.md","lastUpdated":1643507443000}'),l={name:"model/relationships/07-morph-one.md"};function i(t,a,c,o,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="多态一对一" tabindex="-1">多态一对一 <a class="header-anchor" href="#多态一对一" aria-label="Permalink to &quot;多态一对一&quot;">​</a></h1><p>一对一的多态关联和简单的一对一关联类似，不同之处在于目标模型在单个关联下可以归属于多种不同的模型。</p><p>例如，<code>Post</code> 和 <code>User</code> 可以共享与 <code>Image</code> 模型的多态关联。</p><p>使用一对一多态关联，可以拥有一个可用于博客文章和用户账户的唯一图片列表。</p><h2 id="软件版本" tabindex="-1">软件版本 <a class="header-anchor" href="#软件版本" aria-label="Permalink to &quot;软件版本&quot;">​</a></h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="表结构" tabindex="-1">表结构 <a class="header-anchor" href="#表结构" aria-label="Permalink to &quot;表结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>posts</span></span>
<span class="line"><span>    id - integer</span></span>
<span class="line"><span>    name - string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>users</span></span>
<span class="line"><span>    id - integer</span></span>
<span class="line"><span>    name - string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>images</span></span>
<span class="line"><span>    id - integer</span></span>
<span class="line"><span>    url - string</span></span>
<span class="line"><span>    imageable_id - integer</span></span>
<span class="line"><span>    imageable_type - string</span></span></code></pre></div><p>注意 <code>images</code> 表中的 <code>imageable_id</code> 和 <code>imageable_type</code> 字段，<code>imageable_id</code> 字段存储的是文章或用户的 ID 值，而 <code>imageable_type</code> 字段存储的是归属父模型的类名。</p><p>访问 <code>imageable</code> 关联时，<code>Eloquent</code> 使用 <code>imageable_type</code> 字段来判定返回哪种类型的父模型（<code>Post</code> 还是 <code>User</code>）。</p><h2 id="关键字" tabindex="-1">关键字 <a class="header-anchor" href="#关键字" aria-label="Permalink to &quot;关键字&quot;">​</a></h2><ul><li><p><code>morphTo()</code></p></li><li><p><code>morphOne()</code></p></li></ul><h2 id="定义-eloquent-关联关系" tabindex="-1">定义 Eloquent 关联关系 <a class="header-anchor" href="#定义-eloquent-关联关系" aria-label="Permalink to &quot;定义 Eloquent 关联关系&quot;">​</a></h2><ul><li>在 <code>Image</code> 模型中定义关联关系</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace App;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use Illuminate\\Database\\Eloquent\\Model;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Image extends Model</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Get all of the owning imageable models.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public function imageable()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;morphTo();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>在 <code>Post</code> 模型中定义一对一关联关系</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Post extends Model</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Get the post&#39;s image.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public function image()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;morphOne(&#39;App\\Image&#39;, &#39;imageable&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>在 <code>User</code> 模型中定义一对一关联关系</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class User extends Model</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Get the user&#39;s image.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public function image()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;morphOne(&#39;App\\Image&#39;, &#39;imageable&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="关联操作" tabindex="-1">关联操作 <a class="header-anchor" href="#关联操作" aria-label="Permalink to &quot;关联操作&quot;">​</a></h2><h3 id="新增关联数据" tabindex="-1">新增关联数据 <a class="header-anchor" href="#新增关联数据" aria-label="Permalink to &quot;新增关联数据&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$user-&gt;image()-&gt;save($image); // 执行关联写入操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$post-&gt;image()-&gt;save($image);</span></span></code></pre></div><h3 id="查询关联数据" tabindex="-1">查询关联数据 <a class="header-anchor" href="#查询关联数据" aria-label="Permalink to &quot;查询关联数据&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$post = App\\Post::find(1);</span></span>
<span class="line"><span>$user = App\\User::first();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$user-&gt;image;</span></span>
<span class="line"><span>$image = $post-&gt;image; // 通过 image 动态属性获取关联数据</span></span></code></pre></div><p>还可以从多态模型中通过访问调用 <code>morphTo</code> 的方法名来获取其归属的父模型。在这个例子中，就是 <code>Image</code> 模型的 <code>imageable</code> 方法。</p><p>因此，我们可以通过动态属性的方式来访问该方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$image = App\\Image::find(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$imageable = $image-&gt;imageable;</span></span></code></pre></div><blockquote><p><code>Image</code> 模型上的 <code>imageable</code> 关联将会返回 <code>Post</code> 或 <code>User</code> 实例，这取决于哪中模型拥有该图片。</p></blockquote><h3 id="更新关联数据" tabindex="-1">更新关联数据 <a class="header-anchor" href="#更新关联数据" aria-label="Permalink to &quot;更新关联数据&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$user = \\App\\User::first();</span></span>
<span class="line"><span>$image = $user-&gt;image; // 获取到关联信息</span></span>
<span class="line"><span>$image-&gt;url = &#39;new url&#39;;</span></span>
<span class="line"><span>$image-&gt;save();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 或者使用链式调用</span></span>
<span class="line"><span>\\App\\User::first()-&gt;image()-&gt;save([&#39;url&#39; =&gt; &#39;new url&#39;]);</span></span></code></pre></div><h3 id="删除关联数据" tabindex="-1">删除关联数据 <a class="header-anchor" href="#删除关联数据" aria-label="Permalink to &quot;删除关联数据&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$user = \\App\\User::first();</span></span>
<span class="line"><span>$user-&gt;image-&gt;delete(); // 删除用户 users 表和 images 相关记录</span></span></code></pre></div>`,32)]))}const u=s(l,[["render",i]]);export{g as __pageData,u as default};
