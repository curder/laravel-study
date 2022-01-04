import{r as p,o as t,c as e,b as s,a as o,F as c,e as l,d as n}from"./app.9d6e082c.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=l(`<h1 id="whenempty" tabindex="-1"><a class="header-anchor" href="#whenempty" aria-hidden="true">#</a> whenEmpty</h1><p>\u5F53\u96C6\u5408\u4E3A\u7A7A\u65F6\uFF0C<code>whenEmpty</code> \u65B9\u6CD5\u5C06\u6267\u884C\u7ED9\u5B9A\u7684\u56DE\u8C03\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Tom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">whenEmpty</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Adam&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">whenEmpty</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Adam&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
array:2 [
  0 =&gt; &quot;Michael&quot;
  1 =&gt; &quot;Tom&quot;
]

array:1 [
  0 =&gt; &quot;Adam&quot;
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u7B2C\u4E8C\u4E2A\u95ED\u5305\u53EF\u4EE5\u4F20\u9012\u7ED9 <code>whenEmpty</code> \u65B9\u6CD5\uFF0C\u5F53\u96C6\u5408\u4E0D\u4E3A\u7A7A\u65F6\u5C06\u6267\u884C\u8BE5\u65B9\u6CD5\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Tom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">whenEmpty</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Adam&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Taylor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
array:3 [
  0 =&gt; &quot;Michael&quot;
  1 =&gt; &quot;Tom&quot;
  2 =&gt; &quot;Taylor&quot;
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,5),k=n("\u5982\u679C\u9700\u8981\u548C "),b=s("code",null,"whenEmpty",-1),m=n(" \u65B9\u6CD5\u76F8\u53CD\u7684\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),d={href:"/collections/whenNotEmpty.md",target:"_blank",rel:"noopener noreferrer"},g=n("whereNotEmpty"),h=n(" \u65B9\u6CD5\u3002");function _(f,y){const a=p("ExternalLinkIcon");return t(),e(c,null,[i,s("p",null,[k,b,m,s("a",d,[g,o(a)]),h])],64)}var v=u(r,[["render",_]]);export{v as default};
