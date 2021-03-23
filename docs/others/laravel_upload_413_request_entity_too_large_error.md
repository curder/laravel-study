# Laravel上传大文件提示413 Request Entity Too Large错误

在使用Laravel开发项目时，遇到前台使用[AJAX插件](http://zui.sexy/#view/uploader/2)上传图片，结果报错\(**Error: 413 Request Entity Too Large**\)，通过**服务器**响应信息可以看出是请求头过长。

解决方案是在web服务器进行配置，这里以Nginx服务器为例，设置：[client\_max\_body\_size](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)的大小。

官网原文如下：

> ```
> Syntax: client_max_body_size size;
> Default: client_max_body_size 1m;
> Context: http, server, location
> ```
>
> Sets the maximum allowed size of the client request body, specified in the “Content-Length” request header field. If the size in a request exceeds the configured value, the 413 \(Request Entity Too Large\) error is returned to the client. Please be aware that browsers cannot correctly display this error. Setting size to 0 disables checking of client request body size.

设置`client_max_body_size`的大小为 **2m** 即可。



