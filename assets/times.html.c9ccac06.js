import{e as n}from"./app.a6e0cc5d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="times" tabindex="-1"><a class="header-anchor" href="#times" aria-hidden="true">#</a> times</h1><p><code>times</code> \u65B9\u6CD5\u662F Collection \u7C7B\u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u901A\u8FC7 <code>Collection::times()</code> \u8C03\u7528</p><p>\u901A\u8FC7\u56DE\u8C03\u5728\u7ED9\u5B9A\u6B21\u6570\u5185\u521B\u5EFA\u4E00\u4E2A\u65B0\u96C6\u5408\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token class-name static-context">Collection</span><span class="token operator">::</span><span class="token function">times</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1074
 all: [
   3,
   6,
   9,
 ],
<span class="token punctuation">}</span>
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u4E0E\u5DE5\u5382\u7ED3\u5408\u4F7F\u7528\u521B\u5EFA\u51FA <code>Eloquent</code> \u6A21\u578B</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Collection</span><span class="token operator">::</span><span class="token function">times</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$number</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39; Cool Name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
[
 [
   &quot;NAME&quot; =&gt; &quot;1 cOOL nAME&quot;,
   &quot;EMAIL&quot; =&gt; &quot;UPTON.SAUL@EXAMPLE.COM&quot;,
   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;ID&quot; =&gt; 26,
   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=1+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,
 ],
 [
   &quot;NAME&quot; =&gt; &quot;2 cOOL nAME&quot;,
   &quot;EMAIL&quot; =&gt; &quot;OHANSEN@EXAMPLE.ORG&quot;,
   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;ID&quot; =&gt; 27,
   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=2+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,
 ],
 [
   &quot;NAME&quot; =&gt; &quot;3 cOOL nAME&quot;,
   &quot;EMAIL&quot; =&gt; &quot;ZBORER@EXAMPLE.NET&quot;,
   &quot;EMAIL_VERIFIED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;UPDATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;CREATED_AT&quot; =&gt; &quot;2021-03-23t10:40:16.000000z&quot;,
   &quot;ID&quot; =&gt; 28,
   &quot;PROFILE_PHOTO_URL&quot; =&gt; &quot;HTTPS://UI-AVATARS.COM/API/?NAME=3+cOOL+nAME&amp;COLOR=7f9cf5&amp;BACKGROUND=ebf4ff&quot;,
 ],
] 
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,6);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
