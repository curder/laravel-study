import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const h=JSON.parse('{"title":"pipeInto","description":"","frontmatter":{},"headers":[],"relativePath":"collections/pipeInto.md","filePath":"collections/pipeInto.md","lastUpdated":1696665867000}'),p={name:"collections/pipeInto.md"},o=l(`<h1 id="pipeinto" tabindex="-1">pipeInto <a class="header-anchor" href="#pipeinto" aria-label="Permalink to &quot;pipeInto&quot;">​</a></h1><p>创建给定类的新实例，并将集合传递给构造函数。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Support\\Collection</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ResourceCollection</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Create a new ResourceCollection instance.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">void</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__construct</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Collection</span><span style="color:#E1E4E8;"> $items)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">pipeInto</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">ResourceCollection</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1, 2, 3]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Support\\Collection</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ResourceCollection</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Create a new ResourceCollection instance.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">void</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__construct</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Collection</span><span style="color:#24292E;"> $items)</span></span>
<span class="line"><span style="color:#24292E;">  {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">pipeInto</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">ResourceCollection</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1, 2, 3]</span></span></code></pre></div><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./pipe.html">pipe</a></li><li><a href="./pipeThrough.html">pipeThrough</a></li></ul>`,5),e=[o];function c(t,r,i,y,E,u){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{h as __pageData,C as default};
