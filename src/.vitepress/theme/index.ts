/*
 * @FilePath: /nx-docs/src/.vitepress/theme/index.ts
 * @author: Wibus
 * @Date: 2022-05-28 21:49:03
 * @LastEditors: Wibus
 * @LastEditTime: 2022-05-28 22:10:25
 * Coding With IU
 */


// import './styles/code.css'
import './styles/style.css'

import { App, h, watch } from 'vue'
import Theme from 'vitepress/theme'
import { createHead } from '@vueuse/head'

// export default {
//   ...Theme,
//   Layout() {
//     return h(Theme.Layout, null, {
//       // 'home-features-after': () => h(HomeSponsors)
//     })
//   }
// }

export default Object.assign({}, Theme, {
  enhanceApp({ app }: { app: App }) {
    const head = createHead()
    app.use(head)
  },
})

// export default Theme