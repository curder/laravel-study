import{e as n}from"./app.fc3f71c2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="pipeinto" tabindex="-1"><a class="header-anchor" href="#pipeinto" aria-hidden="true">#</a> pipeInto</h1><p>\u521B\u5EFA\u7ED9\u5B9A\u7C7B\u7684\u65B0\u5B9E\u4F8B\uFF0C\u5E76\u5C06\u96C6\u5408\u4F20\u9012\u7ED9\u6784\u9020\u51FD\u6570\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ResourceCollection</span>
<span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * The Collection instance.
   */</span>
  <span class="token keyword">public</span> <span class="token variable">$collection</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Create a new ResourceCollection instance.
   *
   * <span class="token keyword">@param</span>  <span class="token class-name">Collection</span>  <span class="token parameter">$collection</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Collection</span> <span class="token variable">$collection</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">collection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">pipeInto</span><span class="token punctuation">(</span><span class="token class-name static-context">ResourceCollection</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; ResourceCollection <span class="token punctuation">{</span>#1098
     +collection: Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1099
       all: [
         1,
         2,
         3,
       ],
     <span class="token punctuation">}</span>,
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,3);function e(c,l){return p}var r=s(a,[["render",e]]);export{r as default};
