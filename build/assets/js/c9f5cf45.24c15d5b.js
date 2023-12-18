"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[5620],{3117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=t(5893),o=t(1151);const i={title:"Custom Node Inspectors",sidebar_position:1},s=void 0,d={id:"jungle-nodes/advanced/custom-node-inspectors",title:"Custom Node Inspectors",description:"Building custom node inspectors is a great way to add custom functionality to your nodes. Creating custom node",source:"@site/docs/jungle-nodes/advanced/custom-node-inspectors.md",sourceDirName:"jungle-nodes/advanced",slug:"/jungle-nodes/advanced/custom-node-inspectors",permalink:"/docs/jungle-nodes/advanced/custom-node-inspectors",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/jungle-nodes/advanced/custom-node-inspectors.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Custom Node Inspectors",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Event Node",permalink:"/docs/jungle-nodes/event-node"},next:{title:"Declaring Validation Issues",permalink:"/docs/jungle-nodes/advanced/declaring-validation-issues"}},c={},a=[{value:"Creating a Custom Inspector",id:"creating-a-custom-inspector",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Tutorials",id:"tutorials",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Example",id:"example",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Building custom node inspectors is a great way to add custom functionality to your nodes. ",(0,r.jsx)(n.strong,{children:"Creating custom node\r\ninspectors works exactly like building custom inspectors for Mono Behaviours and Scriptable Objects."})]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-custom-inspector",children:"Creating a Custom Inspector"}),"\n",(0,r.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["A custom inspector is a class that inherits from ",(0,r.jsx)(n.code,{children:"UnityEditor.Editor"}),". This class is then attached to your Jungle Node\r\nscript using the ",(0,r.jsx)(n.code,{children:"UnityEditor.CustomEditor"})," attribute."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"[UnityEditor.CustomEditor(typeof(MyClass))]\r\npublic class MyEditor : UnityEditor.Editor\r\n{\r\n    // Editor code here\r\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["All editor classes should be placed between ",(0,r.jsx)(n.code,{children:"#if UNITY_EDITOR"})," and ",(0,r.jsx)(n.code,{children:"#endif"})," tags to ensure that the editor code is\r\nstripped from the build. If you do not do this, your build will ",(0,r.jsx)(n.strong,{children:"fail"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"tutorials",children:"Tutorials"}),"\n",(0,r.jsxs)(n.p,{children:["Here's a manual by Unity on how to create custom inspectors in Unity:\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.a,{href:"https://docs.unity3d.com/Manual/UIE-HowTo-CreateCustomInspector.html",children:"Unity Custom Inspector Manual"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OR"})}),"\n",(0,r.jsx)(n.p,{children:"Check out this Brackeys tutorial on how to create custom inspectors in Unity."}),"\n",(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/RInUu1_8aGw?si=BumBO-eNUEd13JzZ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(n.p,{children:"Jungle will automatically detect and implement your custom inspector into the Jungle Editor."}),"\n",(0,r.jsx)(n.p,{children:"Custom inspectors are by no means required but can help boost your workflow and make your nodes more user-friendly. All\r\nbuilt-in Jungle nodes have custom inspectors that make the nodes look cleaner and easier to use."}),"\n",(0,r.jsxs)(n.p,{children:["No custom inspector ",(0,r.jsx)(n.strong,{children:"(Red)"})," ",(0,r.jsx)(n.em,{children:"Vs."})," custom inspector ",(0,r.jsx)(n.strong,{children:"(Green)"}),":\r\n",(0,r.jsx)(n.img,{alt:"Custom inspector applied vs not",src:t(1512).Z+"",width:"615",height:"305"})]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of a custom inspector for a node that inherits from ",(0,r.jsx)(n.code,{children:"GenericNode"}),". This inspector displays a property\r\nfield for the ",(0,r.jsx)(n.code,{children:"value"})," property."]}),"\n",(0,r.jsx)(n.p,{children:"The #if UNITY_EDITOR tag ensures that the editor code is stripped from the build."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\nusing UnityEngine;\r\n#if UNITY_EDITOR\r\nusing UnityEditor;\r\n#endif\r\n\r\n[NodeProperties(\r\n    Title = "My Node",\r\n    Description = "You friendly neighborhood node.",\r\n    Category = "My Nodes",\r\n    Color = Blue\r\n)]\r\n[GenericNode(\r\n    InputPortName = "Start",\r\n    OutputPortName = "Next"\r\n)]\r\npublic class MyNode : GenericNode\r\n{\r\n    [SerializeField] \r\n    private float value = 1f;\r\n    \r\n    protected override void OnStart()\r\n    {\r\n        CallAndStop();\r\n    }\r\n\r\n    protected override void OnUpdate() { }\r\n}\r\n\r\n// Use the UNITY_EDITOR tag ensures that the editor code is stripped from the build\r\n#if UNITY_EDITOR\r\n[CustomEditor(typeof(MyNode))]\r\npublic class MyNodeEditor : UnityEditor.Editor\r\n{\r\n    private SerializedProperty _value;\r\n    \r\n    private void OnEnable()\r\n    {\r\n        _value = serializedObject.FindProperty("value");\r\n    }\r\n\r\n    public override void OnInspectorGUI()\r\n    {\r\n        serializedObject.Update();\r\n        \r\n        EditorGUILayout.PropertyField(_value);\r\n        \r\n        serializedObject.ApplyModifiedProperties();\r\n    }\r\n}\r\n#endif\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1512:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/custom-inspector-good-vs-bad-3de2cb15d4fb55e00aae99e47cf234cf.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var r=t(7294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);