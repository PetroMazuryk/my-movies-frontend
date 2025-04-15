import{r as i,u as w,j as e,p as x,b as f,q as k,m as C}from"./index-85df350c.js";import{T as j}from"./TitleText-d5d75509.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),_=s=>{const t=v(s);return t.charAt(0).toUpperCase()+t.slice(1)},g=(...s)=>s.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=i.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:l="",children:o,iconNode:r,...m},d)=>i.createElement("svg",{ref:d,...N,width:t,height:t,stroke:s,strokeWidth:a?Number(n)*24/Number(t):n,className:g("lucide",l),...m},[...r.map(([u,h])=>i.createElement(u,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(s,t)=>{const n=i.forwardRef(({className:a,...l},o)=>i.createElement(L,{ref:o,iconNode:t,className:g(`lucide-${y(_(s))}`,`lucide-${s}`,a),...l}));return n.displayName=_(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],S=b("loader-circle",E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],R=b("mail-check",$),A="_resendContainer_lxrkm_1",B="_resendButton_lxrkm_9",I="_spinner_lxrkm_25",M="_message_lxrkm_29",p={resendContainer:A,resendButton:B,spinner:I,message:M},P=({email:s})=>{const t=w(),[n,a]=i.useState(!1),[l,o]=i.useState(""),[r,m]=i.useState(0),d=async()=>{if(!(r>0)){a(!0);try{await t(x({email:s})).unwrap(),o("Confirmation email has been resent!"),m(30)}catch{o("Error sending confirmation email. Please try again later.")}finally{a(!1)}}};return i.useEffect(()=>{let u;return r>0&&(u=setInterval(()=>{m(h=>h-1)},1e3)),()=>clearInterval(u)},[r]),e.jsxs("div",{className:p.resendContainer,children:[e.jsx("p",{children:"Якщо лист не прийшов."}),e.jsx("p",{children:"Відішліть його повторно, натиснувши на кнопку нижче"}),e.jsx("button",{onClick:d,className:p.resendButton,disabled:n||r>0,children:n?e.jsxs(e.Fragment,{children:[e.jsx(S,{className:p.spinner}),"Sending..."]}):r>0?`Resend email (${r}s)`:"Resend confirmation email"}),l&&e.jsx("p",{className:p.message,children:l})]})},T="_wrapper_b84cw_1",V="_email_b84cw_8",U="_message_b84cw_15",O="_buttons_b84cw_20",Z="_button_b84cw_20",q="_buttonSecondary_b84cw_28",D="_hint_b84cw_50",c={wrapper:T,email:V,message:U,buttons:O,button:Z,buttonSecondary:q,hint:D},H=()=>{var d;const s=f(k),t=C(),n=(s==null?void 0:s.email)||"",a=(d=n.split("@")[1])==null?void 0:d.toLowerCase(),o={"gmail.com":"https://mail.google.com","ukr.net":"https://mail.ukr.net","meta.ua":"https://mail.meta.ua","i.ua":"https://mail.i.ua","outlook.com":"https://outlook.live.com","yahoo.com":"https://mail.yahoo.com","icloud.com":"https://www.icloud.com/mail"}[a]||`https://${a}`,r=()=>{window.open(o,"_blank")},m=()=>{t("/login")};return e.jsxs("div",{className:c.wrapper,children:[e.jsx(j,{children:"Дякуємо за реєстрацію!"}),e.jsx("div",{className:c.email,children:"Щоб отримати доступ до своїх даних, будь ласка, підтвердіть свій email."}),e.jsxs("p",{className:c.message,children:["Ми надіслали лист на:",e.jsx("br",{}),e.jsx("span",{className:c.email,children:n})]}),e.jsxs("div",{className:c.buttons,children:[e.jsxs("button",{onClick:r,className:c.button,children:[e.jsx(R,{className:c.verifyIcon}),"Перейти до пошти"]}),e.jsx("button",{onClick:m,className:c.buttonSecondary,children:"Перейти до логіну"})]}),e.jsx("p",{className:c.hint,children:"Після підтвердження пошти, будь ласка, увійдіть у свій акаунт."}),e.jsx(P,{email:n})]})};export{H as default};
