---
title: IO Node
sidebar_position: 2
---

The IO Node is a simpler version of the Branch Node. It takes a single input of any type, and outputs to a single output
of any type.

## API

```csharp
using Jungle;
```

### Methods

---
#### Abstract

Called immediately when the IO Node is called by another node.
<br />The **inputValue** parameter is the value passed in from the node that called this node.
```csharp
protected abstract void OnStart(in object inputValue);
```

Called every frame while the IO Node is running. Always called after **OnStart**.
```csharp
protected abstract void OnUpdate();
```

:::info
Both **OnStart** and **OnUpdate** are required methods in all Jungle Nodes. Your code **will not** compile without them.
:::

---
#### Virtual

Called immediately after this IO Node is stopped.
```csharp
protected virtual void OnStop() {}
```

Called whenever a validation is requested on this IO Node.
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

Sends the output value to any nodes connected to this IO Node's output.
```csharp
protected void Call(object outputValue)
```

Stops the IO Node without sending out any output value.
```csharp
protected void Stop()
```

Both sends the output value to any nodes connected to this IO Node's output and stops the IO Node.
```csharp
protected void CallAndStop(object outputValue)
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

All IO Nodes are required to have an `IONode` class attribute defined. This attribute defines the input port and 
output port on the node. 

Here's a list of all the properties you can define in the `IONode` attribute:

| Property         | Type     | Description                          |
|------------------|----------|--------------------------------------|
| `InputPortName`  | `string` | Defines the name of the input port.  |
| `InputPortType`  | `Type`   | Defines ports accepted type.         |
| `OutputPortName` | `string` | Defines the name of the output port. |
| `OutputPortType` | `Type`   | Defines the ports outputted type.    |

```csharp
[IONode(
    InputPortName = "My Input",
    InputPortType = typeof(Port.None),
    OutputPortName = "My Output",
    OutputPortType = typeof(Port.None)
)]
```

- The input port would be named _"My Input"_ and would accept the type _"Port.None"_.
- The output port would be named _"My Output"_ and would output the type _"Port.None"_.

---
#### Attribute Example

```csharp
[NodeProperties(
    ...
)]
[IONode(
    InputPortName = "Value",
    InputPortType = typeof(float),
    OutputPortName = "Value * 2",
    OutputPortType = typeof(float)
)]
public class MultiplyByTwoNode : IONode
...
```

In this example, we defined **MultiplyByTwoNode**'s input port to be named **Value** and accept type **float**. We
also defined an output port named **Value * 2** that outputs type **float**. With this setup, we could create the logic
in this class so that it would call output port **Value * 2** with the input value multiplied by two.

---
## Boilerplate

```csharp
using Jungle;

[NodeProperties(
    Title = "My IO Node",
    Description = "Example implementation of an IO node.",
    Category = "Nodes/IO Node",
    Color = Yellow
)]
[IONode(
    InputPortName = "Input",
    InputPortType = typeof(Port.None),
    OutputPortName = "Output",
    OutputPortType = typeof(Port.None)
)]
public class MyIONode : IONode
{
    protected override void OnStart(in object inputValue)
    {
        CallAndStop(new Port.None());
    }
    
    protected override void OnUpdate()
    {
        
    }
}
```

---
## Example

Here's a simple example of an IO Node that reverses the inputted string and outputs it.

```csharp
using Jungle;

[NodeProperties(
    Title = "String Reverser",
    Description = "Reverses the characters in a string.",
    Category = "Nodes/String Operations",
    Color = JungleNode.Teal
)]
[IONode(
    InputPortName = "Input String",
    InputPortType = typeof(string),
    OutputPortName = "Reversed String",
    OutputPortType = typeof(string)
)]
public class StringReverserNode : IONode
{
    protected override void OnStart(in object inputValue)
    {
        if (inputValue is string inputString)
        {
            // Reverse the input string
            string reversedString = ReverseString(inputString);
            CallAndStop(reversedString);
        }
        else Stop();
    }
    
    protected override void OnUpdate() { }
    
    private string ReverseString(string str)
    {
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }
}
```
