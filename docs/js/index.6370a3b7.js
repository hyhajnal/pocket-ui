(function(t){function e(e){for(var i,s,c=e[0],l=e[1],o=e[2],h=0,f=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={index:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("73ce")},"05e6":function(t,e,n){},"1f81":function(t,e,n){},"2af9":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"CompWall"},[t._v("CompWall")])},a=[],r={name:"PocWall",components:{},data(){return{}},created(){},mounted(){},computed:{},watch:{},methods:{}},s=r,c=(n("d8b8"),n("2877")),l=Object(c["a"])(s,i,a,!1,null,"1969b79b",null),o=l.exports;o.install=t=>{t.component(o.name,o)};var u=o,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Button")])},f=[],m={name:"PocButton",data(){return{}},methods:{}},d=m,v=Object(c["a"])(d,h,f,!1,null,null,null),p=v.exports;p.install=t=>{t.component(p.name,p)};var _=p,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-view__wrap"},[n("div",{staticClass:"list-view__content",style:t.contentStyle},t._l(t.viewList,(function(e){return n("div",{key:e,staticClass:"list-view__item"},[t._v(" "+t._s(e)+" ")])})),0)])},w=[];const g=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,x=function(t,e){let n=null;return function(){const i=this;let a=arguments;n||(n=setTimeout(()=>{t.apply(i,a),clearTimeout(n),n=null},e))}};var C={name:"PocListView",data(){const t=60,e=5,n=Math.ceil(g/t);return{viewList:[],bufferCount:e,viewCount:n,itemHeight:t,startIndex:0,endIndex:n+e,startOffset:0,endOffset:0,list:[...Array(100).keys()]}},mounted(){this.handleScroll(),window.addEventListener("scroll",x(this.handleScroll,150))},computed:{contentStyle(){return`padding-top: ${this.startOffset}px; padding-bottom: ${this.endOffset}px;`}},methods:{handleScroll(){const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.startIndex=Math.max(Math.round(t/this.itemHeight)-this.bufferCount,0),this.endIndex=Math.min(this.startIndex+this.viewCount+this.bufferCount,this.list.length-1),this.viewList=this.list.slice(this.startIndex,this.endIndex),this.startOffset=t,this.endOffset=(this.list.length-this.endIndex)*this.itemHeight}}},O=C,y=(n("4fdf"),Object(c["a"])(O,b,w,!1,null,null,null)),$=y.exports;$.install=t=>{t.component($.name,$)};var k=$;e["a"]=[u,_,k]},"3ede":function(t,e,n){"use strict";var i=n("05e6"),a=n.n(i);a.a},4283:function(t,e,n){},"4fdf":function(t,e,n){"use strict";var i=n("73c0"),a=n.n(i);a.a},"6a10":function(t,e,n){},"73c0":function(t,e,n){},"73ce":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Site"},[n("site-head"),n("div",{staticClass:"container flex"},[n("site-nav"),n("div",{staticClass:"main flex-1 flex"},[n("site-md",{staticClass:"main__md flex-1"}),t.showMobile?[n("div",{staticClass:"main__mobile-occupying"}),n("div",{staticClass:"main__demo"},[n("iframe",{ref:"iframe",attrs:{src:"/mobile.html"}})])]:t._e()],2)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteHead"},[n("div",{staticClass:"site-title"},[t._v("PocketUI")])])}],l={name:"SiteHead",components:{},data(){return{}},created(){},mounted(){},computed:{},watch:{},methods:{}},o=l,u=(n("873a"),n("2877")),h=Object(u["a"])(o,s,c,!1,null,"66a6523c",null),f=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteNav"},t._l(t.menus,(function(e){return n("div",{key:e.name,staticClass:"nav-group"},[n("div",{staticClass:"nav-item",class:{"nav-item--active":t.active===e.name,"nav-item--leaf":!e.children},on:{click:function(n){return t.onItemCick(e)}}},[t._v(t._s(e.title)+" ")]),e.children?t._l(e.children,(function(e){return n("div",{key:e.name,staticClass:"nav-group nav-group-2"},[n("div",{staticClass:"nav-item",class:{"nav-item--active":t.active===e.name,"nav-item--leaf":!e.children},on:{click:function(n){return t.onItemCick(e)}}},[t._v(" "+t._s(e.title)+" ")])])})):t._e()],2)})),0)},d=[];const v=[{title:"介绍",name:"intro",path:"../../markdown/intro.md"},{title:"快速开始",name:"quickStart",path:"../../markdown/quickstart.md"},{title:"更新日志",name:"changeLog",path:"../../markdown/changelog.md"},{title:"基础组件",children:[{title:"按钮",name:"button",path:""},{title:"图墙",name:"wall",path:""},{title:"列表",name:"listView",path:""}]},{title:"指令",children:[{title:"曝光埋点",name:"exposure",path:""}]}];var p={name:"SiteNav",components:{},data(){return{menus:v,active:""}},created(){},computed:{},watch:{},mounted(){this.initActive()},methods:{initActive(t){const e=t||this.$route,n=e.name;this.active=n.charAt(0).toLowerCase()+n.slice(1)},onItemCick(t){t.children||(this.active=t.name,this.$router.push({path:"/"+t.name}))}}},_=p,b=(n("f63f"),Object(u["a"])(_,m,d,!1,null,"7270386a",null)),w=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body"},[n(t.active,{tag:"component"})],1)},x=[],C=(n("2c43"),n("e4cb"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("更新日志")])])}],y={},$=Object(u["a"])(y,C,O,!1,null,null,null),k=$.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("介绍")])])}],S={},M=Object(u["a"])(S,E,j,!1,null,null,null),I=M.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("快速开始")])])}],P={},H=Object(u["a"])(P,L,A,!1,null,null,null),T=H.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("图墙")])])}],W={},q=Object(u["a"])(W,V,B,!1,null,null,null),N=q.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Button 示例组件")])])}],U={},Y=Object(u["a"])(U,J,Q,!1,null,null,null),z=Y.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("ListView 示例组件")])])}],G={},K=Object(u["a"])(G,D,F,!1,null,null,null),R=K.exports,X={components:{ChangeLog:k,Intro:I,QuickStart:T,Wall:N,Button:z,ListView:R},data(){return{active:""}},watch:{$route(t,e){this.initActive(t)}},mounted(){this.initActive()},methods:{initActive(t){const e=t||this.$route;this.active=e.name}}},Z=X,tt=Object(u["a"])(Z,g,x,!1,null,null,null),et=tt.exports;const nt="./";var it={name:"App",components:{SiteNav:w,SiteHead:f,SiteMd:et},data(){return{showMobile:!1,ignoreMobile:["quickstart","intro","changelog"],active:""}},watch:{$route(t,e){this.initActive(t)}},mounted(){this.initActive()},computed:{},methods:{initActive(t){const e=t||this.$route;this.active=e.name.toLowerCase(),this.showMobile=!this.ignoreMobile.includes(this.active),this.showMobile&&this.$nextTick(()=>{this.$refs.iframe.src=nt+"mobile.html#/"+this.active})}}},at=it,rt=(n("3ede"),Object(u["a"])(at,a,r,!1,null,"05ed1c2c",null)),st=rt.exports,ct=n("8c4f");i["a"].use(ct["a"]);var lt=new ct["a"]({routes:[{path:"/",redirect:"intro"},{path:"/intro",name:"Intro"},{path:"/changeLog",name:"ChangeLog"},{path:"/quickStart",name:"QuickStart"},{path:"/wall",name:"Wall"},{path:"/button",name:"Button"},{path:"/listView",name:"ListView"}]}),ot=n("2af9");n("f5df"),n("4283");i["a"].config.productionTip=!1,ot["a"].forEach(t=>{i["a"].use(t)}),new i["a"]({el:"#app",router:lt,render:t=>t(st)})},"873a":function(t,e,n){"use strict";var i=n("6a10"),a=n.n(i);a.a},d8b8:function(t,e,n){"use strict";var i=n("f4f1"),a=n.n(i);a.a},f4f1:function(t,e,n){},f63f:function(t,e,n){"use strict";var i=n("1f81"),a=n.n(i);a.a}});
//# sourceMappingURL=index.6370a3b7.js.map