---
title: Concepts
sidebar_position: 1

slug: /concepts
---

Jungle is a one-of-a-kind tool. There are many concepts and ideas that are unique to Jungle.
This page will help you understand core concepts and ideas that are essential to using Jungle.

## Terms

- **Tree**: A container that manages a collection of nodes and their connections.
- **Node**: A unit of behavior that can be added to a tree.
- **Port**: A point on a node that connects to other nodes to form a sequence.
- **Call**: A payload that is sent from the output port of a node to the input port of another node.

## Tree and Node Lifecycle

Both trees and nodes follow a lifecycle that is managed by the Jungle Runtime. 
Understanding this lifecycle is essential to creating and managing trees and nodes.

### Tree Lifecycle

#### When a tree is started:
- The tree registers itself with the Jungle Runtime.
- The tree starts all **event** nodes.

#### While the tree is running:
- The tree updates all actively running nodes.
- If there are no more actively running nodes, the tree stops automatically.

#### When a tree is stopped:
- The tree unregisters itself with the Jungle Runtime.
- The tree calls all revert actions on all nodes (if any)

### Node Lifecycle

#### When a node is started:
- The Jungle Runtime first calls the `OnStart` method on the node.
- The Jungle Runtime then immediately calls the `OnUpdate` method on the node.

:::tip NOTE
If the `Stop` or `CallAndStop` method is called from the `OnStart` method, the `OnUpdate` method will not be called.
:::

#### While a node is running:
- The Jungle Runtime calls the `OnUpdate` method on the node.

#### When a node is stopped:
- The Jungle Runtime calls the `OnStop` method on the node.

Nodes can be stopped anywhere at anytime by invoking nodes `Stop` or `CallAndStop` methods.

:::tip NOTE
The `Call`, `Stop`, and `CallAndStop` methods must be called from within the node's script itself.
:::

:::warning WARNING
If you never call `Stop` or `CallAndStop` from within a node, the node will run indefinitely.
:::

## Port Calls

Port calls are how nodes talk to each other. Nodes can call other nodes from their output ports. When either the
`Call` or `CallAndStop` method is invoked, a port call is made.

The `IONode` and `BranchNode` are the only node variations where the `OnStart` method has a `inputValue` parameter.
This input value is the data from the port call.
