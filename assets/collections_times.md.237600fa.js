import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const q=JSON.parse('{"title":"times","description":"","frontmatter":{},"headers":[],"relativePath":"collections/times.md","filePath":"collections/times.md","lastUpdated":1616865921000}'),t={name:"collections/times.md"},o=l(`<h1 id="times" tabindex="-1">times <a class="header-anchor" href="#times" aria-label="Permalink to &quot;times&quot;">​</a></h1><p><code>times</code> 方法是 Collection 类的静态方法，通过 <code>Collection::times()</code> 调用</p><p>通过回调在给定次数内创建一个新集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Support\\Collection</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Collection</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">times</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($value) =&gt; $value </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> );</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">Illuminate\\Support\\Collection {#1074</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   6,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   9,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Support\\Collection</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Collection</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">times</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($value) =&gt; $value </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> );</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">Illuminate\\Support\\Collection {#1074</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   6,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   9,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>使用这个方法可以与工厂结合使用创建出 <code>Eloquent</code> 模型</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">App\\Models\\User</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Support\\Collection</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Collection</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">times</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($number) =&gt; </span><span style="color:#79B8FF;">User</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">factory</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $number </span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; Cool Name&#39;</span><span style="color:#E1E4E8;">]))</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">[</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;1 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;UPTON.SAUL@EXAMPLE.COM&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;ID&quot; =&gt; 26,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=1+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;2 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;OHANSEN@EXAMPLE.ORG&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;ID&quot; =&gt; 27,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=2+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;3 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;ZBORER@EXAMPLE.NET&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;ID&quot; =&gt; 28,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=3+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">App\\Models\\User</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Support\\Collection</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Collection</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">times</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($number) =&gt; </span><span style="color:#005CC5;">User</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">factory</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $number </span><span style="color:#D73A49;">.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; Cool Name&#39;</span><span style="color:#24292E;">]))</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">[</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;1 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;UPTON.SAUL@EXAMPLE.COM&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;ID&quot; =&gt; 26,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=1+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;2 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;OHANSEN@EXAMPLE.ORG&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;ID&quot; =&gt; 27,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=2+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;NAME&quot; =&gt; &quot;3 cOOL nAME&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;EMAIL&quot; =&gt; &quot;ZBORER@EXAMPLE.NET&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;ID&quot; =&gt; 28,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=3+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div>`,6),p=[o];function e(c,i,y,r,E,u){return n(),a("div",null,p)}const D=s(t,[["render",e]]);export{q as __pageData,D as default};
