/*
 * @FilePath: /nx-docs/src/.vitepress/config.ts
 * @author: Wibus
 * @Date: 2022-05-28 19:58:17
 * @LastEditors: Wibus
 * @LastEditTime: 2022-05-28 20:04:02
 * Coding With IU
 */


import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NEXT Space',
  description: 'Your NEXT Future Blog Space',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
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