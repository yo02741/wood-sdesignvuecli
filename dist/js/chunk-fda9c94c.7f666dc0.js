(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fda9c94c"],{"99af":function(t,a,s){"use strict";var e=s("23e7"),o=s("d039"),i=s("e8b5"),n=s("861d"),r=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),p=s("1dde"),u=s("b622"),m=s("2d00"),f=u("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",C=m>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=p("concat"),b=function(t){if(!n(t))return!1;var a=t[f];return void 0!==a?!!a:i(t)},y=!C||!g;e({target:"Array",proto:!0,forced:y},{concat:function(t){var a,s,e,o,i,n=r(this),p=d(n,0),u=0;for(a=-1,e=arguments.length;a<e;a++)if(i=-1===a?n:arguments[a],b(i)){if(o=c(i.length),u+o>v)throw TypeError(h);for(s=0;s<o;s++,u++)s in i&&l(p,u,i[s])}else{if(u>=v)throw TypeError(h);l(p,u++,i)}return p.length=u,p}})},b789:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("loading",{attrs:{loader:"bars",color:"#86FFF8","background-color":"#B38C4D",active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"jumbotron jumbotron-fluid cartjumbotron"},[s("nav",{staticClass:"navbar navbar-expand-lg navClass py-3"},[s("h1",{attrs:{"data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"500"}},[s("router-link",{staticClass:"navbar-brand text-white\n            font-weight-bold logo",attrs:{to:"/"}},[t._v("木's design")])],1),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent","data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"500"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link px-4 font-weight-bold",attrs:{to:"/aboutus"}},[t._v("關於我們")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link px-4 font-weight-bold",attrs:{to:"/sustainability"}},[t._v("永續經營")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link px-4 font-weight-bold",attrs:{to:"/products"}},[t._v("產品列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link px-4 font-weight-bold",attrs:{to:"/cart"}},[t._v("購物車")])],1)])])])]),s("div",{staticClass:"container py-5",staticStyle:{"min-height":"500px"}},[s("ul",{staticClass:"d-flex justify-content-around align-items-center pl-0 mb-4"},[s("li",{staticClass:"stepstandING",attrs:{id:"steponeArea"}},[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",{staticClass:"d-flex justify-content-center progressicon mb-2 bg-primary",attrs:{id:"steponeIcon"}},[s("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","shopping-cart"]}})],1),s("p",{staticClass:"font-weight-bold"},[t._v("確認訂單品項")])])]),s("li",{staticClass:"stepstandING"},[s("font-awesome-icon",{staticClass:"iconangleright",attrs:{icon:["fas","angle-right"]}})],1),s("li",{staticClass:"stepstandby",attrs:{id:"stepTwoArea"}},[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",{staticClass:"d-flex justify-content-center progressicon mb-2",attrs:{id:"stepTwoIcon"}},[s("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","user-circle"]}})],1),s("p",{staticClass:"font-weight-bold"},[t._v("輸入訂單資訊")])])]),s("li",{staticClass:"stepstandby",attrs:{id:"stepNext"}},[s("font-awesome-icon",{staticClass:"iconangleright",attrs:{icon:["fas","angle-right"]}})],1),s("li",{staticClass:"stepstandby",attrs:{id:"stepThreeArea"}},[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",{staticClass:"d-flex justify-content-center progressicon mb-2",attrs:{id:"stepThreeIcon"}},[s("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","check"]}})],1),s("p",{staticClass:"font-weight-bold"},[t._v("完成訂單送出")])])])]),s("div",{staticClass:"row py-4",attrs:{id:"cartlist"}},[s("div",{staticClass:"col-12 col-md-8 cartlist py-4 px-4 mx-auto"},[s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-outline-danger my-3",on:{click:t.delProducts}},[s("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["fas","trash-alt"]}}),t._v(" 刪除所有商品 ")],1)]),s("table",{staticClass:"table table-hover"},[t._m(1),s("tbody",t._l(t.cart,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger\n                              btn-sm",on:{click:function(s){return t.delProduct(a.product.id)}}},[s("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["fas","trash-alt"]}})],1)]),s("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),s("td",{staticClass:"align-middle"},[s("div",{staticClass:"input-group quantity"},[s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(s){return t.changeQuantity(a.product.id,a.quantity-1)}}},[t._v("-")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],staticClass:"form-control text-center px-0 py-0 quantitybtn",attrs:{type:"number",disabled:""},domProps:{value:a.quantity},on:{input:function(s){s.target.composing||t.$set(a,"quantity",s.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(s){return t.changeQuantity(a.product.id,a.quantity+1)}}},[t._v(" +")])])])]),s("td",{staticClass:"align-middle text-center"},[t._v(t._s(a.product.price))]),s("td",{staticClass:"align-middle text-center"},[t._v(t._s(a.product.price*a.quantity))])])})),0)]),s("ul",{staticClass:"d-flex flex-column align-items-end pl-0"},[s("li",{staticClass:"mb-4"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.coupon,expression:"form.coupon"}],staticClass:"form-control float-right text-right w-50",attrs:{type:"text",id:"coupon",name:"coupon",placeholder:"請輸入優惠券序號"},domProps:{value:t.form.coupon},on:{input:function(a){a.target.composing||t.$set(t.form,"coupon",a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-primary font-weight-bold",attrs:{type:"button"},on:{click:t.searchCoupon}},[t._v("使用優惠券")])])])]),0!==t.couponMoneySaved?s("li",{staticClass:"w-100 pt-4 pb-2 mb-4 text-right textli"},[s("del",[t._v("總計："+t._s(t.cartTotal)+" 元")]),s("p",{staticClass:"font-weight-bold text-danger mb-4"},[t._v("折扣：- "+t._s(t.couponMoneySaved)+" 元 ( "+t._s(100-t.couponPercent)+"% 折扣 )")]),s("div",{staticClass:"d-flex justify-content-between"},[s("p",{staticClass:"h4 "},[t._v("總計：")]),s("p",{staticClass:"h4"},[t._v(t._s(t.cartTotal-t.couponMoneySaved)+" 元")])])]):s("li",{staticClass:"w-100 pt-4 pb-2 my-4 textli"},[s("div",{staticClass:"d-flex justify-content-between"},[s("p",{staticClass:"h4 "},[t._v("總計：")]),s("p",{staticClass:"h4 "},[t._v(t._s(t.cartTotal)+" 元")])])]),s("li",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.showForm}},[t._v("買單去")])])])])]),s("div",{staticClass:"row py-4 d-none",attrs:{id:"form"}},[s("div",{staticClass:"col-12 col-md-8 mx-auto form py-4 px-4"},[s("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.invalid;return[s("form",{on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"name"}},[t._v("收件人姓名")]),s("span",{staticClass:"text-danger"},[t._v("*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:o,attrs:{id:"name",type:"text",name:"收件人姓名"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),e[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"email|required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"email"}},[t._v("信箱")]),s("span",{staticClass:"text-danger"},[t._v("*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:o,attrs:{type:"email",name:"信箱",id:"email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),e[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"min:8|required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"tel"}},[t._v("電話")]),s("span",{staticClass:"text-danger"},[t._v("*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:o,attrs:{type:"tel",name:"電話",id:"tel"},domProps:{value:t.form.tel},on:{input:function(a){a.target.composing||t.$set(t.form,"tel",a.target.value)}}}),e[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"address"}},[t._v("地址")]),s("span",{staticClass:"text-danger"},[t._v("*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:o,attrs:{type:"text",name:"地址",id:"address"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),e[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"payment"}},[t._v("購買方式")]),s("span",{staticClass:"text-danger"},[t._v("*")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",class:o,attrs:{name:"購買方式",id:"payment"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.form,"payment",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",disabled:""}},[t._v("請輸入付款方式")]),t._l(t.payment,(function(a,e){return s("option",{key:e,domProps:{value:a}},[t._v(t._s(a))])}))],2),e[0]?s("span",{staticClass:"text-danger"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"message"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"留言",id:"message"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),s("div",{staticClass:"d-flex justify-content-between"},[s("button",{staticClass:"btn btn-outline-primary border-0",attrs:{type:"button"},on:{click:t.returnToCartlist}},[s("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","angle-left"]}}),t._v(" 返回 ")],1),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e}},[t._v("送出訂單")])])])]}}])})],1)]),s("div",{staticClass:"row py-4 thx d-none",attrs:{id:"thx"}},[s("div",{staticClass:"col-12 col-md-7 col-lg-6 text-center py-4 px-4"},[s("div",{staticClass:"txt"},[s("p",{staticClass:"h2 my-4"},[t._v("訂單建立成功")]),s("p",{staticClass:"my-4"},[t._v("謝謝您的光臨！")]),s("button",{staticClass:"btn btn-primary px-5 py-2",attrs:{type:"button"},on:{click:t.toProducts}},[t._v("繼續逛逛")])])]),t._m(2)])]),s("div",{staticClass:"container-fluid footer bg-primary text-center"},[s("div",{staticClass:"container py-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 mb-4 mb-md-0 d-flex flex-column\n                justify-content-center align-items-center"},[s("router-link",{staticClass:"h1 text-white font-weight-bold px-4 logo",attrs:{to:"/"}},[t._v("木's design")])],1),t._m(3),s("div",{staticClass:"col-md-4"},[s("ul",{staticClass:"d-flex justify-content-around  align-items-center mb-0 pl-0"},[s("li",[s("a",{staticClass:"icon",attrs:{href:"https://www.facebook.com/profile.php?id=100003064961458"}},[s("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),s("li",[s("a",{staticClass:"icon",attrs:{href:"https://www.instagram.com/8736.yo/"}},[s("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),s("li",[s("a",{staticClass:"icon",attrs:{href:"https://github.com/yo02741"}},[s("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),s("li",[s("a",{staticClass:"icon",attrs:{href:"https://codepen.io/yo02741"}},[s("font-awesome-icon",{attrs:{icon:["fab","codepen"]}})],1)])])])])])])],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"thead-light"},[s("tr",[s("th",{attrs:{width:"75"}},[t._v("刪除")]),s("th",{attrs:{width:"300"}},[t._v("品名")]),s("th",{attrs:{width:"300"}},[t._v("數量")]),s("th",{staticClass:"text-center",attrs:{width:"75"}},[t._v("單價")]),s("th",{staticClass:"text-center",attrs:{width:"75"}},[t._v("小計")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-none d-md-block col-md-5 col-lg-6 picture"},[s("p",{staticClass:"w-100 text-white text-center pictureTxt"},[t._v("THANK"),s("br"),t._v("YOU")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-4 mb-4 mb-md-0 d-flex flex-column\n                justify-content-center align-items-center"},[s("p",{staticClass:"text-white mb-0"},[t._v("Copyright © 2020 木's design")]),s("p",{staticClass:"text-white mb-0"},[t._v("純屬練習，不做商業行為。")]),s("p",{staticClass:"text-white mb-0"},[t._v("圖片來源：unsplash、pexels")])])}],i=(s("99af"),s("4160"),s("b64b"),s("159b"),s("1157")),n=s.n(i),r={data:function(){return{isLoading:!1,cart:{},cartTotal:0,api:{uuid:"3f7b1d29-d350-4de5-92ca-9b0bdfb7ca45",apiPath:"https://course-ec-api.hexschool.io/"},payment:["WebATM","ATM","Barcode","Credit","ApplePay","GooglePay"],form:{name:"",email:"",tel:"",address:"",payment:"",message:"",coupon:""},couponPercent:0,couponMoneySaved:0}},methods:{getCart:function(){var t=this,a="".concat(this.api.apiPath,"api/").concat(this.api.uuid,"/ec/shopping");this.isLoading=!0,this.$http.get(a).then((function(a){t.cartTotal=0,t.isLoading=!1,t.cart=a.data.data,t.cart.forEach((function(a){t.cartTotal+=a.product.price*a.quantity})),0!==t.couponPercent&&(t.couponMoneySaved=t.cartTotal-parseInt(t.cartTotal/100*t.couponPercent,10))})).catch((function(a){t.isLoading=!1}))},changeQuantity:function(t,a){var s=this,e="".concat(this.api.apiPath,"api/").concat(this.api.uuid,"/ec/shopping"),o={product:t,quantity:a};this.isLoading=!0,this.$http.patch(e,o).then((function(t){s.isLoading=!1,s.getCart()})).catch((function(t){s.isLoading=!1,s.getCart()}))},delProduct:function(t){var a=this,s="".concat(this.api.apiPath,"api/").concat(this.api.uuid,"/ec/shopping/").concat(t);this.isLoading=!0,this.$http.delete(s).then((function(t){a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,a.getCart()}))},delProducts:function(){var t=this,a="".concat(this.api.apiPath,"api/").concat(this.api.uuid,"/ec/shopping/all/product");this.isLoading=!0,this.$http.delete(a).then((function(a){t.isLoading=!1,t.getCart()})).catch((function(a){t.isLoading=!1,t.getCart()}))},searchCoupon:function(){var t=this;if(""===this.form.coupon)this.$swal.fire({icon:"error",title:"請輸入優惠券序號！",text:"",confirmButtonColor:"#B38C4D"}).then((function(a){a&&(t.form.coupon="",t.couponPercent=0,t.couponMoneySaved=0,t.getCart())}));else{var a="".concat(this.api.apiPath,"api/").concat(this.api.uuid,"/ec/coupon/search");this.isLoading=!0,this.$http.post(a,{code:this.form.coupon}).then((function(a){t.isLoading=!1,t.couponPercent=a.data.data.percent,t.getCart()})).catch((function(a){t.isLoading=!1,t.$swal.fire({icon:"error",title:"無此優惠券代碼！",text:"請再確認一次",confirmButtonColor:"#B38C4D"}).then((function(a){a&&(t.form.coupon="",t.couponPercent=0,t.couponMoneySaved=0,t.getCart())}))}))}},createOrder:function(){var t=this;if(0===Object.keys(this.cart).length)this.$swal.fire({icon:"error",title:"您的購物車是空的喔！",text:"Let's Go Shopping！",confirmButtonColor:"#B38C4D"}).then((function(a){a&&t.$router.push("/products")}));else{var a="".concat(this.api.apiPath,"api/").concat(this.api.uuid,"/ec/orders");this.isLoading=!0,this.$http.post(a,this.form).then((function(a){t.isLoading=!1,t.couponPercent=a.data.data.percent,n()("#form").removeClass("d-block"),n()("#form").addClass("d-none"),n()("#thx").removeClass("d-none"),n()("#thx").addClass("d-flex"),n()("#stepThreeArea").removeClass("stepsstandby"),n()("#stepThreeArea").addClass("stepsING"),n()("#stepThreeIcon").addClass("bg-primary"),n()("html,body").animate({scrollTop:200},"slow")}))}},showForm:function(){n()("#cartlist").removeClass("d-block"),n()("#cartlist").addClass("d-none"),n()("#form").removeClass("d-none"),n()("#form").addClass("d-block"),n()("#stepTwoArea").removeClass("stepsstandby"),n()("#stepTwoArea").addClass("stepsING"),n()("#stepNext").removeClass("stepsstandby"),n()("#stepNext").addClass("stepsING"),n()("#stepTwoIcon").addClass("bg-primary"),n()("html,body").animate({scrollTop:200},"slow")},returnToCartlist:function(){n()("#form").removeClass("d-block"),n()("#form").addClass("d-none"),n()("#cartlist").removeClass("d-none"),n()("#cartlist").addClass("d-block"),n()("#stepTwoArea").removeClass("stepsING"),n()("#stepTwoArea").addClass("stepsstandby"),n()("#stepNext").removeClass("stepsING"),n()("#stepNext").addClass("stepsstandby"),n()("#stepTwoIcon").removeClass("bg-primary"),n()("html,body").animate({scrollTop:200},"slow")},toProducts:function(){this.$router.push("/products")}},created:function(){this.getCart(),n()("html,body").animate({scrollTop:0},"slow")}},c=r,l=s("2877"),d=Object(l["a"])(c,e,o,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-fda9c94c.7f666dc0.js.map