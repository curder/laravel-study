import{e as n}from"./app.d28f954f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mapspread" tabindex="-1"><a class="header-anchor" href="#mapspread" aria-hidden="true">#</a> mapSpread</h1><p>\u8FED\u4EE3\u96C6\u5408\u7684\u9879\u76EE\uFF0C\u5C06\u6BCF\u4E2A\u5D4C\u5957\u7684\u9879\u76EE\u503C\u4F20\u9012\u5230\u7ED9\u5B9A\u7684\u95ED\u5305\u4E2D\u3002 \u95ED\u5305\u53EF\u4EE5\u81EA\u7531\u4FEE\u6539\u5E76\u8FD4\u56DE\u5B83\uFF0C\u4ECE\u800C\u5F62\u6210\u4E00\u4E2A\u65B0\u7684\u4FEE\u6539\u540E\u7684\u96C6\u5408\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u5C06\u96C6\u5408\u62C6\u6210\u591A\u4E2A\u6307\u5B9A\u5927\u5C0F\u7684\u5C0F\u96C6\u5408</span>
  <span class="token operator">-&gt;</span><span class="token function">mapSpread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$a</span> <span class="token operator">=&gt;</span> <span class="token variable">$b</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1094
     all: [
       [
         1 =&gt; 2,
       ],
       [
         3 =&gt; 4,
       ],
       [
         5 =&gt; 6,
       ],
       [
         7 =&gt; 8,
       ]
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u4E00\u5B9A\u8981\u4FDD\u8BC1\u5BF9\u5E94\u7684\u503C\u6709\u6570\u636E\uFF0C\u5426\u5219\u5C06\u8DDF\u4EA7\u751F\u9884\u671F\u4E0D\u7B26\u5408\u7684\u9519\u8BEF\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">mapSpread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">,</span> <span class="token variable">$c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">*</span> <span class="token variable">$b</span> <span class="token operator">-</span> <span class="token variable">$c</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
  TypeError: Too few arguments to function <span class="token punctuation">{</span>closure<span class="token punctuation">}</span>(), 2 passed in /Users/curder/Codes/laravel8/vendor/laravel/framework/src/Illuminate/Collections/Traits/EnumeratesValues.php on line 316 and exactly 3 expected
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">mapSpread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">,</span> <span class="token variable">$c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">*</span> <span class="token variable">$b</span> <span class="token operator">-</span> <span class="token variable">$c</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:3 [
  0 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1123
    #items: array:3 [
      0 =&gt; 1
      1 =&gt; 2
      2 =&gt; 3
    ]
  <span class="token punctuation">}</span>
  1 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1122
    #items: array:3 [
      3 =&gt; 4
      4 =&gt; 5
      5 =&gt; 6
    ]
  <span class="token punctuation">}</span>
  2 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1121
    #items: array:3 [
      6 =&gt; 7
      7 =&gt; 8
      8 =&gt; 9
    ]
  <span class="token punctuation">}</span>
]
array:3 [
  0 =&gt; -1
  1 =&gt; 14
  2 =&gt; 47
]
array:3 [
  0 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1123
    #items: array:4 [
      0 =&gt; 1
      1 =&gt; 2
      2 =&gt; 3
      3 =&gt; 0
    ]
  <span class="token punctuation">}</span>
  1 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1122
    #items: array:4 [
      3 =&gt; 4
      4 =&gt; 5
      5 =&gt; 6
      6 =&gt; 1
    ]
  <span class="token punctuation">}</span>
  2 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1121
    #items: array:4 [
      6 =&gt; 7
      7 =&gt; 8
      8 =&gt; 9
      9 =&gt; 2
    ]
  <span class="token punctuation">}</span>
] 
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div>`,7);function e(t,l){return p}var u=s(a,[["render",e]]);export{u as default};
