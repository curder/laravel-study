import{e as n}from"./app.2c47fccd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<h1 id="\u8BA2\u5355\u6570\u636E\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#\u8BA2\u5355\u6570\u636E\u6C47\u603B" aria-hidden="true">#</a> \u8BA2\u5355\u6570\u636E\u6C47\u603B</h1><p>\u6709\u5982\u4E0B\u8BA2\u5355\u6570\u636E\uFF0C\u8BA1\u7B97\u6C47\u603B\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$orders = [
    [
        &#39;date&#39; =&gt; &#39;2017-09-11&#39;,
        &#39;supplier&#39; =&gt; &#39;ACME&#39;,
        &#39;item_code&#39; =&gt; &#39;IPHONE_6S&#39;,
        &#39;item_unit_price&#39; =&gt; 799.0,
        &#39;qty&#39; =&gt; 1,
        &#39;customer_name&#39;=&gt;&#39;Andy&#39;,
    ],
    [
        &#39;date&#39; =&gt; &#39;2017-09-11&#39;,
        &#39;supplier&#39; =&gt; &#39;ACME&#39;,
        &#39;item_code&#39; =&gt; &#39;DVD&#39;,
        &#39;item_unit_price&#39; =&gt; 9.8,
        &#39;qty&#39; =&gt; 5,
        &#39;customer_name&#39;=&gt;&#39;Andy&#39;,
    ],
    [
        &#39;date&#39; =&gt; &#39;2017-09-10&#39;,
        &#39;supplier&#39; =&gt; &#39;FOOBAR&#39;,
        &#39;item_code&#39; =&gt; &#39;IPOD&#39;,
        &#39;item_unit_price&#39; =&gt; 129.9,
        &#39;qty&#39; =&gt; 3,
        &#39;customer_name&#39;=&gt;&#39;Andy&#39;,
    ],
    [
        &#39;date&#39; =&gt; &#39;2017-09-10&#39;,
        &#39;supplier&#39; =&gt; &#39;ACME&#39;,
        &#39;item_code&#39; =&gt; &#39;IMAC_RETINA_2016&#39;,
        &#39;item_unit_price&#39; =&gt; 2999.9,
        &#39;qty&#39; =&gt; 1,
        &#39;customer_name&#39;=&gt;&#39;Andy&#39;,
    ],
    [
        &#39;date&#39; =&gt; &#39;2017-09-10&#39;,
        &#39;supplier&#39; =&gt; &#39;ACME&#39;,
        &#39;item_code&#39; =&gt; &#39;DVD&#39;,
        &#39;item_unit_price&#39; =&gt; 9.8,
        &#39;qty&#39; =&gt; 2,
        &#39;customer_name&#39;=&gt;&#39;Andy&#39;,
    ],
    [
        &#39;date&#39; =&gt; &#39;2017-09-10&#39;,
        &#39;supplier&#39; =&gt; &#39;ACME&#39;,
        &#39;item_code&#39; =&gt; &#39;DVD&#39;,
        &#39;item_unit_price&#39; =&gt; 9.8,
        &#39;qty&#39; =&gt; 2,
        &#39;customer_name&#39;=&gt;&#39;Mandy&#39;,
    ],
    [
        &#39;date&#39; =&gt; &#39;2017-09-10&#39;,
        &#39;supplier&#39; =&gt; &#39;ACME&#39;,
        &#39;item_code&#39; =&gt; &#39;CUPHOLDER&#39;,
        &#39;item_unit_price&#39; =&gt; 3.8,
        &#39;qty&#39; =&gt; 3,
        &#39;customer_name&#39;=&gt;&#39;Mandy&#39;,
    ],
];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="\u6839\u636E\u65E5\u671F\u6C47\u603B\u8BA2\u5355" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u65E5\u671F\u6C47\u603B\u8BA2\u5355" aria-hidden="true">#</a> \u6839\u636E\u65E5\u671F\u6C47\u603B\u8BA2\u5355</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$result = collect($orders)-&gt;groupBy(&#39;date&#39;);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u6839\u636E\u65E5\u671F\u548C\u4F9B\u5E94\u5546\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u65E5\u671F\u548C\u4F9B\u5E94\u5546\u5206\u7EC4" aria-hidden="true">#</a> \u6839\u636E\u65E5\u671F\u548C\u4F9B\u5E94\u5546\u5206\u7EC4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$result = collect($orders)-&gt;groupBy(&#39;date&#39;)-&gt;map(function($item){
    return $item-&gt;groupBy(&#39;supplier&#39;);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="\u8BA1\u7B97\u6BCF\u65E5\u9500\u552E\u91D1\u989D" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u6BCF\u65E5\u9500\u552E\u91D1\u989D" aria-hidden="true">#</a> \u8BA1\u7B97\u6BCF\u65E5\u9500\u552E\u91D1\u989D</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$result = collect($orders)-&gt;groupBy(&#39;date&#39;)-&gt;map(function($item){
    return $item-&gt;sum(function($item){
        return $item[&#39;item_unit_price&#39;] * $item[&#39;qty&#39;];
    });
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9);function r(l,p){return a}var b=s(e,[["render",r]]);export{b as default};
