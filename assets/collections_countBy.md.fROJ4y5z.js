import{_ as s,o as i,c as a,R as t}from"./chunks/framework.0o4kB30X.js";const g=JSON.parse('{"title":"countBy","description":"","frontmatter":{},"headers":[],"relativePath":"collections/countBy.md","filePath":"collections/countBy.md","lastUpdated":1695368331000}'),h={name:"collections/countBy.md"},l=t(`<h1 id="countby" tabindex="-1">countBy <a class="header-anchor" href="#countby" aria-label="Permalink to &quot;countBy&quot;">​</a></h1><blockquote><p>计算集合中值的出现次数，默认情况下，该方法计算每个元素的出现次数，允许计算集合中某些&quot;类型&quot;的元素。</p></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-v4bMD" id="tab-1mkWtUf" checked="checked"><label for="tab-1mkWtUf">简单使用</label><input type="radio" name="group-v4bMD" id="tab-S3goUhk"><label for="tab-S3goUhk">使用闭包逻辑</label></div><div class="blocks"><div class="language-php vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">countBy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [1 =&gt; 1, 2 =&gt; 3, 3 =&gt; 1]</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alice@gmail.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bob@yahoo.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;carlos@gmail.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">countBy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $email) =&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">strrchr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($email, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&#39;gmail.com&#39; =&gt; 2, &#39;yahoo.com&#39; =&gt; 1]</span></span></code></pre></div></div></div><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./count.html">count</a></li></ul>`,5),n=[l];function e(p,k,o,d,r,c){return i(),a("div",null,n)}const y=s(h,[["render",e]]);export{g as __pageData,y as default};
