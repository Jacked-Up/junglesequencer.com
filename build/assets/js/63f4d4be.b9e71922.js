"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[146],{9100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(5893),s=t(1151);const i={title:"Branch Node<T>",sidebar_position:1},o=void 0,l={id:"jungle-nodes/branch-node",title:"Branch Node<T>",description:"The Branch Node is the most powerful node type in Jungle. The Branch Node takes a single input of any type, and outputs",source:"@site/docs/jungle-nodes/branch-node.md",sourceDirName:"jungle-nodes",slug:"/jungle-nodes/branch-node",permalink:"/docs/jungle-nodes/branch-node",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/jungle-nodes/branch-node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Branch Node<T>",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node Properties",permalink:"/docs/jungle-nodes/node-properties"},next:{title:"IO Node<T>",permalink:"/docs/jungle-nodes/io-node"}},d={},c=[{value:"Result in the Jungle Editor",id:"result-in-the-jungle-editor",level:4},{value:"Code Reference",id:"code-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Events",id:"events",level:3},{value:"Methods",id:"methods",level:3},{value:"Boilerplate",id:"boilerplate",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Branch Node is the most powerful node type in Jungle. The Branch Node takes a single input of any type, and outputs\r\nto any number of outputs that all can output any types."}),"\n",(0,r.jsx)(n.admonition,{title:"ONLY NEED ONE OUTPUT?",type:"tip",children:(0,r.jsxs)(n.p,{children:["If you plan to use only a single output from the branch node, we recommend building an ",(0,r.jsx)(n.strong,{children:"IO Node"})," instead."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["All Branch Nodes are required to have a ",(0,r.jsx)(n.code,{children:"BranchNode"})," class attribute defined. This attribute defines the input port\r\nand output ports on the node."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's a list of all the properties you can define in the ",(0,r.jsx)(n.code,{children:"BranchNode"})," attribute:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"InputPortName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Defines the name of the input port"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"OutputPortNames"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:"Defines the names for each output port"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"OutputPortTypes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"type[]"})}),(0,r.jsx)(n.td,{children:"Defines the outputted type for each port"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The output port names and types should be defined in the same order and should always be the same length. You are\r\nlimited to 256 output ports per node."}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of a ",(0,r.jsx)(n.code,{children:"BranchNode"})," attribute:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'[BranchNode(\r\n    InputPortName = "My Input",\r\n    OutputPortNames = new []{ "My Output A",     "My Output B"     },\r\n    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }\r\n)]\r\npublic class MyBranchNode : BranchNode<Port.None>\r\n...\n'})}),"\n",(0,r.jsx)(n.h4,{id:"result-in-the-jungle-editor",children:"Result in the Jungle Editor"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Branch node attribute visual",src:t(5122).Z+"",width:"284",height:"244"})}),"\n",(0,r.jsxs)(n.admonition,{title:"WHERE IS THE INPUT TYPE DEFINED?",type:"info",children:[(0,r.jsxs)(n.p,{children:["The Branch Node is a generic class, so you define the input port type when you inherit from the class.\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"For example"}),", if you want the input port to accept a ",(0,r.jsx)(n.code,{children:"float"})," value, you would set your script up like so:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"public class MyBranchNode : BranchNode<float>\r\n...\n"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"code-reference",children:"Code Reference"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Namespace: ",(0,r.jsx)(n.code,{children:"Jungle"})]})}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"JungleTree"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public JungleTree JungleTree { get; }"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Reference to the nodes Jungle Tree."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"OutputPorts"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public Port[] OutputPorts { get; }"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"List of the nodes output ports."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"IsRunning"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public bool IsRunning { get; }"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"True if the node is currently running."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"Nothing"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public static readonly Port.None Nothing"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Equivalent to new Port.None()."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetTitle()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public string GetTitle()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns the nodes title."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetDescription()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public string GetDescription()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns a brief description of the nodes function."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetCategory()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public string GetCategory()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns the nodes category."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetColor()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public Color GetColor()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns the nodes accent color."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetIcon()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public Texture GetIcon()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns the nodes icon."})]}),"\n",(0,r.jsx)(n.admonition,{title:"EDITOR ONLY",type:"info",children:(0,r.jsx)(n.p,{children:"Fetching the Jungle Nodes icon only works in the Unity editor. In a build, this will return a blank white texture."})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetUid()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public string GetUid()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns the nodes unique id."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"IsDeprecated()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public bool IsDeprecated()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns true if the node is declared deprecated."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetInputPortInfo()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public override Port.Info GetInputPortInfo()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns info about the nodes input port."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetOutputPortsInfo()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public override Port.Info[] GetOutputPortsInfo()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Returns info about the nodes output ports."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"OnValidated"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public Action<bool> OnValidated"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Called when the node is validated. Callback is true if issues were detected."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)("span",{class:"DocItemTitle",children:["OnStart(",(0,r.jsx)("span",{class:"DocItemParameter",children:"in T"}),")"]}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"protected abstract void OnStart(in T inputValue)"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Called immediately when the node is called by another node. The input value is the value sent by the calling\r\nnode."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"OnUpdate()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"protected abstract void OnUpdate()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsxs)(n.em,{children:["Called every frame while the node is running. Always called after ",(0,r.jsx)(n.strong,{children:"OnStart"}),"."]})]}),"\n",(0,r.jsx)(n.admonition,{title:"REQUIRED",type:"info",children:(0,r.jsxs)(n.p,{children:["Both ",(0,r.jsx)(n.strong,{children:"OnStart"})," and ",(0,r.jsx)(n.strong,{children:"OnUpdate"})," are required methods in all Jungle Nodes. Your code ",(0,r.jsx)(n.strong,{children:"will not"})," compile without them."]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"OnStop()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"protected virtual void OnStop()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Called immediately after this node is stopped."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"GetDetails()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"public override string GetDetails()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Override this and return the information you would like to display in the Jungle Editor."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"OnValidation()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"protected virtual Issue[] OnValidation()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsxs)(n.em,{children:["Called whenever a validation pass is performed on this node. Return any issues in your script here to display\r\nthem inside the ",(0,r.jsx)(n.a,{href:"/docs/using-the-editor/jungle-validator",children:"Jungle Validator"}),"."]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)("span",{class:"DocItemTitle",children:["CallAndStop(",(0,r.jsx)("span",{class:"DocItemParameter",children:"Port.Call[]"}),")"]})," ",(0,r.jsx)(n.em,{children:"or"}),"\r\n",(0,r.jsxs)("span",{class:"DocItemTitle",children:["CallAndStop(",(0,r.jsx)("span",{class:"DocItemParameter",children:"Port.Call"}),")"]}),"\r\n",(0,r.jsx)("br",{}),"1: ",(0,r.jsx)(n.code,{children:"protected void CallAndStop(Port.Call[] calls)"}),"\r\n",(0,r.jsx)("br",{}),"2: ",(0,r.jsx)(n.code,{children:"protected void CallAndStop(Port.Call call)"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Both sends port call(s) to the requested ports and stops the node."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)("span",{class:"DocItemTitle",children:["Call(",(0,r.jsx)("span",{class:"DocItemParameter",children:"Port.Call[]"}),")"]})," ",(0,r.jsx)(n.em,{children:"or"}),"\r\n",(0,r.jsxs)("span",{class:"DocItemTitle",children:["Call(",(0,r.jsx)("span",{class:"DocItemParameter",children:"Port.Call"}),")"]}),"\r\n",(0,r.jsx)("br",{}),"1: ",(0,r.jsx)(n.code,{children:"protected void Call(Port.Call[] calls)"}),"\r\n",(0,r.jsx)("br",{}),"2: ",(0,r.jsx)(n.code,{children:"protected void Call(Port.Call call)"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Sends out port call(s) to the requested ports on this node."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("span",{class:"DocItemTitle",children:"Stop()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"protected void Stop()"}),"\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Stops the node without sending any port calls."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"boilerplate",children:"Boilerplate"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    Title = "Branch Node",\r\n    Description = "One input, multiple outputs."\r\n)]\r\n[BranchNode(\r\n    InputPortName = "Input",\r\n    OutputPortNames = new []{ "Output A",        "Output B"        },\r\n    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }\r\n)]\r\npublic class MyBranchNode : BranchNode<Port.None>\r\n{\r\n    protected override void OnStart(in Port.None inputValue)\r\n    {\r\n        CallAndStop(new []\r\n        {\r\n            new Port.Call(0, Nothing),\r\n            new Port.Call(1, Nothing)\r\n        });\r\n    }\r\n    \r\n    protected override void OnUpdate() { }\r\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Here's a simple example of a Branch Node that takes in a number and outputs weather the number is positive or negative."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    Title = "Positive/Negative",\r\n    Description = "Outputs weather the input is positive or negative."\r\n)]\r\n[BranchNode(\r\n    InputPortName = "Number",\r\n    OutputPortNames = new []{ "Positive",        "Negative" },\r\n    OutputPortTypes = new []{ typeof(Port.None), typeof(Port.None) }\r\n)]\r\npublic class PositiveNegativeNode : BranchNode<int>\r\n{\r\n    protected override void OnStart(in int number)\r\n    {\r\n        if (number >= 0)\r\n        {\r\n            // Call the positive port\r\n            CallAndStop(new Port.Call(0, Nothing));\r\n        }\r\n        else\r\n        {\r\n            // Call the negative port\r\n            CallAndStop(new Port.Call(1, Nothing));\r\n        }\r\n    }\r\n    \r\n    protected override void OnUpdate() { }\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["As shown in the example above, the input port is named ",(0,r.jsx)(n.strong,{children:"Number"})," and accepts the type ",(0,r.jsx)(n.strong,{children:"int"}),". Also defined are two\r\noutput ports named ",(0,r.jsx)(n.strong,{children:"Positive"})," and ",(0,r.jsx)(n.strong,{children:"Negative"})," that output ",(0,r.jsx)(n.strong,{children:"nothing"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"With this setup, when a node calls this node, it inputs a value of type int to the Number port. The node then checks if\r\nthe number is greater than or equal to zero. If it is, it calls the Positive port. If it's not, it calls the Negative\r\nport."}),"\n",(0,r.jsx)(n.p,{children:"This configuration allows us to create a node with branching logic that can run different sequences based on whether the\r\ninputted number is positive or negative."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Branch node example visual",src:t(9651).Z+"",width:"307",height:"244"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},5122:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/branch-node-attribute-visual-b517fa53529c659c448484caa7f096ee.png"},9651:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/branch-node-example-visual-2773821b21866b90898de925d1e89c70.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);