import{_ as c,C as t,o as r,c as y,H as n,w as l,k as s,a,t as i,Q as o}from"./chunks/framework.5499cfac.js";const w=JSON.parse('{"title":"Blade 模版","description":"","frontmatter":{},"headers":[],"relativePath":"partials/blade.md","filePath":"partials/blade.md","lastUpdated":1642349014000}'),E={name:"partials/blade.md"},d=o("",18),F=s("div",{class:"language-php vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"php"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"Route"),s("span",{style:{color:"#F97583"}},"::"),s("span",{style:{color:"#B392F0"}},"view"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'about'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'pages.about'"),s("span",{style:{color:"#E1E4E8"}},"); "),s("span",{style:{color:"#6A737D"}},"// 视图在 `resources/pages/about.blade.php`")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#005CC5"}},"Route"),s("span",{style:{color:"#D73A49"}},"::"),s("span",{style:{color:"#6F42C1"}},"view"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'about'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'pages.about'"),s("span",{style:{color:"#24292E"}},"); "),s("span",{style:{color:"#6A737D"}},"// 视图在 `resources/pages/about.blade.php`")])])])],-1),h=s("div",{class:"language-php vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"php"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 路由定义")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79B8FF"}},"Route"),s("span",{style:{color:"#F97583"}},"::"),s("span",{style:{color:"#B392F0"}},"get"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'about'"),s("span",{style:{color:"#E1E4E8"}},", ["),s("span",{style:{color:"#79B8FF"}},"\\App\\Https\\Controllers\\PagesController"),s("span",{style:{color:"#F97583"}},"::class"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'about'"),s("span",{style:{color:"#E1E4E8"}},"]);")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 控制器")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"PagesController"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"extends"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Controller")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"about"),s("span",{style:{color:"#E1E4E8"}},"()")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"view"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'pages.about'"),s("span",{style:{color:"#E1E4E8"}},"); "),s("span",{style:{color:"#6A737D"}},"// 视图在 `resources/pages/about.blade.php`")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 路由定义")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#005CC5"}},"Route"),s("span",{style:{color:"#D73A49"}},"::"),s("span",{style:{color:"#6F42C1"}},"get"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'about'"),s("span",{style:{color:"#24292E"}},", ["),s("span",{style:{color:"#005CC5"}},"\\App\\Https\\Controllers\\PagesController"),s("span",{style:{color:"#D73A49"}},"::class"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'about'"),s("span",{style:{color:"#24292E"}},"]);")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 控制器")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"PagesController"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"extends"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Controller")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"about"),s("span",{style:{color:"#24292E"}},"()")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"view"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'pages.about'"),s("span",{style:{color:"#24292E"}},"); "),s("span",{style:{color:"#6A737D"}},"// 视图在 `resources/pages/about.blade.php`")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),u=o("",42),C=s("code",null,":",-1),g=o("",8),A=s("div",{class:"language-php vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"php"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 定义公共模版 resources/views/partials/item.blade.php")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#F97583"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"p"),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#79B8FF"}},"Name"),s("span",{style:{color:"#E1E4E8"}},": {{ $item"),s("span",{style:{color:"#F97583"}},"->"),s("span",{style:{color:"#E1E4E8"}},"name }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"p"),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#79B8FF"}},"Price"),s("span",{style:{color:"#E1E4E8"}},": {{ $item"),s("span",{style:{color:"#F97583"}},"->"),s("span",{style:{color:"#E1E4E8"}},"price }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"</"),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#F97583"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 使用")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"@foreach"),s("span",{style:{color:"#E1E4E8"}},"($item "),s("span",{style:{color:"#79B8FF"}},"in"),s("span",{style:{color:"#E1E4E8"}}," $items)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"@include"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'partials.item'"),s("span",{style:{color:"#E1E4E8"}},", $item)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"@endforeach")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 定义公共模版 resources/views/partials/item.blade.php")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#D73A49"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"p"),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#005CC5"}},"Name"),s("span",{style:{color:"#24292E"}},": {{ $item"),s("span",{style:{color:"#D73A49"}},"->"),s("span",{style:{color:"#24292E"}},"name }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"p"),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#005CC5"}},"Price"),s("span",{style:{color:"#24292E"}},": {{ $item"),s("span",{style:{color:"#D73A49"}},"->"),s("span",{style:{color:"#24292E"}},"price }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"</"),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#D73A49"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 使用")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"@foreach"),s("span",{style:{color:"#24292E"}},"($item "),s("span",{style:{color:"#005CC5"}},"in"),s("span",{style:{color:"#24292E"}}," $items)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"@include"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'partials.item'"),s("span",{style:{color:"#24292E"}},", $item)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"@endforeach")])])])],-1),D=s("div",{class:"language-php vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"php"),s("pre",{class:"shiki github-dark has-highlighted-lines vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 定义公共模版 resources/views/partials/item.blade.php")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#F97583"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"p"),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#79B8FF"}},"Name"),s("span",{style:{color:"#E1E4E8"}},": {{ $item"),s("span",{style:{color:"#F97583"}},"->"),s("span",{style:{color:"#E1E4E8"}},"name }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"p"),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#79B8FF"}},"Price"),s("span",{style:{color:"#E1E4E8"}},": {{ $item"),s("span",{style:{color:"#F97583"}},"->"),s("span",{style:{color:"#E1E4E8"}},"price }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"</"),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#F97583"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 使用")]),a(`
`),s("span",{class:"line highlighted"},[s("span",{style:{color:"#F97583"}},"@"),s("span",{style:{color:"#79B8FF"}},"each"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'partials.item'"),s("span",{style:{color:"#E1E4E8"}},", $items, "),s("span",{style:{color:"#9ECBFF"}},"'item'"),s("span",{style:{color:"#E1E4E8"}},")")])])]),s("pre",{class:"shiki github-light has-highlighted-lines vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 定义公共模版 resources/views/partials/item.blade.php")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#D73A49"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"p"),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#005CC5"}},"Name"),s("span",{style:{color:"#24292E"}},": {{ $item"),s("span",{style:{color:"#D73A49"}},"->"),s("span",{style:{color:"#24292E"}},"name }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"p"),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#005CC5"}},"Price"),s("span",{style:{color:"#24292E"}},": {{ $item"),s("span",{style:{color:"#D73A49"}},"->"),s("span",{style:{color:"#24292E"}},"price }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"</"),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#D73A49"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 使用")]),a(`
`),s("span",{class:"line highlighted"},[s("span",{style:{color:"#D73A49"}},"@"),s("span",{style:{color:"#005CC5"}},"each"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'partials.item'"),s("span",{style:{color:"#24292E"}},", $items, "),s("span",{style:{color:"#032F62"}},"'item'"),s("span",{style:{color:"#24292E"}},")")])])])],-1),v=s("h2",{id:"整理模版的简单方法",tabindex:"-1"},[a("整理模版的简单方法 "),s("a",{class:"header-anchor",href:"#整理模版的简单方法","aria-label":'Permalink to "整理模版的简单方法"'},"​")],-1),b=s("div",{class:"language-php vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"php"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// if/loop 组合")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"@if"),s("span",{style:{color:"#E1E4E8"}}," ($orders"),s("span",{style:{color:"#F97583"}},"->"),s("span",{style:{color:"#B392F0"}},"count"),s("span",{style:{color:"#E1E4E8"}},"())")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"@foreach"),s("span",{style:{color:"#E1E4E8"}},"($orders "),s("span",{style:{color:"#F97583"}},"as"),s("span",{style:{color:"#E1E4E8"}}," $order)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#F97583"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            {{ $order"),s("span",{style:{color:"#F97583"}},"->"),s("span",{style:{color:"#E1E4E8"}},"id }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"</"),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#F97583"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"@endforeach")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"@else")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"p"),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#79B8FF"}},"You"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"haven"),s("span",{style:{color:"#9ECBFF"}},"'t placed any orders yet.</p>")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"@endif")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// if/loop 组合")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"@if"),s("span",{style:{color:"#24292E"}}," ($orders"),s("span",{style:{color:"#D73A49"}},"->"),s("span",{style:{color:"#6F42C1"}},"count"),s("span",{style:{color:"#24292E"}},"())")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"@foreach"),s("span",{style:{color:"#24292E"}},"($orders "),s("span",{style:{color:"#D73A49"}},"as"),s("span",{style:{color:"#24292E"}}," $order)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#D73A49"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            {{ $order"),s("span",{style:{color:"#D73A49"}},"->"),s("span",{style:{color:"#24292E"}},"id }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"</"),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#D73A49"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"@endforeach")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"@else")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"p"),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#005CC5"}},"You"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"haven"),s("span",{style:{color:"#032F62"}},"'t placed any orders yet.</p>")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"@endif")])])])],-1),B=s("div",{class:"language-php vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"php"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// forelse 选择")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"@"),s("span",{style:{color:"#B392F0"}},"forelse"),s("span",{style:{color:"#E1E4E8"}},"($orders "),s("span",{style:{color:"#F97583"}},"as"),s("span",{style:{color:"#E1E4E8"}}," $order)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#F97583"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {{ $order"),s("span",{style:{color:"#F97583"}},"->"),s("span",{style:{color:"#E1E4E8"}},"id }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"</"),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#F97583"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"@"),s("span",{style:{color:"#79B8FF"}},"empty")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#79B8FF"}},"p"),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#79B8FF"}},"You"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"haven"),s("span",{style:{color:"#9ECBFF"}},"'t placed any orders yet.</p>")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"@endforelse")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// forelse 选择")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"@"),s("span",{style:{color:"#6F42C1"}},"forelse"),s("span",{style:{color:"#24292E"}},"($orders "),s("span",{style:{color:"#D73A49"}},"as"),s("span",{style:{color:"#24292E"}}," $order)")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#D73A49"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        {{ $order"),s("span",{style:{color:"#D73A49"}},"->"),s("span",{style:{color:"#24292E"}},"id }}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"</"),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#D73A49"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"@"),s("span",{style:{color:"#005CC5"}},"empty")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#005CC5"}},"p"),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#005CC5"}},"You"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"haven"),s("span",{style:{color:"#032F62"}},"'t placed any orders yet.</p>")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"@endforelse")])])])],-1),f=o("",3);function k($,m,q,_,x,P){const p=t("CodeGroupItem"),e=t("CodeGroup");return r(),y("div",null,[d,n(e,null,{default:l(()=>[n(p,{title:"view",active:""},{default:l(()=>[F]),_:1}),n(p,{title:"normal"},{default:l(()=>[h]),_:1})]),_:1}),u,s("p",null,[a("如果在组件参数前传递冒号 "),C,a(" ，就可以直接传递变量而不用 "),s("code",null,i(),1),a(" 吗？")]),g,n(e,null,{default:l(()=>[n(p,{title:"@foreach写法"},{default:l(()=>[A]),_:1}),n(p,{title:"@each 优化写法",active:""},{default:l(()=>[D]),_:1})]),_:1}),v,n(e,null,{default:l(()=>[n(p,{title:"@if/loop 组合"},{default:l(()=>[b]),_:1}),n(p,{title:"@forelse 选择",active:""},{default:l(()=>[B]),_:1})]),_:1}),f])}const I=c(E,[["render",k]]);export{w as __pageData,I as default};
