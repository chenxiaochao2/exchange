(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function s(t,e){switch(o(e)){case"Function":return"function() { [native code] }";default:return e}}function r(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];console[t].apply(console,n)}function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,s)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=o(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),c="";if(a.length>1){var u=a.pop();c=a.join("---COMMA---"),0===u.indexOf(" at ")?c+=u:c+="---COMMA---"+u}else c=a[0];console[r](c)}n.r(e),n.d(e,"log",(function(){return r})),n.d(e,"default",(function(){return a}))},"29aa":function(t,e,n){"use strict";n("6d5d");var o=s(n("8bbf")),i=s(n("9cf4"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,i.default.mpType="app";var u=new o.default(a({},i.default));u.$mount()},"52f8":function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{title:"Hello",count:0,status1:0,status2:0,status3:0,status4:0,start_mouseY:0,mouseY:0,item_list_box_offsetTop:0,position:[1,2,3,4],timer:null,tmpPosition:{index1:1,index2:2,index3:3,index4:4},tmpP:1,top1:0,top2:"50px",top3:"100px",top4:"150px"}},onLoad:function(){},mounted:function(){n=this},methods:{drog:function(t,e){this.tmpP=this.position[e];var n=window?window.event:t;this.start_mouseY=n.changedTouches["0"].pageY;for(var o=1;o<5;o++)this["status"+o]=o==e?1:2;switch(e){case 1:12;break;case 2:50;break;case 3:100;break;case 4:150;break}},loose:function(e){clearTimeout(this.timer);for(var n=1;n<5;n++)this["status"+n]=0;this.position=[this.tmpPosition.index1,this.tmpPosition.index2,this.tmpPosition.index3,this.tmpPosition.index4];var o=50;"undefined"!==typeof window?document.getElementById("drog"+e).style.top=(this.position[e-1]-1)*o+"px":(t("log",this.position,"this.position"," at pages/index/index.vue:137"),t("log","top"+e,(this.position[e-1]-1)*o,"========="," at pages/index/index.vue:138"),this["top"+e]=(this.position[e-1]-1)*o+"px")},mousemove:function(t,e){var n=this,o=window?window.event:t;null!=this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(t){n.mouseY=o.changedTouches["0"].pageY;var e=50,r=(n.position[t-1]-1)*e+(n.mouseY-n.start_mouseY);r<0?r=0:r>3*e&&(r=3*e),"undefined"!=typeof window?document.getElementById("drog"+t).style.top=r+"px":n["top"+t]=r+"px",i(s(e,r,t),200)}),10,e)}}};e.default=o;var i=function(t,e){var n=Date.now();return function(){var o=this,i=arguments,s=Date.now();s-n>=e&&(t.apply(o,i),n=Date.now())}};function s(t,e,o){e=parseInt(e);var i=0;if(i=e<25?1:25<=e&&e<75?2:75<=e&&e<125?3:4,0!==i&&i!=n.tmpP){n.tmpP=i;var s=1;for(var r in n.tmpPosition)n.tmpPosition[r]==i&&(s=r);var a=n.tmpPosition["index"+o];n.tmpPosition["index"+o]=i,n.tmpPosition[s]=a,"undefined"!=typeof window?document.getElementById("drog"+s.replace("index","")).style.top=(n.tmpPosition[s]-1)*t+"px":n["top"+s.replace("index","")]=(n.tmpPosition[s]-1)*t+"px"}}}).call(this,n("0de9")["default"])},"6d5d":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("d555").default)}))},"8bbf":function(t,e){t.exports=Vue},"8e30":function(t,e,n){"use strict";n.r(e);var o=n("c638"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a},"9cf4":function(t,e,n){"use strict";n.r(e);var o=n("8e30");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var s,r,a,c,u=n("f0c5"),f=Object(u["a"])(o["default"],s,r,!1,null,null,null,!1,a,c);e["default"]=f.exports},c173:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{ref:"itemList",staticClass:t._$s(1,"sc","item_list"),attrs:{id:"itemList",_i:1}},[n("view",{ref:"drog1",class:t._$s(2,"c",[1==t.status1?"item aimon":2==t.status1?"item aimin":"item"]),style:t._$s(2,"s",{top:t.top1}),attrs:{id:"drog1",_i:2},on:{touchmove:function(e){return t.mousemove(e,1)},touchend:function(e){return t.loose(1)},touchstart:function(e){return t.drog(e,1)}}},[n("view",{staticClass:t._$s(3,"sc","circle"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.tmpPosition.index1)))]),n("view",{staticClass:t._$s(4,"sc","text"),attrs:{_i:4}}),n("view",{staticClass:t._$s(5,"sc","icon"),attrs:{_i:5}})]),n("view",{ref:"drog2",class:t._$s(6,"c",[1==t.status2?"item aimon":2==t.status2?"item aimin":"item"]),style:t._$s(6,"s",{top:t.top2}),attrs:{id:"drog2",_i:6},on:{touchmove:function(e){return t.mousemove(e,2)},touchend:function(e){return t.loose(2)},touchstart:function(e){return t.drog(e,2)}}},[n("view",{staticClass:t._$s(7,"sc","circle"),attrs:{_i:7}},[t._v(t._$s(7,"t0-0",t._s(t.tmpPosition.index2)))]),n("view",{staticClass:t._$s(8,"sc","text"),attrs:{_i:8}}),n("view",{staticClass:t._$s(9,"sc","icon"),attrs:{_i:9}})]),n("view",{ref:"drog3",class:t._$s(10,"c",[1==t.status3?"item aimon":2==t.status3?"item aimin":"item"]),style:t._$s(10,"s",{top:t.top3}),attrs:{id:"drog3",_i:10},on:{touchmove:function(e){return t.mousemove(e,3)},touchend:function(e){return t.loose(3)},touchstart:function(e){return t.drog(e,3)}}},[n("view",{staticClass:t._$s(11,"sc","circle"),attrs:{_i:11}},[t._v(t._$s(11,"t0-0",t._s(t.tmpPosition.index3)))]),n("view",{staticClass:t._$s(12,"sc","text"),attrs:{_i:12}}),n("view",{staticClass:t._$s(13,"sc","icon"),attrs:{_i:13}})]),n("view",{ref:"drog4",class:t._$s(14,"c",[1==t.status4?"item aimon":2==t.status4?"item aimin":"item"]),style:t._$s(14,"s",{top:t.top4}),attrs:{id:"drog4",_i:14},on:{touchmove:function(e){return t.mousemove(e,4)},touchend:function(e){return t.loose(4)},touchstart:function(e){return t.drog(e,4)}}},[n("view",{staticClass:t._$s(15,"sc","circle"),attrs:{_i:15}},[t._v(t._$s(15,"t0-0",t._s(t.tmpPosition.index4)))]),n("view",{staticClass:t._$s(16,"sc","text"),attrs:{_i:16}}),n("view",{staticClass:t._$s(17,"sc","icon"),attrs:{_i:17}})])])])},s=[]},c638:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},d555:function(t,e,n){"use strict";n.r(e);var o=n("c173"),i=n("ed1c");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var r,a=n("f0c5"),c=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},ed1c:function(t,e,n){"use strict";n.r(e);var o=n("52f8"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a},f0c5:function(t,e,n){"use strict";function o(t,e,n,o,i,s,r,a,c,u){var f,l="function"===typeof t?t.options:t;if(c){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in c)p.call(c,d)&&!p.call(l.components,d)&&(l.components[d]=c[d])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(l.mixins||(l.mixins=[])).push(u)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=f):i&&(f=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))}},[["29aa","app-config"]]]);