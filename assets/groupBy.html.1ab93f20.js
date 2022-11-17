import{e as n}from"./app.ba368228.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="groupby" tabindex="-1"><a class="header-anchor" href="#groupby" aria-hidden="true">#</a> groupBy</h1><p><strong>\u4E0D\u6539\u53D8\u539F\u96C6\u5408</strong>\uFF0C\u6839\u636E\u7ED9\u5B9A\u7684\u952E\u5BF9\u96C6\u5408\u5185\u7684\u9879\u76EE\u8FDB\u884C\u5206\u7EC4\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;key0&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key3&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key4&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key5&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token comment">/*
=&gt; Illuminate\\Support\\Collection {#1254
     all: [
       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection {#1256
         all: [
           [
             &quot;product&quot; =&gt; &quot;apples&quot;,
             &quot;price&quot; =&gt; 10,
           ],
           [
             &quot;product&quot; =&gt; &quot;apples&quot;,
             &quot;price&quot; =&gt; 10,
           ],
           [
             &quot;product&quot; =&gt; &quot;apples&quot;,
             &quot;price&quot; =&gt; 20,
           ],
           [
             &quot;product&quot; =&gt; &quot;apples&quot;,
             &quot;price&quot; =&gt; 30,
           ],
         ],
       },
       &quot;coconuts&quot; =&gt; Illuminate\\Support\\Collection {#1255
         all: [
           [
             &quot;product&quot; =&gt; &quot;coconuts&quot;,
             &quot;price&quot; =&gt; 40,
           ],
           [
             &quot;product&quot; =&gt; &quot;coconuts&quot;,
             &quot;price&quot; =&gt; 50,
           ],
         ],
       },
     ],
   }
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B <code>key</code> \u5C06\u4F1A\u88AB\u91CD\u7F6E\uFF0C\u901A\u8FC7\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570 <code>true</code> \u4FDD\u7559 <code>key</code>\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;key0&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key3&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key4&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;key5&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6DFB\u52A0 true \u53C2\u6570\uFF0C\u4FDD\u7559key</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1257
     all: [
       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1259
         all: [
           &quot;key0&quot; =&gt; [
             &quot;product&quot; =&gt; &quot;apples&quot;,
             &quot;price&quot; =&gt; 10,
           ],
           &quot;key1&quot; =&gt; [
             &quot;product&quot; =&gt; &quot;apples&quot;,
             &quot;price&quot; =&gt; 10,
           ],
           &quot;key2&quot; =&gt; [
             &quot;product&quot; =&gt; &quot;apples&quot;,
             &quot;price&quot; =&gt; 20,
           ],
           &quot;key3&quot; =&gt; [
             &quot;product&quot; =&gt; &quot;apples&quot;,
             &quot;price&quot; =&gt; 30,
           ],
         ],
       <span class="token punctuation">}</span>,
       &quot;coconuts&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1258
         all: [
           &quot;key4&quot; =&gt; [
             &quot;product&quot; =&gt; &quot;coconuts&quot;,
             &quot;price&quot; =&gt; 40,
           ],
           &quot;key5&quot; =&gt; [
             &quot;product&quot; =&gt; &quot;coconuts&quot;,
             &quot;price&quot; =&gt; 50,
           ],
         ],
       <span class="token punctuation">}</span>,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u9664\u4E86\u4F20\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u300C\u952E\u300D\uFF0C\u8FD8\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u3002\u8BE5\u56DE\u8C03\u5E94\u8BE5\u8FD4\u56DE\u7528\u6765\u5206\u7EC4\u7684\u952E\u7684\u503C\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u4E0B\u9762\u7684\u793A\u4F8B\u5982\u679C\u4F7F\u7528 \`code\` \u5B57\u6BB5\u6765\u5206\u7EC4\u7684\u8BDD\u5F97\u5230\u7684\u7ED3\u679C\u4E0D\u662F\u9884\u671F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u7A0D\u4F5C\u5904\u7406\u3002</span>
<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123-VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123 VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$element</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1242
     all: [
       &quot;123VG&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1243
         all: [
           [
             &quot;code&quot; =&gt; &quot;123VG&quot;,
             &quot;name&quot; =&gt; &quot;string1&quot;,
           ],
           [
             &quot;code&quot; =&gt; &quot;123-VG&quot;,
             &quot;name&quot; =&gt; &quot;string2&quot;,
           ],
           [
             &quot;code&quot; =&gt; &quot;123 VG&quot;,
             &quot;name&quot; =&gt; &quot;string3&quot;,
           ],
         ],
       <span class="token punctuation">}</span>,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="\u4E0D\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u4E0D\u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123-VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123 VG&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;string3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39; &#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$element</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:3 [
  0 =&gt; array:2 [
    &quot;code&quot; =&gt; &quot;123VG&quot;
    &quot;name&quot; =&gt; &quot;string1&quot;
  ]
  1 =&gt; array:2 [
    &quot;code&quot; =&gt; &quot;123-VG&quot;
    &quot;name&quot; =&gt; &quot;string2&quot;
  ]
  2 =&gt; array:2 [
    &quot;code&quot; =&gt; &quot;123 VG&quot;
    &quot;name&quot; =&gt; &quot;string3&quot;
  ]
]
array:1 [
  &quot;123VG&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1257
    #items: array:3 [
      0 =&gt; array:2 [
        &quot;code&quot; =&gt; &quot;123VG&quot;
        &quot;name&quot; =&gt; &quot;string1&quot;
      ]
      1 =&gt; array:2 [
        &quot;code&quot; =&gt; &quot;123-VG&quot;
        &quot;name&quot; =&gt; &quot;string2&quot;
      ]
      2 =&gt; array:2 [
        &quot;code&quot; =&gt; &quot;123 VG&quot;
        &quot;name&quot; =&gt; &quot;string3&quot;
      ]
    ]
  <span class="token punctuation">}</span>
]
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,9);function t(e,o){return p}var c=s(a,[["render",t]]);export{c as default};
