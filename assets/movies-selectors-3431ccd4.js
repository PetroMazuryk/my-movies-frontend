import{j as d,r as ie,g as ue,h as ce,i as de,u as fe,k as pe,l as he}from"./index-55318867.js";import{T as ve,u as me}from"./useForm-0f319b49.js";const ye="_wrapper_vi786_1",ge="_title_vi786_5",se={wrapper:ye,title:ge},Re=({title:M,children:$})=>d.jsxs("div",{className:se.wrapper,children:[d.jsx("h4",{className:se.title,children:M}),$]}),be="_overlay_19ka7_1",xe="_modal_19ka7_14",ke="_close_19ka7_26",ae={overlay:be,modal:xe,close:ke},Ce=document.getElementById("modal-root"),je=({close:M,title:$,content:K,actions:h})=>{const r=({target:o,currentTarget:i,code:u})=>{(o===i||u==="Escape")&&M()};return ie.useEffect(()=>{const o=i=>r(i);return document.body.addEventListener("keydown",o),()=>document.body.removeEventListener("keydown",o)},[]),ue.createPortal(d.jsx("div",{onClick:r,className:ae.overlay,children:d.jsxs("div",{className:ae.modal,children:[d.jsx("span",{onClick:M,className:ae.close,children:"X"}),$&&d.jsx(ve,{children:"Edit Movie"}),K&&d.jsx("div",{children:K}),h&&d.jsx("div",{className:ae.actions,children:h})]})}),Ce)};var le={exports:{}};(function(M,$){(function(K,h){M.exports=h(ie)})(ce,function(K){return function(h){function r(i){if(o[i])return o[i].exports;var u=o[i]={exports:{},id:i,loaded:!1};return h[i].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}var o={};return r.m=h,r.c=o,r.p="",r(0)}([function(h,r,o){function i(l){return l&&l.__esModule?l:{default:l}}function u(l,e){var t={};for(var n in l)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);return t}function g(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}function m(l,e){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||typeof e!="object"&&typeof e!="function"?l:e}function j(l,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);l.prototype=Object.create(e&&e.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(l,e):l.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0;var y=Object.assign||function(l){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(l[n]=t[n])}return l},v=function(){function l(e,t){for(var n=0;n<t.length;n++){var p=t[n];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(e,p.key,p)}}return function(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}}(),x=o(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return i(x).default}});var k=o(11),s=i(k),b=o(9),a=i(b),O=o(5),X=i(O),P=o(2),I=function(l){function e(){var t;g(this,e);for(var n=arguments.length,p=Array(n),f=0;f<n;f++)p[f]=arguments[f];var c=m(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(p)));return c.setRef=c.setRef.bind(c),c.onBlur=c.onBlur.bind(c),c.onChange=c.onChange.bind(c),c}return j(e,l),v(e,[{key:"setRef",value:function(t){this.inputElement=t}},{key:"initTextMask",value:function(){var t=this.props,n=this.props.value;this.textMaskInputElement=(0,X.default)(y({inputElement:this.inputElement},t)),this.textMaskInputElement.update(n)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(t){var n=this.props,p=n.value,f=n.pipe,c=n.mask,z=n.guide,D=n.placeholderChar,q=n.showMask,_={guide:z,placeholderChar:D,showMask:q},G=typeof f=="function"&&typeof t.pipe=="function"?f.toString()!==t.pipe.toString():(0,P.isNil)(f)&&!(0,P.isNil)(t.pipe)||!(0,P.isNil)(f)&&(0,P.isNil)(t.pipe),N=c.toString()!==t.mask.toString(),A=Object.keys(_).some(function(T){return _[T]!==t[T]})||N||G,R=p!==this.inputElement.value;(R||A)&&this.initTextMask()}},{key:"render",value:function(){var n=this.props,p=n.render,f=u(n,["render"]);return delete f.mask,delete f.guide,delete f.pipe,delete f.placeholderChar,delete f.keepCharPositions,delete f.value,delete f.onBlur,delete f.onChange,delete f.showMask,p(this.setRef,y({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},f))}},{key:"onChange",value:function(t){this.textMaskInputElement.update(),typeof this.props.onChange=="function"&&this.props.onChange(t)}},{key:"onBlur",value:function(t){typeof this.props.onBlur=="function"&&this.props.onBlur(t)}}]),e}(s.default.PureComponent);r.default=I,I.propTypes={mask:a.default.oneOfType([a.default.array,a.default.func,a.default.bool,a.default.shape({mask:a.default.oneOfType([a.default.array,a.default.func]),pipe:a.default.func})]).isRequired,guide:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number]),pipe:a.default.func,placeholderChar:a.default.string,keepCharPositions:a.default.bool,showMask:a.default.bool},I.defaultProps={render:function(l,e){return s.default.createElement("input",y({ref:l},e))}}},function(h,r){Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(h,r,o){function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v.placeholderChar;if(!u(s))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(s.indexOf(b)!==-1)throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

`+("The placeholder character that was received is: "+JSON.stringify(b)+`

`)+("The mask that was received is: "+JSON.stringify(s)));return s.map(function(a){return a instanceof RegExp?b:a}).join("")}function u(s){return Array.isArray&&Array.isArray(s)||s instanceof Array}function g(s){return typeof s=="string"||s instanceof String}function m(s){return typeof s=="number"&&s.length===void 0&&!isNaN(s)}function j(s){return typeof s>"u"||s===null}function y(s){for(var b=[],a=void 0;a=s.indexOf(k),a!==-1;)b.push(a),s.splice(a,1);return{maskWithoutCaretTraps:s,indexes:b}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=i,r.isArray=u,r.isString=g,r.isNumber=m,r.isNil=j,r.processCaretTraps=y;var v=o(1),x=[],k="[]"},function(h,r,o){function i(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y,x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j,k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(0,g.isArray)(x)){if((typeof x>"u"?"undefined":u(x))!==m.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");x=x(v,k),x=(0,g.processCaretTraps)(x).maskWithoutCaretTraps}var s=k.guide,b=s===void 0||s,a=k.previousConformedValue,O=a===void 0?y:a,X=k.placeholderChar,P=X===void 0?m.placeholderChar:X,I=k.placeholder,l=I===void 0?(0,g.convertMaskToPlaceholder)(x,P):I,e=k.currentCaretPosition,t=k.keepCharPositions,n=b===!1&&O!==void 0,p=v.length,f=O.length,c=l.length,z=x.length,D=p-f,q=D>0,_=e+(q?-D:0),G=_+Math.abs(D);if(t===!0&&!q){for(var N=y,A=_;A<G;A++)l[A]===P&&(N+=P);v=v.slice(0,_)+N+v.slice(_,p)}for(var R=v.split(y).map(function(L,U){return{char:L,isNew:U>=_&&U<G}}),T=p-1;T>=0;T--){var C=R[T].char;if(C!==P){var W=T>=_&&f===z;C===l[W?T-D:T]&&R.splice(T,1)}}var S=y,Z=!1;e:for(var Q=0;Q<c;Q++){var ee=l[Q];if(ee===P){if(R.length>0)for(;R.length>0;){var te=R.shift(),Y=te.char,ne=te.isNew;if(Y===P&&n!==!0){S+=P;continue e}if(x[Q].test(Y)){if(t===!0&&ne!==!1&&O!==y&&b!==!1&&q){for(var re=R.length,H=null,B=0;B<re;B++){var J=R[B];if(J.char!==P&&J.isNew===!1)break;if(J.char===P){H=B;break}}H!==null?(S+=Y,R.splice(H,1)):Q--}else S+=Y;continue e}Z=!0}n===!1&&(S+=l.substr(Q,c));break}S+=ee}if(n&&q===!1){for(var V=null,w=0;w<S.length;w++)l[w]===P&&(V=w);S=V!==null?S.substr(0,V+1):y}return{conformedValue:S,meta:{someCharsRejected:Z}}}Object.defineProperty(r,"__esModule",{value:!0});var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v};r.default=i;var g=o(2),m=o(1),j=[],y=""},function(h,r){function o(g){var m=g.previousConformedValue,j=m===void 0?u:m,y=g.previousPlaceholder,v=y===void 0?u:y,x=g.currentCaretPosition,k=x===void 0?0:x,s=g.conformedValue,b=g.rawValue,a=g.placeholderChar,O=g.placeholder,X=g.indexesOfPipedChars,P=X===void 0?i:X,I=g.caretTrapIndexes,l=I===void 0?i:I;if(k===0||!b.length)return 0;var e=b.length,t=j.length,n=O.length,p=s.length,f=e-t,c=f>0,z=t===0,D=f>1&&!c&&!z;if(D)return k;var q=c&&(j===s||s===O),_=0,G=void 0,N=void 0;if(q)_=k-f;else{var A=s.toLowerCase(),R=b.toLowerCase(),T=R.substr(0,k).split(u),C=T.filter(function(E){return A.indexOf(E)!==-1});N=C[C.length-1];var W=v.substr(0,C.length).split(u).filter(function(E){return E!==a}).length,S=O.substr(0,C.length).split(u).filter(function(E){return E!==a}).length,Z=S!==W,Q=v[C.length-1]!==void 0&&O[C.length-2]!==void 0&&v[C.length-1]!==a&&v[C.length-1]!==O[C.length-1]&&v[C.length-1]===O[C.length-2];!c&&(Z||Q)&&W>0&&O.indexOf(N)>-1&&b[k]!==void 0&&(G=!0,N=b[k]);for(var ee=P.map(function(E){return A[E]}),te=ee.filter(function(E){return E===N}).length,Y=C.filter(function(E){return E===N}).length,ne=O.substr(0,O.indexOf(a)).split(u).filter(function(E,oe){return E===N&&b[oe]!==E}).length,re=ne+Y+te+(G?1:0),H=0,B=0;B<p;B++){var J=A[B];if(_=B+1,J===N&&H++,H>=re)break}}if(c){for(var V=_,w=_;w<=n;w++)if(O[w]===a&&(V=w),O[w]===a||l.indexOf(w)!==-1||w===n)return V}else if(G){for(var L=_-1;L>=0;L--)if(s[L]===N||l.indexOf(L)!==-1||L===0)return L}else for(var U=_;U>=0;U--)if(O[U-1]===a||l.indexOf(U)!==-1||U===0)return U}Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var i=[],u=""},function(h,r,o){function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(n){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,f=p.inputElement,c=p.mask,z=p.guide,D=p.pipe,q=p.placeholderChar,_=q===void 0?a.placeholderChar:q,G=p.keepCharPositions,N=G!==void 0&&G,A=p.showMask,R=A!==void 0&&A;if(typeof n>"u"&&(n=f.value),n!==t.previousConformedValue){(typeof c>"u"?"undefined":y(c))===P&&c.pipe!==void 0&&c.mask!==void 0&&(D=c.pipe,c=c.mask);var T=void 0,C=void 0;if(c instanceof Array&&(T=(0,b.convertMaskToPlaceholder)(c,_)),c!==!1){var W=m(n),S=f.selectionEnd,Z=t.previousConformedValue,Q=t.previousPlaceholder,ee=void 0;if((typeof c>"u"?"undefined":y(c))===a.strFunction){if(C=c(W,{currentCaretPosition:S,previousConformedValue:Z,placeholderChar:_}),C===!1)return;var te=(0,b.processCaretTraps)(C),Y=te.maskWithoutCaretTraps,ne=te.indexes;C=Y,ee=ne,T=(0,b.convertMaskToPlaceholder)(C,_)}else C=c;var re={previousConformedValue:Z,guide:z,placeholderChar:_,pipe:D,placeholder:T,currentCaretPosition:S,keepCharPositions:N},H=(0,s.default)(W,C,re),B=H.conformedValue,J=(typeof D>"u"?"undefined":y(D))===a.strFunction,V={};J&&(V=D(B,j({rawValue:W},re)),V===!1?V={value:Z,rejected:!0}:(0,b.isString)(V)&&(V={value:V}));var w=J?V.value:B,L=(0,x.default)({previousConformedValue:Z,previousPlaceholder:Q,conformedValue:w,placeholder:T,rawValue:W,currentCaretPosition:S,placeholderChar:_,indexesOfPipedChars:V.indexesOfPipedChars,caretTrapIndexes:ee}),U=w===T&&L===0,E=R?T:O,oe=U?E:w;t.previousConformedValue=oe,t.previousPlaceholder=T,f.value!==oe&&(f.value=oe,g(f,L))}}}}}function g(e,t){document.activeElement===e&&(I?l(function(){return e.setSelectionRange(t,t,X)},0):e.setSelectionRange(t,t,X))}function m(e){if((0,b.isString)(e))return e;if((0,b.isNumber)(e))return String(e);if(e==null)return O;throw new Error(`The 'value' provided to Text Mask needs to be a string or a number. The value received was:

 `+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&(e[p]=n[p])}return e},y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=u;var v=o(4),x=i(v),k=o(3),s=i(k),b=o(2),a=o(1),O="",X="none",P="object",I=typeof navigator<"u"&&/Android/i.test(navigator.userAgent),l=typeof requestAnimationFrame<"u"?requestAnimationFrame:setTimeout},function(h,r){function o(u){return function(){return u}}var i=function(){};i.thatReturns=o,i.thatReturnsFalse=o(!1),i.thatReturnsTrue=o(!0),i.thatReturnsNull=o(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(u){return u},h.exports=i},function(h,r,o){function i(u,g,m,j,y,v,x,k){if(!u){var s;if(g===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var b=[m,j,y,v,x,k],a=0;s=new Error(g.replace(/%s/g,function(){return b[a++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}h.exports=i},function(h,r,o){var i=o(6),u=o(7),g=o(10);h.exports=function(){function m(v,x,k,s,b,a){a!==g&&u(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function j(){return m}m.isRequired=m;var y={array:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:j,element:m,instanceOf:j,node:m,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j};return y.checkPropTypes=i,y.PropTypes=y,y}},function(h,r,o){h.exports=o(8)()},function(h,r){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";h.exports=o},function(h,r){h.exports=K}])})})(le);var _e=le.exports;const Oe=de(_e),Te="_form_1ajdo_1",Me="_formGroup_1ajdo_11",Pe="_textField_1ajdo_25",we="_checkbox_1ajdo_40",Ee="_btn_1ajdo_57",F={form:Te,formGroup:Me,textField:Pe,checkbox:we,btn:Ee},Ne=({onSubmit:M,initialState:$,onCancel:K})=>{const{state:h,handleChange:r,handleSubmit:o}=me({initialState:$,onSubmit:M}),{title:i,director:u,favorite:g,genre:m,releaseDate:j}=h,y=[/\d/,/\d/,/\d/,/\d/],v=x=>{x.preventDefault(),K&&K()};return d.jsxs("form",{onSubmit:o,className:F.form,encType:"multipart/form-data",children:[d.jsxs("div",{className:F.formGroup,children:[d.jsx("label",{children:"Movie title"}),d.jsx("input",{value:i||"",name:"title",onChange:r,className:F.textField,placeholder:"Movie title",required:!0})]}),d.jsxs("div",{className:F.formGroup,children:[d.jsx("label",{children:"Movie director"}),d.jsx("input",{value:u||"",name:"director",onChange:r,className:F.textField,placeholder:"Movie director",required:!0})]}),d.jsxs("div",{className:F.formGroup,children:[d.jsx("label",{children:"Favorite"}),d.jsx("input",{checked:!!g,name:"favorite",onChange:r,className:F.checkbox,type:"checkbox"})]}),d.jsxs("div",{className:F.formGroup,children:[d.jsx("label",{children:"Movie genre"}),d.jsxs("select",{name:"genre",value:m||"fantastic",onChange:r,className:F.textField,children:[d.jsx("option",{value:"fantastic",children:"Fantastic"}),d.jsx("option",{value:"love story",children:"Love story"})]})]}),d.jsxs("div",{className:F.formGroup,children:[d.jsx("label",{children:"Movie release date"}),d.jsx(Oe,{mask:y,value:j||"",name:"releaseDate",onChange:r,className:F.textField,placeholder:"YYYY",required:!0})]}),d.jsxs("div",{className:F.formGroup,children:[d.jsx("label",{children:"Poster"}),d.jsx("input",{name:"poster",type:"file",onChange:r})]}),d.jsx("button",{className:F.btn,onClick:v,children:"Cancel"}),d.jsx("button",{className:F.btn,type:"submit",children:"Edit Movie"})]})},Fe=({movie:M,className:$})=>{const[K,h]=ie.useState(!1),r=fe(),o=()=>h(!0),i=()=>h(!1),u=g=>{r(pe({id:M._id,data:g})),i()};return d.jsxs("div",{children:[d.jsx("button",{className:$,onClick:o,children:"Edit"}),K&&d.jsx(je,{close:i,title:"Edit Movie",content:d.jsx(Ne,{initialState:{title:M.title,director:M.director,favorite:M.favorite,genre:M.genre,releaseDate:M.releaseDate,poster:null},onSubmit:u,onCancel:i})})]})},Ae="/my-movies-frontend/assets/sprite-718573d4.svg",Se=({movies:M})=>M.items,Be=he([Se],M=>M.filter(({favorite:$})=>$));export{Fe as E,Oe as M,Re as a,Be as b,Se as g,Ae as i,F as s};