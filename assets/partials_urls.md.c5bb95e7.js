import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e8ee2c8f.js";const d=JSON.parse('{"title":"URL 生成","description":"","frontmatter":{},"headers":[],"relativePath":"partials/urls.md","filePath":"partials/urls.md","lastUpdated":1695290967000}'),p={name:"partials/urls.md"},o=l(`<h1 id="url-生成" tabindex="-1">URL 生成 <a class="header-anchor" href="#url-生成" aria-label="Permalink to &quot;URL 生成&quot;">​</a></h1><h2 id="defaults" tabindex="-1"><code>defaults</code> <a class="header-anchor" href="#defaults" aria-label="Permalink to &quot;\`defaults\`&quot;">​</a></h2><p>可以使用 <code>URL::defaults()</code> 方法为路由参数提供默认值。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 路由定义</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">App\\Http\\Middleware\\ApplyDefaultRouteValues</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Route</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">prefix</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/{account}&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">middleware</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">ApplyDefaultRouteValues</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">group</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Route</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/accounts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Accounts&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 中间件定义</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Support\\Facades\\URL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ApplyDefaultRouteValues</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handle</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Request</span><span style="color:#E1E4E8;"> $request, </span><span style="color:#79B8FF;">Closure</span><span style="color:#E1E4E8;"> $next)g</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        URL::defaults([</span></span>
<span class="line"><span style="color:#E1E4E8;">            &#39;account&#39; =&gt; $request-&gt;user()-&gt;account,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $next($request);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// account 有默认值的情况下不需要提供</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">href</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;{{ route(&#39;users.index&#39;)}}&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#79B8FF;">Users</span><span style="color:#F97583;">&lt;/</span><span style="color:#79B8FF;">a</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 路由定义</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">App\\Http\\Middleware\\ApplyDefaultRouteValues</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Route</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">prefix</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/{account}&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">middleware</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">ApplyDefaultRouteValues</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">group</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Route</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/accounts&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Accounts&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 中间件定义</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Support\\Facades\\URL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ApplyDefaultRouteValues</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handle</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Request</span><span style="color:#24292E;"> $request, </span><span style="color:#005CC5;">Closure</span><span style="color:#24292E;"> $next)g</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        URL::defaults([</span></span>
<span class="line"><span style="color:#24292E;">            &#39;account&#39; =&gt; $request-&gt;user()-&gt;account,</span></span>
<span class="line"><span style="color:#24292E;">        ]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $next($request);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// account 有默认值的情况下不需要提供</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">href</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;{{ route(&#39;users.index&#39;)}}&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;">Users</span><span style="color:#D73A49;">&lt;/</span><span style="color:#005CC5;">a</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>更多官方文档<a href="https://laravel.com/docs/master/urls#default-values" target="_blank" rel="noreferrer">查看这里</a>。</p>`,5),e=[o];function t(c,r,y,E,i,u){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};
