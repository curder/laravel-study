import{_ as s,o as a,c as o,O as n}from"./chunks/framework.5035f75f.js";const A=JSON.parse('{"title":"toJson","description":"","frontmatter":{},"headers":[],"relativePath":"collections/toJson.md","filePath":"collections/toJson.md","lastUpdated":1616865921000}'),p={name:"collections/toJson.md"},l=n(`<h1 id="tojson" tabindex="-1">toJson <a class="header-anchor" href="#tojson" aria-label="Permalink to &quot;toJson&quot;">​</a></h1><p>将集合转换成 JSON 字符串。</p><p>通过 <code>json_encode</code> 函数将数组转换成 JSON</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">product</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">apples</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">toArray</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// {&quot;product&quot;:&quot;apples&quot;,&quot;price&quot;:45}</span></span></code></pre></div><p>可以直接调用 toJson 方法将集合转换称 JSON</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">product</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">apples</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">toJson</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// {&quot;product&quot;:&quot;apples&quot;,&quot;price&quot;:45}</span></span></code></pre></div><p>当然，也可以在调用 <code>toJson</code> 时，传递对应的参数，比如：<code>JSON_PRETTY_PRINT</code> 参数。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">product</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">apples</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">toJson</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">JSON_PRETTY_PRINT</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">{\\n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;product&quot;: &quot;apples&quot;,\\n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;price&quot;: 45\\n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span></code></pre></div><p>更多参数<a href="https://www.php.net/manual/zh/json.constants.php" target="_blank" rel="noreferrer">参考JSON 常量</a> 。</p>`,9),t=[l];function e(c,r,D,y,F,i){return a(),o("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
