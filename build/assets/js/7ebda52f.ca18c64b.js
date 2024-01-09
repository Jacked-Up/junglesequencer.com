"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[385],{6526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(5893),i=t(1151);const r={title:"Node Editor Context",sidebar_position:3},d=void 0,s={id:"jungle-nodes/advanced/node-editor-context",title:"Node Editor Context",description:"Editor context simply refers to information reflected into the editor from your nodes.",source:"@site/docs/jungle-nodes/advanced/node-editor-context.md",sourceDirName:"jungle-nodes/advanced",slug:"/jungle-nodes/advanced/node-editor-context",permalink:"/docs/jungle-nodes/advanced/node-editor-context",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/jungle-nodes/advanced/node-editor-context.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Node Editor Context",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Declaring Validation Issues",permalink:"/docs/jungle-nodes/advanced/declaring-validation-issues"},next:{title:"Jungle Exception",permalink:"/docs/jungle-nodes/advanced/jungle-exception"}},a={},l=[{value:"Node Details",id:"node-details",level:2},{value:"Result in Editor",id:"result-in-editor",level:4}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Editor context simply refers to information reflected into the editor from your nodes.\r\nThis is useful for things like showing the current value of a node, or the current state of a node."}),"\n",(0,o.jsx)(n.admonition,{title:"TIP",type:"tip",children:(0,o.jsxs)(n.p,{children:["Providing too much information in the editor can be overwhelming.\r\n",(0,o.jsx)(n.strong,{children:"Be careful to only display information that is useful."})]})}),"\n",(0,o.jsx)(n.h2,{id:"node-details",children:"Node Details"}),"\n",(0,o.jsxs)(n.p,{children:["When you want to display information about a node in the editor, you can very easily override the ",(0,o.jsx)(n.code,{children:"GetDetails"})," method\r\nin your node class. This method returns a ",(0,o.jsx)(n.code,{children:"string"})," which is then displayed in the editor under your node."]}),"\n",(0,o.jsx)(n.p,{children:"This box is great for display information to the developer without requiring them to click anything.\r\nIt's as simple as looking and reading."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Find Game Object"})," node is a great example of how to effectively use node details.\r\nAs you can see, the box is used to display what game object the node will try to find when it runs."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Details container find game object node example",src:t(1369).Z+"",width:"347",height:"213"})}),"\n",(0,o.jsx)(n.p,{children:"Without selecting the node at all, the developer can see what game object the node will try to find."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.admonition,{title:"EXAMPLE",type:"info",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'[NodeProperties(\r\n    Title = "Hello World",\r\n    Color = Purple\r\n)]\r\npublic class HelloWorldNode : GenericNode\r\n{\r\n    protected override void OnStart() { }\r\n\r\n    protected override void OnUpdate() { }\r\n\r\n    public override string GetDetails()\r\n    {\r\n        return "Hello, World!";\r\n    }\r\n}\n'})}),(0,o.jsx)(n.h4,{id:"result-in-editor",children:"Result in Editor"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Node Details container example",src:t(1632).Z+"",width:"286",height:"245"})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1632:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/details-container-example-de3c8f86e2aaf485e2701fa141756ed6.png"},1369:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/details-container-find-game-object-node-example-49d85eaf2fe337bbc60412d35096996d.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var o=t(7294);const i={},r=o.createContext(i);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);