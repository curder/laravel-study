import{r as l,o as p,c as i,b as n,a as c,F as t,e,d as a}from"./app.a5189117.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const o={},u=e(`<h1 id="\u4F7F\u7528laravel\u5F00\u53D1\u81EA\u5DF1\u7684package" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528laravel\u5F00\u53D1\u81EA\u5DF1\u7684package" aria-hidden="true">#</a> \u4F7F\u7528Laravel\u5F00\u53D1\u81EA\u5DF1\u7684Package</h1><p><code>Service Provider</code>\u6700\u4E3B\u8981\u7684\u529F\u80FD\u5C31\u662F\u8BA9\u6211\u4EEC\u5199package\uFF0C\u672C\u6587\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684 <code>Hello World</code> \u7684\u529F\u80FD\uFF0C\u4ECB\u7ECD\u4E00\u4E0Bpackage\u7684\u5F00\u53D1\u6D41\u7A0B\u3002</p><p>\u5305\u542B<code>route</code>\u3001<code>controller</code>\u4E0E<code>view</code>\uFF0C\u7136\u540E\u4F1A\u6253\u5305\u6210package\u4F20\u5230github\u4E0Epackagist\uFF0C\u6700\u540E\u5728\u5176\u4ED6\u7684laravel\u9879\u76EE\u4E2D\u76F4\u63A5\u4F7F\u7528 <code>composer require vendor/package</code> \u4E0B\u8F7D\u6267\u884C\u6211\u4EEC\u4E0A\u4F20\u7684package\u3002</p><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h2><ul><li>Laravel 5.5</li><li>php 7.1.12</li></ul><h2 id="\u5EFA\u7ACB\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u9879\u76EE" aria-hidden="true">#</a> \u5EFA\u7ACB\u9879\u76EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer create-project laravel/laravel MyPackage --prefer-dist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5EFA\u7ACB\u4E00\u4E2A\u5F00\u53D1package\u7684\u9879\u76EE\u3002</p><h2 id="\u5EFA\u7ACB\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u76EE\u5F55" aria-hidden="true">#</a> \u5EFA\u7ACB\u76EE\u5F55</h2><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u4E32\u5EFA\u7ACB<code>packages</code>\u76EE\u5F55\uFF0C\u5173\u4E8E\u8BE5package\u7684\u6E90\u4EE3\u7801\u90FD\u4F1A\u653E\u5728\u5B83\u91CC\u9762\u3002</p><p>\u5728<code>packages</code>\u76EE\u5F55\u4E0B\u5EFA\u7ACB<code>vendor/package/src</code>\u5B50\u76EE\u5F55\uFF0C\u672Cpackage\u4F1A\u5EFA\u7ACB<code>curder/helloworld/src</code>\u3002</p>`,11),d=["src"],m=e(`<h2 id="\u8BBE\u5B9Apsr-4\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5B9Apsr-4\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u8BBE\u5B9APSR-4\u547D\u540D\u7A7A\u95F4</h2><p>\u7531\u4E8E\u76EE\u524DLaravel\u9884\u8BBE\u7684<code>root namespace</code>\u662F\u5728<code>app</code>\u76EE\u5F55\u4E0B\uFF0C\u5E76\u4E14\u65E0\u6CD5\u6CD5\u5F97\u77E5\u6211\u4EEC\u65B0\u52A0\u7684<code>packages/curder/helloworld/src</code>\u76EE\u5F55\uFF0C\u5FC5\u987B\u5728<code>MyPackage</code>\u9879\u76EE\u7684<code>composer.json</code> \u52A0\u5165\u5BF9\u5E94\u65B0\u7684<code>root namespace</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;name&quot;: &quot;laravel/laravel&quot;,
    &quot;description&quot;: &quot;The Laravel Framework.&quot;,
    &quot;keywords&quot;: [&quot;framework&quot;, &quot;laravel&quot;],

    ...

   &quot;autoload&quot;: {
        &quot;classmap&quot;: [
            &quot;database/seeds&quot;,
            &quot;database/factories&quot;
        ],
        &quot;psr-4&quot;: {
            &quot;App\\\\&quot;: &quot;app/&quot;,
            &quot;Curder\\\\HelloWord\\\\&quot;: &quot;packages/curder/helloworld/src/&quot;
        }
    },

    ...
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u6CE8\u610F\u6211\u4EEC\u6DFB\u52A0\u7684\u884C\uFF1A<code>&quot;Curder\\\\HelloWorld\\\\&quot;: &quot;packages/curder/helloworld/src/&quot;</code>\u7684\u547D\u540D\u7A7A\u95F4\u548C\u8DEF\u5F84\u7684\u6620\u5C04\u5173\u7CFB\u3002</p><p>\u4FEE\u6539\u5B8C\u4E0A\u9762\u7684\u8BBE\u5B9A\u540E\uFF0C\u9700\u8981\u6267\u884C\u4E0B\u9762\u7684composer\u547D\u4EE4\u66F4\u65B0\u4E00\u4E0B\u81EA\u52A8\u52A0\u8F7D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer dump-autoload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5EFA\u7ACBservice-provider" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACBservice-provider" aria-hidden="true">#</a> \u5EFA\u7ACBService Provider</h2><p>\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5EFA\u7ACB<code>Service Provider</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:provider HelloWorldServiceProvider
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4EA7\u751F<code>HelloWorldServiceProvider.php</code>\u9ED8\u8BA4\u5728<code>app/Providers</code>\u76EE\u5F55\u4E0B\uFF0C\u56E0\u4E3A\u6211\u4EEC\u662F\u8981\u5199package\uFF0C\u6240\u4EE5\u5C06\u6B64\u6587\u4EF6\u79FB\u5230<code>packages/curder/helloworld/src</code>\u76EE\u5F55\u4E0B\u3002</p><p>\u56E0\u4E3A\u6587\u4EF6\u7684\u76EE\u5F55\u5DF2\u7ECF\u79FB\u52A8\uFF0C\u9700\u8981\u91CD\u65B0\u4FEE\u6539\u4E00\u4E9B\u5B83\u7684namespace\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace Curder\\HelloWorld;

use Illuminate\\Support\\ServiceProvider;

class HelloWorldServiceProvider extends ServiceProvider
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
        //
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u6CE8\u610F\u6587\u4EF6\u7684\u547D\u540D\u7A7A\u95F4\u662F\uFF1A<code>Curder\\HelloWorld</code>\uFF0C\u4F7F\u7528\u547D\u4EE4\u751F\u6210\u7684Provider\u9ED8\u8BA4\u4F1A\u5EFA\u7ACB<code>boot()</code>\u548C<code>register()</code>\u3002</p><h2 id="\u6CE8\u518Cserviceprovider" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518Cserviceprovider" aria-hidden="true">#</a> \u6CE8\u518CServiceProvider</h2><p>\u5728<code>config/app.php</code>\u4E2D\u8A3B\u518A<code>HelloWorldServiceProvider</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>return [
    ...

    &#39;providers&#39; =&gt; [

        ...

        /*
         * Package Service Providers...
         */

        Curder\\HelloWord\\HelloWorldServiceProvider::class,

        /*
         * Application Service Providers...
         */

        ...
    ],

    ...
];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u6CE8\u518C\u521A\u521A\u5EFA\u7ACB\u7684<code>HelloWorldServiceProvider</code>\u3002</p><h2 id="\u5EFA\u7ACBrouter" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACBrouter" aria-hidden="true">#</a> \u5EFA\u7ACBRouter</h2><p>\u628A\u8DEF\u7531\u6587\u4EF6\u653E\u5230<code>src/routes/</code>\u4E0B\uFF0C\u5E76\u547D\u540D\u4E3A<code>web.php</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

$namespace = &#39;Curder\\HelloWorld\\Http\\Controllers&#39;;

Route::group([
    &#39;namespace&#39; =&gt; $namespace,
    &#39;prefix&#39; =&gt; &#39;helloworld&#39;,
], function () {
    Route::get(&#39;/&#39;, &#39;HelloWorldController@index&#39;);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u5EFA\u7ACBview" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACBview" aria-hidden="true">#</a> \u5EFA\u7ACBView</h2><p>\u628A\u89C6\u56FE\u6587\u4EF6\u5EFA\u7ACB\u5728<code>src/resources/views</code>\u4E0B\uFF0C\u5C06\u5176\u547D\u540D\u4E3A<code>welcome.blade.php</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html lang=&quot;{{ app()-&gt;getLocale() }}&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;

    &lt;title&gt;Laravel&lt;/title&gt;

    &lt;!-- Fonts --&gt;
    &lt;link href=&quot;https://fonts.googleapis.com/css?family=Raleway:100,600&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;

    &lt;!-- Styles --&gt;
    &lt;style&gt;
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: &#39;Raleway&#39;, sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links &gt; a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class=&quot;flex-center position-ref full-height&quot;&gt;
    @if (Route::has(&#39;login&#39;))
        &lt;div class=&quot;top-right links&quot;&gt;
            @auth
                &lt;a href=&quot;{{ url(&#39;/home&#39;) }}&quot;&gt;Home&lt;/a&gt;
            @else
                &lt;a href=&quot;{{ route(&#39;login&#39;) }}&quot;&gt;Login&lt;/a&gt;
                &lt;a href=&quot;{{ route(&#39;register&#39;) }}&quot;&gt;Register&lt;/a&gt;
            @endauth
        &lt;/div&gt;
    @endif

    &lt;div class=&quot;content&quot;&gt;
        &lt;div class=&quot;title m-b-md&quot;&gt;
            {{ $message }}
        &lt;/div&gt;

        &lt;div class=&quot;links&quot;&gt;
            &lt;a href=&quot;https://laravel.com/docs&quot;&gt;Documentation&lt;/a&gt;
            &lt;a href=&quot;https://laracasts.com&quot;&gt;Laracasts&lt;/a&gt;
            &lt;a href=&quot;https://laravel-news.com&quot;&gt;News&lt;/a&gt;
            &lt;a href=&quot;https://forge.laravel.com&quot;&gt;Forge&lt;/a&gt;
            &lt;a href=&quot;https://github.com/laravel/laravel&quot;&gt;GitHub&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div><h2 id="\u521B\u5EFAmigration" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAmigration" aria-hidden="true">#</a> \u521B\u5EFAMigration</h2><p>\u5C06\u6570\u636E\u5E93\u8FC1\u79FB\u6587\u4EF6\u521B\u5EFA\u5728<code>src/publishable/databases/migrations/</code>\u4E0B\uFF0C\u6211\u4EEC\u6309\u7167\u5F53\u524D\u65E5\u671F\u5C06\u5176\u547D\u540D\u4E3A\uFF1A<code>2017_12_17_000000_create_package_demo_table.php</code> \uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

use Illuminate\\Support\\Facades\\Schema;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Database\\Migrations\\Migration;

class CreatePackageDemoTable extends Migration
{
    /**
    * Run the migrations.
    *
    * @return void
    */
    public function up()
    {
        Schema::create(&#39;package_demo&#39;, function (Blueprint $table) {
            $table-&gt;increments(&#39;id&#39;);
            $table-&gt;string(&#39;name&#39;);
            $table-&gt;unsignedInteger(&#39;user_id&#39;);
            $table-&gt;unsignedInteger(&#39;checklist_id&#39;);
            $table-&gt;boolean(&#39;is_published&#39;);
            $table-&gt;boolean(&#39;is_archived&#39;);
            $table-&gt;timestamps();
        });
    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {
        Schema::dropIfExists(&#39;package_demo&#39;);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</h2><p>\u5C06\u914D\u7F6E\u6587\u4EF6\u521B\u5EFA\u5728<code>src/publishable/config/</code>\u4E0B\uFF0C\u6211\u4EEC\u5C06\u5176\u547D\u540D\u4E3A<code>helloworld.php</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

return [
    &quot;message&quot; =&gt; &quot;Hello World&quot;,
];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>\u914D\u7F6E\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u4E0D\u5141\u8BB8\u968F\u610F\u5B9A\u4E49\uFF0C\u4E0D\u8981\u4E0ELaravel\u5DF2\u6709\u7684\u914D\u7F6E\u6587\u4EF6\u6587\u4EF6\u540D\u51B2\u7A81\uFF0C\u540E\u671F\u518D\u9879\u76EE\u7684\u5176\u4ED6\u5730\u65B9\u9700\u8981\u5F15\u7528\u3002</p></blockquote><h2 id="\u5EFA\u7ACBcontroller" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACBcontroller" aria-hidden="true">#</a> \u5EFA\u7ACBController</h2><p>\u6839\u636E\u4E0A\u9762\u8DEF\u7531\u7684\u5B9A\u4E49\uFF0C\u628A\u63A7\u5236\u5668\u6587\u4EF6\u653E\u5230<code>src/Http/Controllers</code>\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace Curder\\HelloWorld\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;

class HelloWorldController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \\Illuminate\\Http\\Response
     */
    public function index()
    {
        $message = config(&quot;helloworld.message&quot;);
        return view(&#39;HelloWorld::welcome&#39;, compact(&#39;message&#39;));
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u4FEE\u6539service-provider" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539service-provider" aria-hidden="true">#</a> \u4FEE\u6539Service Provider</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace Curder\\HelloWorld;

use Illuminate\\Support\\Facades\\Schema;
use Illuminate\\Support\\ServiceProvider;

class HelloWorldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        $this-&gt;loadRoutesFrom(__DIR__ . &#39;/routes/web.php&#39; .
            &#39;&#39;);
        $this-&gt;loadViewsFrom(__DIR__ . &#39;/resources/views&#39;, &#39;HelloWorld&#39;);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this-&gt;registerPublishables();
    }

    private function registerPublishables()
    {
        $basePath = __DIR__;

        $arrPublishable = [
            &#39;migrations&#39; =&gt; [
                &quot;$basePath/publishable/databases/migrations&quot; =&gt; database_path(&#39;migrations&#39;),
            ],
            &#39;config&#39; =&gt; [
                &quot;$basePath/publishable/config/helloworld.php&quot; =&gt; config_path(&#39;helloworld.php&#39;),
            ],
        ];

        foreach ($arrPublishable as $group =&gt; $paths) {
            $this-&gt;publishes($paths, $group);
        }
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="\u6267\u884C\u53D1\u5E03\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u53D1\u5E03\u547D\u4EE4" aria-hidden="true">#</a> \u6267\u884C\u53D1\u5E03\u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan vendor:publish
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\uFF0C\u5C31\u80FD\u770B\u5230\u5982\u4E0B\u7684\u754C\u9762</p><p>\u8F93\u5165<code>Curder\\HelloWorld\\HelloWorldServiceProvider</code>\u7684\u5185\u5BB9\u8FDB\u884C\u53D1\u5E03\u3002</p><blockquote><p>\u53E6\u5916\u5BF9\u4E8E\u5DF2\u7ECF\u53D1\u5E03\u7684\u5185\u5BB9\u5982\u679C\u9700\u8981\u8986\u76D6\uFF0C\u5728\u4E0A\u9762\u7684\u53D1\u5E03\u547D\u4EE4\u4E2D\u52A0\u5165 <code>--force</code> \u53C2\u6570\u3002\u4F46\u662F\u5728\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4\u4E4B\u524D\u8BF7\u786E\u4FDD\u5BF9\u4FEE\u6539\u8FC7\u7684\u6570\u636E\u5DF2\u6709\u5907\u4EFD\u3002</p></blockquote><h2 id="\u8BBF\u95EE\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u6548\u679C" aria-hidden="true">#</a> \u8BBF\u95EE\u6548\u679C</h2>`,41),h=["src"],g=e(` ## \u4E0A\u4F20\u5230GitHub <h3 id="\u8BBE\u5B9Apackage\u7684\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5B9Apackage\u7684\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u8BBE\u5B9Apackage\u7684\u547D\u540D\u7A7A\u95F4</h3><p>\u76EE\u524D\u5728\u672C\u5730\u5F00\u53D1\u7684\u8FD9\u4E2Apackage\u7531\u4E8E\u662F\u642D\u914DMyPackage\u9879\u76EE\u6D4B\u8BD5\uFF0C\u6240\u4EE5\u5C06<code>PSR-4</code>\u7684<code>root namespace</code>\u8BBE\u5B9A\u5728<code>MyPackage</code>\u9879\u76EE\u7684<code>composer.json</code>\u3002</p><p>\u4F46\u53D1\u5E03<code>package</code>\u4E4B\u540E\uFF0C\u4E0D\u53EF\u80FD\u8981\u4F7F\u7528\u8005\u4E5F\u624B\u52A8\u5728\u81EA\u5DF1\u9879\u76EE\u7684<code>composer.json</code>\u52A0\u4E0A\u547D\u540D\u7A7A\u95F4\uFF0C\u6240\u4EE5\u6211\u4EEC\u8981\u5C06\u547D\u540D\u7A7A\u95F4\u8BBE\u5B9A\u5728<code>package</code>\u81EA\u5DF1\u7684<code>composer.json</code>\u3002</p><p>\u6211\u4EEC\u6765\u5230\u9879\u76EE\u7684\u76EE\u5F55\u4E0B<code>packages/curder/helloworld</code>\u4E0B\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF0C\u751F\u6210<code>composer.json</code>\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0B\u9762\u662F\u6211\u4EEC\u4ECE\u4E0A\u9762\u7684\u547D\u4EE4\u4E2D\u751F\u6210\u7684<code>composer.json</code>\uFF0C\u6DFB\u52A0\u4E0A<code>PSR-4</code>\u7684\u81EA\u52A8\u52A0\u8F7D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;name&quot;: &quot;curder/helloworld&quot;,
    &quot;description&quot;: &quot;A Laravel Package For Demo.&quot;,
    &quot;license&quot;: &quot;MIT&quot;,
    &quot;authors&quot;: [
        {
            &quot;name&quot;: &quot;curder&quot;,
            &quot;email&quot;: &quot;curder@foxmail.com&quot;
        }
    ],
    &quot;minimum-stability&quot;: &quot;dev&quot;,
    &quot;require&quot;: {},
    &quot;autoload&quot;: {
        &quot;psr-4&quot;: {
            &quot;Curder\\\\HelloWorld\\\\&quot;: &quot;src/&quot;
        }
    },
     &quot;extra&quot;: {
        &quot;laravel&quot;: {
            &quot;providers&quot;: [
                &quot;Curder\\\\HelloWorld\\\\HelloWorldServiceProvider&quot;
            ]
        }
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u5EFA\u7ACB\u672C\u5730git\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u672C\u5730git\u4ED3\u5E93" aria-hidden="true">#</a> \u5EFA\u7ACB\u672C\u5730Git\u4ED3\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd packages/curder/helloworld
git init
git add .
git commit -m &quot;Initial commit.&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5EFA\u7ACB\u8FDC\u7A0Bgit\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u8FDC\u7A0Bgit\u4ED3\u5E93" aria-hidden="true">#</a> \u5EFA\u7ACB\u8FDC\u7A0Bgit\u4ED3\u5E93</h3>`,11),v=["src"],q=e(`<h3 id="\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote add origin git@github.com:curder/helloworld.git
git push -u origin master
git tag -a 1.0.0 -m &quot;First version&quot;
git push --tags
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4E0A\u4F20packagist" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20packagist" aria-hidden="true">#</a> \u4E0A\u4F20Packagist</h2><h3 id="\u767B\u5165packagist" tabindex="-1"><a class="header-anchor" href="#\u767B\u5165packagist" aria-hidden="true">#</a> \u767B\u5165Packagist</h3>`,4),x={href:"https://packagist.org/login/",target:"_blank",rel:"noopener noreferrer"},f=a("\u767B\u5F55"),k=a("\u81F3Packagist\uFF0C\u6309\u53F3\u4E0A\u89D2Submit\u4E0A\u4F20package\u3002"),_=e('<h3 id="\u63D0\u4EA4github\u7F51\u5740" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4github\u7F51\u5740" aria-hidden="true">#</a> \u63D0\u4EA4Github\u7F51\u5740</h3><p>\u8D34\u4E0Apackage\u5728Github Repository\u7684\u7F51\u5740\u3002</p><h3 id="\u786E\u8BA4\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u786E\u8BA4\u63D0\u4EA4" aria-hidden="true">#</a> \u786E\u8BA4\u63D0\u4EA4</h3><p>\u56E0\u4E3APackagist\u5DF2\u7ECF\u6709\u5F88\u591Apackage\u540D\u5B57\u53EB\u505Ahelloworld\uFF0CPackagist\u8BA9\u4F60\u786E\u8BA4\u662F\u5426\u8981\u4E0A\u4F20\u3002</p><h3 id="\u4E0A\u4F20\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u6210\u529F" aria-hidden="true">#</a> \u4E0A\u4F20\u6210\u529F</h3>',5),w=["src"],P=e(`<h2 id="\u6D4B\u8BD5package" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5package" aria-hidden="true">#</a> \u6D4B\u8BD5Package</h2><h3 id="\u5EFA\u7ACB\u6D4B\u8BD5\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u6D4B\u8BD5\u9879\u76EE" aria-hidden="true">#</a> \u5EFA\u7ACB\u6D4B\u8BD5\u9879\u76EE</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer create-project laravel/laravel MyTestPackage --prefer-dist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5B89\u88DDpackage" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88DDpackage" aria-hidden="true">#</a> \u5B89\u88DDPackage</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd MyTestPackage
composer require oomusou/helloworld
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u7531\u4E8ELaravel5.5\u4E4B\u540E\u65B0\u589E\u4E86\u5305\u7684\u81EA\u52A8\u53D1\u73B0\u529F\u80FD\uFF0C\u6240\u4EE5\u6211\u4EEC\u5E76\u4E0D\u9700\u8981\u5728<code>config/app.config</code>\u4E2D\u624B\u52A8\u5F15\u5165<code>ServiceProvider</code>\u3002</p></blockquote><h3 id="\u53D1\u5E03\u914D\u7F6E\u548C\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u914D\u7F6E\u548C\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u53D1\u5E03\u914D\u7F6E\u548C\u8FC1\u79FB\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan vendor:publish
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u6D4F\u89C8\u5668\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u6D4B\u8BD5</h3>`,9),S=["src"];function H(s,$){const r=l("ExternalLinkIcon");return p(),i(t,null,[u,n("img",{src:s.$withBase("/images/packages/helloworld-source-code-path.jpg"),alt:""},null,8,d),m,n("img",{src:s.$withBase("/images/packages/helloworld-browser.png"),alt:""},null,8,h),g,n("img",{src:s.$withBase("/images/packages/helloworld-create-github-repository.png"),alt:""},null,8,v),q,n("p",null,[n("a",x,[f,c(r)]),k]),_,n("img",{src:s.$withBase("/images/packages/helloworld-create-success.png"),alt:""},null,8,w),P,n("img",{src:s.$withBase("/images/packages/helloworld-browser-test.png"),alt:""},null,8,S)],64)}var C=b(o,[["render",H]]);export{C as default};
