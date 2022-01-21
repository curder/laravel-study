import{r as e,o,c as l,b as s,a as p,F as c,e as t,d as n}from"./app.ec5e6153.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=t(`<h1 id="map-\u683C\u5F0F\u5316\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#map-\u683C\u5F0F\u5316\u6570\u636E" aria-hidden="true">#</a> map \u683C\u5F0F\u5316\u6570\u636E</h1><p>\u6709\u5982\u4E0B\u7ED3\u6784\u6570\u7EC4</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$gates</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;BaiYun_A_A17&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;BeiJing_J7&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;ShuangLiu_K203&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;HongQiao_A157&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;A2&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;BaiYun_B_B230&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8BF7\u5C06\u5B83\u683C\u5F0F\u5316\u540E\u4E3A\u5982\u4E0B\u6570\u7EC4</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$boards</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;A17&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;J7&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;K203&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A157&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B230&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u89C2\u5BDF\u683C\u5F0F\u5316\u540E\u7684\u6570\u7EC4\u4E3A\u539F\u6570\u7EC4\u5143\u7D20<code>_</code>\u540E\u7684\u7ED3\u5C3E\u5B57\u7B26\u3002</p><h2 id="\u4F7F\u7528-foreach-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-foreach-\u5FAA\u73AF" aria-hidden="true">#</a> \u4F7F\u7528 foreach \u5FAA\u73AF</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$gates</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;BaiYun_A_A17&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;BeiJing_J7&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;ShuangLiu_K203&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;HongQiao_A157&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;A2&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;BaiYun_B_B230&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$gates</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$gate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strpos</span><span class="token punctuation">(</span><span class="token variable">$gate</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;_&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$gate</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token variable">$offset</span> <span class="token operator">=</span> <span class="token function">strrpos</span><span class="token punctuation">(</span><span class="token variable">$gate</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;_&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">mb_substr</span><span class="token punctuation">(</span><span class="token variable">$gate</span><span class="token punctuation">,</span> <span class="token variable">$offset</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
array:6 [
  0 =&gt; &quot;A17&quot;
  1 =&gt; &quot;J7&quot;
  2 =&gt; &quot;K203&quot;
  3 =&gt; &quot;A157&quot;
  4 =&gt; &quot;A2&quot;
  5 =&gt; &quot;B230&quot;
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,8),k={id:"\u4F7F\u7528-map-\u65B9\u6CD5",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#\u4F7F\u7528-map-\u65B9\u6CD5","aria-hidden":"true"},"#",-1),g=n(" \u4F7F\u7528 "),m={href:"/collections/map.md",target:"_blank",rel:"noopener noreferrer"},d=n("map"),_=n(" \u65B9\u6CD5"),q=t(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$gates</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;BaiYun_A_A17&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;BeiJing_J7&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;ShuangLiu_K203&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;HongQiao_A157&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;A2&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;BaiYun_B_B230&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$gates</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$gate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$parts</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;_&#39;</span><span class="token punctuation">,</span> <span class="token variable">$gate</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">end</span><span class="token punctuation">(</span><span class="token variable">$parts</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1098
     all: [
       &quot;A17&quot;,
       &quot;J7&quot;,
       &quot;K203&quot;,
       &quot;A157&quot;,
       &quot;A2&quot;,
       &quot;B230&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,1),h={id:"\u4F7F\u7528\u96C6\u5408\u7684-map-\u548C-last-\u65B9\u6CD5",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#\u4F7F\u7528\u96C6\u5408\u7684-map-\u548C-last-\u65B9\u6CD5","aria-hidden":"true"},"#",-1),f=n(" \u4F7F\u7528\u96C6\u5408\u7684 "),A={href:"/collections/map.md",target:"_blank",rel:"noopener noreferrer"},$=n("map"),B=n(" \u548C "),x={href:"/collections/last.md",target:"_blank",rel:"noopener noreferrer"},y=n("last"),J=n(" \u65B9\u6CD5"),w=t(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$gates</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;BaiYun_A_A17&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;BeiJing_J7&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;ShuangLiu_K203&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;HongQiao_A157&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;A2&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;BaiYun_B_B230&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$gates</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$gate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;_&#39;</span><span class="token punctuation">,</span> <span class="token variable">$gate</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1096
     all: [
       &quot;A17&quot;,
       &quot;J7&quot;,
       &quot;K203&quot;,
       &quot;A157&quot;,
       &quot;A2&quot;,
       &quot;B230&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,1);function K(Y,S){const a=e("ExternalLinkIcon");return o(),l(c,null,[r,s("h2",k,[b,g,s("a",m,[d,p(a)]),_]),q,s("h2",h,[v,f,s("a",A,[$,p(a)]),B,s("a",x,[y,p(a)]),J]),w],64)}var I=u(i,[["render",K]]);export{I as default};
