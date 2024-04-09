
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "dev"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/peetstander/Projects/omni-components/app.config.ts"
import cfg1 from "/Users/peetstander/Projects/omni-components/node_modules/.pnpm/@shuriken-ui+nuxt@3.1.2_nuxt@3.11.2_postcss@8.4.38_vite@5.2.8_vue@3.4.21/node_modules/@shuriken-ui/nuxt/app.config.ts"
import cfg2 from "/Users/peetstander/Projects/omni-components/node_modules/.c12/github_PartnersInBiz_omni_M9B51hibRi/app.config.ts"
import cfg3 from "/Users/peetstander/Projects/omni-components/node_modules/.c12/github_PartnersInBiz_omni_qPPBrXbF0L/app.config.ts"
import cfg4 from "/Users/peetstander/Projects/omni-components/node_modules/.c12/github_PartnersInBiz_omni_HtcWSpAjdW/app.config.ts"
import cfg5 from "/Users/peetstander/Projects/omni-components/node_modules/.c12/github_PartnersInBiz_omni_VhAOxl0RQY/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, cfg2, cfg3, cfg4, cfg5, inlineConfig)
