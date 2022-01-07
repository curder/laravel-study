import{r as p,o as t,c as e,b as s,a as o,F as c,e as l,d as n}from"./app.08f3c9a7.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=l(`<h1 id="url-\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#url-\u751F\u6210" aria-hidden="true">#</a> URL \u751F\u6210</h1><h2 id="defaults" tabindex="-1"><a class="header-anchor" href="#defaults" aria-hidden="true">#</a> <code>defaults</code></h2><p>\u53EF\u4EE5\u4F7F\u7528 <code>URL::defaults()</code> \u65B9\u6CD5\u4E3A\u8DEF\u7531\u53C2\u6570\u63D0\u4F9B\u9ED8\u8BA4\u503C\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u8DEF\u7531\u5B9A\u4E49</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware<span class="token punctuation">\\</span>ApplyDefaultRouteValues</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">prefix</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/{account}&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name static-context">ApplyDefaultRouteValues</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/accounts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dd</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Accounts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E2D\u95F4\u4EF6\u5B9A\u4E49</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>URL</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ApplyDefaultRouteValues</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Closure</span> <span class="token variable">$next</span><span class="token punctuation">)</span>g
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">URL</span><span class="token operator">::</span><span class="token function">defaults</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;account&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">account</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$next</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// account \u6709\u9ED8\u8BA4\u503C\u7684\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u63D0\u4F9B</span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string double-quoted-string">&quot;{{ route(&#39;users.index&#39;)}}&quot;</span><span class="token operator">&gt;</span>Users<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,4),k=n("\u66F4\u591A\u5B98\u65B9\u6587\u6863"),d={href:"https://laravel.com/docs/8.x/urls#default-values",target:"_blank",rel:"noopener noreferrer"},b=n("\u67E5\u770B\u8FD9\u91CC"),m=n("\u3002");function f(g,h){const a=p("ExternalLinkIcon");return t(),e(c,null,[i,s("p",null,[k,s("a",d,[b,o(a)]),m])],64)}var y=u(r,[["render",f]]);export{y as default};
