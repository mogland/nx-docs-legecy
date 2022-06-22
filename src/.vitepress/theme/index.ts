/*
 * @FilePath: /nx-docs/src/.vitepress/theme/index.ts
 * @author: Wibus
 * @Date: 2022-05-28 21:49:03
 * @LastEditors: Wibus
 * @LastEditTime: 2022-06-22 13:47:04
 * Coding With IU
 */


// import './styles/code.css'
import './styles/style.css'
import { createHead } from '@vueuse/head'
// @ts-ignore
import Banner from './components/Banner.vue'
import DefaultTheme from 'vitepress/theme'
import { App, h } from 'vue'

export default {
  ...DefaultTheme,
  Layout: () => {
    // const router = useRouter()

    // watch(
    //   () => router.route.data.relativePath,
    //   (path) => {
    //     ;(window as any).umami.trackView(path)
    //     ;(window as any).umami.trackEvent(router.route.data.title, 'view')
    //   },
    //   { immediate: true }
    // )
    // @ts-ignore
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(Banner)
    })
  },
  enhanceHead({ app }: { app: App }) {
    const heads = createHead()
    app.use(heads)
  }
}