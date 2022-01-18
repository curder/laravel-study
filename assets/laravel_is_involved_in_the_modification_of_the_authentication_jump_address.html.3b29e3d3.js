import{e}from"./app.06a028ca.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h2 id="laravel\u4E2D\u6D89\u53CA\u8BA4\u8BC1\u8DF3\u8F6C\u5730\u5740\u7684\u4FEE\u6539\u7684\u5730\u65B9" tabindex="-1"><a class="header-anchor" href="#laravel\u4E2D\u6D89\u53CA\u8BA4\u8BC1\u8DF3\u8F6C\u5730\u5740\u7684\u4FEE\u6539\u7684\u5730\u65B9" aria-hidden="true">#</a> Laravel\u4E2D\u6D89\u53CA\u8BA4\u8BC1\u8DF3\u8F6C\u5730\u5740\u7684\u4FEE\u6539\u7684\u5730\u65B9</h2><p>\u767B\u5F55\u540E\u8DF3\u8F6C\uFF1A</p><p>\u5728<code>app\\Http\\Auth\\LoginController.php</code>\u4E2D\u4FEE\u6539</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected $redirectTo = &#39;/home&#39;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5DF2\u767B\u5F55\uFF0C\u8BBF\u95EE\u767B\u5F55\u63A5\u53E3\u65F6\u8DF3\u8F6C\uFF1A</p><p>\u4FEE\u6539<code>app\\Http\\Middleware\\RedirectIfAuthenticated.php</code>\u4E2D\u7684<code>handle()</code>\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public function handle($request, Closure $next, $guard = null)
 {
   if (Auth::guard($guard)-&gt;check()) {
       return redirect(&#39;/home&#39;);
   }
   
   return $next($request);
 }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u672A\u767B\u5F55\u8BBF\u95EE\u9700\u8981\u767B\u5F55\u9875\u9762\u65F6\u7684\u8DF3\u8F6C</p><p>\u4FEE\u6539<code>app\\Http\\Exceptions\\Handler.php</code>\u4E2D\u7684<code>unauthenticated()</code>\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected function unauthenticated($request, AuthenticationException $exception)
{
    if ($request-&gt;expectsJson()) {
        return response()-&gt;json([&#39;error&#39; =&gt; &#39;Unauthenticated.&#39;], 401);
    }
    return redirect()-&gt;guest(route(&#39;login&#39;));
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,10);function r(t,p){return s}var i=n(a,[["render",r]]);export{i as default};
