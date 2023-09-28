import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const f=JSON.parse('{"title":"whereInstanceOf","description":"","frontmatter":{},"headers":[],"relativePath":"collections/whereInstanceOf.md","filePath":"collections/whereInstanceOf.md","lastUpdated":1616865921000}'),p={name:"collections/whereInstanceOf.md"},o=l(`<h1 id="whereinstanceof" tabindex="-1">whereInstanceOf <a class="header-anchor" href="#whereinstanceof" aria-label="Permalink to &quot;whereInstanceOf&quot;">​</a></h1><p>该方法按给定的类类型过滤集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Article</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Post</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Article</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Article</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Post</span><span style="color:#E1E4E8;">()])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">whereInstanceOf</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Post</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1214</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; Post {#1217},</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Article</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Post</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Article</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Article</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Post</span><span style="color:#24292E;">()])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">whereInstanceOf</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Post</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1214</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; Post {#1217},</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),e=[o];function t(c,r,i,y,E,h){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{f as __pageData,F as default};
