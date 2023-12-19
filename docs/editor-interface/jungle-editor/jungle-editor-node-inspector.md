---
title: Node Inspector
sidebar_position: 2
---

The node inspector is where you edit the properties of your nodes.

![Renaming nodes in the inspector](img/jungle-editor-inspector-editing.gif)

---
## Opening a Node in the Inspector

The node inspector automatically displays the properties of the most recently selected node.

:::info NO MULTIPLE SELECTION EDITING SUPPORT
**Currently**, the node inspector does not support editing multiple nodes at once.
:::

---
## Renaming Nodes

You can rename nodes using the text input at the top of the inspector. The name does not need to be unique.

![Renaming nodes in the inspector](img/jungle-editor-inspector-rename.png)

All nodes automatically are given a unique name when they are created. 

:::info NAME REQUIREMENTS
The name of a node must be at least **one** character long.
:::

---
## Custom Node Inspectors

Custom node inspectors are a powerful way to extend the functionality of your nodes.
Building inspectors for nodes works the same way as building `MonoBehaviour` and `ScriptableObject` custom inspectors.

Read more about custom node inspectors **[here](../../../docs/jungle-nodes/advanced/custom-node-inspectors)**.
