"use strict";(self.webpackChunkjungle_website=self.webpackChunkjungle_website||[]).push([[3423],{5835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(5893),o=t(1151);const s={title:"Jungle Exception",sidebar_position:4},i=void 0,a={id:"extras/jungle-exception",title:"Jungle Exception",description:"Handling errors in Jungle is made easy using the Jungle Tree's error handler. The error handler catches any exceptions",source:"@site/docs/extras/jungle-exception.md",sourceDirName:"extras",slug:"/extras/jungle-exception",permalink:"/docs/extras/jungle-exception",draft:!1,unlisted:!1,editUrl:"https://github.com/Jacked-Up/junglesequencer.com/tree/prod/docs/extras/jungle-exception.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Jungle Exception",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Jungle Cache",permalink:"/docs/extras/jungle-cache"},next:{title:"Jungle Manifest",permalink:"/docs/extras/jungle-manifest"}},c={},l=[{value:"When to Throw Exceptions?",id:"when-to-throw-exceptions",level:2},{value:"Example",id:"example",level:4},{value:"Throwing an Exception",id:"throwing-an-exception",level:2},{value:"Example",id:"example-1",level:2}];function u(e){const n={code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Handling errors in Jungle is made easy using the Jungle Tree's error handler. The error handler catches any exceptions\r\nthrown by nodes during runtime. This error handler will then shut the node down ",(0,r.jsx)(n.strong,{children:"safely"})," and display the error in the\r\nconsole."]}),"\n",(0,r.jsx)(n.p,{children:"This is useful for displaying when a critical error occurs in your tree. That would prevent subsequent nodes from\r\nrunning, which could cause even more errors."}),"\n",(0,r.jsx)(n.h2,{id:"when-to-throw-exceptions",children:"When to Throw Exceptions?"}),"\n",(0,r.jsx)(n.p,{children:"You should only throw exceptions when a critical error that would break any subsequent nodes occurs."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Let's say you have a node that searches for a game object in the scene and outputs it. This would mean any nodes\r\nconnected to the output of this node would now be expecting a game object."}),"\n",(0,r.jsxs)(n.p,{children:["Now let's say that the node is ran and it cant find the game object in the scene. Well, now all connected nodes would be\r\nexpecting a game object, except they would be getting ",(0,r.jsx)(n.code,{children:"null"})," instead. This would cause a runtime error."]}),"\n",(0,r.jsx)(n.p,{children:"To prevent this, you should throw an exception if the game object is not found. This will prevent any subsequent nodes\r\nfrom running and more causing errors."}),"\n",(0,r.jsx)(n.h2,{id:"throwing-an-exception",children:"Throwing an Exception"}),"\n",(0,r.jsx)(n.p,{children:"Throwing exceptions is extremely easy."}),"\n",(0,r.jsxs)(n.p,{children:["You should always throw a ",(0,r.jsx)(n.code,{children:"JungleException"})," when an error occurs. This will ensure that the error is caught by the error\r\nhandler. You can also pass a message to the exception to display in the console."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'throw new JungleException("YOUR MESSAGE");\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can throw Jungle exceptions inside any inherited Jungle Node method."}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Here's an example of a node that outputs the name of the inputted game object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using Jungle;\r\n\r\n[NodeProperties(\r\n    Title = "Get Game Object Name",\r\n    Description = "Gets the inputted game objects name."\r\n)]\r\n[IONode(\r\n    InputPortName = "Object",\r\n    OutputPortName = "Object Name",\r\n    OutputPortType = typeof(string)\r\n)]\r\npublic class GetGameObjectNameNode : IONode<GameObject>\r\n{\r\n    protected override void OnStart(in GameObject gameObject)\r\n    {\r\n        if (gameObject == null)\r\n            throw new JungleException("Inputted game object was null.");\r\n            \r\n        CallAndStop(gameObject.name);\r\n    }\r\n    \r\n    protected override void OnUpdate() { }\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see, the inputted game object is crucial to the nodes output. If the input is wrong, then the output would be\r\nwrong too. Of course, we could instead output a default value such as an empty string, but that would be a bad practice\r\nbecause it would be hiding the error. ",(0,r.jsx)(n.strong,{children:"Remember that Jungle Trees are sequences, not code."})]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);