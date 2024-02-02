import{_ as s,c as i,o as a,V as h}from"./chunks/framework.HIcQKaVu.js";const g=JSON.parse('{"title":"chunkWhile","description":"","frontmatter":{},"headers":[],"relativePath":"collections/chunkWhile.md","filePath":"collections/chunkWhile.md","lastUpdated":1695351225000}'),t={name:"collections/chunkWhile.md"},n=h(`<h1 id="chunkwhile" tabindex="-1">chunkWhile <a class="header-anchor" href="#chunkwhile" aria-label="Permalink to &quot;chunkWhile&quot;">​</a></h1><blockquote><p>根据给定的回调将集合分成多个较小的集合，传递给闭包的 <code>Collection $chunk</code> 变量可以用于检查集合中的前一个元素。</p></blockquote><h2 id="相关示例" tabindex="-1">相关示例 <a class="header-anchor" href="#相关示例" aria-label="Permalink to &quot;相关示例&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$collection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str_split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AABBCCCD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chunkWhile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $value, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $key, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Collection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $chunk) =&gt; $value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $chunk</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">last</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [[&#39;A&#39;, &#39;A&#39;], [&#39;B&#39;, &#39;B&#39;], [&#39;C&#39;, &#39;C&#39;, &#39;C&#39;], [&#39;D&#39;]]</span></span></code></pre></div><p>每次循环时，闭包中的 <code>$chunk</code> 变量都会填充为前面已循环的所有元素的集合。</p>`,5),l=[n];function e(k,p,c,r,d,o){return a(),i("div",null,l)}const y=s(t,[["render",e]]);export{g as __pageData,y as default};