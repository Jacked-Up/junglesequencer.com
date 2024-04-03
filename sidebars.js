/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    documentationSidebar: [
      'documentation/welcome',
      'documentation/concepts',
      {
          type: 'category',
          label: 'Jungle Nodes',
          link: {
              type: 'generated-index',
          },
          collapsed: false,
          items: [
              'documentation/jungle-nodes/node-properties',
              'documentation/jungle-nodes/branch-node',
              'documentation/jungle-nodes/io-node',
              'documentation/jungle-nodes/identity-node',
              'documentation/jungle-nodes/event-node',
          ],
      },
      'documentation/jungle-tree',
      'documentation/jungle-manifest',
      'documentation/jungle-player',
      'documentation/jungle-gizmos',
      'documentation/jungle-runtime',
      'documentation/jungle-exception'
  ],
  guidesSidebar: [
      'guides/installing-jungle',
      'guides/creating-nodes',
      {
          type: 'category',
          label: 'Jungle Editor',
          link: {
              type: 'generated-index',
          },
          collapsed: true,
          items: [
              'guides/jungle-editor/node-graph',
              'guides/jungle-editor/node-inspector',
              'guides/jungle-editor/node-explorer',
              'guides/jungle-editor/sticky-notes'
          ],
      },
      'guides/jungle-validator',
      'guides/custom-node-inspectors',
      'guides/node-editor-context',
      'guides/revert-actions',
      'guides/over-time-helper',
      'guides/deleting-node-scripts'
  ],
};

export default sidebars;
