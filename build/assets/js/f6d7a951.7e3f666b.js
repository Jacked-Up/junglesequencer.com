"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[516],{3754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(5893),r=t(1151);const i={title:"Generic Node",sidebar_position:3},d=void 0,o={id:"jungle-nodes/generic-node",title:"Generic Node",description:"The Generic Node is the simplest node type in Jungle. It takes a single input of any type, and outputs the inputted",source:"@site/docs/jungle-nodes/generic-node.md",sourceDirName:"jungle-nodes",slug:"/jungle-nodes/generic-node",permalink:"/docs/jungle-nodes/generic-node",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/jungle-nodes/generic-node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Generic Node",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"IO Node<T>",permalink:"/docs/jungle-nodes/io-node"},next:{title:"Event Node",permalink:"/docs/jungle-nodes/event-node"}},l={},c=[{value:"Result in the Jungle Editor",id:"result-in-the-jungle-editor",level:4},{value:"Code Reference",id:"code-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Events",id:"events",level:3},{value:"Methods",id:"methods",level:3},{value:"Boilerplate",id:"boilerplate",level:2},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Generic Node is the simplest node type in Jungle. It takes a single input of any type, and outputs the inputted\r\nvalue without changing or mutating it."}),"\n",(0,s.jsxs)(n.p,{children:["This node type is useful for nodes that do not require an input to function.\r\n",(0,s.jsx)(n.strong,{children:"For instance"}),", a node that waits for a set amount of time before continuing."]}),"\n",(0,s.jsx)(n.admonition,{title:"TIP",type:"tip",children:(0,s.jsxs)(n.p,{children:["The inputted value is stored internally and ",(0,s.jsx)(n.strong,{children:"cannot"})," be modified or changed."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["All Generic Nodes are required to have a ",(0,s.jsx)(n.code,{children:"GenericNode"})," class attribute defined.\r\nThis attribute defines the input port and output port on the node."]}),"\n",(0,s.jsxs)(n.p,{children:["Here's a list of all the properties you can define in the ",(0,s.jsx)(n.code,{children:"GenericNode"})," attribute:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"InputPortName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"Defines the name of the input port"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"OutputPortName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"Defines the name of the output port"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'[GenericNode(\r\n    InputPortName = "My Input",\r\n    OutputPortName = "My Output"\r\n)]\r\npublic class MyGenericNode : GenericNode\r\n...\n'})}),"\n",(0,s.jsx)(n.h4,{id:"result-in-the-jungle-editor",children:"Result in the Jungle Editor"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Generic node attribute visual",src:t(3911).Z+"",width:"287",height:"200"})}),"\n",(0,s.jsxs)(n.admonition,{title:"WHERE IS THE INPUT TYPE DEFINED?",type:"info",children:[(0,s.jsx)(n.p,{children:"The input port type is defined by any connected nodes output type."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Generic node input definition example",src:t(4139).Z+"",width:"834",height:"462"})}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Wait For Seconds"})," node seen above is a generic node.\r\n",(0,s.jsx)("br",{}),"As you can see, both the ",(0,s.jsx)(n.strong,{children:"Find Game Object"})," node and the ",(0,s.jsx)(n.strong,{children:"Get Main Camera"})," node can be connected to the input\r\nof the ",(0,s.jsx)(n.strong,{children:"Wait For Seconds"})," node."]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"code-reference",children:"Code Reference"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Namespace: ",(0,s.jsx)(n.code,{children:"Jungle"})]})}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"JungleTree"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public JungleTree JungleTree { get; }"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Reference to the nodes Jungle Tree."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OutputPorts"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public Port[] OutputPorts { get; }"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"List of the nodes output ports."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"IsRunning"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public bool IsRunning { get; }"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"True if the node is currently running."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"Nothing"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public static readonly Port.None Nothing"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Equivalent to new Port.None()."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetTitle()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public string GetTitle()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns the nodes title."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetDescription()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public string GetDescription()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns a brief description of the nodes function."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetCategory()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public string GetCategory()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns the nodes category."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetColor()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public Color GetColor()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns the nodes accent color."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetIcon()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public Texture GetIcon()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns the nodes icon."})]}),"\n",(0,s.jsx)(n.admonition,{title:"EDITOR ONLY",type:"info",children:(0,s.jsx)(n.p,{children:"Fetching the Jungle Nodes icon only works in the Unity editor. In a build, this will return a blank white texture."})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetUid()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public string GetUid()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns the nodes unique id."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"IsDeprecated()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public bool IsDeprecated()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns true if the node is declared deprecated."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetInputPortInfo()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public override Port.Info GetInputPortInfo()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns info about the nodes input port."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetOutputPortsInfo()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public override Port.Info[] GetOutputPortsInfo()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns info about the nodes output ports."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OnValidated"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public Action<bool> OnValidated"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Called when the node is validated. Callback is true if issues were detected."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OnStart()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"protected abstract void OnStart()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Called immediately when the node is called by another node."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OnUpdate()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"protected abstract void OnUpdate()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsxs)(n.em,{children:["Called every frame while the node is running. Always called after ",(0,s.jsx)(n.strong,{children:"OnStart"}),"."]})]}),"\n",(0,s.jsx)(n.admonition,{title:"REQUIRED",type:"info",children:(0,s.jsxs)(n.p,{children:["Both ",(0,s.jsx)(n.strong,{children:"OnStart"})," and ",(0,s.jsx)(n.strong,{children:"OnUpdate"})," are required methods in all Jungle Nodes. Your code ",(0,s.jsx)(n.strong,{children:"will not"})," compile without them."]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OnStop()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"protected virtual void OnStop()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Called immediately after this node is stopped."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"GetDetails()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public override string GetDetails()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Override this and return the information you would like to display in the Jungle Editor."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OnValidation()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"protected virtual Issue[] OnValidation()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsxs)(n.em,{children:["Called whenever a validation pass is performed on this node. Return any issues in your script here to display\r\nthem inside the ",(0,s.jsx)(n.a,{href:"/docs/using-the-editor/jungle-validator",children:"Jungle Validator"}),"."]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"CallAndStop()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"protected void CallAndStop()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Both sends out a port call and stops the node."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"Call()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"protected void Call()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Sends out a port call to the requested ports on this node."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"Stop()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"protected void Stop()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Stops the node without sending out a port call."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"boilerplate",children:"Boilerplate"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    Title = "Generic Node",\r\n    Description = "One input, one output."\r\n)]\r\n[GenericNode(\r\n    InputPortName = "Input",\r\n    OutputPortName = "Output"\r\n)]\r\npublic class MyGenericNode : GenericNode\r\n{\r\n    protected override void OnStart()\r\n    {\r\n        CallAndStop();\r\n    }\r\n    \r\n    protected override void OnUpdate() { }\r\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here's a simple example of a Generic Node that waits for some time before continuing."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    Title = "Wait For Time",\r\n    Description = "One input, one output.",\r\n    Color = Yellow\r\n)]\r\n[GenericNode(\r\n    InputPortName = "Start",\r\n    OutputPortName = "Elapsed"\r\n)]\r\npublic class WaitForTimeNode : GenericNode\r\n{\r\n    [SerializeField]\r\n    private float waitTime = 1f;\r\n\r\n    private float _startTime;\r\n\r\n    protected override void OnStart()\r\n    {\r\n        _startTime = Time.time;\r\n    }\r\n    \r\n    protected override void OnUpdate() \r\n    { \r\n        if (Time.time - _startTime < waitTime)\r\n            return;\r\n        \r\n        CallAndStop();\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As shown in the example above, the input port is named ",(0,s.jsx)(n.strong,{children:"Start"})," and accepts any type, and the output port is named\r\n",(0,s.jsx)(n.strong,{children:"Elapsed"})," and outputs the inputted type."]}),"\n",(0,s.jsxs)(n.p,{children:["With this setup, when a node calls this node, the inputted value will be stored in the ",(0,s.jsx)(n.code,{children:"WaitForTimeNode"})," internally and\r\noutputted after the set amount of time has elapsed."]}),"\n",(0,s.jsx)(n.p,{children:"This configuration allows us to create a node that waits for a set amount of time before continuing."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Generic node example",src:t(9790).Z+"",width:"286",height:"198"})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3911:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/generic-node-attribute-visual-eece4655e1f6e92853880c0cf232e5d9.png"},9790:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},4139:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/generic-node-input-definition-example-082ee16c062f0b1317c6b11652f1da9c.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>d});var s=t(7294);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);