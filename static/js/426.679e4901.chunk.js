"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[426],{854:function(e,t,n){n.d(t,{a:function(){return u}});var r=n(870),a=n(184),u=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"orangered",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},426:function(e,t,n){n.r(t);var r=n(439),a=n(791),u=n(364),c=n(854),i=n(689),s=n(87),o=n(184);t.default=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],p=t[1],f=(0,a.useState)([]),l=(0,r.Z)(f,2),d=l[0],h=l[1],v=(0,a.useState)(!1),g=(0,r.Z)(v,2),m=g[0],x=g[1],w=(0,i.TH)();(0,a.useEffect)((function(){x(!0),(0,u.z1)(n).then((function(e){x(!0),e.results.length?(h(e.results),x(!1)):x(!1)}))}),[n]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(e.currentTarget.elements.search.value),e.currentTarget.reset()},children:[(0,o.jsx)("input",{type:"text",name:"search",placeholder:"search movie"}),(0,o.jsx)("button",{type:"submit",children:"SEARCH"})]}),(0,o.jsxs)("ul",{children:[m&&(0,o.jsx)(c.a,{}),!d.length&&"Enter name film",d.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:w},children:e.original_title})},e.id)}))]})]})}},364:function(e,t,n){n.d(t,{Hg:function(){return s},Jh:function(){return f},TP:function(){return o},z1:function(){return l},zv:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="30b92e886ebe536d021caf51a30c3282",s=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=426.679e4901.chunk.js.map