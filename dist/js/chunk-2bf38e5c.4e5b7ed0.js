(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf38e5c"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"6cf7":function(t,e,n){"use strict";var a=n("8b26"),r=n.n(a);r.a},7156:function(t,e,n){var a=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var i,o;return r&&"function"==typeof(i=e.constructor)&&i!==n&&a(o=i.prototype)&&o!==n.prototype&&r(t,o),t}},"8b26":function(t,e,n){},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),o=n("6eeb"),c=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),m=n("d039"),f=n("7c73"),p=n("241c").f,d=n("06cf").f,_=n("9bf2").f,g=n("58a8").trim,h="Number",b=r[h],v=b.prototype,y=s(f(v))==h,N=function(t){var e,n,a,r,i,o,c,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(i=u.slice(2),o=i.length,c=0;c<o;c++)if(s=i.charCodeAt(c),s<48||s>r)return NaN;return parseInt(i,a)}return+u};if(i(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?m((function(){v.valueOf.call(n)})):s(n)!=h)?u(new b(N(e)),n,w):N(e)},E=a?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;E.length>x;x++)c(b,I=E[x])&&!c(w,I)&&_(w,I,d(b,I));w.prototype=v,v.constructor=w,o(r,h,w)}},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,o=i.toString,c=/^\s*function ([^ (]*)/,s="name";a&&!(s in i)&&r(i,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},c0ec:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card-text",[n("div",[n("PlayerPreview",{attrs:{id:t.id,team_name:t.team_name,name:t.name,position:t.position,imageURL:t.imageURL}})],1),n("div",{attrs:{align:"center"}},[t._v(" Common Name: "+t._s(t.common_name)+" "),n("br"),t._v(" Nationality: "+t._s(t.nationality)+" "),n("br"),t._v(" Birth Date: "+t._s(t.birth)+" "),n("br"),t._v(" Birth Country: "+t._s(t.birthcountry)+" "),n("br"),t._v(" Height: "+t._s(t.height)+" "),n("br"),t._v(" Weight: "+t._s(t.weight)+" "),n("br")])])],1)},r=[],i=(n("b0c0"),n("96cf"),n("1da1")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",[n("b-card-text",[n("ul",[n("div",[n("router-link",{attrs:{to:{name:"player_page_by_id",params:{id:t.id}}}},[n("img",{attrs:{src:t.imageURL}})])],1),n("div",[n("router-link",{attrs:{to:{name:"player_page_by_id",params:{id:t.id}}}},[n("b",[t._v("Full Name:")]),t._v(" "+t._s(t.name))])],1),n("li",[t._v(" Player ID: "+t._s(t.id))]),n("li",[t._v(" Team: "+t._s(t.team_name))]),n("li",[t._v(" Position: "+t._s(t.position))])])])],1)],1)},c=[],s=(n("a9e3"),{name:"PlayerPreview",props:{id:{type:Number,required:!0},name:{type:String,required:!0},team_name:{type:String,required:!0},position:{type:Number,required:!0},imageURL:{type:String}},mounted:function(){console.log("player preview mounted")}}),u=s,l=(n("6cf7"),n("2877")),m=Object(l["a"])(u,o,c,!1,null,null,null),f=m.exports,p={components:{PlayerPreview:f},name:"player_page_by_id",data:function(){return{id:0,name:"",imageURL:"",position:0,team_name:"",common_name:"",nationality:"",birth:"",birthcountry:"",height:"",weight:""}},methods:{getFull:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("start func"),e.next=4,t.axios.get("http://localhost:3000/players/fullPlayerInfo/id/[".concat(t.$route.params.id,"]"));case 4:n=e.sent,console.log(n.data),t.id=n.data[0].id,t.name=n.data[0].name,t.imageURL=n.data[0].image,t.position=n.data[0].position,t.team_name=n.data[0].team_name,t.common_name=n.data[0].common_name,t.nationality=n.data[0].nationality,t.birth=n.data[0].birth,t.birthcountry=n.data[0].birthcountry,t.height=n.data[0].height,t.weight=n.data[0].weight,console.log("finish func"),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](0),console.log(e.t0.response);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))()}},mounted:function(){console.log(" full details"),this.getFull()}},d=p,_=Object(l["a"])(d,a,r,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2bf38e5c.4e5b7ed0.js.map