import{j as a,r as se,c as fe,g as pe,u as de,a as he,f as me,b as ve,d as ye}from"./index-c9b465fc.js";import{u as ge}from"./useForm-8edd2115.js";import{g as be}from"./movies-selectors-0d1c964c.js";const xe="_wrapper_kfp2p_1",ke="_title_kfp2p_5",ie={wrapper:xe,title:ke},le=({title:U,children:R})=>a.jsxs("div",{className:ie.wrapper,children:[a.jsx("h4",{className:ie.title,children:U}),R]}),_e="_list_z28du_1",Ce="_listItem_z28du_8",je="_posterWrapper_z28du_21",Te="_listItemPoster_z28du_33",Oe="_listItemInfo_z28du_45",Pe="_button_z28du_59",ne={list:_e,listItem:Ce,posterWrapper:je,listItemPoster:Te,listItemInfo:Oe,button:Pe},Me="http://localhost:4444",we=({items:U,onDeleteMovie:R})=>{const A=se.useRef(null),y=U.map(({_id:r,title:i,director:u,genre:f,poster:v,releaseDate:h})=>a.jsxs("li",{className:ne.listItem,children:[v&&a.jsx("div",{className:ne.posterWrapper,children:a.jsx("img",{ref:A,className:ne.listItemPoster,src:`${Me}/${v}`,alt:`Poster for ${i}`})}),a.jsxs("div",{className:ne.listItemInfo,children:[a.jsxs("h2",{children:["Назва: ",i]}),a.jsxs("span",{children:["Director: ",u]}),a.jsxs("span",{children:["Genre: ",f]}),a.jsxs("span",{children:["Release: ",h]})]}),a.jsx("button",{className:ne.button,onClick:()=>R(r),children:"Delete"})]},r));return a.jsx("ol",{className:ne.list,children:y})};var ce={exports:{}};(function(U,R){(function(A,y){U.exports=y(se)})(fe,function(A){return function(y){function r(u){if(i[u])return i[u].exports;var f=i[u]={exports:{},id:u,loaded:!1};return y[u].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}var i={};return r.m=y,r.c=i,r.p="",r(0)}([function(y,r,i){function u(l){return l&&l.__esModule?l:{default:l}}function f(l,e){var t={};for(var n in l)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);return t}function v(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}function h(l,e){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||typeof e!="object"&&typeof e!="function"?l:e}function x(l,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);l.prototype=Object.create(e&&e.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(l,e):l.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0;var m=Object.assign||function(l){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(l[n]=t[n])}return l},g=function(){function l(e,t){for(var n=0;n<t.length;n++){var d=t[n];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}return function(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}}(),C=i(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return u(C).default}});var k=i(11),s=u(k),b=i(9),o=u(b),T=i(5),z=u(T),P=i(2),B=function(l){function e(){var t;v(this,e);for(var n=arguments.length,d=Array(n),p=0;p<n;p++)d[p]=arguments[p];var c=h(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(d)));return c.setRef=c.setRef.bind(c),c.onBlur=c.onBlur.bind(c),c.onChange=c.onChange.bind(c),c}return x(e,l),g(e,[{key:"setRef",value:function(t){this.inputElement=t}},{key:"initTextMask",value:function(){var t=this.props,n=this.props.value;this.textMaskInputElement=(0,z.default)(m({inputElement:this.inputElement},t)),this.textMaskInputElement.update(n)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(t){var n=this.props,d=n.value,p=n.pipe,c=n.mask,J=n.guide,I=n.placeholderChar,$=n.showMask,j={guide:J,placeholderChar:I,showMask:$},G=typeof p=="function"&&typeof t.pipe=="function"?p.toString()!==t.pipe.toString():(0,P.isNil)(p)&&!(0,P.isNil)(t.pipe)||!(0,P.isNil)(p)&&(0,P.isNil)(t.pipe),N=c.toString()!==t.mask.toString(),D=Object.keys(j).some(function(O){return j[O]!==t[O]})||N||G,V=d!==this.inputElement.value;(V||D)&&this.initTextMask()}},{key:"render",value:function(){var n=this.props,d=n.render,p=f(n,["render"]);return delete p.mask,delete p.guide,delete p.pipe,delete p.placeholderChar,delete p.keepCharPositions,delete p.value,delete p.onBlur,delete p.onChange,delete p.showMask,d(this.setRef,m({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},p))}},{key:"onChange",value:function(t){this.textMaskInputElement.update(),typeof this.props.onChange=="function"&&this.props.onChange(t)}},{key:"onBlur",value:function(t){typeof this.props.onBlur=="function"&&this.props.onBlur(t)}}]),e}(s.default.PureComponent);r.default=B,B.propTypes={mask:o.default.oneOfType([o.default.array,o.default.func,o.default.bool,o.default.shape({mask:o.default.oneOfType([o.default.array,o.default.func]),pipe:o.default.func})]).isRequired,guide:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number]),pipe:o.default.func,placeholderChar:o.default.string,keepCharPositions:o.default.bool,showMask:o.default.bool},B.defaultProps={render:function(l,e){return s.default.createElement("input",m({ref:l},e))}}},function(y,r){Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(y,r,i){function u(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:C,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g.placeholderChar;if(!f(s))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(s.indexOf(b)!==-1)throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

`+("The placeholder character that was received is: "+JSON.stringify(b)+`

`)+("The mask that was received is: "+JSON.stringify(s)));return s.map(function(o){return o instanceof RegExp?b:o}).join("")}function f(s){return Array.isArray&&Array.isArray(s)||s instanceof Array}function v(s){return typeof s=="string"||s instanceof String}function h(s){return typeof s=="number"&&s.length===void 0&&!isNaN(s)}function x(s){return typeof s>"u"||s===null}function m(s){for(var b=[],o=void 0;o=s.indexOf(k),o!==-1;)b.push(o),s.splice(o,1);return{maskWithoutCaretTraps:s,indexes:b}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=u,r.isArray=f,r.isString=v,r.isNumber=h,r.isNil=x,r.processCaretTraps=m;var g=i(1),C=[],k="[]"},function(y,r,i){function u(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:m,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x,k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(0,v.isArray)(C)){if((typeof C>"u"?"undefined":f(C))!==h.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");C=C(g,k),C=(0,v.processCaretTraps)(C).maskWithoutCaretTraps}var s=k.guide,b=s===void 0||s,o=k.previousConformedValue,T=o===void 0?m:o,z=k.placeholderChar,P=z===void 0?h.placeholderChar:z,B=k.placeholder,l=B===void 0?(0,v.convertMaskToPlaceholder)(C,P):B,e=k.currentCaretPosition,t=k.keepCharPositions,n=b===!1&&T!==void 0,d=g.length,p=T.length,c=l.length,J=C.length,I=d-p,$=I>0,j=e+($?-I:0),G=j+Math.abs(I);if(t===!0&&!$){for(var N=m,D=j;D<G;D++)l[D]===P&&(N+=P);g=g.slice(0,j)+N+g.slice(j,d)}for(var V=g.split(m).map(function(L,W){return{char:L,isNew:W>=j&&W<G}}),O=d-1;O>=0;O--){var _=V[O].char;if(_!==P){var Q=O>=j&&p===J;_===l[Q?O-I:O]&&V.splice(O,1)}}var S=m,X=!1;e:for(var K=0;K<c;K++){var ee=l[K];if(ee===P){if(V.length>0)for(;V.length>0;){var te=V.shift(),Z=te.char,oe=te.isNew;if(Z===P&&n!==!0){S+=P;continue e}if(C[K].test(Z)){if(t===!0&&oe!==!1&&T!==m&&b!==!1&&$){for(var re=V.length,Y=null,q=0;q<re;q++){var H=V[q];if(H.char!==P&&H.isNew===!1)break;if(H.char===P){Y=q;break}}Y!==null?(S+=Z,V.splice(Y,1)):K--}else S+=Z;continue e}X=!0}n===!1&&(S+=l.substr(K,c));break}S+=ee}if(n&&$===!1){for(var E=null,M=0;M<S.length;M++)l[M]===P&&(E=M);S=E!==null?S.substr(0,E+1):m}return{conformedValue:S,meta:{someCharsRejected:X}}}Object.defineProperty(r,"__esModule",{value:!0});var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g};r.default=u;var v=i(2),h=i(1),x=[],m=""},function(y,r){function i(v){var h=v.previousConformedValue,x=h===void 0?f:h,m=v.previousPlaceholder,g=m===void 0?f:m,C=v.currentCaretPosition,k=C===void 0?0:C,s=v.conformedValue,b=v.rawValue,o=v.placeholderChar,T=v.placeholder,z=v.indexesOfPipedChars,P=z===void 0?u:z,B=v.caretTrapIndexes,l=B===void 0?u:B;if(k===0||!b.length)return 0;var e=b.length,t=x.length,n=T.length,d=s.length,p=e-t,c=p>0,J=t===0,I=p>1&&!c&&!J;if(I)return k;var $=c&&(x===s||s===T),j=0,G=void 0,N=void 0;if($)j=k-p;else{var D=s.toLowerCase(),V=b.toLowerCase(),O=V.substr(0,k).split(f),_=O.filter(function(w){return D.indexOf(w)!==-1});N=_[_.length-1];var Q=g.substr(0,_.length).split(f).filter(function(w){return w!==o}).length,S=T.substr(0,_.length).split(f).filter(function(w){return w!==o}).length,X=S!==Q,K=g[_.length-1]!==void 0&&T[_.length-2]!==void 0&&g[_.length-1]!==o&&g[_.length-1]!==T[_.length-1]&&g[_.length-1]===T[_.length-2];!c&&(X||K)&&Q>0&&T.indexOf(N)>-1&&b[k]!==void 0&&(G=!0,N=b[k]);for(var ee=P.map(function(w){return D[w]}),te=ee.filter(function(w){return w===N}).length,Z=_.filter(function(w){return w===N}).length,oe=T.substr(0,T.indexOf(o)).split(f).filter(function(w,ae){return w===N&&b[ae]!==w}).length,re=oe+Z+te+(G?1:0),Y=0,q=0;q<d;q++){var H=D[q];if(j=q+1,H===N&&Y++,Y>=re)break}}if(c){for(var E=j,M=j;M<=n;M++)if(T[M]===o&&(E=M),T[M]===o||l.indexOf(M)!==-1||M===n)return E}else if(G){for(var L=j-1;L>=0;L--)if(s[L]===N||l.indexOf(L)!==-1||L===0)return L}else for(var W=j;W>=0;W--)if(T[W-1]===o||l.indexOf(W)!==-1||W===0)return W}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i;var u=[],f=""},function(y,r,i){function u(e){return e&&e.__esModule?e:{default:e}}function f(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(n){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,p=d.inputElement,c=d.mask,J=d.guide,I=d.pipe,$=d.placeholderChar,j=$===void 0?o.placeholderChar:$,G=d.keepCharPositions,N=G!==void 0&&G,D=d.showMask,V=D!==void 0&&D;if(typeof n>"u"&&(n=p.value),n!==t.previousConformedValue){(typeof c>"u"?"undefined":m(c))===P&&c.pipe!==void 0&&c.mask!==void 0&&(I=c.pipe,c=c.mask);var O=void 0,_=void 0;if(c instanceof Array&&(O=(0,b.convertMaskToPlaceholder)(c,j)),c!==!1){var Q=h(n),S=p.selectionEnd,X=t.previousConformedValue,K=t.previousPlaceholder,ee=void 0;if((typeof c>"u"?"undefined":m(c))===o.strFunction){if(_=c(Q,{currentCaretPosition:S,previousConformedValue:X,placeholderChar:j}),_===!1)return;var te=(0,b.processCaretTraps)(_),Z=te.maskWithoutCaretTraps,oe=te.indexes;_=Z,ee=oe,O=(0,b.convertMaskToPlaceholder)(_,j)}else _=c;var re={previousConformedValue:X,guide:J,placeholderChar:j,pipe:I,placeholder:O,currentCaretPosition:S,keepCharPositions:N},Y=(0,s.default)(Q,_,re),q=Y.conformedValue,H=(typeof I>"u"?"undefined":m(I))===o.strFunction,E={};H&&(E=I(q,x({rawValue:Q},re)),E===!1?E={value:X,rejected:!0}:(0,b.isString)(E)&&(E={value:E}));var M=H?E.value:q,L=(0,C.default)({previousConformedValue:X,previousPlaceholder:K,conformedValue:M,placeholder:O,rawValue:Q,currentCaretPosition:S,placeholderChar:j,indexesOfPipedChars:E.indexesOfPipedChars,caretTrapIndexes:ee}),W=M===O&&L===0,w=V?O:T,ae=W?w:M;t.previousConformedValue=ae,t.previousPlaceholder=O,p.value!==ae&&(p.value=ae,v(p,L))}}}}}function v(e,t){document.activeElement===e&&(B?l(function(){return e.setSelectionRange(t,t,z)},0):e.setSelectionRange(t,t,z))}function h(e){if((0,b.isString)(e))return e;if((0,b.isNumber)(e))return String(e);if(e==null)return T;throw new Error(`The 'value' provided to Text Mask needs to be a string or a number. The value received was:

 `+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e},m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=f;var g=i(4),C=u(g),k=i(3),s=u(k),b=i(2),o=i(1),T="",z="none",P="object",B=typeof navigator<"u"&&/Android/i.test(navigator.userAgent),l=typeof requestAnimationFrame<"u"?requestAnimationFrame:setTimeout},function(y,r){function i(f){return function(){return f}}var u=function(){};u.thatReturns=i,u.thatReturnsFalse=i(!1),u.thatReturnsTrue=i(!0),u.thatReturnsNull=i(null),u.thatReturnsThis=function(){return this},u.thatReturnsArgument=function(f){return f},y.exports=u},function(y,r,i){function u(f,v,h,x,m,g,C,k){if(!f){var s;if(v===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var b=[h,x,m,g,C,k],o=0;s=new Error(v.replace(/%s/g,function(){return b[o++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}y.exports=u},function(y,r,i){var u=i(6),f=i(7),v=i(10);y.exports=function(){function h(g,C,k,s,b,o){o!==v&&f(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function x(){return h}h.isRequired=h;var m={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:x,element:h,instanceOf:x,node:h,objectOf:x,oneOf:x,oneOfType:x,shape:x,exact:x};return m.checkPropTypes=u,m.PropTypes=m,m}},function(y,r,i){y.exports=i(8)()},function(y,r){var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";y.exports=i},function(y,r){y.exports=A}])})})(ce);var Ne=ce.exports;const Se=pe(Ne),Ee={title:"",director:"",favorite:!1,genre:"fantastic",releaseDate:""},Ie="_form_18q3r_1",Ve="_formGroup_18q3r_11",Re="_textField_18q3r_25",Ae="_checkbox_18q3r_40",De="_btn_18q3r_57",F={form:Ie,formGroup:Ve,textField:Re,checkbox:Ae,btn:De},qe=({onSubmit:U})=>{const{state:R,handleChange:A,reset:y}=ge({initialState:Ee,onSubmit:U}),r=x=>{x.preventDefault();const m=new FormData(x.currentTarget);m.set("favorite",R.favorite),U(m),y()},{title:i,director:u,favorite:f,releaseDate:v}=R,h=[/\d/,/\d/,/\d/,/\d/];return a.jsxs("form",{onSubmit:r,className:F.form,encType:"multipart/form-data",children:[a.jsxs("div",{className:F.formGroup,children:[a.jsx("label",{children:"Movie title"}),a.jsx("input",{value:i,name:"title",onChange:A,className:F.textField,placeholder:"Movie title",required:!0})]}),a.jsxs("div",{className:F.formGroup,children:[a.jsx("label",{children:"Movie director"}),a.jsx("input",{value:u,name:"director",onChange:A,className:F.textField,placeholder:"Movie director",required:!0})]}),a.jsxs("div",{className:F.formGroup,children:[a.jsx("label",{children:"Favorite"}),a.jsx("input",{checked:f,name:"favorite",onChange:A,className:F.checkbox,type:"checkbox"})]}),a.jsxs("div",{className:F.formGroup,children:[a.jsx("label",{children:"Movie genre"}),a.jsxs("select",{name:"genre",onChange:A,children:[a.jsx("option",{value:"fantastic",children:"Fantastic"}),a.jsx("option",{value:"love story",children:"Love story"})]})]}),a.jsxs("div",{className:F.formGroup,children:[a.jsx("label",{children:"Movie release date"}),a.jsx(Se,{mask:h,value:v,name:"releaseDate",onChange:A,className:F.textField,placeholder:"YYYY",required:!0})]}),a.jsxs("div",{className:F.formGroup,children:[a.jsx("label",{children:"Poster"}),a.jsx("input",{name:"poster",type:"file"})]}),a.jsx("button",{className:F.btn,type:"submit",children:"Add movie"})]})},Fe="_wrapper_2saq2_1",Be="_title_2saq2_5",$e="_blocks_2saq2_12",ue={wrapper:Fe,title:Be,blocks:$e},Ge=()=>{const U=de(be),R=he();se.useEffect(()=>{R(me())},[R]);const A=r=>{R(ve(r))},y=r=>{R(ye(r))};return a.jsx("div",{className:ue.wrapper,children:a.jsxs("div",{className:ue.blocks,children:[a.jsx(le,{title:"Add movie",children:a.jsx(qe,{onSubmit:A})}),a.jsx(le,{title:"Movie list",children:a.jsx(we,{items:U,onDeleteMovie:y})})]})})},ze=()=>a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"page-title",children:"My movies page"}),a.jsx(Ge,{})]});export{ze as default};
