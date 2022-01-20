import{r as t,o as p,c as e,b as s,a as o,F as c,e as r,d as n}from"./app.d0f5f04a.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=r(`<h1 id="wherein" tabindex="-1"><a class="header-anchor" href="#wherein" aria-hidden="true">#</a> whereIn</h1><p>\u901A\u8FC7\u7ED9\u5B9A\u7684\u952E\u503C\u6570\u7EC4\u6765\u8FC7\u6EE4\u96C6\u5408\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;50&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pears&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;60&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;banners&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;70&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;80&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">whereIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1242
     all: [
       0 =&gt; [
         &quot;product&quot; =&gt; &quot;apples&quot;,
         &quot;price&quot; =&gt; &quot;50&quot;,
       ],
       2 =&gt; [
         &quot;product&quot; =&gt; &quot;banners&quot;,
         &quot;price&quot; =&gt; &quot;70&quot;,
       ],
       3 =&gt; [
         &quot;product&quot; =&gt; &quot;coconuts&quot;,
         &quot;price&quot; =&gt; &quot;80&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="\u4E0D\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u4E0D\u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;50&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pears&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;60&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;banners&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;70&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;80&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">whereIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:3 [
  0 =&gt; array:2 [
    &quot;product&quot; =&gt; &quot;apples&quot;
    &quot;price&quot; =&gt; &quot;50&quot;
  ]
  2 =&gt; array:2 [
    &quot;product&quot; =&gt; &quot;banners&quot;
    &quot;price&quot; =&gt; &quot;70&quot;
  ]
  3 =&gt; array:2 [
    &quot;product&quot; =&gt; &quot;coconuts&quot;
    &quot;price&quot; =&gt; &quot;80&quot;
  ]
]
array:4 [
  0 =&gt; array:2 [
    &quot;product&quot; =&gt; &quot;apples&quot;
    &quot;price&quot; =&gt; &quot;50&quot;
  ]
  1 =&gt; array:2 [
    &quot;product&quot; =&gt; &quot;pears&quot;
    &quot;price&quot; =&gt; &quot;60&quot;
  ]
  2 =&gt; array:2 [
    &quot;product&quot; =&gt; &quot;banners&quot;
    &quot;price&quot; =&gt; &quot;70&quot;
  ]
  3 =&gt; array:2 [
    &quot;product&quot; =&gt; &quot;coconuts&quot;
    &quot;price&quot; =&gt; &quot;80&quot;
  ]
] 
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p><code>whereIn</code> \u65B9\u6CD5\u5728\u68C0\u67E5\u9879\u76EE\u503C\u65F6\u4F7F\u7528\u300C\u5BBD\u677E\u300D\u6BD4\u8F83\uFF0C\u610F\u5473\u7740\u5177\u6709\u6574\u6570\u503C\u7684\u5B57\u7B26\u4E32\u5C06\u88AB\u89C6\u4E3A\u7B49\u4E8E\u76F8\u540C\u503C\u7684\u6574\u6570\u3002</p>`,6),b=n("\u53EF\u4EE5\u4F7F\u7528 "),g={href:"/collections/whereInStrict.md",target:"_blank",rel:"noopener noreferrer"},k=n("whereInStrict"),q=n(" \u505A\u6BD4\u8F83 \u4E25\u683C \u7684\u5339\u914D\u3002");function m(d,h){const a=t("ExternalLinkIcon");return p(),e(c,null,[i,s("p",null,[b,s("a",g,[k,o(a)]),q])],64)}var v=l(u,[["render",m]]);export{v as default};
