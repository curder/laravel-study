import{e as n}from"./app.3ee12f16.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="crossjoin" tabindex="-1"><a class="header-anchor" href="#crossjoin" aria-hidden="true">#</a> crossJoin</h1><p>\u5C06\u96C6\u5408\u7684\u503C\u4EA4\u53C9\u8FDE\u63A5\u5230\u7ED9\u5B9A\u7684\u6570\u7EC4\u6216\u96C6\u5408\u4E2D\uFF0C\u8FD4\u56DE\u5177\u6709\u6240\u6709\u53EF\u80FD\u6392\u5217\u7684\u7B1B\u5361\u5C14\u79EF\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">crossJoin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1083
     all: [
       [
         1,
         &quot;a&quot;,
       ],
       [
         1,
         &quot;b&quot;,
       ],
       [
         2,
         &quot;a&quot;,
       ],
       [
         2,
         &quot;b&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">crossJoin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1089
     all: [
       [
         1,
         &quot;a&quot;,
         &quot;c&quot;,
       ],
       [
         1,
         &quot;a&quot;,
         &quot;d&quot;,
       ],
       [
         1,
         &quot;b&quot;,
         &quot;c&quot;,
       ],
       [
         1,
         &quot;b&quot;,
         &quot;d&quot;,
       ],
       [
         2,
         &quot;a&quot;,
         &quot;c&quot;,
       ],
       [
         2,
         &quot;a&quot;,
         &quot;d&quot;,
       ],
       [
         2,
         &quot;b&quot;,
         &quot;c&quot;,
       ],
       [
         2,
         &quot;b&quot;,
         &quot;d&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,4);function e(l,t){return p}var u=s(a,[["render",e]]);export{u as default};
