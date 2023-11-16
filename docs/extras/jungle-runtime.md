---
title: Jungle Runtime
sidebar_position: 0
---

:::info NO PUBLIC API
The Jungle Runtime has no public API. It is automatically managed by Jungle and should never be interacted with directly.
:::

The Jungle Runtime serves as the receptionist of Jungle. Its responsibility is to invoke callbacks when certain invocation
events happen. 

An instance of the Jungle Runtime is **always** automatically created before the first scene loads. The Jungle Runtime 
is a singleton, meaning there can only be one instance of it at a time. The runtime also self-manages itself meaning you
never have to worry about creating or destroying it. The Jungle Runtime instance is automatically moved into the
`DontDestroyOnLoad` scene, meaning it will persist between scene loads. This allows Jungle to continue running between 
scene loads.

:::danger INSTANTIATION AND DESTRUCTION
- **Never** create a new instance of the Jungle Runtime.
- **Never** destroy the Jungle Runtime instance. 
<br />_Both actions could break Jungle and cause some unexpected behavior._
:::

---
#### Calls

The Jungle Runtime listens for three different methods:
1. Mono Behavior Update
2. Mono Behavior Fixed Update
3. Before Render Update

When any of these calls are invoked, the Jungle Runtime will immediately report them to any running Jungle Trees.
<br />In this way, a Jungle Trees update frequency can be **dynamic**.
