const { readdirSync } = require('fs');

console.log(readdirSync('docs/collections', 'utf-8').map(file => `/collections/${file}`));

module.exports = {
    lang: 'zh-CN',
    title: 'Laravel 学习记录',
    description: 'Laravel学习点滴',


    themeConfig: {
        logo: '/images/laravel-logo.min.svg',
        navbar: [
            {text: '首页', link: '/'},
            // {
            //     text: '集合',
            //     link: '/collections/',
            // },
            {
                text: '模型',
                link: '/model/'
            },
            {text: "其它", link: '/others/'}
        ],
        sidebar: [
            {
                collapsable: false,
                isGroup: true,
                text: '集合',
                children: readdirSync('docs/collections', 'utf-8').map(file => `/collections/${file}`),
            }
        ],
        // sidebar: {
        //     '/collections/': [
        //         {
        //             isGroup: true,
        //             text: null,
        //             children: [
        //                 '/collections/README.md',
        //                 '/collections/demo/README.md'
        //             ],
        //         }
        //     ],
        //     '/model/': [
        //         {
        //             isGroup: true,
        //             text: '模型',
        //             children: [
        //                 '/model/README.md',
        //                 '/model/related-relationships/README.md'
        //             ],
        //         },
        //     ],
        // },
    }
}
