"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(439),a=t(791),c=t(689),u=t(390),s=t(184);n.default=function(){var e=(0,a.useState)(null),n=(0,r.Z)(e,2),t=n[0],o=n[1],i=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Tn)(i).then((function(e){o(e)})).catch((function(e){console.log(e)}))}),[i]),(0,s.jsx)("section",{children:null!==t&&0===t.results.length?(0,s.jsx)("p",{children:"There is no reviews"}):(0,s.jsx)("ul",{children:null!==t&&t.results.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Author: ",e.author]}),e.content]},e.id)}))})})}},390:function(e,n,t){t.d(n,{IQ:function(){return f},JN:function(){return i},Tn:function(){return l},s_:function(){return p},zp:function(){return h}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s="https://api.themoviedb.org/3",o="5591255f50bf473d44ec0f5688b59618",i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(s,"/trending/movie/day?api_key=").concat(o,"&language=en-US&page=1"),e.next=4,u.Z.get(n);case 4:return t=e.sent,e.next=7,t.data;case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US&page=1"),e.next=4,u.Z.get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US&page=1"),e.next=4,u.Z.get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),e.next=4,u.Z.get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1}"),r=u.Z.get(t),e.abrupt("return",r);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.c338f189.chunk.js.map