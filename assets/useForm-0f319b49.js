import{j as b,r as a}from"./index-55318867.js";const i="_titleText_yka9v_1",k={titleText:i},j=({children:e})=>b.jsx("h2",{className:k.titleText,children:e}),v=({initialState:e,onSubmit:o})=>{const[n,t]=a.useState({...e}),r=a.useCallback(({target:s})=>{t(u=>{const{name:x,value:m,checked:h,type:l,files:T}=s,p=l==="checkbox"?h:l==="file"?T[0]:m;return{...u,[x]:p}})},[t]),c=a.useCallback(()=>t({...e}),[e]);return{state:n,setState:t,handleChange:r,handleSubmit:s=>{s.preventDefault(),o({...n}),c()},reset:c}};export{j as T,v as u};