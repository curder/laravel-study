import{_ as e,o as a,c as t,R as s}from"./chunks/framework.0o4kB30X.js";const u=JSON.parse('{"title":"重用环境变量值","description":"","frontmatter":{},"headers":[],"relativePath":"tips/reuse-the-environment-variable-value.md","filePath":"tips/reuse-the-environment-variable-value.md","lastUpdated":1700190096000}'),i={name:"tips/reuse-the-environment-variable-value.md"},n=s(`<h1 id="重用环境变量值" tabindex="-1">重用环境变量值 <a class="header-anchor" href="#重用环境变量值" aria-label="Permalink to &quot;重用环境变量值&quot;">​</a></h1><p>当环境变量中存在重复的变量值时，可以重用环境变量值。</p><p>可以使用此语法重用它们，而不是重写这些值。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-q4UvK" id="tab-rj4DGE_" checked="checked"><label for="tab-rj4DGE_">错误 ❌</label><input type="radio" name="group-q4UvK" id="tab-ET8Cohv"><label for="tab-ET8Cohv">正确 ✅</label></div><div class="blocks"><div class="language-txt vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>APP_URL=https://laravel-tips.test</span></span>
<span class="line"><span>ADMIN_URL=https://laravel-tips.test</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>APP_URL=https://laravel-tips.test</span></span>
<span class="line"><span>ADMIN_URL=&quot;\${APP_URL}&quot;</span></span></code></pre></div></div></div>`,4),p=[n];function l(o,r,c,d,v,h){return a(),t("div",null,p)}const b=e(i,[["render",l]]);export{u as __pageData,b as default};
