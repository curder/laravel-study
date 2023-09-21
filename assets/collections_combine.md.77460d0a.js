import{_ as s,o as n,c as l,Q as a}from"./chunks/framework.5499cfac.js";const D=JSON.parse('{"title":"combine","description":"","frontmatter":{},"headers":[],"relativePath":"collections/combine.md","filePath":"collections/combine.md","lastUpdated":1616865921000}'),o={name:"collections/combine.md"},p=a(`<h1 id="combine" tabindex="-1">combine <a class="header-anchor" href="#combine" aria-label="Permalink to &quot;combine&quot;">​</a></h1><p>将一个集合的值作为「键」，再将另一个数组或者集合的值作为「值」合并成一个集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;column1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;column2&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">combine</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;value1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;value2&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1083</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;column1&quot; =&gt; &quot;value1&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;column2&quot; =&gt; &quot;value2&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;column1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;column2&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">combine</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;value1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;value2&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1083</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;column1&quot; =&gt; &quot;value1&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;column2&quot; =&gt; &quot;value2&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;column1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;column2&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">combine</span><span style="color:#E1E4E8;">([[</span><span style="color:#9ECBFF;">&#39;value1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">], [</span><span style="color:#9ECBFF;">&#39;value2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">456</span><span style="color:#E1E4E8;">]]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;column1&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;value1&quot; =&gt; 123,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;column2&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;value2&quot; =&gt; 456,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;column1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;column2&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">combine</span><span style="color:#24292E;">([[</span><span style="color:#032F62;">&#39;value1&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">], [</span><span style="color:#032F62;">&#39;value2&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">456</span><span style="color:#24292E;">]]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;column1&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;value1&quot; =&gt; 123,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;column2&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;value2&quot; =&gt; 456,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,4),t=[p];function e(c,i,r,y,E,u){return n(),l("div",null,t)}const B=s(o,[["render",e]]);export{D as __pageData,B as default};
