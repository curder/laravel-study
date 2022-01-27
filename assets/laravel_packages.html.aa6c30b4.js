import{r as i,o as l,c as p,b as n,a,F as c,e as r,d as e}from"./app.fc3f71c2.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const o={},d=r(`<p>Laravel 5.4 GitHub\u6258\u7BA1\u6570\u636E Packagist\u6258\u7BA1Composer\u5305</p><p>\u9996\u5148\uFF0C\u4F7F\u7528composer\u83B7\u53D6\u5230Laravel\u9879\u76EE\uFF0C\u5E76\u505A\u597D\u76F8\u5173\u914D\u7F6E\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A \u5728\u4E0B\u4F8B\u4E2D\u4F7F\u7528\u5230 php \u76F8\u5173\u547D\u4EE4\u884C\u6267\u884C\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u5982\u65E0\u7279\u6B8A\u8BF4\u660E\u90FD\u662F\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u64CD\u4F5C\u3002</p></blockquote><h2 id="\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> \u521B\u5EFA\u76EE\u5F55</h2><ul><li>\u521B\u5EFA<code>packages</code>\u76EE\u5F55\u5B58\u653E\u672C\u5730\u7684\u5F00\u53D1\u5305\uFF0C</li><li>\u5728<code>packages</code>\u76EE\u5F55\u4E0B\uFF0C\u521B\u5EFA\u76F8\u5E94\u7684<code>vendor</code>\u76EE\u5F55\uFF0C\u5982<code>github</code>\u7684\u7528\u6237\u540D\u7B49\uFF0C\u5982\u8FD9\u91CC\u6211\u4F7F\u7528\u7684<code>curder</code></li><li>\u5728<code>curder</code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u8F6F\u4EF6\u5305\u540D\u79F0\uFF0C<code>laravel-admin</code></li></ul><p>\u5177\u4F53\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app/
artisan/
...
database/
package.json
packages
\u2514\u2500\u2500 curder
    \u2514\u2500\u2500 laravel-admin
        \u2514\u2500\u2500 src
phpunit.xml
public/
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4FEE\u6539-composer-json-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-composer-json-\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539 <code>composer.json</code> \u6587\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;autoload&quot;: {
    &quot;classmap&quot;: [
        &quot;database/seeds&quot;,
        &quot;database/factories&quot;
    ],
    &quot;psr-4&quot;: {
        &quot;App\\\\&quot;: &quot;app/&quot;
    }
},
&quot;autoload-dev&quot;: {
    &quot;psr-4&quot;: {
        &quot;Tests\\\\&quot;: &quot;tests/&quot;,
        &quot;Curder\\\\Admin\\\\&quot;: &quot;packages/curder/laravel-admin/src/&quot;
    }
},
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>\u6CE8\u610F\u770B\u4E0A\u8FF0\u914D\u7F6E\u4E2D <code>Curder\\\\Admin\\\\</code>\uFF08\u547D\u540D\u7A7A\u95F4\uFF09\u7684\u503C\uFF0C\u914D\u7F6E\u503C\u6307\u5411\u76EE\u5F55\u771F\u5B9E\u8DEF\u5F84\u3002</p></blockquote><h2 id="\u751F\u6210provider\u5E76\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210provider\u5E76\u6CE8\u518C" aria-hidden="true">#</a> \u751F\u6210<code>Provider</code>\u5E76\u6CE8\u518C</h2><h3 id="\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u6587\u4EF6-admin-php" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u6587\u4EF6-admin-php" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u6587\u4EF6 Admin.php</h3><p>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php
namespace Curder\\Admin;

class Admin {
    public function sayHello() {
        return &#39;Hello&#39;;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u751F\u6210provider\u6587\u4EF6\u5E76\u632A\u5230\u76F8\u5E94\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210provider\u6587\u4EF6\u5E76\u632A\u5230\u76F8\u5E94\u4F4D\u7F6E" aria-hidden="true">#</a> \u751F\u6210<code>Provider</code>\u6587\u4EF6\u5E76\u632A\u5230\u76F8\u5E94\u4F4D\u7F6E</h3><p>\u4F7F\u7528\u547D\u4EE4\u751F\u6210\u4E00\u4E2A<code>Provider</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:provider AdminProvider
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u5B8C\u8FD9\u4E2A\u547D\u4EE4\u5C06\u751F\u6210 <code>AdminProvider.php</code> \u6587\u4EF6\u5728 <code>app/providers/</code>\u76EE\u5F55\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u5176\u590D\u5236\u5230\u6211\u7684\u672C\u5730packages\u76EE\u5F55\u7684\u76F8\u5E94\u4F4D\u7F6E\uFF0C\u5728 <code>packages/curder/laravel-admin/src/</code>\u4E0B\uFF0C \u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u76EE\u5F55\u4E0B\u6709\u5982\u4E0B\u53D8\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app/
artisan/
...
database/
package.json
packages
\u2514\u2500\u2500 curder
    \u2514\u2500\u2500 laravel-admin
        \u2514\u2500\u2500 src
            \u2514\u2500\u2500 Admin.php
            \u2514\u2500\u2500 AdminProvider.php
phpunit.xml
public/
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u4FEE\u6539provider\u6587\u4EF6\u5E76\u6CE8\u518C\u5230laravel\u7684ioc\u5BB9\u5668\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539provider\u6587\u4EF6\u5E76\u6CE8\u518C\u5230laravel\u7684ioc\u5BB9\u5668\u4E2D" aria-hidden="true">#</a> \u4FEE\u6539Provider\u6587\u4EF6\u5E76\u6CE8\u518C\u5230Laravel\u7684IOC\u5BB9\u5668\u4E2D</h3><p>\u6253\u5F00 <code>packages/curder/laravel-admin/src/AdminProvider.php</code>\u6587\u4EF6\uFF0C\u4FEE\u6539<code>\u547D\u540D\u7A7A\u95F4</code>\u548C<code>register()</code>\u65B9\u6CD5\u91CC\u7684\u76F8\u5173\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php
namespace Curder\\Admin;

use Illuminate\\Support\\ServiceProvider;

class AdminProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this-&gt;app-&gt;singleton(&#39;admin&#39;,function(){
            return new Admin;
        });
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u7136\u540E\uFF0C\u4FEE\u6539 <code>config/app.php</code>\u4E2D\u7684 <code>providers</code>\u6570\u7EC4\u7684\u503C\u4E2D\u6DFB\u52A0\u4E0A\u9762\u7684 Provider\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/*
 * Package Service Providers...
 */
Laravel\\Tinker\\TinkerServiceProvider::class,
Curder\\Admin\\AdminProvider::class,

...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2601  rbac [master] \u26A1 php artisan tinker 
Psy Shell v0.8.11 (PHP 7.1.8 \u2014 cli) by Justin Hileman
&gt;&gt;&gt; app(&#39;admin&#39;)-&gt;sayHello();
=&gt; &quot;Hello&quot;
&gt;&gt;&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,26),b=e("\u81F3\u6B64\uFF0CLaravel \u5C31\u5F15\u5165\u672C\u5730\u7684\u63D2\u4EF6\u5B8C\u6BD5\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4EE3\u7801\u653E\u5230"),u={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},m=e("GitHub"),g=e("\u4E0A\u6258\u7BA1\uFF0C\u7136\u540E\u5728"),h={href:"https://packagist.org/",target:"_blank",rel:"noopener noreferrer"},v=e("Packagist"),_=e("\u62C9\u53D6\u4EE3\u7801\u3002"),x=r(`<h2 id="\u5C06package\u653E\u5230github\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5C06package\u653E\u5230github\u4ED3\u5E93" aria-hidden="true">#</a> \u5C06package\u653E\u5230github\u4ED3\u5E93</h2><h3 id="\u5230github\u767B\u5F55\u81EA\u5DF1\u7684\u8D26\u53F7\u548C\u5BC6\u7801-\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4ED3\u5E93\u5E76\u4E0A\u4F20\u6E90\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5230github\u767B\u5F55\u81EA\u5DF1\u7684\u8D26\u53F7\u548C\u5BC6\u7801-\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4ED3\u5E93\u5E76\u4E0A\u4F20\u6E90\u4EE3\u7801" aria-hidden="true">#</a> \u5230github\u767B\u5F55\u81EA\u5DF1\u7684\u8D26\u53F7\u548C\u5BC6\u7801\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4ED3\u5E93\u5E76\u4E0A\u4F20\u6E90\u4EE3\u7801</h3><p><img src="https://ws2.sinaimg.cn/large/006tKfTcgy1fq0ikshdfdj30kt0ifac2.jpg" alt=""></p><p>\u83B7\u53D6\u5230 Remote Addr \u540E\uFF0C\u518D\u56DE\u5230\u672C\u5730\u5F00\u53D1\u76EE\u5F55 <code>packages/curder/laravel-admin</code>\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git init
git remote add origin git@github.com:curder/caravel-admin.git
git push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u81F3\u6B64\u4EE3\u7801\u5DF2\u7ECF\u90E8\u7F72\u5230GitHub\u7AD9\u70B9\u3002</p><p>\u767B\u5F55\u5230GItHub\u5E94\u8BE5\u5C31\u80FD\u770B\u5230\u5982\u4E0B\u56FE\u6240\u793A\u7684\u5185\u5BB9\uFF1A</p><p><img src="https://ws2.sinaimg.cn/large/006tKfTcgy1fq0iktwklij30t20jrtbn.jpg" alt=""></p><h2 id="\u914D\u7F6Egithub\u63D0\u4EA4\u65F6\u81EA\u52A8\u901A\u77E5packagist" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Egithub\u63D0\u4EA4\u65F6\u81EA\u52A8\u901A\u77E5packagist" aria-hidden="true">#</a> \u914D\u7F6Egithub\u63D0\u4EA4\u65F6\u81EA\u52A8\u901A\u77E5Packagist</h2><p>\u5728\u9879\u76EE\u5217\u8868\u4E0B\uFF1A\u5373 https://github.com/curder/caravel-admin \u4E0B\u70B9\u51FB &quot;Settings&quot; -&gt; &quot;Integrations &amp; services&quot; -&gt; &quot;Add Service&quot;\u4E0B\u62C9\u83DC\u5355\u4E2D\u9009\u62E9 &quot;Packagist&quot;\uFF0C\u5982\u4E0B\u56FE</p><p><img src="https://ws3.sinaimg.cn/large/006tKfTcgy1fq0ikv95o3j30so0e140u.jpg" alt=""></p>`,11),k=e("\u70B9\u51FB\u8FDB\u53BB\u540E\uFF0C\u4F1A\u9700\u8981\u6211\u4EEC\u63D0\u4F9B 'User' \u548C \u2018Token\u2019 \u4FE1\u606F\u6211\u4EEC\u9700\u8981\u767B\u5F55"),f={href:"https://packagist.org/profile/",target:"_blank",rel:"noopener noreferrer"},q=e("Packagist"),j=e("\u83B7\u53D6\u3002"),P=n("p",null,[n("img",{src:"https://ws3.sinaimg.cn/large/006tKfTcgy1fq0ikwl5h0j30wq05xt9h.jpg",alt:""})],-1),A=n("p",null,"\u5C06\u4E0A\u9762\u83B7\u53D6\u7684\u4E24\u4E2A\u5173\u952E\u4FE1\u606F\u586B\u5165GitHub\u7684\u8868\u5355\u4E2D\uFF0C\u5982\u4E0B\uFF1A",-1),w=n("p",null,[n("img",{src:"https://ws2.sinaimg.cn/large/006tKfTcgy1fq0ikxlxqzj30ky0mojtb.jpg",alt:""})],-1),y=n("h2",{id:"\u63D0\u4EA4package\u5230packagist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63D0\u4EA4package\u5230packagist","aria-hidden":"true"},"#"),e(" \u63D0\u4EA4package\u5230Packagist")],-1),T=e("\u767B\u5F55packagist\u540E\uFF0C\u70B9\u51FB"),H={href:"https://packagist.org/packages/submit",target:"_blank",rel:"noopener noreferrer"},S=e("submit"),C=e("\u8F93\u5165\uFF1A"),K=n("code",null,"https://github.com/curder/caravel-admin",-1),L=e("\uFF0C\u5982\u4E0B\uFF1A "),I=n("img",{src:"https://ws3.sinaimg.cn/large/006tKfTcgy1fq0il0115sj30xd09ewgx.jpg",alt:""},null,-1),G=n("p",null,"\u6210\u529F\u540E\u4F1A\u770B\u5230\u5982\u4E0B\u7684\u754C\u9762\uFF1A",-1),B=n("p",null,[n("img",{src:"https://ws3.sinaimg.cn/large/006tKfTcgy1fq0il0sosrj30xd0j1jto.jpg",alt:""})],-1),N=n("p",null,"\u81F3\u6B64\uFF0C\u540C\u6B65\u5B8C\u6210\u3002",-1);function V(E,F){const s=i("ExternalLinkIcon");return l(),p(c,null,[d,n("p",null,[b,n("a",u,[m,a(s)]),g,n("a",h,[v,a(s)]),_]),x,n("p",null,[k,n("a",f,[q,a(s)]),j]),P,A,w,y,n("p",null,[T,n("a",H,[S,a(s)]),C,K,L,I]),G,B,N],64)}var J=t(o,[["render",V]]);export{J as default};
