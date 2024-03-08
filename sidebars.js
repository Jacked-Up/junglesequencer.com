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
              'documentation/jungle-nodes/generic-node',
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
      'guides/updating-jungle',
      'guides/using-the-jungle-editor',
      'guides/using-sticky-notes',
      'guides/creating-a-tree',
      'guides/creating-a-node',
      'guides/using-the-jungle-validator',
      'guides/node-editor-context',
      'guides/drawing-gizmos-from-nodes',
      'guides/custom-node-inspectors',
      'guides/over-time-helper',
      'guides/deleting-node-scripts',
  ],
};

export default sidebars;
