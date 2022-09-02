import{r as l,o,c,b as s,a as p,w as e,F as u,e as t,d as n}from"./app.c26b4df5.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=t(`<h1 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h1><p>\u904D\u5386\u96C6\u5408\u5E76\u5C06\u6BCF\u4E00\u4E2A\u503C\u4F20\u5165\u7ED9\u5B9A\u7684\u56DE\u8C03\u3002</p><p>\u8BE5\u56DE\u8C03\u53EF\u4EE5\u4EFB\u610F\u4FEE\u6539\u9879\u76EE\u5E76\u8FD4\u56DE\uFF0C\u4ECE\u800C\u5F62\u6210\u65B0\u7684\u88AB\u4FEE\u6539\u8FC7\u9879\u76EE\u7684\u96C6\u5408\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1084
     all: [
       10,
       20,
       30,
       40,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,4),k=n("\u50CF\u5176\u4ED6\u96C6\u5408\u65B9\u6CD5\u4E00\u6837\uFF0C"),m=s("code",null,"map",-1),d=n(" \u8FD4\u56DE\u4E00\u4E2A\u65B0\u96C6\u5408\u5B9E\u4F8B\uFF1B\u5B83\u4E0D\u4F1A\u4FEE\u6539\u5B83\u6240\u8C03\u7528\u7684\u96C6\u5408\u3002\u5982\u679C\u60F3\u6539\u53D8\u539F\u96C6\u5408\uFF0C\u5F97\u4F7F\u7528 "),g=n("transform"),h=n(" \u65B9\u6CD5\u3002"),v=n("\u5B83\u4E0E "),_=n("reduce()"),f=n(" \u7684\u533A\u522B\u662F "),q=n("reduce()"),y=n(" \u4F20\u5165\u96C6\u5408\u6216\u6570\u7EC4\uFF0C\u8FD4\u56DE\u7684\u662F\u5355\u4E00\u503C\uFF1B\u800C"),$=s("code",null,"map()",-1),x=n("\u4F20\u5165\u6570\u7EC4\u6216\u96C6\u5408\uFF0C\u8FD4\u56DE\u7684\u4F9D\u7136\u662F\u96C6\u5408\u3002"),w=t(`<h2 id="\u8FD4\u56DE\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u8FD4\u56DE\u5B57\u7B26\u4E32</h2><p>\u6539\u53D8\u8FD4\u56DE\u96C6\u5408\u4E2Dvalue\u7684\u503C\uFF0C\u4E0D\u6539\u53D8key\u7684\u5185\u5BB9\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token variable">$item</span><span class="token punctuation">,</span>
  <span class="token variable">$key</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;_&#39;</span> <span class="token operator">.</span> <span class="token variable">$key</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1086
     all: [
       &quot;value1&quot; =&gt; &quot;first_value1&quot;,
       &quot;value2&quot; =&gt; &quot;second_value2&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u8FD4\u56DE\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u6570\u7EC4" aria-hidden="true">#</a> \u8FD4\u56DE\u6570\u7EC4</h2><p>\u6539\u53D8\u8FD4\u56DE\u96C6\u5408\u4E2Dvalue\u7684\u503C\uFF0C\u4E0D\u6539\u53D8key\u7684\u5185\u5BB9\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$item</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;_&#39;</span> <span class="token operator">.</span> <span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1088
     all: [
       &quot;value1&quot; =&gt; [
         &quot;first_value1&quot;,
       ],
       &quot;value2&quot; =&gt; [
         &quot;second_value2&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u8FD4\u56DEnull" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DEnull" aria-hidden="true">#</a> \u8FD4\u56DEnull</h2><p>\u5982\u679C\u56DE\u8C03\u4E2D\u6CA1\u6709\u4EFB\u4F55\u8FD4\u56DE\u8BED\u53E5\uFF0C\u9ED8\u8BA4\u8FD4\u56DEnull</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token variable">$item</span><span class="token punctuation">,</span>
  <span class="token variable">$key</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1083
     all: [
       &quot;value1&quot; =&gt; null,
       &quot;value2&quot; =&gt; null,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u8FD4\u56DE\u7A7A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u7A7A\u6570\u7EC4" aria-hidden="true">#</a> \u8FD4\u56DE\u7A7A\u6570\u7EC4</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token variable">$item</span><span class="token punctuation">,</span>
  <span class="token variable">$key</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1082
     all: [
       &quot;value1&quot; =&gt; [],
       &quot;value2&quot; =&gt; [],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u4E0D\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u4E0D\u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:4 [
  0 =&gt; 10
  1 =&gt; 20
  2 =&gt; 30
  3 =&gt; 40
]

array:4 [
  0 =&gt; 1
  1 =&gt; 2
  2 =&gt; 3
  3 =&gt; 4
]
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,13);function C(S,I){const a=l("RouterLink");return o(),c(u,null,[b,s("blockquote",null,[s("p",null,[k,m,d,p(a,{to:"/collections/transform.html"},{default:e(()=>[g]),_:1}),h])]),s("blockquote",null,[s("p",null,[v,p(a,{to:"/collections/reduce.html"},{default:e(()=>[_]),_:1}),f,p(a,{to:"/collections/reduce.html"},{default:e(()=>[q]),_:1}),y,$,x])]),w],64)}var B=r(i,[["render",C]]);export{B as default};
