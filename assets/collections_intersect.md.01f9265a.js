import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.e8ee2c8f.js";const u=JSON.parse('{"title":"intersect","description":"","frontmatter":{},"headers":[],"relativePath":"collections/intersect.md","filePath":"collections/intersect.md","lastUpdated":1695893036000}'),o={name:"collections/intersect.md"},l=e(`<h1 id="intersect" tabindex="-1">intersect <a class="header-anchor" href="#intersect" aria-label="Permalink to &quot;intersect&quot;">​</a></h1><blockquote><p>从原集合中删除不在给定数组或集合中的任何值，最终的集合会保留原集合的键，相当于两个集合的交集。</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;Desk&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Sofa&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Chair&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">intersect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;Desk&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Chair&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Bookcase&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// [ &quot;Desk&quot;, &quot;Chair&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;Desk&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Sofa&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Chair&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">intersect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;Desk&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Chair&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Bookcase&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// [ &quot;Desk&quot;, &quot;Chair&quot;]</span></span></code></pre></div><blockquote><p>不改变原数组或集合。</p></blockquote><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./union.html">union</a></li><li><a href="./diff.html">diff</a></li><li><a href="./intersectByKeys.html">intersectByKeys</a></li></ul>`,6),t=[l];function p(c,r,i,E,y,h){return a(),n("div",null,t)}const _=s(o,[["render",p]]);export{u as __pageData,_ as default};
