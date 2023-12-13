import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jungle Sequencer',
  tagline: 'A node-based sequencing framework for Unity',
  favicon: 'img/favicon.ico',

  url: 'https://junglesequencer.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Jacked-Up/junglesequencer.com/tree/prod/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jungle',
        logo: {
          alt: 'Jungle Sequencer Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Installation',
                to: '/docs/get-started/install-jungle',
              },
              {
                label: 'Tutorials',
                to: '/docs/category/tutorials',
              },
              {
                label: 'Frequently Asked Questions',
                to: '/docs/frequently-asked-questions',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Unity Asset Store',
                href: '?',
              },
              {
                label: 'JungleGPT',
                href: 'https://chat.openai.com/g/g-OcQk2cjfh-junglegpt',
              },
              {
                label: 'Jacked Up Software',
                href: 'https://jackedupsoftware.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: '?',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Jacked-Up/junglesequencer.com',
              },
            ],
          },
        ],
        copyright: `<br/> © 2023-2024 Jacked Up Software LLC. <br/> <strong>Built with Docusaurus.</strong>`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: ['csharp']
      },
    }),
};

export default config;
