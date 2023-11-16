import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.16715cb7.js";const d=JSON.parse('{"title":"macro","description":"","frontmatter":{},"headers":[],"relativePath":"collections/macro.md","filePath":"collections/macro.md","lastUpdated":1695895732000}'),p={name:"collections/macro.md"},o=l(`<h1 id="macro" tabindex="-1">macro <a class="header-anchor" href="#macro" aria-label="Permalink to &quot;macro&quot;">​</a></h1><blockquote><p>静态 <code>macro</code> 方法允许在运行时向 Collection 类添加自定义方法。</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Support\\Collection</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Collection</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">macro</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;toUpper&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> () =&gt; </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> $value) =&gt; </span><span style="color:#79B8FF;">Str</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">upper</span><span style="color:#E1E4E8;">($value))</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;first&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;second&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">toUpper</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// [&#39;FIRST&#39;, &#39;SECOND&#39;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Support\\Collection</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Collection</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">macro</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;toUpper&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> () =&gt; </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> $value) =&gt; </span><span style="color:#005CC5;">Str</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">upper</span><span style="color:#24292E;">($value))</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;first&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;second&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">toUpper</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// [&#39;FIRST&#39;, &#39;SECOND&#39;]</span></span></code></pre></div><h2 id="添加自定义参数" tabindex="-1">添加自定义参数 <a class="header-anchor" href="#添加自定义参数" aria-label="Permalink to &quot;添加自定义参数&quot;">​</a></h2><p>如果需要，也可以给自定义方法添加参数。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Support\\Collection</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Support\\Facades\\Lang</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#79B8FF;">Collection</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">macro</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;toLocale&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> $locale) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> $value) </span><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> ($locale) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Lang</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">($value, [], $locale);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;first&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;second&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">toLocale</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;es&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Support\\Collection</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Support\\Facades\\Lang</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#005CC5;">Collection</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">macro</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;toLocale&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> $locale) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> $value) </span><span style="color:#D73A49;">use</span><span style="color:#24292E;"> ($locale) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Lang</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">($value, [], $locale);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;first&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;second&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">toLocale</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;es&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./make.html">make</a></li></ul>`,8),e=[o];function t(c,r,y,E,i,F){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};