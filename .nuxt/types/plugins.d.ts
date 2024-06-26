// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.6_@unocss+reset@0.59.0_floating-vue@5.2.2_unocss@0.59.0_vite@5.2.8/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.6_@unocss+reset@0.59.0_floating-vue@5.2.2_unocss@0.59.0_vite@5.2.8/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.6_@unocss+reset@0.59.0_floating-vue@5.2.2_unocss@0.59.0_vite@5.2.8/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.6_@unocss+reset@0.59.0_floating-vue@5.2.2_unocss@0.59.0_vite@5.2.8/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.6_@unocss+reset@0.59.0_floating-vue@5.2.2_unocss@0.59.0_vite@5.2.8/node_modules/nuxt/dist/app/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.3/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.3/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@cssninja+nuxt-toaster@0.3.12_vue@3.4.21/node_modules/@cssninja/nuxt-toaster/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.6_@unocss+reset@0.59.0_floating-vue@5.2.2_unocss@0.59.0_vite@5.2.8/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.6_@unocss+reset@0.59.0_floating-vue@5.2.2_unocss@0.59.0_vite@5.2.8/node_modules/nuxt/dist/app/plugins/dev-server-logs").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.6_@unocss+reset@0.59.0_floating-vue@5.2.2_unocss@0.59.0_vite@5.2.8/node_modules/nuxt/dist/app/plugins/check-if-layout-used").default> &
  InjectionType<typeof import("../../plugins/directives").default> &
  InjectionType<typeof import("../../plugins/vueuse").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:global-components' | 'nuxt:chunk-reload' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
