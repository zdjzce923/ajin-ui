(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{390:function(t,e,r){"use strict";var n=r(10),a=r(4),s=r(214),c=r(35),i=r(7),o=r(30),u=r(394),l=r(58),p=r(215),f=r(2),v=r(31),g=r(57).f,h=r(36).f,d=r(9).f,m=r(392).trim,_=a.Number,b=_.prototype,j="Number"==o(v(b)),w=function(t){if(l(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,a,s,c,i,o,u=p(t,"number");if("string"==typeof u&&u.length>2)if(43===(e=(u=m(u)).charCodeAt(0))||45===e){if(88===(r=u.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(c=(s=u.slice(2)).length,i=0;i<c;i++)if((o=s.charCodeAt(i))<48||o>a)return NaN;return parseInt(s,n)}return+u};if(s("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var N,C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(j?f((function(){b.valueOf.call(r)})):"Number"!=o(r))?u(new _(w(e)),r,C):w(e)},y=n?g(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;y.length>E;E++)i(_,N=y[E])&&!i(C,N)&&d(C,N,h(_,N));C.prototype=b,b.constructor=C,c(a,"Number",C)}},391:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},392:function(t,e,r){var n=r(29),a=r(25),s="["+r(391)+"]",c=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),o=function(t){return function(e){var r=a(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:o(1),end:o(2),trim:o(3)}},394:function(t,e,r){var n=r(5),a=r(121);t.exports=function(t,e,r){var s,c;return a&&"function"==typeof(s=e.constructor)&&s!==r&&n(c=s.prototype)&&c!==r.prototype&&a(t,c),t}},398:function(t,e,r){},399:function(t,e,r){},401:function(t,e,r){"use strict";r(398)},402:function(t,e,r){"use strict";r(399)},404:function(t,e,r){"use strict";var n=r(38),a=(r(122),r(119),r(120),r(216),r(390),r(217),function(t){var e=Object.keys(t),r=!0;return e.forEach((function(t){["span","offset"].includes(t)||(r=!1)})),r}),s={name:"AJinCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:a},narrowPc:{type:Object,validator:a},pc:{type:Object,validator:a},widePc:{type:Object,validator:a}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var r=[];return t.span&&r.push("col-".concat(e).concat(t.span)),t.offset&&r.push("offset-".concat(e).concat(t.offset)),r}},computed:{colClass:function(){var t=this.span,e=this.offset,r=this.ipad,a=this.narrowPc,s=this.pc,c=this.widePc,i=this.createClasses;return[].concat(Object(n.a)(i({span:t,offset:e})),Object(n.a)(i(r,"ipad-")),Object(n.a)(i(a,"narrow-pc-")),Object(n.a)(i(s,"pc-")),Object(n.a)(i(c,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},c=(r(401),r(56)),i=Object(c.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"0651042f",null);e.a=i.exports},405:function(t,e,r){"use strict";r(390),r(212),r(119),r(120);var n={name:"AjinRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))}},a=(r(402),r(56)),s=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"97ea0418",null);e.a=s.exports},452:function(t,e,r){},498:function(t,e,r){"use strict";r(452)},525:function(t,e,r){"use strict";r.r(e);var n=r(404),a=r(405),s={components:{"j-col":n.a,"j-row":a.a}},c=(r(498),r(56)),i=Object(c.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gutter-wrapper"},[r("j-row",{attrs:{gutter:"30"}},[r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-30;")])]),t._v(" "),r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-30;")])]),t._v(" "),r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-30;")])])],1),t._v(" "),r("j-row",{attrs:{gutter:"20"}},[r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-20;")])]),t._v(" "),r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-20;")])]),t._v(" "),r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-20;")])])],1),t._v(" "),r("j-row",{attrs:{gutter:"10"}},[r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-10;")])]),t._v(" "),r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-10;")])]),t._v(" "),r("j-col",{staticClass:"item",attrs:{span:"8"}},[r("span",[t._v(" col-8; gutter-10;")])])],1)],1)}),[],!1,null,"2a3259e0",null);e.default=i.exports}}]);