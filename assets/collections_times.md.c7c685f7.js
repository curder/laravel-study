import{_ as s,c as n,o as a,a as l}from"./app.b2983bf2.js";const u=JSON.parse('{"title":"times","description":"","frontmatter":{},"headers":[],"relativePath":"collections/times.md","lastUpdated":1616865921000}'),t={name:"collections/times.md"},o=l(`<h1 id="times" tabindex="-1">times <a class="header-anchor" href="#times" aria-hidden="true">#</a></h1><p><code>times</code> 方法是 Collection 类的静态方法，通过 <code>Collection::times()</code> 调用</p><p>通过回调在给定次数内创建一个新集合。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Support</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Collection</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collection</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">times</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fn</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">Illuminate\\Support\\Collection {#1074</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   9,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><p>使用这个方法可以与工厂结合使用创建出 <code>Eloquent</code> 模型</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Models</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Support</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Collection</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Collection</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">times</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">factory</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">number </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> Cool Name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]))-&gt;</span><span style="color:#82AAFF;">toArray</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">[</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;1 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;UPTON.SAUL@EXAMPLE.COM&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;ID&quot; =&gt; 26,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=1+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;2 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;OHANSEN@EXAMPLE.ORG&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;ID&quot; =&gt; 27,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=2+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;3 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;ZBORER@EXAMPLE.NET&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;ID&quot; =&gt; 28,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=3+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">] </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div>`,6),p=[o];function e(c,i,y,r,D,A){return a(),n("div",null,p)}const C=s(t,[["render",e]]);export{u as __pageData,C as default};
