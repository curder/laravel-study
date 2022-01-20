import{r as t,o as e,c as p,b as s,a as o,F as c,e as r,d as n}from"./app.cf847f17.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=r(`<h1 id="wherenotinstrict" tabindex="-1"><a class="header-anchor" href="#wherenotinstrict" aria-hidden="true">#</a> whereNotInStrict</h1><p>\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\u901A\u8FC7\u96C6\u5408\u4E2D\u4E0D\u5305\u542B\u7684\u7ED9\u5B9A\u952E\u503C\u5BF9\u8FDB\u884C\u5339\u914D</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;50&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pears&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;60&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;banners&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;70&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;80&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">whereNotInStrict</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1239
     all: [
       [
         &quot;product&quot; =&gt; &quot;apples&quot;,
         &quot;price&quot; =&gt; &quot;50&quot;,
       ],
       [
         &quot;product&quot; =&gt; &quot;pears&quot;,
         &quot;price&quot; =&gt; &quot;60&quot;,
       ],
       [
         &quot;product&quot; =&gt; &quot;banners&quot;,
         &quot;price&quot; =&gt; &quot;70&quot;,
       ],
       [
         &quot;product&quot; =&gt; &quot;coconuts&quot;,
         &quot;price&quot; =&gt; &quot;80&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,3),g=n("\u6B64\u65B9\u6CD5\u7684\u4F7F\u7528\u548C "),b={href:"/collections/whereNotIn.md",target:"_blank",rel:"noopener noreferrer"},k=n("whereNotIn"),d=n(" \u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u53EA\u662F\u4F7F\u7528\u4E86\u300C\u4E25\u683C\u300D\u6BD4\u8F83\u6765\u5339\u914D\u6240\u6709\u503C\u3002");function m(q,h){const a=t("ExternalLinkIcon");return e(),p(c,null,[i,s("p",null,[g,s("a",b,[k,o(a)]),d])],64)}var x=l(u,[["render",m]]);export{x as default};
