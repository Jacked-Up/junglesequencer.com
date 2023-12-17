"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[580],{5670:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=r(5893),t=r(1151);const i={title:"Jungle Tree",sidebar_position:3},l=void 0,d={id:"jungle-tree",title:"Jungle Tree",description:"Introduction",source:"@site/docs/jungle-tree.md",sourceDirName:".",slug:"/jungle-tree",permalink:"/docs/jungle-tree",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/jungle-tree.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Jungle Tree",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using Editor Context",permalink:"/docs/jungle-nodes/advanced/using-editor-context"},next:{title:"Jungle Editor",permalink:"/docs/using-the-editor/jungle-editor"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Creating Jungle Trees",id:"creating-jungle-trees",level:2},{value:"Using Jungle Trees",id:"using-jungle-trees",level:2},{value:"Code Reference",id:"code-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Editor Only",id:"editor-only",level:4},{value:"Events",id:"events",level:3},{value:"Methods",id:"methods",level:3},{value:"Editor Only",id:"editor-only-1",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Jungle Trees are the containers for your sequences. The Jungle Tree is responsible for managing the execution of your\r\nnodes and their connections."}),"\n",(0,s.jsx)(n.p,{children:"You can have as many trees running at once as you want. Each tree is independent of each other and can be started and\r\nstopped at any time. You cannot, however, have the same tree running multiple times at once."}),"\n",(0,s.jsx)(n.h2,{id:"creating-jungle-trees",children:"Creating Jungle Trees"}),"\n",(0,s.jsxs)(n.p,{children:["To create a Jungle Tree, right click in your assets folder window and select ",(0,s.jsx)(n.code,{children:"Create > Jungle Tree"}),". This will create a\r\nJungle Tree that you can then open by double clicking on it."]}),"\n",(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.a,{href:"/docs/jungle-tree-editor",children:"Jungle Tree Editor"})," page for more information on how to edit your Jungle Tree."]}),"\n",(0,s.jsx)(n.h2,{id:"using-jungle-trees",children:"Using Jungle Trees"}),"\n",(0,s.jsxs)(n.p,{children:["It's super easy to start/stop a Jungle Tree. All you need to do is call the ",(0,s.jsx)(n.code,{children:"Start()"})," and ",(0,s.jsx)(n.code,{children:"Stop()"})," methods on the tree.\r\nAll the runtime management is handled for you."]}),"\n",(0,s.jsx)(n.p,{children:"Jungle Trees can be referenced as serialized fields in your scripts. This allows you to easily reference your trees in\r\nthe inspector."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using Jungle;\r\n\r\n[SerializeField] \r\nprivate JungleTree myJungleTree;\r\n\r\nprivate void Start()\r\n{\r\n    myJungleTree.Start();\r\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"code-reference",children:"Code Reference"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Namespace: ",(0,s.jsx)(n.code,{children:"Jungle"})]})}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"Nodes"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public JungleNode[] Nodes { get; }"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"List of all nodes associated with this Jungle Tree."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"State"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public StateFlag State { get; }"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"The current state of the Jungle Tree."})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"State"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Ready"}),(0,s.jsx)(n.td,{children:"Describes a Jungle Tree that has never been run and is not currently running."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Running"}),(0,s.jsx)(n.td,{children:"Describes a Jungle Tree that is currently running."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Finished"}),(0,s.jsx)(n.td,{children:"Describes a Jungle Tree that is not currently running but has run at some point."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"IsRunning"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public bool IsRunning { get; }"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"True if the Jungle Tree is currently running."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"Time"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public float RunTime { get; }"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"The amount of time in seconds the Jungle Tree has been running."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["IsNodeRunning(",(0,s.jsx)("span",{class:"DocItemParameter",children:"JungleNode"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public bool IsNodeRunning(JungleNode jungleNode)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns true if the Jungle Tree is currently running the specified Jungle Node."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["GetNodeByName(",(0,s.jsx)("span",{class:"DocItemParameter",children:"string"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public JungleNode GetNodeByName(string jungleNodeName)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Returns a reference to the Jungle Node with the specified name."})]}),"\n",(0,s.jsx)(n.h4,{id:"editor-only",children:"Editor Only"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"Manifest"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public JungleManifest Manifest { get; }"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"The Jungle Trees persistent manifest."})]}),"\n",(0,s.jsx)(n.admonition,{title:"WARNING",type:"warning",children:(0,s.jsxs)(n.p,{children:["The manifest is used to internal purposes. It's not recommended to call any of its methods or change any of its\r\nproperties. You can read more about the manifest ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extras/jungle-manifest",children:"here"})}),"."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OnStart"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public event Action OnStart;"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Invoked whenever this Jungle Tree is started."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OnStop"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public event Action OnStop;"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Invoked whenever this Jungle Tree is stopped."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"OnError"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public event Action<ErrorFlags> OnError;"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Invoked whenever this Jungle Tree encounters an error."})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Error Flag"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NotInPlayMode"}),(0,s.jsx)(n.td,{children:"This error is thrown when the Jungle Tree is requested to start while the editor is not in play-mode."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AlreadyRunning"}),(0,s.jsx)(n.td,{children:"This error is thrown when a request to start the Jungle Tree is made but the tree is already running."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NoNodes"}),(0,s.jsx)(n.td,{children:"This error is thrown when the Jungle Tree has no nodes to execute."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NoRuntimeInstance"}),(0,s.jsx)(n.td,{children:"This error is thrown when Jungle fails to find a Jungle Runtime instance in the scene."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NodeRuntimeException"}),(0,s.jsx)(n.td,{children:"This error is thrown when a node declares an exception during runtime."})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"Start()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public void Start()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Starts running the Jungle Tree."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("span",{class:"DocItemTitle",children:"Stop()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public void Stop()"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Stops running the Jungle Tree."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["AddRevertAction(",(0,s.jsx)("span",{class:"DocItemParameter",children:"Action"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public void AddRevertAction(Action action)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Adds an action to be invoked when the Jungle Tree stops."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["RemoveRevertAction(",(0,s.jsx)("span",{class:"DocItemParameter",children:"Action"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public void RemoveRevertAction(Action action)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Removes an action from the revert list."})]}),"\n",(0,s.jsx)(n.h4,{id:"editor-only-1",children:"Editor Only"}),"\n",(0,s.jsx)(n.admonition,{title:"WARNING",type:"warning",children:(0,s.jsx)(n.p,{children:"All methods below are designed for internal use only. It's not recommended to call any of these methods."})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["AddNode(",(0,s.jsx)("span",{class:"DocItemParameter",children:"Type, Vector2"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public JungleNode AddNode(Type nodeType, Vector2 graphPosition)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Adds a Jungle Node to the Jungle Tree."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["AddNodes(",(0,s.jsx)("span",{class:"DocItemParameter",children:"JungleNode[], Vector2[]"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public JungleNode[] AddNodes(JungleNode[] jungleNodes, Vector2[] graphPositions)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Adds multiple Jungle Nodes to the Jungle Tree."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["RemoveNode(",(0,s.jsx)("span",{class:"DocItemParameter",children:"JungleNode"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public void RemoveNode(JungleNode jungleNode)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Removes a node from the Jungle Tree."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["RemoveNodes(",(0,s.jsx)("span",{class:"DocItemParameter",children:"JungleNode[]"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public void RemoveNodes(JungleNode[] jungleNodes)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Removes these nodes from the Jungle Tree."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["ConnectNodes(",(0,s.jsx)("span",{class:"DocItemParameter",children:"JungleNode, JungleNode, byte"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public bool ConnectNodes(JungleNode nodeA, JungleNode nodeB, byte portIndex)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Connects two Jungle Nodes together."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("span",{class:"DocItemTitle",children:["DisconnectNodes(",(0,s.jsx)("span",{class:"DocItemParameter",children:"JungleNode, JungleNode, byte"}),")"]}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"public bool DisconnectNodes(JungleNode nodeA, JungleNode nodeB, byte portIndex)"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"Disconnects two Jungle Nodes from each other."})]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>l});var s=r(7294);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);