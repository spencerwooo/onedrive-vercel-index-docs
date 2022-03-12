const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en'
  },
  async redirects() {
    return [
      {
        source: '/sponsor',
        destination: '/sponsor/ways',
        permanent: true
      }
    ]
  },
  reactStrictMode: true
})
