(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[8327],{6396:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-033ad596",path:"/collections/groupBy.html",title:"groupBy",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"不改变原集合",slug:"不改变原集合",children:[]}],filePathRelative:"collections/groupBy.md",git:{updatedTime:161707193e4,contributors:[]}}},6022:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="groupby"><a class="header-anchor" href="#groupby">#</a> groupBy</h1><p><strong>不改变原集合</strong>，根据给定的键对集合内的项目进行分组。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;key0&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key3&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key4&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key5&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token comment">/*\n=&gt; Illuminate\\Support\\Collection {#1254\n     all: [\n       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection {#1256\n         all: [\n           [\n             &quot;product&quot; =&gt; &quot;apples&quot;,\n             &quot;price&quot; =&gt; 10,\n           ],\n           [\n             &quot;product&quot; =&gt; &quot;apples&quot;,\n             &quot;price&quot; =&gt; 10,\n           ],\n           [\n             &quot;product&quot; =&gt; &quot;apples&quot;,\n             &quot;price&quot; =&gt; 20,\n           ],\n           [\n             &quot;product&quot; =&gt; &quot;apples&quot;,\n             &quot;price&quot; =&gt; 30,\n           ],\n         ],\n       },\n       &quot;coconuts&quot; =&gt; Illuminate\\Support\\Collection {#1255\n         all: [\n           [\n             &quot;product&quot; =&gt; &quot;coconuts&quot;,\n             &quot;price&quot; =&gt; 40,\n           ],\n           [\n             &quot;product&quot; =&gt; &quot;coconuts&quot;,\n             &quot;price&quot; =&gt; 50,\n           ],\n         ],\n       },\n     ],\n   }\n*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>默认情况下 <code>key</code> 将会被重置，通过传入第二个参数 <code>true</code> 保留 <code>key</code>。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;key0&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key3&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key4&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key5&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加 true 参数，保留key</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1257\n     all: [\n       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1259\n         all: [\n           &quot;key0&quot; =&gt; [\n             &quot;product&quot; =&gt; &quot;apples&quot;,\n             &quot;price&quot; =&gt; 10,\n           ],\n           &quot;key1&quot; =&gt; [\n             &quot;product&quot; =&gt; &quot;apples&quot;,\n             &quot;price&quot; =&gt; 10,\n           ],\n           &quot;key2&quot; =&gt; [\n             &quot;product&quot; =&gt; &quot;apples&quot;,\n             &quot;price&quot; =&gt; 20,\n           ],\n           &quot;key3&quot; =&gt; [\n             &quot;product&quot; =&gt; &quot;apples&quot;,\n             &quot;price&quot; =&gt; 30,\n           ],\n         ],\n       <span class="token punctuation">}</span>,\n       &quot;coconuts&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1258\n         all: [\n           &quot;key4&quot; =&gt; [\n             &quot;product&quot; =&gt; &quot;coconuts&quot;,\n             &quot;price&quot; =&gt; 40,\n           ],\n           &quot;key5&quot; =&gt; [\n             &quot;product&quot; =&gt; &quot;coconuts&quot;,\n             &quot;price&quot; =&gt; 50,\n           ],\n         ],\n       <span class="token punctuation">}</span>,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>除了传入一个字符串的「键」，还可以传入一个回调。该回调应该返回用来分组的键的值。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 下面的示例如果使用 `code` 字段来分组的话得到的结果不是预期，可以通过回调函数稍作处理。</span>\n<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123-VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123 VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$element</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1242\n     all: [\n       &quot;123VG&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1243\n         all: [\n           [\n             &quot;code&quot; =&gt; &quot;123VG&quot;,\n             &quot;name&quot; =&gt; &quot;string1&quot;,\n           ],\n           [\n             &quot;code&quot; =&gt; &quot;123-VG&quot;,\n             &quot;name&quot; =&gt; &quot;string2&quot;,\n           ],\n           [\n             &quot;code&quot; =&gt; &quot;123 VG&quot;,\n             &quot;name&quot; =&gt; &quot;string3&quot;,\n           ],\n         ],\n       <span class="token punctuation">}</span>,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="不改变原集合"><a class="header-anchor" href="#不改变原集合">#</a> 不改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123-VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123 VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$element</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:3 [\n  0 =&gt; array:2 [\n    &quot;code&quot; =&gt; &quot;123VG&quot;\n    &quot;name&quot; =&gt; &quot;string1&quot;\n  ]\n  1 =&gt; array:2 [\n    &quot;code&quot; =&gt; &quot;123-VG&quot;\n    &quot;name&quot; =&gt; &quot;string2&quot;\n  ]\n  2 =&gt; array:2 [\n    &quot;code&quot; =&gt; &quot;123 VG&quot;\n    &quot;name&quot; =&gt; &quot;string3&quot;\n  ]\n]\narray:1 [\n  &quot;123VG&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1257\n    #items: array:3 [\n      0 =&gt; array:2 [\n        &quot;code&quot; =&gt; &quot;123VG&quot;\n        &quot;name&quot; =&gt; &quot;string1&quot;\n      ]\n      1 =&gt; array:2 [\n        &quot;code&quot; =&gt; &quot;123-VG&quot;\n        &quot;name&quot; =&gt; &quot;string2&quot;\n      ]\n      2 =&gt; array:2 [\n        &quot;code&quot; =&gt; &quot;123 VG&quot;\n        &quot;name&quot; =&gt; &quot;string3&quot;\n      ]\n    ]\n  <span class="token punctuation">}</span>\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>',9),t={render:function(n,s){return p}}}}]);