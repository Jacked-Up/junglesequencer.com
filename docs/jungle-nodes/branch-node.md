---
title: Branch Node
sidebar_position: 1
---

The Branch Node is the most powerful node type in Jungle. The Branch Node takes a single input of any type, and outputs
to any number of outputs that all can output any types.

:::info NOTE
The branch node is limited to a maximum of **256** outputs.
:::

:::tip ONLY NEED ONE OUTPUT?
If you plan to use only a single output from the branch node, we recommend building an **IO Node** instead.
:::

---
## API

```csharp
using Jungle;
```

### Methods

---
#### Abstract

Called immediately when the Branch Node is called by another node.
<br />The **inputValue** parameter is the value passed in from the node that called this node.
```csharp
protected abstract void OnStart(in object inputValue);
```

Called every frame while the Branch Node is running. Always called after **OnStart**.
```csharp
protected abstract void OnUpdate();
```
:::info 
Both **OnStart** and **OnUpdate** are required methods in all Jungle Nodes. Your code **will not** compile without them.
:::

---
#### Virtual

Called immediately after this Branch Node is stopped.
```csharp
protected virtual void OnStop() {}
```

Called whenever a validation is requested on this Branch Node.
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

Sends the port calls out to the requested ports.
```csharp
protected void Call(Port.Call[] portCalls) // For multiple port calls
// OR
protected void Call(Port.Call portCall)    // For only one port call
```

Stops the Branch Node without sending out any port calls.
```csharp
protected void Stop()
```

Both sends the port calls out to the requested ports and stops the Branch Node.
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

All Branch Nodes are required to have a `BranchNode` class attribute defined. This attribute defines the input port
and output ports on the node. 

Here's a list of all the properties you can define in the `BranchNode` attribute:

| Name               | Type       | Notes                                    |
|--------------------|------------|------------------------------------------|
| `InputPortName`    | `string`   | Defines the name of the input port       |
| `InputPortType`    | `type`     | Defines the input ports accepted type    |
| `OutputPortNames`  | `string[]` | Defines the names for each output port   |
| `OutputPortTypes`  | `type[]`   | Defines the outputted type for each port |

```csharp
[BranchNode(
    InputPortName = "My Input"
    InputPortType = typeof(Port.None),
    OutputPortNames = new []{ "My Output A",     "My Output B"     },
    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }
)]
```

- The input port would be named _"My Input"_ and would accept the type _"Port.None"_.
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
[BranchNode(
    InputPortName = "Value"
    InputPortType = typeof(float),
    OutputPortNames = new []{ "Square Root", "Greator than One" },
    OutputPortTypes = new []{ typeof(float), typeof(bool) }
)]
public class FindSquareRootNode : BranchNode
...
```

In this example, we defined **FindSquareRootNode**'s input port to be named **Value** and accept type **float**. We
also defined two output ports named **Square Root** and **Greater than One** that output type **float** and **bool**
respectively. With this setup, we could create the logic in this class so that if the input value is greater than one,
it would call output port **Greater than One** with a value of **true**, and if the input value is less than one, it
would call output port **Greater than One** with a value of **false**. We could also call output port **Square Root**
with the square root of the input value.

---
## Boilerplate

```csharp
using Jungle;

[NodeProperties(
    Title = "My Branch Node",
    Description = "Example implementation of a branch node.",
    Category = "Nodes/Branch Node",
    Color = Blue,
    Deprecated = false,
    LimitOnePerTree = false
)]
[BranchNode(
    InputPortName = "Input",
    InputPortType = typeof(Port.None),
    OutputPortNames = new []{ "My Output A",     "My Output B" },
    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }
)]
public class MyBranchNode : BranchNode
{
    protected override void OnStart(in object inputValue)
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

Here's a simple example of a branch node that takes a boolean value and branches based on that value.

```csharp
using Jungle;

[NodeProperties(
    Title = "Boolean Branch",
    Description = "Branches based on a boolean value.",
    Category = "Math",
    Color = Red
)]
[BranchNode(
    InputPortName = "Value",
    InputPortType = typeof(bool),
    OutputPortNames = new []{ "True",            "False" },
    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }
)]
public class BooleanBranchNode : BranchNode
{
    protected override void OnStart(in object inputValue)
    {
        // Only continue if the input value is a boolean
        if (inputValue is bool inputBoolean)
        {
            if (inputBoolean)
            {
                // We defined output port 1 to be the "True" branch above
                CallAndStop(new Port.Call(0, new Port.None());
            }
            else
            {
                // We defined output port 2 to be the "False" branch above
                CallAndStop(new Port.Call(1, new Port.None());
            }
        }
        else throw new JungleException("Input value is not a boolean!");
    }
    
    protected override void OnUpdate() { }
}
```
