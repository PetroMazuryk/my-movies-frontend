import{r as i,u as w,j as s,p as x,b,q as f,m as C}from"./index-0b14f4bf.js";import{T as j}from"./TitleText-7f90da00.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),_=e=>{const t=v(e);return t.charAt(0).toUpperCase()+t.slice(1)},g=(...e)=>e.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:l="",children:o,iconNode:r,...m},d)=>i.createElement("svg",{ref:d,...k,width:t,height:t,stroke:e,strokeWidth:a?Number(n)*24/Number(t):n,className:g("lucide",l),...m},[...r.map(([u,h])=>i.createElement(u,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,t)=>{const n=i.forwardRef(({className:a,...l},o)=>i.createElement(N,{ref:o,iconNode:t,className:g(`lucide-${y(_(e))}`,`lucide-${e}`,a),...l}));return n.displayName=_(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],S=L("loader-circle",E),$="_resendContainer_1i2hu_1",R="_resendButton_1i2hu_9",A="_spinner_1i2hu_25",B="_message_1i2hu_29",p={resendContainer:$,resendButton:R,spinner:A,message:B},P=({email:e})=>{const t=w(),[n,a]=i.useState(!1),[l,o]=i.useState(""),[r,m]=i.useState(0),d=async()=>{if(!(r>0)){a(!0);try{await t(x({email:e})).unwrap(),o("Confirmation email has been resent!"),m(30)}catch{o("Error sending confirmation email. Please try again later.")}finally{a(!1)}}};return i.useEffect(()=>{let u;return r>0&&(u=setInterval(()=>{m(h=>h-1)},1e3)),()=>clearInterval(u)},[r]),s.jsxs("div",{className:p.resendContainer,children:[s.jsx("p",{children:"Якщо лист не прийшов."}),s.jsx("p",{children:"Відішліть його повторно, натиснувши на кнопку нижче"}),s.jsx("button",{onClick:d,className:p.resendButton,disabled:n||r>0,children:n?s.jsxs(s.Fragment,{children:[s.jsx(S,{className:p.spinner}),"Sending..."]}):r>0?`Resend email (${r}s)`:"Resend confirmation email"}),l&&s.jsx("p",{className:p.message,children:l})]})},I="_wrapper_3s7uc_1",T="_email_3s7uc_8",M="_message_3s7uc_15",U="_buttons_3s7uc_20",V="_button_3s7uc_20",O="_buttonSecondary_3s7uc_28",Z="_hint_3s7uc_47",c={wrapper:I,email:T,message:M,buttons:U,button:V,buttonSecondary:O,hint:Z},F=()=>{var d;const e=b(f),t=C(),n=(e==null?void 0:e.email)||"",a=(d=n.split("@")[1])==null?void 0:d.toLowerCase(),o={"gmail.com":"https://mail.google.com","ukr.net":"https://mail.ukr.net","meta.ua":"https://mail.meta.ua","i.ua":"https://mail.i.ua","outlook.com":"https://outlook.live.com","yahoo.com":"https://mail.yahoo.com","icloud.com":"https://www.icloud.com/mail"}[a]||`https://${a}`,r=()=>{window.open(o,"_blank")},m=()=>{t("/login")};return s.jsxs("div",{className:c.wrapper,children:[s.jsx(j,{children:"Дякуємо за реєстрацію!"}),s.jsx("div",{className:c.email,children:"Щоб отримати доступ до своїх даних, будь ласка, підтвердіть свій email."}),s.jsxs("p",{className:c.message,children:["Ми надіслали лист на:",s.jsx("br",{}),s.jsx("span",{className:c.email,children:n})]}),s.jsxs("div",{className:c.buttons,children:[s.jsx("button",{onClick:r,className:c.button,children:"Перейти до пошти"}),s.jsx("button",{onClick:m,className:c.buttonSecondary,children:"Перейти до логіну"})]}),s.jsx("p",{className:c.hint,children:"Після підтвердження пошти, будь ласка, увійдіть у свій акаунт."}),s.jsx(P,{email:n})]})};export{F as default};
