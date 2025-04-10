import{r as n,o as w,p as j,u as k,j as a,q as M}from"./index-222a1816.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),g=s=>{const e=b(s);return e.charAt(0).toUpperCase()+e.slice(1)},h=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=n.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:d,...f},m)=>n.createElement("svg",{ref:m,...I,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:h("lucide",l),...f},[...d.map(([u,c])=>n.createElement(u,c)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(s,e)=>{const t=n.forwardRef(({className:r,...l},i)=>n.createElement(L,{ref:i,iconNode:e,className:h(`lucide-${N(g(s))}`,`lucide-${s}`,r),...l}));return t.displayName=g(s),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],S=p("loader-circle",E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],R=p("mail-check",T),A="_verifyContainer_dr129_1",B="_verifyCard_dr129_9",$="_verifyIcon_dr129_19",P="_verifyTitle_dr129_25",V="_verifyText_dr129_31",U="_verifyButton_dr129_37",W="_spinner_dr129_52",Z="_successMessage_dr129_56",q="_errorMessage_dr129_62",o={verifyContainer:A,verifyCard:B,verifyIcon:$,verifyTitle:P,verifyText:V,verifyButton:U,spinner:W,successMessage:Z,errorMessage:q},F=()=>{var _;const s=w(),e=j(),t=k(),r=((_=s.state)==null?void 0:_.email)||"",[l,i]=n.useState(""),[d,f]=n.useState(!1),[m,u]=n.useState(!1),[c,v]=n.useState(0),C=async()=>{if(!(!r||c>0)){f(!0);try{await t(M({email:r})).unwrap(),i("Confirmation email has been resent!"),u(!0),v(30)}catch{i("Something went wrong. Please try again later."),u(!1)}finally{f(!1)}}};return n.useEffect(()=>{r||e("/register")},[r,e]),n.useEffect(()=>{let y;return c>0&&(y=setInterval(()=>{v(x=>x-1)},1e3)),()=>clearInterval(y)},[c]),a.jsx("div",{className:o.verifyContainer,children:a.jsxs("div",{className:o.verifyCard,children:[a.jsx(R,{className:o.verifyIcon}),a.jsx("h2",{className:o.verifyTitle,children:"Please verify your email"}),a.jsxs("p",{className:o.verifyText,children:["We’ve sent a confirmation link to ",a.jsx("strong",{children:r}),". Please check your inbox."]}),a.jsx("button",{onClick:C,className:o.verifyButton,disabled:d||c>0,children:d?a.jsxs(a.Fragment,{children:[a.jsx(S,{className:o.spinner}),"Sending..."]}):c>0?`Resend email (${c}s)`:"Resend email"}),l&&a.jsx("p",{className:m?o.successMessage:o.errorMessage,children:l})]})})};export{F as default};
