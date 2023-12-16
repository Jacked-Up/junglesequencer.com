"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[463],{5286:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var s=i(5893),t=i(1151);const l={title:"Jungle Cache",sidebar_position:1},c=void 0,r={id:"extras/jungle-cache",title:"Jungle Cache",description:"The Jungle Cache has exposed API, but it is not recommended you call any methods on it directly.",source:"@site/docs/extras/jungle-cache.md",sourceDirName:"extras",slug:"/extras/jungle-cache",permalink:"/docs/extras/jungle-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/extras/jungle-cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Jungle Cache",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Jungle Runtime",permalink:"/docs/extras/jungle-runtime"},next:{title:"Jungle Exception",permalink:"/docs/extras/jungle-exception"}},o={},h=[{value:"Jungle Icon Cache",id:"jungle-icon-cache",level:2},{value:"Options",id:"options",level:3},{value:"Use Caching",id:"use-caching",level:4},{value:"Max Cache Size",id:"max-cache-size",level:4},{value:"API",id:"api",level:3},{value:"Jungle Tree Cache",id:"jungle-tree-cache",level:2},{value:"API",id:"api-1",level:3}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The Jungle Cache has exposed API, but it is ",(0,s.jsx)(n.strong,{children:"not"})," recommended you call any methods on it directly."]})}),"\n",(0,s.jsx)(n.p,{children:"The Jungle Cache is a system designed to speed up the Jungle Editor. The cache itself is never built to the application."}),"\n",(0,s.jsxs)(n.p,{children:["The Jungle Cache is a singleton instance. It can be accessed with ",(0,s.jsx)(n.code,{children:"JungleCache.instance"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"It includes two systems, the icon cache, and the Jungle Tree cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Q:"})," ",(0,s.jsx)(n.strong,{children:"Why cache the Jungle Nodes icons?"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"A:"})," Because caching the icons significantly improves the performance of the Jungle Editor."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Q:"})," ",(0,s.jsx)(n.strong,{children:"Why cache the Jungle Trees?"}),"\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"A:"})," This is not used for performance, but rather as a MUCH easier solution to fetching a list of all Jungle Trees\r\nin the project."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"jungle-icon-cache",children:"Jungle Icon Cache"}),"\n",(0,s.jsx)(n.p,{children:"Jungle has a smart caching system under the hood designed to speed up the Jungle Editors load time. The cache is smart\r\nand is rebuilt (if needed) each time your project is recompiled. The cache is always the absolute minimum size possible\r\nso that system memory is never wasted."}),"\n",(0,s.jsx)(n.p,{children:"The system groups nodes and icons together in a container. Since multiple Jungle Nodes will usually share a common icon,\r\nthis case is automatically detected and will associate the icon with all the Jungle Nodes while only caching the icon\r\nonce. This ensures the cache is as small as possible while also being as a performant as possible."}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.p,{children:"The Jungle Cache can be disabled in the Jungle Preferences window."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Window/Jungle/Preferences/Open"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot of Jungle Cache options",src:i(71).Z+"",width:"298",height:"66"})}),"\n",(0,s.jsx)(n.p,{children:"As seen above, the Jungle Cache has two options, enabling and disabling of the system, and the max cache size."}),"\n",(0,s.jsx)(n.h4,{id:"use-caching",children:"Use Caching"}),"\n",(0,s.jsx)(n.p,{children:"By disabling the cache, you will lose the performance of having the icons preloaded into your system memory, but will\r\nalso decrease the amount of memory used."}),"\n",(0,s.jsx)(n.admonition,{title:"RUNNING OUT OF MEMORY?",type:"info",children:(0,s.jsx)(n.p,{children:"Instead of disabling the cache, try turning the max cache size down. Also make sure the icons you use are not extremely\r\nlarge."})}),"\n",(0,s.jsx)(n.h4,{id:"max-cache-size",children:"Max Cache Size"}),"\n",(0,s.jsxs)(n.p,{children:["The max cache size is default set to 32. This should provide you with plenty of space for more icons. If you need more\r\nspace, always feel free to crank that number up. ",(0,s.jsx)(n.em,{children:"Having a massive cache size can cause the Unity Editor to crash from\r\nto insufficient system memory."})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Max Cache Size recommendations:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Memory"}),(0,s.jsx)(n.th,{children:"Max Cache Size"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4gb"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Disable Cache"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"8gb"}),(0,s.jsx)(n.td,{children:"16"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"16gb"}),(0,s.jsx)(n.td,{children:"32"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"32gb"}),(0,s.jsx)(n.td,{children:"64"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["64gb ",(0,s.jsx)(n.em,{children:"or more"})]}),(0,s.jsx)(n.td,{children:"128"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Do note that the absolute maximum size the cache can be is ",(0,s.jsx)(n.strong,{children:"128"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["The Jungle Cache API was exposed explicitly for the Jungle Editor systems that rely on it. ",(0,s.jsx)(n.strong,{children:"Calling the API is highly\r\ndiscouraged"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{title:"EDITOR ONLY",type:"warning",children:(0,s.jsx)(n.p,{children:"These methods only work in the Unity Editor."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using Jungle;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Builds the Jungle Cache."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public void BuildIconCache()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Clears the Jungle Cache."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public void ClearIconCache()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Fetches a types icon from the icon cache.\r\n",(0,s.jsx)("br",{}),(0,s.jsx)(n.em,{children:"If the requested type could not be found in the icon cache, the icon will instead be loaded directly."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public Texture TryGetIconFromCache(Type type)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The amount of allocated icons in the Jungle Cache."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public int GetCacheAllocationSize()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"jungle-tree-cache",children:"Jungle Tree Cache"}),"\n",(0,s.jsx)(n.p,{children:"The Jungle Tree cache was implemented to keep a reference to all Jungle Trees in the project at all times. This is used\r\nby systems such as the Jungle Validator which needs a persistent list of Jungle Trees to function."}),"\n",(0,s.jsx)(n.h3,{id:"api-1",children:"API"}),"\n",(0,s.jsx)(n.admonition,{title:"EDITOR ONLY",type:"warning",children:(0,s.jsx)(n.p,{children:"These methods only work in the Unity Editor."})}),"\n",(0,s.jsx)(n.p,{children:"Clears the Jungle Cache."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public void ClearIconCache()\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},71:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/jpeg;base64,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"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var s=i(7294);const t={},l=s.createContext(t);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);