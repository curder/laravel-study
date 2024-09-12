import{_ as i,c as a,a2 as t,o as n}from"./chunks/framework.BL1pH_9P.js";const c=JSON.parse('{"title":"sortKeysUsing","description":"","frontmatter":{},"headers":[],"relativePath":"collections/sortKeysUsing.md","filePath":"collections/sortKeysUsing.md","lastUpdated":1697179285000}'),e={name:"collections/sortKeysUsing.md"};function l(h,s,p,k,r,o){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="sortkeysusing" tabindex="-1">sortKeysUsing <a class="header-anchor" href="#sortkeysusing" aria-label="Permalink to &quot;sortKeysUsing&quot;">​</a></h1><blockquote><p>使用回调按底层关联数组的键对集合进行排序</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;ID&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22345</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;first&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;John&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;last&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Doe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sortKeysUsing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;strnatcasecmp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  [&#39;first&#39; =&gt; &#39;John&#39;, &#39;ID&#39; =&gt; 22345, &#39;last&#39; =&gt; &#39;Doe&#39;]</span></span></code></pre></div><p>回调必须是返回小于、等于或大于零的整数的比较函数。</p><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./sortKeys.html">sortKeys</a></li><li><a href="./sort.html">sort</a></li><li><a href="./sortDesc.html">sortDesc</a></li></ul>`,6)]))}const g=i(e,[["render",l]]);export{c as __pageData,g as default};
