import{r as s,o as r,c as a,b as t,a as n,F as i,d as e,e as l}from"./app.9d6e082c.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const _={},d=t("h1",{id:"laravel\u4E0A\u4F20\u5927\u6587\u4EF6\u63D0\u793A413-request-entity-too-large\u9519\u8BEF",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#laravel\u4E0A\u4F20\u5927\u6587\u4EF6\u63D0\u793A413-request-entity-too-large\u9519\u8BEF","aria-hidden":"true"},"#"),e(" Laravel\u4E0A\u4F20\u5927\u6587\u4EF6\u63D0\u793A413 Request Entity Too Large\u9519\u8BEF")],-1),h=e("\u5728\u4F7F\u7528Laravel\u5F00\u53D1\u9879\u76EE\u65F6\uFF0C\u9047\u5230\u524D\u53F0\u4F7F\u7528"),p={href:"http://zui.sexy/#view/uploader/2",target:"_blank",rel:"noopener noreferrer"},u=e("AJAX\u63D2\u4EF6"),m=e("\u4E0A\u4F20\u56FE\u7247\uFF0C\u7ED3\u679C\u62A5\u9519("),g=t("strong",null,"Error: 413 Request Entity Too Large",-1),b=e(")\uFF0C\u901A\u8FC7"),x=t("strong",null,"\u670D\u52A1\u5668",-1),f=e("\u54CD\u5E94\u4FE1\u606F\u53EF\u4EE5\u770B\u51FA\u662F\u8BF7\u6C42\u5934\u8FC7\u957F\u3002"),y=e("\u89E3\u51B3\u65B9\u6848\u662F\u5728web\u670D\u52A1\u5668\u8FDB\u884C\u914D\u7F6E\uFF0C\u8FD9\u91CC\u4EE5Nginx\u670D\u52A1\u5668\u4E3A\u4F8B\uFF0C\u8BBE\u7F6E\uFF1A"),v={href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size",target:"_blank",rel:"noopener noreferrer"},q=e("client_max_body_size"),z=e("\u7684\u5927\u5C0F\u3002"),k=l(`<p>\u5B98\u7F51\u539F\u6587\u5982\u4E0B\uFF1A</p><blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Syntax: client_max_body_size size;
Default: client_max_body_size 1m;
Context: http, server, location
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Sets the maximum allowed size of the client request body, specified in the \u201CContent-Length\u201D request header field. If the size in a request exceeds the configured value, the 413 (Request Entity Too Large) error is returned to the client. Please be aware that browsers cannot correctly display this error. Setting size to 0 disables checking of client request body size.</p></blockquote><p>\u8BBE\u7F6E<code>client_max_body_size</code>\u7684\u5927\u5C0F\u4E3A <strong>2m</strong> \u5373\u53EF\u3002</p>`,3);function L(E,w){const o=s("ExternalLinkIcon");return r(),a(i,null,[d,t("p",null,[h,t("a",p,[u,n(o)]),m,g,b,x,f]),t("p",null,[y,t("a",v,[q,n(o)]),z]),k],64)}var T=c(_,[["render",L]]);export{T as default};
