"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[1944],{3770:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=r(5893),s=r(1151);const i={title:"Generic Node",sidebar_position:3},d=void 0,l={id:"jungle-nodes/identity-node",title:"Generic Node",description:"The Generic Node is the simplest node in Jungle. It takes a single input of any type, and outputs the same value to a",source:"@site/docs/jungle-nodes/identity-node.md",sourceDirName:"jungle-nodes",slug:"/jungle-nodes/identity-node",permalink:"/docs/jungle-nodes/identity-node",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jungle-nodes/identity-node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Generic Node",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"IO Node",permalink:"/docs/jungle-nodes/io-node"},next:{title:"Event Node",permalink:"/docs/jungle-nodes/event-node"}},o={},a=[{value:"API",id:"api",level:2},{value:"Methods",id:"methods",level:3},{value:"Abstract",id:"abstract",level:4},{value:"Virtual",id:"virtual",level:4},{value:"Calls",id:"calls",level:4},{value:"Properties",id:"properties",level:3},{value:"Attribute",id:"attribute",level:3},{value:"Attribute Example",id:"attribute-example",level:4},{value:"Boilerplate",id:"boilerplate",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Generic Node is the simplest node in Jungle. It takes a single input of any type, and outputs the same value to a\r\nsingle output of the same type."}),"\n",(0,t.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,t.jsx)(n.p,{children:"The inputted value is stored internally and cannot be modified or changed."})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Jungle;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"abstract",children:"Abstract"}),"\n",(0,t.jsx)(n.p,{children:"Called immediately when the Generic Node is called by another node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected abstract void OnStart();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Called every frame while the Generic Node is running. Always called after ",(0,t.jsx)(n.strong,{children:"OnStart"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected abstract void OnUpdate();\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Both ",(0,t.jsx)(n.strong,{children:"OnStart"})," and ",(0,t.jsx)(n.strong,{children:"OnUpdate"})," are required methods in all Jungle Nodes. Your code ",(0,t.jsx)(n.strong,{children:"will not"})," compile without them."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"virtual",children:"Virtual"}),"\n",(0,t.jsx)(n.p,{children:"Called immediately after this Generic Node is stopped."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected virtual void OnStop() {}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Called whenever a validation is requested on this Generic Node.\r\n",(0,t.jsx)("br",{}),"Should return any issues found with this node."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected virtual Issue[] OnValidation() {}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Override this if you want to add dynamic node context in the Jungle Editor.\r\n",(0,t.jsx)("br",{}),"Called on ",(0,t.jsx)(n.em,{children:"every"})," validation pass."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public override string GetDetails() {}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"calls",children:"Calls"}),"\n",(0,t.jsx)(n.p,{children:"Sends the Generic to any nodes connected to this Generic Node's output."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected void Call()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Stops the Generic Node without sending out the Generic."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected void Stop()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Both sends the Generic to any nodes connected to this Generic Node's output and stops the Generic Node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected void CallAndStop()\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.p,{children:"Reference to the nodes Jungle Tree."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public JungleTree JungleTree { get; }\n"})}),"\n",(0,t.jsx)(n.p,{children:"List of the Jungle Nodes output ports."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public Port[] OutputPorts { get; }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Called when the Jungle Node is validated. Callback is true if issues were detected."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public Action<bool> OnValidated\n"})}),"\n",(0,t.jsx)(n.p,{children:"True if the Jungle Node is currently running."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public bool IsRunning { get; }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the Jungle Nodes title."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public string GetTitle()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns a brief description of the Jungle Nodes function."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public string GetDescription()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the Jungle Nodes category."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public string GetCategory()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the Jungle Nodes accent color."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public Color GetColor()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the Jungle Nodes script icon."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public Texture GetIcon()\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"EDITOR ONLY",type:"warning",children:(0,t.jsx)(n.p,{children:"Fetching the Jungle Nodes icon only works in the Unity editor. In a build, this will return a blank white texture."})}),"\n",(0,t.jsx)(n.p,{children:"Returns the Jungle Nodes unique id."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public string GetUid()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns true if the Jungle Node is declared deprecated."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public bool IsDeprecated()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns true if the Jungle Node is limited to one instance per Jungle Tree."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public bool IsLimitedOnePerTree()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns info about the Jungle Nodes input port."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public override Port.Info GetInputPortInfo()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns info about the Jungle Nodes output ports."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public override Port.Info[] GetOutputPortsInfo()\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"attribute",children:"Attribute"}),"\n",(0,t.jsxs)(n.p,{children:["All Generic Nodes are required to have a ",(0,t.jsx)(n.code,{children:"GenericNode"})," class attribute defined. This attribute defines the input port\r\nand output port on the node."]}),"\n",(0,t.jsxs)(n.p,{children:["Here's a list of all the properties you can define in the ",(0,t.jsx)(n.code,{children:"GenericNode"})," attribute:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"InputPortName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Defines the name of the input port"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OutputPortName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Defines the name of the output port"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'[GenericNode(\r\n    InputPortName = "My Input",\r\n    OutputPortName = "My Output"\r\n)]\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The input port would be named ",(0,t.jsx)(n.em,{children:'"My Input"'})," and would accept any type."]}),"\n",(0,t.jsxs)(n.li,{children:["The output port would be named ",(0,t.jsx)(n.em,{children:'"My Output"'})," and would output the same type as the input."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"attribute-example",children:"Attribute Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'[NodeProperties(\r\n    ...\r\n)]\r\n[GenericNode(\r\n    InputPortName = "Start",\r\n    OutputPortName = "Elapsed"\r\n)]\r\npublic class WaitForSecondsNode : BranchNode\r\n...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we defined ",(0,t.jsx)(n.strong,{children:"WaitForSecondsNode"}),"'s input port to be named ",(0,t.jsx)(n.strong,{children:"Start"})," and accept any type. We also\r\ndefined the output port to be named ",(0,t.jsx)(n.strong,{children:"Elapsed"})," and output the same type as the input."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"boilerplate",children:"Boilerplate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    Title = "My Generic Node",\r\n    Description = "Example implementation of a Generic node.",\r\n    Category = "Nodes/Generic Node",\r\n    Color = Red,\r\n    Deprecated = false,\r\n    LimitOnePerTree = false\r\n)]\r\n[GenericNode(\r\n    InputPortName = "Input",\r\n    OutputPortName = "Output"\r\n)]\r\npublic class MyGenericNode : GenericNode\r\n{\r\n    protected override void OnStart()\r\n    {\r\n        CallAndStop();\r\n    }\r\n\r\n    protected override void OnUpdate()\r\n    {\r\n        \r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:'Here\'s a simple example of an Generic Node that prints "Hello, World!" to the console.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'[NodeProperties(\r\n    Title = "Hello World",\r\n    Description = "Prints \\"Hello, World!\\" to the console.",\r\n    Category = "Nodes/Generic Node",\r\n    Color = Red\r\n)]\r\n[GenericNode(\r\n    InputPortName = "Start",\r\n    OutputPortName = "Next"\r\n)]\r\npublic class HelloWorldNode : GenericNode\r\n{\r\n    protected override void OnStart()\r\n    {\r\n        Debug.Log("Hello, World!");\r\n        CallAndStop();\r\n    }\r\n\r\n    protected override void OnUpdate()\r\n    {\r\n        \r\n    }\r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>d});var t=r(7294);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);