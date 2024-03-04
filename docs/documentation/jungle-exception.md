---
title: Jungle Exception
sidebar_position: 8

slug: /jungle-exception
---

Jungle handles exceptions very strictly. If a node throws an exception, the node will be immediately stopped.
Exceptions should be thrown whenever a node encounters a problem that would prevent it from continuing.

You can throw an exception of any type, but it is recommended to use the `JungleException` class.

An exception can be thrown anywhere at any time within a node.

## Code Reference

**Namespace: `Jungle`**

## Example



```csharp
using Jungle;
using UnityEngine;

public class ExceptionNode : IONode<Transform>
{
    protected override void OnStart(Transform transform)
    {
        if (transform == null)
            throw new JungleException("Inputted transform is null.");
        
        transform.position = Vector3.zero;
        CallAndStop(transform);
    }

    protected override void OnUpdate() { }
}
```
