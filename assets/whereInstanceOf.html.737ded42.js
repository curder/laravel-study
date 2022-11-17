import{e as n}from"./app.ba368228.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="whereinstanceof" tabindex="-1"><a class="header-anchor" href="#whereinstanceof" aria-hidden="true">#</a> whereInstanceOf</h1><p>\u8BE5\u65B9\u6CD5\u6309\u7ED9\u5B9A\u7684\u7C7B\u7C7B\u578B\u8FC7\u6EE4\u96C6\u5408\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Article</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">whereInstanceOf</span><span class="token punctuation">(</span><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1214
     all: [
       2 =&gt; Post <span class="token punctuation">{</span>#1217<span class="token punctuation">}</span>,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,3);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
