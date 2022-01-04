import{e as n}from"./app.cc9213f7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mapinto" tabindex="-1"><a class="header-anchor" href="#mapinto" aria-hidden="true">#</a> mapInto</h1><p>\u904D\u5386\u96C6\u5408\uFF0C\u901A\u8FC7\u5C06\u503C\u4F20\u9012\u7ED9\u6784\u9020\u51FD\u6570\u6765\u521B\u5EFA\u7ED9\u5B9A\u7C7B\u7684\u65B0\u5B9E\u4F8B\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span>
  <span class="token operator">-&gt;</span><span class="token function">mapInto</span><span class="token punctuation">(</span><span class="token class-name static-context">Coverter</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$coverter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$coverter</span><span class="token operator">-&gt;</span><span class="token function">toCentimeters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Coverter</span>
<span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token variable">$amount</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$amount</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">amount</span> <span class="token operator">=</span> <span class="token variable">$amount</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toCentimeters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">amount</span> <span class="token operator">*</span> <span class="token number">2.54</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:4 [
  0 =&gt; Coverter <span class="token punctuation">{</span>#1105
    -amount: 1
  <span class="token punctuation">}</span>
  1 =&gt; Coverter <span class="token punctuation">{</span>#1104
    -amount: 2
  <span class="token punctuation">}</span>
  2 =&gt; Coverter <span class="token punctuation">{</span>#1103
    -amount: 3
  <span class="token punctuation">}</span>
  3 =&gt; Coverter <span class="token punctuation">{</span>#1102
    -amount: 4
  <span class="token punctuation">}</span>
]

array:4 [
  0 =&gt; 2.54
  1 =&gt; 5.08
  2 =&gt; 7.62
  3 =&gt; 10.16
]

array:4 [
  0 =&gt; 1
  1 =&gt; 2
  2 =&gt; 3
  3 =&gt; 4
] 
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,3);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
