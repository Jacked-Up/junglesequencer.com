"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[7946],{3716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(1151);const r={title:"Jungle Runtime",sidebar_position:0},l=void 0,o={id:"extras/jungle-runtime",title:"Jungle Runtime",description:"The Jungle Runtime has no public API. It is automatically managed by Jungle and should never be interacted with directly.",source:"@site/docs/extras/jungle-runtime.md",sourceDirName:"extras",slug:"/extras/jungle-runtime",permalink:"/docs/extras/jungle-runtime",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/extras/jungle-runtime.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Jungle Runtime",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Jungle Preferences",permalink:"/docs/using-the-editor/jungle-preferences"},next:{title:"Jungle Cache",permalink:"/docs/extras/jungle-cache"}},a={},c=[{value:"Calls",id:"calls",level:4}];function u(e){const n={admonition:"admonition",code:"code",em:"em",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"NO PUBLIC API",type:"info",children:(0,i.jsx)(n.p,{children:"The Jungle Runtime has no public API. It is automatically managed by Jungle and should never be interacted with directly."})}),"\n",(0,i.jsx)(n.p,{children:"The Jungle Runtime serves as the receptionist of Jungle. Its responsibility is to invoke callbacks when certain invocation\r\nevents happen."}),"\n",(0,i.jsxs)(n.p,{children:["An instance of the Jungle Runtime is ",(0,i.jsx)(n.strong,{children:"always"})," automatically created before the first scene loads. The Jungle Runtime\r\nis a singleton, meaning there can only be one instance of it at a time. The runtime also self-manages itself meaning you\r\nnever have to worry about creating or destroying it. The Jungle Runtime instance is automatically moved into the\r\n",(0,i.jsx)(n.code,{children:"DontDestroyOnLoad"})," scene, meaning it will persist between scene loads. This allows Jungle to continue running between\r\nscene loads."]}),"\n",(0,i.jsx)(n.admonition,{title:"INSTANTIATION AND DESTRUCTION",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Never"})," create a new instance of the Jungle Runtime."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Never"})," destroy the Jungle Runtime instance.\r\n",(0,i.jsx)("br",{}),(0,i.jsx)(n.em,{children:"Both actions could break Jungle and cause some unexpected behavior."})]}),"\n"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"calls",children:"Calls"}),"\n",(0,i.jsx)(n.p,{children:"The Jungle Runtime listens for three different methods:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Mono Behavior Update"}),"\n",(0,i.jsx)(n.li,{children:"Mono Behavior Fixed Update"}),"\n",(0,i.jsx)(n.li,{children:"Before Render Update"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When any of these calls are invoked, the Jungle Runtime will immediately report them to any running Jungle Trees.\r\n",(0,i.jsx)("br",{}),"In this way, a Jungle Trees update frequency can be ",(0,i.jsx)(n.strong,{children:"dynamic"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(7294);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);