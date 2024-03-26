
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
import cfg0 from "/Users/peetstander/Projects/omni-components/app.config"
import cfg1 from "/Users/peetstander/Projects/omni-components/node_modules/.pnpm/@shuriken-ui+nuxt@3.0.4_nuxt@3.11.1_postcss@8.4.38_vite@5.2.6_vue@3.4.21/node_modules/@shuriken-ui/nuxt/app.config"
import cfg2 from "/Users/peetstander/Projects/omni-components/node_modules/.c12/github_PartnersInBiz_omni_M9B51hibRi/app.config"
import cfg3 from "/Users/peetstander/Projects/omni-components/node_modules/.c12/github_PartnersInBiz_omni_qPPBrXbF0L/app.config"
import cfg4 from "/Users/peetstander/Projects/omni-components/node_modules/.c12/github_PartnersInBiz_omni_HtcWSpAjdW/app.config"
import cfg5 from "/Users/peetstander/Projects/omni-components/node_modules/.c12/github_PartnersInBiz_omni_VhAOxl0RQY/app.config"

declare const inlineConfig = {
  "nuxt": {
    "buildId": "dev"
  }
}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0, typeof cfg1, typeof cfg2, typeof cfg3, typeof cfg4, typeof cfg5]>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
