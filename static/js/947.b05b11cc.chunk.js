"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{947:function(e,n,t){t.r(n);var r=t(439),c=t(791),a=t(689),s=t(87),i=t(390),u=t(184);n.default=function(){var e=(0,a.UO)().movieId,n=(0,c.useState)(null),t=(0,r.Z)(n,2),o=t[0],p=t[1];return(0,c.useEffect)((function(){(0,i.s_)(e).then((function(e){p(e)})).catch((function(e){console.log(e)}))}),[e]),(0,u.jsxs)("section",{children:[null!==o&&(0,u.jsxs)("section",{children:[(0,u.jsxs)("h2",{children:[o.title," (",o.release_date.slice(0,4),")"]}),(0,u.jsx)("img",{src:"https://www.themoviedb.org/t/p/w500"+o.poster_path,alt:o.title,width:"300px"}),(0,u.jsxs)("p",{children:["User Score: ",(10*o.vote_average).toFixed(2),"%"]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:o.overview})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Genres"}),o.genres.length>0?o.genres.map((function(e){return(0,u.jsx)("li",{children:e.name},e.id)})):""]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(s.OL,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(s.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,u.jsx)(c.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading subpage..."}),children:(0,u.jsx)(a.j3,{})})]})}},390:function(e,n,t){t.d(n,{IQ:function(){return l},JN:function(){return o},Tn:function(){return h},s_:function(){return p},zp:function(){return v}});var r=t(861),c=t(757),a=t.n(c),s=t(243),i="https://api.themoviedb.org/3",u="5591255f50bf473d44ec0f5688b59618",o=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(i,"/trending/movie/day?api_key=").concat(u,"&language=en-US&page=1"),e.next=4,s.Z.get(n);case 4:return t=e.sent,e.next=7,t.data;case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(i,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US&page=1"),e.next=4,s.Z.get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US&page=1"),e.next=4,s.Z.get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),e.next=4,s.Z.get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=1}"),r=s.Z.get(t),e.abrupt("return",r);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=947.b05b11cc.chunk.js.map