import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "dynamic" | "empty" | "collapse" | "sidebar" | "topnav"
declare module "../../node_modules/.pnpm/nuxt@3.11.1_@parcel+watcher@2.4.1_@types+node@20.11.30_@unocss+reset@0.58.7_floating-vue@5.2.2_unocss@0.58.7_vite@5.2.6/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}