import exposeColors from "./tailwind/plugin-expose-colors"

export default defineNuxtConfig({
  extends: [
    "@shuriken-ui/nuxt",
    ["github:PartnersInBiz/omni-layout-collapse", { install: true }],
    ["github:PartnersInBiz/omni-layout-dynamic", { install: true }],
    ["github:PartnersInBiz/omni-layout-sidebar", { install: true }],
    ["github:PartnersInBiz/omni-layout-topnav", { install: true }],
  ],
  modules: ["@cssninja/nuxt-toaster"],
  plugins: [],

  tailwindcss: {
    config: {
      content: [],
      plugins: [exposeColors],
    },
  },
  app: {
    pageTransition: {
      enterActiveClass: "transition-opacity duration-200 ease-out",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "transition-opacity duration-75 ease-in",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0",
    },
  },
})
