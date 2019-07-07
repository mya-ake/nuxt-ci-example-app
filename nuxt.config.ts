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

  devModules: ['@nuxtjs/tailwindcss'],
};

export default config;
