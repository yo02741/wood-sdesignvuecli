(function(t){function a(a){for(var s,o,r=a[0],l=a[1],c=a[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(s=!1)}s&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},i=[];function o(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-2d0bfef5":"ad077d1b","chunk-2d208499":"187e7bb4","chunk-45982d73":"73b7c9fa","chunk-fda9c94c":"8ba7f472"}[t]+".js"}function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var a=[],e=n[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=n[t]=[a,s]}));a.push(e[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t);var c=new Error;i=function(a){l.onerror=l.onload=null,clearTimeout(d);var e=n[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,e[1](c)}n[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(a)},r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/wood-sdesignvuecli/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("4160"),e("b64b"),e("159b");var s=e("5530"),n=(e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("2b0e")),i=(e("4989"),e("1157")),o=e("ecee"),r=e("f2d1"),l=e("c074"),c=e("ad3d"),d=e("9062"),u=e.n(d),p=(e("e40d"),e("bc3a")),f=e.n(p),v=e("a7fe"),m=e.n(v),b=e("7bb1"),h=e("4c93"),g=e("60d4"),C=e("5886"),_=e("f5af"),x=e.n(_),w=(e("e829"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item mx-0",class:{disabled:1===t.pages.current_page}},[t._m(0)]),t._l(t.pages.total_pages,(function(a,s){return e("li",{key:s,staticClass:"page-item mx-0",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item mx-0",class:{disabled:t.pages.total_pages===t.pages.current_page}},[t._m(1)])],2)])}),y=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])}],k={props:["pages"],methods:{updatePage:function(t){this.$emit("update",t)}}},j=k,O=(e("575a"),e("2877")),E=Object(O["a"])(j,w,y,!1,null,"13ccd9c0",null),P=E.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},S=[],T={},I=Object(O["a"])(T,$,S,!1,null,null,null),L=I.exports,N=(e("d3b7"),e("8c4f")),A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselExampleFade","data-ride":"carousel"}},[e("nav",{staticClass:"navbar navbar-expand-lg navClass py-3"},[e("h1",{attrs:{"data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"500"}},[e("router-link",{staticClass:"navbar-brand text-white\n            font-weight-bold ml-4 logo",attrs:{to:"/"}},[t._v("木's design")])],1),t._m(0),e("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent","data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"500"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link px-4 font-weight-bold",attrs:{to:"/aboutus"}},[t._v("關於我們")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link px-4 font-weight-bold",attrs:{to:"/sustainability"}},[t._v("永續經營")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link px-4 font-weight-bold",attrs:{to:"/products"}},[t._v("產品列表")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link px-4 font-weight-bold",attrs:{to:"/cart"}},[t._v("購物車")])],1)])])]),t._m(1)]),e("div",{staticClass:"container py-5 px-0 aboutus"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-7 col-lg-6 text-right",attrs:{"data-aos":"fade-left"}},[e("div",{staticClass:"txt"},[e("h2",{staticClass:"pb-4 h1 font-weight-bold text-center"},[t._v("關於我們")]),e("span",{staticClass:"title-overlay pb-4 text-primary h1\n                      font-weight-bold text-center"},[t._v("關於我們")]),e("p",{staticClass:"content pb-4 px-4 text-center"},[e("span",{staticClass:"h1 text-primary"},[t._v("木")]),e("span",[t._v(" ，是一個很有氣質的材質，無論是室內裝潢、傢俱或是個人配件，都時常看見它的出現。")]),e("br"),e("span",[t._v("我們致力於生產出兼具美觀、實用性及有品質的木製產品， "),e("br"),t._v(" 並使用環保木材，實踐"),e("router-link",{staticClass:"font-weight-bold",attrs:{to:"/sustainability"}},[t._v("永續經營")]),t._v("的理念。")],1)]),e("router-link",{staticClass:"h4 mr-4",attrs:{to:"/products"}},[t._v("— Go Shop. ")])],1)]),e("div",{staticClass:"d-none d-md-block col-md-5 col-lg-6 picture",attrs:{"data-aos":"zoom-in"}})])]),e("div",{staticClass:"container-fluid  sustainability"},[e("div",{staticClass:"row overlay"},[e("div",{staticClass:"col-12 col-md-6 mx-auto",attrs:{"data-aos":"fade-up","data-aos-duration":"2000"}},[e("div",{staticClass:"txt text-white text-center"},[e("h2",{staticClass:"mx-auto pb-4 h1 font-weight-bold"},[t._v("永續經營")]),e("p",{staticClass:"content"},[t._v(" 我們建立於"),e("router-link",{staticClass:"font-weight-bold text-accent",attrs:{to:"/sustainability"}},[t._v("永續經營")]),t._v("的基礎 ，只採用環保木材製作產品，達到了永續經營的訴求，也間接地幫助地球環保減碳。 ")],1)])])])]),t._m(2),e("div",{staticClass:"container-fluid footer bg-primary text-center"},[e("div",{staticClass:"container py-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-4 mb-md-0 d-flex flex-column\n                  justify-content-center align-items-center"},[e("router-link",{staticClass:"h1 text-white font-weight-bold px-4 logo",attrs:{to:"/"}},[t._v("木's design")])],1),t._m(3),e("div",{staticClass:"col-md-4"},[e("ul",{staticClass:"d-flex justify-content-around  align-items-center mb-0 pl-0"},[e("li",[e("a",{staticClass:"icon",attrs:{href:"https://www.facebook.com/profile.php?id=100003064961458"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),e("li",[e("a",{staticClass:"icon",attrs:{href:"https://www.instagram.com/8736.yo/"}},[e("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),e("li",[e("a",{staticClass:"icon",attrs:{href:"https://github.com/yo02741"}},[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),e("li",[e("a",{staticClass:"icon",attrs:{href:"https://codepen.io/yo02741"}},[e("font-awesome-icon",{attrs:{icon:["fab","codepen"]}})],1)])])])])])])])},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[e("h5",{staticClass:"text-white font-weight-bold h2 slogan"},[e("span",{attrs:{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"50","data-aos-duration":"1500"}},[t._v("好的設計，")]),e("br"),e("span",{attrs:{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"650","data-aos-duration":"1500"}},[t._v("讓您木不轉睛。")])]),e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),e("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),e("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),e("div",{staticClass:"carousel-inner carouselClass"},[e("div",{staticClass:"carousel-item active"}),e("div",{staticClass:"carousel-item"}),e("div",{staticClass:"carousel-item"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row introduce-title",attrs:{"data-aos":"flip-left"}},[e("h2",{staticClass:"mx-auto pt-5 h1 font-weight-bold"},[t._v("設計師")]),e("span",{staticClass:"title-overlay pt-5 text-primary h1 font-weight-bold"},[t._v("設計師")])]),e("div",{staticClass:"row introduce py-5"},[e("div",{staticClass:"col-12 mt-4 col-md-4 mt-md-0 text-center",attrs:{"data-aos":"flip-left"}},[e("div",{staticClass:"mx-auto photo"}),e("h3",{staticClass:"my-4"},[t._v("SHANE WOOD")]),e("p")]),e("div",{staticClass:"col-12 mt-4 col-md-4 mt-md-0 text-center",attrs:{"data-aos":"flip-left"}},[e("div",{staticClass:"mx-auto photo"}),e("h3",{staticClass:"my-4"},[t._v("COLLIN VINSON")]),e("p")]),e("div",{staticClass:"col-12 mt-4 col-md-4 mt-md-0 text-center",attrs:{"data-aos":"flip-left"}},[e("div",{staticClass:"mx-auto photo"}),e("h3",{staticClass:"my-4"},[t._v("GARRETT JUAREZ")]),e("p")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 mb-4 mb-md-0 d-flex flex-column\n                  justify-content-center align-items-center"},[e("p",{staticClass:"text-white mb-0"},[t._v("Copyright © 2020 木's design")]),e("p",{staticClass:"text-white mb-0"},[t._v("純屬練習，不做商業行為。")]),e("p",{staticClass:"text-white mb-0"},[t._v("圖片來源：unsplash、pexels")])])}],z={},J=Object(O["a"])(z,A,M,!1,null,null,null),R=J.exports;n["a"].use(N["a"]);var V=[{path:"*",redirect:"/"},{path:"/",name:"Home",component:R},{path:"/aboutus",component:function(){return e.e("chunk-2d0bfef5").then(e.bind(null,"4047"))}},{path:"/sustainability",component:function(){return e.e("chunk-2d208499").then(e.bind(null,"a3c4"))}},{path:"/products",component:function(){return e.e("chunk-45982d73").then(e.bind(null,"e6dc"))}},{path:"/cart",component:function(){return e.e("chunk-fda9c94c").then(e.bind(null,"b789"))}}],D=new N["a"]({routes:V}),G=D;e("812b");o["c"].add(r["b"],r["d"],r["c"],r["a"],l["a"]),n["a"].component("font-awesome-icon",c["a"]),n["a"].component("Loading",u.a),n["a"].use(m.a,f.a),n["a"].component("ValidationProvider",b["b"]),n["a"].component("ValidationObserver",b["a"]),Object.keys(h).forEach((function(t){Object(b["d"])(t,Object(s["a"])(Object(s["a"])({},h[t]),{},{message:g["a"][t]}))})),Object(b["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),n["a"].use(C["a"]),x.a.init(),n["a"].component("pagination",P),window.$=i["$"],n["a"].config.productionTip=!1,new n["a"]({router:G,render:function(t){return t(L)}}).$mount("#app")},"575a":function(t,a,e){"use strict";var s=e("df71"),n=e.n(s);n.a},"812b":function(t,a,e){},df71:function(t,a,e){}});
//# sourceMappingURL=app.e0801335.js.map