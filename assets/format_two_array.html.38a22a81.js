import{r as e,o as c,c as o,b as s,a,w as r,F as u,e as t,d as n}from"./app.3a0f108e.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=t(`<h1 id="\u683C\u5F0F\u5316\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u7684\u6570\u636E" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u7684\u6570\u636E</h1><p>\u6709\u5982\u4E0B\u4E24\u7EC4\u6570\u636E\u5206\u522B\u4EE3\u8868\u53BB\u5E74\u7684\u8425\u6536\u548C\u4ECA\u5E74\u7684\u8425\u6536\uFF0C\u6C42\u6BCF\u4E2A\u6708\u7684\u76C8\u4E8F\u60C5\u51B5\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$lastYear</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">6345.75</span><span class="token punctuation">,</span>
    <span class="token number">9839.45</span><span class="token punctuation">,</span>
    <span class="token number">7134.60</span><span class="token punctuation">,</span>
    <span class="token number">9479.50</span><span class="token punctuation">,</span>
    <span class="token number">9928.0</span><span class="token punctuation">,</span>
    <span class="token number">8652.00</span><span class="token punctuation">,</span>
    <span class="token number">7658.40</span><span class="token punctuation">,</span>
    <span class="token number">10245.40</span><span class="token punctuation">,</span>
    <span class="token number">7889.40</span><span class="token punctuation">,</span>
    <span class="token number">3892.40</span><span class="token punctuation">,</span>
    <span class="token number">3638.40</span><span class="token punctuation">,</span>
    <span class="token number">2339.40</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$thisYear</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">6145.75</span><span class="token punctuation">,</span>
    <span class="token number">6895.00</span><span class="token punctuation">,</span>
    <span class="token number">3434.00</span><span class="token punctuation">,</span>
    <span class="token number">9349350</span><span class="token punctuation">,</span>
    <span class="token number">9478.60</span><span class="token punctuation">,</span>
    <span class="token number">7652.80</span><span class="token punctuation">,</span>
    <span class="token number">4758.40</span><span class="token punctuation">,</span>
    <span class="token number">10945.40</span><span class="token punctuation">,</span>
    <span class="token number">3689.40</span><span class="token punctuation">,</span>
    <span class="token number">8992.40</span><span class="token punctuation">,</span>
    <span class="token number">7588.40</span><span class="token punctuation">,</span>
    <span class="token number">2239.40</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="\u4F7F\u7528foreach" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528foreach" aria-hidden="true">#</a> \u4F7F\u7528foreach</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">$lastYear</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">6345.75</span><span class="token punctuation">,</span>
  <span class="token number">9839.45</span><span class="token punctuation">,</span>
  <span class="token number">7134.6</span><span class="token punctuation">,</span>
  <span class="token number">9479.5</span><span class="token punctuation">,</span>
  <span class="token number">9928.0</span><span class="token punctuation">,</span>
  <span class="token number">8652.0</span><span class="token punctuation">,</span>
  <span class="token number">7658.4</span><span class="token punctuation">,</span>
  <span class="token number">10245.4</span><span class="token punctuation">,</span>
  <span class="token number">7889.4</span><span class="token punctuation">,</span>
  <span class="token number">3892.4</span><span class="token punctuation">,</span>
  <span class="token number">3638.4</span><span class="token punctuation">,</span>
  <span class="token number">2339.4</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$thisYear</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">6145.75</span><span class="token punctuation">,</span>
  <span class="token number">6895.0</span><span class="token punctuation">,</span>
  <span class="token number">3434.0</span><span class="token punctuation">,</span>
  <span class="token number">9349350</span><span class="token punctuation">,</span>
  <span class="token number">9478.6</span><span class="token punctuation">,</span>
  <span class="token number">7652.8</span><span class="token punctuation">,</span>
  <span class="token number">4758.4</span><span class="token punctuation">,</span>
  <span class="token number">10945.4</span><span class="token punctuation">,</span>
  <span class="token number">3689.4</span><span class="token punctuation">,</span>
  <span class="token number">8992.4</span><span class="token punctuation">,</span>
  <span class="token number">7588.4</span><span class="token punctuation">,</span>
  <span class="token number">2239.4</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$profit</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$thisYear</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$monthly</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$profit</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$monthly</span> <span class="token operator">-</span> <span class="token variable">$lastYear</span><span class="token punctuation">[</span><span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$profit</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
array:12 [
  0 =&gt; -200.0
  1 =&gt; -2944.45
  2 =&gt; -3700.6
  3 =&gt; 9339870.5
  4 =&gt; -449.4
  5 =&gt; -999.2
  6 =&gt; -2900.0
  7 =&gt; 700.0
  8 =&gt; -4200.0
  9 =&gt; 5100.0
  10 =&gt; 3950.0
  11 =&gt; -100.0
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>`,5),m={id:"\u4F7F\u7528-zip\u3001first-\u548C-last-\u65B9\u6CD5",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#\u4F7F\u7528-zip\u3001first-\u548C-last-\u65B9\u6CD5","aria-hidden":"true"},"#",-1),h=n(" \u4F7F\u7528 "),_={href:"/collections/zip.md",target:"_blank",rel:"noopener noreferrer"},g=n("zip"),f=n("\u3001"),v={href:"/collections/first.md",target:"_blank",rel:"noopener noreferrer"},$=n("first"),y=n(" \u548C "),x=n("last"),Y=n(" \u65B9\u6CD5"),w=t(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$lastYear</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">6345.75</span><span class="token punctuation">,</span>
  <span class="token number">9839.45</span><span class="token punctuation">,</span>
  <span class="token number">7134.6</span><span class="token punctuation">,</span>
  <span class="token number">9479.5</span><span class="token punctuation">,</span>
  <span class="token number">9928.0</span><span class="token punctuation">,</span>
  <span class="token number">8652.0</span><span class="token punctuation">,</span>
  <span class="token number">7658.4</span><span class="token punctuation">,</span>
  <span class="token number">10245.4</span><span class="token punctuation">,</span>
  <span class="token number">7889.4</span><span class="token punctuation">,</span>
  <span class="token number">3892.4</span><span class="token punctuation">,</span>
  <span class="token number">3638.4</span><span class="token punctuation">,</span>
  <span class="token number">2339.4</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$thisYear</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token number">6145.75</span><span class="token punctuation">,</span>
  <span class="token number">6895.0</span><span class="token punctuation">,</span>
  <span class="token number">3434.0</span><span class="token punctuation">,</span>
  <span class="token number">9349350</span><span class="token punctuation">,</span>
  <span class="token number">9478.6</span><span class="token punctuation">,</span>
  <span class="token number">7652.8</span><span class="token punctuation">,</span>
  <span class="token number">4758.4</span><span class="token punctuation">,</span>
  <span class="token number">10945.4</span><span class="token punctuation">,</span>
  <span class="token number">3689.4</span><span class="token punctuation">,</span>
  <span class="token number">8992.4</span><span class="token punctuation">,</span>
  <span class="token number">7588.4</span><span class="token punctuation">,</span>
  <span class="token number">2239.4</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$profit</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$thisYear</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token variable">$lastYear</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$monthly</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$monthly</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token variable">$monthly</span><span class="token operator">-&gt;</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$profit</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1144
  #items: array:12 [
    0 =&gt; -200.0
    1 =&gt; -2944.45
    2 =&gt; -3700.6
    3 =&gt; 9339870.5
    4 =&gt; -449.4
    5 =&gt; -999.2
    6 =&gt; -2900.0
    7 =&gt; 700.0
    8 =&gt; -4200.0
    9 =&gt; 5100.0
    10 =&gt; 3950.0
    11 =&gt; -100.0
  ]
<span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div>`,1);function z(L,N){const p=e("ExternalLinkIcon"),l=e("RouterLink");return c(),o(u,null,[k,s("h2",m,[d,h,s("a",_,[g,a(p)]),f,s("a",v,[$,a(p)]),y,a(l,{to:"/collections/demo/collections/last.html"},{default:r(()=>[x]),_:1}),Y]),w],64)}var C=b(i,[["render",z]]);export{C as default};
