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
                'documentation/jungle-tree/jungle-manifest'
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
                'documentation/editor-only/jungle-preferences'
            ],
        },
    ],
    guidesSidebar: [
        {
            type: 'category',
            label: 'Creating Nodes',
            link: {
                type: 'doc',
                id: 'guides/creating-nodes/node-fabricator',
            },
            collapsed: true,
            items: [
                'guides/creating-nodes/branch-node',
                'guides/creating-nodes/io-node',
                'guides/creating-nodes/identity-node',
                'guides/creating-nodes/event-node'
            ],
        },
        'guides/deleting-nodes',
        {
            type: 'category',
            label: 'Jungle Editor',
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
            label: 'Node Features',
            collapsed: true,
            items: [
                'guides/node-features/details-box',
                'guides/node-features/progress-bar',
                'guides/node-features/control-panel',
                'guides/node-features/gizmos',
                'guides/node-features/custom-inspector'
            ],
        },
        'guides/revert-actions',
        'guides/over-time-helper',
        
        
        'guides/jungle-validator',
        'guides/jungle-preferences'
    ],
};

export default sidebars;
