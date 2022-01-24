import{r as e,o,c,b as n,a as t,F as l,e as a,d as s}from"./app.d28f954f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=a(`<h1 id="each" tabindex="-1"><a class="header-anchor" href="#each" aria-hidden="true">#</a> each</h1><p>\u8FED\u4EE3\u96C6\u5408\u4E2D\u7684\u5185\u5BB9\uFF0C<strong>\u4E0D\u6539\u53D8\u539F\u96C6\u5408</strong>\u7684\u540C\u65F6\u5C06\u5176\u4F20\u9012\u5230\u56DE\u8C03\u51FD\u6570\u4E2D\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;The current value is \${value}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
&quot;The current value is 1&quot;
&quot;The current value is 2&quot;
&quot;The current value is 3&quot;
&quot;The current value is 4&quot;
Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1223
 all: [
   1,
   2,
   3,
   4,
 ],
<span class="token punctuation">}</span>
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3),b=s("\u4E0D\u8981\u5C1D\u8BD5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u76F4\u63A5\u8C03\u7528 "),k=n("code",null,"return",-1),m=s(" \u6539\u53D8\u96C6\u5408\uFF0C\u56E0\u4E3Aeach\u65B9\u6CD5\u4E0D\u4F1A\u6539\u53D8\u539F\u96C6\u5408\u3002\u5982\u679C\u9700\u8981\u6267\u884C\u6539\u53D8\u539F\u6570\u7EC4\u7684\u8BDD\u53EF\u4EE5\u4F7F\u7528 "),d={href:"/collections/map.md",target:"_blank",rel:"noopener noreferrer"},q=s("map"),h=s(" \u65B9\u6CD5\u3002\u4F8B\u5982\uFF1A"),g=a(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u8BF7\u4F7F\u7528 map \u4EE3\u66FF each \u65B9\u6CD5</span>
<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;The current value is \${value}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,1),v=a(`<p>\u5982\u679C\u8981\u4E2D\u65AD\u5BF9\u5185\u5BB9\u7684\u8FED\u4EE3\uFF0C\u90A3\u5C31\u4ECE\u56DE\u8C03\u4E2D\u8FD4\u56DE <code>false</code>\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$value</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;The current value is \${value}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
&quot;The current value is 1&quot;
&quot;The current value is 2&quot;
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1231
     all: [
       1,
       2,
       3,
       4,
     ],
   <span class="token punctuation">}</span>
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p>\u53EF\u4EE5\u770B\u5230\u5F53\u89E6\u53D1\u6761\u4EF6\u8FD4\u56DE<code>false</code>\u540E\u7684\u5FAA\u73AF\u505C\u6B62\u4E86\u3002</p></blockquote><h2 id="each-\u5FAA\u73AF\u83B7\u53D6\u4E8C\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#each-\u5FAA\u73AF\u83B7\u53D6\u4E8C\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> each \u5FAA\u73AF\u83B7\u53D6\u4E8C\u7EF4\u6570\u7EC4</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;banners&quot;</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;California&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;apples&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Florida&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;coconuts&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Texas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;We have <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$value</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$value</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> in our <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$value</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> store.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
&quot;We have 45 banners in our California store.&quot;
&quot;We have 20 apples in our Florida store.&quot;
&quot;We have 60 coconuts in our Texas store.&quot;
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1251
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,5),_=n("p",null,"\u5728\u5FAA\u73AF\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u901A\u8FC7\u4E0B\u6807\u83B7\u53D6\u5BF9\u5E94\u503C\u7684\u65B9\u5F0F\u4E0D\u662F\u5F88\u4F18\u96C5\uFF0C\u53EF\u80FD\u8FC7\u4E86\u4E00\u6BB5\u65F6\u95F4\u5C31\u5FD8\u4E86\u5BF9\u5E94\u7684\u503C\u662F\u4EC0\u4E48\u3002",-1),f=s("\u6709\u6CA1\u6709\u66F4\u52A0\u4F18\u96C5\u7684\u65B9\u5F0F\u4F18\u5316\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u4F7F\u7528 "),x={href:"/collections/eachSpread.md",target:"_blank",rel:"noopener noreferrer"},$=s("eachSpread"),T=s(" \u65B9\u6CD5\u3002"),C=a(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,1),S=s("\u53EF\u4EE5\u770B\u5230\u901A\u8FC7\u8C03\u7528 "),y={href:"/collections/eachSpread.md",target:"_blank",rel:"noopener noreferrer"},F=s("eachSpread"),W=s(" \u65B9\u6CD5\uFF0C\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u6709\u66F4\u660E\u786E\u7684\u53D8\u91CF\u53EF\u4F9B\u4F7F\u7528\uFF0C\u53D8\u5F97\u66F4\u52A0\u6709\u5BD3\u610F\u8BDD\u3002");function w(I,N){const p=e("ExternalLinkIcon");return o(),c(l,null,[i,n("blockquote",null,[n("p",null,[b,k,m,n("a",d,[q,t(p)]),h]),g]),v,n("blockquote",null,[_,n("p",null,[f,n("a",x,[$,t(p)]),T])]),C,n("blockquote",null,[n("p",null,[S,n("a",y,[F,t(p)]),W])])],64)}var E=u(r,[["render",w]]);export{E as default};
