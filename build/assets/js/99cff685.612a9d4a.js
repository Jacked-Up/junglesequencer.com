"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[423],{5835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(5893),r=t(1151);const i={title:"Jungle Exception",sidebar_position:4},a=void 0,s={id:"extras/jungle-exception",title:"Jungle Exception",description:"Jungle has a builtin exception handler that will catch any exceptions thrown by your nodes. This is useful for debugging",source:"@site/docs/extras/jungle-exception.md",sourceDirName:"extras",slug:"/extras/jungle-exception",permalink:"/docs/extras/jungle-exception",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/extras/jungle-exception.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Jungle Exception",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Jungle Cache",permalink:"/docs/extras/jungle-cache"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},l={},c=[{value:"Throwing an Exception",id:"throwing-an-exception",level:2},{value:"Example",id:"example",level:2}];function u(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Jungle has a builtin exception handler that will catch any exceptions thrown by your nodes. This is useful for debugging\r\nyour nodes, as it will prevent your game from crashing if an exception is thrown. This could also protect against soft\r\nlocks."}),"\n",(0,o.jsxs)(n.p,{children:["Jungle Exceptions can be thrown ",(0,o.jsx)(n.strong,{children:"anywhere"})," within a node, and will be caught by the Jungle Exception Handler. The exception\r\nhandler will then log the exception and stop the Jungle Tree."]}),"\n",(0,o.jsx)(n.h2,{id:"throwing-an-exception",children:"Throwing an Exception"}),"\n",(0,o.jsxs)(n.p,{children:["To throw an exception, simply create a new ",(0,o.jsx)(n.code,{children:"JungleException"})," and pass in the exception message."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\nthrow new JungleException("Ahhh! Something went wrong!");\n'})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    // Node properties\r\n)]\r\n[IONode(\r\n    InputPortName = "Start",\r\n    InputPortType = typeof(float),\r\n    OutputPortName = "Next",\r\n    OutputPortType = typeof(Port.None)\r\n)]\r\npublic class MyNode : IONode\r\n{\r\n    protected override void OnStart(in object inputValue)\r\n    {\r\n        if (inputValue is float floatValue)\r\n        {\r\n            CallAndStop(floatValue * 2f);\r\n        }\r\n        else throw new JungleException("Input value is not a float!");\r\n    }\r\n\r\n    protected override void OnUpdate() { }\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the example above, we throw a ",(0,o.jsx)(n.code,{children:"JungleException"})," if the input value is not a float. This will be caught by the Jungle\r\nException Handler, which will log the exception and stop the Jungle Tree."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(7294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);