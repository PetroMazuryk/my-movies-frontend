import{j as e,u as d,l as p}from"./index-a8dd60e3.js";import{T as t,B as u}from"./Button-7db78071.js";import{u as c,T as h}from"./useForm-c1155454.js";const x={name:"",email:"",password:""},o={name:{label:"Name",name:"name",type:"text",required:!0,placeholder:"User name"},email:{label:"Email",name:"email",type:"email",required:!0,placeholder:"User email"},password:{label:"Password",name:"password",type:"password",required:!0,placeholder:"User password"}},g="_form_14vo4_1",f={form:g},j=({onSubmit:a})=>{const{state:r,handleChange:s,handleSubmit:n}=c({initialState:x,onSubmit:a}),{name:i,email:l,password:m}=r;return e.jsxs("form",{onSubmit:n,className:f.form,children:[e.jsx(t,{value:i,onChange:s,...o.name}),e.jsx(t,{value:l,onChange:s,...o.email}),e.jsx(t,{value:m,onChange:s,...o.password}),e.jsx(u,{children:"Register"})]})},v=()=>{const a=d(),r=s=>{a(p(s))};return e.jsxs("div",{children:[e.jsx(h,{children:"Register page"}),e.jsx(j,{onSubmit:r})]})};export{v as default};
