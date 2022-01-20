import{r as t,o,c as l,b as s,a as e,F as r,e as p,d as n}from"./app.d0f5f04a.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=p(`<h1 id="\u683C\u5F0F\u5316-markdown-\u6570\u636E\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316-markdown-\u6570\u636E\u5217\u8868" aria-hidden="true">#</a> \u683C\u5F0F\u5316 Markdown \u6570\u636E\u5217\u8868</h1><p>\u6709\u5982\u4E0B\u6570\u636E\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;Should be working now for all Providers.&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;If you see one where spaces are in the title let me know.&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u683C\u5F0F\u5316\u6210 <code>markdown</code> \u7684 <code>li</code> \u683C\u5F0F\u6570\u636E\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Should be working now for all Providers. \\n
<span class="token list punctuation">-</span> If you see one where spaces are in the title let me know. \\n
<span class="token list punctuation">-</span> But there should not have blank in the key of config or .env file.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4F7F\u7528-foreach-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-foreach-\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528 foreach \u65B9\u6CD5</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;Should be working now for all Providers.&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;If you see one where spaces are in the title let me know.&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$comment</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39; - &#39;</span> <span class="token operator">.</span> <span class="token function">array_shift</span><span class="token punctuation">(</span><span class="token variable">$messages</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$messages</span> <span class="token keyword">as</span> <span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$comment</span> <span class="token operator">.=</span> <span class="token string double-quoted-string">&quot;\\n -  \${message}&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$comment</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
&quot;&quot;&quot;
 - Should be working now for all Providers.\\n
 -  If you see one where spaces are in the title let me know.\\n
 -  But there should not have blank in the key of config or .env file.
&quot;&quot;&quot;
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,7),b={id:"\u4F7F\u7528-map-\u548C-implode-\u65B9\u6CD5",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#\u4F7F\u7528-map-\u548C-implode-\u65B9\u6CD5","aria-hidden":"true"},"#",-1),d=n(" \u4F7F\u7528 "),m={href:"/collections/map.md",target:"_blank",rel:"noopener noreferrer"},h=n("map"),g=n(" \u548C "),f={href:"/collections/implode.md",target:"_blank",rel:"noopener noreferrer"},v=n("implode"),_=n(" \u65B9\u6CD5"),w=p(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;Should be working now for all Providers.&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;If you see one where spaces are in the title let me know.&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$comment</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$messages</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;- &#39;</span> <span class="token operator">.</span> <span class="token variable">$message</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">implode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$comment</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
&quot;&quot;&quot;
- Should be working now for all Providers.\\n
- If you see one where spaces are in the title let me know.\\n
- But there should not have blank in the key of config or .env file.
&quot;&quot;&quot;
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,1);function q(y,$){const a=t("ExternalLinkIcon");return o(),l(r,null,[u,s("h2",b,[k,d,s("a",m,[h,e(a)]),g,s("a",f,[v,e(a)]),_]),w],64)}var I=c(i,[["render",q]]);export{I as default};
