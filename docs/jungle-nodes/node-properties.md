---
title: Node Properties
sidebar_position: 0
---

All Jungle Nodes require the class attribute **NodeProperties** to be defined.

The **NodeProperties** attribute is used to define the Jungle Node script you created.

## Properties
| Name            | Type    | Notes                                                           |
|-----------------|---------|-----------------------------------------------------------------|
| Title           | string  | Defines the title of the node                                   |
| Description     | string  | Documents the purpose of the node (Also used as a tooltip)      |
| Category        | string  | Defines the location in the node explorer to put this node      |
| Color           | string  | Defines the accent color of the node. Is a **Hex Code**         |
| Deprecated      | boolean | Set this to true to declare this node as deprecated             |
| LimitOnePerTree | boolean | Set this to true if you want to limit this node to one per tree |

### Title

The title of the node is used for the The title of your node does not need to be unique.

_Here's a naming pattern we recommend:_

**For example,** lets say you have a script in your game that controls a door named **DoorController.cs** that you would
like to build nodes for. Here's how you could define the title for both an **Open Door** and **Close Door** node script.

```csharp
[NodeProperties(
    Title = "Open Door"
)]
public class OpenDoorNode : IONode
...
```
```csharp
[NodeProperties(
    Title = "Close Door"
)]
public class CloseDoorNode : IONode
...
```

All scripts that inherit from type Jungle Node should have the word **Node** at the end of its class name. This is not
required but is a great naming pattern to follow.

### Description

The description of the node should be a brief explanation of what the node does. The description is also used as a 
tooltip when you hover over the node in the Jungle Editor.

**For example,** lets use our door example above, here's how you could define the description for both scripts:
```csharp
// OpenDoorNode.cs
[NodeProperties(
    Description = "Opens the inputted door."
)]
```
```csharp
// CloseDoorNode.cs
[NodeProperties(
    Description = "Closes the inputted door."
)]
```

### Category

The category of the node defines the location in the node explorer to put this node. The location is determined by the
path you declare. The path can be as many folders deep as you'd like.

**For example,** lets use our door example above, here's how you could define the category:

```csharp
[NodeProperties(
    Category = "Game/Door"
)]
```

### Color

Color defines the accent color of the node. The color is a **hex code**. You can use any hex code you want.

There are predefined colors in the Jungle Node class. These colors are just constant strings set to **hex codes**. The
predefined colors were added as a shorthand for the hex codes. You can use either the predefined colors or simply define
your own hex code.
_<br /><br />Here is a list of all the predefined colors:_

*  **Red**     #dc1313  
*  **Orange**  #ff5b00  
*  **Yellow**  #f29e06  
*  **Green**   #38ca42  
*  **Teal**    #15deab  
*  **Cyan**    #00eaff  
*  **Blue**    #0069ff
*  **Purple**  #b300ff
*  **Pink**    #ff00ea
*  **Violet**  #85034c
*  **White**   #ffffff
*  **Black**   #101010

```csharp
// These are the exact same thing
string predefinedColor = JungleNode.Blue;
string definedColor = "#0069ff";
```

### Deprecated

The deprecated property was implemented as a solution for safely removing Jungle Node scripts from your project. While 
Jungle has built-in detection for missing nodes, deleting the node scripts while they exist inside a Jungle Tree can
lead to unexpected behavior.

When you set the deprecated property to true, the node will no longer be available in the node explorer and the Jungle
Validator will mark all instances of the node within Jungle Trees as deprecated so that you can safely remove them.

:::danger DANGER
You should **NEVER** delete a Jungle Node script from your project until it has been removed from all Jungle Trees.
:::

### LimitOnePerTree

The limit one per tree property was implemented as a solution for limiting the max amount of node instances to one per
Jungle Tree. This property is especially useful on Event Nodes where you only want a single instance within each Jungle
Tree.

:::warning WARNING
If you already have multiple of a node instance in a Jungle Tree and proceed to set the limit one per tree property to
true, the multiple instances will be marked in the Jungle Validator.
:::

## Boilerplate

```csharp
[NodeProperties(
    Title = "My Node",
    Description = "This is the description of My Node",
    Category = "Nodes/My Node",
    Color = Blue,
    Deprecated = false,     // Not required to be defined (defaults to false)
    LimitOnePerTree = false // Not required to be defined (defaults to false)
)]
```

### Example

Let's put everything together now and define the node properties for the door example above.

```csharp
[NodeProperties(
    Title = "Open Door",
    Description = "Opens the inputted door.",
    Category = "Game/Door",
    Color = Green
)]
public class OpenDoorNode : IONode
...
```

```csharp
[NodeProperties(
    Title = "Close Door",
    Description = "Closes the inputted door.",
    Category = "Game/Door",
    Color = Red
)]
public class CloseDoorNode : IONode
...
```
