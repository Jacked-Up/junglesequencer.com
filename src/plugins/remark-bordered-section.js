// remark-bordered-section.js
const { visit, SKIP } = require('unist-util-visit');

function isMarker(node, marker) {
    return (
        node.type === 'paragraph' &&
        node.children?.length === 1 &&
        node.children[0].type === 'text' &&
        node.children[0].value.trim() === marker
    );
}

function remarkBorderedSection() {
    return (tree) => {
        let hasBorderedImport = false;

        // Walk the root for existing imports first
        visit(tree, 'mdxjsEsm', (node) => {
            if (/\bimport\s+BorderedSection\b/.test(node.value)) {
                hasBorderedImport = true;
            }
        });

        // Walk again to transform the markers into a <BorderedSection>
        visit(tree, (node, index, parent) => {
            if (!parent) return;

            if (isMarker(node, '--[')) {
                const nodesBetween = [];
                let i = index + 1;

                while (i < parent.children.length && !isMarker(parent.children[i], ']--')) {
                    nodesBetween.push(parent.children[i]);
                    i += 1;
                }

                // Found a closing marker?
                if (i < parent.children.length && isMarker(parent.children[i], ']--')) {
                    // Replace from opening '--[' to closing ']--' (inclusive)
                    parent.children.splice(index, i - index + 1, {
                        type: 'mdxJsxFlowElement',
                        name: 'BorderedSection',
                        attributes: [],
                        children: nodesBetween,
                    });

                    return [SKIP, index]; // Skip over the newly-inserted node
                }
            }
        });

        // Inject import at the very top of the file if it was missing
        if (!hasBorderedImport) {
            tree.children.unshift({
                type: 'mdxjsEsm',
                value: "import BorderedSection from '@site/src/components/BorderedSection';",
            });
        }
    };
}

module.exports = remarkBorderedSection;
