/* eslint-disable import/no-duplicates */

declare interface Window {
  // extend the window
}

// 将md文件视为一个vue组件
declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
