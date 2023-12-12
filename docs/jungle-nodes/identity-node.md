---
title: Generic Node
sidebar_position: 3
---

The Generic Node is the simplest node in Jungle. It takes a single input of any type, and outputs the same value to a 
single output of the same type.

:::info NOTE
The inputted value is stored internally and cannot be modified or changed.
:::

## API

```csharp
using Jungle;
```

### Methods

---
#### Abstract

Called immediately when the Generic Node is called by another node.
```csharp
protected abstract void OnStart();
```

Called every frame while the Generic Node is running. Always called after **OnStart**.
```csharp
protected abstract void OnUpdate();
```

:::info
Both **OnStart** and **OnUpdate** are required methods in all Jungle Nodes. Your code **will not** compile without them.
:::

---
#### Virtual

Called immediately after this Generic Node is stopped.
```csharp
protected virtual void OnStop() {}
```

Called whenever a validation is requested on this Generic Node.
<br />Should return any issues found with this node.
```csharp
protected virtual Issue[] OnValidation() {}
```

Override this if you want to add dynamic node context in the Jungle Editor.
<br />Called on _every_ validation pass.
```csharp
public override string GetDetails() {}
```

---
#### Calls

Sends the Generic to any nodes connected to this Generic Node's output.
```csharp
protected void Call()
```

Stops the Generic Node without sending out the Generic.
```csharp
protected void Stop()
```

Both sends the Generic to any nodes connected to this Generic Node's output and stops the Generic Node.
```csharp
protected void CallAndStop()
```

---
### Properties

Reference to the nodes Jungle Tree.
```csharp
public JungleTree JungleTree { get; }
```

List of the Jungle Nodes output ports.
```csharp
public Port[] OutputPorts { get; }
```

Called when the Jungle Node is validated. Callback is true if issues were detected.
```csharp
public Action<bool> OnValidated
```

True if the Jungle Node is currently running.
```csharp
public bool IsRunning { get; }
```

Returns the Jungle Nodes title.
```csharp
public string GetTitle()
```

Returns a brief description of the Jungle Nodes function.
```csharp
public string GetDescription()
```

Returns the Jungle Nodes category.
```csharp
public string GetCategory()
```

Returns the Jungle Nodes accent color.
```csharp
public Color GetColor()
```

Returns the Jungle Nodes script icon.
```csharp
public Texture GetIcon()
```

:::warning EDITOR ONLY
Fetching the Jungle Nodes icon only works in the Unity editor. In a build, this will return a blank white texture.
:::

Returns the Jungle Nodes unique id.
```csharp
public string GetUid()
```

Returns true if the Jungle Node is declared deprecated.
```csharp
public bool IsDeprecated()
```

Returns true if the Jungle Node is limited to one instance per Jungle Tree.
```csharp
public bool IsLimitedOnePerTree()
```

Returns info about the Jungle Nodes input port.
```csharp
public override Port.Info GetInputPortInfo()
```

Returns info about the Jungle Nodes output ports.
```csharp
public override Port.Info[] GetOutputPortsInfo()
```

---
### Attribute

All Generic Nodes are required to have a `GenericNode` class attribute defined. This attribute defines the input port
and output port on the node.

Here's a list of all the properties you can define in the `GenericNode` attribute:

| Property          | Type     | Description                         |
|-------------------|----------|-------------------------------------|
| `InputPortName`   | `string` | Defines the name of the input port  |
| `OutputPortName`  | `string` | Defines the name of the output port |

```csharp
[GenericNode(
    InputPortName = "My Input",
    OutputPortName = "My Output"
)]
```

- The input port would be named _"My Input"_ and would accept any type.
- The output port would be named _"My Output"_ and would output the same type as the input.

---
#### Attribute Example

```csharp
[NodeProperties(
    ...
)]
[GenericNode(
    InputPortName = "Start",
    OutputPortName = "Elapsed"
)]
public class WaitForSecondsNode : BranchNode
...
```

In this example, we defined **WaitForSecondsNode**'s input port to be named **Start** and accept any type. We also
defined the output port to be named **Elapsed** and output the same type as the input.

---
## Boilerplate

```csharp
using Jungle;

[NodeProperties(
    Title = "My Generic Node",
    Description = "Example implementation of a Generic node.",
    Category = "Nodes/Generic Node",
    Color = Red,
    Deprecated = false,
    LimitOnePerTree = false
)]
[GenericNode(
    InputPortName = "Input",
    OutputPortName = "Output"
)]
public class MyGenericNode : GenericNode
{
    protected override void OnStart()
    {
        CallAndStop();
    }

    protected override void OnUpdate()
    {
        
    }
}
```

---
## Example

Here's a simple example of an Generic Node that prints "Hello, World!" to the console.

```csharp
[NodeProperties(
    Title = "Hello World",
    Description = "Prints \"Hello, World!\" to the console.",
    Category = "Nodes/Generic Node",
    Color = Red
)]
[GenericNode(
    InputPortName = "Start",
    OutputPortName = "Next"
)]
public class HelloWorldNode : GenericNode
{
    protected override void OnStart()
    {
        Debug.Log("Hello, World!");
        CallAndStop();
    }

    protected override void OnUpdate()
    {
        
    }
}
```
