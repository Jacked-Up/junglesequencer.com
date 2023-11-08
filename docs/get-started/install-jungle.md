---
title: Install Jungle
sidebar_position: 1
---

Importing Jungle into your project is a breeze. Use this guide to help you get started.

## Prerequisites

Before you import Jungle into your project, check the following:
- That you have an active Unity account with a valid license.
- That you are signed in to the Unity Editor with the same account you use on the Unity Asset Store.

### Compatibility

- Unity Editor version 2021.3 or later
- Mono and IL2CPP scripting backends

:::tip NOTE
It's **heavily** recommend you use the IL2CPP scripting backend.
:::

### Supported Platforms

- Windows, MacOS, and Linux
- Android, iOS, and WebGL
- XR Platforms (Meta Quest, SteamVR, Windows Mixed Reality, etc)
- Xbox, Playstation, Nintendo Switch, Steamdeck, and most other consoles

:::tip NOTE
Jungle is compatible with any platforms that Unity can build to. If you are curious of a certain platform not listed
above, please feel free to reach out.
:::

## Project Settings

The following are the recommended project settings for Jungle.

### Input (Required)

Some of Jungles built-in nodes use Unity's new Input System. Make sure to have the new input system installed and enabled.

How to install and enable the new input system:
- From the Unity Editor, select **Window > Package Manager**
- Inside the package manager, search for packages in the **Unity Registry**
- Search for **Input System** and install the package _(Exit the package manager when done)_
- Goto **Edit > Project Settings > Player**
- Inside the player settings, open the **Other Settings** tab
- Under **Configuration**, change the **Active Input Handling** to **Both** or **Input System (New)**

## Install With Unity Package Manager

- From the Unity Editor, select **Window > Package Manager**
- Inside the package manager, select the packages dropdown menu. Select **My Assets**



## Install With Git URL

:::note NOTE
Install with Git is only available to our enterprise and development partners. 
:::

- From the Unity Editor, select **Window > Package Manager**
- Click the **+** button in the top left corner of the package manager
- Select **Add package from git URL**
- Enter the following URL: **https://github.com/Jacked-Up/Jungle.git**
