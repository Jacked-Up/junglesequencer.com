/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    documentationSidebar: [
      'documentation/welcome',
      'documentation/concepts',
      'documentation/node-properties',
      {
          type: 'category',
          label: 'Jungle Nodes',
          link: {
              type: 'generated-index',
          },
          collapsed: true,
          items: [
              'documentation/jungle-nodes/jungle-node',
              'documentation/jungle-nodes/branch-node',
              'documentation/jungle-nodes/io-node',
              'documentation/jungle-nodes/identity-node',
              'documentation/jungle-nodes/event-node'
          ],
      },
      'documentation/jungle-port',
      'documentation/jungle-tree',
      'documentation/jungle-runtime',
      'documentation/jungle-playback',
      'documentation/jungle-manifest',
      'documentation/jungle-player',
      'documentation/jungle-utils',
      'documentation/jungle-editor-utils',
      'documentation/jungle-validator',
      'documentation/jungle-exception',
      'documentation/jungle-preferences',
      'documentation/over-time-helper'
  ],
  guidesSidebar: [
      {
          type: 'category',
          label: 'Creating Node Scripts',
          link: {
              type: 'generated-index',
          },
          collapsed: true,
          items: [
              'guides/creating-node-scripts/using-the-node-fabricator',
              'guides/creating-node-scripts/creating-branch-nodes',
              'guides/creating-node-scripts/creating-io-nodes',
              'guides/creating-node-scripts/creating-identity-nodes',
              'guides/creating-node-scripts/creating-event-nodes'
          ],
      },
      'guides/deleting-node-scripts',
      {
          type: 'category',
          label: 'Jungle Editor',
          link: {
              type: 'generated-index',
          },
          collapsed: true,
          items: [
              'guides/jungle-editor/graph-panel',
              'guides/jungle-editor/inspector-panel',
              'guides/jungle-editor/explorer-panel',
              'guides/jungle-editor/sticky-notes'
          ],
      },
      {
          type: 'category',
          label: 'Node Context Features',
          link: {
              type: 'generated-index',
          },
          collapsed: true,
          items: [
              'guides/node-context-features/details-box',
              'guides/node-context-features/progress-bar',
              'guides/node-context-features/control-panel',
              'guides/node-context-features/gizmos'
          ],
      },
      'guides/custom-node-inspectors',
      'guides/revert-actions',
      'guides/jungle-validator'
  ],
};

export default sidebars;
