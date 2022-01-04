import{r as s,o as a,c as r,b as n,a as l,F as i,e as t,d as p}from"./app.cc9213f7.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const b={},u=t(`<h1 id="laravel\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#laravel\u6D4B\u8BD5" aria-hidden="true">#</a> Laravel\u6D4B\u8BD5</h1><ul><li>Laravel 5.4.24</li></ul><h2 id="\u6D4B\u8BD5\u524D\u7684\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u524D\u7684\u51C6\u5907" aria-hidden="true">#</a> \u6D4B\u8BD5\u524D\u7684\u51C6\u5907</h2><h3 id="\u5B89\u88C5laravel" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5laravel" aria-hidden="true">#</a> \u5B89\u88C5Laravel</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer create-project laravel/laravel testing-laravel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer require mockery/mockery --dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u4FEE\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E</h3><p>\u4FEE\u6539 <code>phpunit.xml</code> \u5B9A\u4E49\u6D4B\u8BD5\u6570\u636E\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;env name=&quot;DB_CONNECTION&quot; value=&quot;sqlite&quot;/&gt;
&lt;env name=&quot;DB_DATABASE&quot; value=&quot;:memory:&quot;/&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u4F7F\u7528<code>sqlite</code>\u7684\u8FDE\u63A5\u65B9\u5F0F\uFF0C\u4F7F\u7528<code>memory</code>\u8FDB\u884C\u6570\u636E\u5B58\u50A8\u3002</p></blockquote><h2 id="\u9488\u5BF9model\u8FDB\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u9488\u5BF9model\u8FDB\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> \u9488\u5BF9Model\u8FDB\u884C\u6D4B\u8BD5</h2><h3 id="\u6D4B\u8BD5\u524D\u7684\u51C6\u5907-1" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u524D\u7684\u51C6\u5907-1" aria-hidden="true">#</a> \u6D4B\u8BD5\u524D\u7684\u51C6\u5907</h3><ul><li>\u5EFA\u7ACB\u6570\u636E\u5E93\u6A21\u578B\u548C\u6570\u636E\u5E93\u8FC1\u79FB\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:model Article -m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u7F16\u8F91\u8FC1\u79FB\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function up()
{
    Schema::create(&#39;articles&#39;, function (Blueprint $table) {
        $table-&gt;increments(&#39;id&#39;);
        $table-&gt;string(&#39;title&#39;);
        $table-&gt;text(&#39;body&#39;);
        $table-&gt;timestamps();
    });
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u4FEE\u6539ModelFactory</li></ul><p>\u6587\u4EF6\u5728<code>databases\\factories\\ModelFactory.php</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$factory-&gt;define(App\\Article::class, function (Faker\\Generator $faker) {
    return [
        &#39;name&#39; =&gt; $faker-&gt;name,
        &#39;body&#39; =&gt; $faker-&gt;sentence,
    ];
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u4FEE\u6539\u6A21\u578B\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>namespace App;

use Illuminate\\Database\\Eloquent\\Model;

class Article extends Model
{
    // \u5B9A\u4E49\u4F7F\u7528 __construct($data) \u6216 create($data) \u65F6\uFF0C\u53EF\u4EE5\u88AB\u4FEE\u6539\u7684\u5B57\u6BB5\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u5176\u4ED6\u5B57\u6BB5\u4E0D\u88AB\u4FEE\u6539
    protected $fillable = [&#39;title&#39;, &#39;body&#39;];
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u65B0\u589E\u5E76\u4FEE\u6539\u6D4B\u8BD5\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u5E76\u4FEE\u6539\u6D4B\u8BD5\u6587\u4EF6" aria-hidden="true">#</a> \u65B0\u589E\u5E76\u4FEE\u6539\u6D4B\u8BD5\u6587\u4EF6</h3><ul><li>\u6D4B\u8BD5\u6709\u6CA1\u6709\u6587\u7AE0</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use Illuminate\\Foundation\\Testing\\DatabaseMigrations;

class ArticleTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function the_articles_is_empty_result()
    {
        // \u53D6\u5F97\u6240\u6709\u6587\u7AE0
        $articles = Article::all();

        // \u786E\u8BA4 $articles \u662F Collection
        $this-&gt;assertInstanceOf(Collection::class, $articles);

        // \u800C\u6587\u7AE0\u6570\u91CF\u4E3A 0
        $this-&gt;assertCount(0, $articles);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>\u6D4B\u8BD5\u65B0\u589E\u6570\u636E\u5E76\u5217\u51FA\u6570\u636E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use App\\Article;

class ArticleTest extends TestCase
{
    // ...
    
    /** @test */
    public function the_articles_create_and_list_the_data()
    {
      // \u65B0\u589E 10 \u6761\u8BB0\u5F55
      for ($i = 1; $i &lt;= 10; $i++) {
        factory(Article::class,10)-&gt;make([
            &#39;name&#39; =&gt; &#39;name &#39; . $i,
            &#39;body&#39; =&gt; &#39;body &#39; . $i
        ]);
      }

      // \u786E\u8BA4\u6570\u636E\u5E93\u4E2D\u670910\u6761\u8BB0\u5F55
      $articles = Article::all();
      $this-&gt;assertCount(10, $articles);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p>\u5728\u5B9E\u9645\u4F7F\u7528Laravel\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u5E38\u5E38\u4E0D\u4F1A\u76F4\u63A5\u901A\u8FC7Controller\u5411\u6A21\u578B\u83B7\u53D6\u6570\u636E\uFF0C\u800C\u662F\u4F1A\u4F7F\u7528\u5230Repository\u7684\u5F00\u53D1\u6A21\u5F0F\uFF0C\u90A3\u4E48\u5982\u4F55\u6D4B\u8BD5Repository\u5462\uFF1F</p></blockquote><h2 id="\u4F7F\u7528repository\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528repository\u6A21\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528Repository\u6A21\u5F0F</h2><h3 id="\u65B0\u5EFArepository\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFArepository\u6587\u4EF6" aria-hidden="true">#</a> \u65B0\u5EFARepository\u6587\u4EF6</h3><p><code>app/Repositories/ArticleRepository.php</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace App\\Repositories;

/**
 * Class ArticleRepository
 * @package App\\Repositories
 * @method latest($limit)
 * @method create($attributes = array())
 */
class ArticleRepository
{
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u5148\u5EFA\u7ACB\u4E00\u4E2A\u7A7A\u7684Repository\u6587\u4EF6\uFF0C\u540E\u671F\u5728\u6D4B\u8BD5\u7684\u8FC7\u7A0B\u4E2D\u6DFB\u52A0\u65B9\u6CD5\u3002</p></blockquote><h3 id="\u5EFA\u7ACBrepository\u6D4B\u8BD5\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACBrepository\u6D4B\u8BD5\u6587\u4EF6" aria-hidden="true">#</a> \u5EFA\u7ACBRepository\u6D4B\u8BD5\u6587\u4EF6</h3><h4 id="\u6D4B\u8BD5repository\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5repository\u67E5\u8BE2" aria-hidden="true">#</a> \u6D4B\u8BD5Repository\u67E5\u8BE2</h4><ul><li>\u5EFA\u7ACB\u6587\u4EF6\u5E76\u7F16\u5199\u6D4B\u8BD5\u4EE3\u7801\uFF0C\u6587\u4EF6\u5728<code>tests/Feature/ArticleRepositoryTest.php</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace Tests\\Feature;

use App\\Article;
use App\\Repositories\\ArticleRepository;
use Tests\\TestCase;
use Illuminate\\Foundation\\Testing\\DatabaseMigrations;

class ArticleRepositoryTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @var ArticleRepository
     */
    protected $repository;

    protected function setUp()
    {
        parent::setUp();
        // \u586B\u5145\u6570\u636E
        $this-&gt;repository = new ArticleRepository();
    }
    
    // \u6D4B\u8BD5\u83B7\u53D6\u6700\u540E\u768410\u6761\u8D44\u6599
    /** @test */
    public function fetch_latest_10_articles()
    {
        // given data.
        for ($i = 1; $i &lt;= 100; $i++) {
            factory(Article::class)-&gt;create([
                &#39;name&#39; =&gt; &#39;name &#39; . $i,
                &#39;body&#39; =&gt; &#39;body &#39; . $i,
            ]);
        }

        // \u4ECE repository \u4E2D\u53D6\u5F97\u6700\u65B0 10 \u6761\u6570\u636E
        $articles = $this-&gt;repository-&gt;latest(10)-&gt;get();
        $this-&gt;assertCount(10, $articles);

        // \u786E\u8BA4\u6807\u9898\u662F\u4ECE 100 .. 91 \u5012\u6570
        // &quot;title 100&quot; .. &quot;title 91&quot;
        $i = 10;
        /** @var \\App\\Article[] $articles */
        foreach ($articles as $article) {
            $this-&gt;assertEquals(&#39;name &#39; . $i, $article-&gt;name);
            --$i;
        }
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><ul><li>\u629B\u51FA\u9519\u8BEF\u5E76\u4FEE\u590D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Error: Call to undefined method App\\Repositories\\ArticleRepository::latest()
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>\u5148\u5411Repository\u4E2D\u6DFB\u52A0<code>latest()</code>\u65B9\u6CD5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function latest10()
{
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u6267\u884Cphpunit\u62A5\u9519\u3002 <code>Error: Call to a member function get() on null</code></p></blockquote><ol start="2"><li>\u518D\u5411Repository\u6DFB\u52A0<code>latest()</code>\u65B9\u6CD5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * @param int $limit
 * @return ArticleRepository|\\Illuminate\\Database\\Eloquent\\Builder
 */
public function latest($limit)
{
    return Article::query()-&gt;orderBy(&#39;id&#39;, &#39;desc&#39;)-&gt;limit($limit);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u6B64\u65F6\u6D4B\u8BD5\u901A\u8FC7\u3002</p></blockquote><h4 id="\u6D4B\u8BD5repository\u6DFB\u52A0\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5repository\u6DFB\u52A0\u64CD\u4F5C" aria-hidden="true">#</a> \u6D4B\u8BD5Repository\u6DFB\u52A0\u64CD\u4F5C</h4><ol><li>\u7F16\u5199\u6D4B\u8BD5\u4EE3\u7801</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/** @test */
public function create_article()
{

    $article = $this-&gt;repository-&gt;create([
        &#39;name&#39; =&gt; &#39;name&#39;,
        &#39;body&#39; =&gt; &#39;body&#39;,
    ]);

    $this-&gt;assertEquals(1, $article-&gt;id);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u629B\u51FA\u5982\u4E0B\u9519\u8BEF:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Error: Call to undefined method App\\Repositories\\ArticleRepository::create()
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u4FEE\u6539Repository\u4E2D\u4EE3\u7801\uFF0C\u65B0\u589E<code>create()</code>\u65B9\u6CD5\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use App\\Article;

public function create()
{
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u629B\u51FA\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ErrorException: Trying to get property of non-object
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u4FEE\u6539Repository\u4E2D<code>create()</code>\u65B9\u6CD5\uFF0C\u6DFB\u52A0\u903B\u8F91\u4EE3\u7801\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use App\\Article;

 /**
 * Create new data.
 * @param array $attributes
 * @return mixed
 */
public function create(array $attributes = array())
{
    return Article::create($attributes);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>\u4EE5\u4E0A\u6D4B\u8BD5\u8FC7\u7A0B\u5373\u4E3ATDD\u6D4B\u8BD5\u6D41\u7A0B</p></blockquote><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,58),o={href:"https://gist.github.com/jaceju/c415c1b42daf4c589f2a",target:"_blank",rel:"noopener noreferrer"},m=p("Web Development with Laravel 5");function d(g,h){const e=s("ExternalLinkIcon");return a(),r(i,null,[u,n("p",null,[n("a",o,[m,l(e)])])],64)}var y=c(b,[["render",d]]);export{y as default};
