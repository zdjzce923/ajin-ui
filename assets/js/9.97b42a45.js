(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{390:function(t,e,s){"use strict";var n=s(10),r=s(4),a=s(214),c=s(35),o=s(7),i=s(30),l=s(394),u=s(58),f=s(215),p=s(2),v=s(31),h=s(57).f,d=s(36).f,m=s(9).f,g=s(392).trim,_=r.Number,b=_.prototype,w="Number"==i(v(b)),j=function(t){if(u(t))throw TypeError("Cannot convert a Symbol value to a number");var e,s,n,r,a,c,o,i,l=f(t,"number");if("string"==typeof l&&l.length>2)if(43===(e=(l=g(l)).charCodeAt(0))||45===e){if(88===(s=l.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+l}for(c=(a=l.slice(2)).length,o=0;o<c;o++)if((i=a.charCodeAt(o))<48||i>r)return NaN;return parseInt(a,n)}return+l};if(a("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var C,N=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof N&&(w?p((function(){b.valueOf.call(s)})):"Number"!=i(s))?l(new _(j(e)),s,N):j(e)},y=n?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;y.length>E;E++)o(_,C=y[E])&&!o(N,C)&&m(N,C,d(_,C));N.prototype=b,b.constructor=N,c(r,"Number",N)}},391:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},392:function(t,e,s){var n=s(29),r=s(25),a="["+s(391)+"]",c=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),i=function(t){return function(e){var s=r(n(e));return 1&t&&(s=s.replace(c,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:i(1),end:i(2),trim:i(3)}},394:function(t,e,s){var n=s(5),r=s(121);t.exports=function(t,e,s){var a,c;return r&&"function"==typeof(a=e.constructor)&&a!==s&&n(c=a.prototype)&&c!==s.prototype&&r(t,c),t}},398:function(t,e,s){},399:function(t,e,s){},401:function(t,e,s){"use strict";s(398)},402:function(t,e,s){"use strict";s(399)},404:function(t,e,s){"use strict";var n=s(38),r=(s(122),s(119),s(120),s(216),s(390),s(217),function(t){var e=Object.keys(t),s=!0;return e.forEach((function(t){["span","offset"].includes(t)||(s=!1)})),s}),a={name:"AJinCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:r},narrowPc:{type:Object,validator:r},pc:{type:Object,validator:r},widePc:{type:Object,validator:r}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(e).concat(t.span)),t.offset&&s.push("offset-".concat(e).concat(t.offset)),s}},computed:{colClass:function(){var t=this.span,e=this.offset,s=this.ipad,r=this.narrowPc,a=this.pc,c=this.widePc,o=this.createClasses;return[].concat(Object(n.a)(o({span:t,offset:e})),Object(n.a)(o(s,"ipad-")),Object(n.a)(o(r,"narrow-pc-")),Object(n.a)(o(a,"pc-")),Object(n.a)(o(c,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},c=(s(401),s(56)),o=Object(c.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"0651042f",null);e.a=o.exports},405:function(t,e,s){"use strict";s(390),s(212),s(119),s(120);var n={name:"AjinRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))}},r=(s(402),s(56)),a=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"97ea0418",null);e.a=a.exports},455:function(t,e,s){},501:function(t,e,s){"use strict";s(455)},530:function(t,e,s){"use strict";s.r(e);var n=s(404),r=s(405),a={components:{"j-col":n.a,"j-row":r.a}},c=(s(501),s(56)),o=Object(c.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"offset-wrapper"},[s("j-row",{staticClass:"row"},[s("j-col",{staticClass:"item",attrs:{span:"8"}},[s("span",[t._v("col-8")])]),t._v(" "),s("j-col",{staticClass:"item",attrs:{span:"8"}},[s("span",[t._v("col-8")])]),t._v(" "),s("j-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[s("span",[t._v("col-4")])])],1),t._v(" "),s("j-row",{staticClass:"row"},[s("j-col",{staticClass:"item",attrs:{span:"8"}},[s("span",[t._v("col-8")])]),t._v(" "),s("j-col",{staticClass:"item",attrs:{span:"5",offset:"3"}},[s("span",[t._v("col-5")])]),t._v(" "),s("j-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[s("span",[t._v("col-4")])])],1),t._v(" "),s("j-row",{staticClass:"row"},[s("j-col",{staticClass:"item",attrs:{span:"2",offset:"6"}},[s("span",[t._v("col-2")])]),t._v(" "),s("j-col",{staticClass:"item",attrs:{span:"5",offset:"3"}},[s("span",[t._v("col-5")])]),t._v(" "),s("j-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[s("span",[t._v("col-4")])])],1)],1)}),[],!1,null,"fe25dbf2",null);e.default=o.exports}}]);