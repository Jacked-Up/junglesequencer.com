---
title: Jungle Tree
sidebar_position: 3
---

## Introduction

Jungle Trees are the containers for your sequences. The Jungle Tree is responsible for managing the execution of your 
nodes and their connections.

You can have as many trees running at once as you want. Each tree is independent of each other and can be started and
stopped at any time. You cannot, however, have the same tree running multiple times at once.

## Creating a Jungle Tree

To create a Jungle Tree, right click in your assets folder window and select `Create > Jungle Tree`. This will create a
Jungle Tree that you can then open by double clicking on it.

Check out the [Jungle Tree Editor](/docs/jungle-tree-editor) page for more information on how to edit your Jungle Tree.

## Using the Jungle Tree

```csharp
using Jungle;

[SerializeField] 
private JungleTree myJungleTree;

private void Start()
{
    myJungleTree.Start();
}
```

---
## Code Reference

### Properties

<span class="DocItemTitle">Nodes</span>
<br />`public JungleNode[] Nodes { get; }`
<br />_List of all nodes associated with this Jungle Tree._

<span class="DocItemTitle">State</span>
<br />`public StateFlag State { get; }`
<br />_The current state of the Jungle Tree._

| Value | State    | Description                                                                      |
|-------|----------|----------------------------------------------------------------------------------|
| 0     | Ready    | Describes a Jungle Tree that has never been run and is not currently running.    |
| 1     | Running  | Describes a Jungle Tree that is currently running.                               |
| 0     | Finished | Describes a Jungle Tree that is not currently running but has run at some point. |

<span class="DocItemTitle">IsRunning</span>
<br />`public bool IsRunning { get; }`
<br />_True if the Jungle Tree is currently running._

<span class="DocItemTitle">RunTime</span>
<br />`public float RunTime { get; }`
<br />_The amount of time in seconds the Jungle Tree has been running._

<span class="DocItemTitle">IsNodeRunning(<span class="DocItemParameter">JungleNode</span>)</span>
<br />`public bool IsNodeRunning(JungleNode jungleNode)`
<br />_Returns true if the Jungle Tree is currently running the specified Jungle Node._

<span class="DocItemTitle">GetNodeByName(<span class="DocItemParameter">string</span>)</span>
<br />`public JungleNode GetNodeByName(string jungleNodeName)`
<br />_Returns a reference to the Jungle Node with the specified name._

#### Editor Only

<span class="DocItemTitle">Manifest</span>
<br />`public JungleManifest Manifest { get; }`
<br />_The Jungle Trees persistent manifest._

---
### Events

<span class="DocItemTitle">OnStart</span>
<br />`public event Action OnStart;`
<br />_Invoked whenever this Jungle Tree is started._

<span class="DocItemTitle">OnStop</span>
<br />`public event Action OnStop;`
<br />_Invoked whenever this Jungle Tree is stopped._

<span class="DocItemTitle">OnError</span>
<br />`public event Action<ErrorFlags> OnError;`
<br />_Invoked whenever this Jungle Tree encounters an error._

| Error Flag           | Description                                                                                           |
|----------------------|-------------------------------------------------------------------------------------------------------|
| NotInPlayMode        | This error is thrown when the Jungle Tree is requested to start while the editor is not in play-mode. |
| AlreadyRunning       | This error is thrown when a request to start the Jungle Tree is made but the tree is already running. |
| NoNodes              | This error is thrown when the Jungle Tree has no nodes to execute.                                    |
| NoRuntimeInstance    | This error is thrown when Jungle fails to find a Jungle Runtime instance in the scene.                |
| NodeRuntimeException | This error is thrown when a node declares an exception during runtime.                                |

---
### Methods

<span class="DocItemTitle">Start()</span>
<br />`public void Start()`
<br />_Starts running the Jungle Tree._

<span class="DocItemTitle">Stop()</span>
<br />`public void Stop()`
<br />_Stops running the Jungle Tree._

<span class="DocItemTitle">AddRevertAction(<span class="DocItemParameter">Action</span>)</span>
<br />`public void AddRevertAction(Action action)`
<br />_Adds an action to be invoked when the Jungle Tree stops._

<span class="DocItemTitle">RemoveRevertAction(<span class="DocItemParameter">Action</span>)</span>
<br />`public void RemoveRevertAction(Action action)`
<br />_Removes an action from the revert list._

#### Editor Only
:::warning WARNING
All methods below are designed for internal use only. It's not recommended to call any of these methods.
:::

<span class="DocItemTitle">AddNode(<span class="DocItemParameter">Type, Vector2</span>)</span>
<br />`public JungleNode AddNode(Type nodeType, Vector2 graphPosition)`
<br />_Adds a Jungle Node to the Jungle Tree._

<span class="DocItemTitle">AddNodes(<span class="DocItemParameter">JungleNode[], Vector2[]</span>)</span>
<br />`public JungleNode[] AddNodes(JungleNode[] jungleNodes, Vector2[] graphPositions)`
<br />_Adds multiple Jungle Nodes to the Jungle Tree._

<span class="DocItemTitle">RemoveNode(<span class="DocItemParameter">JungleNode</span>)</span>
<br />`public void RemoveNode(JungleNode jungleNode)`
<br />_Removes a node from the Jungle Tree._

<span class="DocItemTitle">RemoveNodes(<span class="DocItemParameter">JungleNode[]</span>)</span>
<br />`public void RemoveNodes(JungleNode[] jungleNodes)`
<br />_Removes these nodes from the Jungle Tree._

<span class="DocItemTitle">ConnectNodes(<span class="DocItemParameter">JungleNode, JungleNode, byte</span>)</span>
<br />`public bool ConnectNodes(JungleNode nodeA, JungleNode nodeB, byte portIndex)`
<br />_Connects two Jungle Nodes together._

<span class="DocItemTitle">DisconnectNodes(<span class="DocItemParameter">JungleNode, JungleNode, byte</span>)</span>
<br />`public bool DisconnectNodes(JungleNode nodeA, JungleNode nodeB, byte portIndex)`
<br />_Disconnects two Jungle Nodes from each other._
