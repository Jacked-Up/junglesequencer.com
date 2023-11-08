---
title: Branch Node
sidebar_position: 1
---

The branch node is the most powerful node type in Jungle. The branch node takes a single input of any type, and outputs
to any number of outputs that all can output any types.

:::info NOTE

The branch node is limited to a maximum of **256** outputs.

:::

:::tip ONLY NEED ONE OUTPUT?

If you plan to use only a single output from the branch node, we recommend building an **IO Node** instead.

:::

## API

Branch Node inherits from Jungle Node.

```csharp
using Jungle;
```

### Overrides

Called immediately when this node is called. **(REQUIRED)**
- Input value is sent from the connected node.
:::danger WARNING
Never **trust** the input value to be of the type declared in the **Branch Node** attribute. While Jungle does check for 
these exceptions automatically, you should always be ready to throw an exception for the incorrect type.
:::

```csharp
protected override void OnStart(in object inputValue)
```

Called immediately after this Branch Node is stopped.
```csharp
protected override void OnStop()
```

Called every frame while this node is running. **(REQUIRED)**
```csharp
protected override void OnUpdate()
```

```csharp
public override string GetDetails()
```

```csharp
protected override ValidationResult[] OnValidation(ValidationRequest[] requests)
```

### Methods

Sends out port calls.
```csharp
protected void Call(IEnumerable<Port.Call> portCalls)
```

Stops this Branch Node and doesn't send any port calls.
```csharp
protected void Stop()
```

Sends out port calls and then stops this Branch Node.
```csharp
protected void CallAndStop(IEnumerable<Port.Call> portCalls)
```

### Properties

```csharp
public override Port.Info GetInputPortInfo()
```

```csharp
public override Port.Info[] GetOutputPortsInfo()
```

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
    OutputPortNames = new []{ "Output A", "Output B" },
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
