import{r as e,o,c,b as s,a as t,F as l,e as p,d as n}from"./app.a75934dc.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=p(`<h1 id="sortby" tabindex="-1"><a class="header-anchor" href="#sortby" aria-hidden="true">#</a> sortBy</h1><p>\u4EE5\u7ED9\u5B9A\u7684\u952E\u5BF9\u96C6\u5408\u8FDB\u884C\u6B63\u5E8F\u6392\u5E8F\u3002</p><p><code>sortBy</code> \u65B9\u6CD5\u9ED8\u8BA4\u662F\u6B63\u5E8F\u6392\u5E8F\uFF0C\u5373\u6570\u503C\u8D8A\u5C0F\u6392\u5E8F\u8D8A\u9760\u524D\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sortBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token comment">/*
=&gt; Illuminate\\Support\\Collection {#1226
     all: [
       1 =&gt; [
         &quot;product&quot; =&gt; &quot;coconuts&quot;,
         &quot;price&quot; =&gt; 3,
       ],
       2 =&gt; [
         &quot;product&quot; =&gt; &quot;bananas&quot;,
         &quot;price&quot; =&gt; 5,
       ],
       0 =&gt; [
         &quot;product&quot; =&gt; &quot;apples&quot;,
         &quot;price&quot; =&gt; 9,
       ],
     ],
   } 
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,4),b=n("\u5982\u679C\u9700\u8981\u6309\u7167\u6570\u503C\u8D8A\u5927\u8D8A\u9760\u524D\u7684\u5012\u5E8F\u6392\u5E8F\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u518D\u8C03\u7528 "),g={href:"/collections/reverse.md",target:"_blank",rel:"noopener noreferrer"},k=n("reverse"),m=n(" \u65B9\u6CD5\uFF1B"),q=n("\u6216\u8005\u4F7F\u7528 "),d={href:"/collections/sortByDesc.md",target:"_blank",rel:"noopener noreferrer"},_=n("sortByDesc"),h=n(" \u65B9\u6CD5\u3002"),v=p(`<p>\u4F20\u5165\u56DE\u8C03\u51FD\u6570\u4EE5\u51B3\u5B9A\u5982\u4F55\u5BF9\u96C6\u5408\u7684\u503C\u8FDB\u884C\u6392\u5E8F</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A-30&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A20&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A50&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sortBy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1248
     all: [
       1 =&gt; [
         &quot;product&quot; =&gt; &quot;coconuts&quot;,
         &quot;price&quot; =&gt; 3,
         &quot;code&quot; =&gt; &quot;A20&quot;,
       ],
       0 =&gt; [
         &quot;product&quot; =&gt; &quot;apples&quot;,
         &quot;price&quot; =&gt; 9,
         &quot;code&quot; =&gt; &quot;A-30&quot;,
       ],
       2 =&gt; [
         &quot;product&quot; =&gt; &quot;bananas&quot;,
         &quot;price&quot; =&gt; 5,
         &quot;code&quot; =&gt; &quot;A50&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u4E0D\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u4E0D\u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A-30&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A20&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A50&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">sortBy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:3 [
  1 =&gt; array:3 [
    &quot;product&quot; =&gt; &quot;coconuts&quot;
    &quot;price&quot; =&gt; 3
    &quot;code&quot; =&gt; &quot;A20&quot;
  ]
  0 =&gt; array:3 [
    &quot;product&quot; =&gt; &quot;apples&quot;
    &quot;price&quot; =&gt; 9
    &quot;code&quot; =&gt; &quot;A-30&quot;
  ]
  2 =&gt; array:3 [
    &quot;product&quot; =&gt; &quot;bananas&quot;
    &quot;price&quot; =&gt; 5
    &quot;code&quot; =&gt; &quot;A50&quot;
  ]
]  

array:3 [
  0 =&gt; array:3 [
    &quot;product&quot; =&gt; &quot;apples&quot;
    &quot;price&quot; =&gt; 9
    &quot;code&quot; =&gt; &quot;A-30&quot;
  ]
  1 =&gt; array:3 [
    &quot;product&quot; =&gt; &quot;coconuts&quot;
    &quot;price&quot; =&gt; 3
    &quot;code&quot; =&gt; &quot;A20&quot;
  ]
  2 =&gt; array:3 [
    &quot;product&quot; =&gt; &quot;bananas&quot;
    &quot;price&quot; =&gt; 5
    &quot;code&quot; =&gt; &quot;A50&quot;
  ]
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,4);function f(y,A){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,s("p",null,[b,s("a",g,[k,t(a)]),m]),s("p",null,[q,s("a",d,[_,t(a)]),h]),v],64)}var $=r(u,[["render",f]]);export{$ as default};
