import{e as n}from"./app.7feb4b93.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u53C2\u8003\u5730\u5740\uFF1Ahttp://oomusou.io/laravel/laravel-service/</p><ol><li>\u5C06\u5916\u90E8\u884C\u4E3A\u6CE8\u5165\u5230 service\u3002</li><li>\u5728 service \u4F7F\u7528\u5916\u90E8\u884C\u4E3A\u3002</li><li>\u5C06 service \u6CE8\u5165\u5230 controller\u3002</li></ol><h3 id="\u7F16\u5199\u524D\u7684\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u524D\u7684\u51C6\u5907" aria-hidden="true">#</a> \u7F16\u5199\u524D\u7684\u51C6\u5907</h3><p>\u4E3B\u8981\u6709\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6: <code>config/mail.php</code>\xA0<code>.env</code> \uFF0C\u5176\u4E2D <strong>.env</strong> \u8986\u76D6 <code>mail.php</code> \u91CC\u7684\u503C\uFF0C\u56E0\u6B64\u914D\u7F6E <code>.env</code> \u91CC\u7684\u5185\u5BB9\u5C31\u53EF\u4EE5\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MAIL_DRIVER=smtp
MAIL_HOST=smtp.qiye.163.com
MAIL_PORT=25
MAIL_USERNAME=\u8D26\u53F7
MAIL_PASSWORD=\u5BC6\u7801
MAIL_ENCRYPTION=null
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7167\u7740\u4E0A\u9762\u8FD9\u6837\u914D\u7F6E\u3002</p><h3 id="\u7F16\u8F91\u6587\u4EF6-app-services-emailservice-php" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u6587\u4EF6-app-services-emailservice-php" aria-hidden="true">#</a> \u7F16\u8F91\u6587\u4EF6 <strong>app/Services/EmailService.php</strong></h3><p>\u5728 Laravel5 \u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u6587\u4EF6\u5939 <code>Services</code> \uFF0C\u6211\u4EEC\u7684 <code>EmailService.php</code> \u5C31\u653E\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Services</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Mail<span class="token punctuation">\\</span>Mailer</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Mail<span class="token punctuation">\\</span>Message</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EmailService</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name">Mailer</span> */</span>
    <span class="token keyword">private</span> <span class="token variable">$mail</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * EmailService constructor.
     * <span class="token keyword">@param</span> <span class="token class-name">Mailer</span> <span class="token parameter">$mail</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Mailer</span> <span class="token variable">$mail</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mail</span> <span class="token operator">=</span> <span class="token variable">$mail</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u9001Email
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$request</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">send</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">mail</span><span class="token operator">-&gt;</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email.index&#39;</span><span class="token punctuation">,</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Message</span> <span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$message</span><span class="token operator">-&gt;</span><span class="token function">sender</span><span class="token punctuation">(</span><span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MAIL_USERNAME&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$message</span><span class="token operator">-&gt;</span><span class="token function">subject</span><span class="token punctuation">(</span><span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MAIL_SUBJECT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$message</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;MAIL_TO_ADDR&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><blockquote><ol><li>\u5C06 <code>Mailer</code> \u7C7B\u6CE8\u5165\u5230 <code>EmailService</code> \u3002</li></ol></blockquote><ol start="2"><li>\u5C06\u53D1\u9001 <code>Email</code> \u7684\u4E1A\u52A1\u903B\u8F91\u5199\u5728 <code>send()</code> \u3002\u4E0D\u662F\u4F7F\u7528 <code>Mail facade</code> \uFF0C\u800C\u662F\u4F7F\u7528\u6CE8\u5165\u7684 <code>$this-&gt;mail</code> \u3002</li></ol><h3 id="\u7F16\u8F91\u6587\u4EF6-app-http-controllers-usercontroller-php" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u6587\u4EF6-app-http-controllers-usercontroller-php" aria-hidden="true">#</a> \u7F16\u8F91\u6587\u4EF6 <strong>app/Http/Controllers/UserController.php</strong></h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Requests</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>EmailService</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name">EmailService</span> */</span>
    <span class="token keyword">protected</span> <span class="token variable">$emailService</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * UserController constructor.
     * <span class="token keyword">@param</span> <span class="token class-name">EmailService</span> <span class="token parameter">$emailService</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token class-name type-declaration">EmailService</span> <span class="token variable">$emailService</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">emailService</span> <span class="token operator">=</span> <span class="token variable">$emailService</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Store a newly created resource in storage.
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span>  <span class="token parameter">$request</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">emailService</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote><ol><li>\u5C06\u4F9D\u8D56\u7684 <code>EmailService</code> \u6CE8\u5165\u5230 <code>UserController</code> \u3002</li></ol></blockquote><ol start="2"><li>\u4ECE\u539F\u672C\u76F4\u63A5\u4F9D\u8D56 <code>Mail facade</code>\uFF0C\u6539\u6210\u4F9D\u8D56\u6CE8\u5165\u7684 <code>EmailService</code> \u3002</li></ol>`,15);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};