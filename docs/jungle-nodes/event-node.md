---
title: Event Node
sidebar_position: 4
---

The Event Node is a powerful node type in Jungle. The Event Node has zero inputs and outputs to any number of outputs
that all can output any types.

Event Nodes are called when the Jungle Tree is started.

:::info NOTE
The Event Node is limited to a maximum of **256** outputs.
:::

---
## API

```csharp
using Jungle;
```

### Methods

---
#### Abstract

Called immediately when the Jungle Tree is started.
```csharp
protected abstract void OnStart();
```

Called every frame while the Event Node is running. Always called after **OnStart**.
```csharp
protected abstract void OnUpdate();
```

:::info
Both **OnStart** and **OnUpdate** are required methods in all Jungle Nodes. Your code **will not** compile without them.
:::

---
#### Virtual

Called immediately after this Event Node is stopped.
```csharp
protected virtual void OnStop() {}
```

Called whenever a validation is requested on this Event Node.
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

Sends the event to any nodes connected to this Event Node's output.
```csharp
protected void Call(Port.Call[] portCalls) // For multiple port calls
// OR
protected void Call(Port.Call portCall)    // For only one port call
```

Stops the Event Node without sending out any port calls.
```csharp
protected void Stop()
```

Both sends the port calls out to the requested ports and stops the Event Node.
```csharp
protected void CallAndStop(Port.Call[] portCalls) // For multiple port calls
// OR
protected void CallAndStop(Port.Call portCall)    // For only one port call
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
## Attribute

All Event Nodes are required to have a `EventNode` class attribute defined. This attribute defines the output ports on
the node.

Here's a list of all the properties you can define in the `EventNode` attribute:

| Property          | Type       | Description                              |
|-------------------|------------|------------------------------------------|
| `OutputPortNames` | `string[]` | Defines the names for each output port   |
| `OutputPortTypes` | `type[]`   | Defines the outputted type for each port |

```csharp
[EventNode(
    OutputPortNames = new string[] { "My Output A",     "My Output B" },
    OutputPortTypes = new Type[]   { typeof(Port.None), typeof(Port.None) }
)]
```

- The output ports would be named _"My Output A"_ and "My Output B" and both would output the type _"Port.None"_.

The output port names and types should be defined in the same order.

:::warning WARNING
The **OutputPortNames** and **OutputPortTypes** arrays must **always** be the same length.
:::

#### Attribute Example

```csharp
[NodeProperties(
    ...
)]
[EventNode(
    OutputPortNames = new string[] { "A Button Press",  "X Button Pressed" },
    OutputPortTypes = new Type[]   { typeof(Port.None), typeof(Port.None) }
)]
public class InputEventNode : EventNode
...
```

In this example, we defined **InputEventNode**'s output ports to be named **A Button Press** and **X Button Pressed**
and both output type **Port.None**. With this setup, we could create the logic in this class so that if the A button
was pressed, it would call output port **A Button Press** and if the X button was pressed, it would call output port
**X Button Pressed**.

---
## Boilerplate

```csharp
using Jungle;

[NodeProperties(
    Title = "My Event Node",
    Description = "Example implementation of an event node.",
    Category = "Nodes/Event Node",
    Color = Green,
    Deprecated = false,
    LimitOnePerTree = false
)]
[EventNode(
    OutputPortNames = new string[] { "My Output A",     "My Output B" },
    OutputPortTypes = new Type[]   { typeof(Port.None), typeof(Port.None) }
)]
public class MyEventNode : EventNode
{
    protected override void OnStart()
    {
        CallAndStop(new []
        {
            new Port.Call(0, new Port.None()),
            new Port.Call(1, new Port.None())
        });
    }

    protected override void OnUpdate()
    {

    }
}
```

---
## Example

Here's a simple example of an Event Node that calls different outputs at 5, 10, and 15 seconds intervals.

```csharp
using Jungle;
using UnityEngine;

[NodeProperties(
    Title = "Timed Event Node",
    Description = "Calls different outputs at 5, 10, and 15 seconds intervals.",
    Category = "Events/Timed",
    Color = JungleNode.Blue
)]
[EventNode(
    OutputPortNames = new string[] { "After 5 Seconds", "After 10 Seconds", "After 15 Seconds" },
    OutputPortTypes = new Type[] { typeof(Port.None), typeof(Port.None), typeof(Port.None) }
)]
public class TimedEventNode : EventNode
{
    private float _startTime;
    private bool _called5Seconds;
    private bool _called10Seconds;
    private bool _called15Seconds;

    protected override void OnStart()
    {
        // Record the start time
        _startTime = Time.unscaledTime;
        _called5Seconds = false;
        _called10Seconds = false;
        _called15Seconds = false;
    }

    protected override void OnUpdate()
    {
        float elapsedTime = Time.unscaledTime - _startTime;

        // Check the elapsed time and call the appropriate outputs
        if (!_called5Seconds && elapsedTime >= 5)
        {
            Call(new Port.Call(0, new Port.None())); // Call "After 5 Seconds"
            _called5Seconds = true;
        }

        if (!_called10Seconds && elapsedTime >= 10)
        {
            Call(new Port.Call(1, new Port.None())); // Call "After 10 Seconds"
            _called10Seconds = true;
        }

        if (!_called15Seconds && elapsedTime >= 15)
        {
            CallAndStop(new Port.Call(2, new Port.None())); // Call "After 15 Seconds" and stop the node
            _called15Seconds = true;
        }
    }
}
```
