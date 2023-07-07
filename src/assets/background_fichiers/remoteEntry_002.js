var customer_notifications;!function(){"use strict";var n,e,t,r,u,o,i,f,c,a,l,s,d,h,p,b,m,v={8426:function(n,e,t){var r={"./CustomerNotifications":function(){return Promise.all([t.e(63),t.e(747),t.e(209)]).then((function(){return function(){return t(7601)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",u=t.S[r];if(u&&u!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return u},init:function(){return o}})}},g={};function y(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,loaded:!1,exports:{}};return v[n].call(t.exports,t,t.exports,y),t.loaded=!0,t.exports}y.m=v,y.c=g,y.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return y.d(e,{a:e}),e},y.d=function(n,e){for(var t in e)y.o(e,t)&&!y.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},y.f={},y.e=function(n){return Promise.all(Object.keys(y.f).reduce((function(e,t){return y.f[t](n,e),e}),[]))},y.u=function(n){return n+"-"+{36:"d69fe943097754678ead",63:"2bebc1fbc6c47d2db0d6",198:"b9e10109cfaaf6e094cf",209:"42102beaeea12fd22d89",294:"e67a82b3f4cdc4992c39",456:"4d211bba404ee266e6ba",585:"916e20d8429b21ed5319",601:"1c29ccf840382aa8fa46",664:"22fb00ed0ed9d769f860",721:"18847a7f3a25a02c723c",730:"a0b82c202563ca61db87",747:"f3d61946f2c938c18a5e",789:"c7b8eca37f272ffb60a5",798:"aec996b0750eda8175b1",829:"60c6cc1ee1cabb5f5bf7",935:"dc9e991d9d106e589685"}[n]+".js"},y.miniCssF=function(n){return"css/"+n+"-"+{209:"89ffbb21",664:"deb42204"}[n]+".chunk.css"},y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),y.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},n={},e="@unisporkal/customer-notifications:",y.l=function(t,r,u,o){if(n[t])n[t].push(r);else{var i,f;if(void 0!==u)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var l=c[a];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==e+u){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,y.nc&&i.setAttribute("nonce",y.nc),i.setAttribute("data-webpack",e+u),i.src=t),n[t]=[r];var s=function(e,r){i.onerror=i.onload=null,clearTimeout(d);var u=n[t];if(delete n[t],i.parentNode&&i.parentNode.removeChild(i),u&&u.forEach((function(n){return n(r)})),e)return e(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},y.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},y.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},function(){y.S={};var n={},e={};y.I=function(t,r){r||(r=[]);var u=e[t];if(u||(u=e[t]={}),!(r.indexOf(u)>=0)){if(r.push(u),n[t])return n[t];y.o(y.S,t)||(y.S[t]={});var o=y.S[t],i="@unisporkal/customer-notifications",f=function(n,e,t,r){var u=o[n]=o[n]||{},f=u[e];(!f||!f.loaded&&(!r!=!f.eager?r:i>f.from))&&(u[e]={get:t,from:i,eager:!!r})},c=[];if("default"===t)f("axios","1.1.3",(function(){return y.e(721).then((function(){return function(){return y(1721)}}))})),f("pubsub-js","1.9.4",(function(){return y.e(798).then((function(){return function(){return y(1798)}}))})),f("react-cookie","4.1.1",(function(){return Promise.all([y.e(747),y.e(601),y.e(789)]).then((function(){return function(){return y(3456)}}))})),f("react-dom","18.2.0",(function(){return Promise.all([y.e(935),y.e(747)]).then((function(){return function(){return y(3935)}}))})),f("react-transition-group","4.4.2",(function(){return Promise.all([y.e(198),y.e(747),y.e(829)]).then((function(){return function(){return y(4198)}}))})),f("react","18.2.0",(function(){return y.e(294).then((function(){return function(){return y(7294)}}))})),f("sanitize-html","2.4.0",(function(){return Promise.all([y.e(36),y.e(730)]).then((function(){return function(){return y(1036)}}))})),f("universal-cookie","4.0.4",(function(){return y.e(585).then((function(){return function(){return y(9585)}}))}));return c.length?n[t]=Promise.all(c).then((function(){return n[t]=1})):n[t]=1}}}(),function(){var n;y.g.importScripts&&(n=y.g.location+"");var e=y.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=n}(),t=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},r=function(n,e){n=t(n),e=t(e);for(var r=0;;){if(r>=n.length)return r<e.length&&"u"!=(typeof e[r])[0];var u=n[r],o=(typeof u)[0];if(r>=e.length)return"u"==o;var i=e[r],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&u!=i)return u<i;r++}},u=function(n,e){if(0 in n){e=t(e);var r=n[0],o=r<0;o&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,s=f<n.length?(typeof n[f])[0]:"";if(i>=e.length||"o"==(l=(typeof(a=e[i]))[0]))return!c||("u"==s?f>r&&!o:""==s!=o);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(f<=r){if(a!=n[f])return!1}else{if(o?a>n[f]:a<n[f])return!1;a!=n[f]&&(c=!1)}else if("s"!=s&&"n"!=s){if(o||f<=r)return!1;c=!1,f--}else{if(f<=r||l<s!=o)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,f--)}}var d=[],h=d.pop.bind(d);for(i=1;i<n.length;i++){var p=n[i];d.push(1==p?h()|h():2==p?h()&h():p?u(p,e):!h())}return!!h()},o=function(n,e){var t=n[e];return Object.keys(t).reduce((function(n,e){return!n||!t[n].loaded&&r(n,e)?e:n}),0)},i=function(n,e,t,r){var i=o(n,t);return u(r,i)||"undefined"!=typeof console&&console.warn,c(n[t][i])},f=function(n,e,t){var o=n[e];return(e=Object.keys(o).reduce((function(n,e){return!u(t,e)||n&&!r(n,e)?n:e}),0))&&o[e]},c=function(n){return n.loaded=1,n.get()},l=(a=function(n){return function(e,t,r,u){var o=y.I(e);return o&&o.then?o.then(n.bind(n,e,y.S[e],t,r,u)):n(e,y.S[e],t,r,u)}})((function(n,e,t,r,u){return e&&y.o(e,t)?i(e,0,t,r):u()})),s=a((function(n,e,t,r,u){var o=e&&y.o(e,t)&&f(e,t,r);return o?c(o):u()})),d={},h={2747:function(){return l("default","react",[4,18,2,0],(function(){return y.e(294).then((function(){return function(){return y(7294)}}))}))},601:function(){return s("default","universal-cookie",[1,4,0,0],(function(){return y.e(585).then((function(){return function(){return y(9585)}}))}))},56:function(){return l("default","react-dom",[4,18,2,0],(function(){return y.e(935).then((function(){return function(){return y(3935)}}))}))},99:function(){return s("default","sanitize-html",[4,2,4,0],(function(){return Promise.all([y.e(36),y.e(730)]).then((function(){return function(){return y(1036)}}))}))},518:function(){return s("default","universal-cookie",[4,4,0,4],(function(){return y.e(585).then((function(){return function(){return y(9585)}}))}))},2973:function(){return s("default","axios",[4,1,1,3],(function(){return y.e(721).then((function(){return function(){return y(1721)}}))}))},3737:function(){return s("default","react-transition-group",[4,4,4,2],(function(){return y.e(198).then((function(){return function(){return y(4198)}}))}))},4662:function(){return s("default","pubsub-js",[4,1,9,4],(function(){return y.e(798).then((function(){return function(){return y(1798)}}))}))},5970:function(){return s("default","react-cookie",[4,4,1,1],(function(){return Promise.all([y.e(601),y.e(456)]).then((function(){return function(){return y(3456)}}))}))}},p={209:[56,99,518,2973,3737,4662,5970],601:[601],747:[2747],829:[56]},y.f.consumes=function(n,e){y.o(p,n)&&p[n].forEach((function(n){if(y.o(d,n))return e.push(d[n]);var t=function(e){d[n]=0,y.m[n]=function(t){delete y.c[n],t.exports=e()}},r=function(e){delete d[n],y.m[n]=function(t){throw delete y.c[n],e}};try{var u=h[n]();u.then?e.push(d[n]=u.then(t).catch(r)):t(u)}catch(n){r(n)}}))},b=function(n){return new Promise((function(e,t){var r=y.miniCssF(n),u=y.p+r;if(function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var u=(i=t[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===n||u===e))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var i;if((u=(i=o[r]).getAttribute("data-href"))===n||u===e)return i}}(r,u))return e();!function(n,e,t,r){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onerror=u.onload=function(o){if(u.onerror=u.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),f=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=f,u.parentNode.removeChild(u),r(c)}},u.href=e,(n=>{document.body.appendChild(n)})(u)}(n,u,e,t)}))},m={123:0},y.f.miniCss=function(n,e){m[n]?e.push(m[n]):0!==m[n]&&{209:1,664:1}[n]&&e.push(m[n]=b(n).then((function(){m[n]=0}),(function(e){throw delete m[n],e})))},function(){var n={123:0};y.f.j=function(e,t){var r=y.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(601|747)$/.test(e))n[e]=0;else{var u=new Promise((function(t,u){r=n[e]=[t,u]}));t.push(r[2]=u);var o=y.p+y.u(e),i=new Error;y.l(o,(function(t){if(y.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+u+": "+o+")",i.name="ChunkLoadError",i.type=u,i.request=o,r[1](i)}}),"chunk-"+e,e)}};var e=function(e,t){var r,u,o=t[0],i=t[1],f=t[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(r in i)y.o(i,r)&&(y.m[r]=i[r]);if(f)f(y)}for(e&&e(t);c<o.length;c++)u=o[c],y.o(n,u)&&n[u]&&n[u][0](),n[u]=0},t=self.webpackChunk_unisporkal_customer_notifications=self.webpackChunk_unisporkal_customer_notifications||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var k=y(8426);customer_notifications=k}();
//# sourceMappingURL=remoteEntry.js.map