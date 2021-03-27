const { readdirSync } = require('fs');



module.exports = {
    lang: 'zh-CN',
    title: 'Laravel 学习记录',
    description: 'Laravel学习点滴',


    themeConfig: {
        logo: '/images/laravel-logo.min.svg',
        navbar: [
            {text: '首页', link: '/'},
            {
                text: '集合',
                link: '/collections/',
            },
            {
                text: '模型',
                link: '/model/'
            },
            {text: "其它", link: '/others/'}
        ],
        sidebar: {
            '/collections/': [
                {
                    isGroup: true,
                    text: '集合',
                    children: [
                        // '/collections/README.md',
                        // '/collections/demo/README.md',
                        ...readdirSync('docs/collections', 'utf-8').filter((f) => f.endsWith('.md')).map(file => `/collections/${file}`),
                    ],
                },
                {
                    isGroup: true,
                    text: '实际应用',
                    children: [
                        ...readdirSync('docs/collections/demo', 'utf-8').filter((f) => f.endsWith('.md')).map(file => `/collections/demo/${file}`),
                    ]
                }
            ],
            '/model/': [
                {
                    isGroup: true,
                    text: '模型',
                    children: [
                        '/model/README.md',
                        '/model/related-relationships/README.md'
                    ],
                },
            ],
        },
    }
}
