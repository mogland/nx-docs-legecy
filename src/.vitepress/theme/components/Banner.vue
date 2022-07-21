<!--
 * @FilePath: /nx-docs/src/.vitepress/theme/components/Banner.vue
 * @author: Wibus
 * @Date: 2022-06-03 08:33:23
 * @LastEditors: Wibus
 * @LastEditTime: 2022-07-21 14:16:53
 * Coding With IU
-->
<script setup>

let open = $ref(true)

/**
 * Call this if the banner is dismissible
 */
function dismiss() {
  open = false
  document.documentElement.classList.add('banner-dismissed')
  localStorage.setItem(`vue-docs-banner-${__VUE_BANNER_ID__}`, 'true')
}
</script>

<template>
  <div class="banner" v-if="open">
     <code>Release</code>｜NEXT Core v1.5.1 已发布！ &nbsp;
    <a
      href="https://github.com/nx-space/core/releases/tag/v1.5.1"
      target="_blank"
      >Learn more</a
    >
  </div>
</template>

<style>
html:not(.banner-dismissed) {
  --vt-banner-height: 24px;
}
</style>

<style scoped>
.banner {
  /* position: fixed; */
  z-index: var(--vp-z-index-banner);
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  height: var(--vt-banner-height);
  line-height: var(--vt-banner-height);
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background-color: #91bef0;
}

.banner-dismissed .banner {
  display: none;
}

a {
  text-decoration: underline;
}
</style>