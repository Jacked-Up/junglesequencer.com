import { themes as prismThemes } from 'prism-react-renderer';

module.exports = {
    title: 'Jungle Sequencer',
    tagline: 'The quickest and easiest solution for building node-based sequences in Unity.',
    
    favicon: './favicon.ico',
    url: 'https://junglesequencer.com',
    
    baseUrl: '/',
    staticDirectories: ['static'],
    
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                // Theme config
                theme: { customCss: require.resolve('./src/css/custom.css') },
                
                // Documentation config
                docs: {
                    path: 'docs',
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/Jacked-Up/junglesequencer.com/blob/live/',
                    versions: {
                        current: { 
                            label: '1.1.0 (Preview)',
                            path: '1.1.0' 
                        }
                    },
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: false,
                },
                
                // Blog config
                blog: {
                    path: 'blog',
                    routeBasePath: 'announcements',
                    blogTitle: 'News & Changelog',
                    postsPerPage: 10,
                    blogSidebarTitle: 'All Posts',
                    blogSidebarCount: 'ALL',
                    showReadingTime: false,
                    onUntruncatedBlogPosts: 'ignore'
                },
                
                // Sitemap config
                sitemap: {
                    lastmod: 'date',
                    changefreq: 'weekly',
                    priority: 0.7,
                    ignorePatterns: [
                        '/tags/**',
                        '/discord',
                        '/github-discussions',
                    ],
                    filename: 'sitemap.xml',
                    async createSitemapItems(params) {
                        const { defaultCreateSitemapItems, siteConfig } = params;
                        const items = await defaultCreateSitemapItems(params);
                        return items
                            .filter(item => !item.url.includes('/page/'))
                            .map(item => {
                                if (item.url === `${siteConfig.url}/`)
                                    return { ...item, priority: 1.0, changefreq: 'daily' };
                                if (item.url.includes('/archive/'))
                                    return { ...item, priority: 0.3, changefreq: 'monthly' };
                                return item;
                            });
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
        
        navbar: {
            title: 'Jungle Sequencer',
            logo: {
                src: 'https://cdn.junglesequencer.com/homepage/jungle-sequencer-logo.svg',
                alt: 'Jungle Sequencer Logo',
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
                    to: '/announcements',
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
            copyright: `<br/>© ${new Date().getFullYear()} Jacked Up Software`,
        },
        
        algolia: {
            appId: '7651ITKIZU',
            apiKey: 'd7260d5f1b5b2291f4509c0e9037adb4',
            indexName: 'junglesequencer_docs',
            contextualSearch: true,
            searchPagePath: 'search',
            searchParameters: {
                clickAnalytics: false,
                facetFilters: ['type:docs'],
            },
        },
        
        prism: {
            theme:     prismThemes.oneLight,
            darkTheme: prismThemes.oneDark,
            additionalLanguages: ['csharp'],
        },
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn'
};
