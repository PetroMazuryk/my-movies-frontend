import{j as s,u as m,n as d}from"./index-27f4d153.js";import{T as r,B as c}from"./Button-7999b836.js";import{u as p,T as u}from"./useForm-a7a3766e.js";const h={email:"",password:""},n={email:{label:"User email",name:"email",type:"email",required:!0,placeholder:"User email"},password:{label:"User password",name:"password",type:"password",required:!0,placeholder:"User password"}},x="_form_14vo4_1",g={form:x},f=({onSubmit:a})=>{const{state:o,handleChange:e,handleSubmit:t}=p({initialState:h,onSubmit:a}),{email:i,password:l}=o;return s.jsxs("form",{onSubmit:t,className:g.form,children:[s.jsx(r,{value:i,onChange:e,...n.email}),s.jsx(r,{value:l,onChange:e,...n.password}),s.jsx(c,{children:"Login"})]})},L=()=>{const a=m(),o=e=>{a(d(e))};return s.jsxs("div",{className:"container",children:[s.jsx(u,{children:"Login page"}),s.jsx(f,{onSubmit:o})]})};export{L as default};