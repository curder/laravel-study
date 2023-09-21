import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const F=JSON.parse('{"title":"intersect","description":"","frontmatter":{},"headers":[],"relativePath":"collections/intersect.md","filePath":"collections/intersect.md","lastUpdated":1616865921000}'),t={name:"collections/intersect.md"},o=l(`<h1 id="intersect" tabindex="-1">intersect <a class="header-anchor" href="#intersect" aria-label="Permalink to &quot;intersect&quot;">​</a></h1><p>从原集合中删除不在给定数组或集合中的任何值，最终的集合会保留原集合的键。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;Desk&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Sofa&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Chair&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">intersect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;Desk&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Chair&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Bookcase&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1083</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       0 =&gt; &quot;Desk&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; &quot;Chair&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;Desk&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Sofa&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Chair&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">intersect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;Desk&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Chair&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Bookcase&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1083</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       0 =&gt; &quot;Desk&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; &quot;Chair&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><blockquote><p>不改变原数组或集合。</p></blockquote>`,4),p=[o];function e(c,r,i,y,E,d){return n(),a("div",null,p)}const D=s(t,[["render",e]]);export{F as __pageData,D as default};
