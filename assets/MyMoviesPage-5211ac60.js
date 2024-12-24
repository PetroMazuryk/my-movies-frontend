import{r as N,u as g,j as e,a as y,b as w,f as T,c as C,d as E}from"./index-27f4d153.js";import{u as F,i as b,E as D,T as $,s,M as A,g as P,a as k}from"./movies-selectors-2ff2d091.js";import{u as G,T as I}from"./useForm-a7a3766e.js";const q="_list_1xdvw_1",R="_listItem_1xdvw_9",S="_posterWrapper_1xdvw_21",W="_listItemPoster_1xdvw_33",Y="_listItemInfo_1xdvw_45",L="_like_1xdvw_59",U="_likeActive_1xdvw_69",B="_video_1xdvw_74",O="_button_1xdvw_91",V="_btnEdit_1xdvw_114",t={list:q,listItem:R,posterWrapper:S,listItemPoster:W,listItemInfo:Y,like:L,likeActive:U,video:B,button:O,btnEdit:V},z="http://localhost:4444",H=({items:a,onDeleteMovie:i})=>{const o=N.useRef(null),c=g(),r=(l,n)=>{c(y({id:l,favorite:!n}))},{isModalOpen:m,currentTrailerUrl:v,errorMessage:x,playTrailer:h,closeModal:u}=F(),d=a.map(({_id:l,title:n,director:f,genre:_,poster:j,releaseDate:M,favorite:p})=>e.jsxs("li",{className:t.listItem,children:[j&&e.jsx("div",{className:t.posterWrapper,children:e.jsx("img",{ref:o,className:t.listItemPoster,src:`${z}/${j}`,alt:`Poster for ${n}`})}),e.jsxs("div",{className:t.listItemInfo,children:[e.jsxs("h2",{children:["Назва: ",n]}),e.jsxs("span",{children:["Director: ",f]}),e.jsxs("span",{children:["Genre: ",_]}),e.jsxs("span",{children:["Release: ",M]})]}),e.jsx("button",{children:e.jsx("svg",{onClick:()=>r(l,p),className:`${t.like} ${p?t.likeActive:""}`,children:e.jsx("use",{href:`${b}#icon-heart`})})}),e.jsx("button",{onClick:()=>h(n),children:e.jsx("svg",{className:t.video,children:e.jsx("use",{href:`${b}#icon-video`})})}),e.jsx("button",{className:t.button,onClick:()=>i(l),children:"Delete"}),e.jsx(D,{movie:{_id:l,title:n,director:f,genre:_,poster:j,releaseDate:M,favorite:p},className:t.btnEdit})]},l));return e.jsxs("div",{children:[e.jsx("ol",{className:t.list,children:d}),e.jsx($,{isOpen:m,trailerUrl:v,errorMessage:x,onClose:u})]})},J={title:"",director:"",favorite:!1,genre:"fantastic",releaseDate:"",poster:null},K=({onSubmit:a})=>{const{state:i,handleChange:o,reset:c}=G({initialState:J,onSubmit:a}),r=d=>{d.preventDefault();const l=new FormData(d.currentTarget);l.set("favorite",i.favorite),a(l),c()},{title:m,director:v,favorite:x,releaseDate:h}=i,u=[/\d/,/\d/,/\d/,/\d/];return e.jsxs("form",{onSubmit:r,className:s.form,encType:"multipart/form-data",children:[e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{children:"Movie title"}),e.jsx("input",{value:m,name:"title",onChange:o,className:s.textField,placeholder:"Movie title",required:!0})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{children:"Movie director"}),e.jsx("input",{value:v,name:"director",onChange:o,className:s.textField,placeholder:"Movie director",required:!0})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{children:"Favorite"}),e.jsx("input",{checked:x,name:"favorite",onChange:o,className:s.checkbox,type:"checkbox"})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{children:"Movie genre"}),e.jsxs("select",{name:"genre",onChange:o,children:[e.jsx("option",{value:"fantastic",children:"Fantastic"}),e.jsx("option",{value:"love story",children:"Love story"})]})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{children:"Movie release date"}),e.jsx(A,{mask:u,value:h,name:"releaseDate",onChange:o,className:s.textField,placeholder:"YYYY",required:!0})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{children:"Poster"}),e.jsx("input",{name:"poster",type:"file"})]}),e.jsx("button",{className:s.btn,type:"submit",children:"Add movie"})]})},Q="_title_xta3q_1",X="_blocks_xta3q_8",Z={title:Q,blocks:X},ee=()=>{const a=w(P),i=g();N.useEffect(()=>{i(T())},[i]);const o=r=>{i(C(r))},c=r=>{i(E(r))};return e.jsx("div",{children:e.jsxs("div",{className:Z.blocks,children:[e.jsx(k,{title:"Add movie",children:e.jsx(K,{onSubmit:o})}),e.jsx(k,{title:"Movie list",children:a.length>0?e.jsx(H,{items:a,onDeleteMovie:c}):e.jsx(I,{children:"No movies have been added yet"})})]})})},oe=()=>e.jsxs("div",{children:[e.jsx(I,{children:"My movies page"}),e.jsx(ee,{})]});export{oe as default};
