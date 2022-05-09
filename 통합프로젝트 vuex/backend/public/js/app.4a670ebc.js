(function(){"use strict";var t={475:function(t,e,n){var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.$store.state.user?n("div",[n("span",[t._v(t._s(t.$store.state.user)+"님 환영합니다")]),n("button",[t._v("로그아웃")])]):t._e(),n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/list"}},[t._v("List")])],1),n("router-view")],1)},i=[],u=n(1),s={},a=(0,u.Z)(s,o,i,!1,null,null,null),c=a.exports,l=n(345),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("label",{attrs:{for:""}},[t._v("유저이름")]),t._v(" "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{type:"text"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),n("button",{on:{click:t.loginuser}},[t._v("확인")]),n("p",[t._v(t._s(t.$store.state.user))])])},f=[],d={name:"HomeView",components:{},data(){return{user:""}},methods:{loginuser(){this.$store.commit("loginuser",this.user),this.$router.push("/list")}}},p=d,v=(0,u.Z)(p,m,f,!1,null,null,null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",[t._m(0),t._l(t.$store.state.memos,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.writer))]),n("td",{on:{click:function(n){return t.$router.push("/list/"+e.id)}}},[t._v(t._s(e.title))])])}))],2)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("아이디")]),n("td",[t._v("작성자")]),n("td",[t._v("제목")])])}],_={data(){return{}},created(){this.$store.dispatch("getmemolist")}},y=_,w=(0,u.Z)(y,g,b,!1,null,null,null),k=w.exports;r.Z.use(l.Z);const $=[{path:"/",name:"home",component:h},{path:"/list",name:"list",component:k},{path:"/list/:id",component:function(){return n.e(419).then(n.bind(n,419))}}],O=new l.Z({mode:"history",base:"/",routes:$});var j=O,Z=n(629),E=n(669),x=n.n(E);r.Z.use(Z.ZP);var P=new Z.ZP.Store({state:{user:"",memo:{title:"제목",memo:" 내용"},memos:[{id:1,writer:"익명",title:"확인용입니다"}],comments:[{writer:"익명",comment:"내용"}]},getters:{},mutations:{loginuser(t,e){t.user=e},changememolist(t,e){t.memos=e},changememo(t,e){t.memo=e},changecomments(t,e){t.comments=e}},actions:{getmemolist({commit:t}){x().get("/api/memo").then((e=>{t("changememolist",e.data)}))},getmemo({commit:t},e){x().get(`/api/memo/${e}`).then((e=>{t("changememo",e.data)}))},getcomment({commit:t},e){x().get(`/api/comment/${e}`).then((e=>{t("changecomments",e.data)}))},postcomment({commit:t},e){x().post("/api/comment",{data:{comment:e}}).then((e=>{console.log(e.data),t("changecomments",e.data)}))}},modules:{}});r.Z.config.productionTip=!1,new r.Z({router:j,store:P,render:function(t){return t(c)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var s=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(s=!1,i<u&&(u=i));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".e458f6b7.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="frontend:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var s,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var m=c[l];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==e+i){s=m;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),s=new Error,a=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",s.name="ChunkLoadError",s.type=i,s.request=u,o[1](s)}};n.l(u,a,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],s=r[1],a=r[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(a)var l=a(n)}for(e&&e(r);c<u.length;c++)i=u[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(475)}));r=n.O(r)})();
//# sourceMappingURL=app.4a670ebc.js.map