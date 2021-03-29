const { readdirSync } = require('fs');

const getFiles = (dir, filteredReadme = true) => {
    return readdirSync(`docs/${dir}`, 'utf-8')
        .filter((f) => filteredReadme ? !f.endsWith('README.md') : true)
        .filter((f) => f.endsWith('.md'))
        .map(f => `/${dir}/${f}`)
}

module.exports = {
    lang: 'zh-CN',
    title: 'Laravel 学习记录',
    description: 'Laravel学习点滴',


    themeConfig: {
        logo: '/images/laravel-logo.min.svg',
        navbar: [
            {text: '首页', link: '/'},
            {text: '集合', children:['/collections/','/collections/demo/']},
            {text: '模型', children: ['/model/', '/model/related-relationships/']},
            {text: "其它", link: '/others/'}
        ],
        sidebar: {
            '/collections/': [
                {
                    isGroup: true,
                    text: '集合',
                    children: getFiles('collections', false),
                },
                {
                    isGroup: true,
                    text: '实际应用',
                    children: getFiles('collections/demo'),
                }
            ],
            '/model/': [
                {
                    isGroup: true,
                    text: '基础',
                    children: getFiles('model'),
                },
                {
                    isGroup: true,
                    text: '关联关系',
                    children: getFiles('model/related-relationships'),
                }
            ],
        },
    }
}
