// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
   '@nuxtjs/tailwindcss',
   'nuxt-gtag',
   '@nuxt/content',
   'nuxt-file-storage',
   '@nuxt/eslint',
   // '@nuxtjs/ngrok',
   '@pinia/nuxt',
   '@nuxtjs/i18n',
   "@nuxtjs/color-mode",
   "@nuxt/icon",
   "@nuxtjs/seo",
   "@sidebase/nuxt-auth",
   "nuxt-time",
   "@nuxt/fonts",
   "nuxt-security",
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],


  tailwindcss: {
    exposeConfig: true,
  },


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  gtag: {
    id: 'G-XXXXXXXXXX',
  },

  fileStorage: {
    mount: process.env.STORAGE_PATH || '/_files',
  },

 /* ngrok: {
    // EXPOSES only 3000 port
    authtoken_from_env: true,
    auth: process.env.NGROK_AUTH
  },*/

  pinia: {
    storesDirs: ['./stores/**'],
  },

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        language: "en-US",
        name: "English",
        dir: "ltr",
        file: "en-US.json",
      },
      {
        code: "uk",
        iso: "uk-UA",
        language: "uk-UA",
        name: "Ukrainian",
        dir: "ltr",
        file: "uk-UA.json",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.ts",

    lazy: false,
    langDir: "lang",
    baseUrl: process.env.BASE_URL,
    
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light',
  },

  auth: {
    isEnabled: false,
    baseURL: process.env.API_URL + '/auth',
  },

  fonts: {
    assets: {
      prefix: '/fonts/'
    },
    experimental: {
      processCSSVariables: true
    }
  },

  security: {
//TBD
  },

  routeRules: {
    "/": {prerender: true, robots: true},
  },

  site: { 
    url: process.env.BASE_URL,
  },

  seo: { // seo utils
    enabled: true,
  },

  robots: {
    blockNonSeoBots: true,
    blockAiBots: true
  },

  sitemap: { 
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: 'weekly'
    }
  },

  schemaOrg: {
    enabled: false
  },

  ogImage: {
    enabled: false
  },

  linkChecker: {
    enabled: false
  },

  nitro: {
    prerender: {
      // enabled by default with nuxt generate, not required
      crawlLinks: true,
      // add any routes to prerender
      routes: ['/']
    },
    experimental: {
      tasks: true
    }
  },



})