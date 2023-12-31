// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/supabase',
      '@vueuse/nuxt',
  ],
  devtools: { enabled: true }
})
