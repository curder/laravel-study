import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const d=JSON.parse('{"title":"undot","description":"","frontmatter":{},"headers":[],"relativePath":"collections/undot.md","filePath":"collections/undot.md","lastUpdated":1697182292000}'),o={name:"collections/undot.md"},p=l(`<h1 id="undot" tabindex="-1">undot <a class="header-anchor" href="#undot" aria-label="Permalink to &quot;undot&quot;">​</a></h1><blockquote><p>使用&quot;点&quot;表示法的单维集合扩展为多维集合</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;name.first_name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Marie&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;name.last_name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Valentine&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;address.line_1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;2992 Eagle Drive&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;address.line_2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;address.suburb&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Detroit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;address.state&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;MI&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;address.postcode&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;48219&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">undot</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;name&quot; =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;first_name&quot; =&gt; &quot;Marie&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;last_name&quot; =&gt; &quot;Valentine&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    ],</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;address&quot; =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;line_1&quot; =&gt; &quot;2992 Eagle Drive&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;line_2&quot; =&gt; &quot;&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;suburb&quot; =&gt; &quot;Detroit&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;state&quot; =&gt; &quot;MI&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;postcode&quot; =&gt; &quot;48219&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    ]</span></span>
<span class="line"><span style="color:#6A737D;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;name.first_name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Marie&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;name.last_name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Valentine&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;address.line_1&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;2992 Eagle Drive&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;address.line_2&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;address.suburb&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Detroit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;address.state&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;MI&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;address.postcode&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;48219&#39;</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">undot</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;name&quot; =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;first_name&quot; =&gt; &quot;Marie&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;last_name&quot; =&gt; &quot;Valentine&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    ],</span></span>
<span class="line"><span style="color:#6A737D;">    &quot;address&quot; =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;line_1&quot; =&gt; &quot;2992 Eagle Drive&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;line_2&quot; =&gt; &quot;&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;suburb&quot; =&gt; &quot;Detroit&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;state&quot; =&gt; &quot;MI&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">        &quot;postcode&quot; =&gt; &quot;48219&quot;</span></span>
<span class="line"><span style="color:#6A737D;">    ]</span></span>
<span class="line"><span style="color:#6A737D;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),t=[p];function e(c,r,y,E,i,u){return n(),a("div",null,t)}const F=s(o,[["render",e]]);export{d as __pageData,F as default};
