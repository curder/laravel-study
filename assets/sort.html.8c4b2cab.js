import{r as t,o as e,c as o,b as s,a as p,F as c,e as l,d as n}from"./app.47f3a32b.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=l(`<h1 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h1><p>\u5BF9\u96C6\u5408\u8FDB\u884C\u6392\u5E8F\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1209
     all: [
       2 =&gt; 3,
       0 =&gt; 5,
       1 =&gt; 7,
       3 =&gt; 9,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4F7F\u7528 sort \u5BF9\u96C6\u5408\u6392\u5E8F\u540E\uFF0C\u65B0\u8FD4\u56DE\u7684\u96C6\u5408\u4F1A\u4FDD\u7559\u539F\u6765\u96C6\u5408\u7684 key\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;A55&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B54&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B22&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A11&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1209
     all: [
       3 =&gt; &quot;A11&quot;,
       0 =&gt; &quot;A55&quot;,
       2 =&gt; &quot;B22&quot;,
       1 =&gt; &quot;B54&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8C03\u7528 <code>sort</code> \u65B9\u6CD5\u4E0D\u4F20\u9012\u4EFB\u4F55\u53C2\u6570\u9ED8\u8BA4\u6392\u5E8F\u4F7F\u7528\u503C\u7684asci\u7F16\u7801\u8FDB\u884C\u6392\u5E8F\u3002</p><p>\u81EA\u5B9A\u4E49\u56DE\u8C03\u51FD\u6570\u6392\u5E8F</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;A-55&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B54&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B-22&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A11&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token variable">$b</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1228
     all: [
       3 =&gt; &quot;A11&quot;,
       0 =&gt; &quot;A-55&quot;,
       2 =&gt; &quot;B-22&quot;,
       1 =&gt; &quot;B54&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u4E0D\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u4E0D\u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;A-55&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B54&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B-22&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A11&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token variable">$b</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:4 [
  3 =&gt; &quot;A11&quot;
  0 =&gt; &quot;A-55&quot;
  2 =&gt; &quot;B-22&quot;
  1 =&gt; &quot;B54&quot;
]

array:4 [
  0 =&gt; &quot;A-55&quot;
  1 =&gt; &quot;B54&quot;
  2 =&gt; &quot;B-22&quot;
  3 =&gt; &quot;A11&quot;
] 
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,10),b=n("\u5982\u679C\u6709\u66F4\u9AD8\u7EA7\u7684\u6392\u5E8F\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u56DE\u8C03\u6765\u7528\u4F60\u81EA\u5DF1\u7684\u7B97\u6CD5\u8FDB\u884C\u6392\u5E8F\u3002\u8BF7\u53C2\u9605 PHP \u6587\u6863\u7684 "),k={href:"http://php.net/manual/en/function.usort.php#refsect1-function.usort-parameters",target:"_blank",rel:"noopener noreferrer"},m=n("usort"),g=n("\uFF0C\u8FD9\u662F\u96C6\u5408\u7684 "),d=s("code",null,"sort",-1),q=n(" \u65B9\u6CD5\u5728\u5E95\u5C42\u6240\u8C03\u7528\u7684\u3002"),h=n("\u5982\u679C\u8981\u5BF9\u5D4C\u5957\u6570\u7EC4\u6216\u5BF9\u8C61\u7684\u96C6\u5408\u8FDB\u884C\u6392\u5E8F\uFF0C\u53C2\u8003 "),_={href:"/collections/sortBy.md",target:"_blank",rel:"noopener noreferrer"},f=n("sortBy"),v=n(" \u548C "),B={href:"/collections/sortByDesc.md",target:"_blank",rel:"noopener noreferrer"},A=n("sortByDesc"),x=n(" \u65B9\u6CD5\u3002");function $(y,C){const a=t("ExternalLinkIcon");return e(),o(c,null,[i,s("p",null,[b,s("a",k,[m,p(a)]),g,d,q]),s("p",null,[h,s("a",_,[f,p(a)]),v,s("a",B,[A,p(a)]),x])],64)}var N=r(u,[["render",$]]);export{N as default};
