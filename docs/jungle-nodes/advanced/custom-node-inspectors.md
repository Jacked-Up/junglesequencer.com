---
title: Custom Node Inspectors
sidebar_position: 1
---

Building custom node inspectors is a great way to add custom functionality to your nodes. **Creating custom node
inspectors works exactly like build custom inspectors for Mono Behaviours and Scriptable Objects.**

## Creating a Custom Inspector

### Introduction

A custom inspector is a class that inherits from `UnityEditor.Editor`. This class is then attached to your node script
using the `UnityEditor.CustomEditor` attribute.

```csharp
[UnityEditor.CustomEditor(typeof(MyClass))]
public class MyEditor : UnityEditor.Editor
{
    // Editor code here
}
```

:::warning
All editor classes should be placed between `#if UNITY_EDITOR` and `#endif` tags. This ensures that the editor code is
stripped from the build. If you do not do this, your build will **fail**.
:::

### Displaying Properties

To display a property in your custom inspector, you must first fetch the property using the 
`UnityEditor.SerializedObject.FindProperty` method. This method takes the name of the property as a string.

#### Example

```csharp
public class MyClass : MonoBehaviour
{
    [SerializeField] 
    private float myProperty = 1f;
    // ^^ This is the property ^^
    //    we want to display in
    //    the custom inspector
}

#if UNITY_EDITOR
[UnityEditor.CustomEditor(typeof(MyClass))]
public class MyEditor : UnityEditor.Editor
{
    private UnityEditor.SerializedProperty _myProperty;

    private void OnEnable()
    {
        // Fetch the property. This method takes the name of the property as a string
        _myProperty = serializedObject.FindProperty("myProperty");
    }
    
    public override void OnInspectorGUI()
    {
        serializedObject.Update();
        
        // Display the property
        UnityEditor.EditorGUILayout.PropertyField(_myProperty);
        
        serializedObject.ApplyModifiedProperties();
    }
}
#endif
```

Jungle will automatically detect that you have a custom inspector and display it in the Jungle Editor.

:::info NOTE
The custom inspector class does **not** need to be in the same file as the node script. You can throw it where ever you
want.
:::

The Unity editor class is a great way to add custom functionality to your nodes. You can add buttons, sliders, and more
to your custom inspector. **The sky is the limit!**

[Unity Guide on Custom Inspectors](https://docs.unity3d.com/Manual/UIE-HowTo-CreateCustomInspector.html)

### Example

Here's an example of a custom inspector for a node that inherits from `IdentityNode`. This inspector displays a label
and a property field for the `value` property.

```csharp
using Jungle;
using UnityEngine;

[NodeProperties(
    Title = "My Node",
    Description = "You friendly neighborhood node.",
    Category = "",
    Color = Blue
)]
[IdentityNode(
    InputPortName = "Start",
    OutputPortName = "Next"
)]
public class MyNode : IdentityNode
{
    [SerializeField] 
    private float value = 1f;
    
    protected override void OnStart()
    {
        CallAndStop();
    }

    protected override void OnUpdate() { }
}

// ------------------------------------CUSTOM-NODE-INSPECTOR------------------------------------
// The UNITY_EDITOR tag ensures that the editor code is stripped from the build
#if UNITY_EDITOR
[UnityEditor.CustomEditor(typeof(MyNode))]
public class MyNodeEditor : UnityEditor.Editor
{
    #region Variables

    private UnityEditor.SerializedProperty _value;

    #endregion

    private void OnEnable()
    {
        _value = serializedObject.FindProperty("value");
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();
        UnityEditor.EditorGUILayout.Label("Hello, World!");
        UnityEditor.EditorGUILayout.PropertyField(_value);
        serializedObject.ApplyModifiedProperties();
    }
}
#endif
// ------------------------------------CUSTOM-NODE-INSPECTOR------------------------------------
```
