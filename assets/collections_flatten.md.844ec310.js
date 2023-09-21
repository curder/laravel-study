import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const f=JSON.parse('{"title":"flatten","description":"","frontmatter":{},"headers":[],"relativePath":"collections/flatten.md","filePath":"collections/flatten.md","lastUpdated":1648089437000}'),p={name:"collections/flatten.md"},o=l(`<h1 id="flatten" tabindex="-1">flatten <a class="header-anchor" href="#flatten" aria-label="Permalink to &quot;flatten&quot;">​</a></h1><p>将多维集合转为一维。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;taylor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;languages&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;php&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;javascript&#39;</span><span style="color:#E1E4E8;">]])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">flatten</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1079</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;taylor&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;php&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;javascript&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;taylor&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;languages&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;php&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;javascript&#39;</span><span style="color:#24292E;">]])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">flatten</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1079</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;taylor&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;php&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;javascript&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>还可以选择性地传入「深度」参数：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;Apple&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [[</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;iPhone 6S&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;brand&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Apple&#39;</span><span style="color:#E1E4E8;">]],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;Samsung&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [[</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Galaxy S7&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;brand&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Samsung&#39;</span><span style="color:#E1E4E8;">]],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">flatten</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1093</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;name&quot; =&gt; &quot;iPhone 6S&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;brand&quot; =&gt; &quot;Apple&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;name&quot; =&gt; &quot;Galaxy S7&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;brand&quot; =&gt; &quot;Samsung&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;Apple&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [[</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;iPhone 6S&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;brand&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Apple&#39;</span><span style="color:#24292E;">]],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;Samsung&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [[</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Galaxy S7&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;brand&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Samsung&#39;</span><span style="color:#24292E;">]],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">flatten</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1093</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;name&quot; =&gt; &quot;iPhone 6S&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;brand&quot; =&gt; &quot;Apple&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;name&quot; =&gt; &quot;Galaxy S7&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;brand&quot; =&gt; &quot;Samsung&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>在这个例子里，调用 flatten 方法时不传入深度参数的话也会将嵌套数组转成一维的，然后返回 <code>[&#39;iPhone 6S&#39;, &#39;Apple&#39;, &#39;Galaxy S7&#39;, &#39;Samsung&#39;]</code>，传入深度参数能限制设置返回数组的层数。</p><p>有时候我们需要对数据进行分组可以使用 <a href="./groupBy.html">groupBy</a> 方法。</p>`,7),t=[o];function e(c,r,y,i,E,u){return n(),a("div",null,t)}const B=s(p,[["render",e]]);export{f as __pageData,B as default};
