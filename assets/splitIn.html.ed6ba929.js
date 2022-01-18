import{e as n}from"./app.3a0f108e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="splitin" tabindex="-1"><a class="header-anchor" href="#splitin" aria-hidden="true">#</a> splitIn</h1><p>\u5C06\u96C6\u5408\u5206\u4E3A\u7ED9\u5B9A\u6570\u91CF\u7684\u7EC4\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">splitIn</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1084
     all: [
       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1087
         all: [
           1,
           2,
           3,
           4,
         ],
       <span class="token punctuation">}</span>,
       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1086
         all: [
           4 =&gt; 5,
           5 =&gt; 6,
           6 =&gt; 7,
           7 =&gt; 8,
         ],
       <span class="token punctuation">}</span>,
       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1085
         all: [
           8 =&gt; 9,
           9 =&gt; 10,
         ],
       <span class="token punctuation">}</span>,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,3);function e(l,t){return p}var r=s(a,[["render",e]]);export{r as default};
