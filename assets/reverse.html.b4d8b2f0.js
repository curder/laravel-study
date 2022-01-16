import{r as p,o as t,c,b as s,a as l,F as o,e as a,d as n}from"./app.024192cd.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=a(`<h1 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse</h1><p>\u5012\u8F6C\u96C6\u5408\u4E2D\u9879\u76EE\u7684\u987A\u5E8F\u3002</p><h2 id="\u7B80\u5355\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u6570\u7EC4" aria-hidden="true">#</a> \u7B80\u5355\u6570\u7EC4</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1209
     all: [
       3 =&gt; 4,
       2 =&gt; 3,
       1 =&gt; 2,
       0 =&gt; 1,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u952E\u503C\u5BF9\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u952E\u503C\u5BF9\u6570\u7EC4" aria-hidden="true">#</a> \u952E\u503C\u5BF9\u6570\u7EC4</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string1&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string2&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key3&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string3&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1210
     all: [
       &quot;key3&quot; =&gt; &quot;string3&quot;,
       &quot;key2&quot; =&gt; &quot;string2&quot;,
       &quot;key1&quot; =&gt; &quot;string1&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u5012\u8F6C\u540E\u96C6\u5408\u7684 key \u4FDD\u6301\u539F\u96C6\u5408\u7684 key \u503C\u3002</p></blockquote><h2 id="\u91CD\u7F6E\u65B0\u96C6\u5408\u7684key" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7F6E\u65B0\u96C6\u5408\u7684key" aria-hidden="true">#</a> \u91CD\u7F6E\u65B0\u96C6\u5408\u7684key</h2>`,8),b=n("\u5982\u679C\u4E0D\u5E0C\u671B\u4FDD\u7559\u539F\u96C6\u5408\u4E2D\u7684 key \uFF0C\u53EF\u4EE5\u8C03\u7528 "),m={href:"/collections/values.md",target:"_blank",rel:"noopener noreferrer"},k=n("values"),d=n(" \u65B9\u6CD5\u3002"),g=a(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1212
     all: [
       4,
       3,
       2,
       1,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,1);function h(_,v){const e=p("ExternalLinkIcon");return t(),c(o,null,[i,s("p",null,[b,s("a",m,[k,l(e)]),d]),g],64)}var x=r(u,[["render",h]]);export{x as default};
