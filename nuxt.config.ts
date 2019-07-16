import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
  mode: 'universal',
  srcDir: 'app',

  head: {
    title: 'nuxt-ci-example-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [],
  },

  modules: [['@nuxtjs/dotenv', { path: './', filename: '.env' }]],

  plugins: ['@/plugins/functionApi.ts', '@/plugins/http.ts'],

  devModules: ['@nuxtjs/tailwindcss'],
};

export default config;
