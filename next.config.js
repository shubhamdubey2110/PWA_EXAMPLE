const nextTranslate = require('next-translate',)
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  ...nextTranslate(),
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: true,
    scope: '/',
    disable: false,

  },
})
