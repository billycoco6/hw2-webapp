webpackJsonp([1,2],[,,,,,,,function(t,e,n){"use strict";var s=n(1),o=n(136),a=n(119),i=n.n(a),r=n(122),c=n.n(r),l=n(124),u=n.n(l),f=n(123),m=n.n(f),p=n(125),d=n.n(p);s.default.use(o.a),e.a=new o.a({routes:[{path:"/",name:"SignIn",component:i.a},{path:"/post",name:"Post.index",component:c.a},{path:"/post/:id",name:"Post.show",component:u.a},{path:"/post/new",name:"Post.new",component:m.a},{path:"/register",name:"Register",component:d.a}]})},,,,,function(t,e,n){"use strict";var s=n(1);e.a={getPosts:function(t,e){s.default.$http.get("/posts.json").then(function(e){t(e.data)}).catch(function(t){e(t)})},getPost:function(t,e,n){s.default.$http.get("/posts/"+t+".json").then(function(t){e(t.data)}).catch(function(t){n(t)})},createPost:function(t,e,n){var o={post:t};s.default.$http.post("/posts.json",o).then(function(t){e(t.data)}).catch(function(t){n(t)})}}},,,,,,,function(t,e,n){"use strict";var s=n(1),o=n(20),a=n(7);s.default.use(o.a);var i={auth:!1},r={login:function(t){console.log("mutations login"),t.auth=!0,a.a.push({name:"Post.index"})},logout:function(t){console.log("mutations logout"),t.auth=!1,a.a.push({name:"SignIn"})}},c={login:function(t){return(0,t.commit)("login")},logout:function(t){return(0,t.commit)("logout")}},l={loggedIn:function(t){return t.auth}};e.a=new o.a.Store({state:i,getters:l,actions:c,mutations:r})},,,,,,,,function(t,e,n){"use strict";var s=n(1);e.a={getComments:function(t,e,n){s.default.$http.get("/posts/"+t+"/comments.json").then(function(t){e(t.data)}).catch(function(t){console.log(t)})},createComment:function(t,e,n,o){var a={comment:{content:e}};s.default.$http.post("/posts/"+t+"/comments.json",a).then(function(t){n(t.data)}).catch(function(t){console.log(t)})}}},function(t,e,n){"use strict";var s=n(1),o=n(19);e.a={checkLoggedIn:function(t){console.log(o.a),s.default.$http.get("/users/check_signed_in.json").then(function(e){o.a.dispatch("login"),t(e.data)}).catch(function(t){o.a.dispatch("logout")})},signin:function(t,e,n){console.log(o.a);var a={user:{email:t,password:e}};s.default.$http.post("/users/api_sign_in.json",a).then(function(t){o.a.dispatch("login"),n(t.data)}).catch(function(t){o.a.dispatch("logout")})},signout:function(t){console.log(o.a),s.default.$http.delete("/users/api_sign_out.json").then(function(e){o.a.dispatch("logout"),t(e.data)}).catch(function(t){o.a.dispatch("logout")})}}},,,,,,,,function(t,e,n){n(113);var s=n(4)(n(87),n(132),"data-v-70f81f3a",null);t.exports=s.exports},,,function(t,e){},function(t,e,n){n(111);var s=n(4)(n(80),n(130),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{SideBarNav:n(118)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(28);e.default={data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)},logOut:function(){console.log("==== Logout ===="),s.a.signout(function(){})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(28),o=n(7);e.default={name:"sign-in",data:function(){return{username:"u5680353@iccs340.com",password:"u5680353",msg:"Welcome to your personal feeds"}},methods:{signin:function(){var t=this;console.log("signin"),s.a.signin(t.username,t.password,function(t){o.a.push({name:"Post.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment",props:{comment:{type:Object,required:!1,default:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(27),o=n(7);e.default={name:"new-comment",data:function(){return{comment:{content:""}}},props:{post:{type:Object,required:!1,default:{}}},methods:{createComment:function(){var t=this.post.id,e=this.comment.content;this.comment.content="",s.a.createComment(t,e,function(e){console.log(e),o.a.push({name:"Post.show",params:{post_id:t},query:{t:new Date}})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(12);e.default={name:"posts",components:{Iccs340Post:n(36)},data:function(){return{posts:null,error:null}},beforeRouteEnter:function(t,e,n){s.a.getPosts(function(t){n(function(e){e.posts=t})})},watch:{$route:function(){var t=this;s.a.getPosts(function(e){t.posts=e})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),o=n(7);e.default={name:"new-post",data:function(){return{post:{name:"",content:""}}},methods:{createPost:function(){console.log("==== Create Post ===="),s.a.createPost(this.post,function(t){o.a.push({name:"Post.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"post",props:{post:{type:Object,required:!1,default:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),o=n(27);e.default={name:"post",components:{Iccs340Post:n(36),Iccs340Comment:n(120),Iccs340NewComment:n(121)},data:function(){return{post:{},comments:[],error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;s.a.getPost(this.$route.params.id,function(e){t.post=e,o.a.getComments(e.id,function(e){t.comments=e})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{firstname:"",lastname:"",username:"",password:"",confirmPassword:"",seen:!1,percentage:0,fillFirstName:!1,fillLastName:!1,fillUsername:!1,fillPassword:!1,fillConfirmPassword:!1}},watch:{firstname:function(){""===this.firstname||this.fillFirstName?""===this.firstname&&(this.percentage-=20,this.fillFirstName=!1):(this.percentage+=20,this.fillFirstName=!0)},lastname:function(){""===this.lastname||this.fillLastName?""===this.lastname&&(this.percentage-=20,this.fillLastName=!1):(this.percentage+=20,this.fillLastName=!0)},username:function(){""===this.username||this.fillUsername?""===this.username&&(this.percentage-=20,this.fillUsername=!1):(this.percentage+=20,this.fillUsername=!0)},password:function(){""===this.password||this.fillPassword?""===this.password&&(this.percentage-=20,this.fillPassword=!1):(this.percentage+=20,this.fillPassword=!0)},confirmPassword:function(){""===this.confirmPassword||this.fillConfirmPassword?""===this.confirmPassword&&(this.percentage-=20,this.fillConfirmPassword=!1):(this.percentage+=20,this.fillConfirmPassword=!0)}},methods:{onSubmit:function(){var t=this;t.password!==t.confirmPassword?t.seen=!0:(console.log("submit!"),t.$router.push({path:"/"}))}}}},,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(112);var s=n(4)(n(81),n(131),null,null);t.exports=s.exports},function(t,e,n){n(114);var s=n(4)(n(82),n(133),"data-v-a6de3304",null);t.exports=s.exports},function(t,e,n){n(108);var s=n(4)(n(83),n(127),"data-v-3b9315c0",null);t.exports=s.exports},function(t,e,n){n(107);var s=n(4)(n(84),n(126),"data-v-34fe55fe",null);t.exports=s.exports},function(t,e,n){n(116);var s=n(4)(n(85),n(135),"data-v-f7d45ac2",null);t.exports=s.exports},function(t,e,n){n(110);var s=n(4)(n(86),n(129),"data-v-499bc5ad",null);t.exports=s.exports},function(t,e,n){n(115);var s=n(4)(n(88),n(134),null,null);t.exports=s.exports},function(t,e,n){n(109);var s=n(4)(n(89),n(128),"data-v-4658abca",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-comment"},[n("el-form",{attrs:{"label-position":"top","label-width":"100px"}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"Add a comment ..."},model:{value:t.comment.content,callback:function(e){t.comment.content=e},expression:"comment.content"}})],1),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.createComment}},[t._v("Send")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("i",{staticClass:"el-icon-information"}),t._v("\n  "+t._s(t.comment.user.email)),n("br"),t._v("\n  "+t._s(t.comment.content)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[t.seen?n("el-alert",{attrs:{title:"password and confirm password don't match",type:"error"}}):t._e(),t._v(" "),n("h2",[t._v("Register")]),t._v(" "),n("el-form",{ref:"form",attrs:{"label-width":"150px"}},[n("el-form-item",{attrs:{label:"First Name"}},[n("el-input",{model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Last Name"}},[n("el-input",{model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Username"}},[n("el-input",{model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Password"}},[n("el-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Confirm Password"}},[n("el-input",{attrs:{type:"password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),t._v(" "),n("el-progress",{attrs:{"show-text":!1,"stroke-width":10,percentage:t.percentage,status:"success"}}),n("br"),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("Join now")]),t._v(" "),n("router-link",{attrs:{to:{path:"/"}}},[n("el-button",[t._v("Cancel")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-post"},[n("el-form",{attrs:{"label-position":"top","label-width":"100px"}},[n("el-form-item",{attrs:{label:"Title"}},[n("el-input",{attrs:{placeholder:"your title"},model:{value:t.post.name,callback:function(e){t.post.name=e},expression:"post.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Content"}},[n("el-input",{attrs:{placeholder:"you content",type:"textarea"},model:{value:t.post.content,callback:function(e){t.post.content=e},expression:"post.content"}})],1),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.createPost}},[t._v("Post")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.$store.getters.loggedIn?n("header",[n("side-bar-nav")],1):t._e(),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-sidenav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"line"}),t._v(" "),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("Feeds")]),t._v(" "),n("router-link",{attrs:{to:{name:"Post.index"}}},[n("el-menu-item",{attrs:{index:"2-1"}},[t._v("Home")])],1),t._v(" "),n("router-link",{attrs:{to:{name:"Post.new"}}},[n("el-menu-item",{attrs:{index:"2-2"}},[t._v("Create Feed")])],1)],2),t._v(" "),n("a",{on:{click:t.logOut}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("Log Out")])],1)],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",slot:"header"},[n("i",{staticClass:"el-icon-message"}),n("br"),n("span",{staticStyle:{"line-height":"36px"}},[t._v(t._s(t.post.name))])]),t._v(" "),n("div",{staticClass:"text item"},[n("p",{staticClass:"content"},[t._v(" "+t._s(t.post.content)+" ")])])]),t._v(" "),n("br")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign-in"},[n("h2",[t._v(t._s(t.msg))]),t._v(" "),n("el-form",{ref:"form",attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"username"}},[n("el-input",{model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"password"}},[n("el-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("div",{},[n("el-button",{attrs:{type:"primary"},on:{click:t.signin}},[t._v("Sign in")])],1),t._v(" "),n("br"),t._v("Not a member? "),n("router-link",{attrs:{to:{path:"register"}}},[t._v("Join now")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("iccs340-post",{attrs:{post:t.post}}),t._v(" "),n("h3",[t._v("Comments")]),t._v(" "),n("el-card",{staticClass:"box-card"},t._l(t.comments,function(t){return n("div",{staticClass:"text item"},[n("iccs340-comment",{attrs:{comment:t}})],1)})),t._v(" "),n("div",{staticClass:"text item"},[n("iccs340-new-comment",{attrs:{post:t.post}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h2",[t._v("Feeds")]),t._v(" "),t._l(t.posts,function(t){return n("div",{staticClass:"container"},[n("router-link",{attrs:{to:{name:"Post.show",params:{id:t.id}}}},[n("iccs340-post",{attrs:{post:t}})],1)],1)})],2)},staticRenderFns:[]}},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=n(40),a=n.n(o),i=n(7),r=n(19),c=n(20),l=n(37),u=n.n(l),f=n(38),m=n.n(f),p=n(39);n.n(p);u.a.defaults.baseURL="https://iccs340-vue-api-auth.herokuapp.com/",u.a.defaults.headers.common.Accept="application/json",u.a.defaults.withCredentials=!0,u.a.interceptors.request.use(function(t){return t},function(t){return t}),s.default.$http=u.a,s.default.use(c.a),s.default.use(m.a),s.default.config.productionTip=!1,i.a.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?r.a.getters.loggedIn?n():n({name:"SignIn"}):n()}),new s.default({el:"#app",router:i.a,store:r.a,template:"<App/>",components:{App:a.a}})}],[139]);
//# sourceMappingURL=app.258e51e7184f371fa455.js.map