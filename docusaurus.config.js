import { themes as prismThemes } from 'prism-react-renderer';

module.exports = {
  title: 'Jungle Sequencer',
  tagline: 'A visual node-based tool designed to help developers interact with their game code in a more intuitive way.',
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
      '@docusaurus/preset-classic',
      {
        // Theme config
        theme: { customCss: './src/css/custom.css' },
        
        // Documentation config
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Jacked-Up/junglesequencer.com/tree/prod/',
          versions: {
            current: { label: '1.1.0 (Preview)', path: '1.1.0' }
          },
        },
        
        // Blog config
        blog: {
          showReadingTime: true,
          postsPerPage: 999,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
        },
        
        // Sitemap config
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          async createSitemapItems(params) {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      },
    ],
  ],
  
  
  
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Jungle Sequencer',
      logo: {
        alt: 'Jungle Sequencer Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
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
          label: 'News & Changelog',
          position: 'right',
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
              label: 'Jacked Up Software',
              href: 'https://jackedupsoftware.com',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Discord Server',
              href: '/discord',
            },
            {
              label: 'GitHub Discussions',
              href: '/github-discussions',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
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
      copyright: `<br/>© 2025 Jacked Up Software`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['csharp'],
    },
  },
  plugins: ['@easyops-cn/docusaurus-search-local']
};
