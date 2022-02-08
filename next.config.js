const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.js',
  unstable_staticImage: true
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
  reactStrictMode: true
})
