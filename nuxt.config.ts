// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icons', 
    '@nuxtjs/tailwindcss', 
    '@nuxt/image', 
    '@vee-validate/nuxt', 
    '@storyblok/nuxt'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN
  },
  components: {
    dirs: [
      {
        path: '~/components/storyblok',
        global: true,
      }
    ]
  },
})
