export default {
  github: 'https://github.com/spencerwooo/onedrive-vercel-index',
  docsRepositoryBase:
    'https://github.com/spencerwooo/onedrive-vercel-index-docs/tree/main/src/pages',
  titleSuffix: ' - OneDrive Vercel Index',
  logo: (
    <>
      <span className="font-extrabold">onedrive-vercel-index</span>
      <span className="mr-2 ml-2 text-gray-500 font-normal hidden md:inline">
        indexing your onedrive since 2020
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="OneDrive Vercel Index" />
      <meta name="apple-mobile-web-app-title" content="OneDrive Vercel Index" />
    </>
  ),
  search: true,
  font: false,
  unstable_stork: true,
  unstable_faviconGlyph: '✦',
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  footerEditLink: ({ locale }) =>
    locale === 'zh' ? '前往 GitHub 编辑此页' : 'Edit this page on GitHub',
  footerText: <>Built with love {new Date().getFullYear()} © Spencer Woo</>
}
