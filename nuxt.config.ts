const title = "Nuxt3 + TailwindCSS + Prisma";

export default defineNuxtConfig({
  // to enable takover mode
  typescript: { shim: false },
  // For tailwindcss to work
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // css files
  css: ["~/assets/css/main.css", "@/assets/css/datatables.css"],
  // modules
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@morev/vue-transitions/nuxt",
    "nuxt-typed-router",
    "nuxt-headlessui",
    "@nuxt/devtools",
  ],

  runtimeConfig: {
    SECRET: process.env.SECRET,
  },
  // google fonts
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  app: {
    pageTransition: { name: "fade-scale", mode: "out-in", appear: true },
    layoutTransition: { name: "fade-scale", mode: "out-in", appear: true },
    head: {
      title,
      titleTemplate: `%s | ${title}`,
    },
  },

  // headless ui config
  headlessui: {
    prefix: "H",
  },
});
