/*
 * @FilePath: /nx-docs/src/.vitepress/theme/index.ts
 * @author: Wibus
 * @Date: 2022-05-28 21:49:03
 * @LastEditors: Wibus
 * @LastEditTime: 2022-07-14 19:43:38
 * Coding With IU
 */


// import './styles/code.css'
import { createHead } from '@vueuse/head'
// @ts-ignore
import Banner from './components/Banner.vue'
import DefaultTheme from 'vitepress/theme'
import { App, h } from 'vue'
import './styles/style.css'

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