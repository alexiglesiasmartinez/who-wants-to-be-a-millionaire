(this["webpackJsonpquiz-game"]=this["webpackJsonpquiz-game"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(5),a=c.n(s),i=c(2),o=(c(10),c(3)),u=c.p+"static/media/play.0011158b.mp3",l=c.p+"static/media/correct.62721562.mp3",j=c.p+"static/media/wrong.1c660858.mp3",d=c.p+"static/media/youWon.2daa6174.mp3",m=c(0),b=function(e){var t=e.data,c=e.setStop,r=e.questionNumber,s=e.setQuestionNumber,a=Object(n.useState)(null),b=Object(i.a)(a,2),x=b[0],O=b[1],h=Object(n.useState)(null),f=Object(i.a)(h,2),v=f[0],p=f[1],N=Object(n.useState)("answer"),w=Object(i.a)(N,2),y=w[0],g=w[1],q=Object(o.a)(u,{volume:.1}),S=Object(i.a)(q,1)[0],k=Object(o.a)(l,{volume:.4}),I=Object(i.a)(k,1)[0],W=Object(o.a)(j,{volume:.4}),E=Object(i.a)(W,1)[0],R=Object(o.a)(d,{volume:.4}),A=Object(i.a)(R,1)[0];Object(n.useEffect)((function(){S()}),[S]),Object(n.useEffect)((function(){O(t[r-1])}),[t,r]);var C=function(e,t){setTimeout((function(){t()}),e)};return Object(m.jsxs)("div",{className:"quiz",children:[Object(m.jsx)("div",{className:"question",children:null===x||void 0===x?void 0:x.question}),Object(m.jsx)("div",{className:"answers",children:null===x||void 0===x?void 0:x.answers.map((function(e){return Object(m.jsx)("div",{className:v===e?y:"answer",onClick:function(){return function(e){p(e),g("answer active"),C(1800,(function(){return g(e.correct?"answer correct":"answer wrong")})),C(4800,(function(){e.correct?(I(),C(0,(function(){s((function(e){return e+1})),p(null)}))):(E(),C(2500,(function(){c(!0)}))),10===x.id&&(A(),c(!0))}))}(e)},children:e.text})}))})]})},x=function(e){var t=e.setStop,c=e.questionNumber,r=Object(n.useState)(30),s=Object(i.a)(r,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){if(0===a)return t(!0);var e=setInterval((function(){o((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}),[a,t]),Object(n.useEffect)((function(){o(30)}),[c]),a},O=(c(12),function(e){var t=e.setUsername,c=Object(n.useRef)();return Object(m.jsxs)("div",{className:"start",children:[Object(m.jsx)("input",{placeholder:"Enter your name ...",className:"startInput",ref:c}),Object(m.jsx)("button",{className:"startButton",onClick:function(){c.current.value&&t(c.current.value)},children:"START"}),Object(m.jsxs)("div",{className:"startRules",children:[Object(m.jsx)("h1",{className:"startRulesTitle",children:"You should know:"}),Object(m.jsxs)("p",{className:"startRulesElement",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"1.000\u20ac to gain"]}),Object(m.jsxs)("p",{className:"startRulesElement",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"10 questions to win"]}),Object(m.jsxs)("p",{className:"startRulesElement",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"30 seconds to answer"]})]})]})}),h=function(e){var t=e.myUserName;return Object(m.jsx)("h2",{children:t})},f=(c(13),function(){return Object(m.jsx)("div",{className:"visit-me",children:Object(m.jsx)("a",{href:"https://www.alexiglesias.in/#work",target:"__blank",className:"visit-me-link",children:"Go back"})})}),v=(c(14),function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(1),a=Object(i.a)(s,2),o=a[0],u=a[1],l=Object(n.useState)(!1),j=Object(i.a)(l,2),d=j[0],v=j[1],p=Object(n.useState)("0\u20ac"),N=Object(i.a)(p,2),w=N[0],y=N[1],g=Object(n.useMemo)((function(){return[{id:1,amount:"100\u20ac"},{id:2,amount:"200\u20ac"},{id:3,amount:"300\u20ac"},{id:4,amount:"400\u20ac"},{id:5,amount:"500\u20ac"},{id:6,amount:"600\u20ac"},{id:7,amount:"700\u20ac"},{id:8,amount:"800\u20ac"},{id:9,amount:"900\u20ac"},{id:10,amount:"1.000\u20ac"}].reverse()}),[]);Object(n.useEffect)((function(){o>1&&y(g.find((function(e){return e.id===o-1})).amount)}),[g,o]);return Object(m.jsxs)("div",{className:"app",children:[c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"main",children:d?Object(m.jsxs)("div",{className:"gameOver",children:[Object(m.jsxs)("h1",{className:"gameOverText",children:["You earned: ",w]}),Object(m.jsx)("button",{className:"gameOverTryAgain",onClick:function(){r(null),v(!1),u(1),y("0\u20ac")},children:"Try again!"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("div",{className:"timer",children:Object(m.jsx)(x,{setStop:v,questionNumber:o})}),Object(m.jsx)("div",{className:"usernameContainer",children:Object(m.jsx)(h,{myUserName:c})})]}),Object(m.jsx)("div",{className:"bottom",children:Object(m.jsx)(b,{data:[{id:1,question:"In what year did man go to the moon?",answers:[{text:"1967",correct:!1},{text:"1968",correct:!1},{text:"1969",correct:!0},{text:"1970",correct:!1}]},{id:2,question:"What is the longest river in the world?",answers:[{text:"Nile",correct:!1},{text:"Amazon",correct:!0},{text:"Yangts\xe9",correct:!1},{text:"Misisipi",correct:!1}]},{id:3,question:"In what year did World War II end?",answers:[{text:"1944",correct:!1},{text:"1945",correct:!0},{text:"1946",correct:!1},{text:"1947",correct:!1}]},{id:4,question:"Rolex is a company that specializes in what type of product?",answers:[{text:"Phone",correct:!1},{text:"Watches",correct:!0},{text:"Cars",correct:!1},{text:"Cosmetic",correct:!1}]},{id:5,question:"When was created the website Facebook launch?",answers:[{text:"2004",correct:!0},{text:"2005",correct:!1},{text:"2006",correct:!1},{text:"2007",correct:!1}]},{id:6,question:"Who played the character of harry potter in movie?",answers:[{text:"Johnny Deep",correct:!1},{text:"Leonardo Di Caprio",correct:!1},{text:"Denzel Washington",correct:!1},{text:"Daniel Red Cliff",correct:!0}]},{id:7,question:"What are humans?",answers:[{text:"Omnivores",correct:!0},{text:"Herbivores",correct:!1},{text:"Carnivores",correct:!1},{text:"Depends on race",correct:!1}]},{id:8,question:" What is the largest ocean?",answers:[{text:"Pacific ocean",correct:!0},{text:"Atlantic ocean",correct:!1},{text:"Arctic Ocean",correct:!1},{text:"Indian ocean",correct:!1}]},{id:9,question:"Where in the body is insulin produced?",answers:[{text:"Pancreas",correct:!0},{text:"Kidney",correct:!1},{text:"Spleen",correct:!1},{text:"Liver",correct:!1}]},{id:10,question:"Who was the founder of the NSDAP party?",answers:[{text:"Adolf Hitler",correct:!1},{text:"Joseph Goebbels",correct:!1},{text:"Rudolf Hess",correct:!1},{text:"Anton Drexler",correct:!0}]}],setStop:v,questionNumber:o,setQuestionNumber:u})})]})}),Object(m.jsx)("div",{className:"pyramid",children:Object(m.jsx)("ul",{className:"moneyList",children:g.map((function(e){return Object(m.jsxs)("li",{className:e.id===o?"moneyListItem active":"moneyListItem",children:[Object(m.jsx)("span",{className:"moneyListItemNumber",children:e.id}),Object(m.jsx)("span",{className:"moneyListItemAmount",children:e.amount})]})}))})})]}):Object(m.jsx)(O,{setUsername:r}),Object(m.jsx)(f,{})]})});a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.757cac08.chunk.js.map