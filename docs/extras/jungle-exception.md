---
title: Jungle Exception
sidebar_position: 4
---

Jungle has a builtin exception handler that will catch any exceptions thrown by your nodes. This is useful for debugging
your nodes, as it will prevent your game from crashing if an exception is thrown. This could also protect against soft
locks.

Jungle Exceptions can be thrown **anywhere** within a node, and will be caught by the Jungle Exception Handler. The exception
handler will then log the exception and stop the Jungle Tree.

## Throwing an Exception

To throw an exception, simply create a new `JungleException` and pass in the exception message.

```csharp
using Jungle;

throw new JungleException("Ahhh! Something went wrong!");
```

## Example

```csharp
using Jungle;

[NodeProperties(
    // Node properties
)]
[IONode(
    InputPortName = "Start",
    InputPortType = typeof(float),
    OutputPortName = "Next",
    OutputPortType = typeof(Port.None)
)]
public class MyNode : IONode
{
    protected override void OnStart(in object inputValue)
    {
        if (inputValue is float floatValue)
        {
            CallAndStop(floatValue * 2f);
        }
        else throw new JungleException("Input value is not a float!");
    }

    protected override void OnUpdate() { }
}
```

In the example above, we throw a `JungleException` if the input value is not a float. This will be caught by the Jungle
Exception Handler, which will log the exception and stop the Jungle Tree.
