(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[3906],{5146:(n,e,s)=>{"use strict";s.r(e),s.d(e,{data:()=>a});const a={key:"v-3db1e57b",path:"/others/how_to_use_repository_mode.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何使用 Repository 模式",slug:"如何使用-repository-模式",children:[{level:3,title:"Laravel 框架版本",slug:"laravel-框架版本",children:[]},{level:3,title:"数据库逻辑",slug:"数据库逻辑",children:[]},{level:3,title:"Model",slug:"model",children:[]},{level:3,title:"Repository",slug:"repository",children:[]},{level:3,title:"最后",slug:"最后",children:[]}]}],filePathRelative:"others/how_to_use_repository_mode.md",git:{updatedTime:161649134e4,contributors:[]}}},5981:(n,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>C});var a=s(6252);const r=(0,a.uE)('<h2 id="如何使用-repository-模式" tabindex="-1"><a class="header-anchor" href="#如何使用-repository-模式" aria-hidden="true">#</a> 如何使用 Repository 模式</h2><p>若将数据库逻辑都写在 Model 里，会造成 model 代码的臃肿难以维护，基于 SOLID 原则，我们应该使用 <strong>Repository</strong> 模式辅助 Model，将相关的数据库逻辑封装在不同的 Repository，方便后期项目的维护。</p><h3 id="laravel-框架版本" tabindex="-1"><a class="header-anchor" href="#laravel-框架版本" aria-hidden="true">#</a> Laravel 框架版本</h3><p>Laravel 5.4.17</p><h3 id="数据库逻辑" tabindex="-1"><a class="header-anchor" href="#数据库逻辑" aria-hidden="true">#</a> 数据库逻辑</h3><p>在 CURD 中，CUR 比较稳定，但 Read 的部分则变化万千，大部分的数据库逻辑都在描述 Read 部分，若将数据库逻辑写在 Controller 或 Model 都不合适，会造成 Controller 或 Model 代码臃肿，如后难以维护。</p><h3 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h3><p>使用 Repository 模式之后，Model 仅仅当成 Eloquent Class 即可，不需要包含数据库逻辑，仅保留如下部分：</p><ul><li><p>Property： 如 <code>$table</code> <code>$fillable</code> ..</p></li><li><p>Mutator： 包括 mutator 与 accessor</p></li><li><p>Method： relation 类的方法，比如使用 <code>hasMany()</code> 与 <code>belongsTo()</code></p></li></ul><p>单一对应关系：</p><ul><li>hasOne</li><li>belongsTo</li><li>morphTo</li><li>morphOne</li></ul><p>多个对应关系指的是使用以下关键词定义的关联模型：</p><ul><li>hasMany</li><li>belongsToMany</li><li>morphMany</li><li>morphToMany</li><li>morphedByMany</li></ul>',13),l=(0,a.Uk)("因为 Eloquent 会根据数据库字段动态的产生 property 与 method等，若使用 "),p={href:"https://github.com/barryvdh/laravel-ide-helper",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("Laravel IDE Helper"),t=(0,a.Uk)(" ，会直接在Model加上 "),b=(0,a.Wm)("code",null,"@property",-1),o=(0,a.Uk)(" 与 "),u=(0,a.Wm)("code",null,"@method",-1),c=(0,a.Uk)(" 描述model的动态 proerty 与 method。 如下"),m=(0,a.Wm)("code",null,"app\\User.php",-1),d=(0,a.Uk)("中安装完"),h=(0,a.Wm)("code",null,"Laravel IDE Helper",-1),y=(0,a.Uk)("后执行"),g=(0,a.Wm)("code",null,"php artisan ide-helper:models",-1),v=(0,a.Uk)("后自动生成的内容："),R=(0,a.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App;\n\nuse Illuminate\\Notifications\\Notifiable;\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\n\n/**\n * App\\User\n *\n * @property int $id\n * @property string $name\n * @property string $email\n * @property string $password\n * @property string $remember_token\n * @property \\Carbon\\Carbon $created_at\n * @property \\Carbon\\Carbon $updated_at\n * @property-read \\Illuminate\\Notifications\\DatabaseNotificationCollection|\\Illuminate\\Notifications\\DatabaseNotification[] $notifications\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereCreatedAt($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereEmail($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereId($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereName($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User wherePassword($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereRememberToken($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereUpdatedAt($value)\n * @mixin \\Eloquent\n */\nclass User extends Authenticatable\n{\n    use Notifiable;\n\n    /**\n     * The attributes that are mass assignable.\n     *\n     * @var array\n     */\n    protected $fillable = [\n        &#39;name&#39;, &#39;email&#39;, &#39;password&#39;,\n    ];\n\n    /**\n     * The attributes that should be hidden for arrays.\n     *\n     * @var array\n     */\n    protected $hidden = [\n        &#39;password&#39;, &#39;remember_token&#39;,\n    ];\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> Repository</h3><p>在开发时常常会在 Controller 直接调用 Model 写数据库逻辑，如下：获取数据库中用户 <code>age&gt;20</code>的数据。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function index()\n{\n    return User::where(&#39;age&#39;,&#39;&gt;&#39;,20)-&gt;orderBy(&#39;age&#39;)-&gt;get();\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这样写逻辑会有几个问题：</p><ul><li><p>将数据库逻辑写在 Controller，造成 Controller 代码臃肿难以维护。</p></li><li><p>违反了 SOLID 的单一职责原则，数据库逻辑不应该写在 Controller 中。</p></li><li><p>Controller 直接操作 Model，使得对 Controller 做单元测试困难。</p></li></ul><p>比较好的方式是使用 Repository：</p><ul><li><p>将 Model 依赖注入到 Repository。</p></li><li><p>将数据库逻辑写在 Repository。</p></li><li><p>将 Repository 依赖注入到 Service。</p></li></ul><p><code>app/Repositories/UserRepostitory.php</code> 中的内容：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App\\Repositories;\n\n\nuse App\\User;\n\n/**\n * Class UserRepository\n * @package App\\Repositories\n */\nclass UserRepository\n{\n    /**\n     * @var User\n     */\n    private $user;\n\n    /**\n     * UserRepository constructor.\n     * @param $user\n     */\n    public function __construct(User $user)\n    {\n        $this-&gt;user = $user;\n    }\n\n    /**\n     * @param $age\n     * @return \\Illuminate\\Database\\Eloquent\\Collection|static[]\n     */\n    public function getAgeLargerThan($age)\n    {\n        return $this-&gt;user\n            -&gt;where(&#39;age&#39;, &#39;&gt;&#39;, $age)\n            -&gt;orderBy(&#39;age&#39;)\n            -&gt;get();\n    }\n\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>在控制器<code>app\\Controllers\\UserController.php</code>中使用依赖注入：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Repositories\\UserRepository;\nuse Illuminate\\Http\\Request;\n\n/**\n * Class UserController\n *\n * @package App\\Http\\Controllers\n */\nclass UserController extends Controller\n{\n    /**\n     * @var \\App\\Repositories\\UserRepository\n     */\n    protected $userRepository;\n\n    /**\n     * UserController constructor.\n     * @param $userRepository\n     */\n    public function __construct(UserRepository $userRepository)\n    {\n        $this-&gt;userRepository = $userRepository;\n    }\n\n    /**\n     * @return \\Illuminate\\Database\\Eloquent\\Collection|static[]\n     */\n    public function index()\n    {\n        return $this-&gt;userRepository-&gt;getAgeLargerThan(20);\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>将相依的 <code>UserRepository</code> 依賴注入到 <code>UserController</code>，并从原本直接依赖 <code>User</code> Model改成依赖注入的 <code>UserRepository</code></p><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4><ul><li><p>将数据库逻辑写在 Repository 里，解决了 Controller 代码臃肿的问题。</p></li><li><p>符合 SOLID 的单一职责原则：数据库逻辑写在 Repository 里，没写在 Controller 里。</p></li><li><p>符合 SOLID 的依赖反转原则：Controller 并非直接相依与 Repositroy，而是将 Repository 依赖注入进 Controller。</p></li></ul><blockquote><p>实际上建议 Repository 仅依赖注入进 Service，而不是直接注入在 Controller。</p></blockquote><h4 id="是否该建立-repository-interface" tabindex="-1"><a class="header-anchor" href="#是否该建立-repository-interface" aria-hidden="true">#</a> 是否该建立 Repository Interface？</h4><p>理论上使用依赖注入时，应该使用 Interface ，不过 Interface 目的在于更换数据库，让代码达到开放封闭的要求，但是实际上要更改 Reposiroty 的机会也不多，除非是从 MySQL 更换到 MongoDB，此时就应该建立 Repository Interface。</p><p>不过由于我们使用了依赖注入，将来要从 Class 改成 Interface 也很方便，只要在 Constructor 的 type hint 改成 Interface 即可，维护成本很低，所以在此大可使用 Repository Class 即可，不一定得用Interface而造成 Over Design，等真正需要修改时，再重构 Interface 即可。</p><h4 id="是否该使用-query-scope" tabindex="-1"><a class="header-anchor" href="#是否该使用-query-scope" aria-hidden="true">#</a> 是否该使用 Query Scope?</h4><p>Laravel 4.2 就有 QueryScope，到 Laravel5.1 都还保留着，它让我们可以将逻辑代码写在 Model ，解决了维护与重复使用的问题。</p><p>如 <code>app/User.php</code> 里的代码：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App;\n\nuse Illuminate\\Notifications\\Notifiable;\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\n\n/**\n * App\\User\n *\n * @property int                                                                                                            $id\n * @property string                                                                                                         $name\n * @property string                                                                                                         $email\n * @property string                                                                                                         $password\n * @property string                                                                                                         $remember_token\n * @property \\Carbon\\Carbon                                                                                                 $created_at\n * @property \\Carbon\\Carbon                                                                                                 $updated_at\n * @property-read \\Illuminate\\Notifications\\DatabaseNotificationCollection|\\Illuminate\\Notifications\\DatabaseNotification[] $notifications\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereCreatedAt($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereEmail($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereId($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereName($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User wherePassword($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereRememberToken($value)\n * @method static \\Illuminate\\Database\\Query\\Builder|\\App\\User whereUpdatedAt($value)\n * @mixin \\Eloquent\n */\nclass User extends Authenticatable\n{\n    use Notifiable;\n\n    /**\n     * The attributes that are mass assignable.\n     *\n     * @var array\n     */\n    protected $fillable = [\n        &#39;name&#39;, &#39;email&#39;, &#39;password&#39;,\n    ];\n\n    /**\n     * The attributes that should be hidden for arrays.\n     *\n     * @var array\n     */\n    protected $hidden = [\n        &#39;password&#39;, &#39;remember_token&#39;,\n    ];\n\n    /**\n     *\n     * @param Builder $query\n     * @param integer $age\n     *\n     * @return Builder\n     */\n    public function scopeGetAgerLargerThan($query, $age)\n    {\n        return $query-&gt;where(&#39;age&#39;, &#39;&gt;&#39;, $age)\n            -&gt;orderBy(&#39;age&#39;);\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>QueryScope 必须以 <code>scope</code>开头，第一个参数为 queryBuilder，一定要加上；第二个参数以后为自己要传入的参数。 由于回传必须是一个 queryBuilder ，因此不需要加上 <code>get()</code></p><p><code>app/Controllers/UserController.php</code> 中使用代码：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Repositories\\UserRepository;\nuse App\\User;\nuse Illuminate\\Http\\Request;\n\n/**\n * Class UserController\n *\n * @package App\\Http\\Controllers\n */\nclass UserController extends Controller\n{\n    /**\n     * @var \\App\\Repositories\\UserRepository\n     */\n    protected $userRepository;\n\n    /**\n     * UserController constructor.\n     * @param $userRepository\n     */\n    public function __construct(UserRepository $userRepository)\n    {\n        $this-&gt;userRepository = $userRepository;\n    }\n\n    /**\n     * @return \\Illuminate\\Database\\Eloquent\\Collection|static[]\n     */\n    public function index()\n    {\n        return User::getAgerLargerThan(20)-&gt;get();\n    }\n\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>在 Controller 中使用 QueryScope 时，不需要加上 Prefix，由于其本质是 queryBuilder，所以还要加上 <code>get()</code> 才能获得 Conllection 数据。</p><p>由于 QueryScope 是写在 Model，不是写在 Controller，所以基本上解决了 Controller 臃肿违反 SOLID 的单一职责原则的问题， Controller 也可以重复使用 QueryScope ，已经比直接将资料库逻辑写在 Controlelr 中好很多。</p><p>不过若在中大型项目中，仍然有以下问题：</p><ul><li><p>Model 已经有原来的责任，若再加上 queryScope，造成 Model 过于臃肿难以维护。</p></li><li><p>若数据库逻辑很多，可能拆成多个 Repository，可是确很难拆成多个 Model。</p></li><li><p>单元测试困难，必须面临 mock Eloquent 的问题。</p></li></ul><h3 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h3><p>实际开发时，可以一开始 1 个 Repository 对应 1 个 Model，但是也不必太过执着于 1 个 Repository，一定要对应 1 个 Model，可将 Repository 视为逻辑上的数据库逻辑类别即可，可以横跨多个Model处理，也可以 1 个 Model 拆成多个 Repository，视情况而定。</p><p>Repository 使得数据库逻辑从 Controller 或 Model 中解放，不仅更容易维护、更容易拓展、更容易重复使用，也更容易测试。</p>',33),C={render:function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[r,(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[l,(0,a.Wm)("a",p,[i,(0,a.Wm)(s)]),t,b,o,u,c,m,d,h,y,g,v])]),R],64)}}}}]);