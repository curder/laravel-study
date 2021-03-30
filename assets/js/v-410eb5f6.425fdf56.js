(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[9008],{5011:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-410eb5f6",path:"/others/send_mesages_use_service_partten.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"编写前的准备",slug:"编写前的准备",children:[]},{level:3,title:"编辑文件 app/Services/EmailService.php",slug:"编辑文件-app-services-emailservice-php",children:[]},{level:3,title:"编辑文件 app/Http/Controllers/UserController.php",slug:"编辑文件-app-http-controllers-usercontroller-php",children:[]}],filePathRelative:"others/send_mesages_use_service_partten.md",git:{updatedTime:161707193e4,contributors:[]}}},9403:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<p>参考地址：http://oomusou.io/laravel/laravel-service/</p><ol><li>将外部行为注入到 service。</li><li>在 service 使用外部行为。</li><li>将 service 注入到 controller。</li></ol><h3 id="编写前的准备"><a class="header-anchor" href="#编写前的准备">#</a> 编写前的准备</h3><p>主要有两个配置文件: <code>config/mail.php</code> <code>.env</code> ，其中 <strong>.env</strong> 覆盖 <code>mail.php</code> 里的值，因此配置 <code>.env</code> 里的内容就可以了：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MAIL_DRIVER=smtp\nMAIL_HOST=smtp.qiye.163.com\nMAIL_PORT=25\nMAIL_USERNAME=账号\nMAIL_PASSWORD=密码\nMAIL_ENCRYPTION=null\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>照着上面这样配置。</p><h3 id="编辑文件-app-services-emailservice-php"><a class="header-anchor" href="#编辑文件-app-services-emailservice-php">#</a> 编辑文件 <strong>app/Services/EmailService.php</strong></h3><p>在 Laravel5 项目根目录下新建文件夹 <code>Services</code> ，我们的 <code>EmailService.php</code> 就放在这个文件夹下。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Services</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Mail<span class="token punctuation">\\</span>Mailer</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Mail<span class="token punctuation">\\</span>Message</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">EmailService</span>\n<span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name">Mailer</span> */</span>\n    <span class="token keyword">private</span> <span class="token variable">$mail</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * EmailService constructor.\n     * <span class="token keyword">@param</span> <span class="token class-name">Mailer</span> <span class="token parameter">$mail</span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Mailer</span> <span class="token variable">$mail</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mail</span> <span class="token operator">=</span> <span class="token variable">$mail</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * 发送Email\n     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$request</span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$request</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mail</span><span class="token operator">-&gt;</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email.index&#39;</span><span class="token punctuation">,</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Message</span> <span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token variable">$message</span><span class="token operator">-&gt;</span><span class="token function">sender</span><span class="token punctuation">(</span><span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MAIL_USERNAME&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token variable">$message</span><span class="token operator">-&gt;</span><span class="token function">subject</span><span class="token punctuation">(</span><span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MAIL_SUBJECT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token variable">$message</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MAIL_TO_ADDR&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><blockquote><ol><li>将 <code>Mailer</code> 类注入到 <code>EmailService</code> 。</li></ol></blockquote><ol start="2"><li>将发送 <code>Email</code> 的业务逻辑写在 <code>send()</code> 。不是使用 <code>Mail facade</code> ，而是使用注入的 <code>$this-&gt;mail</code> 。</li></ol><h3 id="编辑文件-app-http-controllers-usercontroller-php"><a class="header-anchor" href="#编辑文件-app-http-controllers-usercontroller-php">#</a> 编辑文件 <strong>app/Http/Controllers/UserController.php</strong></h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Requests</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>EmailService</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>\n<span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name">EmailService</span> */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$emailService</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * UserController constructor.\n     * <span class="token keyword">@param</span> <span class="token class-name">EmailService</span> <span class="token parameter">$emailService</span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">EmailService</span> <span class="token variable">$emailService</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">emailService</span> <span class="token operator">=</span> <span class="token variable">$emailService</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * Store a newly created resource in storage.\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span>  <span class="token parameter">$request</span>\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">emailService</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote><ol><li>将依赖的 <code>EmailService</code> 注入到 <code>UserController</code> 。</li></ol></blockquote><ol start="2"><li>从原本直接依赖 <code>Mail facade</code>，改成依赖注入的 <code>EmailService</code> 。</li></ol>',15),p={render:function(n,s){return e}}}}]);