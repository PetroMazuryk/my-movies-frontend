import{j as s,u as m,o as d}from"./index-76503284.js";import{T as r,B as c}from"./Button-124e364e.js";import{u as p}from"./useForm-f2b432e8.js";import{T as u}from"./TitleText-66914ec4.js";const h={email:"",password:""},t={email:{label:"User email",name:"email",type:"email",required:!0,placeholder:"User email"},password:{label:"User password",name:"password",type:"password",required:!0,placeholder:"User password"}},x="_form_14vo4_1",f={form:x},g=({onSubmit:o})=>{const{state:a,handleChange:e,handleSubmit:n}=p({initialState:h,onSubmit:o}),{email:i,password:l}=a;return s.jsxs("form",{onSubmit:n,className:f.form,children:[s.jsx(r,{value:i,onChange:e,...t.email}),s.jsx(r,{value:l,onChange:e,...t.password}),s.jsx(c,{children:"Login"})]})},T=()=>{const o=m(),a=e=>{o(d(e))};return s.jsxs("div",{className:"container",children:[s.jsx(u,{children:"Login page"}),s.jsx(g,{onSubmit:a})]})};export{T as default};
