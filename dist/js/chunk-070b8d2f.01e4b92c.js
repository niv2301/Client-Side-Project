(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-070b8d2f"],{4105:function(e,t,a){"use strict";var s=a("73e2"),n=a.n(s);n.a},5226:function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var s=a("1d80"),n=a("5899"),r="["+n+"]",i=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),o=function(e){return function(t){var a=String(s(t));return 1&e&&(a=a.replace(i,"")),2&e&&(a=a.replace(c,"")),a}};e.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(e,t,a){var s=a("861d"),n=a("d2bb");e.exports=function(e,t,a){var r,i;return n&&"function"==typeof(r=t.constructor)&&r!==a&&s(i=r.prototype)&&i!==a.prototype&&n(e,i),e}},"73e2":function(e,t,a){},a9e3:function(e,t,a){"use strict";var s=a("83ab"),n=a("da84"),r=a("94ca"),i=a("6eeb"),c=a("5135"),o=a("c6b6"),u=a("7156"),l=a("c04e"),m=a("d039"),d=a("7c73"),f=a("241c").f,p=a("06cf").f,_=a("9bf2").f,v=a("58a8").trim,h="Number",g=n[h],b=g.prototype,w=o(d(b))==h,I=function(e){var t,a,s,n,r,i,c,o,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+u}for(r=u.slice(2),i=r.length,c=0;c<i;c++)if(o=r.charCodeAt(c),o<48||o>n)return NaN;return parseInt(r,s)}return+u};if(r(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,y=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof y&&(w?m((function(){b.valueOf.call(a)})):o(a)!=h)?u(new g(I(t)),a,y):I(t)},N=s?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;N.length>E;E++)c(g,k=N[E])&&!c(y,k)&&_(y,k,p(g,k));y.prototype=b,b.constructor=y,i(n,h,y)}},eece:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",[a("WeeklyMatches"),a("TeamPreview",{attrs:{team_id:85,team_name:"København",teamImageURL:e.imageURL3}})],1)])},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-card",[a("b-card-text",[a("ul",{staticClass:"player-content"},[a("div",[a("router-link",{attrs:{to:{name:"team_page_by_id",params:{id:e.team_id}}}},[a("img",{attrs:{src:e.teamImageURL}})])],1),a("div",[a("router-link",{attrs:{to:{name:"team_page_by_id",params:{id:e.team_id}}}},[a("b",[e._v("Team Name:")]),e._v(" "+e._s(e.team_name))])],1)])])],1)],1)},i=[],c=(a("a9e3"),{name:"TeamPreview",props:{team_id:{type:Number,required:!0},team_name:{type:String,required:!0},teamImageURL:{type:String}},mounted:function(){console.log("team preview mounted")}}),o=c,u=(a("4105"),a("2877")),l=Object(u["a"])(o,r,i,!1,null,null,null),m=l.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("h3",{attrs:{align:"center"}},[e._v(" Past Matches")]),a("b-table",{attrs:{items:e.items_past,fields:e.fields_past,striped:"",responsive:"sm"},scopedSlots:e._u([{key:"cell(show_details)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Hide":"Show")+" Events ")])]}},{key:"row-details",fn:function(t){return[a("b-card",[a("b-table",{attrs:{items:t.item.events,fields:e.fields_events,striped:"",responsive:"sm"}},[a("b-button",{attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v("Hide Events")])],1)],1)]}}])})],1),a("div",[a("h3",{attrs:{align:"center"}},[e._v(" Future Matches")]),a("b-table",{attrs:{items:e.items_future,fields:e.fields_future,striped:"",responsive:"sm"},scopedSlots:e._u([{key:"cell(show_details)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{size:"sm"},on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Hide":"Show")+" Events ")])]}}])})],1)])},f=[],p=(a("96cf"),a("1da1")),_={data:function(){return{fields_past:["match_id","local_team","visitor_team","date_game","hour","venue","result","show_details"],fields_future:["match_id","local_team","visitor_team","date_game","hour","venue"],fields_events:["minute_event","description_event","hour"],items_past:[],items_future:[]}},methods:{GetWeeklyMatches:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("http://localhost:3000/weekly_matches/");case 3:a=t.sent,e.items_past=[],e.items_future=[],e.items_past=a.data[0],e.items_past._showDetails=!0,e.items_future=a.data[1],t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0.response),alert("Incorrect details !");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},mounted:function(){this.GetWeeklyMatches()}},v=_,h=Object(u["a"])(v,d,f,!1,null,null,null),g=h.exports,b={components:{TeamPreview:m,WeeklyMatches:g},name:"weekly_matches",data:function(){return{imageURL:"",imageURL2:"",imageURL3:""}},methods:{getImage:function(){this.imageURL="https://cdn.sportmonks.com/images/soccer/players/8/172104.png",this.imageURL2="https://cdn.sportmonks.com/images/soccer/players/19/5555.png",this.imageURL3="https://cdn.sportmonks.com/images//soccer/teams/21/85.png"}},mounted:function(){this.getImage()}},w=b,I=(a("fc40"),Object(u["a"])(w,s,n,!1,null,"669cf5d0",null));t["default"]=I.exports},fc40:function(e,t,a){"use strict";var s=a("5226"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-070b8d2f.01e4b92c.js.map