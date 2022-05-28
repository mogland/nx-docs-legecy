/*
 * @FilePath: /nx-docs/src/.vitepress/config.ts
 * @author: Wibus
 * @Date: 2022-05-28 19:58:17
 * @LastEditors: Wibus
 * @LastEditTime: 2022-05-28 23:15:38
 * Coding With IU
 */


import { resolve } from 'path'
import { defineConfig } from 'vitepress'

export default defineConfig({

  title: 'NEXT Space',
  description: 'Your NEXT Future Blog Space',
  outDir: resolve(__dirname, '../../dist'),

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  vue: {
    reactivityTransform: true
  },

  vite: {
    json: {
      stringify: true,
    },

  },
  themeConfig: {

    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/develop/': sidebarDevelop()
    },

    logo: '/logo.svg',

    editLink: {
      repo: 'vitejs/vite',
      branch: 'main',
      dir: 'docs',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/wibus_wee' },
      // { icon: 'discord', link: 'https://chat.vitejs.dev' },
      { icon: 'github', link: 'https://github.com/nx-space' }
    ],

    footer: {
      message: 'Released under the AGPL v3 License.',
      copyright: 'Copyright © 2021-present Wibus & NEXT-Space Contributors'
    },

  }

})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    // { text: 'Configs', link: '/config/', activeMatch: '/config/' },
    { text: 'Develop', link: '/develop/', activeMatch: '/develop/' },
    {
      text: 'Organization',
      link: 'https://github.com/nx-space'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: '为什么使用 NEXT?', link: '/guide/' },
        { text: '开始使用', link: '/guide/getting-started' },
        { text: '配置项', link: '/guide/configuration' },
        // { text: 'Deploying', link: '/guide/deploying' },
        // { text: 'API Reference', link: '/guide/api' },
        // { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Develop',
      collapsible: true,
      items: [
        { text: '前端开发指南', link: '/develop/' },
        { text: '服务端 API', link: '/develop/api' },
        { text: '注意事项', link: '/develop/tips' },
      ]
    },


  ]
}

function sidebarDevelop() {
  return [
    {
      text: 'Develop',
      collapsible: true,
      items: [
        { text: '前端开发指南', link: '/develop/' },
        { text: '服务端 API', link: '/develop/api' },
        { text: '注意事项', link: '/develop/tips' },
      ]
    },
  ]
}