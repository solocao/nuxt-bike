module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'AA电单车',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: [{ src: '~plugins/iview', ssr: true }, '~plugins/axios.js', { src: '~/plugins/swiper.js', ssr: false }, { src: '~/plugins/route' }, { src: '~/plugins/localStorage.js', ssr: false }],

  css: ['~assets/css/main.css', '~style/app.styl', '~assets/css/bootstrap.min.css', 'font-awesome/css/font-awesome.min.css', 'swiper/dist/css/swiper.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

