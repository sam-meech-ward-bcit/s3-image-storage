(this.webpackJsonpinstasam=this.webpackJsonpinstasam||[]).push([[0],{58:function(e,t,a){e.exports=a(90)},63:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"savePost",(function(){return R})),a.d(n,"getPosts",(function(){return U})),a.d(n,"appName",(function(){return $}));var r=a(0),o=a.n(r),c=a(13),i=a.n(c),s=(a(63),a(10)),l=a(11),u=a.n(l),p=a(28),m=a(109),f=a(21),d=a(111),h=a(112),g=a(113),v=a(114),b=a(50),O=a.n(b),E=Object(m.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({display:"none",textAlign:"center"},e.breakpoints.up("sm"),{display:"block"})}}));function j(e){var t=E(),a=o.a.useState(null),n=Object(s.a)(a,2);n[0],n[1];return o.a.createElement("div",{className:t.grow},o.a.createElement(d.a,{position:"static"},o.a.createElement(h.a,null,o.a.createElement(g.a,{"aria-label":"add a new post",onClick:e.newPost,color:"inherit"},o.a.createElement(O.a,null)),o.a.createElement(v.a,{className:t.title,variant:"h6",noWrap:!0},e.appName))))}var w=a(115),k=a(116),x=a(117),y=(a(3),a(26)),N=Object(m.a)((function(e){return{root:{width:600},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:y.a[500]},textField:{flexGrow:1},description:{marginBottom:10},mainCardContent:{paddingTop:0}}}));function S(e){var t=N(e),a=e.post;return o.a.createElement(w.a,{className:"".concat(t.root," ").concat(e.className)},o.a.createElement(k.a,{href:a},o.a.createElement(x.a,{className:t.media,image:a})))}var C=a(118),A=a(51),P=Object(m.a)((function(e){return{root:{width:600},input:{display:"none"}}}));function B(e){var t=P(),a=Object(r.useState)({}),n=Object(s.a)(a,2),c=n[0],i=n[1],l=Object(r.useState)(""),u=Object(s.a)(l,2),p=u[0];u[1];return o.a.createElement(w.a,{className:t.root},o.a.createElement(A.a,{images:c,setImages:i,allowCrop:!1}),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit({images:c,description:p})}},o.a.createElement(C.a,{type:"submit"},"Post")))}var F=Object(m.a)((function(e){return{posts:{display:"flex",flexDirection:"column",alignItems:"center"},post:{margin:"10px 0"}}}));function I(e){var t=Object(r.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(""),l=Object(s.a)(i,2),m=l[0],f=l[1],d=Object(r.useState)(!1),h=Object(s.a)(d,2),g=h[0],v=h[1],b=F(e);function O(){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getPosts();case 3:return a=t.sent,console.log(a),c(a.posts),console.log(a.posts),t.next=9,e.appName();case 9:n=t.sent,f(n.name),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),alert(JSON.stringify(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}Object(r.useEffect)((function(){O()}),[]);var w=function(){var t=Object(p.a)(u.a.mark((function t(a){var n,r,o,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(c in n=a.images,r=a.description,o=[],n)o.push(n[c]);return t.prev=3,t.next=6,e.savePost({images:o,description:r});case 6:i=t.sent,console.log(i),v(!1),O(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),alert(JSON.stringify(t.t0));case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}(),k=n.map((function(e){return o.a.createElement(S,{key:e,className:b.post,post:e})}));return o.a.createElement("div",null,o.a.createElement(j,{newPost:function(){v((function(e){return!e}))},appName:m}),o.a.createElement("div",{className:b.posts},g?o.a.createElement(B,{onSubmit:w}):k))}var J=a(29),T=a(27),D=a.n(T),W=a(122);a(52);function G(){return localStorage.getItem("token")}function z(){var e=G();return e?{Authorization:"Bearer ".concat(e)}:{}}function L(e){var t=e.method,a=e.path,n=e.params;console.log(z());var r=Object(J.a)({},z(),{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"});return console.log("headers",r),"get"==t?D.a[t](a,{headers:r}):D.a[t](a,n,{headers:r})}var M=function(e,t){for(var a=e.split(","),n=a[0].match(/:(.*?);/)[1],r=atob(a[1]),o=r.length,c=new Uint8Array(o);o;)c[o-1]=r.charCodeAt(o-1),o-=1;return new File([c],t||Object(W.a)(),{type:n})};function R(e){var t=e.images,a=e.description,n=new FormData;return t.map(M).forEach((function(e){return n.append("images",e)})),n.append("description",a),D.a.post("/api/posts",n,{headers:Object(J.a)({"Content-Type":"multipart/form-data"},z())}).then((function(e){return e.data}))}function U(){return L({method:"get",path:"/api/posts"}).then((function(e){return e.data}))}function $(){return L({method:"get",path:"/api/appName"}).then((function(e){return e.data}))}var q=a(121),H=a(53),K=a(119),Q=a(120);function V(e){var t,a=(t=e.pallet,Object(H.a)({backgroundColor:t.light?"white":"black"}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(K.a,{theme:a},o.a.createElement(Q.a,null),e.children))}var X=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],c=(t[1],Object(q.a)("(prefers-color-scheme: dark)"));return o.a.createElement(V,{pallet:c?"dark":"light"},a?o.a.createElement("h2",null,a,"..."):o.a.createElement(I,n))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.47baf805.chunk.js.map