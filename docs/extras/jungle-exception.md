---
title: Jungle Exception
sidebar_position: 4
---

Handling errors in Jungle is made easy using the Jungle Tree's error handler. The error handler catches any exceptions
thrown by nodes during runtime. This error handler will then shut the node down **safely** and display the error in the
console.

This is useful for displaying when a critical error occurs in your tree. That would prevent subsequent nodes from 
running, which could cause even more errors.

## When to Throw Exceptions?

You should only throw exceptions when a critical error that would break any subsequent nodes occurs.

#### Example

Let's say you have a node that searches for a game object in the scene and outputs it. This would mean any nodes 
connected to the output of this node would now be expecting a game object.

Now let's say that the node is ran and it cant find the game object in the scene. Well, now all connected nodes would be
expecting a game object, except they would be getting `null` instead. This would cause a runtime error.

To prevent this, you should throw an exception if the game object is not found. This will prevent any subsequent nodes
from running and more causing errors.

## Throwing an Exception

Throwing exceptions is extremely easy.

You should always throw a `JungleException` when an error occurs. This will ensure that the error is caught by the error
handler. You can also pass a message to the exception to display in the console.

```csharp
throw new JungleException("YOUR MESSAGE");
```

You can throw Jungle exceptions inside any inherited Jungle Node method.

## Example

Here's an example of a node that outputs the name of the inputted game object. 

```csharp
using Jungle;

[NodeProperties(
    Title = "Get Game Object Name",
    Description = "Gets the inputted game objects name."
)]
[IONode(
    InputPortName = "Object",
    OutputPortName = "Object Name",
    OutputPortType = typeof(string)
)]
public class GetGameObjectNameNode : IONode<GameObject>
{
    protected override void OnStart(in GameObject gameObject)
    {
        if (gameObject == null)
            throw new JungleException("Inputted game object was null.");
            
        CallAndStop(gameObject.name);
    }
    
    protected override void OnUpdate() { }
}
```

As you can see, the inputted game object is crucial to the nodes output. If the input is wrong, then the output would be
wrong too. Of course, we could instead output a default value such as an empty string, but that would be a bad practice
because it would be hiding the error. **Remember that Jungle Trees are sequences, not code.**
