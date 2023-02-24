import {defineConfig} from 'vitepress'
import nav from './nav'
import sidebar from "./sidebar";

export default defineConfig({
    base: "/laravel-study/",
    lang: 'zh-CN',
    title: 'Laravel 学习记录',
    description: 'Laravel学习点滴',
    lastUpdated: true,
    head: [
        ['link', {rel: 'icon', href: '/laravel-study/images/favicon.ico'}],
    ],
    themeConfig: {
        logo: {
            src: '/images/logomark.min.svg',
            alt: "Laravel Logo",
        },
        siteTitle: "Laravel 学习记录",
        outlineBadges: false,
        outline: {
            label: "章节导航",
            level: 'deep',
        },
        lastUpdatedText: "最后更新时间",
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/laravel-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/laravel-study'}
        ],
        nav,
        sidebar,
    }
});
