import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.5499cfac.js";const u=JSON.parse('{"title":"sum 求和数组项","description":"","frontmatter":{},"headers":[],"relativePath":"collections/examples/using-sum-method.md","filePath":"collections/examples/using-sum-method.md","lastUpdated":1677234337000}'),l={name:"collections/examples/using-sum-method.md"},o=p(`<h1 id="sum-求和数组项" tabindex="-1">sum 求和数组项 <a class="header-anchor" href="#sum-求和数组项" aria-label="Permalink to &quot;sum 求和数组项&quot;">​</a></h1><h2 id="计算数组元素和" tabindex="-1">计算数组元素和 <a class="header-anchor" href="#计算数组元素和" aria-label="Permalink to &quot;计算数组元素和&quot;">​</a></h2><p>计算数组中<code>order_products</code>下数组元素<code>price</code>的和</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$orders </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;user_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;13908080808&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;status&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;fee&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;discount&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;order_products&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;order_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;param&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;6寸&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">555.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;蛋糕名称&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;images&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> []],</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;order_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;param&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;7寸&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">333.0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;蛋糕名称&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;images&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> []],</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$orders </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;user_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;number&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;13908080808&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;status&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;fee&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;discount&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">44</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;order_products&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">      [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;order_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;param&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;6寸&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">555.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;蛋糕名称&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;images&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> []],</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;order_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;param&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;7寸&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">333.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;蛋糕名称&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;images&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> []],</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div><h3 id="使用-foreach-循环" tabindex="-1">使用 foreach 循环 <a class="header-anchor" href="#使用-foreach-循环" aria-label="Permalink to &quot;使用 foreach 循环&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$price </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($orders </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $order) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($order[</span><span style="color:#9ECBFF;">&#39;order_products&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $ordert_product) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $price </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> $ordert_product[</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">($price); </span><span style="color:#6A737D;">// 888.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$price </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($orders </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $order) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($order[</span><span style="color:#032F62;">&#39;order_products&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $ordert_product) {</span></span>
<span class="line"><span style="color:#24292E;">    $price </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> $ordert_product[</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">($price); </span><span style="color:#6A737D;">// 888.0</span></span></code></pre></div><blockquote><p>声明临时变量记录总价格，配合两次循环获得总价并累计。</p></blockquote><h3 id="使用-map、flatten-和-sum" tabindex="-1">使用 <a href="./../map.html">map</a>、<a href="./../flatten.html">flatten</a> 和 <a href="./../sum.html">sum</a> <a class="header-anchor" href="#使用-map、flatten-和-sum" aria-label="Permalink to &quot;使用 [map](../map.md)、[flatten](../flatten.md) 和 [sum](../sum.md)&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">($orders)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($order) =&gt; $order[</span><span style="color:#9ECBFF;">&#39;order_products&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">flatten</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($order) =&gt; $order[</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">($orders)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($order) =&gt; $order[</span><span style="color:#032F62;">&#39;order_products&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">flatten</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($order) =&gt; $order[</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">();</span></span></code></pre></div><h3 id="使用-flatmap、pluck-和-sum" tabindex="-1">使用 <a href="./../flatMap.html">flatMap</a>、<a href="./../pluck.html">pluck</a> 和 <a href="./../sum.html">sum</a> <a class="header-anchor" href="#使用-flatmap、pluck-和-sum" aria-label="Permalink to &quot;使用 [flatMap](../flatMap.md)、[pluck](../pluck.md) 和 [sum](../sum.md)&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">($orders)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">flatMap</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($order) =&gt; $order[</span><span style="color:#9ECBFF;">&#39;order_products&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">pluck</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">($orders)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">flatMap</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($order) =&gt; $order[</span><span style="color:#032F62;">&#39;order_products&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">pluck</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">();</span></span></code></pre></div><h3 id="使用-flatmap-和-sum" tabindex="-1">使用 <a href="./../flatMap.html">flatMap</a> 和 <a href="./../sum.html">sum</a> <a class="header-anchor" href="#使用-flatmap-和-sum" aria-label="Permalink to &quot;使用 [flatMap](../flatMap.md) 和 [sum](../sum.md)&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">($orders)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">flatMap</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($order) =&gt; $order[</span><span style="color:#9ECBFF;">&#39;order_products&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">($orders)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">flatMap</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($order) =&gt; $order[</span><span style="color:#032F62;">&#39;order_products&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div>`,13),e=[o];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};
