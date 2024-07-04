(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,a,t){},60:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var s,n,o,c,r=t(4),l=t.n(r),i=t(61),d=t.n(i),m=t(68),j=t(100),b=t(101),h=t(98),u=t(22),O=t(10),v=t(67),g=t(104),x=t(27),p=t(99);const k=Object(p.a)(s||(s=Object(x.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),N=Object(p.a)(n||(n=Object(x.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),S=Object(p.a)(o||(o=Object(x.a)(["\n  mutation saveBook($bookData: BookInput!) {\n    saveBook(bookData: $bookData) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        title\n        description\n        image\n        link\n      }\n    }\n  }\n"]))),f=Object(p.a)(c||(c=Object(x.a)(["\n  mutation removeBook($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        title\n        description\n        image\n        link\n      }\n    }\n  }\n"])));console.log("Mutations:",{LOGIN_USER:k,ADD_USER:N,SAVE_BOOK:S,REMOVE_BOOK:f});const w=()=>localStorage.getItem("id_token"),I=()=>{localStorage.removeItem("id_token")};var y=w,L=e=>{localStorage.setItem("id_token",e)},E=()=>!!w(),B=()=>{I(),window.location.assign("/")};t(57);var D=t(2);const $=e=>{let{book:a,handleSaveBook:t}=e;const[s,n]=Object(r.useState)(!1);return Object(D.jsxs)("div",{className:"card mb-4",children:[a.image&&Object(D.jsx)("img",{src:a.image,className:"card-img-top",alt:"The cover for ".concat(a.title)}),Object(D.jsxs)("div",{className:"card-body",children:[Object(D.jsx)("h5",{className:"card-title",children:a.title}),Object(D.jsx)("p",{className:"card-text ".concat(s?"expanded":""),children:a.description}),Object(D.jsx)("button",{className:"btn-read-more",onClick:()=>{n(!s)},children:s?"Read Less":"Read More"}),E()&&Object(D.jsx)("button",{className:"btn btn-custom mt-2",onClick:()=>t(a.bookId),children:"Save This Book"})]})]})};var _,C=()=>{const[e,a]=Object(r.useState)(""),[t,s]=Object(r.useState)([]),[n,{error:o}]=Object(g.a)(S),c=async e=>{const a=t.find((a=>a.bookId===e));if(!(E()?y():null))return!1;try{await n({variables:{bookData:a}})}catch(s){console.error(s)}};return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("form",{className:"form-inline my-2 my-lg-0",onSubmit:async t=>{if(t.preventDefault(),!e)return!1;try{const t=await(n=e,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(n)));if(!t.ok)throw new Error("Something went wrong!");const{items:o}=await t.json(),c=o.map((e=>{var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||"",link:e.volumeInfo.infoLink}}));s(c),a("")}catch(o){console.error(o)}var n},children:[Object(D.jsx)("input",{className:"form-control mr-sm-2",value:e,onChange:e=>a(e.target.value),type:"text",placeholder:"Search for a book"}),Object(D.jsx)("button",{className:"btn btn-custom my-2 my-sm-0",type:"submit",children:"Submit"})]}),Object(D.jsx)("div",{className:"row",children:t.map((e=>Object(D.jsx)("div",{className:"col-md-4",children:Object(D.jsx)($,{book:e,handleSaveBook:c})},e.bookId)))})]})},F=t(102);const U=Object(p.a)(_||(_=Object(x.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        title\n        description\n        image\n        link\n      }\n    }\n  }\n"])));var q=()=>{var e;const{loading:a,data:t}=Object(F.a)(U),[s,{error:n}]=Object(g.a)(f),o=(null===t||void 0===t?void 0:t.me)||{};return a?Object(D.jsx)("h2",{children:"LOADING..."}):Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("h2",{className:"text-center mb-4",children:"Saved Books"}),Object(D.jsx)("div",{className:"row",children:null===(e=o.savedBooks)||void 0===e?void 0:e.map((e=>Object(D.jsx)("div",{className:"col-md-4",children:Object(D.jsxs)("div",{className:"card mb-4",children:[e.image&&Object(D.jsx)("img",{src:e.image,className:"card-img-top",alt:"The cover for ".concat(e.title)}),Object(D.jsxs)("div",{className:"card-body",children:[Object(D.jsx)("h5",{className:"card-title",children:e.title}),Object(D.jsx)("p",{className:"card-text",children:e.description}),Object(D.jsx)("button",{className:"btn btn-custom mt-2",onClick:()=>(async e=>{try{await s({variables:{bookId:e}})}catch(a){console.error(a)}})(e.bookId),children:"Remove This Book"})]})]})},e.bookId)))})]})};var R=e=>{let{setLoggedIn:a}=e;const[t,s]=Object(r.useState)({email:"",password:""}),[n,{error:o}]=Object(g.a)(k),c=Object(O.g)(),l=e=>{const{name:a,value:n}=e.target;s({...t,[a]:n})};return Object(D.jsx)("div",{children:Object(D.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),console.log("Form State:",t);try{const{data:e}=await n({variables:{...t}});console.log("Login Data:",e),e&&e.login&&e.login.token?(L(e.login.token),console.log("Login Success:",e.login),a(!0),c.push("/dashboard")):console.error("Login Error: No token returned")}catch(s){console.error("Login Error:",s),console.error("Login Error Network:",s.networkError),console.error("Login Error GraphQL:",s.graphQLErrors)}},children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(D.jsx)("input",{type:"email",className:"form-control",name:"email",value:t.email,onChange:l,required:!0})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"password",children:"Password"}),Object(D.jsx)("input",{type:"password",className:"form-control",name:"password",value:t.password,onChange:l,required:!0})]}),Object(D.jsx)("button",{type:"submit",className:"btn btn-custom",children:"Submit"}),o&&Object(D.jsx)("div",{className:"alert alert-danger mt-2",children:"Login failed"})]})})};var G=e=>{let{setLoggedIn:a}=e;const[t,s]=Object(r.useState)({username:"",email:"",password:""}),[n,{error:o}]=Object(g.a)(N),c=Object(O.g)(),l=e=>{const{name:a,value:n}=e.target;s({...t,[a]:n})};return Object(D.jsx)("div",{children:Object(D.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),console.log("Form State:",t);try{const{data:e}=await n({variables:{...t}});console.log("Signup Data:",e),e&&e.addUser&&e.addUser.token?(L(e.addUser.token),console.log("Signup Success:",e.addUser),a(!0),c.push("/dashboard")):console.error("Signup Error: No token returned")}catch(s){console.error("Signup Error:",s),console.error("Signup Error Network:",s.networkError),console.error("Signup Error GraphQL:",s.graphQLErrors)}},children:[Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"username",children:"Username"}),Object(D.jsx)("input",{type:"text",className:"form-control",name:"username",value:t.username,onChange:l,required:!0})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(D.jsx)("input",{type:"email",className:"form-control",name:"email",value:t.email,onChange:l,required:!0})]}),Object(D.jsxs)("div",{className:"form-group",children:[Object(D.jsx)("label",{htmlFor:"password",children:"Password"}),Object(D.jsx)("input",{type:"password",className:"form-control",name:"password",value:t.password,onChange:l,required:!0})]}),Object(D.jsx)("button",{type:"submit",className:"btn btn-custom",children:"Submit"}),o&&Object(D.jsx)("div",{className:"alert alert-danger mt-2",children:"Signup failed"})]})})};var M=e=>{let{loggedIn:a,setLoggedIn:t}=e;return Object(D.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(D.jsx)(u.b,{className:"navbar-brand",to:"/",children:"Book Search"}),Object(D.jsx)("div",{className:"collapse navbar-collapse",children:Object(D.jsxs)("ul",{className:"navbar-nav ml-auto",children:[a&&Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(u.b,{className:"nav-link",to:"/search",children:"Search for Books"})}),a?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(u.b,{className:"nav-link",to:"/saved",children:"Saved Books"})}),Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)("button",{className:"nav-link btn btn-link",onClick:()=>{B(),t(!1)},children:"Logout"})})]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(u.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)(u.b,{className:"nav-link",to:"/signup",children:"Signup"})})]})]})})]})};var Q=()=>Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("h2",{children:"Welcome to your Dashboard"}),Object(D.jsx)("p",{children:"You have successfully logged in!"})]});t(59),t(60);const T=Object(m.a)({uri:"http://localhost:3001/graphql"}),A=Object(v.a)(((e,a)=>{let{headers:t}=a;const s=localStorage.getItem("id_token");return{headers:{...t,authorization:s?"Bearer ".concat(s):""}}})),J=new j.a({link:A.concat(T),cache:new b.a});var K=function(){const[e,a]=Object(r.useState)(E());return Object(r.useEffect)((()=>{a(E())}),[]),Object(D.jsx)(h.a,{client:J,children:Object(D.jsx)(u.a,{children:Object(D.jsxs)("div",{children:[Object(D.jsx)(M,{loggedIn:e,setLoggedIn:a}),Object(D.jsxs)(O.d,{children:[Object(D.jsx)(O.b,{exact:!0,path:"/",children:Object(D.jsxs)("div",{className:"container-fluid",children:[Object(D.jsx)("h1",{className:"text-center mb-4",children:"Welcome to the Book Search Engine"}),Object(D.jsx)("p",{className:"text-center mb-4",children:"Find and save your favorite books with ease!"}),Object(D.jsxs)("div",{className:"row justify-content-center",children:[Object(D.jsx)("div",{className:"col-md-5",children:Object(D.jsxs)("div",{className:"card mb-4",children:[Object(D.jsx)("div",{className:"card-header",children:"Login"}),Object(D.jsx)("div",{className:"card-body",children:Object(D.jsx)(R,{setLoggedIn:a})})]})}),Object(D.jsx)("div",{className:"col-md-5",children:Object(D.jsxs)("div",{className:"card mb-4",children:[Object(D.jsx)("div",{className:"card-header",children:"Signup"}),Object(D.jsx)("div",{className:"card-body",children:Object(D.jsx)(G,{setLoggedIn:a})})]})})]})]})}),Object(D.jsx)(O.b,{exact:!0,path:"/search",component:e?C:()=>Object(D.jsx)(O.a,{to:"/"})}),Object(D.jsx)(O.b,{exact:!0,path:"/saved",component:e?q:()=>Object(D.jsx)(O.a,{to:"/"})}),Object(D.jsx)(O.b,{exact:!0,path:"/dashboard",component:Q}),Object(D.jsx)(O.a,{to:"/"})]})]})})})};d.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(l.a.StrictMode,{children:Object(D.jsx)(K,{})}))}},[[86,1,2]]]);
//# sourceMappingURL=main.edbb866a.chunk.js.map