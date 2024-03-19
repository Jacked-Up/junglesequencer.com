"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[338],{2661:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(5893),i=s(1151);const r={title:"Jungle Manifest",sidebar_position:4,slug:"/jungle-manifest"},o=void 0,c={id:"documentation/jungle-manifest",title:"Jungle Manifest",description:"The Jungle Manifest is a file used to store metadata about the tree.",source:"@site/docs/documentation/jungle-manifest.mdx",sourceDirName:"documentation",slug:"/jungle-manifest",permalink:"/docs/jungle-manifest",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/documentation/jungle-manifest.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Jungle Manifest",sidebar_position:4,slug:"/jungle-manifest"},sidebar:"documentationSidebar",previous:{title:"Jungle Tree",permalink:"/docs/jungle-tree"},next:{title:"Jungle Player",permalink:"/docs/jungle-player"}},a={},l=[{value:"Code Reference",id:"code-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Editor View Port",id:"editor-view-port",level:4},{value:"Nodes",id:"nodes",level:4},{value:"Sticky Notes",id:"sticky-notes",level:4}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Jungle Manifest is a file used to store metadata about the tree."}),"\n",(0,n.jsx)(t.p,{children:"The manifest is automatically created when a new tree is added to the project.\r\nThe manifest is not built to the application and is only available in the Unity Editor."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"code-reference",children:"Code Reference"}),"\n",(0,n.jsx)(t.admonition,{title:"WARNING",type:"warning",children:(0,n.jsx)(t.p,{children:"The manifest is not built to the application and is only available in the Unity Editor.\r\nEnsure you are only calling these methods from an editor script."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Namespace: ",(0,n.jsx)(t.code,{children:"Jungle"})]})}),"\n",(0,n.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("span",{class:"DocItemTitle",children:"JungleTree"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleTree JungleTree { get; }"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"The Jungle Tree this manifest belongs to."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("span",{class:"DocItemTitle",children:"ViewPosition"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public Vector3 ViewPosition { get; }"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"The view port position in the Jungle Editor."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("span",{class:"DocItemTitle",children:"ViewScale"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public Vector3 ViewScale { get; }"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"The view port zoom scale in the Jungle Editor."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("span",{class:"DocItemTitle",children:"NodeManifest"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleNodeData[] NodeManifest { get; }"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"List of node meta data for nodes that are currently in the tree."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("span",{class:"DocItemTitle",children:"NodeArchive"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleNodeData[] NodeArchive { get; }"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"List of saved node meta data for nodes that mysteriously disappeared."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("span",{class:"DocItemTitle",children:"StickyNoteManifest"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData[] StickyNoteManifest { get; }"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"List of sticky note meta data for sticky notes that are currently in the tree."})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h4,{id:"editor-view-port",children:"Editor View Port"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["SetViewPosition(",(0,n.jsx)("span",{class:"DocItemParameter",children:"Vector2, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public void SetViewPosition(Vector2 position, bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Sets the view position of the Jungle Editor."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["SetViewScale(",(0,n.jsx)("span",{class:"DocItemParameter",children:"Vector2, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public void SetViewScale(Vector2 scale, bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Sets the view scale of the Jungle Editor."})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h4,{id:"nodes",children:"Nodes"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["AddNodeData(",(0,n.jsx)("span",{class:"DocItemParameter",children:"JungleNode"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleNodeData AddNodeData(JungleNode jungleNode)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Adds a node to the manifest."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["RemoveNodeMeta(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public void RemoveNodeMeta(string uid)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Removes a node from the manifest."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["UpdateNodeGraphPosition(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string, Vector2, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleNodeData UpdateNodeGraphPosition(string uid, Vector2 graphPosition, bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Updates a node's graph position."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["GetNodeData(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleNodeData GetNodeData(string uid)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Gets a node's meta data."})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h4,{id:"sticky-notes",children:"Sticky Notes"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["AddStickyNoteData(",(0,n.jsx)("span",{class:"DocItemParameter",children:"bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData AddStickyNoteData(bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Adds a new sticky note to the manifest."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["RemoveStickyNoteData(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData AddStickyNoteData(bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Adds a new sticky note to the manifest."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["UpdateStickyNoteGraphPosition(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string, Vector2, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData UpdateStickyNoteGraphPosition(string uid, Vector2 graphPosition, bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Updates a sticky note's graph position."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["UpdateStickyNoteGraphSize(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string, Vector2, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData UpdateStickyNoteGraphPosition(string uid, Vector2 graphSize, bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Updates a sticky note's graph size."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["UpdateStickyNoteContent(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string, string, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData UpdateStickyNoteGraphPosition(string uid, string content, bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Updates a sticky note's content."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["UpdateStickyNoteTheme(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string, JungleStickyNoteData.Themes, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData UpdateStickyNoteGraphPosition(string uid, JungleStickyNoteData.Themes theme, bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Updates a sticky note's theme."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["UpdateStickyNoteIsLocked(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string, bool, bool"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData UpdateStickyNoteGraphPosition(string uid, bool isLocked, bool recordUndo = true)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Updates a sticky note's lock state."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)("span",{class:"DocItemTitle",children:["GetStickyNoteData(",(0,n.jsx)("span",{class:"DocItemParameter",children:"string"}),")"]}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"public JungleStickyNoteData GetStickyNoteData(string uid)"}),"\r\n",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"Gets a sticky note's meta data."})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>o});var n=s(7294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);