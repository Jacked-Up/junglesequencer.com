"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[3146],{9100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(5893),o=t(1151);const s={title:"Branch Node",sidebar_position:1},l=void 0,a={id:"jungle-nodes/branch-node",title:"Branch Node",description:"The Branch Node is the most powerful node type in Jungle. The Branch Node takes a single input of any type, and outputs",source:"@site/docs/jungle-nodes/branch-node.md",sourceDirName:"jungle-nodes",slug:"/jungle-nodes/branch-node",permalink:"/docs/jungle-nodes/branch-node",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jungle-nodes/branch-node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Branch Node",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node Properties",permalink:"/docs/jungle-nodes/node-properties"},next:{title:"IO Node",permalink:"/docs/jungle-nodes/io-node"}},i={},d=[{value:"API",id:"api",level:2},{value:"Methods",id:"methods",level:3},{value:"Abstract",id:"abstract",level:4},{value:"Virtual",id:"virtual",level:4},{value:"Calls",id:"calls",level:4},{value:"Properties",id:"properties",level:3},{value:"Attribute",id:"attribute",level:2},{value:"Attribute Example",id:"attribute-example",level:4},{value:"Boilerplate",id:"boilerplate",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Branch Node is the most powerful node type in Jungle. The Branch Node takes a single input of any type, and outputs\r\nto any number of outputs that all can output any types."}),"\n",(0,r.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,r.jsxs)(n.p,{children:["The branch node is limited to a maximum of ",(0,r.jsx)(n.strong,{children:"256"})," outputs."]})}),"\n",(0,r.jsx)(n.admonition,{title:"ONLY NEED ONE OUTPUT?",type:"tip",children:(0,r.jsxs)(n.p,{children:["If you plan to use only a single output from the branch node, we recommend building an ",(0,r.jsx)(n.strong,{children:"IO Node"})," instead."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"using Jungle;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"abstract",children:"Abstract"}),"\n",(0,r.jsxs)(n.p,{children:["Called immediately when the Branch Node is called by another node.\r\n",(0,r.jsx)("br",{}),"The ",(0,r.jsx)(n.strong,{children:"inputValue"})," parameter is the value passed in from the node that called this node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"protected abstract void OnStart(in object inputValue);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Called every frame while the Branch Node is running. Always called after ",(0,r.jsx)(n.strong,{children:"OnStart"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"protected abstract void OnUpdate();\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["Both ",(0,r.jsx)(n.strong,{children:"OnStart"})," and ",(0,r.jsx)(n.strong,{children:"OnUpdate"})," are required methods in all Jungle Nodes. Your code ",(0,r.jsx)(n.strong,{children:"will not"})," compile without them."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"virtual",children:"Virtual"}),"\n",(0,r.jsx)(n.p,{children:"Called immediately after this Branch Node is stopped."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"protected virtual void OnStop() {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Called whenever a validation is requested on this Branch Node.\r\n",(0,r.jsx)("br",{}),"Should return any issues found with this node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"protected virtual Issue[] OnValidation() {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Override this if you want to add dynamic node context in the Jungle Editor.\r\n",(0,r.jsx)("br",{}),"Called on ",(0,r.jsx)(n.em,{children:"every"})," validation pass."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public override string GetDetails() {}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"calls",children:"Calls"}),"\n",(0,r.jsx)(n.p,{children:"Sends the port calls out to the requested ports."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"protected void Call(Port.Call[] portCalls) // For multiple port calls\r\n// OR\r\nprotected void Call(Port.Call portCall)    // For only one port call\n"})}),"\n",(0,r.jsx)(n.p,{children:"Stops the Branch Node without sending out any port calls."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"protected void Stop()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Both sends the port calls out to the requested ports and stops the Branch Node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"protected void CallAndStop(Port.Call[] portCalls) // For multiple port calls\r\n// OR\r\nprotected void CallAndStop(Port.Call portCall)    // For only one port call\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.p,{children:"Reference to the nodes Jungle Tree."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public JungleTree JungleTree { get; }\n"})}),"\n",(0,r.jsx)(n.p,{children:"List of the Jungle Nodes output ports."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public Port[] OutputPorts { get; }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Called when the Jungle Node is validated. Callback is true if issues were detected."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public Action<bool> OnValidated\n"})}),"\n",(0,r.jsx)(n.p,{children:"True if the Jungle Node is currently running."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public bool IsRunning { get; }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the Jungle Nodes title."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public string GetTitle()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a brief description of the Jungle Nodes function."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public string GetDescription()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the Jungle Nodes category."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public string GetCategory()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the Jungle Nodes accent color."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public Color GetColor()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the Jungle Nodes script icon."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public Texture GetIcon()\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"EDITOR ONLY",type:"warning",children:(0,r.jsx)(n.p,{children:"Fetching the Jungle Nodes icon only works in the Unity editor. In a build, this will return a blank white texture."})}),"\n",(0,r.jsx)(n.p,{children:"Returns the Jungle Nodes unique id."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public string GetUid()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the Jungle Node is declared deprecated."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public bool IsDeprecated()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the Jungle Node is limited to one instance per Jungle Tree."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public bool IsLimitedOnePerTree()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns info about the Jungle Nodes input port."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public override Port.Info GetInputPortInfo()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns info about the Jungle Nodes output ports."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public override Port.Info[] GetOutputPortsInfo()\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"attribute",children:"Attribute"}),"\n",(0,r.jsxs)(n.p,{children:["All Branch Nodes are required to have a ",(0,r.jsx)(n.code,{children:"BranchNode"})," class attribute defined. This attribute defines the input port\r\nand output ports on the node."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's a list of all the properties you can define in the ",(0,r.jsx)(n.code,{children:"BranchNode"})," attribute:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"InputPortName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Defines the name of the input port"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"InputPortType"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"type"})}),(0,r.jsx)(n.td,{children:"Defines the input ports accepted type"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"OutputPortNames"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:"Defines the names for each output port"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"OutputPortTypes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"type[]"})}),(0,r.jsx)(n.td,{children:"Defines the outputted type for each port"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'[BranchNode(\r\n    InputPortName = "My Input"\r\n    InputPortType = typeof(Port.None),\r\n    OutputPortNames = new []{ "My Output A",     "My Output B"     },\r\n    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }\r\n)]\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The input port would be named ",(0,r.jsx)(n.em,{children:'"My Input"'})," and would accept the type ",(0,r.jsx)(n.em,{children:'"Port.None"'}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The output ports would be named ",(0,r.jsx)(n.em,{children:'"My Output A"'}),' and "My Output B" and both would output the type ',(0,r.jsx)(n.em,{children:'"Port.None"'}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The output port names and types should be defined in the same order."}),"\n",(0,r.jsx)(n.admonition,{title:"WARNING",type:"warning",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OutputPortNames"})," and ",(0,r.jsx)(n.strong,{children:"OutputPortTypes"})," arrays must ",(0,r.jsx)(n.strong,{children:"always"})," be the same length."]})}),"\n",(0,r.jsx)(n.h4,{id:"attribute-example",children:"Attribute Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'[NodeProperties(\r\n    ...\r\n)]\r\n[BranchNode(\r\n    InputPortName = "Value"\r\n    InputPortType = typeof(float),\r\n    OutputPortNames = new []{ "Square Root", "Greator than One" },\r\n    OutputPortTypes = new []{ typeof(float), typeof(bool) }\r\n)]\r\npublic class FindSquareRootNode : BranchNode\r\n...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we defined ",(0,r.jsx)(n.strong,{children:"FindSquareRootNode"}),"'s input port to be named ",(0,r.jsx)(n.strong,{children:"Value"})," and accept type ",(0,r.jsx)(n.strong,{children:"float"}),". We\r\nalso defined two output ports named ",(0,r.jsx)(n.strong,{children:"Square Root"})," and ",(0,r.jsx)(n.strong,{children:"Greater than One"})," that output type ",(0,r.jsx)(n.strong,{children:"float"})," and ",(0,r.jsx)(n.strong,{children:"bool"}),"\r\nrespectively. With this setup, we could create the logic in this class so that if the input value is greater than one,\r\nit would call output port ",(0,r.jsx)(n.strong,{children:"Greater than One"})," with a value of ",(0,r.jsx)(n.strong,{children:"true"}),", and if the input value is less than one, it\r\nwould call output port ",(0,r.jsx)(n.strong,{children:"Greater than One"})," with a value of ",(0,r.jsx)(n.strong,{children:"false"}),". We could also call output port ",(0,r.jsx)(n.strong,{children:"Square Root"}),"\r\nwith the square root of the input value."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"boilerplate",children:"Boilerplate"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    Title = "My Branch Node",\r\n    Description = "Example implementation of a branch node.",\r\n    Category = "Nodes/Branch Node",\r\n    Color = Blue,\r\n    Deprecated = false,\r\n    LimitOnePerTree = false\r\n)]\r\n[BranchNode(\r\n    InputPortName = "Input",\r\n    InputPortType = typeof(Port.None),\r\n    OutputPortNames = new []{ "My Output A",     "My Output B" },\r\n    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }\r\n)]\r\npublic class MyBranchNode : BranchNode\r\n{\r\n    protected override void OnStart(in object inputValue)\r\n    {\r\n        CallAndStop(new []\r\n        {\r\n            new Port.Call(0, new Port.None()),\r\n            new Port.Call(1, new Port.None())\r\n        });\r\n    }\r\n    \r\n    protected override void OnUpdate()\r\n    {\r\n        \r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Here's a simple example of a branch node that takes a boolean value and branches based on that value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    Title = "Boolean Branch",\r\n    Description = "Branches based on a boolean value.",\r\n    Category = "Math",\r\n    Color = Red\r\n)]\r\n[BranchNode(\r\n    InputPortName = "Value",\r\n    InputPortType = typeof(bool),\r\n    OutputPortNames = new []{ "True",            "False" },\r\n    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }\r\n)]\r\npublic class BooleanBranchNode : BranchNode\r\n{\r\n    protected override void OnStart(in object inputValue)\r\n    {\r\n        // Only continue if the input value is a boolean\r\n        if (inputValue is bool inputBoolean)\r\n        {\r\n            if (inputBoolean)\r\n            {\r\n                // We defined output port 1 to be the "True" branch above\r\n                CallAndStop(new Port.Call(0, new Port.None());\r\n            }\r\n            else\r\n            {\r\n                // We defined output port 2 to be the "False" branch above\r\n                CallAndStop(new Port.Call(1, new Port.None());\r\n            }\r\n        }\r\n        else throw new JungleException("Input value is not a boolean!");\r\n    }\r\n    \r\n    protected override void OnUpdate() { }\r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var r=t(7294);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);