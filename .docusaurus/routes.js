import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '83b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '182'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ec9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f75'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ce3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '52f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5e9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '47f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b7c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '463'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '0ab'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ccb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1a3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7b1'),
            routes: [
              {
                path: '/docs/category/dialog-system',
                component: ComponentCreator('/docs/category/dialog-system', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorials',
                component: ComponentCreator('/docs/category/tutorials', 'f40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus-intro',
                component: ComponentCreator('/docs/docusaurus-intro', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extras/jungle-cache',
                component: ComponentCreator('/docs/extras/jungle-cache', 'ca0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extras/jungle-exception',
                component: ComponentCreator('/docs/extras/jungle-exception', 'a98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/extras/jungle-runtime',
                component: ComponentCreator('/docs/extras/jungle-runtime', 'fc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/frequently-asked-questions',
                component: ComponentCreator('/docs/frequently-asked-questions', '5d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/install-jungle',
                component: ComponentCreator('/docs/get-started/install-jungle', '191'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/update-jungle',
                component: ComponentCreator('/docs/get-started/update-jungle', '348'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jungle-nodes/advanced/custom-node-inspectors',
                component: ComponentCreator('/docs/jungle-nodes/advanced/custom-node-inspectors', 'f60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jungle-nodes/advanced/custom-node-types',
                component: ComponentCreator('/docs/jungle-nodes/advanced/custom-node-types', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jungle-nodes/branch-node',
                component: ComponentCreator('/docs/jungle-nodes/branch-node', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jungle-nodes/event-node',
                component: ComponentCreator('/docs/jungle-nodes/event-node', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jungle-nodes/identity-node',
                component: ComponentCreator('/docs/jungle-nodes/identity-node', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jungle-nodes/io-node',
                component: ComponentCreator('/docs/jungle-nodes/io-node', '227'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jungle-nodes/node-properties',
                component: ComponentCreator('/docs/jungle-nodes/node-properties', 'aa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jungle-tree',
                component: ComponentCreator('/docs/jungle-tree', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/dialog-system/dialog-branch-node',
                component: ComponentCreator('/docs/tutorials/dialog-system/dialog-branch-node', '3d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/dialog-system/dialog-choice-node',
                component: ComponentCreator('/docs/tutorials/dialog-system/dialog-choice-node', 'f97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/dialog-system/dialog-ui',
                component: ComponentCreator('/docs/tutorials/dialog-system/dialog-ui', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/dialog-system/getting-started',
                component: ComponentCreator('/docs/tutorials/dialog-system/getting-started', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '08b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
