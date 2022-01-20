import{e as n}from"./app.d0f5f04a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mapwithkeys" tabindex="-1"><a class="header-anchor" href="#mapwithkeys" aria-hidden="true">#</a> mapWithKeys</h1><p>\u904D\u5386\u96C6\u5408\u5E76\u5C06\u6BCF\u4E2A\u503C\u4F20\u5165\u7ED9\u5B9A\u7684\u56DE\u8C03\u3002\u56DE\u8C03\u5E94\u8BE5\u8FD4\u56DE\u5305\u542B\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u5173\u8054\u6570\u7EC4</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$item</span> <span class="token operator">=&gt;</span> <span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1085
     all: [
       &quot;first&quot; =&gt; &quot;value1&quot;,
       &quot;second&quot; =&gt; &quot;value2&quot;,
     ],
   <span class="token punctuation">}</span> 
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u53EF\u4EE5\u5728 <code>mapWithKeys</code> \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u8FD4\u56DE\u7A7A\u6570\u7EC4\u6765\u5FFD\u7565\u96C6\u5408\u4E2D\u7684\u67D0\u4E9B\u5143\u7D20\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$key</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;value2&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u96C6\u5408\u4E2D key \u4E3A value2 \u7684\u9879\u6392\u9664</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$item</span> <span class="token operator">=&gt;</span> <span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1091
     all: [
       &quot;first&quot; =&gt; &quot;value1&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6DFB\u52A0\u66F4\u591A\u5143\u7D20</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token variable">$item</span> <span class="token operator">=&gt;</span> <span class="token variable">$key</span><span class="token punctuation">,</span>
    <span class="token variable">$item</span><span class="token operator">.</span> <span class="token string single-quoted-string">&#39;_upper&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">strtoupper</span><span class="token punctuation">(</span><span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1093
     all: [
       &quot;first&quot; =&gt; &quot;value1&quot;,
       &quot;first_upper&quot; =&gt; &quot;VALUE1&quot;,
       &quot;second&quot; =&gt; &quot;value2&quot;,
       &quot;second_upper&quot; =&gt; &quot;VALUE2&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u4E0D\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u4E0D\u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
[]

array:5 [
  0 =&gt; 1
  1 =&gt; 2
  2 =&gt; 3
  3 =&gt; 4
  4 =&gt; 5
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,9);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
