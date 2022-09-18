// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NewsFetch',
  tagline: 'News: Processed, Structured, and Ready to Use',
  url: 'https://newsfetch.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'newsfetch', // Usually your GitHub org/user name.
  projectName: 'newsfetch', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'NewsFetch Logo',
          src: 'img/newsfetch_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/features/api',
            label: 'Sample API',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/newsfetch/newsfetch',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'News Extraction',
                to: '/docs/features/common-crawl-news-extraction',
              },
            ],
          },
          {
            title: 'Features',
            items: [
              {
                label: 'Enriched News',
                href: '/docs/features/enriched-news',
              },
              {
                label: '100% Free',
                href: '/docs/license',
              },
              {
                label: 'Sample API ',
                href: '/docs/features/api',
              },
              {
                label: 'Sample API (Deployed)',
                href: 'https://api.newsfetch.tech/docs',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Articles',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/newsfetch/newsfetch',
              },
              {
                label: 'CloudCosmos',
                href: 'https://cloudcosmos.tech',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CloudCosmos`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
