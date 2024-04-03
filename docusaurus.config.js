import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Jungle Sequencer',
  tagline: 'A conditional sequencing framework tool for Unity.',
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
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://assetstore.unity.com/packages/slug/258407',
            label: 'Buy Jungle',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Unity Asset Store',
                href: 'https://assetstore.unity.com/packages/slug/258407',
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
                href: 'https://discord.gg/vJ4AXsExfE',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/Jacked-Up/junglesequencer.com/discussions',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'License',
                to: '/license',
              },
              {
                label: 'Terms & Conditions',
                href: 'https://jackedupsoftware.com/legal/terms-and-conditions',
              },
              {
                label: 'Privacy Policy',
                href: 'https://jackedupsoftware.com/legal/privacy-policy',
              },
            ],
          },
        ],
        copyright: `<br/> © 2024 Jacked Up Software LLC`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['csharp']
      },
    }),
    plugins: [
      '@easyops-cn/docusaurus-search-local'
    ],
};

export default config;
