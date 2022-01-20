import{r as p,o as t,c as e,b as n,a as o,F as c,e as l,d as s}from"./app.7b82e5c9.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=l(`<h1 id="only" tabindex="-1"><a class="header-anchor" href="#only" aria-hidden="true">#</a> only</h1><p>\u4E0D\u6539\u53D8\u539F\u96C6\u5408\u7684\u8FD4\u56DE\u96C6\u5408\u4E2D\u7ED9\u5B9A\u952E\u7684\u6240\u6709\u9879\u76EE\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1217
     all: [
       0 =&gt; 1,
       2 =&gt; 3,
       3 =&gt; 4,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>only</code> \u65B9\u6CD5\u7684\u53C2\u6570\u63A5\u6536\u53E6\u4E00\u4E2A\u96C6\u5408\u3001\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001\u53EF\u53D8\u53C2\u6570\u6216NULL\uFF0C\u5E76\u8FD4\u56DE\u5BF9\u5E94\u952E\u7684\u503C\u91CD\u65B0\u6784\u5EFA\u7684\u65B0\u96C6\u5408\uFF0C\u4E14\u65B0\u96C6\u5408\u4E2D\u7684 <code>key</code> \u4E0D\u4F1A\u88AB\u91CD\u7F6E\u3002</p><h2 id="\u63A5\u6536\u5B57\u7B26\u4E32\u6216\u8005\u53EF\u53D8\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u63A5\u6536\u5B57\u7B26\u4E32\u6216\u8005\u53EF\u53D8\u53C2\u6570" aria-hidden="true">#</a> \u63A5\u6536\u5B57\u7B26\u4E32\u6216\u8005\u53EF\u53D8\u53C2\u6570</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span>
  <span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;price&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1214
     all: [
       &quot;product&quot; =&gt; &quot;coconuts&quot;,
       &quot;price&quot; =&gt; 10,
     ],
   <span class="token punctuation">}</span> 
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u63A5\u6536\u6570\u7EC4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u63A5\u6536\u6570\u7EC4\u53C2\u6570" aria-hidden="true">#</a> \u63A5\u6536\u6570\u7EC4\u53C2\u6570</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1216
     all: [
       &quot;product&quot; =&gt; &quot;coconuts&quot;,
       &quot;price&quot; =&gt; 10,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u63A5\u6536\u96C6\u5408\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u63A5\u6536\u96C6\u5408\u53C2\u6570" aria-hidden="true">#</a> \u63A5\u6536\u96C6\u5408\u53C2\u6570</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$keys</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token variable">$keys</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1222
     all: [
       &quot;product&quot; =&gt; &quot;coconuts&quot;,
       &quot;qty&quot; =&gt; 45,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="null-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#null-\u53C2\u6570" aria-hidden="true">#</a> Null \u53C2\u6570</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1213
     all: [
       &quot;product&quot; =&gt; &quot;coconuts&quot;,
       &quot;price&quot; =&gt; 10,
       &quot;qty&quot; =&gt; 45,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>\u4F20\u5165 <code>null</code> \u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u96C6\u5408\u5C06\u539F\u6837\u8FD4\u56DE\u539F\u96C6\u5408\u3002</p></blockquote><h2 id="\u4E0D\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u4E0D\u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$keys</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token variable">$keys</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6253\u5370\u539F\u96C6\u5408</span>
<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6253\u5370\u901A\u8FC7 only \u65B9\u6CD5\u8C03\u7528\u540E\u7684\u65B0\u96C6\u5408</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:3 [
  &quot;product&quot; =&gt; &quot;coconuts&quot;
  &quot;price&quot; =&gt; 10
  &quot;qty&quot; =&gt; 45
]
array:2 [
  &quot;product&quot; =&gt; &quot;coconuts&quot;
  &quot;qty&quot; =&gt; 45
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,15),b=s("\u4E0E "),k=n("code",null,"only",-1),m=s(" \u76F8\u53CD\u7684\u64CD\u4F5C\u662F "),g={href:"/collections/except.md",target:"_blank",rel:"noopener noreferrer"},d=s("except"),q=s(" \u65B9\u6CD5\u3002");function h(v,f){const a=p("ExternalLinkIcon");return t(),e(c,null,[i,n("blockquote",null,[n("p",null,[b,k,m,n("a",g,[d,o(a)]),q])])],64)}var x=u(r,[["render",h]]);export{x as default};
