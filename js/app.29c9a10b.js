(function(e){function t(t){for(var s,r,a=t[0],c=t[1],l=t[2],g=0,f=[];g<a.length;g++)r=a[g],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],s=!0,a=1;a<i.length;a++){var c=i[a];0!==n[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},n={app:0},o=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/TimeTrackDashboard/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},1771:function(e,t,i){var s={"./design/active-states.jpg":"ceb5","./design/desktop-design.jpg":"b78b","./design/desktop-preview.jpg":"a449","./design/mobile-design.jpg":"34b1","./favicon-32x32.png":"7c66","./icon-ellipsis.svg":"b252","./icon-exercise.svg":"8143","./icon-play.svg":"52eb","./icon-self-care.svg":"610b","./icon-social.svg":"9539","./icon-study.svg":"5bb1","./icon-work.svg":"9df8","./image-jeremy.png":"6a49","./logo.png":"cf05"};function n(e){var t=o(e);return i(t)}function o(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id="1771"},"34b1":function(e,t,i){e.exports=i.p+"img/mobile-design.fb21f04a.jpg"},"3bb0":function(e,t,i){},"52eb":function(e,t,i){e.exports=i.p+"img/icon-play.1a5250a3.svg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"per"},[i("Person",{on:{select:function(t){return e.changetab(t)}}})],1),i("div",{staticClass:"types"},e._l(e.data,(function(e){return i("div",{key:e.time,staticClass:"some"},[i("Card",{attrs:{Item:e}})],1)})),0)])},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"profile"},[e._m(0),e._l(e.tabs,(function(t){return i("button",{key:t,class:{selectedbtn:e.currentTab==t},on:{click:function(i){return e.selected(t)}}},[e._v(e._s(t))])}))],2)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"div1"},[s("div",[s("img",{attrs:{src:i("6a49"),alt:"dafskdjfsdfsk"}})]),s("div",{staticClass:"names"},[s("p",[e._v("Report for")]),s("h1",{staticClass:"nameh1"},[e._v("Jeremy Robson")])])])}],c={name:"Person",data:function(){return{currentTab:"Weakly",tabs:["Daily","Weakly","Monthly"]}},methods:{selected:function(e){this.currentTab=e,this.$emit("select",e)}}},l=c,u=(i("fbe3"),i("2877")),g=Object(u["a"])(l,r,a,!1,null,"16866735",null),f=g.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card",style:{"background-image":"url("+i("1771")("./"+e.item.image)+")","background-color":e.item.color}},[s("div",{staticClass:"sub"},[s("div",[s("p",{staticClass:"p1"},[e._v(e._s(e.item.title))]),s("h3",{staticClass:"h3"},[e._v(e._s(e.item.time)+"hrs")])]),s("div",[s("img",{attrs:{src:i("b252"),alt:""}}),s("p",{staticClass:"last"},[e._v("Last Week - "+e._s(e.item.last)+"hrs")])])])])},A=[],d={name:"Card",props:["Item"],data:function(){return{item:this.Item}}},m=d,v=(i("76eb"),Object(u["a"])(m,p,A,!1,null,"a8ec07e6",null)),b=v.exports,h={name:"App",components:{Person:f,Card:b},data:function(){return{types:{Weakly:[{title:"Work",time:"32",last:"36",image:"icon-work.svg",color:"hsl(15, 100%, 70%)"},{title:"Play",time:"10",last:"8",image:"icon-play.svg",color:"hsl(195, 74%, 62%)"},{title:"Study",time:"4",last:"7",image:"icon-study.svg",color:"hsl(348, 100%, 68%)"},{title:"Exercise",time:"4",last:"5",image:"icon-exercise.svg",color:"hsl(145, 58%, 55%)"},{title:"Social",time:"5",last:"10",image:"icon-social.svg",color:"hsl(264, 64%, 52%)"},{title:"Self Care",time:"2",last:"2",image:"icon-self-care.svg",color:"hsl(43, 84%, 65%)"}],Daily:[{title:"Work",time:"5",last:"7",image:"icon-work.svg",color:"hsl(15, 100%, 70%)"},{title:"Play",time:"1",last:"2",image:"icon-play.svg",color:"hsl(195, 74%, 62%)"},{title:"Study",time:"0",last:"1",image:"icon-study.svg",color:"hsl(348, 100%, 68%)"},{title:"Exercise",time:"1",last:"1",image:"icon-exercise.svg",color:"hsl(145, 58%, 55%)"},{title:"Social",time:"1",last:"3",image:"icon-social.svg",color:"hsl(264, 64%, 52%)"},{title:"Self Care",time:"0",last:"1",image:"icon-self-care.svg",color:"hsl(43, 84%, 65%)"}],Monthly:[{title:"Work",time:"103",last:"128",image:"icon-work.svg",color:"hsl(15, 100%, 70%)"},{title:"Play",time:"23",last:"19",image:"icon-play.svg",color:"hsl(195, 74%, 62%)"},{title:"Study",time:"13",last:"19",image:"icon-study.svg",color:"hsl(348, 100%, 68%)"},{title:"Exercise",time:"11",last:"18",image:"icon-exercise.svg",color:"hsl(145, 58%, 55%)"},{title:"Social",time:"21",last:"23",image:"icon-social.svg",color:"hsl(264, 64%, 52%)"},{title:"Self Care",time:"7",last:"11",image:"icon-self-care.svg",color:"hsl(43, 84%, 65%)"}]},data:null}},mounted:function(){this.data=this.types.Weakly},methods:{changetab:function(e){"Daily"==e&&(this.data=this.types.Daily),"Monthly"==e&&(this.data=this.types.Monthly),"Weakly"==e&&(this.data=this.types.Weakly)}}},y=h,x=(i("034f"),Object(u["a"])(y,n,o,!1,null,null,null)),k=x.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(k)}}).$mount("#app")},"5bb1":function(e,t,i){e.exports=i.p+"img/icon-study.267a0ddf.svg"},"610b":function(e,t,i){e.exports=i.p+"img/icon-self-care.78d6a4cc.svg"},"6a49":function(e,t,i){e.exports=i.p+"img/image-jeremy.470490fe.png"},"76eb":function(e,t,i){"use strict";i("8cee")},"7c66":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABO1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////l9Pff8fS54ein2eOn2eL9/v684unr9vj7/f7c8PSl2eKHzNil2OLv+Prz+vue1eB3xdOq2uPm9Pf29/vy8/n3/Py13+eEyteZ097P6u/2+/zByeKOm8r8/f7u+Pq+4+qOz9uU0dzo9fjb4O5meLbh5fH0+vvV7fHx+fv8/P2Gk8Wbps+44eim2eLW2+xkdrXO1Oit3OWttthperja3u7u+Pn6+/2hrNJneLfFy+P7+/23v92IlcbN0ufx8/nj5/Kbp9BsfbltfrqAj8ORnsvg5PD+/v/v8ffQ1em0vduqtNfn6vS/61TcAAAAHHRSTlMAAAQqbK3Z8v0DN5ff+xqJ6jbC/kHBAjjp3qz8qSKHsgAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiChMPAx5FOtlkAAABSUlEQVQ4y4WTZ2OCMBCGc4IMEXAPjB10771t7dLuXbv3/v+/oNigIYjN+4HcJU9CcgMhVxASxLAkK4oshUUhBIgVqBEtqmNXelSLqF4EwDBjmFHMNADoejyRxD4lE/EGAZCScICkFCGc/YHrDkHOACON2yhtOABkTNxWZgYQZHPeqWKH18tlAakas6ezi3E1FQl5Fuhm3LyARD0AsIs9vSSmIrJwC9DXPzA4NEx8C0ktwMjo2PiE3YgFkokxOdUEpmdm5+YXXEBGCjEWl5bpHVZKq2tlMq+gAjHWNza9r9jarpD5QuMX1Z3dv3Fvn72T3LzkweFRfSgd+xJGn3lyeuZ8K+csYNFAXVzWrqr+bDmBoqG+vqnd3t3bDOCE2push8en55fXNzZZTLrfPz6/vn+oX083t2C4JccvWm7Z8xuH33r85v2v/X8Bp/FiyVLnL/0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTAtMTlUMTU6MDM6MzArMDI6MDCzEaEaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEwLTE5VDE1OjAzOjMwKzAyOjAwwkwZpgAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="},8143:function(e,t,i){e.exports=i.p+"img/icon-exercise.1f2aa98e.svg"},"85ec":function(e,t,i){},"8cee":function(e,t,i){},9539:function(e,t,i){e.exports=i.p+"img/icon-social.0572c3af.svg"},"9df8":function(e,t,i){e.exports=i.p+"img/icon-work.b166cda6.svg"},a449:function(e,t,i){e.exports=i.p+"img/desktop-preview.604c9ad2.jpg"},b252:function(e,t,i){e.exports=i.p+"img/icon-ellipsis.02ca93ed.svg"},b78b:function(e,t,i){e.exports=i.p+"img/desktop-design.3e8cbae4.jpg"},ceb5:function(e,t,i){e.exports=i.p+"img/active-states.e7cffc0b.jpg"},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"},fbe3:function(e,t,i){"use strict";i("3bb0")}});
//# sourceMappingURL=app.29c9a10b.js.map