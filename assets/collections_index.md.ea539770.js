import{_ as t,o as e,c as l,Q as a}from"./chunks/framework.aefb929a.js";const g=JSON.parse('{"title":"Collection 集合","description":"","frontmatter":{},"headers":[],"relativePath":"collections/index.md","filePath":"collections/index.md","lastUpdated":1695375686000}'),s={name:"collections/index.md"},n=a(`<h1 id="collection-集合" tabindex="-1">Collection 集合 <a class="header-anchor" href="#collection-集合" aria-label="Permalink to &quot;Collection 集合&quot;">​</a></h1><p><code>Illuminate\\Support\\Collection</code> 类提供了一个更具可读性的、更便于处理数组数据的封装，具体例子看下面的代码。</p><p>我们使用了 <code>collect</code> 函数从数组中创建新的集合实例，对其中的每个元素运行 <code>strtoupper</code> 函数之后再移除所有的空元素：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;taylor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;abigail&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($name) =&gt; </span><span style="color:#79B8FF;">strtoupper</span><span style="color:#E1E4E8;">($name))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($name) =&gt; </span><span style="color:#79B8FF;">empty</span><span style="color:#E1E4E8;">($name));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;taylor&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;abigail&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($name) =&gt; </span><span style="color:#005CC5;">strtoupper</span><span style="color:#24292E;">($name))</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($name) =&gt; </span><span style="color:#005CC5;">empty</span><span style="color:#24292E;">($name));</span></span></code></pre></div><p>正如你看到的，<code>Collection</code> 类允许你链式调用其方法，以达到在底层数组上优雅地执行 <code>map</code> 和 <code>reject</code> 操作。一般来说，集合是不可改变的，这意味着每个 <code>Collection</code> 方法都会返回一个全新的 <code>Collection</code> 实例。</p><h2 id="创建集合" tabindex="-1">创建集合 <a class="header-anchor" href="#创建集合" aria-label="Permalink to &quot;创建集合&quot;">​</a></h2><p>如上所述，辅助函数 <code>collect</code> 会为给定的数组返回一个新的 <code>Illuminate\\Support\\Collection</code> 实例。也就是说，创建一个集合就这么简单：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]);</span></span></code></pre></div><blockquote><p>默认情况下， <a href="https://laravel.com/docs/master/eloquent" target="_blank" rel="noreferrer">Eloquent</a> 查询的结果返回的内容都是 <code>Collection</code> 实例。</p></blockquote><h2 id="可用的方法" tabindex="-1">可用的方法 <a class="header-anchor" href="#可用的方法" aria-label="Permalink to &quot;可用的方法&quot;">​</a></h2><p>接下来的内容，我们会探讨 <code>Collection</code> 类每个可用的方法。**记住，所有方法都可以以方法链的形式优雅地操纵数组。**而且，几乎所有的方法都会返回新的 <code>Collection</code> 实例，允许在必要时保存集合的原始副本。</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">简单说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./all.html">all</a></td><td style="text-align:left;">返回该集合表示的底层<strong>数组</strong></td></tr><tr><td style="text-align:left;"><a href="./avg.html">average</a></td><td style="text-align:left;">方法<code>avg()</code>的别名</td></tr><tr><td style="text-align:left;"><a href="./avg.html">avg</a></td><td style="text-align:left;">返回给定键的<strong>平均值</strong></td></tr><tr><td style="text-align:left;"><a href="./chunk.html">chunk</a></td><td style="text-align:left;">将集合拆分为多个指定大小的集合组</td></tr><tr><td style="text-align:left;"><a href="./chunkWhile.html">chunkWhile</a></td><td style="text-align:left;">根据给定的回调将集合分成多个较小的集合</td></tr><tr><td style="text-align:left;"><a href="./collapse.html">collapse</a></td><td style="text-align:left;">将数组集合折叠成单个集合</td></tr><tr><td style="text-align:left;"><a href="./collect.html">collect</a></td><td style="text-align:left;"><code>collect</code> 方法返回一个包含当前集合中的项目的<strong>新的 <code>Collection</code> 实例</strong></td></tr><tr><td style="text-align:left;"><a href="./combine.html">combine</a></td><td style="text-align:left;">将一个集合的值作为<strong>键</strong>，再将另一个数组或者集合的值作为<strong>值</strong>合并成一个集合</td></tr><tr><td style="text-align:left;"><a href="./concat.html">concat</a></td><td style="text-align:left;">将给定数组或集合的值附加到另一个集合的末尾</td></tr><tr><td style="text-align:left;"><a href="./contains.html">contains</a></td><td style="text-align:left;">判断集合是否包含给定的项目</td></tr><tr><td style="text-align:left;"><a href="./containsOneItem.html">containsOneItem</a></td><td style="text-align:left;">判断集合是否包含单个项目</td></tr><tr><td style="text-align:left;"><a href="./containsStrict.html">containsStrict</a></td><td style="text-align:left;">使用「严格模式」来判断集合中是否包含给定的项目</td></tr><tr><td style="text-align:left;"><a href="./count.html">count</a></td><td style="text-align:left;">返回该集合内的项目总数</td></tr><tr><td style="text-align:left;"><a href="./countBy.html">countBy</a></td><td style="text-align:left;">计算集合中值的出现次数</td></tr><tr><td style="text-align:left;"><a href="./crossJoin.html">crossJoin</a></td><td style="text-align:left;">返回集合中所有可能排列的笛卡尔积</td></tr><tr><td style="text-align:left;"><a href="./dd.html">dd</a></td><td style="text-align:left;">打印集合的元素并终止脚本的执行</td></tr><tr><td style="text-align:left;"><a href="./diff.html">diff</a></td><td style="text-align:left;">基于值求差集</td></tr><tr><td style="text-align:left;"><a href="./diffAssoc.html">diffAssoc</a></td><td style="text-align:left;">基于键值对求差集</td></tr><tr><td style="text-align:left;"><a href="./diffAssocUsing.html">diffAssocUsing</a></td><td style="text-align:left;">使用回调获取集合中键和值不存在的项目</td></tr><tr><td style="text-align:left;"><a href="./diffKeys.html">diffKeys</a></td><td style="text-align:left;">基于键求差集</td></tr><tr><td style="text-align:left;"><a href="./diffKeysUsing.html">diffKeysUsing</a></td><td style="text-align:left;">使用回调获取集合中键不存在于给定项中的项</td></tr><tr><td style="text-align:left;"><a href="./diffUsing.html">diffUsing</a></td><td style="text-align:left;">获取集合中不存在给定项目的项目</td></tr><tr><td style="text-align:left;"><a href="./doesntContain.html">doesntContain</a></td><td style="text-align:left;">判断集合是否不包含给定的项目</td></tr><tr><td style="text-align:left;"><a href="./dump.html">dump</a></td><td style="text-align:left;">打印集合的元素</td></tr><tr><td style="text-align:left;"><a href="./duplicates.html">duplicates</a></td><td style="text-align:left;">从集合中检索并返回重复值</td></tr><tr><td style="text-align:left;"><a href="./duplicatesStrict.html">duplicatesStrict</a></td><td style="text-align:left;">使用严格模式从集合中检索并返回重复值</td></tr><tr><td style="text-align:left;"><a href="./each.html">each</a></td><td style="text-align:left;">迭代集合中的内容，同时将其传递到回调函数中</td></tr><tr><td style="text-align:left;"><a href="./eachSpread.html">eachSpread</a></td><td style="text-align:left;">迭代集合中的内容，同时将其传递到回调函数中</td></tr><tr><td style="text-align:left;"><a href="./every.html">every</a></td><td style="text-align:left;">可用于验证集合中每一个元素都通过给定的真实测试</td></tr><tr><td style="text-align:left;"><a href="./except.html">except</a></td><td style="text-align:left;">返回集合中除了指定键以外的所有项目</td></tr><tr><td style="text-align:left;"><a href="./filter.html">filter</a></td><td style="text-align:left;">使用给定的回调函数过滤集合的内容，只留下那些通过给定真实测试的内容</td></tr><tr><td style="text-align:left;"><a href="./first.html">first</a></td><td style="text-align:left;">返回集合中通过给定真实测试的第一个元素</td></tr><tr><td style="text-align:left;"><a href="./firstOrFail.html">firstOrFail</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./firstWhere.html">firstWhere</a></td><td style="text-align:left;">返回给定键值对的第一个元素</td></tr><tr><td style="text-align:left;"><a href="./flatMap.html">flatMap</a></td><td style="text-align:left;">遍历集合并将其中的每个值传递到给定的回调</td></tr><tr><td style="text-align:left;"><a href="./flatten.html">flatten</a></td><td style="text-align:left;">将多维集合转为一维</td></tr><tr><td style="text-align:left;"><a href="./flip.html">flip</a></td><td style="text-align:left;">将集合中的键和对应的数值进行互换</td></tr><tr><td style="text-align:left;"><a href="./forget.html">forget</a></td><td style="text-align:left;"><strong>改变原集合</strong>，通过给定的键来移除掉集合中对应的内容</td></tr><tr><td style="text-align:left;"><a href="./forPage.html">forPage</a></td><td style="text-align:left;">返回给定页码上显示的项目的新集合</td></tr><tr><td style="text-align:left;"><a href="./get.html">get</a></td><td style="text-align:left;">返回给定键的项目</td></tr><tr><td style="text-align:left;"><a href="./groupBy.html">groupBy</a></td><td style="text-align:left;">根据给定的键对集合内的项目进行分组</td></tr><tr><td style="text-align:left;"><a href="./has.html">has</a></td><td style="text-align:left;">判断集合中是否存在给定的键</td></tr><tr><td style="text-align:left;"><a href="./hasAny.html">hasAny</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./implode.html">implode</a></td><td style="text-align:left;">合并集合中的项目</td></tr><tr><td style="text-align:left;"><a href="./intersect.html">intersect</a></td><td style="text-align:left;">从原集合中删除不在给定数组或集合中的任何值</td></tr><tr><td style="text-align:left;"><a href="./intersectByKeys.html">intersectByKeys</a></td><td style="text-align:left;">删除原集合中不存在于给定数组或集合中的任何键</td></tr><tr><td style="text-align:left;"><a href="./isEmpty.html">isEmpty</a></td><td style="text-align:left;">判断集合是否为空</td></tr><tr><td style="text-align:left;"><a href="./isNotEmpty.html">isNotEmpty</a></td><td style="text-align:left;">判断集合是否不为空</td></tr><tr><td style="text-align:left;"><a href="./join.html">join</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./keyBy.html">keyBy</a></td><td style="text-align:left;">以给定的键作为集合的键</td></tr><tr><td style="text-align:left;"><a href="./keys.html">keys</a></td><td style="text-align:left;">返回集合的所有键</td></tr><tr><td style="text-align:left;"><a href="./last.html">last</a></td><td style="text-align:left;">返回集合中通过给定真实测试的最后一个元素</td></tr><tr><td style="text-align:left;"><a href="./lazy.html">lazy</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./macro.html">macro</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./make.html">make</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./map.html">map</a></td><td style="text-align:left;">遍历集合并将每一个值传入给定的回调</td></tr><tr><td style="text-align:left;"><a href="./mapInto.html">mapInto</a></td><td style="text-align:left;">遍历集合，通过将值传递给构造函数来创建给定类的新实例</td></tr><tr><td style="text-align:left;"><a href="./mapSpread.html">mapSpread</a></td><td style="text-align:left;"><strong>改变原集合</strong>，迭代集合的项目，将每个嵌套的项目值传递到给定的闭包中。 闭包可以自由修改并返回它，从而形成一个新的修改后的集合。</td></tr><tr><td style="text-align:left;"><a href="./mapToDictionary.html">mapToDirectory</a></td><td style="text-align:left;">通过给定的闭包对集合的项目进行分组。该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值数组</td></tr><tr><td style="text-align:left;"><a href="./mapToGroup.html">mapToGroup</a></td><td style="text-align:left;">通过给定的闭包对集合的项目进行分组。 该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值集合</td></tr><tr><td style="text-align:left;"><a href="./mapWithKeys.html">mapWithKeys</a></td><td style="text-align:left;">遍历集合并将每个值传入给定的回调</td></tr><tr><td style="text-align:left;"><a href="./max.html">max</a></td><td style="text-align:left;">返回给定<strong>键</strong>的最大值</td></tr><tr><td style="text-align:left;"><a href="./median.html">median</a></td><td style="text-align:left;">方法返回给定<strong>键</strong>的中间值</td></tr><tr><td style="text-align:left;"><a href="./merge.html">merge</a></td><td style="text-align:left;">将给定数组或集合合并到原集合</td></tr><tr><td style="text-align:left;"><a href="./mergeRecursive.html">mergeRecursive</a></td><td style="text-align:left;">将给定的数组或集合与原始集合递归合并</td></tr><tr><td style="text-align:left;"><a href="./min.html">min</a></td><td style="text-align:left;">返回给定键的最小值</td></tr><tr><td style="text-align:left;"><a href="./mode.html">mode</a></td><td style="text-align:left;">返回给定<strong>键</strong>的<a href="https://baike.baidu.com/item/%E4%BC%97%E6%95%B0/44796" title="百度百科-众数值" target="_blank" rel="noreferrer">众数值</a></td></tr><tr><td style="text-align:left;"><a href="./nth.html">nth</a></td><td style="text-align:left;">创建由每隔<code>n</code>个元素组成一个新集合</td></tr><tr><td style="text-align:left;"><a href="./only.html">only</a></td><td style="text-align:left;">返回集合中给定键的所有项目</td></tr><tr><td style="text-align:left;"><a href="./pad.html">pad</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./partition.html">partition</a></td><td style="text-align:left;">配合<code>list()</code>方法区分回调函数满足和不满足的数据</td></tr><tr><td style="text-align:left;"><a href="./pipe.html">pipe</a></td><td style="text-align:left;">将集合传给给定的回调并返回结果</td></tr><tr><td style="text-align:left;"><a href="./pipeInto.html">pipeInto</a></td><td style="text-align:left;">创建给定类的新实例，并将集合传递给构造函数</td></tr><tr><td style="text-align:left;"><a href="./pipeThrough.html">pipeThrough</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./pluck.html">pluck</a></td><td style="text-align:left;">获取集合中给定键对应的所有值</td></tr><tr><td style="text-align:left;"><a href="./pop.html">pop</a></td><td style="text-align:left;"><strong>改变原集合</strong>，移除并返回集合中的最后一个项目</td></tr><tr><td style="text-align:left;"><a href="./prepend.html">prepend</a></td><td style="text-align:left;"><strong>改变原集合</strong>，将给定的值添加到集合的开头</td></tr><tr><td style="text-align:left;"><a href="./pull.html">pull</a></td><td style="text-align:left;"><strong>改变原集合</strong>，把给定键对应的值从集合中移除并返回</td></tr><tr><td style="text-align:left;"><a href="./push.html">push</a></td><td style="text-align:left;"><strong>改变原集合</strong>，把给定值添加到集合的末尾</td></tr><tr><td style="text-align:left;"><a href="./put.html">put</a></td><td style="text-align:left;"><strong>改变原集合</strong>，在集合内设置给定的键值对</td></tr><tr><td style="text-align:left;"><a href="./random.html">random</a></td><td style="text-align:left;">从集合中返回一个随机项</td></tr><tr><td style="text-align:left;"><a href="./reduce.html">reduce</a></td><td style="text-align:left;">将每次迭代的结果传递给下一次迭代直到集合减少为单个值</td></tr><tr><td style="text-align:left;"><a href="./reduceSpread.html">reduceSpread</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./reject.html">reject</a></td><td style="text-align:left;">使用指定的回调过滤集合</td></tr><tr><td style="text-align:left;"><a href="./replace.html">replace</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./replaceRecursive.html">replaceRecursive</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./reverse.html">reverse</a></td><td style="text-align:left;">倒转集合中项目的顺序</td></tr><tr><td style="text-align:left;"><a href="./search.html">search</a></td><td style="text-align:left;">搜索给定的值并返回它的键</td></tr><tr><td style="text-align:left;"><a href="./shift.html">shift</a></td><td style="text-align:left;"><strong>改变原集合</strong>，移除并返回集合的第一个项目</td></tr><tr><td style="text-align:left;"><a href="./shuffle.html">shuffle</a></td><td style="text-align:left;">随机排序集合中的项目</td></tr><tr><td style="text-align:left;"><a href="./skip.html">skip</a></td><td style="text-align:left;">返回一个新的集合，其中给定数量的元素从集合的开头删除</td></tr><tr><td style="text-align:left;"><a href="./skipUntil.html">skipUntil</a></td><td style="text-align:left;">跳过集合中的项目，直到给定的回调返回 <code>true</code> ，然后将集合中的其余项目作为新集合实例返回</td></tr><tr><td style="text-align:left;"><a href="./skipWhile.html">skipWhile</a></td><td style="text-align:left;">跳过集合中的项目，同时给定的回调返回 <code>true</code> ，然后将集合中的其余项目作为新集合返回</td></tr><tr><td style="text-align:left;"><a href="./slice.html">slice</a></td><td style="text-align:left;">返回集合中给定值后面的部分</td></tr><tr><td style="text-align:left;"><a href="./sliding.html">sliding</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./sole.html">sole</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./contains.html">some</a></td><td style="text-align:left;"><a href="./contains.html">contains</a> 方法的别名</td></tr><tr><td style="text-align:left;"><a href="./sort.html">sort</a></td><td style="text-align:left;">保留原数组的键，对集合进行排序</td></tr><tr><td style="text-align:left;"><a href="./sortBy.html">sortBy</a></td><td style="text-align:left;">以给定的键对集合进行正序排序</td></tr><tr><td style="text-align:left;"><a href="./sortByDesc.html">sortByDesc</a></td><td style="text-align:left;">与 <a href="./sortBy.html">sortBy</a> 一样，以相反的顺序来对集合进行排序</td></tr><tr><td style="text-align:left;"><a href="./sortDesc.html">sortDesc</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./sortKeys.html">sortKeys</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./sortKeysDesc.html">sortKeysDesc</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./sortKeysUsing.html">sortKeysUsing</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./splice.html">splice</a></td><td style="text-align:left;">删除并返回从给定值后的内容，原集合也会受到影响</td></tr><tr><td style="text-align:left;"><a href="./split.html">split</a></td><td style="text-align:left;">将集合按给定的值拆分</td></tr><tr><td style="text-align:left;"><a href="./splitIn.html">splitIn</a></td><td style="text-align:left;">将集合分为给定数量的组</td></tr><tr><td style="text-align:left;"><a href="./sum.html">sum</a></td><td style="text-align:left;">返回集合内所有项目的总和</td></tr><tr><td style="text-align:left;"><a href="./take.html">take</a></td><td style="text-align:left;">返回给定数量项目的新集合</td></tr><tr><td style="text-align:left;"><a href="./takeUntil.html">takeUntil</a></td><td style="text-align:left;">将返回集合中的项目，直到给定的回调返回 <code>true</code></td></tr><tr><td style="text-align:left;"><a href="./takeWhile.html">takeWhile</a></td><td style="text-align:left;">返回集合中的项目，直到给定的回调返回 <code>false</code></td></tr><tr><td style="text-align:left;"><a href="./tap.html">tap</a></td><td style="text-align:left;">将集合传递给回调，在特定点「tap」集合</td></tr><tr><td style="text-align:left;"><a href="./times.html">times</a></td><td style="text-align:left;">通过回调在给定次数内创建一个新的集合</td></tr><tr><td style="text-align:left;"><a href="./toArray.html">toArray</a></td><td style="text-align:left;">将集合转换成 PHP 数组</td></tr><tr><td style="text-align:left;"><a href="./toJson.html">toJson</a></td><td style="text-align:left;">将集合转换成 JSON 字符串</td></tr><tr><td style="text-align:left;"><a href="./transform.html">transform</a></td><td style="text-align:left;"><strong>改变原集合</strong>，迭代集合并对集合内的每个项目调用给定的回调</td></tr><tr><td style="text-align:left;"><a href="./undot.html">undot</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./union.html">union</a></td><td style="text-align:left;">将给定的数组添加到集合中</td></tr><tr><td style="text-align:left;"><a href="./unique.html">unique</a></td><td style="text-align:left;">返回集合中所有唯一的项目</td></tr><tr><td style="text-align:left;"><a href="./uniqueStrict.html">uniqueStrict</a></td><td style="text-align:left;">使用严格模式返回集合中所有唯一的项目</td></tr><tr><td style="text-align:left;"><a href="./unless.html">unless</a></td><td style="text-align:left;">除非方法的第一个参数的计算结果为true，否则该方法将执行给定的回调</td></tr><tr><td style="text-align:left;"><a href="./whenNotEmpty.html">unlessEmpty</a></td><td style="text-align:left;"><a href="./whenNotEmpty.html">whenNotEmpty</a> 方法的别名</td></tr><tr><td style="text-align:left;"><a href="./whenEmpty.html">unlessNotEmpty</a></td><td style="text-align:left;"><a href="./whenEmpty.html">whenEmpty</a> 方法别名</td></tr><tr><td style="text-align:left;"><a href="./unwrap.html">unwrap</a></td><td style="text-align:left;">静态 unwrap 方法在适用时从给定值返回集合的基础项</td></tr><tr><td style="text-align:left;"><a href="./value.html">value</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./values.html">values</a></td><td style="text-align:left;">返回键被重置为连续编号的新集合</td></tr><tr><td style="text-align:left;"><a href="./when.html">when</a></td><td style="text-align:left;">当传入的第一个参数为 true 的时，将执行给定的回调</td></tr><tr><td style="text-align:left;"><a href="./whenEmpty.html">whenEmpty</a></td><td style="text-align:left;">当集合为空时，<code>whenEmpty</code> 方法将执行给定的回调</td></tr><tr><td style="text-align:left;"><a href="./whenNotEmpty.html">whenNotEmpty</a></td><td style="text-align:left;">当集合不为空时，<code>whenNotEmpty</code> 方法将执行给定的回调</td></tr><tr><td style="text-align:left;"><a href="./where.html">where</a></td><td style="text-align:left;">通过给定的键值过滤集合</td></tr><tr><td style="text-align:left;"><a href="./whereStrict.html">whereStrict</a></td><td style="text-align:left;">使用严格模式通过给定的键值过滤集合</td></tr><tr><td style="text-align:left;"><a href="./whereBetween.html">whereBetween</a></td><td style="text-align:left;">通过确定指定的项目值是否在给定范围内来过滤集合</td></tr><tr><td style="text-align:left;"><a href="./whereIn.html">whereIn</a></td><td style="text-align:left;">通过给定的键值数组来过滤集合</td></tr><tr><td style="text-align:left;"><a href="./whereInStrict.html">whereInStrict</a></td><td style="text-align:left;">使用严格模式通过给定的键值数组来过滤集合</td></tr><tr><td style="text-align:left;"><a href="./whereInstanceOf.html">whereInstanceOf</a></td><td style="text-align:left;">按给定的类类型过滤集合</td></tr><tr><td style="text-align:left;"><a href="./whereNotBetween.html">whereNotBetween</a></td><td style="text-align:left;">通过确定指定的项目值不存在给定范围内来过滤集合</td></tr><tr><td style="text-align:left;"><a href="./whereNotIn.html">whereNotIn</a></td><td style="text-align:left;">集合中不包含的给定键值对进行匹配</td></tr><tr><td style="text-align:left;"><a href="./whereNotInStrict.html">whereNotInStrict</a></td><td style="text-align:left;">使用严格模式通过集合中不包含的给定键值对进行匹配</td></tr><tr><td style="text-align:left;"><a href="./whereNotNull.html">whereNotNull</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./whereNull.html">whereNull</a></td><td style="text-align:left;">TODO</td></tr><tr><td style="text-align:left;"><a href="./wrap.html">wrap</a></td><td style="text-align:left;">静态 wrap 方法在适用时将给定值包装在集合中</td></tr><tr><td style="text-align:left;"><a href="./zip.html">zip</a></td><td style="text-align:left;">将给定数组的值与相应索引处的原集合的值合并在一起</td></tr></tbody></table><h2 id="其它项目使用" tabindex="-1">其它项目使用 <a class="header-anchor" href="#其它项目使用" aria-label="Permalink to &quot;其它项目使用&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>Laravel 中的 Collection 使用 Composer 管理，所以可以在项目中使用 composer 安装到非 Laravel 项目中，通过下面使用命令安装它。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">composer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">require</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">illuminate/support</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">composer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">require</span><span style="color:#24292E;"> </span><span style="color:#032F62;">illuminate/support</span></span></code></pre></div><p>执行完上面的命令将得到所需要的拓展包。</p><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"><span style="color:#6A737D;">// 引入 package</span></span>
<span class="line"><span style="color:#F97583;">require</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__DIR__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/vendor/autoload.php&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 简单使用</span></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// Illuminate\\Support\\Collection {#1070 all: [1, 2, 3]}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"><span style="color:#6A737D;">// 引入 package</span></span>
<span class="line"><span style="color:#D73A49;">require</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__DIR__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/vendor/autoload.php&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 简单使用</span></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// Illuminate\\Support\\Collection {#1070 all: [1, 2, 3]}</span></span></code></pre></div><h2 id="在js中使用集合操作" tabindex="-1">在JS中使用集合操作 <a class="header-anchor" href="#在js中使用集合操作" aria-label="Permalink to &quot;在JS中使用集合操作&quot;">​</a></h2><p>如果在 JavaScript 中也需要使用类似的数组操作，具体可以可以参考 <a href="https://github.com/ecrmnn/collect.js" target="_blank" rel="noreferrer">ecrmnn/collect.js</a>。</p>`,21),r=[n];function d(o,i,p,f,y,h){return e(),l("div",null,r)}const x=t(s,[["render",d]]);export{g as __pageData,x as default};
