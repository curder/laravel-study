import{_ as e,o as a,c as s,Q as t}from"./chunks/framework.aefb929a.js";const u=JSON.parse('{"title":"重用环境变量值","description":"","frontmatter":{},"headers":[],"relativePath":"tips/reuse-the-environment-variable-value.md","filePath":"tips/reuse-the-environment-variable-value.md","lastUpdated":1695291452000}'),n={name:"tips/reuse-the-environment-variable-value.md"},l=t(`<h1 id="重用环境变量值" tabindex="-1">重用环境变量值 <a class="header-anchor" href="#重用环境变量值" aria-label="Permalink to &quot;重用环境变量值&quot;">​</a></h1><p>当环境变量中存在重复的变量值时，可以重用环境变量值。</p><p>可以使用此语法重用它们，而不是重写这些值。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-IwMnN" id="tab-j5tUd-O" checked="checked"><label for="tab-j5tUd-O">错误 ❌</label><input type="radio" name="group-IwMnN" id="tab-IxXVRhY"><label for="tab-IxXVRhY">正确 ✅</label></div><div class="blocks"><div class="language-dotenv vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">APP_URL=https://laravel-tips.test</span></span>
<span class="line"><span style="color:#e1e4e8;">ADMIN_URL=https://laravel-tips.test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">APP_URL=https://laravel-tips.test</span></span>
<span class="line"><span style="color:#24292e;">ADMIN_URL=https://laravel-tips.test</span></span></code></pre></div><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">APP_URL=https://laravel-tips.test</span></span>
<span class="line"><span style="color:#e1e4e8;">ADMIN_URL=&quot;\${APP_URL}&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">APP_URL=https://laravel-tips.test</span></span>
<span class="line"><span style="color:#24292e;">ADMIN_URL=&quot;\${APP_URL}&quot;</span></span></code></pre></div></div></div>`,4),p=[l];function o(i,c,r,d,v,h){return a(),s("div",null,p)}const b=e(n,[["render",o]]);export{u as __pageData,b as default};
