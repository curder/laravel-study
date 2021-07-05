(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[1948],{2702:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-4428c5d1",path:"/model/laravel-model-caching.html",title:"模型缓存",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Touching 模型",slug:"touching-模型",children:[]},{level:2,title:"缓存属性",slug:"缓存属性",children:[]},{level:2,title:"下一步是什么？",slug:"下一步是什么",children:[]}],filePathRelative:"model/laravel-model-caching.md",git:{updatedTime:161700545e4,contributors:[]}}},5789:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>b});var p=a(6252);const e=(0,p.Wm)("h1",{id:"模型缓存",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#模型缓存","aria-hidden":"true"},"#"),(0,p.Uk)(" 模型缓存")],-1),t=(0,p.Uk)("本文原文来自 "),o={href:"https://laravel-news.com/laravel-model-caching",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("Laravel News"),l=(0,p.Uk)(" ，代码在 "),u={href:"https://github.com/curder/laravel-model-caching",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Uk)("GitHub"),i=(0,p.Uk)(" 。"),k=(0,p.uE)('<p>之前可能已经在控制器中缓存了一些模型数据，但是 Laravel 模型缓存技术，它使用活动记录模型更精细一些。</p><p>使用模型上的唯一缓存键，可以缓存模型（或相关模型）更新时自动更新（以及缓存失效）的模型上的属性和关联。</p><p>一个好处是访问缓存的数据比在控制器中缓存数据更具可移植性，因为它在模型上而不是在单个控制器方法中。</p><p>假设现在有一个有许多评论模型的文章模型。</p><p>给出以下的<strong>laravel blade</strong>模板，可以在 <code>/articles</code> 路径上那样检索评论计数：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">plural</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Comment&#39;</span><span class="token punctuation">,</span> <span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以在控制器中缓存评论计数，但是当有多个需要缓存的一次性查询和数据时，控制器会变得非常难看。</p><p>使用控制器，访问缓存的数据也不是很方便。</p><p>我们可以构建一个模板，只有在文章更新时才能访问数据库，任何有权访问模型的代码都可以获取缓存的值：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">cached_comments_count</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">plural</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Comment&#39;</span><span class="token punctuation">,</span> <span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">cached_comments_count</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用模型访问器，我们将根据文章上次更新的时间缓存评论计数。</p><p>那么当新评论被添加或删除时，我们如何更新文章的 <code>updated_at</code> 列呢？</p><p>答案是通过配置 <code>touch</code> 的方式。</p><h2 id="touching-模型" tabindex="-1"><a class="header-anchor" href="#touching-模型" aria-hidden="true">#</a> Touching 模型</h2><p>使用模型的 <code>touch()</code> 方法，我们可以更新文章的 <code>updated_at</code> 列</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>\n\n<span class="token variable">$article</span> <span class="token operator">=</span> <span class="token class-name static-context">Article</span><span class="token operator">::</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token function">touch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">updated_at</span><span class="token operator">-&gt;</span><span class="token property">timestamp</span><span class="token punctuation">;</span> <span class="token comment">// 调用 touch 方法后模型资源的 updated_at 字段将被更新</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>我们可以使用更新后的时间戳来使缓存无效，但是当我们添加或删除评论时，我们如何触摸文章的 <code>updated_at</code> 字段？</p><p>恰恰恰巧，Eloquent 模型有一个名为 <code>$touches</code> 的属性。以下是我们的评论模型可能的样子：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">Comment</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">protected</span> <span class="token variable">$touches</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;article&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">article</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">Article</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>$touches</code> 属性是一个包含关联的数组，当评论被创建，保存或删除时，该关联将会被&quot;触及&quot;。</p><h2 id="缓存属性" tabindex="-1"><a class="header-anchor" href="#缓存属性" aria-hidden="true">#</a> 缓存属性</h2><p>回到 <code>$article-&gt;cached_comments_count</code> 访问器。在 <code>App\\Models\\Article</code> 模型中实现可能如下所示：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCachedCommentsCountAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Cache</span><span class="token operator">::</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:comments_count&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>我们使用唯一的 <code>cachekey()</code> 方法将模型缓存15分钟，并简单地返回闭包内的注释计数。</p><blockquote><p>请注意，我们也可以使用<code>\\Cache::rememberforever()</code>方法，并依靠我们的缓存机制的垃圾收集来删除旧key。我已经设置了一个计时器，以便缓存将在大部分时间点击，每十五分钟一次新的缓存。</p></blockquote><p><code>cachekey()</code>方法需要使模型唯一，并在模型更新时使缓存失效。这是快捷键实现：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">sprintf</span><span class="token punctuation">(</span>\n        <span class="token string double-quoted-string">&quot;%s/%s-%s&quot;</span><span class="token punctuation">,</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">updated_at</span><span class="token operator">-&gt;</span><span class="token property">timestamp</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>模型的<code>cachekey()</code>方法的示例输出可能会返回以下字符串表示形式：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>articles/1-1515650910\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>关键是表的名称，模型ID和当前<code>updated_at</code>时间戳。一旦我们触摸模型，时间戳将被更新，我们的模型缓存将被适当地失效。</p><p>完整的<code>Article</code>模型内容如下：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Comment</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Cache</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">Article</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">sprintf</span><span class="token punctuation">(</span>\n            <span class="token string double-quoted-string">&quot;%s/%s-%s&quot;</span><span class="token punctuation">,</span>\n            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">updated_at</span><span class="token operator">-&gt;</span><span class="token property">timestamp</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Comment</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCachedCommentsCountAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name static-context">Cache</span><span class="token operator">::</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:comments_count&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>和相关的评论模型：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">Comment</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">protected</span> <span class="token variable">$touches</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;article&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">article</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">Article</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="下一步是什么" tabindex="-1"><a class="header-anchor" href="#下一步是什么" aria-hidden="true">#</a> 下一步是什么？</h2><p>我已经告诉你如何缓存一个简单的评论计数，但是如何缓存所有的评论？</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCachedCommentsAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name static-context">Cache</span><span class="token operator">::</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:comments&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>也可以选择将注释转换为数组，而不是序列化模型，只允许简单的数组访问前端数据：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCachedCommentsAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name static-context">Cache</span><span class="token operator">::</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:comments&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>最后，我在文章模型中定义了 <code>cachekey()</code> 方法，但是您希望通过一个叫做 ProvidesModelCacheKey 的 trait 来定义这个方法，您可以在多个模型上使用这个方法，或者在我们所有模型扩展的基本模型上定义方法。</p><p>您甚至可能希望为实现 <code>cachekey()</code> 方法的模型使用合同（接口）。</p>',41),b={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("p",null,[t,(0,p.Wm)("a",o,[c,(0,p.Wm)(a)]),l,(0,p.Wm)("a",u,[r,(0,p.Wm)(a)]),i]),k],64)}}}}]);