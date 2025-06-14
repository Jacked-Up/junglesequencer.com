/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    documentationSidebar: [
        'documentation/welcome',
        'documentation/concepts',
        {
            type: 'category',
            label: 'Jungle Tree',
            link: {
                type: 'doc',
                id: 'documentation/jungle-tree/jungle-tree',
            },
            collapsed: true,
            items: [
                'documentation/jungle-tree/jungle-manifest',
            ],
        },
        {
            type: 'category',
            label: 'Jungle Node',
            link: {
                type: 'doc',
                id: 'documentation/jungle-node/jungle-node',
            },
            collapsed: true,
            items: [
                'documentation/jungle-node/node-properties',
                'documentation/jungle-node/branch-node',
                'documentation/jungle-node/io-node',
                'documentation/jungle-node/identity-node',
                'documentation/jungle-node/event-node'
            ],
        },
        {
            type: 'category',
            label: 'Jungle Port',
            link: {
                type: 'doc',
                id: 'documentation/jungle-port/jungle-port',
            },
            collapsed: true,
            items: [
                'documentation/jungle-port/jungle-port-call',
                'documentation/jungle-port/jungle-port-info',
                'documentation/jungle-port/jungle-port-none',
                'documentation/jungle-port/jungle-port-directions',
                'documentation/jungle-port/jungle-port-nas',
                'documentation/jungle-port/jungle-port-error'
            ],
        },
        {
            type: 'category',
            label: 'Jungle Runtime',
            link: {
                type: 'doc',
                id: 'documentation/jungle-runtime/jungle-runtime',
            },
            collapsed: true,
            items: [
                'documentation/jungle-runtime/jungle-playback',
                'documentation/jungle-runtime/jungle-exception',
                'documentation/jungle-runtime/jungle-player'
            ],
        },
        {
            type: 'category',
            label: 'Miscellaneous',
            collapsed: true,
            items: [
                'documentation/miscellaneous/jungle-utils',
                'documentation/miscellaneous/jungle-gui-layout',
                'documentation/miscellaneous/over-time-helper'
            ],
        },
        {
            type: 'category',
            label: 'Editor Only',
            collapsed: true,
            items: [
                'documentation/editor-only/jungle-editor-utils',
                'documentation/editor-only/jungle-validator',
                'documentation/editor-only/jungle-preferences',
            ],
        },
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
