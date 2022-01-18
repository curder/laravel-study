import{r as t,o as e,c as o,b as s,a as c,F as l,e as a,d as n}from"./app.0c9bc181.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=a(`<h1 id="eachspread" tabindex="-1"><a class="header-anchor" href="#eachspread" aria-hidden="true">#</a> eachSpread</h1><p>\u8FED\u4EE3\u96C6\u5408\u4E2D\u7684\u5185\u5BB9\uFF0C<strong>\u4E0D\u6539\u53D8\u539F\u96C6\u5408</strong>\u7684\u540C\u65F6\u5C06\u5176\u4F20\u9012\u5230\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u901A\u5E38\u7528\u4E8E\u4E8C\u7EF4\u6570\u7EC4\u7684\u5FAA\u73AF\uFF0C\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u7ED9\u503C\u547D\u540D\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;banners&quot;</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;California&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;apples&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Florida&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;coconuts&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Texas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">eachSpread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">,</span> <span class="token variable">$qty</span><span class="token punctuation">,</span> <span class="token variable">$location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;We have <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$product</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$qty</span><span class="token punctuation">}</span></span> in our <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$location</span><span class="token punctuation">}</span></span> store.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
&quot;We have banners 45 in our California store.&quot;
&quot;We have apples 20 in our Florida store.&quot;
&quot;We have coconuts 60 in our Texas store.&quot;
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1249
     all: [
       [
         &quot;banners&quot;,
         45,
         &quot;California&quot;,
       ],
       [
         &quot;apples&quot;,
         20,
         &quot;Florida&quot;,
       ],
       [
         &quot;coconuts&quot;,
         60,
         &quot;Texas&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="condition" tabindex="-1"><a class="header-anchor" href="#condition" aria-hidden="true">#</a> Condition</h3>`,4),b=n("\u8DDF "),k={href:"/collections/each.md",target:"_blank",rel:"noopener noreferrer"},m=n("each"),d=n(" \u65B9\u6CD5\u7684\u4F7F\u7528\u4E00\u81F4\uFF0C\u4E5F\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u7F16\u5199\u903B\u8F91\uFF0C\u5F53\u8FD4\u56DE "),q=s("code",null,"false",-1),g=n(" \u540E\u4F1A\u505C\u6B62\u5FAA\u73AF\u3002"),h=a(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;banners&quot;</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;California&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;apples&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Florida&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;coconuts&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Texas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">eachSpread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">,</span> <span class="token variable">$qty</span><span class="token punctuation">,</span> <span class="token variable">$location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$qty</span> <span class="token operator">===</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;We have <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$product</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$qty</span><span class="token punctuation">}</span></span> in our <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$location</span><span class="token punctuation">}</span></span> store.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
&quot;We have banners 45 in our California store.&quot;
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1253
     all: [
       [
         &quot;banners&quot;,
         45,
         &quot;California&quot;,
       ],
       [
         &quot;apples&quot;,
         20,
         &quot;Florida&quot;,
       ],
       [
         &quot;coconuts&quot;,
         60,
         &quot;Texas&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><blockquote><p>\u53EF\u4EE5\u770B\u5230\u5F53\u8FD4\u56DE <code>false</code> \u65F6\uFF0C\u5FAA\u73AF\u7EC8\u6B62\u3002</p></blockquote>`,2);function v(_,f){const p=t("ExternalLinkIcon");return e(),o(l,null,[i,s("p",null,[b,s("a",k,[m,c(p)]),d,q,g]),h],64)}var C=u(r,[["render",v]]);export{C as default};
