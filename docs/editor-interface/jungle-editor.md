---
title: Jungle Editor
sidebar_position: 1
---

The Jungle editor is the backbone of the Jungle framework. It is a visual editor that allows you to create and edit 
Jungle trees completely visually.

#### Opening the Editor

**Double-click** on a Jungle Tree in your assets folder. This will open the Jungle Tree in the editor.

![Jungle Editor](img\jungle-editor-opening.png)

---
## Node Graph

The node graph is where you create and edit your Jungle Trees. The editor can be docked anywhere in the Unity editor.
The editor is responsive and will automatically resize to fit the window it's in.

All elements within the editor are draggable. You can move nodes and sticky notes using your mouse by clicking and
dragging them.

### Selecting Elements

Selecting elements can be done two ways:
- Clicking on them
- Drawing a selection box

#### Clicking on Elements

You can select a single element by clicking on it. If you want to select multiple elements, you can hold **Alt** and
click on each element you want to select.

#### Drawing a Selection Box

You can select multiple elements by drawing a selection box around them. To do this, click and drag. Any elements that
are within the selection box will be selected. You can also hold **Alt** while drawing the selection box to not deselect
any elements that are already selected.

### Controls

| Action        | Input             |
|---------------|-------------------|
| Pan Graph     | Middle Mouse      | 
| Zoom Graph    | Scroll Wheel      |
| Selection Box | Left Click + Drag |

:::tip PANNING WITH OTHER DEVICES
If you're using the Jungle Editor on your laptop/tablet, you can pan the graph by holding **Alt** and dragging with
your _trackpad_, _stylus_, or _finger_.
:::

### Shortcuts

| Action         | Shortcut         | Context Menu                |
|----------------|------------------|-----------------------------|
| Select All     | Ctrl + A         | Right Click > Select All    |
| Copy           | Ctrl + C         | Right Click > Copy          |
| Paste          | Ctrl + V         | Right Click > Paste         |
| Duplicate      | Ctrl + D         | Right Click > Duplicate     |
| Delete         | Del              | Right Click > Delete        |
| Frame All      | A                | _None_                      |
| Frame Origin   | O                | Right Click > Recenter View |
| Frame Next     | ]                | _None_                      |
| Frame Previous | [                | _None_                      |

### Sticky Notes

Sticky notes are a great way to document and organize your trees.

| Action   | Shortcut          | Context Menu                   |
|----------|-------------------|--------------------------------|
| Add Note | **Shift** + **S** | **Right Click** > **Add Note** |

This will add a sticky note to your graph at your mouse cursor.

:::tip NOTE GROUPS
**Alternatively**, if you add a note while selecting one or more node(s), the note will be added around all the selected
nodes. This is a great way to group nodes together.
:::

#### Moving and Resizing Sticky Notes

Sticky notes can be moved around the graph just like nodes. You can also resize them by dragging on the sides or 
corners. 

#### Editing Sticky Notes

To edit the text of a sticky note, double-click on it.

![Sticky note colors](img\sticky-note-editing.png)

#### Sticky Note Theme

You can change the color of a sticky note by right clicking on it, hovering over **Theme**, and selecting the color you
want.

![Sticky note colors](img\sticky-note-colors.png)

#### Sticky Note Lock

If you would like to lock the sticky note in place, you can right click on it and select **Lock**. This will prevent
you from accidentally moving, resizing, or editing the note.

![Sticky note colors](img\sticky-note-lock.png)

---
## Node Inspector

The node inspector panel is where you edit a nodes properties. It works in a similar way to Unity's inspector panel.
This is also where you set the node's name.

---
## Node Explorer

The node explorer panel is where you can search for nodes to add to your tree. This panel automatically propagates with
any nodes you create in your project. You can quickly search for nodes by title via the search bar at the top of the
panel.


