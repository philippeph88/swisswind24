/* ---- vendor/leaflet/leaflet.js ---- */
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).leaflet={})}(this,function(t){"use strict";function l(t){for(var e,i,n=1,o=arguments.length;n<o;n++)for(e in i=arguments[n])t[e]=i[e];return t}var R=Object.create||function(t){return N.prototype=t,new N};function N(){}function a(t,e){var i,n=Array.prototype.slice;return t.bind?t.bind.apply(t,n.call(arguments,1)):(i=n.call(arguments,2),function(){return t.apply(e,i.length?i.concat(n.call(arguments)):arguments)})}var D=0;function h(t){return"_leaflet_id"in t||(t._leaflet_id=++D),t._leaflet_id}function j(t,e,i){var n,o,s=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(s,e),n=!0)};return r}function H(t,e,i){var n=e[1],e=e[0],o=n-e;return t===n&&i?t:((t-e)%o+o)%o+e}function u(){return!1}function i(t,e){return!1===e?t:(e=Math.pow(10,void 0===e?6:e),Math.round(t*e)/e)}function W(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function F(t){return W(t).split(/\s+/)}function c(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?R(t.options):{}),e)t.options[i]=e[i];return t.options}function U(t,e,i){var n,o=[];for(n in t)o.push(encodeURIComponent(i?n.toUpperCase():n)+"="+encodeURIComponent(t[n]));return(e&&-1!==e.indexOf("?")?"&":"?")+o.join("&")}var V=/\{ *([\w_ -]+) *\}/g;function q(t,i){return t.replace(V,function(t,e){e=i[e];if(void 0===e)throw new Error("No value provided for variable "+t);return e="function"==typeof e?e(i):e})}var d=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function G(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var K="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Y(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var X=0;function J(t){var e=+new Date,i=Math.max(0,16-(e-X));return X=e+i,window.setTimeout(t,i)}var $=window.requestAnimationFrame||Y("RequestAnimationFrame")||J,Q=window.cancelAnimationFrame||Y("CancelAnimationFrame")||Y("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function x(t,e,i){if(!i||$!==J)return $.call(window,a(t,e));t.call(e)}function r(t){t&&Q.call(window,t)}var tt={__proto__:null,extend:l,create:R,bind:a,get lastId(){return D},stamp:h,throttle:j,wrapNum:H,falseFn:u,formatNum:i,trim:W,splitWords:F,setOptions:c,getParamString:U,template:q,isArray:d,indexOf:G,emptyImageUrl:K,requestFn:$,cancelFn:Q,requestAnimFrame:x,cancelAnimFrame:r};function et(){}et.extend=function(t){function e(){c(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var i,n=e.__super__=this.prototype,o=R(n);for(i in(o.constructor=e).prototype=o,this)Object.prototype.hasOwnProperty.call(this,i)&&"prototype"!==i&&"__super__"!==i&&(e[i]=this[i]);if(t.statics&&l(e,t.statics),t.includes){var s=t.includes;if("undefined"!=typeof L&&L&&L.Mixin){s=d(s)?s:[s];for(var r=0;r<s.length;r++)s[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}l.apply(null,[o].concat(t.includes))}return l(o,t),delete o.statics,delete o.includes,o.options&&(o.options=n.options?R(n.options):{},l(o.options,t.options)),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},e},et.include=function(t){var e=this.prototype.options;return l(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},et.mergeOptions=function(t){return l(this.prototype.options,t),this},et.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};var e={on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else for(var o=0,s=(t=F(t)).length;o<s;o++)this._on(t[o],e,i);return this},off:function(t,e,i){if(arguments.length)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=F(t);for(var o=1===arguments.length,s=0,r=t.length;s<r;s++)o?this._off(t[s]):this._off(t[s],e,i)}else delete this._events;return this},_on:function(t,e,i,n){"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1===this._listens(t,e,i)&&(e={fn:e,ctx:i=i===this?void 0:i},n&&(e.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e))},_off:function(t,e,i){var n,o,s;if(this._events&&(n=this._events[t]))if(1===arguments.length){if(this._firingCount)for(o=0,s=n.length;o<s;o++)n[o].fn=u;delete this._events[t]}else"function"!=typeof e?console.warn("wrong listener type: "+typeof e):!1!==(e=this._listens(t,e,i))&&(i=n[e],this._firingCount&&(i.fn=u,this._events[t]=n=n.slice()),n.splice(e,1))},fire:function(t,e,i){if(this.listens(t,i)){var n=l({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s],h=a.fn;a.once&&this.off(t,h,a.ctx),h.call(a.ctx||this,n)}this._firingCount--}}i&&this._propagateEvent(n)}return this},listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');var o=e,s=("function"!=typeof e&&(n=!!e,i=o=void 0),this._events&&this._events[t]);if(s&&s.length&&!1!==this._listens(t,o,i))return!0;if(n)for(var r in this._eventParents)if(this._eventParents[r].listens(t,e,i,n))return!0;return!1},_listens:function(t,e,i){if(this._events){var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o}return!1},once:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e,!0);else for(var o=0,s=(t=F(t)).length;o<s;o++)this._on(t[o],e,i,!0);return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[h(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[h(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,l({layer:t.target,propagatedFrom:t.target},t),!0)}},it=(e.addEventListener=e.on,e.removeEventListener=e.clearAllEventListeners=e.off,e.addOneTimeEventListener=e.once,e.fireEvent=e.fire,e.hasEventListeners=e.listens,et.extend(e));function p(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var nt=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function m(t,e,i){return t instanceof p?t:d(t)?new p(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new p(t.x,t.y):new p(t,e,i)}function f(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function _(t,e){return!t||t instanceof f?t:new f(t,e)}function s(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}function g(t,e){return t instanceof s?t:new s(t,e)}function v(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,void 0!==i&&(this.alt=+i)}function w(t,e,i){return t instanceof v?t:d(t)&&"object"!=typeof t[0]?3===t.length?new v(t[0],t[1],t[2]):2===t.length?new v(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new v(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new v(t,e,i)}p.prototype={clone:function(){return new p(this.x,this.y)},add:function(t){return this.clone()._add(m(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(m(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new p(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new p(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=nt(this.x),this.y=nt(this.y),this},distanceTo:function(t){var e=(t=m(t)).x-this.x,t=t.y-this.y;return Math.sqrt(e*e+t*t)},equals:function(t){return(t=m(t)).x===this.x&&t.y===this.y},contains:function(t){return t=m(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+i(this.x)+", "+i(this.y)+")"}},f.prototype={extend:function(t){var e,i;if(t){if(t instanceof p||"number"==typeof t[0]||"x"in t)e=i=m(t);else if(e=(t=_(t)).min,i=t.max,!e||!i)return this;this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone())}return this},getCenter:function(t){return m((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return m(this.min.x,this.max.y)},getTopRight:function(){return m(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return(t=("number"==typeof t[0]||t instanceof p?m:_)(t))instanceof f?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>=e.x&&n.x<=i.x,t=t.y>=e.y&&n.y<=i.y;return o&&t},overlaps:function(t){t=_(t);var e=this.min,i=this.max,n=t.min,t=t.max,o=t.x>e.x&&n.x<i.x,t=t.y>e.y&&n.y<i.y;return o&&t},isValid:function(){return!(!this.min||!this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,t=Math.abs(e.y-i.y)*t;return _(m(e.x-n,e.y-t),m(i.x+n,i.y+t))},equals:function(t){return!!t&&(t=_(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},s.prototype={extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof v)i=e=t;else{if(!(t instanceof s))return t?this.extend(w(t)||g(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new v(e.lat,e.lng),this._northEast=new v(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,t=Math.abs(e.lng-i.lng)*t;return new s(new v(e.lat-n,e.lng-t),new v(i.lat+n,i.lng+t))},getCenter:function(){return new v((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new v(this.getNorth(),this.getWest())},getSouthEast:function(){return new v(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t=("number"==typeof t[0]||t instanceof v||"lat"in t?w:g)(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof s?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},intersects:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>=e.lat&&n.lat<=i.lat,t=t.lng>=e.lng&&n.lng<=i.lng;return o&&t},overlaps:function(t){t=g(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),t=t.getNorthEast(),o=t.lat>e.lat&&n.lat<i.lat,t=t.lng>e.lng&&n.lng<i.lng;return o&&t},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return!!t&&(t=g(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},isValid:function(){return!(!this._southWest||!this._northEast)}};var ot={latLngToPoint:function(t,e){t=this.projection.project(t),e=this.scale(e);return this.transformation._transform(t,e)},pointToLatLng:function(t,e){e=this.scale(e),t=this.transformation.untransform(t,e);return this.projection.unproject(t)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){var e;return this.infinite?null:(e=this.projection.bounds,t=this.scale(t),new f(this.transformation.transform(e.min,t),this.transformation.transform(e.max,t)))},infinite:!(v.prototype={equals:function(t,e){return!!t&&(t=w(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},toString:function(t){return"LatLng("+i(this.lat,t)+", "+i(this.lng,t)+")"},distanceTo:function(t){return st.distance(this,w(t))},wrap:function(){return st.wrapLatLng(this)},toBounds:function(t){var t=180*t/40075017,e=t/Math.cos(Math.PI/180*this.lat);return g([this.lat-t,this.lng-e],[this.lat+t,this.lng+e])},clone:function(){return new v(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var e=this.wrapLng?H(t.lng,this.wrapLng,!0):t.lng;return new v(this.wrapLat?H(t.lat,this.wrapLat,!0):t.lat,e,t.alt)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,e=e.lng-i.lng;return 0==n&&0==e?t:(i=t.getSouthWest(),t=t.getNorthEast(),new s(new v(i.lat-n,i.lng-e),new v(t.lat-n,t.lng-e)))}},st=l({},ot,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),e=Math.sin((e.lng-t.lng)*i/2),t=s*s+Math.cos(n)*Math.cos(o)*e*e,i=2*Math.atan2(Math.sqrt(t),Math.sqrt(1-t));return this.R*i}}),rt=6378137,rt={R:rt,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,i=Math.max(Math.min(i,t.lat),-i),i=Math.sin(i*e);return new p(this.R*t.lng*e,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(t){var e=180/Math.PI;return new v((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:new f([-(rt=rt*Math.PI),-rt],[rt,rt])};function at(t,e,i,n){d(t)?(this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3]):(this._a=t,this._b=e,this._c=i,this._d=n)}function ht(t,e,i,n){return new at(t,e,i,n)}at.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return t.x=(e=e||1)*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return new p((t.x/(e=e||1)-this._b)/this._a,(t.y/e-this._d)/this._c)}};var lt=l({},st,{code:"EPSG:3857",projection:rt,transformation:ht(lt=.5/(Math.PI*rt.R),.5,-lt,.5)}),ut=l({},lt,{code:"EPSG:900913"});function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function dt(t,e){for(var i,n,o,s,r="",a=0,h=t.length;a<h;a++){for(i=0,n=(o=t[a]).length;i<n;i++)r+=(i?"L":"M")+(s=o[i]).x+" "+s.y;r+=e?b.svg?"z":"x":""}return r||"M0 0"}var _t=document.documentElement.style,pt="ActiveXObject"in window,mt=pt&&!document.addEventListener,n="msLaunchUri"in navigator&&!("documentMode"in document),ft=y("webkit"),gt=y("android"),vt=y("android 2")||y("android 3"),yt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),yt=gt&&y("Google")&&yt<537&&!("AudioNode"in window),xt=!!window.opera,wt=!n&&y("chrome"),bt=y("gecko")&&!ft&&!xt&&!pt,Pt=!wt&&y("safari"),Lt=y("phantom"),o="OTransition"in _t,Tt=0===navigator.platform.indexOf("Win"),Mt=pt&&"transition"in _t,zt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!vt,_t="MozPerspective"in _t,Ct=!window.L_DISABLE_3D&&(Mt||zt||_t)&&!o&&!Lt,Zt="undefined"!=typeof orientation||y("mobile"),St=Zt&&ft,Et=Zt&&zt,kt=!window.PointerEvent&&window.MSPointerEvent,Ot=!(!window.PointerEvent&&!kt),At="ontouchstart"in window||!!window.TouchEvent,Bt=!window.L_NO_TOUCH&&(At||Ot),It=Zt&&xt,Rt=Zt&&bt,Nt=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),Dt=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",u,e),window.removeEventListener("testPassiveEventSupport",u,e)}catch(t){}return t}(),jt=!!document.createElement("canvas").getContext,Ht=!(!document.createElementNS||!ct("svg").createSVGRect),Wt=!!Ht&&((Wt=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(Wt.firstChild&&Wt.firstChild.namespaceURI));function y(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var b={ie:pt,ielt9:mt,edge:n,webkit:ft,android:gt,android23:vt,androidStock:yt,opera:xt,chrome:wt,gecko:bt,safari:Pt,phantom:Lt,opera12:o,win:Tt,ie3d:Mt,webkit3d:zt,gecko3d:_t,any3d:Ct,mobile:Zt,mobileWebkit:St,mobileWebkit3d:Et,msPointer:kt,pointer:Ot,touch:Bt,touchNative:At,mobileOpera:It,mobileGecko:Rt,retina:Nt,passiveEvents:Dt,canvas:jt,svg:Ht,vml:!Ht&&function(){try{var t=document.createElement("div"),e=(t.innerHTML='<v:shape adj="1"/>',t.firstChild);return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}(),inlineSvg:Wt,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},Ft=b.msPointer?"MSPointerDown":"pointerdown",Ut=b.msPointer?"MSPointerMove":"pointermove",Vt=b.msPointer?"MSPointerUp":"pointerup",qt=b.msPointer?"MSPointerCancel":"pointercancel",Gt={touchstart:Ft,touchmove:Ut,touchend:Vt,touchcancel:qt},Kt={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&O(e);ee(t,e)},touchmove:ee,touchend:ee,touchcancel:ee},Yt={},Xt=!1;function Jt(t,e,i){return"touchstart"!==e||Xt||(document.addEventListener(Ft,$t,!0),document.addEventListener(Ut,Qt,!0),document.addEventListener(Vt,te,!0),document.addEventListener(qt,te,!0),Xt=!0),Kt[e]?(i=Kt[e].bind(this,i),t.addEventListener(Gt[e],i,!1),i):(console.warn("wrong event specified:",e),u)}function $t(t){Yt[t.pointerId]=t}function Qt(t){Yt[t.pointerId]&&(Yt[t.pointerId]=t)}function te(t){delete Yt[t.pointerId]}function ee(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],Yt)e.touches.push(Yt[i]);e.changedTouches=[e],t(e)}}var ie=200;function ne(t,i){t.addEventListener("dblclick",i);var n,o=0;function e(t){var e;1!==t.detail?n=t.detail:"mouse"===t.pointerType||t.sourceCapabilities&&!t.sourceCapabilities.firesTouchEvents||((e=Ne(t)).some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})&&!e.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})||((e=Date.now())-o<=ie?2===++n&&i(function(t){var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return(t=n).type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}(t)):n=1,o=e))}return t.addEventListener("click",e),{dblclick:i,simDblclick:e}}var oe,se,re,ae,he,le,ue=we(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ce=we(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===ce||"OTransition"===ce?ce+"End":"transitionend";function _e(t){return"string"==typeof t?document.getElementById(t):t}function pe(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];return"auto"===(i=i&&"auto"!==i||!document.defaultView?i:(t=document.defaultView.getComputedStyle(t,null))?t[e]:null)?null:i}function P(t,e,i){t=document.createElement(t);return t.className=e||"",i&&i.appendChild(t),t}function T(t){var e=t.parentNode;e&&e.removeChild(t)}function me(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function fe(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ge(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ve(t,e){return void 0!==t.classList?t.classList.contains(e):0<(t=xe(t)).length&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t)}function M(t,e){var i;if(void 0!==t.classList)for(var n=F(e),o=0,s=n.length;o<s;o++)t.classList.add(n[o]);else ve(t,e)||ye(t,((i=xe(t))?i+" ":"")+e)}function z(t,e){void 0!==t.classList?t.classList.remove(e):ye(t,W((" "+xe(t)+" ").replace(" "+e+" "," ")))}function ye(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}function xe(t){return void 0===(t=t.correspondingElement?t.correspondingElement:t).className.baseVal?t.className:t.className.baseVal}function C(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}}function we(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function be(t,e,i){e=e||new p(0,0);t.style[ue]=(b.ie3d?"translate("+e.x+"px,"+e.y+"px)":"translate3d("+e.x+"px,"+e.y+"px,0)")+(i?" scale("+i+")":"")}function Z(t,e){t._leaflet_pos=e,b.any3d?be(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Pe(t){return t._leaflet_pos||new p(0,0)}function Le(){S(window,"dragstart",O)}function Te(){k(window,"dragstart",O)}function Me(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(ze(),le=(he=t).style.outlineStyle,t.style.outlineStyle="none",S(window,"keydown",ze))}function ze(){he&&(he.style.outlineStyle=le,le=he=void 0,k(window,"keydown",ze))}function Ce(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Ze(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}ae="onselectstart"in document?(re=function(){S(window,"selectstart",O)},function(){k(window,"selectstart",O)}):(se=we(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]),re=function(){var t;se&&(t=document.documentElement.style,oe=t[se],t[se]="none")},function(){se&&(document.documentElement.style[se]=oe,oe=void 0)});pt={__proto__:null,TRANSFORM:ue,TRANSITION:ce,TRANSITION_END:de,get:_e,getStyle:pe,create:P,remove:T,empty:me,toFront:fe,toBack:ge,hasClass:ve,addClass:M,removeClass:z,setClass:ye,getClass:xe,setOpacity:C,testProp:we,setTransform:be,setPosition:Z,getPosition:Pe,get disableTextSelection(){return re},get enableTextSelection(){return ae},disableImageDrag:Le,enableImageDrag:Te,preventOutline:Me,restoreOutline:ze,getSizedParentNode:Ce,getScale:Ze};function S(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)ke(t,o,e[o],i);else for(var s=0,r=(e=F(e)).length;s<r;s++)ke(t,e[s],i,n);return this}var E="_leaflet_events";function k(t,e,i,n){if(1===arguments.length)Se(t),delete t[E];else if(e&&"object"==typeof e)for(var o in e)Oe(t,o,e[o],i);else if(e=F(e),2===arguments.length)Se(t,function(t){return-1!==G(e,t)});else for(var s=0,r=e.length;s<r;s++)Oe(t,e[s],i,n);return this}function Se(t,e){for(var i in t[E]){var n=i.split(/\d/)[0];e&&!e(n)||Oe(t,n,null,null,i)}}var Ee={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ke(e,t,i,n){var o,s,r=t+h(i)+(n?"_"+h(n):"");e[E]&&e[E][r]||(s=o=function(t){return i.call(n||e,t||window.event)},!b.touchNative&&b.pointer&&0===t.indexOf("touch")?o=Jt(e,t,o):b.touch&&"dblclick"===t?o=ne(e,o):"addEventListener"in e?"touchstart"===t||"touchmove"===t||"wheel"===t||"mousewheel"===t?e.addEventListener(Ee[t]||t,o,!!b.passiveEvents&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?e.addEventListener(Ee[t],o=function(t){t=t||window.event,We(e,t)&&s(t)},!1):e.addEventListener(t,s,!1):e.attachEvent("on"+t,o),e[E]=e[E]||{},e[E][r]=o)}function Oe(t,e,i,n,o){o=o||e+h(i)+(n?"_"+h(n):"");var s,r,i=t[E]&&t[E][o];i&&(!b.touchNative&&b.pointer&&0===e.indexOf("touch")?(n=t,r=i,Gt[s=e]?n.removeEventListener(Gt[s],r,!1):console.warn("wrong event specified:",s)):b.touch&&"dblclick"===e?(n=i,(r=t).removeEventListener("dblclick",n.dblclick),r.removeEventListener("click",n.simDblclick)):"removeEventListener"in t?t.removeEventListener(Ee[e]||e,i,!1):t.detachEvent("on"+e,i),t[E][o]=null)}function Ae(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Be(t){return ke(t,"wheel",Ae),this}function Ie(t){return S(t,"mousedown touchstart dblclick contextmenu",Ae),t._leaflet_disable_click=!0,this}function O(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Re(t){return O(t),Ae(t),this}function Ne(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function De(t,e){var i,n;return e?(n=(i=Ze(e)).boundingClientRect,new p((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)):new p(t.clientX,t.clientY)}var je=b.linux&&b.chrome?window.devicePixelRatio:b.mac?3*window.devicePixelRatio:0<window.devicePixelRatio?2*window.devicePixelRatio:1;function He(t){return b.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/je:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function We(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}var mt={__proto__:null,on:S,off:k,stopPropagation:Ae,disableScrollPropagation:Be,disableClickPropagation:Ie,preventDefault:O,stop:Re,getPropagationPath:Ne,getMousePosition:De,getWheelDelta:He,isExternalTarget:We,addListener:S,removeListener:k},Fe=it.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pe(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=x(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){t=this._startPos.add(this._offset.multiplyBy(t));e&&t._round(),Z(this._el,t),this.fire("step")},_complete:function(){r(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),A=it.extend({options:{crs:lt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=c(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView(w(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ce&&b.any3d&&!b.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),S(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if((e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(w(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&!0!==i)&&(void 0!==i.animate&&(i.zoom=l({animate:i.animate},i.zoom),i.pan=l({animate:i.animate,duration:i.duration},i.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),t=(t instanceof p?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),n=this.containerPointToLatLng(o.add(t));return this.setView(n,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():g(t);var i=m(e.paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));return(o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0?{center:t.getCenter(),zoom:o}:(e=n.subtract(i).divideBy(2),n=this.project(t.getSouthWest(),o),i=this.project(t.getNorthEast(),o),{center:this.unproject(n.add(i).divideBy(2).add(e),o),zoom:o})},fitBounds:function(t,e){if((t=g(t)).isValid())return t=this._getBoundsCenterZoom(t,e),this.setView(t.center,t.zoom,e);throw new Error("Bounds are not valid.")},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){var i;return e=e||{},(t=m(t).round()).x||t.y?(!0===e.animate||this.getSize().contains(t)?(this._panAnim||(this._panAnim=new Fe,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate?(M(this._mapPane,"leaflet-pan-anim"),i=this._getMapPanePos().subtract(t).round(),this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)):(this._rawPanBy(t),this.fire("move").fire("moveend"))):this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this):this.fire("moveend")},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!b.any3d)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),e=this.getSize(),a=this._zoom,h=(n=w(n),o=void 0===o?a:o,Math.max(e.x,e.y)),i=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,u=1.42,c=u*u;function d(t){t=(i*i-h*h+(t?-1:1)*c*c*l*l)/(2*(t?i:h)*c*l),t=Math.sqrt(t*t+1)-t;return t<1e-9?-18:Math.log(t)}function _(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=d(0);function f(t){return h*(p(m)*(_(t=m+u*t)/p(t))-_(m))/c}var g=Date.now(),v=(d(1)-m)/u,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var e=(Date.now()-g)/y,i=(1-Math.pow(1-e,1.5))*v;e<=1?(this._flyToFrame=x(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i)/l)),a),this.getScaleZoom(h/(e=i,h*(p(m)/p(m+u*e))),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,e){t=this._getBoundsCenterZoom(t,e);return this.flyTo(t.center,t.zoom,e)},setMaxBounds:function(t){return t=g(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),t=this._limitCenter(i,this._zoom,g(t));return i.equals(t)||this.panTo(t,e),this._enforcingBounds=!1,this},panInside:function(t,e){var i=m((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=m(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),t=this.project(t),s=this.getPixelBounds(),i=_([s.min.add(i),s.max.subtract(n)]),s=i.getSize();return i.contains(t)||(this._enforcingBounds=!0,n=t.subtract(i.getCenter()),i=i.extend(t).getSize().subtract(s),o.x+=n.x<0?-i.x:i.x,o.y+=n.y<0?-i.y:i.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1),this},invalidateSize:function(t){if(!this._loaded)return this;t=l({animate:!1,pan:!0},!0===t?{animate:!0}:t);var e=this.getSize(),i=(this._sizeChanged=!0,this._lastCenter=null,this.getSize()),n=e.divideBy(2).round(),o=i.divideBy(2).round(),n=n.subtract(o);return n.x||n.y?(t.animate&&t.pan?this.panBy(n):(t.pan&&this._rawPanBy(n),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){var e,i;return t=this._locateOptions=l({timeout:1e4,watch:!1},t),"geolocation"in navigator?(e=a(this._handleGeolocationResponse,this),i=a(this._handleGeolocationError,this),t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t)):this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e;this._container._leaflet_id&&(e=t.code,t=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout"),this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+t+"."}))},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e,i,n=new v(t.coords.latitude,t.coords.longitude),o=n.toBounds(2*t.coords.accuracy),s=this._locateOptions,r=(s.setView&&(e=this.getBoundsZoom(o),this.setView(n,s.maxZoom?Math.min(e,s.maxZoom):e)),{latlng:n,bounds:o,timestamp:t.timestamp});for(i in t.coords)"number"==typeof t.coords[i]&&(r[i]=t.coords[i]);this.fire("locationfound",r)}},addHandler:function(t,e){return e&&(e=this[t]=new e(this),this._handlers.push(e),this.options[t]&&e.enable()),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}for(var t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),T(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(r(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)T(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){e=P("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new s(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=g(t),i=m(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),t=t.getSouthEast(),i=this.getSize().subtract(i),t=_(this.project(t,n),this.project(r,n)).getSize(),r=b.any3d?this.options.zoomSnap:1,a=i.x/t.x,i=i.y/t.y,t=e?Math.max(a,i):Math.min(a,i),n=this.getScaleZoom(t,n);return r&&(n=Math.round(n/(r/100))*(r/100),n=e?Math.ceil(n/r)*r:Math.floor(n/r)*r),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new p(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){t=this._getTopLeftPoint(t,e);return new f(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs,t=(e=void 0===e?this._zoom:e,i.zoom(t*i.scale(e)));return isNaN(t)?1/0:t},project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint(w(t),e)},unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(m(t),e)},layerPointToLatLng:function(t){t=m(t).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(t){return this.project(w(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(w(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(g(t))},distance:function(t,e){return this.options.crs.distance(w(t),w(e))},containerPointToLayerPoint:function(t){return m(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return m(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){t=this.containerPointToLayerPoint(m(t));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)))},mouseEventToContainerPoint:function(t){return De(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){t=this._container=_e(t);if(!t)throw new Error("Map container not found.");if(t._leaflet_id)throw new Error("Map container is already initialized.");S(t,"scroll",this._onScroll,this),this._containerId=h(t)},_initLayout:function(){var t=this._container,e=(this._fadeAnimated=this.options.fadeAnimation&&b.any3d,M(t,"leaflet-container"+(b.touch?" leaflet-touch":"")+(b.retina?" leaflet-retina":"")+(b.ielt9?" leaflet-oldie":"")+(b.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":"")),pe(t,"position"));"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Z(this._mapPane,new p(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(M(t.markerPane,"leaflet-zoom-hide"),M(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){Z(this._mapPane,new p(0,0));var n=!this._loaded,o=(this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset"),this._zoom!==e);this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return r(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Z(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var e=t?k:S;e((this._targets[h(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),b.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){r(this._resizeRequest),this._resizeRequest=x(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,s=t.target||t.srcElement,r=!1;s;){if((i=this._targets[h(s)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){r=!0;break}if(i&&i.listens(e,!0)){if(o&&!We(s,t))break;if(n.push(i),o)break}if(s===this._container)break;s=s.parentNode}return n=n.length||r||o||!this.listens(e,!0)?n:[this]},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e,i=t.target||t.srcElement;!this._loaded||i._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(i)||("mousedown"===(e=t.type)&&Me(i),this._fireDOMEvent(t,e))},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){"click"===t.type&&((a=l({},t)).type="preclick",this._fireDOMEvent(a,a.type,i));var n=this._findEventTargets(t,e);if(i){for(var o=[],s=0;s<i.length;s++)i[s].listens(e,!0)&&o.push(i[s]);n=o.concat(n)}if(n.length){"contextmenu"===e&&O(t);var r,a=n[0],h={originalEvent:t};for("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type&&(r=a.getLatLng&&(!a._radius||a._radius<=10),h.containerPoint=r?this.latLngToContainerPoint(a.getLatLng()):this.mouseEventToContainerPoint(t),h.layerPoint=this.containerPointToLayerPoint(h.containerPoint),h.latlng=r?a.getLatLng():this.layerPointToLatLng(h.layerPoint)),s=0;s<n.length;s++)if(n[s].fire(e,h,!0),h.originalEvent._stopped||!1===n[s].options.bubblingMouseEvents&&-1!==G(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Pe(this._mapPane)||new p(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){i=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(i)},_latLngBoundsToNewLayerBounds:function(t,e,i){i=this._getNewPixelOrigin(i,e);return _([this.project(t.getSouthWest(),e)._subtract(i),this.project(t.getNorthWest(),e)._subtract(i),this.project(t.getSouthEast(),e)._subtract(i),this.project(t.getNorthEast(),e)._subtract(i)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){var n,o;return!i||(n=this.project(t,e),o=this.getSize().divideBy(2),o=new f(n.subtract(o),n.add(o)),o=this._getBoundsOffset(o,i,e),Math.abs(o.x)<=1&&Math.abs(o.y)<=1)?t:this.unproject(n.add(o),e)},_limitOffset:function(t,e){var i;return e?(i=new f((i=this.getPixelBounds()).min.add(t),i.max.add(t)),t.add(this._getBoundsOffset(i,e))):t},_getBoundsOffset:function(t,e,i){e=_(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),i=e.min.subtract(t.min),e=e.max.subtract(t.max);return new p(this._rebound(i.x,-e.x),this._rebound(i.y,-e.y))},_rebound:function(t,e){return 0<t+e?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=b.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){z(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){t=this._getCenterOffset(t)._trunc();return!(!0!==(e&&e.animate)&&!this.getSize().contains(t))&&(this.panBy(t,e),!0)},_createAnimProxy:function(){var t=this._proxy=P("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=ue,i=this._proxy.style[e];be(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),i===this._proxy.style[e]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){T(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();be(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(!this._animatingZoom){if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),n=this._getCenterOffset(t)._divideBy(1-1/n);if(!0!==i.animate&&!this.getSize().contains(n))return!1;x(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this)}return!0},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,M(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&z(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ue(t){return new B(t)}var B=et.extend({options:{position:"topright"},initialize:function(t){c(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),t=t._controlCorners[i];return M(e,"leaflet-control"),-1!==i.indexOf("bottom")?t.insertBefore(e,t.firstChild):t.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(T(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}}),Ve=(A.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var i=this._controlCorners={},n="leaflet-",o=this._controlContainer=P("div",n+"control-container",this._container);function t(t,e){i[t+e]=P("div",n+t+" "+n+e,o)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)T(this._controlCorners[t]);T(this._controlContainer),delete this._controlCorners,delete this._controlContainer}}),B.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in c(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return B.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);t=this._getLayer(h(t));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){M(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(M(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):z(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return z(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=P("div",t),i=this.options.collapsed,n=(e.setAttribute("aria-haspopup",!0),Ie(e),Be(e),this._section=P("section",t+"-list")),o=(i&&(this._map.on("click",this.collapse,this),S(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this)),this._layersLink=P("a",t+"-toggle",e));o.href="#",o.title="Layers",o.setAttribute("role","button"),S(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},click:function(t){O(t),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=P("div",t+"-base",n),this._separator=P("div",t+"-separator",n),this._overlaysList=P("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&h(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(a(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(this._container){me(this._baseLayersList),me(this._overlaysList),this._layerControlInputs=[];for(var t,e,i,n=0,o=0;o<this._layers.length;o++)i=this._layers[o],this._addItem(i),e=e||i.overlay,t=t||!i.overlay,n+=i.overlay?0:1;this.options.hideSingleBase&&(this._baseLayersList.style.display=(t=t&&1<n)?"":"none"),this._separator.style.display=e&&t?"":"none"}return this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(h(t.target)),t=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;t&&this._map.fire(t,e)},_createRadioElement:function(t,e){t='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",e=document.createElement("div");return e.innerHTML=t,e.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer),n=(t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+h(this),n),this._layerControlInputs.push(e),e.layerId=h(t.layer),S(e,"click",this._onInputClick,this),document.createElement("span")),o=(n.innerHTML=" "+t.name,document.createElement("span"));return i.appendChild(o),o.appendChild(e),o.appendChild(n),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=i.length-1;0<=s;s--)t=i[s],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;0<=o;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section,e=(this._preventClick=!0,S(t,"click",O),this.expand(),this);setTimeout(function(){k(t,"click",O),e._preventClick=!1})}})),qe=B.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=P("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){i=P("a",i,n);return i.innerHTML=t,i.href="#",i.title=e,i.setAttribute("role","button"),i.setAttribute("aria-label",e),Ie(i),S(i,"click",Re),S(i,"click",o,this),S(i,"click",this._refocusOnMap,this),i},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";z(this._zoomInButton,e),z(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),!this._disabled&&t._zoom!==t.getMinZoom()||(M(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),!this._disabled&&t._zoom!==t.getMaxZoom()||(M(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}}),Ge=(A.mergeOptions({zoomControl:!0}),A.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new qe,this.addControl(this.zoomControl))}),B.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=P("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=P("div",e,i)),t.imperial&&(this._iScale=P("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,t=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(t)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t);this._updateScale(this._mScale,e<1e3?e+" m":e/1e3+" km",e/t)},_updateImperial:function(t){var e,i,t=3.2808399*t;5280<t?(i=this._getRoundNum(e=t/5280),this._updateScale(this._iScale,i+" mi",i/e)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+" ft",i/t))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),t=t/e;return e*(t=10<=t?10:5<=t?5:3<=t?3:2<=t?2:1)}})),Ke=B.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(b.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){c(this,t),this._attributions={}},onAdd:function(t){for(var e in(t.attributionControl=this)._container=P("div","leaflet-control-attribution"),Ie(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t,e=[];for(t in this._attributions)this._attributions[t]&&e.push(t);var i=[];this.options.prefix&&i.push(this.options.prefix),e.length&&i.push(e.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}}),n=(A.mergeOptions({attributionControl:!0}),A.addInitHook(function(){this.options.attributionControl&&(new Ke).addTo(this)}),B.Layers=Ve,B.Zoom=qe,B.Scale=Ge,B.Attribution=Ke,Ue.layers=function(t,e,i){return new Ve(t,e,i)},Ue.zoom=function(t){return new qe(t)},Ue.scale=function(t){return new Ge(t)},Ue.attribution=function(t){return new Ke(t)},et.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}})),ft=(n.addTo=function(t,e){return t.addHandler(e,this),this},{Events:e}),Ye=b.touch?"touchstart mousedown":"mousedown",Xe=it.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){c(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(S(this._dragStartTarget,Ye,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Xe._dragging===this&&this.finishDrag(!0),k(this._dragStartTarget,Ye,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){var e,i;this._enabled&&(this._moved=!1,ve(this._element,"leaflet-zoom-anim")||(t.touches&&1!==t.touches.length?Xe._dragging===this&&this.finishDrag():Xe._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((Xe._dragging=this)._preventOutline&&Me(this._element),Le(),re(),this._moving||(this.fire("down"),i=t.touches?t.touches[0]:t,e=Ce(this._element),this._startPoint=new p(i.clientX,i.clientY),this._startPos=Pe(this._element),this._parentScale=Ze(e),i="mousedown"===t.type,S(document,i?"mousemove":"touchmove",this._onMove,this),S(document,i?"mouseup":"touchend touchcancel",this._onUp,this)))))},_onMove:function(t){var e;this._enabled&&(t.touches&&1<t.touches.length?this._moved=!0:!(e=new p((e=t.touches&&1===t.touches.length?t.touches[0]:t).clientX,e.clientY)._subtract(this._startPoint)).x&&!e.y||Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,O(t),this._moved||(this.fire("dragstart"),this._moved=!0,M(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),M(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,this._lastEvent=t,this._updatePosition()))},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Z(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){z(document.body,"leaflet-dragging"),this._lastTarget&&(z(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),k(document,"mousemove touchmove",this._onMove,this),k(document,"mouseup touchend touchcancel",this._onUp,this),Te(),ae();var e=this._moved&&this._moving;this._moving=!1,Xe._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Je(t,e,i){for(var n,o,s,r,a,h,l,u=[1,4,2,8],c=0,d=t.length;c<d;c++)t[c]._code=si(t[c],e);for(s=0;s<4;s++){for(h=u[s],n=[],c=0,o=(d=t.length)-1;c<d;o=c++)r=t[c],a=t[o],r._code&h?a._code&h||((l=oi(a,r,h,e,i))._code=si(l,e),n.push(l)):(a._code&h&&((l=oi(a,r,h,e,i))._code=si(l,e),n.push(l)),n.push(r));t=n}return t}function $e(t,e){var i,n,o,s,r,a,h;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);for(var l=w([0,0]),u=g(t),c=(u.getNorthWest().distanceTo(u.getSouthWest())*u.getNorthEast().distanceTo(u.getNorthWest())<1700&&(l=Qe(t)),t.length),d=[],_=0;_<c;_++){var p=w(t[_]);d.push(e.project(w([p.lat-l.lat,p.lng-l.lng])))}for(_=r=a=h=0,i=c-1;_<c;i=_++)n=d[_],o=d[i],s=n.y*o.x-o.y*n.x,a+=(n.x+o.x)*s,h+=(n.y+o.y)*s,r+=3*s;u=0===r?d[0]:[a/r,h/r],u=e.unproject(m(u));return w([u.lat+l.lat,u.lng+l.lng])}function Qe(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var s=w(t[o]);e+=s.lat,i+=s.lng,n++}return w([e/n,i/n])}var ti,gt={__proto__:null,clipPolygon:Je,polygonCenter:$e,centroid:Qe};function ei(t,e){if(e&&t.length){var i=t=function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)(function(t,e){var i=e.x-t.x,e=e.y-t.y;return i*i+e*e})(t[n],t[o])>e&&(i.push(t[n]),o=n);o<s-1&&i.push(t[s-1]);return i}(t,e=e*e),n=i.length,o=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(n);o[0]=o[n-1]=1,function t(e,i,n,o,s){var r,a,h,l=0;for(a=o+1;a<=s-1;a++)h=ri(e[a],e[o],e[s],!0),l<h&&(r=a,l=h);n<l&&(i[r]=1,t(e,i,n,o,r),t(e,i,n,r,s))}(i,o,e,0,n-1);var s,r=[];for(s=0;s<n;s++)o[s]&&r.push(i[s]);return r}return t.slice()}function ii(t,e,i){return Math.sqrt(ri(t,e,i,!0))}function ni(t,e,i,n,o){var s,r,a,h=n?ti:si(t,i),l=si(e,i);for(ti=l;;){if(!(h|l))return[t,e];if(h&l)return!1;a=si(r=oi(t,e,s=h||l,i,o),i),s===h?(t=r,h=a):(e=r,l=a)}}function oi(t,e,i,n,o){var s,r,a=e.x-t.x,e=e.y-t.y,h=n.min,n=n.max;return 8&i?(s=t.x+a*(n.y-t.y)/e,r=n.y):4&i?(s=t.x+a*(h.y-t.y)/e,r=h.y):2&i?(s=n.x,r=t.y+e*(n.x-t.x)/a):1&i&&(s=h.x,r=t.y+e*(h.x-t.x)/a),new p(s,r,o)}function si(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ri(t,e,i,n){var o=e.x,e=e.y,s=i.x-o,r=i.y-e,a=s*s+r*r;return 0<a&&(1<(a=((t.x-o)*s+(t.y-e)*r)/a)?(o=i.x,e=i.y):0<a&&(o+=s*a,e+=r*a)),s=t.x-o,r=t.y-e,n?s*s+r*r:new p(o,e)}function I(t){return!d(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function ai(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),I(t)}function hi(t,e){var i,n,o,s,r,a;if(!t||0===t.length)throw new Error("latlngs not passed");I(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);for(var h=w([0,0]),l=g(t),u=(l.getNorthWest().distanceTo(l.getSouthWest())*l.getNorthEast().distanceTo(l.getNorthWest())<1700&&(h=Qe(t)),t.length),c=[],d=0;d<u;d++){var _=w(t[d]);c.push(e.project(w([_.lat-h.lat,_.lng-h.lng])))}for(i=d=0;d<u-1;d++)i+=c[d].distanceTo(c[d+1])/2;if(0===i)a=c[0];else for(n=d=0;d<u-1;d++)if(o=c[d],s=c[d+1],i<(n+=r=o.distanceTo(s))){a=[s.x-(r=(n-i)/r)*(s.x-o.x),s.y-r*(s.y-o.y)];break}l=e.unproject(m(a));return w([l.lat+h.lat,l.lng+h.lng])}var vt={__proto__:null,simplify:ei,pointToSegmentDistance:ii,closestPointOnSegment:function(t,e,i){return ri(t,e,i)},clipSegment:ni,_getEdgeIntersection:oi,_getBitCode:si,_sqClosestPointOnSegment:ri,isFlat:I,_flat:ai,polylineCenter:hi},yt={project:function(t){return new p(t.lng,t.lat)},unproject:function(t){return new v(t.y,t.x)},bounds:new f([-180,-90],[180,90])},xt={R:6378137,R_MINOR:6356752.314245179,bounds:new f([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,o=Math.sqrt(1-o*o),s=o*Math.sin(n),s=Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),o/2),n=-i*Math.log(Math.max(s,1e-10));return new p(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,l=.1;h<15&&1e-7<Math.abs(l);h++)e=s*Math.sin(a),e=Math.pow((1-e)/(1+e),s/2),a+=l=Math.PI/2-2*Math.atan(r*e)-a;return new v(a*i,t.x*i/n)}},wt={__proto__:null,LonLat:yt,Mercator:xt,SphericalMercator:rt},Pt=l({},st,{code:"EPSG:3395",projection:xt,transformation:ht(bt=.5/(Math.PI*xt.R),.5,-bt,.5)}),li=l({},st,{code:"EPSG:4326",projection:yt,transformation:ht(1/180,1,-1/180,.5)}),Lt=l({},ot,{projection:yt,transformation:ht(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,e=e.lat-t.lat;return Math.sqrt(i*i+e*e)},infinite:!0}),o=(ot.Earth=st,ot.EPSG3395=Pt,ot.EPSG3857=lt,ot.EPSG900913=ut,ot.EPSG4326=li,ot.Simple=Lt,it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[h(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[h(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e,i=t.target;i.hasLayer(this)&&(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents&&(e=this.getEvents(),i.on(e,this),this.once("remove",function(){i.off(e,this)},this)),this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this}))}})),ui=(A.include({addLayer:function(t){var e;if(t._layerAdd)return e=h(t),this._layers[e]||((this._layers[e]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this;throw new Error("The provided object is not a Layer.")},removeLayer:function(t){var e=h(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return h(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){for(var e=0,i=(t=t?d(t)?t:[t]:[]).length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[h(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){t=h(t);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var t,e=1/0,i=-1/0,n=this._getZoomSpan();for(t in this._zoomBoundLayers)var o=this._zoomBoundLayers[t].options,e=void 0===o.minZoom?e:Math.min(e,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom);this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}}),o.extend({initialize:function(t,e){var i,n;if(c(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){t=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:h})),ci=ui.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),ui.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?((t=t in this._layers?this._layers[t]:t).removeEventParent(this),ui.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t,e=new s;for(t in this._layers){var i=this._layers[t];e.extend(i.getBounds?i.getBounds():i.getLatLng())}return e}}),di=et.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){c(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(i)return i=this._createImg(i,e&&"IMG"===e.tagName?e:null),this._setIconStyles(i,t),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),i;if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"],n=m(n="number"==typeof n?[n,n]:n),o=m("shadow"===e&&i.shadowAnchor||i.iconAnchor||n&&n.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),n&&(t.style.width=n.x+"px",t.style.height=n.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return b.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var _i=di.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return"string"!=typeof _i.imagePath&&(_i.imagePath=this._detectIconPath()),(this.options.imagePath||_i.imagePath)+di.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){function e(t,e,i){return(e=e.exec(t))&&e[i]}return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=P("div","leaflet-default-icon-path",document.body),e=pe(t,"background-image")||pe(t,"backgroundImage");return document.body.removeChild(t),(e=this._stripUrl(e))?e:(t=document.querySelector('link[href$="leaflet.css"]'))?t.href.substring(0,t.href.length-"leaflet.css".length-1):""}}),pi=n.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Xe(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),M(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&z(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Pe(e._icon),r=i.getPixelBounds(),a=i.getPixelOrigin(),a=_(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));a.contains(s)||(o=m((Math.max(a.max.x,s.x)-a.max.x)/(r.max.x-a.max.x)-(Math.min(a.min.x,s.x)-a.min.x)/(r.min.x-a.min.x),(Math.max(a.max.y,s.y)-a.max.y)/(r.max.y-a.max.y)-(Math.min(a.min.y,s.y)-a.min.y)/(r.min.y-a.min.y)).multiplyBy(n),i.panBy(o,{animate:!1}),this._draggable._newPos._add(o),this._draggable._startPos._add(o),Z(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(r(this._panRequest),this._panRequest=x(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Pe(e._icon),o=e._map.layerPointToLatLng(n);i&&Z(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){r(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),mi=o.extend({options:{icon:new _i,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){c(this,e),this._latlng=w(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){var t;return this._icon&&this._map&&(t=this._map.latLngToLayerPoint(this._latlng).round(),this._setPos(t)),this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1,i=(i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),M(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&S(i,"focus",this._panOnFocus,this),t.icon.createShadow(this._shadow)),o=!1;i!==this._shadow&&(this._removeShadow(),o=!0),i&&(M(i,e),i.alt=""),this._shadow=i,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&k(this._icon,"focus",this._panOnFocus,this),T(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&T(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Z(this._icon,t),this._shadow&&Z(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(t)},_initInteraction:function(){var t;this.options.interactive&&(M(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),pi&&(t=this.options.draggable,this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new pi(this),t&&this.dragging.enable()))},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&C(this._icon,t),this._shadow&&C(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t,e,i=this._map;i&&(t=(e=this.options.icon.options).iconSize?m(e.iconSize):m(0,0),e=e.iconAnchor?m(e.iconAnchor):m(0,0),i.panInside(this._latlng,{paddingTopLeft:e,paddingBottomRight:t.subtract(e)}))},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var fi=o.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return c(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),gi=fi.extend({options:{fill:!0,radius:10},initialize:function(t,e){c(this,e),this._latlng=w(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=w(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return fi.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),t=[t+i,e+i];this._pxBounds=new f(this._point.subtract(t),this._point.add(t))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var vi=gi.extend({initialize:function(t,e,i){if(c(this,e="number"==typeof e?l({},i,{radius:e}):e),this._latlng=w(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new s(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:fi.prototype.setStyle,_project:function(){var t,e,i,n,o,s=this._latlng.lng,r=this._latlng.lat,a=this._map,h=a.options.crs;h.distance===st.distance?(n=Math.PI/180,o=this._mRadius/st.R/n,t=a.project([r+o,s]),e=a.project([r-o,s]),e=t.add(e).divideBy(2),i=a.unproject(e).lat,n=Math.acos((Math.cos(o*n)-Math.sin(r*n)*Math.sin(i*n))/(Math.cos(r*n)*Math.cos(i*n)))/n,!isNaN(n)&&0!==n||(n=o/Math.cos(Math.PI/180*r)),this._point=e.subtract(a.getPixelOrigin()),this._radius=isNaN(n)?0:e.x-a.project([i,s-n]).x,this._radiusY=e.y-t.y):(o=h.unproject(h.project(this._latlng).subtract([this._mRadius,0])),this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(o).x),this._updateBounds()}});var yi=fi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){c(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ri,o=0,s=this._parts.length;o<s;o++)for(var r=this._parts[o],a=1,h=r.length;a<h;a++){var l,u,c=n(t,l=r[a-1],u=r[a],!0);c<e&&(e=c,i=n(t,l,u))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(this._map)return hi(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=w(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new s,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return I(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=I(t),n=0,o=t.length;n<o;n++)i?(e[n]=w(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new f;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),t=new p(t,t);this._rawPxBounds&&(this._pxBounds=new f([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(t,e,i){var n,o,s=t[0]instanceof v,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var e,i,n,o,s=this._parts,r=0,a=0,h=this._rings.length;r<h;r++)for(e=0,i=(o=this._rings[r]).length;e<i-1;e++)(n=ni(o[e],o[e+1],t,e,!0))&&(s[a]=s[a]||[],s[a].push(n[0]),n[1]===o[e+1]&&e!==i-2||(s[a].push(n[1]),a++))},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=ei(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,s,r,a,h=this._clickTolerance();if(this._pxBounds&&this._pxBounds.contains(t))for(i=0,s=this._parts.length;i<s;i++)for(n=0,o=(r=(a=this._parts[i]).length)-1;n<r;o=n++)if((e||0!==n)&&ii(t,a[o],a[n])<=h)return!0;return!1}});yi._flat=ai;var xi=yi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(this._map)return $e(this._defaultShape(),this._map.options.crs);throw new Error("Must add layer to map before using getCenter()")},_convertLatLngs:function(t){var t=yi.prototype._convertLatLngs.call(this,t),e=t.length;return 2<=e&&t[0]instanceof v&&t[0].equals(t[e-1])&&t.pop(),t},_setLatLngs:function(t){yi.prototype._setLatLngs.call(this,t),I(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return(I(this._latlngs[0])?this._latlngs:this._latlngs[0])[0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,e=new p(e,e),t=new f(t.min.subtract(e),t.max.add(e));if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var i,n=0,o=this._rings.length;n<o;n++)(i=Je(this._rings[n],t,!0)).length&&this._parts.push(i)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e,i,n,o,s,r,a,h,l=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(e=this._parts[o]).length)-1;s<h;r=s++)i=e[s],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(l=!l);return l||yi.prototype._containsPoint.call(this,t,!0)}});var wi=ci.extend({initialize:function(t,e){c(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,o=d(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)((n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s,r=this.options;return(!r.filter||r.filter(t))&&(s=bi(t,r))?(s.feature=Zi(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=l({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});function bi(t,e){var i,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],l=e&&e.pointToLayer,u=e&&e.coordsToLatLng||Li;if(!a&&!r)return null;switch(r.type){case"Point":return Pi(l,t,i=u(a),e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)i=u(a[o]),h.push(Pi(l,t,i,e));return new ci(h);case"LineString":case"MultiLineString":return n=Ti(a,"LineString"===r.type?0:1,u),new yi(n,e);case"Polygon":case"MultiPolygon":return n=Ti(a,"Polygon"===r.type?1:2,u),new xi(n,e);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=bi({geometry:r.geometries[o],type:"Feature",properties:t.properties},e);c&&h.push(c)}return new ci(h);case"FeatureCollection":for(o=0,s=r.features.length;o<s;o++){var d=bi(r.features[o],e);d&&h.push(d)}return new ci(h);default:throw new Error("Invalid GeoJSON object.")}}function Pi(t,e,i,n){return t?t(e,i):new mi(i,n&&n.markersInheritOptions&&n)}function Li(t){return new v(t[1],t[0],t[2])}function Ti(t,e,i){for(var n,o=[],s=0,r=t.length;s<r;s++)n=e?Ti(t[s],e-1,i):(i||Li)(t[s]),o.push(n);return o}function Mi(t,e){return void 0!==(t=w(t)).alt?[i(t.lng,e),i(t.lat,e),i(t.alt,e)]:[i(t.lng,e),i(t.lat,e)]}function zi(t,e,i,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(e?zi(t[s],I(t[s])?0:e-1,i,n):Mi(t[s],n));return!e&&i&&0<o.length&&o.push(o[0].slice()),o}function Ci(t,e){return t.feature?l({},t.feature,{geometry:e}):Zi(e)}function Zi(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}Tt={toGeoJSON:function(t){return Ci(this,{type:"Point",coordinates:Mi(this.getLatLng(),t)})}};function Si(t,e){return new wi(t,e)}mi.include(Tt),vi.include(Tt),gi.include(Tt),yi.include({toGeoJSON:function(t){var e=!I(this._latlngs);return Ci(this,{type:(e?"Multi":"")+"LineString",coordinates:zi(this._latlngs,e?1:0,!1,t)})}}),xi.include({toGeoJSON:function(t){var e=!I(this._latlngs),i=e&&!I(this._latlngs[0]),t=zi(this._latlngs,i?2:e?1:0,!0,t);return Ci(this,{type:(i?"Multi":"")+"Polygon",coordinates:t=e?t:[t]})}}),ui.include({toMultiPoint:function(e){var i=[];return this.eachLayer(function(t){i.push(t.toGeoJSON(e).geometry.coordinates)}),Ci(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(e){var i,n,t=this.feature&&this.feature.geometry&&this.feature.geometry.type;return"MultiPoint"===t?this.toMultiPoint(e):(i="GeometryCollection"===t,n=[],this.eachLayer(function(t){t.toGeoJSON&&(t=t.toGeoJSON(e),i?n.push(t.geometry):"FeatureCollection"===(t=Zi(t)).type?n.push.apply(n,t.features):n.push(t))}),i?Ci(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n})}});var Mt=Si,Ei=o.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=g(e),c(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(M(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){T(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&fe(this._image),this},bringToBack:function(){return this._map&&ge(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=g(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:P("img");M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onload=a(this.fire,this,"load"),e.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=e.src:(e.src=this._url,e.alt=this.options.alt)},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),t=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;be(this._image,t,e)},_reset:function(){var t=this._image,e=new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();Z(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){C(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),ki=Ei.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:P("video");if(M(e,"leaflet-image-layer"),this._zoomAnimated&&M(e,"leaflet-zoom-animated"),this.options.className&&M(e,this.options.className),e.onselectstart=u,e.onmousemove=u,e.onloadeddata=a(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=0<i.length?n:[e.src]}else{d(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var r=P("source");r.src=this._url[s],e.appendChild(r)}}}});var Oi=Ei.extend({_initImage:function(){var t=this._image=this._url;M(t,"leaflet-image-layer"),this._zoomAnimated&&M(t,"leaflet-zoom-animated"),this.options.className&&M(t,this.options.className),t.onselectstart=u,t.onmousemove=u}});var Ai=o.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof v||d(t))?(this._latlng=w(t),c(this,e)):(c(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return(t=arguments.length?t:this._source._map).hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&C(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&C(this._container,1),this.bringToFront(),this.options.interactive&&(M(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(C(this._container,0),this._removeTimeout=setTimeout(a(T,void 0,this._container),200)):T(this._container),this.options.interactive&&(z(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=w(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&fe(this._container),this},bringToBack:function(){return this._map&&ge(this._container),this},_prepareOpen:function(t){if(!(i=this._source)._map)return!1;if(i instanceof ci){var e,i=null,n=this._source._layers;for(e in n)if(n[e]._map){i=n[e];break}if(!i)return!1;this._source=i}if(!t)if(i.getCenter)t=i.getCenter();else if(i.getLatLng)t=i.getLatLng();else{if(!i.getBounds)throw new Error("Unable to get source layer LatLng.");t=i.getBounds().getCenter()}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){var t,e,i;this._map&&(e=this._map.latLngToLayerPoint(this._latlng),t=m(this.options.offset),i=this._getAnchor(),this._zoomAnimated?Z(this._container,e.add(i)):t=t.add(e).add(i),e=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x,this._container.style.bottom=e+"px",this._container.style.left=i+"px")},_getAnchor:function(){return[0,0]}}),Bi=(A.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),o.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(c(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}}),Ai.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return!(t=arguments.length?t:this._source._map).hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ai.prototype.openOn.call(this,t)},onAdd:function(t){Ai.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof fi||this._source.on("preclick",Ae))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof fi||this._source.off("preclick",Ae))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=P("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=P("div",t+"-content-wrapper",e);this._contentNode=P("div",t+"-content",i),Ie(e),Be(this._contentNode),S(e,"contextmenu",Ae),this._tipContainer=P("div",t+"-tip-container",e),this._tip=P("div",t+"-tip",this._tipContainer),this.options.closeButton&&((i=this._closeButton=P("a",t+"-close-button",e)).setAttribute("role","button"),i.setAttribute("aria-label","Close popup"),i.href="#close",i.innerHTML='<span aria-hidden="true">&#215;</span>',S(i,"click",function(t){O(t),this.close()},this))},_updateLayout:function(){var t=this._contentNode,e=t.style,i=(e.width="",e.whiteSpace="nowrap",t.offsetWidth),i=Math.min(i,this.options.maxWidth),i=(i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="",t.offsetHeight),n=this.options.maxHeight,o="leaflet-popup-scrolled";(n&&n<i?(e.height=n+"px",M):z)(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Z(this._container,t.add(e))},_adjustPan:function(){var t,e,i,n,o,s,r,a;this.options.autoPan&&(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning?this._autopanning=!1:(t=this._map,e=parseInt(pe(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+e,a=this._containerWidth,(i=new p(this._containerLeft,-e-this._containerBottom))._add(Pe(this._container)),i=t.layerPointToContainerPoint(i),o=m(this.options.autoPanPadding),n=m(this.options.autoPanPaddingTopLeft||o),o=m(this.options.autoPanPaddingBottomRight||o),s=t.getSize(),r=0,i.x+a+o.x>s.x&&(r=i.x+a-s.x+o.x),i.x-r-n.x<(a=0)&&(r=i.x-n.x),i.y+e+o.y>s.y&&(a=i.y+e-s.y+o.y),i.y-a-n.y<0&&(a=i.y-n.y),(r||a)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([r,a]))))},_getAnchor:function(){return m(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}})),Ii=(A.mergeOptions({closePopupOnClick:!0}),A.include({openPopup:function(t,e,i){return this._initOverlay(Bi,t,e,i).openOn(this),this},closePopup:function(t){return(t=arguments.length?t:this._popup)&&t.close(),this}}),o.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Bi,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ci||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e;this._popup&&this._map&&(Re(t),e=t.layer||t.target,this._popup._source!==e||e instanceof fi?(this._popup._source=e,this.openPopup(t.latlng)):this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}}),Ai.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ai.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ai.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ai.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=P("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i=this._map,n=this._container,o=i.latLngToContainerPoint(i.getCenter()),i=i.layerPointToContainerPoint(t),s=this.options.direction,r=n.offsetWidth,a=n.offsetHeight,h=m(this.options.offset),l=this._getAnchor(),i="top"===s?(e=r/2,a):"bottom"===s?(e=r/2,0):(e="center"===s?r/2:"right"===s?0:"left"===s?r:i.x<o.x?(s="right",0):(s="left",r+2*(h.x+l.x)),a/2);t=t.subtract(m(e,i,!0)).add(h).add(l),z(n,"leaflet-tooltip-right"),z(n,"leaflet-tooltip-left"),z(n,"leaflet-tooltip-top"),z(n,"leaflet-tooltip-bottom"),M(n,"leaflet-tooltip-"+s),Z(n,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&C(this._container,t)},_animateZoom:function(t){t=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(t)},_getAnchor:function(){return m(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}})),Ri=(A.include({openTooltip:function(t,e,i){return this._initOverlay(Ii,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),o.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ii,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){var e,i;!t&&this._tooltipHandlersAdded||(e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip},this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t)},openTooltip:function(t){return this._tooltip&&(this instanceof ci||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(S(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),S(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){t="function"==typeof t.getElement&&t.getElement();t&&t.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){var e;this._tooltip&&this._map&&(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag?(this._openOnceFlag=!0,(e=this)._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)})):(this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)))},_moveTooltip:function(t){var e=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(t=this._map.mouseEventToContainerPoint(t.originalEvent),t=this._map.containerPointToLayerPoint(t),e=this._map.layerPointToLatLng(t)),this._tooltip.setLatLng(e)}}),di.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var t=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;return e.html instanceof Element?(me(t),t.appendChild(e.html)):t.innerHTML=!1!==e.html?e.html:"",e.bgPos&&(e=m(e.bgPos),t.style.backgroundPosition=-e.x+"px "+-e.y+"px"),this._setIconStyles(t,"icon"),t},createShadow:function(){return null}}));di.Default=_i;var Ni=o.extend({options:{tileSize:256,opacity:1,updateWhenIdle:b.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){c(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),T(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(fe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ge(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){var t;return this._map&&(this._removeAllTiles(),(t=this._clampZoom(this._map.getZoom()))!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=j(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof p?t:new p(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,s=i.length;o<s;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!b.ielt9){C(this._container,this.options.opacity);var t,e=+new Date,i=!1,n=!1;for(t in this._tiles){var o,s=this._tiles[t];s.current&&s.loaded&&(o=Math.min(1,(e-s.loaded)/200),C(s.el,o),o<1?i=!0:(s.active?n=!0:this._onOpaqueTile(s),s.active=!0))}n&&!this._noPrune&&this._pruneTiles(),i&&(r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this))}},_onOpaqueTile:u,_initContainer:function(){this._container||(this._container=P("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(T(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=P("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),u(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:u,_onRemoveLevel:u,_onCreateLevel:u,_pruneTiles:function(){if(this._map){var t,e,i,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)(i=this._tiles[t]).current&&!i.active&&(e=i.coords,this._retainParent(e.x,e.y,e.z,e.z-5)||this._retainChildren(e.x,e.y,e.z,e.z+2));for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)T(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var t=Math.floor(t/2),e=Math.floor(e/2),i=i-1,o=new p(+t,+e),o=(o.z=i,this._tileCoordsToKey(o)),o=this._tiles[o];return o&&o.active?o.retain=!0:(o&&o.loaded&&(o.retain=!0),n<i&&this._retainParent(t,e,i,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var r=new p(o,s),r=(r.z=i+1,this._tileCoordsToKey(r)),r=this._tiles[r];r&&r.active?r.retain=!0:(r&&r.loaded&&(r.retain=!0),i+1<n&&this._retainChildren(o,s,i+1,n))}},_resetView:function(t){t=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e),o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o),s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),e=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();b.any3d?be(t.el,e,n):Z(t.el,e)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),i=e.getZoomScale(i,this._tileZoom),t=e.project(t,this._tileZoom).floor(),e=e.getSize().divideBy(2*i);return new f(t.subtract(e),t.add(e))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){var n,e=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(e),s=o.getCenter(),r=[],e=this.options.keepBuffer,a=new f(o.getBottomLeft().subtract([e,-e]),o.getTopRight().add([e,-e]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(n in this._tiles){var h=this._tiles[n].coords;h.z===this._tileZoom&&a.contains(new p(h.x,h.y))||(this._tiles[n].current=!1)}if(1<Math.abs(i-this._tileZoom))this._setView(t,i);else{for(var l=o.min.y;l<=o.max.y;l++)for(var u=o.min.x;u<=o.max.x;u++){var c,d=new p(u,l);d.z=this._tileZoom,this._isValidTile(d)&&((c=this._tiles[this._tileCoordsToKey(d)])?c.current=!0:r.push(d))}if(r.sort(function(t,e){return t.distanceTo(s)-e.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));for(var _=document.createDocumentFragment(),u=0;u<r.length;u++)this._addTile(r[u],_);this._level.el.appendChild(_)}}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}return!this.options.bounds||(e=this._tileCoordsToBounds(t),g(this.options.bounds).overlaps(e))},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),i=n.add(i);return[e.unproject(n,t.z),e.unproject(i,t.z)]},_tileCoordsToBounds:function(t){t=this._tileCoordsToNwSe(t),t=new s(t[0],t[1]);return t=this.options.noWrap?t:this._map.wrapLatLngBounds(t)},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var t=t.split(":"),e=new p(+t[0],+t[1]);return e.z=+t[2],e},_removeTile:function(t){var e=this._tiles[t];e&&(T(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){M(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=u,t.onmousemove=u,b.ielt9&&this.options.opacity<1&&C(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&x(a(this._tileReady,this,t,null,o)),Z(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(C(i.el,0),r(this._fadeFrame),this._fadeFrame=x(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(M(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),b.ielt9||!this._map._fadeAnimated?x(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new p(this._wrapX?H(t.x,this._wrapX):t.x,this._wrapY?H(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new f(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var Di=Ni.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=c(this,e)).detectRetina&&b.retina&&0<e.maxZoom?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return S(i,"load",a(this._tileOnLoad,this,e,i)),S(i,"error",a(this._tileOnError,this,e,i)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:b.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};return this._map&&!this._map.options.crs.infinite&&(t=this._globalTileRange.max.y-t.y,this.options.tms&&(e.y=t),e["-y"]=t),q(this._url,l(e,this.options))},_tileOnLoad:function(t,e){b.ielt9?setTimeout(a(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom;return(t=this.options.zoomReverse?e-t:t)+this.options.zoomOffset},_getSubdomain:function(t){t=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var t,e,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=u,i.onerror=u,i.complete||(i.src=K,e=this._tiles[t].coords,T(i),delete this._tiles[t],this.fire("tileabort",{tile:i,coords:e})))},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",K),Ni.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==K))return Ni.prototype._tileReady.call(this,t,e,i)}});function ji(t,e){return new Di(t,e)}var Hi=Di.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i,n=l({},this.defaultWmsParams);for(i in e)i in this.options||(n[i]=e[i]);var t=(e=c(this,e)).detectRetina&&b.retina?2:1,o=this.getTileSize();n.width=o.x*t,n.height=o.y*t,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[e]=this._crs.code,Di.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,i=_(i.project(e[0]),i.project(e[1])),e=i.min,i=i.max,e=(1.3<=this._wmsVersion&&this._crs===li?[e.y,e.x,i.y,i.x]:[e.x,e.y,i.x,i.y]).join(","),i=Di.prototype.getTileUrl.call(this,t);return i+U(this.wmsParams,i,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+e},setParams:function(t,e){return l(this.wmsParams,t),e||this.redraw(),this}});Di.WMS=Hi,ji.wms=function(t,e){return new Hi(t,e)};var Wi=o.extend({options:{padding:.1},initialize:function(t){c(this,t),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),M(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),n=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));b.any3d?be(this._container,n,i):Z(this._container,n)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new f(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Fi=Wi.extend({options:{tolerance:0},getEvents:function(){var t=Wi.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Wi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");S(t,"mousemove",this._onMouseMove,this),S(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),S(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){r(this._redrawRequest),delete this._ctx,T(this._container),k(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){var t,e,i,n;this._map._animatingZoom&&this._bounds||(Wi.prototype._update.call(this),t=this._bounds,e=this._container,i=t.getSize(),n=b.retina?2:1,Z(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",b.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update"))},_reset:function(){Wi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);t=(this._layers[h(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,e=e.prev;i?i.prev=e:this._drawLast=e,e?e.next=i:this._drawFirst=i,delete t._order,delete this._layers[h(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){for(var e,i=t.options.dashArray.split(/[, ]+/),n=[],o=0;o<i.length;o++){if(e=Number(i[o]),isNaN(e))return;n.push(e)}t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||x(this._redraw,this))},_extendRedrawBounds:function(t){var e;t._pxBounds&&(e=(t.options.weight||0)+1,this._redrawBounds=this._redrawBounds||new f,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e])))},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t,e=this._redrawBounds;e?(t=e.getSize(),this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)):(this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore())},_draw:function(){var t,e,i=this._redrawBounds;this._ctx.save(),i&&(e=i.getSize(),this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()),this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),i=0;i<a;i++){for(n=0,o=r[i].length;n<o;n++)s=r[i][n],h[n?"lineTo":"moveTo"](s.x,s.y);e&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){var e,i,n,o;this._drawing&&!t._empty()&&(e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),1!=(o=(Math.max(Math.round(t._radiusY),1)||n)/n)&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!=o&&i.restore(),this._fillStroke(i,t))},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(("click"===t.type||"preclick"===t.type)&&this._map._draggableMoved(e)||(i=e));this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){var e;!this._map||this._map.dragging.moving()||this._map._animatingZoom||(e=this._map.mouseEventToLayerPoint(t),this._handleMouseHover(t,e))},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(z(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(M(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(a(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e,i,n=t._order;n&&(e=n.next,i=n.prev,e&&((e.prev=i)?i.next=e:e&&(this._drawFirst=e),n.prev=this._drawLast,(this._drawLast.next=n).next=null,this._drawLast=n,this._requestRedraw(t)))},_bringToBack:function(t){var e,i,n=t._order;n&&(e=n.next,(i=n.prev)&&((i.next=e)?e.prev=i:i&&(this._drawLast=i),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(t)))}});function Ui(t){return b.canvas?new Fi(t):null}var Vi=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),zt={_initContainer:function(){this._container=P("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Wi.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Vi("shape");M(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Vi("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;T(e),t.removeInteractiveTarget(e),delete this._layers[h(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e=e||(t._stroke=Vi("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=d(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i=i||(t._fill=Vi("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){fe(t._container)},_bringToBack:function(t){ge(t._container)}},qi=b.vml?Vi:ct,Gi=Wi.extend({_initContainer:function(){this._container=qi("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=qi("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){T(this._container),k(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){var t,e,i;this._map._animatingZoom&&this._bounds||(Wi.prototype._update.call(this),e=(t=this._bounds).getSize(),i=this._container,this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),Z(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update"))},_initPath:function(t){var e=t._path=qi("path");t.options.className&&M(e,t.options.className),t.options.interactive&&M(e,"leaflet-interactive"),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){T(t._path),t.removeInteractiveTarget(t._path),delete this._layers[h(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,t=t.options;e&&(t.stroke?(e.setAttribute("stroke",t.color),e.setAttribute("stroke-opacity",t.opacity),e.setAttribute("stroke-width",t.weight),e.setAttribute("stroke-linecap",t.lineCap),e.setAttribute("stroke-linejoin",t.lineJoin),t.dashArray?e.setAttribute("stroke-dasharray",t.dashArray):e.removeAttribute("stroke-dasharray"),t.dashOffset?e.setAttribute("stroke-dashoffset",t.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),t.fill?(e.setAttribute("fill",t.fillColor||t.color),e.setAttribute("fill-opacity",t.fillOpacity),e.setAttribute("fill-rule",t.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,dt(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n="a"+i+","+(Math.max(Math.round(t._radiusY),1)||i)+" 0 1,0 ",e=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+n+2*i+",0 "+n+2*-i+",0 ";this._setPath(t,e)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){fe(t._path)},_bringToBack:function(t){ge(t._path)}});function Ki(t){return b.svg||b.vml?new Gi(t):null}b.vml&&Gi.include(zt),A.include({getRenderer:function(t){t=(t=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer)||(this._renderer=this._createRenderer());return this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(t){var e;return"overlayPane"!==t&&void 0!==t&&(void 0===(e=this._paneRenderers[t])&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e)},_createRenderer:function(t){return this.options.preferCanvas&&Ui(t)||Ki(t)}});var Yi=xi.extend({initialize:function(t,e){xi.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=g(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});Gi.create=qi,Gi.pointsToPath=dt,wi.geometryToLayer=bi,wi.coordsToLatLng=Li,wi.coordsToLatLngs=Ti,wi.latLngToCoords=Mi,wi.latLngsToCoords=zi,wi.getFeature=Ci,wi.asFeature=Zi,A.mergeOptions({boxZoom:!0});var _t=n.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){S(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){k(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){T(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),re(),Le(),this._startPoint=this._map.mouseEventToContainerPoint(t),S(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=P("div","leaflet-zoom-box",this._container),M(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var t=new f(this._point,this._startPoint),e=t.getSize();Z(this._box,t.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(T(this._box),z(this._container,"leaflet-crosshair")),ae(),Te(),k(document,{contextmenu:Re,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){1!==t.which&&1!==t.button||(this._finish(),this._moved&&(this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0),t=new s(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),this._map.fitBounds(t).fire("boxzoomend",{boxZoomBounds:t})))},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}}),Ct=(A.addInitHook("addHandler","boxZoom",_t),A.mergeOptions({doubleClickZoom:!0}),n.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,i=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}})),Zt=(A.addInitHook("addHandler","doubleClickZoom",Ct),A.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0}),n.extend({addHooks:function(){var t;this._draggable||(t=this._map,this._draggable=new Xe(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))),M(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){z(this._map._container,"leaflet-grab"),z(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t,e=this._map;e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity?(t=g(this._map.options.maxBounds),this._offsetLimit=_(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))):this._offsetLimit=null,e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){var e,i;this._map.options.inertia&&(e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos,this._positions.push(i),this._times.push(e),this._prunePositions(e)),this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){var t,e;this._viscosity&&this._offsetLimit&&(t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit,t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t))},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,n=(n+e+i)%t-e-i,t=Math.abs(o+i)<Math.abs(n+i)?o:n;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=t},_onDragEnd:function(t){var e,i,n,o,s=this._map,r=s.options,a=!r.inertia||t.noInertia||this._times.length<2;s.fire("dragend",t),!a&&(this._prunePositions(+new Date),t=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,e=r.easeLinearity,a=(t=t.multiplyBy(e/a)).distanceTo([0,0]),i=Math.min(r.inertiaMaxSpeed,a),t=t.multiplyBy(i/a),n=i/(r.inertiaDeceleration*e),(o=t.multiplyBy(-n/2).round()).x||o.y)?(o=s._limitOffset(o,s.options.maxBounds),x(function(){s.panBy(o,{duration:n,easeLinearity:e,noMoveStart:!0,animate:!0})})):s.fire("moveend")}})),St=(A.addInitHook("addHandler","dragging",Zt),A.mergeOptions({keyboard:!0,keyboardPanDelta:80}),n.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),S(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),k(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){var t,e,i;this._focused||(i=document.body,t=document.documentElement,e=i.scrollTop||t.scrollTop,i=i.scrollLeft||t.scrollLeft,this._map._container.focus(),window.scrollTo(i,e))},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){for(var e=this._panKeys={},i=this.keyCodes,n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){for(var e=this._zoomKeys={},i=this.keyCodes,n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){S(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){k(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i,n=t.keyCode,o=this._map;if(n in this._panKeys)o._panAnim&&o._panAnim._inProgress||(i=this._panKeys[n],t.shiftKey&&(i=m(i).multiplyBy(3)),o.options.maxBounds&&(i=o._limitOffset(m(i),o.options.maxBounds)),o.options.worldCopyJump?(e=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))),o.panTo(e)):o.panBy(i));else if(n in this._zoomKeys)o.setZoom(o.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[n]);else{if(27!==n||!o._popup||!o._popup.options.closeOnEscapeKey)return;o.closePopup()}Re(t)}}})),Et=(A.addInitHook("addHandler","keyboard",St),A.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60}),n.extend({addHooks:function(){S(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){k(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=He(t),i=this._map.options.wheelDebounceTime,e=(this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date),Math.max(i-(+new Date-this._startTime),0));clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),e),Re(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0,n=(t._stop(),this._delta/(4*this._map.options.wheelPxPerZoomLevel)),n=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,i=i?Math.ceil(n/i)*i:n,n=t._limitZoom(e+(0<this._delta?i:-i))-e;this._delta=0,this._startTime=null,n&&("center"===t.options.scrollWheelZoom?t.setZoom(e+n):t.setZoomAround(this._lastMousePos,e+n))}})),kt=(A.addInitHook("addHandler","scrollWheelZoom",Et),A.mergeOptions({tapHold:b.touchNative&&b.safari&&b.mobile,tapTolerance:15}),n.extend({addHooks:function(){S(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){k(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){var e;clearTimeout(this._holdTimeout),1===t.touches.length&&(e=t.touches[0],this._startPos=this._newPos=new p(e.clientX,e.clientY),this._holdTimeout=setTimeout(a(function(){this._cancel(),this._isTapValid()&&(S(document,"touchend",O),S(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),S(document,"touchend touchcancel contextmenu",this._cancel,this),S(document,"touchmove",this._onMove,this))},_cancelClickPrevent:function t(){k(document,"touchend",O),k(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),k(document,"touchend touchcancel contextmenu",this._cancel,this),k(document,"touchmove",this._onMove,this)},_onMove:function(t){t=t.touches[0];this._newPos=new p(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){t=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});t._simulated=!0,e.target.dispatchEvent(t)}})),Ot=(A.addInitHook("addHandler","tapHold",kt),A.mergeOptions({touchZoom:b.touch,bounceAtZoomLimits:!0}),n.extend({addHooks:function(){M(this._map._container,"leaflet-touch-zoom"),S(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){z(this._map._container,"leaflet-touch-zoom"),k(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e,i,n=this._map;!t.touches||2!==t.touches.length||n._animatingZoom||this._zooming||(e=n.mouseEventToContainerPoint(t.touches[0]),i=n.mouseEventToContainerPoint(t.touches[1]),this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),"center"!==n.options.touchZoom&&(this._pinchStartLatLng=n.containerPointToLatLng(e.add(i)._divideBy(2))),this._startDist=e.distanceTo(i),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),S(document,"touchmove",this._onTouchMove,this),S(document,"touchend touchcancel",this._onTouchEnd,this),O(t))},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&1<o)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{i=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===i.x&&0===i.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(i),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),r(this._animRequest);n=a(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=x(n,this,!0),O(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,r(this._animRequest),k(document,"touchmove",this._onTouchMove,this),k(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}})),Xi=(A.addInitHook("addHandler","touchZoom",Ot),A.BoxZoom=_t,A.DoubleClickZoom=Ct,A.Drag=Zt,A.Keyboard=St,A.ScrollWheelZoom=Et,A.TapHold=kt,A.TouchZoom=Ot,t.Bounds=f,t.Browser=b,t.CRS=ot,t.Canvas=Fi,t.Circle=vi,t.CircleMarker=gi,t.Class=et,t.Control=B,t.DivIcon=Ri,t.DivOverlay=Ai,t.DomEvent=mt,t.DomUtil=pt,t.Draggable=Xe,t.Evented=it,t.FeatureGroup=ci,t.GeoJSON=wi,t.GridLayer=Ni,t.Handler=n,t.Icon=di,t.ImageOverlay=Ei,t.LatLng=v,t.LatLngBounds=s,t.Layer=o,t.LayerGroup=ui,t.LineUtil=vt,t.Map=A,t.Marker=mi,t.Mixin=ft,t.Path=fi,t.Point=p,t.PolyUtil=gt,t.Polygon=xi,t.Polyline=yi,t.Popup=Bi,t.PosAnimation=Fe,t.Projection=wt,t.Rectangle=Yi,t.Renderer=Wi,t.SVG=Gi,t.SVGOverlay=Oi,t.TileLayer=Di,t.Tooltip=Ii,t.Transformation=at,t.Util=tt,t.VideoOverlay=ki,t.bind=a,t.bounds=_,t.canvas=Ui,t.circle=function(t,e,i){return new vi(t,e,i)},t.circleMarker=function(t,e){return new gi(t,e)},t.control=Ue,t.divIcon=function(t){return new Ri(t)},t.extend=l,t.featureGroup=function(t,e){return new ci(t,e)},t.geoJSON=Si,t.geoJson=Mt,t.gridLayer=function(t){return new Ni(t)},t.icon=function(t){return new di(t)},t.imageOverlay=function(t,e,i){return new Ei(t,e,i)},t.latLng=w,t.latLngBounds=g,t.layerGroup=function(t,e){return new ui(t,e)},t.map=function(t,e){return new A(t,e)},t.marker=function(t,e){return new mi(t,e)},t.point=m,t.polygon=function(t,e){return new xi(t,e)},t.polyline=function(t,e){return new yi(t,e)},t.popup=function(t,e){return new Bi(t,e)},t.rectangle=function(t,e){return new Yi(t,e)},t.setOptions=c,t.stamp=h,t.svg=Ki,t.svgOverlay=function(t,e,i){return new Oi(t,e,i)},t.tileLayer=ji,t.tooltip=function(t,e){return new Ii(t,e)},t.transformation=ht,t.version="1.9.4",t.videoOverlay=function(t,e,i){return new ki(t,e,i)},window.L);t.noConflict=function(){return window.L=Xi,this},window.L=t});
//# sourceMappingURL=leaflet.js.map
/* ---- js/config.js ---- */
/* SwissWind24 – zentrale Konfiguration.
   Alle Spots, Schwellen, Modelle und Faustregeln stehen hier und nirgends sonst im Code. */
window.SW = window.SW || {};

SW.CONFIG = {
  appName: 'SwissWind24',
  version: '2.11.0',                                   // wird von tools/build.py in den Service Worker übernommen
  timeZone: 'Europe/Zurich',                          // alle Zeiten werden in Zürcher Zeit gerechnet und angezeigt

  /* ---------- Cache und Laden ---------- */
  cache: {
    ttlMinutes: 20,                                   // Datensatz gilt 20 Minuten als frisch
    hydroTtlMinutes: 10,                              // BAFU-Messwerte kommen alle 10 Minuten
    staleWarnMinutes: 60,                             // ab 60 Minuten Alter: Hinweis «Daten älter als 1 h»
    maxAgeDays: 7,                                    // ältere Einträge werden beim Start gelöscht
    refreshCheckSeconds: 300                          // alle 5 Minuten prüfen, ob die sichtbare Seite veraltet ist
  },

  api: {
    forecast: 'https://api.open-meteo.com/v1/forecast',
    geocoding: 'https://geocoding-api.open-meteo.com/v1/search',
    flood: 'https://flood-api.open-meteo.com/v1/flood',
    hydroLatest: 'https://api.existenz.ch/apiv1/hydro/latest',
    hydroRange: 'https://api.existenz.ch/apiv1/hydro/daterange',
    hydroAppId: 'swisswind24',                        // existenz.ch bittet um eine App-Kennung
    timeoutMs: 15000                                  // Abbruch nach 15 s, dann Cache oder Fehlerkarte
  },

  /* ---------- Wettermodelle ---------- */
  // id = Open-Meteo Kennung (live geprüft am 23.11.2026). days = typische Reichweite.
  // has = Grössen, die das Modell liefert; fehlende kommen aus dem Fallback-Modell.
  models: [
    { id: 'meteoswiss_icon_ch2', label: 'ICON-CH2', info: 'MeteoSchweiz 2 km', days: 5, minutely15: true, has: { p850: false, p250: false } },
    { id: 'meteoswiss_icon_ch1', label: 'ICON-CH1', info: 'MeteoSchweiz 1 km', days: 1.4, minutely15: true, has: { p850: false, p250: false } },
    { id: 'ecmwf_ifs025', label: 'ECMWF', info: 'IFS 0.25° global', days: 7, minutely15: false, has: { p850: true, p250: true } },
    { id: 'gfs_seamless', label: 'GFS', info: 'NOAA global', days: 7, minutely15: false, has: { p850: true, p250: true } },
    { id: 'icon_seamless', label: 'ICON', info: 'DWD global/Europa', days: 7, minutely15: true, has: { p850: true, p250: true } },
    { id: 'meteofrance_arome_france_hd', label: 'AROME-HD', info: 'Météo-France 1.5 km', days: 2, minutely15: true, has: { p850: false, p250: false } },
    { id: 'knmi_harmonie_arome_europe', label: 'Harmonie', info: 'KNMI 5.5 km', days: 2.5, minutely15: true, has: { p850: true, p250: false } },
    { id: 'meteofrance_arpege_europe', label: 'ARPEGE', info: 'statt ALADIN (nicht verfügbar)', days: 4, minutely15: false, has: { p850: true, p250: true } },
    { id: 'ukmo_uk_deterministic_2km', label: 'UKV', info: 'UK Met Office 2 km', days: 2.3, minutely15: false, has: { p850: true, p250: true } }
  ],
  defaultModel: 'meteoswiss_icon_ch2',
  fallbackModel: 'icon_seamless',                     // liefert alle Grössen 7 Tage
  fallbackModelAlt: 'ecmwf_ifs025',                   // falls ICON selbst gewählt ist

  /* ---------- Spots ---------- */
  // Vorinstallierter Favorit beim ersten Start; weitere fügt man selbst hinzu (Spot › «+ Favorit»).
  spots: [
    { id: 'kuessnacht', name: 'Küssnacht am Rigi', lat: 47.0856, lon: 8.4421, lake: 'Vierwaldstättersee' }
  ],
  // Feste Messorte für Wetterlagen und Webcams (keine Favoriten)
  places: {
    romanshorn: { id: 'romanshorn', name: 'Romanshorn', lat: 47.5600, lon: 9.3800 },
    domaso: { id: 'domaso', name: 'Domaso', lat: 46.1530, lon: 9.3300 },
    eich: { id: 'eich', name: 'Eich', lat: 47.1520, lon: 8.1680 }
  },
  defaultSpot: 'kuessnacht',

  /* ---------- Modi (Vorlagen; in der App unter Setup anpassbar) ---------- */
  // pages = Seiten in der Navigation (routen = Planer/Wetter GB/Archiv, wetter = Wetterlagen/Karte), cards = Karten auf «Heute» in dieser Reihenfolge, sports = Auswahl-Chips
  modes: {
    segeln:   { label: 'Segeln',     sports: ['segeln'], pages: ['heute', 'segeln', 'spot', 'routen', 'wetter'],
                cards: ['cockpit', 'win', 'wetter', 'rekord', 'lagen', 'fav'] },
    windsurf: { label: 'Windsurf',   sports: ['foil', 'windsurf', 'kite'], pages: ['heute', 'segeln', 'spot', 'wetter'],
                cards: ['cockpit', 'win', 'timeline', 'wetter', 'fav', 'lagen'] },
    welle:    { label: 'Flusswelle', sports: ['welle'], pages: ['welle'],                      // ein Bildschirm, alles zu Bremgarten
                cards: ['welle', 'wetter', 'ampel', 'now'] },
    alle:     { label: 'Alles',      sports: ['foil', 'windsurf', 'kite', 'segeln'], pages: ['heute', 'segeln', 'spot', 'welle', 'routen', 'wetter'],
                cards: ['cockpit', 'win', 'wetter', 'timeline', 'fav', 'welle', 'rekord', 'lagen'] }
  },
  defaultMode: 'alle',
  // Alle Karten, die «Heute» kennt (Label für Setup)
  heuteCards: { cockpit: 'Cockpit (Wind jetzt, Speed, Kurs, nächste 3 h)', live: 'Live-Details (GPS gross)', wetter: 'Wetter jetzt (Druck-Tendenz, Regen, Tageslicht)', ampel: '3h Windcheck', now: 'Wind jetzt (Tacho, Kompass)', win: 'Fahrbare Zeitfenster', timeline: 'Wind-Zeitleiste',
                fav: 'Favoriten jetzt', welle: 'Flusswelle', rekord: 'Rekordcheck Gelbes Band', lagen: 'Föhn, Bise, Westwind jetzt' },

  /* ---------- Sportarten (Mittelwind in Knoten) ---------- */
  // min = ab hier fahrbar, ideal = Bereich mit vollem Punktwert, max = darüber zu viel.
  sports: {
    foil:     { label: 'Foil',      min: 9,  idealLo: 11, idealHi: 20, max: 26, gustMax: 32 },
    windsurf: { label: 'Windsurf',  min: 13, idealLo: 16, idealHi: 26, max: 34, gustMax: 40 },
    kite:     { label: 'Kite',      min: 12, idealLo: 14, idealHi: 24, max: 30, gustMax: 34 },
    segeln:   { label: 'Segeln',    min: 6,  idealLo: 8,  idealHi: 18, max: 24, gustMax: 30 },
    welle:    { label: 'Flusswelle', unit: 'm³/s', min: 200, idealLo: 220, idealHi: 360, max: 390 }
  },
  defaultSport: 'foil',
  minWindowHours: 2,                                  // «fahrbar» erst ab 2 zusammenhängenden Stunden

  /* ---------- Ampel und Warnungen ---------- */
  ampel: {
    hours: 3,                                         // «3h Windcheck»
    greenKt: 12,                                      // Mittelwind ab 12 kt = grün
    yellowKt: 8,                                      // 8–12 kt = knapp
    thunderCode: 95                                   // WMO-Code ≥ 95 = Gewitter = rot
  },
  warnings: {
    strongGustKt: 13.5,                               // 25 km/h Böen: Starkwind (angelehnt an Sturmwarndienst Seen)
    stormGustKt: 33                                   // 61 km/h Böen: Sturm
  },

  /* ---------- Farbskala Wind (kt) ---------- */
  windScale: [
    { lo: 0,  c: '#3a4a5c', t: '#e8eef4' },           // unter 6 kt: grau-blau
    { lo: 6,  c: '#1f6fb5', t: '#ffffff' },           // 6–10 kt: blau
    { lo: 10, c: '#17804a', t: '#ffffff' },           // 10–14 kt: grün (Kontrast 5:1 mit weisser Zahl)
    { lo: 14, c: '#c9b400', t: '#111111' },           // 14–18 kt: gelb
    { lo: 18, c: '#e07a10', t: '#111111' },           // 18–24 kt: orange
    { lo: 24, c: '#d23030', t: '#ffffff' },           // 24–30 kt: rot
    { lo: 30, c: '#a0309a', t: '#ffffff' }            // über 30 kt: violett
  ],

  /* ---------- Druck-Faustregeln (Meeresspiegeldruck MSL, hPa) ---------- */
  points: {
    lugano:    { name: 'Lugano',    lat: 46.00, lon: 8.95 },
    zuerich:   { name: 'Zürich',    lat: 47.37, lon: 8.54 },
    genf:      { name: 'Genf',      lat: 46.20, lon: 6.14 },
    konstanz:  { name: 'Konstanz',  lat: 47.66, lon: 9.17 },
    bern:      { name: 'Bern',      lat: 46.95, lon: 7.44 },
    brest:     { name: 'Brest',     lat: 48.39, lon: -4.48 },
    wien:      { name: 'Wien',      lat: 48.20, lon: 16.37 },
    luzern:    { name: 'Luzern',    lat: 47.05, lon: 8.31 },
    urnersee:  { name: 'Urnersee',  lat: 46.95, lon: 8.60 },
    aegerisee: { name: 'Ägerisee',  lat: 47.12, lon: 8.62 },
    meggen:    { name: 'Meggen',    lat: 47.05, lon: 8.37 }
  },
  rules: {
    foehn: { a: 'lugano', b: 'zuerich', south: 4, southStrong: 8, north: -4, northStrong: -8 },   // Lugano − Zürich
    bise:  { a: 'konstanz', b: 'genf', weak: 3, strong: 5, storm: 8 },                            // Konstanz − Genf
    west:  { a: 'genf', b: 'bern', weak: 2, strong: 4 },                                          // Genf − Bern (alt: Bern − Genf, Vorzeichen korrigiert)
    band:  { a: 'wien', b: 'brest', good: 5, record: 8, h850good: 25, h850record: 35,             // Wien − Brest und Höhenwind Luzern
             dirLo: 200, dirHi: 300, jet: 70, recordKt: 25, recordTime: '1 h 34 min' }
  },

  /* ---------- Gelbes Band: Durchsegel-Rechner ---------- */
  route: {
    sampleKm: 3,                                      // eigene Strecken: Wind-Stützpunkt etwa alle 3 km
    maxSamples: 10,                                   // höchstens 10 Stützpunkte pro Request
    // Optimierung: Korridor um die Strecke in Stufen und Querspuren zerlegen
    opt: { stageKm: 0.5, lanes: 4, corridorKm: 0.6, maxLaneJump: 1 },  // ±4 Spuren, halbe Korridorbreite 0.6 km
    scanStepMinutes: 15,                              // Startzeit-Scan im 15-Minuten-Raster
    // Freie Routensuche auf dem Vierwaldstättersee (Uferlinie aus OpenStreetMap, src/js/lake.js)
    free: { lake: 'vierwaldstaettersee', cellM: 200, tackS: 12, gybeS: 8, maxHours: 36, maxStates: 1500000 },  // Gitter 200 m, Wende 12 s, Halse 8 s
    // Wind-Stützpunkte über den ganzen See für die freie Route (ein Request)
    lakes: {                                          // Seen mit Uferlinie (src/js/lake.js): Gitterweite der Routensuche und Wind-Stützpunkte
      vierwaldstaettersee: { cellM: 200, windPoints: null },          // null = lakeWindPoints unten
      zugersee: { cellM: 100, windPoints: [                           // kleinerer See, feineres Gitter (Regattabahnen)
        { name: 'Zug', lat: 47.163, lon: 8.505 }, { name: 'Chamer Bucht', lat: 47.172, lon: 8.475 }, { name: 'Oberwil', lat: 47.140, lon: 8.500 },
        { name: 'Walchwil', lat: 47.105, lon: 8.505 }, { name: 'Immensee', lat: 47.093, lon: 8.470 }, { name: 'Arth', lat: 47.068, lon: 8.515 } ] }
    },
    lakeWindPoints: [
      { name: 'Luzern', lat: 47.050, lon: 8.330 }, { name: 'Küssnachter Arm', lat: 47.060, lon: 8.410 },
      { name: 'Hertenstein', lat: 47.040, lon: 8.395 }, { name: 'Weggis', lat: 47.028, lon: 8.433 },
      { name: 'Buochser Bucht', lat: 46.980, lon: 8.410 }, { name: 'Vitznau', lat: 47.003, lon: 8.488 },
      { name: 'Gersau', lat: 46.990, lon: 8.525 }, { name: 'Treib', lat: 46.988, lon: 8.570 }, { name: 'Brunnen', lat: 46.995, lon: 8.600 }
    ],
    tiles: {                                          // Kartenhintergrund für den Routen-Editor (nur online)
      swisstopo: { url: 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg', attr: '© swisstopo', maxZoom: 18 },
      swisstopoGrau: { url: 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-grau/default/current/3857/{z}/{x}/{y}.jpeg', attr: '© swisstopo, Uferlinie © OpenStreetMap', maxZoom: 18 },  // grau: See hebt sich ab
      osm: { url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', attr: '© OpenStreetMap-Mitwirkende', maxZoom: 18 }
    },
    // Start- und Ziellinie Gelbes Band (Ausschreibung): Start Luzern zwischen Kopfsteg Seepolizei (Alpenquai) und Hafen Tivoli (Kante West),
    // Ziel Brunnen in Verlängerung des ersten SGV-Stegs (ca. max. 50 m vom Ufer weg). Auf der Karte verschiebbar.
    gbLines: { start: { a: { lat: 47.0476, lon: 8.3184, name: 'Kopfsteg Seepolizei' }, b: { lat: 47.0550, lon: 8.3250, name: 'Hafen Tivoli (West)' } },
               finish: { a: { lat: 46.9930, lon: 8.6053, name: 'SGV-Steg Brunnen' }, b: { lat: 46.9910, lon: 8.6053, name: 'Verlängerung Steg' } } },
    // Vorinstallierte Regatta auf dem Zugersee (Beispiel, auf der Karte frei anpassbar)
    regattaPreset: { id: 'zug-regatta', kind: 'regatta', name: 'Zugersee Regatta (Beispiel)', corridorKm: 0.3, speedFactor: 100,
      regatta: { start: { a: { lat: 47.1280, lon: 8.4775 }, b: { lat: 47.1280, lon: 8.4805 } }, finish: null, finishIsStart: true, laps: 2, course: '1-2',
        marks: [{ name: 'Luv', side: 'bb', lat: 47.1500, lon: 8.4840 }, { name: 'Lee', side: 'bb', lat: 47.1310, lon: 8.4790 }] } },
    // Geometrie der Standard-Strecke (Wegpunkte); Kurs je Etappe wird daraus berechnet.
    waypoints: [                                      // alle Verbindungen auf dem Wasser (geprüft gegen die Uferlinie)
      { name: 'Luzern', lat: 47.0515, lon: 8.3183 },
      { name: 'Kreuztrichter', lat: 47.0280, lon: 8.3657 },
      { name: 'Obere Nase', lat: 47.0008, lon: 8.4658 },
      { name: 'Untere Nase', lat: 46.9900, lon: 8.4763 },
      { name: 'Gersauer Becken', lat: 46.9846, lon: 8.5579 },
      { name: 'Brunnen', lat: 46.9936, lon: 8.5974 }
    ],

    // Wind-Stützpunkte entlang des Sees; Wind wird räumlich dazwischen interpoliert.
    windPoints: [
      { name: 'Luzern', lat: 47.0500, lon: 8.3300 },
      { name: 'Weggis', lat: 47.0280, lon: 8.4330 },
      { name: 'Gersau', lat: 46.9920, lon: 8.5250 },
      { name: 'Brunnen', lat: 46.9950, lon: 8.6000 }
    ],
    stepMinutes: 10,                                  // Rechenschritt 10 Minuten
    startTimes: { from: 6, to: 20, stepMinutes: 30 }, // Startzeiten 06:00 bis 20:00, alle 30 min
    tackPenalty: 0.92,                                // Verlust durch Wenden/Halsen beim Kreuzen (Faktor)
    // Einfache Polare: Bootsspeed in kt für Windstärke (Spalten) und Windeinfallswinkel (Zeilen).
    // Ungefähr ein sportliches Kielboot um 7–8 m. Für andere Boote hier anpassen.
    polar: {
      tws: [4, 6, 8, 10, 12, 16, 20, 25],
      twa: [0, 35, 45, 60, 75, 90, 110, 135, 150, 165, 180],
      speed: [
        [0,   0,   0,   0,   0,   0,   0,   0  ],      // 0°: kein Vortrieb
        [0,   0,   0,   0,   0,   0,   0,   0  ],      // 35°: noch im toten Winkel
        [2.6, 3.8, 4.7, 5.3, 5.7, 6.0, 6.1, 6.0],      // 45°: hoch am Wind
        [3.0, 4.3, 5.3, 5.9, 6.3, 6.7, 6.9, 6.9],      // 60°
        [3.2, 4.6, 5.6, 6.3, 6.7, 7.2, 7.5, 7.6],      // 75°
        [3.3, 4.7, 5.8, 6.5, 7.0, 7.6, 8.0, 8.3],      // 90°: Halbwind
        [3.2, 4.6, 5.8, 6.6, 7.2, 8.0, 8.6, 9.2],      // 110°: Raumwind
        [2.9, 4.2, 5.4, 6.3, 7.0, 8.1, 9.0, 10.0],     // 135°
        [2.5, 3.7, 4.9, 5.8, 6.6, 7.7, 8.8, 10.0],     // 150°
        [2.1, 3.2, 4.3, 5.2, 6.0, 7.1, 8.1, 9.3],      // 165°
        [1.9, 2.9, 4.0, 4.9, 5.6, 6.7, 7.7, 8.8]       // 180°: platt vor dem Laken
      ]
    }
  },

  /* ---------- Thermik-Index (Seewind) – Gewichte in Punkten ---------- */
  thermik: {
    window: [11, 18],                                 // Zeitfenster für Thermik
    sun:   { max: 35, fullHours: 8 },                 // Sonnenscheindauer: 35 Punkte bei ≥ 8 h, linear
    temp:  { max: 20, lo: 12, hi: 26 },               // Tmax 12 °C = 0, 26 °C = 20 Punkte
    calm:  { max: 20, goodKt: 8, badKt: 20 },         // Höhenwind 850 hPa schwach = gut (≤ 8 kt), ≥ 20 kt = −20
    cloud: { max: 15 },                               // mittlere Bewölkung 11–16 h: 0 % = 15 Punkte
    lapse: { max: 10, lo: 6, hi: 13 },                // T2m − T850: 6 K = 0, 13 K = 10 Punkte (Labilität)
    rain:  { penalty: -30, mm: 0.5 }                  // ab 0.5 mm im Fenster: −30
  },

  /* ---------- Küssnacht Feierabend ---------- */
  feierabend: {
    spot: 'kuessnacht',
    hours: [15, 17, 19, 21],
    wind:   { max: 60 },                              // Hauptanteil: Mittelwind gegen Sport-Schwelle
    steady: { max: 10, gustRatio: 1.6 },              // Böigkeit: Böe/Mittel ≤ 1.3 = 10, ≥ 1.6 = 0
    trend:  { max: 10 },                              // Wind ±1 h ähnlich = konstant
    thermal:{ max: 10 },                              // Einstrahlung ≥ 300 W/m² und warm
    rain:   { penalty: -15 },
    dark:   { penalty: -40, minutesAfterSunset: 20 }  // nach Sonnenuntergang praktisch nicht fahrbar
  },

  /* ---------- Comersee (Domaso) ---------- */
  como: {
    spot: 'domaso',
    axisDeg: 15,                                      // Seeachse am Nordende ~ NNE–SSW
    tivano: { label: 'Tivano', from: 'N', dirLo: 330, dirHi: 45, hours: [4, 12] },   // Nordwind, nachts/morgens
    breva:  { label: 'Breva', from: 'S', dirLo: 150, dirHi: 230, hours: [11, 19] },  // Südwind, thermisch nachmittags
    goodKt: 10, strongKt: 14
  },

  /* ---------- Flusswelle Bremgarten ---------- */
  welle: {
    station: '2018', stationName: 'Reuss – Mellingen',        // BAFU-Station, Referenz für die Welle
    upstream: [ { id: '2110', name: 'Reuss – Mühlau' }, { id: '2152', name: 'Reuss – Luzern' } ],
    low: 200, high: 390,                                       // zu tief < 200, ideal 200–390, Hochwasser > 390 m³/s (eine Quelle für Text und Ampel)
    scaleMax: 600,                                             // Balkenanzeige bis 600 m³/s
    floodPoint: { lat: 47.42, lon: 8.27 },                     // GloFAS-Gitterpunkt nahe Mellingen
    rainPoint: { lat: 47.05, lon: 8.45 },                      // Niederschlag im Einzugsgebiet (Vierwaldstättersee)
    spot: { lat: 47.352, lon: 8.342 }                          // Bremgarten (für Wetter an der Welle)
  },

  /* ---------- Karten und Webcams ---------- */
  windy: {
    url: 'https://embed.windy.com/embed2.html?lat={lat}&lon={lon}&detailLat={lat}&detailLon={lon}&zoom={zoom}&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1',
    views: [
      { name: 'Schweiz', lat: 46.80, lon: 8.20, zoom: 8 },
      { name: 'Vierwaldstättersee', lat: 46.99, lon: 8.45, zoom: 11 },
      { name: 'Bodensee', lat: 47.56, lon: 9.38, zoom: 10 },
      { name: 'Comersee', lat: 46.10, lon: 9.30, zoom: 10 }
    ]
  },
  webcamRefreshMinutes: 5,
  webcams: [
    { id: 'urner-bucht', name: 'Urnersee – Bucht', src: 'https://elbeato.bplaced.net/webcamSurfclub/webcam_bucht_small.jpg' },
    { id: 'urner-axenegg', name: 'Urnersee – Axenegg', src: 'https://www.elbeato.bplaced.net/webcamSurfclub/webcam_axenegg_small.jpg' },
    { id: 'sisikon-05', name: 'Sisikon – Kamera 05', src: 'https://images.weserv.nl/?url=bhsboots.myhostpoint.ch/kamera05.jpg', note: 'Quelle nur per HTTP, daher über Bild-Proxy' },
    { id: 'sisikon-04', name: 'Sisikon – Kamera 04', src: 'https://images.weserv.nl/?url=bhsboots.myhostpoint.ch/kamera04.jpg', note: 'Quelle nur per HTTP, daher über Bild-Proxy' },
    { id: 'domaso', name: 'Domaso – Comersee', src: 'https://images.weserv.nl/?url=domasocamping.com/webcam/panorama.jpg&w=1400', fallback: 'https://domasocamping.com/webcam/panorama.jpg', note: 'Original 1.5 MB, verkleinert über Bild-Proxy' },
    { id: 'eich', name: 'Eich – Sempachersee', src: 'https://windsurfclubeich.ch/webcam/hikvision_current.jpg' }
  ]
};

/* ---- js/users-data.js ---- */
/* Benutzerprofile. Erzeugt mit tools/make_users.py – nur Salz und Prüfwert, kein Passwort. */
window.SW = window.SW || {};
SW.USERS = [
 {
  "id": "philippe",
  "name": "Philippe Becker",
  "salt": "e7e3386e24fb98f1",
  "check": "d69138506bfaa368744aea49d604f504ac8f168de9f790d6ab4b9da2321781ff"
 },
 {
  "id": "andre",
  "name": "André Becker",
  "salt": "68d0637c6e5ac0a6",
  "check": "8a4dafa2d0d1a1c5dafe1cda718eaf23b12c01eeb24742f507d37ffa0dfbb4d2"
 },
 {
  "id": "michael",
  "name": "Michael Tobler",
  "salt": "881384c3406f1fc8",
  "check": "bf247120b612177991338891b22d9c5f1d94601628a62f3163504e0929727818"
 }
];
SW.USERS_ITER = 5000;

/* ---- js/util.js ---- */
/* Hilfsfunktionen: Zeit (immer Europe/Zurich), Einheiten, Winkel, DOM. */
(function () {
  const C = SW.CONFIG;
  const TZ = C.timeZone;
  const U = SW.util = {};

  /* ---------- Zeit ---------- */
  const fmtCache = {};
  function fmt(key, opts) {                                          // Intl-Formatter nur einmal erzeugen (teuer)
    if (!fmtCache[key]) fmtCache[key] = new Intl.DateTimeFormat('de-CH', Object.assign({ timeZone: TZ }, opts));
    return fmtCache[key];
  }
  U.parts = function (sec) {                                         // Unixzeit → Zürcher Kalenderteile
    const p = {};
    fmt('parts', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', weekday: 'short' })
      .formatToParts(new Date(sec * 1000)).forEach(x => { p[x.type] = x.value; });
    return { y: +p.year, mo: +p.month, d: +p.day, h: +p.hour % 24, mi: +p.minute, wd: p.weekday,
             date: `${p.year}-${p.month}-${p.day}` };                // date = Tages-Schlüssel in Zürich
  };
  U.nowSec = () => Math.floor(Date.now() / 1000);
  U.hhmm = sec => fmt('hm', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date(sec * 1000));
  U.hh = sec => U.parts(sec).h.toString().padStart(2, '0');
  U.dayShort = sec => fmt('ds', { weekday: 'short' }).format(new Date(sec * 1000)).replace('.', '');
  U.dayLong = sec => fmt('dl', { weekday: 'long', day: '2-digit', month: '2-digit' }).format(new Date(sec * 1000));
  U.dateTime = sec => fmt('dt', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date(sec * 1000));
  U.todayKey = () => U.parts(U.nowSec()).date;
  U.dayLabel = function (sec) {                                      // «Heute», «Morgen» oder Wochentag mit Datum
    const k = U.parts(sec).date;
    const t = U.nowSec();
    if (k === U.parts(t).date) return 'Heute';
    if (k === U.parts(t + 86400).date) return 'Morgen';
    if (k === U.parts(t + 2 * 86400).date) return 'Übermorgen';
    return U.dayLong(sec);
  };
  U.ago = function (ms) {                                            // «vor 5 min»
    const m = Math.round((Date.now() - ms) / 60000);
    if (m < 1) return 'gerade eben';
    if (m < 60) return `vor ${m} min`;
    const h = Math.floor(m / 60);
    if (h < 48) return `vor ${h} h ${m % 60 ? (m % 60) + ' min' : ''}`.trim();
    return `vor ${Math.round(h / 24)} Tagen`;
  };

  // Index des Zeitschritts, der «jetzt» enthält (über echte Zeitstempel, nicht getHours()).
  U.indexAt = function (times, sec) {
    if (!times || !times.length) return -1;
    if (sec < times[0]) return 0;
    let lo = 0, hi = times.length - 1;
    while (lo < hi) {                                                // binäre Suche: letzter Zeitstempel ≤ sec
      const mid = (lo + hi + 1) >> 1;
      if (times[mid] <= sec) lo = mid; else hi = mid - 1;
    }
    return lo;
  };
  // Indizes nach Zürcher Kalendertag gruppieren (Zeitumstellung sicher).
  U.groupDays = function (times) {
    const days = []; let cur = null;
    for (let i = 0; i < times.length; i++) {
      const p = U.parts(times[i]);
      if (!cur || cur.date !== p.date) { cur = { date: p.date, start: times[i], idx: [] }; days.push(cur); }
      cur.idx.push(i);
    }
    return days;
  };
  U.hourOf = sec => U.parts(sec).h;

  /* ---------- Einheiten ---------- */
  U.KMH_TO_KT = 0.539957;
  U.isNum = v => typeof v === 'number' && isFinite(v);               // null, undefined, NaN → false
  U.r = (v, d = 0) => U.isNum(v) ? (d ? v.toFixed(d) : String(Math.round(v))) : '–';
  U.clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  U.lerp = (a, b, f) => a + (b - a) * f;
  U.ramp = (v, lo, hi) => U.clamp((v - lo) / (hi - lo), 0, 1);      // 0 unter lo, 1 über hi, linear dazwischen

  /* ---------- Winkel ---------- */
  const DIRS = ['N', 'NNO', 'NO', 'ONO', 'O', 'OSO', 'SO', 'SSO', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  U.dirName = d => U.isNum(d) ? DIRS[Math.round(((d % 360) + 360) % 360 / 22.5) % 16] : '–';
  U.angDiff = (a, b) => { let d = Math.abs(((a - b) % 360 + 360) % 360); return d > 180 ? 360 - d : d; };
  U.inSector = function (d, lo, hi) {                                // Sektor auch über 360° hinweg (330–45)
    if (!U.isNum(d)) return false;
    d = ((d % 360) + 360) % 360;
    return lo <= hi ? (d >= lo && d <= hi) : (d >= lo || d <= hi);
  };
  U.circLerp = function (a, b, f) {                                  // Kreisinterpolation: 350° → 10° geht über 0°
    if (!U.isNum(a)) return b; if (!U.isNum(b)) return a;
    let d = ((b - a + 540) % 360) - 180;
    return ((a + d * f) % 360 + 360) % 360;
  };
  U.circMean = function (dirs, weights) {                            // gewichteter Richtungsmittelwert
    let x = 0, y = 0;
    dirs.forEach((d, i) => { if (!U.isNum(d)) return; const w = weights ? weights[i] : 1; x += w * Math.cos(d * Math.PI / 180); y += w * Math.sin(d * Math.PI / 180); });
    if (!x && !y) return null;
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
  };
  U.distKm = function (a, b) {                                       // Haversine-Distanz
    const R = 6371, rad = Math.PI / 180;
    const dLa = (b.lat - a.lat) * rad, dLo = (b.lon - a.lon) * rad;
    const h = Math.sin(dLa / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLo / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  };
  U.bearing = function (a, b) {                                      // Kurs über Grund von a nach b in Grad
    const rad = Math.PI / 180;
    const y = Math.sin((b.lon - a.lon) * rad) * Math.cos(b.lat * rad);
    const x = Math.cos(a.lat * rad) * Math.sin(b.lat * rad) - Math.sin(a.lat * rad) * Math.cos(b.lat * rad) * Math.cos((b.lon - a.lon) * rad);
    return (Math.atan2(y, x) / rad + 360) % 360;
  };

  /* ---------- Farbe ---------- */
  U.windColor = function (kt) {                                      // Farbe nach Knoten-Skala aus der Konfiguration
    const s = C.windScale; let c = s[0];
    if (!U.isNum(kt)) return { c: 'var(--bg-3)', t: 'var(--fg-2)' };
    for (const x of s) if (kt >= x.lo) c = x;
    return c;
  };

  /* ---------- DOM ---------- */
  U.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  U.$ = (sel, root) => (root || document).querySelector(sel);
  U.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  U.el = function (html) {                                           // HTML-String → Element
    const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild;
  };
  U.debounce = function (fn, ms) { let t; return function () { clearTimeout(t); const a = arguments; t = setTimeout(() => fn.apply(this, a), ms); }; };
  U.uid = () => Math.random().toString(36).slice(2, 9);
  U.median = function (arr) { const a = arr.filter(U.isNum).sort((x, y) => x - y); if (!a.length) return null; const m = a.length >> 1; return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2; };
  U.max = arr => { let m = null; arr.forEach(v => { if (U.isNum(v) && (m === null || v > m)) m = v; }); return m; };
  U.min = arr => { let m = null; arr.forEach(v => { if (U.isNum(v) && (m === null || v < m)) m = v; }); return m; };
  U.mean = arr => { const a = arr.filter(U.isNum); return a.length ? a.reduce((s, v) => s + v, 0) / a.length : null; };
  U.sum = arr => arr.filter(U.isNum).reduce((s, v) => s + v, 0);

  U.downloadText = function (name, text, mime) {                     // Datei im Browser speichern (CSV-Export)
    const blob = new Blob(['﻿' + text], { type: mime || 'text/csv;charset=utf-8' }); // BOM, damit Excel Umlaute erkennt
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  };
})();

/* ---- js/store.js ---- */
/* Einstellungen (localStorage) und Daten-Cache (IndexedDB, Fallback localStorage). */
(function () {
  const C = SW.CONFIG;
  const LEGACY = 'sw24.settings.v2', USER_KEY = 'sw24.user';
  const lsTry = fn => { try { return fn(); } catch (e) { return null; } };
  SW.userId = lsTry(() => localStorage.getItem(USER_KEY)) || '';     // angemeldete Person auf diesem Gerät ('' = noch nicht gewählt)
  const KEY = `${LEGACY}.u.${SW.userId || 'gast'}`;                  // eigener Speicherbereich je Person
  SW.setUser = id => lsTry(() => (id ? localStorage.setItem(USER_KEY, id) : localStorage.removeItem(USER_KEY)));
  // Einstellungen aus der Zeit vor den Profilen gehören der ersten Person, die sich auf diesem Gerät anmeldet
  SW.claimLegacy = id => lsTry(() => {
    const old = localStorage.getItem(LEGACY), target = `${LEGACY}.u.${id}`;
    if (old && !localStorage.getItem(target)) localStorage.setItem(target, old);
    if (old) localStorage.removeItem(LEGACY);
  });
  const PAGE_IDS = ['heute', 'segeln', 'spot', 'welle', 'routen', 'wetter'];
  const SUB_PAGES = ['band', 'gbwetter', 'archiv', 'lagen', 'karte'];        // Unterreiter der Sammelseiten  // Seiten, die ein Modus zeigen kann

  /* ---------- Einstellungen ---------- */
  const defaults = () => ({
    model: C.defaultModel,                                           // gewähltes Wettermodell
    spotId: C.defaultSpot,                                           // aktueller Spot
    spots: C.spots.map(s => Object.assign({ fav: true }, s)),        // Favoriten-Liste (Reihenfolge = Anzeige)
    sport: C.defaultSport,                                           // Sportart für Ampel/Fenster
    sports: JSON.parse(JSON.stringify(C.sports)),                    // eigene Schwellen (Kopie der Vorgaben)
    theme: 'dark',                                                   // dark | night | sun
    page: 'heute',
    mode: C.defaultMode,                                             // aktiver Modus (Segeln, Windsurf, Flusswelle, Alles)
    modes: JSON.parse(JSON.stringify(C.modes)),                      // eigene Anpassung je Modus (Seiten, Karten)
    compact: false,                                                  // Kompaktansicht: ohne Erklärtexte
    spotTab: 'prognose',                                             // Unterreiter der Spot-Seite
    routes: [defaultRoute(), JSON.parse(JSON.stringify(C.route.regattaPreset))],                                        // gespeicherte Strecken
    routeId: 'gelbesband',
    cardsVer: 4, pagesVer: 6, spotsVer: 2, routesVer: 6, inst: null, nav: null,                                                     // Version der Karten-Liste (für Übernahme neuer Karten)
    bandTab: 'lage', bandLines: null,
    archive: []                                                      // Routenarchiv: gespeicherte Strecken, Regatten und generierte Routen
  });
  function defaultRoute() {
    const L = JSON.parse(JSON.stringify(C.route.gbLines)), mid = l => ({ lat: +((l.a.lat + l.b.lat) / 2).toFixed(5), lon: +((l.a.lon + l.b.lon) / 2).toFixed(5) });
    const pts = C.route.waypoints.map(p => Object.assign({}, p));
    pts[0] = Object.assign({ name: 'Start Luzern (Linie)' }, mid(L.start));                       // Start = Mitte der Startlinie
    pts[pts.length - 1] = Object.assign({ name: 'Ziel Brunnen (Linie)' }, mid(L.finish));         // Ziel = Mitte der Ziellinie
    return { id: 'gelbesband', name: 'Gelbes Band Luzern – Brunnen', lines: L, points: pts, corridorKm: C.route.opt.corridorKm, speedFactor: 100 };
  }
  SW.defaultRoute = defaultRoute;

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!raw) return defaults();
      const d = defaults();
      const s = Object.assign(d, raw);
      s.sports = Object.assign(defaults().sports, raw.sports || {});  // neue Sportarten aus späteren Versionen ergänzen
      if (!C.models.some(m => m.id === s.model)) s.model = C.defaultModel; // veraltete Modellkennung ersetzen
      if (!Array.isArray(s.spots) || !s.spots.length) s.spots = d.spots;
      Object.keys(C.modes).forEach(k => { if (!s.modes[k]) s.modes[k] = JSON.parse(JSON.stringify(C.modes[k])); }); // neue Modi ergänzen
      if (!s.modes[s.mode]) s.mode = C.defaultMode;
      if ((raw.cardsVer || 1) < 3) {                                       // neue Karten (Live, Wetter) in gespeicherte Modi übernehmen
        Object.keys(s.modes).forEach(k => { const t = C.modes[k]; if (!t) return;
          t.cards.forEach((c, i) => { if (!s.modes[k].cards.includes(c) && ['live', 'wetter'].includes(c)) s.modes[k].cards.splice(Math.min(i, s.modes[k].cards.length), 0, c); }); });
        s.cardsVer = 3;
      }
      if ((raw.cardsVer || 1) < 4) {                                       // Cockpit ersetzt Live, Windcheck und Wind jetzt
        Object.keys(s.modes).forEach(k => {
          const t = C.modes[k], c = s.modes[k].cards;
          if (!t || !t.cards.includes('cockpit') || c.includes('cockpit')) return;
          const at = c.findIndex(x => ['live', 'ampel', 'now'].includes(x));
          const rest = c.filter(x => !['live', 'ampel', 'now'].includes(x));
          rest.splice(at < 0 ? 0 : Math.min(at, rest.length), 0, 'cockpit');
          s.modes[k].cards = rest;
        });
        s.cardsVer = 4;
      }
      if ((raw.routesVer || 1) < 2) {                                      // alte Standardstrecke (schnitt Land) durch neue ersetzen, eigene Änderungen bleiben
        const old = s.routes.find(r => r.id === 'gelbesband');
        if (old && old.points.map(p => p.name).join('|') === 'Luzern|Kreuztrichter|Nasen|Gersau|Brunnen') old.points = defaultRoute().points;
        s.routesVer = 2;
      }
      if ((raw.routesVer || 1) < 3) {                                      // Zugersee-Regatta als Vorlage ergänzen
        if (!s.routes.some(r => r.id === C.route.regattaPreset.id)) s.routes.push(JSON.parse(JSON.stringify(C.route.regattaPreset)));
        s.routesVer = 3;
      }
      if ((raw.routesVer || 1) < 4) {                                      // Vorlage: kürzere Startlinie (230 m), wenn unverändert
        const z = s.routes.find(r => r.id === C.route.regattaPreset.id);
        if (z && z.regatta && z.regatta.start.a.lon === 8.476 && z.regatta.start.b.lon === 8.482) { z.regatta = JSON.parse(JSON.stringify(C.route.regattaPreset.regatta)); delete z.points; }
        s.routesVer = 4;
      }
      if ((raw.routesVer || 1) < 5) {                                      // Gelbes Band: offizielle Start- und Ziellinie
        const gb = s.routes.find(r => r.id === 'gelbesband');
        if (gb && !gb.lines) { const d = defaultRoute(); gb.lines = d.lines; gb.points[0] = d.points[0]; gb.points[gb.points.length - 1] = d.points[d.points.length - 1]; }
        s.routesVer = 5;
      }
      if ((raw.routesVer || 1) < 6) {                                      // Vorlagen sind jetzt fest: frühere Änderungen als eigene Strecke behalten
        const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        const gb = s.routes.find(r => r.id === 'gelbesband'), d = defaultRoute();
        if (gb && !(same(gb.points, d.points) && same(gb.lines, d.lines) && gb.name === d.name)) {
          s.routes.push(Object.assign(JSON.parse(JSON.stringify(gb)), { id: 'r' + Math.random().toString(36).slice(2, 9), name: gb.name + ' (eigene Änderungen)', base: 'gelbesband' }));
          Object.assign(gb, { points: d.points, lines: d.lines, name: d.name });
        }
        const zp = C.route.regattaPreset, z = s.routes.find(r => r.id === zp.id);
        if (z && !(same(z.regatta, zp.regatta) && z.name === zp.name)) {
          s.routes.push(Object.assign(JSON.parse(JSON.stringify(z)), { id: 'g' + Math.random().toString(36).slice(2, 9), name: z.name + ' (eigene Änderungen)', base: zp.id }));
          Object.assign(z, { regatta: JSON.parse(JSON.stringify(zp.regatta)), name: zp.name }); delete z.points;
        }
        s.routesVer = 6;
      }
      if (!s.routes.some(r => r.id === 'gelbesband')) s.routes.unshift(defaultRoute());    // Gelbes Band ist immer da
      if ((raw.spotsVer || 1) < 2) {                                       // nur noch Küssnacht vorinstalliert: alte Standard-Favoriten entfernen
        const old = ['urnersee', 'silvaplana', 'romanshorn', 'domaso', 'eich', 'bremgarten'];
        s.spots = s.spots.filter(x => !old.includes(x.id));
        if (!s.spots.length) s.spots = defaults().spots;
        if (!s.spots.some(x => x.id === s.spotId) && s.spotId !== 'search') s.spotId = s.spots[0].id;
        s.spotsVer = 2;
      }
      if ((raw.pagesVer || 1) < 3) {                                       // Wetter Gelbes Band als eigene Seite nach dem Routenplaner
        Object.keys(s.modes).forEach(k => { const pg = s.modes[k].pages, t = C.modes[k]; if (t && t.pages.includes('gbwetter') && !pg.includes('gbwetter')) { const i = pg.indexOf('band'); pg.splice(i < 0 ? pg.length : i + 1, 0, 'gbwetter'); } });
      }
      if ((raw.pagesVer || 1) < 2) {                                       // neue Seite Segelscreen in gespeicherte Modi übernehmen
        Object.keys(s.modes).forEach(k => { const t = C.modes[k]; if (t && t.pages.includes('segeln') && !s.modes[k].pages.includes('segeln')) s.modes[k].pages.splice(1, 0, 'segeln'); });
        s.pagesVer = 2;
      }
      if ((raw.pagesVer || 1) < 4 && s.modes.welle) {                     // Flusswelle: nur noch ein Bildschirm
        const pg = s.modes.welle.pages;
        if (pg.join() === 'heute,welle,karte' || pg.join() === 'heute,welle') s.modes.welle.pages = ['welle'];
      }
      if ((raw.pagesVer || 1) < 5) {                                       // neue Seite Routenarchiv nach Routenplaner / Wetter Gelbes Band
        Object.keys(s.modes).forEach(k => { const pg = s.modes[k].pages, t = C.modes[k]; if (t && t.pages.includes('archiv') && !pg.includes('archiv')) { const i = Math.max(pg.indexOf('gbwetter'), pg.indexOf('band')); pg.splice(i < 0 ? pg.length : i + 1, 0, 'archiv'); } });
      }
      if ((raw.pagesVer || 1) < 6) {                                       // Navigation verkürzt: Sammelseiten Routen und Wetter
        const grp = { band: 'routen', gbwetter: 'routen', archiv: 'routen', lagen: 'wetter', karte: 'wetter' };
        Object.keys(s.modes).forEach(k => {
          const out = [];
          s.modes[k].pages.forEach(p => { const q = grp[p] || p; if (!out.includes(q)) out.push(q); });
          s.modes[k].pages = out;
        });
        if (grp[s.page]) { s[grp[s.page] === 'routen' ? 'routenTab' : 'wetterTab'] = s.page; s.page = grp[s.page]; }
      }
      s.pagesVer = 6;
      if (!Array.isArray(s.archive)) s.archive = [];
      Object.keys(s.modes).forEach(k => { s.modes[k].pages = s.modes[k].pages.filter(p => PAGE_IDS.includes(p)); }); // entfernte Seiten (z. B. Bodensee) streichen
      if (!Array.isArray(s.routes) || !s.routes.length) s.routes = [defaultRoute()];
      if (!['heute', 'setup'].concat(PAGE_IDS, SUB_PAGES).includes(s.page)) s.page = 'heute';
      return s;
    } catch (e) { return defaults(); }
  }

  const listeners = [];
  SW.settings = load();
  SW.saveSettings = function (patch) {
    Object.assign(SW.settings, patch || {});
    try { localStorage.setItem(KEY, JSON.stringify(SW.settings)); } catch (e) { /* Speicher voll oder privat: Einstellungen nur für diese Sitzung */ }
    listeners.forEach(fn => fn(patch || {}));
  };
  SW.onSettings = fn => listeners.push(fn);
  SW.resetSettings = function () { try { localStorage.removeItem(KEY); } catch (e) {} SW.settings = defaults(); SW.saveSettings({}); };

  SW.currentSpot = function () {
    const s = SW.settings;
    return s.spots.find(x => x.id === s.spotId) || s.currentSearch && s.currentSearch.id === s.spotId && s.currentSearch || s.spots[0];
  };
  SW.mode = () => SW.settings.modes[SW.settings.mode] || SW.settings.modes[C.defaultMode];   // aktiver Modus inkl. eigener Anpassung
  SW.route = () => SW.settings.routes.find(r => r.id === SW.settings.routeId) || SW.settings.routes[0];
  SW.spotById = id => SW.settings.spots.find(x => x.id === id) || C.spots.find(x => x.id === id) || (C.places && C.places[id]);

  /* ---------- Daten-Cache ---------- */
  const DB = 'sw24-cache', STORE = 'data';
  let dbp = null;
  function openDb() {
    if (dbp) return dbp;
    dbp = new Promise((resolve) => {
      try {
        const req = indexedDB.open(DB, 1);
        req.onupgradeneeded = () => req.result.createObjectStore(STORE);   // einfacher Key-Value-Speicher
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);                                 // z. B. privater Modus → localStorage
        req.onblocked = () => resolve(null);
      } catch (e) { resolve(null); }
    });
    return dbp;
  }
  function lsGet(k) { try { return JSON.parse(localStorage.getItem('sw24.c.' + k) || 'null'); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem('sw24.c.' + k, JSON.stringify(v)); } catch (e) {} }

  SW.cache = {
    async get(key) {
      const db = await openDb();
      if (!db) return lsGet(key);
      return new Promise(res => {
        try {
          const r = db.transaction(STORE).objectStore(STORE).get(key);
          r.onsuccess = () => res(r.result || null); r.onerror = () => res(null);
        } catch (e) { res(null); }
      });
    },
    async set(key, value) {
      const db = await openDb();
      if (!db) return lsSet(key, value);
      return new Promise(res => {
        try {
          const tx = db.transaction(STORE, 'readwrite');
          tx.objectStore(STORE).put(value, key);
          tx.oncomplete = () => res(true); tx.onerror = () => res(false);
        } catch (e) { res(false); }
      });
    },
    async prune(maxAgeMs) {                                         // alte Einträge löschen
      const db = await openDb(); if (!db) return;
      try {
        const tx = db.transaction(STORE, 'readwrite'); const st = tx.objectStore(STORE);
        const req = st.openCursor();
        req.onsuccess = () => { const c = req.result; if (!c) return; if (!c.value || Date.now() - c.value.fetchedAt > maxAgeMs) c.delete(); c.continue(); };
      } catch (e) {}
    },
    async clear() {
      const db = await openDb();
      if (db) { try { db.transaction(STORE, 'readwrite').objectStore(STORE).clear(); } catch (e) {} }
      try { Object.keys(localStorage).filter(k => k.startsWith('sw24.c.')).forEach(k => localStorage.removeItem(k)); } catch (e) {}
    }
  };
})();

/* ---- js/api.js ---- */
/* Zentraler Daten-Layer: Requests bündeln, cachen, Modell-Fallback zusammenführen. */
(function () {
  const C = SW.CONFIG, U = SW.util;
  const inflight = new Map();                                        // gleiche URL nur einmal gleichzeitig laden
  const A = SW.api = {};
  A.collector = [];                                                  // Metadaten aller Requests des letzten Seitenaufbaus
  A.preferCache = false;                                             // true: jeden Cache-Treffer sofort nutzen (erster Aufbau)
  A.simulateError = false;                                           // zum Testen: alle Requests schlagen fehl

  A.VAR_LABEL = {
    wind_speed_10m: 'Wind 10 m', wind_gusts_10m: 'Böen', wind_direction_10m: 'Windrichtung',
    temperature_2m: 'Temperatur', relative_humidity_2m: 'Luftfeuchte', cloud_cover: 'Bewölkung',
    precipitation: 'Niederschlag', weather_code: 'Wettercode', pressure_msl: 'Druck MSL',
    shortwave_radiation: 'Einstrahlung', wind_speed_850hPa: 'Wind 850 hPa', wind_direction_850hPa: 'Richtung 850 hPa',
    temperature_850hPa: 'Temperatur 850 hPa', wind_speed_250hPa: 'Jetstream 250 hPa', wind_direction_250hPa: 'Richtung 250 hPa',
    sunshine_duration: 'Sonnenscheindauer', temperature_2m_max: 'Tmax', precipitation_sum: 'Niederschlag Tag',
    sunrise: 'Sonnenaufgang', sunset: 'Sonnenuntergang'
  };

  A.modelInfo = id => C.models.find(m => m.id === id) || { id, label: id, info: '' };
  A.fallbackFor = id => id === C.fallbackModel ? C.fallbackModelAlt : C.fallbackModel;

  class ApiError extends Error {
    constructor(msg, kind) { super(msg); this.kind = kind || 'net'; }
  }
  A.ApiError = ApiError;

  /* ---------- Grundfunktion: JSON laden mit Cache ---------- */
  A.fetchJson = async function (url, opts) {
    opts = opts || {};
    const ttl = (opts.ttlMin || C.cache.ttlMinutes) * 60000;
    const key = opts.key || url;
    const cached = await SW.cache.get(key);
    const fresh = cached && (Date.now() - cached.fetchedAt < ttl);
    const offline = navigator.onLine === false;
    if (cached && !A.simulateError && !A.force && !opts.force && (fresh || A.preferCache || offline)) {   // force = Knopf «Aktualisieren»               // Cache genügt: kein Netz nötig
      const meta = { url, fetchedAt: cached.fetchedAt, cached: true, stale: !fresh, offline };
      A.collector.push(meta);
      return { data: cached.data, meta };
    }
    if (inflight.has(key)) return inflight.get(key);                   // läuft schon: denselben Promise teilen
    const p = (async () => {
      try {
        if (A.simulateError) throw new ApiError('Simulierter API-Fehler', 'sim');
        const ctl = new AbortController();
        const timer = setTimeout(() => ctl.abort(), C.api.timeoutMs);  // Zeitlimit, damit nichts ewig «lädt»
        let res;
        try { res = await fetch(url, { signal: ctl.signal }); }
        finally { clearTimeout(timer); }
        let body = null;
        try { body = await res.json(); } catch (e) { /* kein JSON */ }
        if (res.status === 429) {                                       // Abfrage-Limit: Dienst nennen und sagen, wann es wieder geht
          const host = new URL(url).hostname, who = /open-meteo/.test(host) ? 'Open-Meteo (Wetterdaten)' : /existenz/.test(host) ? 'existenz.ch (BAFU-Messwerte)' : host;
          const why = String(body && body.reason || '');
          const when = /daily/i.test(why) ? `Tageslimit dieser Internetverbindung erreicht – ab ${(() => { const n = new Date(); return new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1)).toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Zurich' }); })()} Uhr wieder` : /hourly/i.test(why) ? 'Stundenlimit erreicht – in der nächsten Stunde wieder' : /minutely/i.test(why) ? 'zu viele Abfragen pro Minute – in einer Minute wieder' : 'Abfrage-Limit erreicht – später erneut versuchen';
          throw new ApiError(`${who}: ${when}. Gespeicherte Daten werden weiter angezeigt.`, 'limit');
        }
        if (!res.ok || (body && body.error)) throw new ApiError((body && body.reason) || `HTTP ${res.status}`, 'api');
        const data = opts.transform ? opts.transform(body) : body;    // z. B. Messreihen auf Stundenwerte verdichten
        const entry = { fetchedAt: Date.now(), data };
        SW.cache.set(key, entry);
        const meta = { url, fetchedAt: entry.fetchedAt, cached: false, stale: false };
        A.collector.push(meta);
        return { data, meta };
      } catch (err) {
        const e = err.name === 'AbortError' ? new ApiError('Zeitüberschreitung', 'timeout') : (err instanceof ApiError ? err : new ApiError(offline ? 'Keine Verbindung' : 'Netzwerkfehler', 'net'));
        if (cached) {                                                  // Netz weg, aber alte Daten da → zeigen mit Hinweis
          const meta = { url, fetchedAt: cached.fetchedAt, cached: true, stale: true, error: e.message };
          A.collector.push(meta);
          return { data: cached.data, meta };
        }
        throw e;
      } finally { inflight.delete(key); }
    })();
    inflight.set(key, p);
    return p;
  };

  /* ---------- Open-Meteo Forecast mit Fallback-Modell ---------- */
  // opts: points [{lat,lon}], hourly [], daily [], minutely [], days, pastDays, model, noFallback, m15Hours
  A.forecast = async function (opts) {
    const model = opts.model || SW.settings.model;
    const fb = opts.noFallback ? null : A.fallbackFor(model);
    const models = fb ? [model, fb] : [model];
    const pts = opts.points;
    const q = new URLSearchParams();
    q.set('latitude', pts.map(p => (+p.lat).toFixed(3)).join(','));     // mehrere Orte in einem Request
    q.set('longitude', pts.map(p => (+p.lon).toFixed(3)).join(','));
    if (opts.hourly && opts.hourly.length) q.set('hourly', opts.hourly.join(','));
    if (opts.daily && opts.daily.length) q.set('daily', opts.daily.join(','));
    if (opts.minutely && opts.minutely.length) { q.set('minutely_15', opts.minutely.join(',')); q.set('forecast_minutely_15', String((opts.m15Hours || 48) * 4)); }
    q.set('models', models.join(','));
    q.set('forecast_days', String(opts.days || 3));
    if (opts.pastDays) q.set('past_days', String(opts.pastDays));
    q.set('wind_speed_unit', 'kn');                                      // Knoten direkt von der API
    q.set('timezone', C.timeZone);                                       // Tagesgrenzen in Zürcher Zeit
    q.set('timeformat', 'unixtime');                                     // echte Zeitstempel statt lokaler Strings
    const url = `${C.api.forecast}?${q.toString()}`;
    const { data, meta } = await A.fetchJson(url, { force: opts.force });             // force: frische Winddaten (Routen-Neuberechnung)
    const arr = Array.isArray(data) ? data : [data];
    const sets = arr.map(d => ({
      lat: d.latitude, lon: d.longitude, elevation: d.elevation,
      hourly: mergeBlock(d.hourly, opts.hourly || [], models),
      daily: d.daily ? mergeBlock(d.daily, opts.daily || [], models) : null,
      m15: d.minutely_15 ? mergeBlock(d.minutely_15, opts.minutely || [], models) : null
    }));
    meta.model = model; meta.fallback = fb;
    meta.src = sets[0].hourly.src;                                       // Herkunft je Grösse (erster Ort)
    meta.primaryUntil = sets[0].hourly.src.wind_speed_10m ? sets[0].hourly.src.wind_speed_10m.until : null;
    return { sets, meta };
  };

  // Werte des gewählten Modells nehmen, Lücken aus dem Fallback füllen, Herkunft merken.
  function mergeBlock(block, vars, models) {
    const t = block.time || [];
    const out = { t, v: {}, src: {}, p: {}, f: {} };                    // p/f = Rohreihen je Modell (für Druckdifferenzen)
    vars.forEach(v => {
      const prim = pick(block, v, models[0], models.length);
      const fb = models[1] ? pick(block, v, models[1], 2) : null;
      const res = new Array(t.length);
      let pc = 0, fc = 0, last = -1;
      for (let i = 0; i < t.length; i++) {
        const a = prim ? prim[i] : null;
        if (a !== null && a !== undefined) { res[i] = a; pc++; last = i; }
        else if (fb && fb[i] !== null && fb[i] !== undefined) { res[i] = fb[i]; fc++; }
        else res[i] = null;                                              // fehlt wirklich: null, nie 0
      }
      out.v[v] = res; out.p[v] = prim; out.f[v] = fb;
      out.src[v] = { prim: pc > 0, fb: fc > 0, missing: pc + fc === 0, until: last >= 0 ? t[last] : null };
    });
    return out;
  }
  function pick(block, v, model, n) {                                    // Schlüssel mit/ohne Modell-Suffix
    if (n > 1 && block[`${v}_${model}`]) return block[`${v}_${model}`];
    if (block[v]) return block[v];
    return null;
  }

  /* ---------- Alle Modelle nebeneinander (Modellvergleich) ---------- */
  A.allModels = async function (point, vars, days) {
    const q = new URLSearchParams();
    q.set('latitude', (+point.lat).toFixed(3)); q.set('longitude', (+point.lon).toFixed(3));
    q.set('hourly', vars.join(',')); q.set('models', C.models.map(m => m.id).join(','));
    q.set('forecast_days', String(days || 3)); q.set('wind_speed_unit', 'kn');
    q.set('timezone', C.timeZone); q.set('timeformat', 'unixtime');
    const { data, meta } = await A.fetchJson(`${C.api.forecast}?${q.toString()}`);
    const h = data.hourly; const res = { t: h.time, models: {} };
    C.models.forEach(m => {
      res.models[m.id] = {};
      vars.forEach(v => { const a = h[`${v}_${m.id}`]; res.models[m.id][v] = a ? a.map(x => (x === undefined ? null : x)) : null; });
    });
    return { data: res, meta };
  };

  /* ---------- Ortssuche ---------- */
  A.geocode = async function (name) {
    const q = new URLSearchParams({ name, count: '8', language: 'de', format: 'json' });
    const { data } = await A.fetchJson(`${C.api.geocoding}?${q}`, { ttlMin: 24 * 60 });
    return (data.results || []).map(r => ({
      id: 'g' + r.id, name: r.name.replace(/ß/g, 'ss'), lat: r.latitude, lon: r.longitude,
      region: [r.admin1, r.country_code].filter(Boolean).join(', '), elevation: r.elevation
    }));
  };

  /* ---------- BAFU Hydrologie (existenz.ch) ---------- */
  A.hydroLatest = async function (ids) {
    const q = new URLSearchParams({ locations: ids.join(','), parameters: 'flow,height,temperature', app: C.api.hydroAppId });
    const { data, meta } = await A.fetchJson(`${C.api.hydroLatest}?${q}`, { ttlMin: C.cache.hydroTtlMinutes });
    const res = {};
    (data.payload || []).forEach(p => { res[p.loc] = res[p.loc] || {}; res[p.loc][p.par] = { val: p.val, t: p.timestamp }; });
    return { data: res, meta };
  };
  A.hydroRange = async function (ids, days) {
    const q = new URLSearchParams({ locations: ids.join(','), parameters: 'flow,height', startdate: `-${days} days`, app: C.api.hydroAppId });
    const url = `${C.api.hydroRange}?${q}`;
    return A.fetchJson(url, {
      ttlMin: C.cache.hydroTtlMinutes,
      key: url + '#hourly',
      transform(body) {                                                  // 10-Minuten-Werte → Stundenmittel (spart Speicher)
        const acc = {};
        (body.payload || []).forEach(p => {
          const hr = Math.floor(p.timestamp / 3600) * 3600;
          const k = `${p.loc}|${p.par}`; acc[k] = acc[k] || {};
          const b = acc[k][hr] = acc[k][hr] || [0, 0]; b[0] += p.val; b[1]++;
        });
        const out = {};
        Object.keys(acc).forEach(k => {
          const [loc, par] = k.split('|'); out[loc] = out[loc] || {};
          const hrs = Object.keys(acc[k]).map(Number).sort((a, b) => a - b);
          out[loc][par] = { t: hrs, v: hrs.map(h => acc[k][h][0] / acc[k][h][1]) };
        });
        return out;
      }
    });
  };

  /* ---------- GloFAS Abfluss-Prognose ---------- */
  A.flood = async function (pt) {
    const q = new URLSearchParams({ latitude: pt.lat, longitude: pt.lon, daily: 'river_discharge,river_discharge_max,river_discharge_min', past_days: '7', forecast_days: '7', timeformat: 'unixtime' });
    const { data, meta } = await A.fetchJson(`${C.api.flood}?${q}`, { ttlMin: 180 });
    return { data: { t: data.daily.time, q: data.daily.river_discharge, qmax: data.daily.river_discharge_max, qmin: data.daily.river_discharge_min }, meta };
  };
})();

/* ---- js/chart.js ---- */
/* Schlanke SVG-Charts im Bordcomputer-Stil: dünne Linien, Schwellen gestrichelt, Fadenkreuz per Touch. */
(function () {
  const U = SW.util;
  const NS = 'http://www.w3.org/2000/svg';

  function niceRange(min, max, ticks) {                              // runde Achsenwerte (0, 5, 10 …)
    if (min === max) { min -= 1; max += 1; }
    const span = max - min, raw = span / ticks;
    const mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const step = [1, 2, 2.5, 5, 10].map(f => f * mag).find(s => s >= raw) || raw;
    return { min: Math.floor(min / step) * step, max: Math.ceil(max / step) * step, step };
  }

  SW.chart = function (host, cfg) {
    host.classList.add('chart');
    host.setAttribute('data-noswipe', '');                           // Wischen zwischen Seiten hier aus
    let width = 0;
    const draw = () => {
      const w = Math.round(host.clientWidth);
      if (!w || w === width) return;
      width = w; render(host, cfg, w);
    };
    if (window.ResizeObserver) { const ro = new ResizeObserver(draw); ro.observe(host); host._ro = ro; }
    requestAnimationFrame(draw);
    draw();
  };

  function render(host, cfg, W) {
    const H = cfg.height || 220;
    const t = cfg.t, n = t.length;
    const hasR = cfg.series.some(s => s.axis === 'r');
    const padL = 40, padR = hasR ? 40 : 12, padT = 20, padB = (cfg.arrows ? 44 : 24);
    const iw = W - padL - padR, ih = H - padT - padB;
    const x = i => padL + (n <= 1 ? 0 : (t[i] - t[0]) / (t[n - 1] - t[0]) * iw);

    // Achsenbereiche aus Daten, Schwellen und Vorgaben
    const scale = {};
    ['l', 'r'].forEach(ax => {
      const ss = cfg.series.filter(s => (s.axis || 'l') === ax);
      if (!ss.length) return;
      let vals = [];
      ss.forEach(s => { vals = vals.concat(s.values); if (s.band) vals = vals.concat(s.band.lo, s.band.hi); });
      (cfg.thresholds || []).filter(th => (th.axis || 'l') === ax).forEach(th => vals.push(th.y));
      const a = (cfg.axes && cfg.axes[ax]) || {};
      let mn = U.min(vals), mx = U.max(vals);
      if (mn === null) { mn = 0; mx = 1; }
      if (a.min !== undefined) mn = Math.min(mn, a.min);
      if (a.max !== undefined) mx = Math.max(mx, a.max);
      if (a.hardMin !== undefined) mn = a.hardMin;
      const nr = niceRange(mn, mx, 4);
      scale[ax] = { min: nr.min, max: nr.max, step: nr.step, unit: a.unit || '', y: v => padT + ih - (v - nr.min) / (nr.max - nr.min) * ih };
    });

    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`); svg.setAttribute('width', W); svg.setAttribute('height', H);
    svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', cfg.title || 'Diagramm');
    let s = '';

    // Zonen (z. B. zu tief / ideal / Hochwasser)
    (cfg.zones || []).forEach(z => {
      const sc = scale[z.axis || 'l']; if (!sc) return;
      const y1 = sc.y(U.clamp(z.to, sc.min, sc.max)), y2 = sc.y(U.clamp(z.from, sc.min, sc.max));
      if (y2 - y1 > 0) s += `<rect x="${padL}" y="${y1}" width="${iw}" height="${y2 - y1}" fill="${z.color}" opacity="${z.opacity || 0.14}"/>`;
    });

    // Raster und Achsenbeschriftung
    const sl = scale.l || scale.r;
    for (let v = sl.min; v <= sl.max + 1e-9; v += sl.step) {
      const y = sl.y(v);
      s += `<line x1="${padL}" x2="${padL + iw}" y1="${y}" y2="${y}" class="c-grid"/>`;
      s += `<text x="${padL - 6}" y="${y + 4}" class="c-tick" text-anchor="end">${fmtTick(v, sl.step)}</text>`;
    }
    if (scale.r && scale.l) {
      const sr = scale.r;
      for (let v = sr.min; v <= sr.max + 1e-9; v += sr.step) s += `<text x="${padL + iw + 6}" y="${sr.y(v) + 4}" class="c-tick">${fmtTick(v, sr.step)}</text>`;
    }
    if (sl.unit) s += `<text x="${padL - 6}" y="${padT - 7}" class="c-unit" text-anchor="end">${U.esc(sl.unit)}</text>`;
    if (scale.r && scale.l && scale.r.unit) s += `<text x="${padL + iw + 6}" y="${padT - 7}" class="c-unit">${U.esc(scale.r.unit)}</text>`;

    // Tagestrenner um Mitternacht (Zürich) und Stundenmarken
    const span = t[n - 1] - t[0];
    const labelEvery = span > 4 * 86400 ? 12 : span > 2 * 86400 ? 6 : 3;
    let lastDay = null;
    for (let i = 0; i < n; i++) {
      const p = U.parts(t[i]);
      if (p.date !== lastDay) {
        if (lastDay !== null) s += `<line x1="${x(i)}" x2="${x(i)}" y1="${padT}" y2="${padT + ih}" class="c-day"/>`; // neuer Tag
        s += `<text x="${x(i) + 4}" y="${padT + 11}" class="c-dayl">${U.esc(U.dayShort(t[i]))}</text>`;
        lastDay = p.date;
      }
      if (p.mi === 0 && p.h % labelEvery === 0 && p.h !== 0) {
        s += `<text x="${x(i)}" y="${padT + ih + 14}" class="c-tick" text-anchor="middle">${p.h}</text>`;
      }
    }

    // Unsicherheitsbänder und Linien
    cfg.series.forEach(se => {
      const sc = scale[se.axis || 'l'];
      if (se.band) s += `<path d="${bandPath(se.band.lo, se.band.hi, x, sc.y)}" fill="${se.color}" opacity="${se.bandOpacity || 0.18}"/>`;
    });
    cfg.series.forEach(se => {
      const sc = scale[se.axis || 'l'];
      if (se.area) s += `<path d="${areaPath(se.values, x, sc.y, sc.y(Math.max(sc.min, 0)))}" fill="${se.color}" opacity="0.12"/>`;
      s += `<path d="${linePath(se.values, x, sc.y)}" fill="none" stroke="${se.color}" stroke-width="${se.width || 2}" ${se.dash ? `stroke-dasharray="${se.dash}"` : ''} stroke-linejoin="round" stroke-linecap="round"/>`;
    });

    // Schwellen gestrichelt mit kurzem Label
    (cfg.thresholds || []).forEach(th => {
      const sc = scale[th.axis || 'l']; if (!sc || th.y < sc.min || th.y > sc.max) return;
      const y = sc.y(th.y);
      s += `<line x1="${padL}" x2="${padL + iw}" y1="${y}" y2="${y}" stroke="${th.color || 'var(--fg-2)'}" stroke-width="1.2" stroke-dasharray="5 4"/>`;
      if (th.label) s += `<text x="${th.right ? padL + iw - 4 : padL + 4}" y="${y - 4}" class="c-th" ${th.right ? 'text-anchor="end"' : ''} fill="${th.color || 'var(--fg-2)'}">${U.esc(th.label)}</text>`;
    });

    // Jetzt-Linie
    const now = U.nowSec();
    if (cfg.nowLine !== false && now >= t[0] && now <= t[n - 1]) {
      const xn = padL + (now - t[0]) / span * iw;
      s += `<line x1="${xn}" x2="${xn}" y1="${padT}" y2="${padT + ih}" class="c-now"/>`;
    }

    // Richtungspfeile unten (Pfeil zeigt, wohin der Wind weht)
    if (cfg.arrows) {
      const every = Math.max(1, Math.ceil(n / Math.max(6, Math.floor(iw / 26))));
      for (let i = 0; i < n; i += every) {
        const d = cfg.arrows.values[i]; if (!U.isNum(d)) continue;
        const col = cfg.arrows.speed ? U.windColor(cfg.arrows.speed[i]).c : 'var(--fg-1)';
        s += `<g transform="translate(${x(i)},${padT + ih + 31}) rotate(${d + 180})"><path d="M0,-8 L5,5 L0,2 L-5,5 Z" fill="${col}"/></g>`;
      }
    }

    // Fadenkreuz-Ebene
    s += `<line class="c-cross" x1="0" x2="0" y1="${padT}" y2="${padT + ih}" visibility="hidden"/>`;
    cfg.series.forEach((se, k) => { s += `<circle class="c-dot" data-k="${k}" r="4" fill="${se.color}" visibility="hidden"/>`; });
    s += `<rect class="c-hit" x="${padL}" y="0" width="${iw}" height="${H}" fill="transparent"/>`;
    svg.innerHTML = s;

    host.innerHTML = '';
    host.appendChild(svg);
    if (cfg.legend !== false) host.appendChild(legend(cfg));
    const tip = document.createElement('div'); tip.className = 'c-tip'; tip.hidden = true; host.appendChild(tip);
    host.style.position = 'relative';

    // Touch/Maus: nächster Zeitpunkt, Werte anzeigen
    const hit = svg.querySelector('.c-hit'), cross = svg.querySelector('.c-cross'), dots = svg.querySelectorAll('.c-dot');
    const show = ev => {
      const r = svg.getBoundingClientRect();
      const px = (ev.clientX - r.left) * (W / r.width);
      const tt = t[0] + (px - padL) / iw * span;
      let i = U.indexAt(t, tt); if (i < n - 1 && Math.abs(t[i + 1] - tt) < Math.abs(t[i] - tt)) i++;
      const xi = x(i);
      cross.setAttribute('x1', xi); cross.setAttribute('x2', xi); cross.setAttribute('visibility', 'visible');
      let rows = '';
      cfg.series.forEach((se, k) => {
        const v = se.values[i], sc = scale[se.axis || 'l'];
        if (U.isNum(v)) { dots[k].setAttribute('cx', xi); dots[k].setAttribute('cy', sc.y(v)); dots[k].setAttribute('visibility', 'visible'); }
        else dots[k].setAttribute('visibility', 'hidden');
        if (se.tip === false) return;
        rows += `<div><i style="background:${se.color}"></i>${U.esc(se.label)} <b>${U.isNum(v) ? U.r(v, se.decimals || 0) : '–'}</b> ${U.esc(se.unit || '')}</div>`;
      });
      if (cfg.arrows && U.isNum(cfg.arrows.values[i])) rows += `<div>Richtung <b>${U.dirName(cfg.arrows.values[i])}</b> ${Math.round(cfg.arrows.values[i])}°</div>`;
      tip.innerHTML = `<div class="c-tip-h">${U.esc(U.dayShort(t[i]))} ${U.hhmm(t[i])}</div>${rows}`;
      tip.hidden = false;
      const left = (xi / W) * r.width;
      tip.style.left = Math.min(Math.max(left - tip.offsetWidth / 2, 0), r.width - tip.offsetWidth) + 'px';
    };
    const hide = () => { cross.setAttribute('visibility', 'hidden'); dots.forEach(d => d.setAttribute('visibility', 'hidden')); tip.hidden = true; };
    hit.addEventListener('pointerdown', show);
    hit.addEventListener('pointermove', show);
    hit.addEventListener('pointerleave', hide);
    hit.addEventListener('pointercancel', hide);
  }

  function fmtTick(v, step) { return step < 1 ? v.toFixed(1) : String(Math.round(v)); }
  function linePath(vals, x, y) {                                    // Lücken (null) unterbrechen die Linie
    let d = '', pen = false;
    vals.forEach((v, i) => { if (U.isNum(v)) { d += (pen ? 'L' : 'M') + x(i).toFixed(1) + ',' + y(v).toFixed(1); pen = true; } else pen = false; });
    return d;
  }
  function areaPath(vals, x, y, y0) {
    let d = '', seg = [];
    const flush = () => { if (seg.length > 1) d += `M${x(seg[0]).toFixed(1)},${y0}` + seg.map(i => `L${x(i).toFixed(1)},${y(vals[i]).toFixed(1)}`).join('') + `L${x(seg[seg.length - 1]).toFixed(1)},${y0}Z`; seg = []; };
    vals.forEach((v, i) => { if (U.isNum(v)) seg.push(i); else flush(); }); flush();
    return d;
  }
  function bandPath(lo, hi, x, y) {
    let d = '', seg = [];
    const flush = () => { if (seg.length > 1) { d += 'M' + seg.map(i => `${x(i).toFixed(1)},${y(hi[i]).toFixed(1)}`).join('L') + 'L' + seg.slice().reverse().map(i => `${x(i).toFixed(1)},${y(lo[i]).toFixed(1)}`).join('L') + 'Z'; } seg = []; };
    lo.forEach((v, i) => { if (U.isNum(v) && U.isNum(hi[i])) seg.push(i); else flush(); }); flush();
    return d;
  }
  function legend(cfg) {
    const d = document.createElement('div'); d.className = 'c-legend';
    d.innerHTML = cfg.series.filter(s => s.legend !== false).map(s => `<span><i style="background:${s.color};${s.dash ? 'height:0;border-top:2px dashed ' + s.color + ';background:none' : ''}"></i>${U.esc(s.label)}</span>`).join('');
    return d;
  }
})();

/* ---- js/gauges.js ---- */
/* Anzeigen im Garmin-Stil: Datenfelder, Halbkreis-Tacho, Ring, Kompass, Zonenbalken, Wind-Zeitleiste. */
(function () {
  const U = SW.util, C = SW.CONFIG;
  const G = SW.g = {};

  // Datenfeld: kleine Versal-Beschriftung, grosse Zahl, Einheit oben rechts
  G.field = function (o) {
    return `<div class="field ${o.cls || ''} ${o.status ? 'st-' + o.status : ''}">
      <div class="f-lab">${U.esc(o.label)}</div>
      <div class="f-val"><span class="num">${o.value}</span>${o.unit ? `<span class="f-unit">${U.esc(o.unit)}</span>` : ''}</div>
      ${o.sub ? `<div class="f-sub">${o.sub}</div>` : ''}
    </div>`;
  };

  // Halbkreis-Tacho für Wind (Nadel = Mittelwind, Marke = Böe)
  G.tacho = function (o) {
    const max = o.max || 40, r = 80, cx = 100, cy = 96;
    const ang = v => Math.PI * (1 - U.clamp(v, 0, max) / max);        // 0 kt links, max rechts
    const pt = (v, rr) => [cx + rr * Math.cos(ang(v)), cy - rr * Math.sin(ang(v))];
    const arc = (a, b, rr) => { const p1 = pt(a, rr), p2 = pt(b, rr); return `M${p1[0].toFixed(1)},${p1[1].toFixed(1)} A${rr},${rr} 0 0 1 ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`; };
    let s = `<path d="${arc(0, max, r)}" class="g-track" stroke-width="14" fill="none"/>`;
    const sc = C.windScale;
    sc.forEach((z, i) => {                                            // farbige Skala nach Knoten
      const a = z.lo, b = i + 1 < sc.length ? Math.min(sc[i + 1].lo, max) : max;
      if (a < max) s += `<path d="${arc(a, b, r + 11)}" stroke="${z.c}" stroke-width="4" fill="none"/>`;
    });
    if (U.isNum(o.value)) s += `<path d="${arc(0, Math.max(0.01, o.value), r)}" stroke="${U.windColor(o.value).c}" stroke-width="14" fill="none"/>`;
    if (U.isNum(o.gust)) { const a = pt(o.gust, r - 9), b = pt(o.gust, r + 9); s += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" class="g-gust" stroke-width="4"/>`; }
    for (let v = 0; v <= max; v += 10) { const p = pt(v, r - 22); s += `<text x="${p[0]}" y="${p[1] + 4}" class="g-tick" text-anchor="middle">${v}</text>`; }
    return `<div class="gauge tacho"><svg viewBox="0 0 200 112" role="img" aria-label="${U.esc(o.label)} ${U.r(o.value)} Knoten">${s}
      <text x="${cx}" y="${cy - 6}" class="g-big" text-anchor="middle">${U.r(o.value)}</text>
      <text x="${cx}" y="${cy + 12}" class="g-unit" text-anchor="middle">KT ${U.isNum(o.gust) ? '· BÖE ' + U.r(o.gust) : ''}</text></svg>
      <div class="f-lab">${U.esc(o.label)}</div></div>`;
  };

  // Ring für Prozent/Index
  G.ring = function (o) {
    const v = U.isNum(o.value) ? U.clamp(o.value, 0, o.max || 100) : 0, max = o.max || 100;
    const R = 42, L = 2 * Math.PI * R, f = v / max;
    const col = o.color || (f >= 0.66 ? 'var(--ok)' : f >= 0.33 ? 'var(--warn)' : 'var(--fg-3)');
    return `<div class="gauge ring"><svg viewBox="0 0 100 100" role="img" aria-label="${U.esc(o.label)} ${U.r(o.value)}">
      <circle cx="50" cy="50" r="${R}" class="g-track" stroke-width="9" fill="none"/>
      <circle cx="50" cy="50" r="${R}" stroke="${col}" stroke-width="9" fill="none" stroke-dasharray="${(L * f).toFixed(1)} ${L.toFixed(1)}" transform="rotate(-90 50 50)" stroke-linecap="butt"/>
      <text x="50" y="56" class="g-mid" text-anchor="middle">${U.isNum(o.value) ? Math.round(o.value) : '–'}</text>
      <text x="50" y="72" class="g-unit" text-anchor="middle">${U.esc(o.unit != null ? o.unit : '%')}</text></svg>
      <div class="f-lab">${U.esc(o.label)}</div></div>`;
  };

  // Kompassrose mit Windpfeil (Pfeil zeigt, wohin der Wind weht; Spitze der Raute = Herkunft)
  G.compass = function (o) {
    const d = o.dir;
    let ticks = '';
    for (let a = 0; a < 360; a += 30) {
      const big = a % 90 === 0, r1 = big ? 36 : 39;
      const rad = (a - 90) * Math.PI / 180;
      ticks += `<line x1="${50 + r1 * Math.cos(rad)}" y1="${50 + r1 * Math.sin(rad)}" x2="${50 + 44 * Math.cos(rad)}" y2="${50 + 44 * Math.sin(rad)}" class="g-tickline" stroke-width="${big ? 2 : 1}"/>`;
    }
    const lab = [['N', 50, 25], ['O', 76, 54], ['S', 50, 82], ['W', 24, 54]].map(l => `<text x="${l[1]}" y="${l[2]}" class="g-card" text-anchor="middle">${l[0]}</text>`).join('');
    // kind 'wind': Dreieck am Rand dort, WOHER der Wind kommt, zeigt nach innen (wie die Windanzeige an Bord)
    // kind 'course': Nadel vom Zentrum in Fahrtrichtung
    const kind = o.kind || 'wind';
    let arrow = '';
    if (U.isNum(d) && kind === 'wind') arrow = `<g transform="rotate(${d} 50 50)"><path d="M50,30 L60,6 L40,6 Z" fill="var(--accent)" stroke="var(--bg-1)" stroke-width="1.5"/><path d="M50,30 L50,50" stroke="var(--accent)" stroke-width="3" stroke-dasharray="3 3"/></g>`;
    if (U.isNum(d) && kind === 'course') arrow = `<g transform="rotate(${d} 50 50)"><path d="M50,8 L58,26 L50,22 L42,26 Z" fill="var(--fg-0)"/><path d="M50,22 L50,62" stroke="var(--fg-0)" stroke-width="3.5"/><circle cx="50" cy="50" r="3.5" fill="var(--fg-0)"/></g>`;
    const prefix = kind === 'wind' ? 'aus ' : '';
    return `<div class="gauge compass"><svg viewBox="0 0 100 100" role="img" aria-label="${kind === 'wind' ? 'Wind aus' : 'Kurs'} ${U.dirName(d)}">
      <circle cx="50" cy="50" r="45" class="g-track" stroke-width="2" fill="none"/>${ticks}${lab}${arrow}</svg>
      <div class="f-lab">${U.esc(o.label || (kind === 'wind' ? 'Wind' : 'Kurs'))} <b class="num">${U.isNum(d) ? prefix + U.dirName(d) + ' ' + Math.round(d) + '°' : '–'}</b></div></div>`;
  };

  // Balkenanzeige mit farbigen Zonen (Pegel, Abfluss, Druckgradient)
  G.zoneBar = function (o) {
    const min = o.min, max = o.max, pos = v => U.clamp((v - min) / (max - min) * 100, 0, 100);
    let segs = '', from = min;
    o.zones.forEach(z => { const to = Math.min(z.to, max); segs += `<div class="zb-seg" style="left:${pos(from)}%;width:${pos(to) - pos(from)}%;background:${z.color}" title="${U.esc(z.label || '')}"></div>`; from = to; });
    const marks = (o.marks || []).map(m => `<div class="zb-mark" style="left:${pos(m)}%"><span>${m}</span></div>`).join('');
    const val = U.isNum(o.value) ? `<div class="zb-ptr" style="left:${pos(o.value)}%"></div>` : '';
    const labels = o.zones.filter(z => z.label).map(z => `<span style="color:${z.color}">${U.esc(z.label)}</span>`).join('');
    return `<div class="zonebar"><div class="f-lab">${U.esc(o.label || '')}</div>
      <div class="zb-track">${segs}${marks}${val}</div><div class="zb-labels">${labels}</div></div>`;
  };

  // Wind-Zeitleiste: Zellen mit Farbskala und Richtungspfeil
  G.timeline = function (t, spd, gst, dir, opts) {
    opts = opts || {};
    const now = U.nowSec(), step = t.length > 1 ? t[1] - t[0] : 3600;
    let cells = '';
    for (let i = 0; i < t.length; i++) {
      if (t[i] + step <= now && !opts.past) continue;                // Vergangenheit ausblenden
      const p = U.parts(t[i]);
      const c = U.windColor(spd[i]);
      const head = p.mi === 0 ? `<b>${p.h.toString().padStart(2, '0')}</b>` : `<span>${p.mi}</span>`;
      const newDay = p.h === 0 && p.mi === 0 ? ' tl-day' : '';
      if (newDay) cells += `<div class="tl-sep">${U.esc(U.dayShort(t[i]))}</div>`;   // Tagestrenner vor Mitternacht
      cells += `<div class="tl-cell${newDay}" style="background:${c.c};color:${c.t}" title="${U.dayShort(t[i])} ${U.hhmm(t[i])}">
        <div class="tl-h">${head}</div>
        <div class="tl-a">${U.isNum(dir[i]) ? `<svg viewBox="0 0 20 20" style="transform:rotate(${dir[i] + 180}deg)"><path d="M10,2 L15,16 L10,13 L5,16 Z" fill="currentColor"/></svg>` : '·'}</div>
        <div class="tl-v num">${U.r(spd[i])}</div><div class="tl-g num">${gst ? U.r(gst[i]) : ''}</div></div>`;    }
    return `<div class="timeline" data-noswipe><div class="tl-row">${cells}</div></div>
      <div class="tl-legend">${C.windScale.map(z => `<span style="background:${z.c};color:${z.t}">${z.lo}</span>`).join('')}<em>kt · Zahl unten = Böe</em></div>`;
  };

  // Aufschlüsselung eines Index (was trägt wie viel bei)
  G.breakdown = function (items, total) {
    return `<table class="bd"><tbody>${items.map(it => `<tr><td>${U.esc(it.label)}</td><td class="bd-why">${U.esc(it.why || '')}</td><td class="num ${it.pts < 0 ? 'neg' : 'pos'}">${it.pts > 0 ? '+' : ''}${Math.round(it.pts)}</td></tr>`).join('')}
      <tr class="bd-sum"><td colspan="2">Summe (begrenzt auf 0–100)</td><td class="num">${Math.round(total)}</td></tr></tbody></table>`;
  };
})();

/* ---- js/analysis.js ---- */
/* Fachlogik: Ampel, Warnungen, Thermik-Index, Feierabend-Index, Sport-Fenster, Comersee, Gelbes Band, Durchsegeln.
   Alle Funktionen sind rein (keine DOM-Zugriffe) und arbeiten mit zusammengeführten Datensätzen aus api.js. */
(function () {
  const C = SW.CONFIG, U = SW.util;
  const A = SW.ana = {};
  const NA = 'Modell liefert diese Grösse nicht';

  const val = (h, k, i) => (h.v[k] ? h.v[k][i] : null);             // sicherer Zugriff, fehlende Grösse = null

  /* ---------- 3h Windcheck (Ampel) ---------- */
  A.windcheck = function (h) {
    const cfg = C.ampel, now = U.nowSec();
    const i0 = U.indexAt(h.t, now);
    const rows = [];
    for (let k = 0; k < cfg.hours; k++) {                             // jetzige Stunde + die zwei folgenden
      const i = i0 + k; if (i >= h.t.length) break;
      rows.push({ t: h.t[i], spd: val(h, 'wind_speed_10m', i), gst: val(h, 'wind_gusts_10m', i), dir: val(h, 'wind_direction_10m', i),
                  code: val(h, 'weather_code', i), rain: val(h, 'precipitation', i) });
    }
    const maxSpd = U.max(rows.map(r => r.spd)), maxGst = U.max(rows.map(r => r.gst));
    const thunder = rows.some(r => U.isNum(r.code) && r.code >= cfg.thunderCode);
    const rain = rows.some(r => (U.isNum(r.rain) && r.rain >= 0.1) || (U.isNum(r.code) && r.code >= 51 && r.code <= 82));
    const codeMissing = rows.every(r => !U.isNum(r.code));
    let level, text;
    if (!U.isNum(maxSpd)) { level = 'grey'; text = 'Keine Winddaten'; }
    else if (thunder) { level = 'red'; text = 'Achtung Gewitter'; }
    else if (maxSpd >= cfg.greenKt) { level = 'green'; text = 'Ab aufs Wasser'; }
    else if (maxSpd >= cfg.yellowKt) { level = 'yellow'; text = 'Knapp – Foil/Leichtwind'; }
    else { level = 'grey'; text = `Unter ${cfg.yellowKt} kt`; }
    return { level, text, rows, maxSpd, maxGst, thunder, rain, codeMissing };
  };

  /* ---------- Starkwind / Sturm (Böen) ---------- */
  A.warning = function (h, hours) {
    const now = U.nowSec(), i0 = U.indexAt(h.t, now);
    let g = null, at = null;
    for (let i = i0; i < Math.min(h.t.length, i0 + (hours || 3)); i++) { const x = val(h, 'wind_gusts_10m', i); if (U.isNum(x) && (g === null || x > g)) { g = x; at = h.t[i]; } }
    if (!U.isNum(g)) return null;
    if (g >= C.warnings.stormGustKt) return { level: 'storm', gust: g, at, text: `Sturm: Böen bis ${U.r(g)} kt (≥ 61 km/h)` };
    if (g >= C.warnings.strongGustKt) return { level: 'strong', gust: g, at, text: `Starkwind: Böen bis ${U.r(g)} kt (≥ 25 km/h)` };
    return null;
  };

  /* ---------- Tage und Sonne ---------- */
  A.days = function (set, maxDays) {                                  // Tagesgruppen inkl. Sonnenauf-/untergang
    const days = U.groupDays(set.hourly.t).filter(d => d.date >= U.todayKey()).slice(0, maxDays || 7);   // nie vergangene Tage (auch aus altem Cache)
    const d = set.daily;
    days.forEach(day => {
      if (!d) return;
      const k = d.t.findIndex(x => U.parts(x).date === day.date);
      day.di = k;
      day.sunrise = k >= 0 && d.v.sunrise ? d.v.sunrise[k] : null;
      day.sunset = k >= 0 && d.v.sunset ? d.v.sunset[k] : null;
    });
    return days;
  };
  A.isDaylight = function (sec, day) {
    if (!day || !U.isNum(day.sunrise) || !U.isNum(day.sunset)) { const h = U.hourOf(sec); return h >= 7 && h < 18; } // Notlösung ohne Sonnendaten
    return sec >= day.sunrise && sec <= day.sunset + C.feierabend.dark.minutesAfterSunset * 60;
  };

  /* ---------- Thermik-Index pro Tag mit Aufschlüsselung ---------- */
  A.thermik = function (set, day) {
    const T = C.thermik, h = set.hourly, d = set.daily;
    const win = day.idx.filter(i => { const hr = U.hourOf(h.t[i]); return hr >= T.window[0] && hr <= T.window[1]; });
    const items = [];
    const sunS = d && day.di >= 0 && d.v.sunshine_duration ? d.v.sunshine_duration[day.di] : null;
    if (U.isNum(sunS)) { const hrs = sunS / 3600; items.push({ label: 'Sonnenschein', why: `${hrs.toFixed(1)} h (voll ab ${T.sun.fullHours} h)`, pts: T.sun.max * U.clamp(hrs / T.sun.fullHours, 0, 1) }); }
    else items.push({ label: 'Sonnenschein', why: NA, pts: 0 });
    const tmax = U.max(day.idx.map(i => val(h, 'temperature_2m', i)));
    if (U.isNum(tmax)) items.push({ label: 'Tageshöchsttemperatur', why: `${tmax.toFixed(1)} °C (${T.temp.lo}–${T.temp.hi} °C)`, pts: T.temp.max * U.ramp(tmax, T.temp.lo, T.temp.hi) });
    else items.push({ label: 'Tageshöchsttemperatur', why: NA, pts: 0 });
    const w850 = U.mean(win.map(i => val(h, 'wind_speed_850hPa', i)));
    if (U.isNum(w850)) items.push({ label: 'Höhenwind 850 hPa', why: `${U.r(w850)} kt (schwach = Seewind setzt sich durch)`, pts: T.calm.max * (1 - 2 * U.ramp(w850, T.calm.goodKt, T.calm.badKt)) });
    else items.push({ label: 'Höhenwind 850 hPa', why: NA, pts: 0 });
    const cloud = U.mean(win.map(i => val(h, 'cloud_cover', i)));
    if (U.isNum(cloud)) items.push({ label: 'Bewölkung', why: `${U.r(cloud)} % im Zeitfenster`, pts: T.cloud.max * (1 - cloud / 100) });
    else items.push({ label: 'Bewölkung', why: NA, pts: 0 });
    const lapse = U.mean(win.map(i => { const a = val(h, 'temperature_2m', i), b = val(h, 'temperature_850hPa', i); return U.isNum(a) && U.isNum(b) ? a - b : null; }));
    if (U.isNum(lapse)) items.push({ label: 'Labilität (T2m − T850)', why: `${lapse.toFixed(1)} K`, pts: T.lapse.max * U.ramp(lapse, T.lapse.lo, T.lapse.hi) });
    else items.push({ label: 'Labilität (T2m − T850)', why: NA, pts: 0 });
    const rain = U.sum(win.map(i => val(h, 'precipitation', i)));
    items.push({ label: 'Niederschlag', why: `${rain.toFixed(1)} mm im Zeitfenster`, pts: rain >= T.rain.mm ? T.rain.penalty : 0 });
    const score = U.clamp(items.reduce((s, x) => s + x.pts, 0), 0, 100);
    // Peak: wärmste Stunde des richtigen Tages (Fehler der alten App: immer heute)
    let peak = null, best = -999;
    win.forEach(i => { const x = val(h, 'temperature_2m', i); if (U.isNum(x) && x > best) { best = x; peak = h.t[i]; } });
    return { score, items, peak };
  };

  /* ---------- Sportart-Bewertung einer Stunde ---------- */
  A.sportOk = function (sport, spd, gst) {
    if (!U.isNum(spd)) return false;
    return spd >= sport.min && spd <= sport.max && (!U.isNum(gst) || !sport.gustMax || gst <= sport.gustMax);
  };
  // Zusammenhängende fahrbare Zeitfenster (Tageslicht, kein Gewitter)
  A.windows = function (set, days, sport) {
    const h = set.hourly, res = [];
    days.forEach(day => {
      let cur = null;
      day.idx.forEach(i => {
        const t = h.t[i], spd = val(h, 'wind_speed_10m', i), gst = val(h, 'wind_gusts_10m', i), code = val(h, 'weather_code', i);
        const ok = A.sportOk(sport, spd, gst) && !(U.isNum(code) && code >= C.ampel.thunderCode) && A.isDaylight(t, day) && t + 3600 > U.nowSec();
        if (ok) { if (!cur) cur = { start: t, end: t + 3600, spd: [], gst: [], day }; else cur.end = t + 3600; cur.spd.push(spd); cur.gst.push(gst); }
        else if (cur) { res.push(cur); cur = null; }
      });
      if (cur) res.push(cur);
    });
    return res.filter(w => (w.end - w.start) / 3600 >= C.minWindowHours)
      .map(w => ({ start: w.start, end: w.end, avg: U.mean(w.spd), max: U.max(w.spd), gust: U.max(w.gst), day: w.day }));
  };
  // Bester 3-Stunden-Block eines Tages (höchster Mittelwind bei Tageslicht)
  A.bestBlock = function (set, day, len) {
    const h = set.hourly; len = len || 3; let best = null;
    for (let k = 0; k + len <= day.idx.length; k++) {
      const ids = day.idx.slice(k, k + len);
      if (!ids.every(i => A.isDaylight(h.t[i], day))) continue;
      if (h.t[ids[len - 1]] + 3600 <= U.nowSec()) continue;           // vergangene Blöcke überspringen
      const m = U.mean(ids.map(i => val(h, 'wind_speed_10m', i)));
      if (U.isNum(m) && (!best || m > best.avg)) best = { start: h.t[ids[0]], end: h.t[ids[len - 1]] + 3600, avg: m, gust: U.max(ids.map(i => val(h, 'wind_gusts_10m', i))), dir: U.circMean(ids.map(i => val(h, 'wind_direction_10m', i))) };
    }
    return best;
  };

  /* ---------- Feierabend-Index einer Stunde ---------- */
  A.feierabend = function (set, i, day, sport) {
    const F = C.feierabend, h = set.hourly, t = h.t[i];
    const spd = val(h, 'wind_speed_10m', i), gst = val(h, 'wind_gusts_10m', i);
    const items = [];
    if (!U.isNum(spd)) return { score: null, items: [{ label: 'Wind', why: NA, pts: 0 }] };
    let f = U.ramp(spd, sport.min - 4, sport.idealLo);                // unter Schwelle −4 kt = 0, ab ideal = voll
    if (spd > sport.idealHi) f *= 1 - 0.5 * U.ramp(spd, sport.idealHi, sport.max);
    if (spd > sport.max) f = 0;
    items.push({ label: `Mittelwind (${sport.label})`, why: `${U.r(spd)} kt, fahrbar ab ${sport.min}, ideal ${sport.idealLo}–${sport.idealHi}`, pts: F.wind.max * f });
    if (U.isNum(gst) && spd > 2) { const ratio = gst / spd; items.push({ label: 'Gleichmässigkeit', why: `Böenfaktor ${ratio.toFixed(2)}`, pts: F.steady.max * (1 - U.ramp(ratio, 1.3, F.steady.gustRatio)) }); }
    else items.push({ label: 'Gleichmässigkeit', why: U.isNum(gst) ? 'kaum Wind' : NA, pts: 0 });
    const a = val(h, 'wind_speed_10m', i - 1), b = val(h, 'wind_speed_10m', i + 1);
    const dev = U.max([U.isNum(a) ? Math.abs(spd - a) : null, U.isNum(b) ? Math.abs(spd - b) : null]);
    items.push({ label: 'Konstanz ±1 h', why: U.isNum(dev) ? `Änderung bis ${U.r(dev)} kt` : 'keine Nachbarwerte', pts: U.isNum(dev) ? F.trend.max * (1 - U.ramp(dev, 2, 6)) : 0 });
    const rad = val(h, 'shortwave_radiation', i), tmp = val(h, 'temperature_2m', i);
    items.push({ label: 'Thermik-Beitrag', why: U.isNum(rad) ? `${U.r(rad)} W/m², ${U.r(tmp, 1)} °C` : NA, pts: U.isNum(rad) && U.isNum(tmp) ? F.thermal.max * U.ramp(rad, 100, 400) * U.ramp(tmp, 14, 22) : 0 });
    const pr = val(h, 'precipitation', i), code = val(h, 'weather_code', i);
    const thunder = U.isNum(code) && code >= C.ampel.thunderCode;
    if (U.isNum(pr) && pr >= 0.3) items.push({ label: 'Regen', why: `${pr.toFixed(1)} mm`, pts: F.rain.penalty });
    const dark = !A.isDaylight(t, day);
    if (dark) items.push({ label: 'Dunkelheit', why: day && day.sunset ? `Sonnenuntergang ${U.hhmm(day.sunset)}` : 'nach Sonnenuntergang', pts: F.dark.penalty });
    let score = U.clamp(items.reduce((s, x) => s + x.pts, 0), 0, 100);
    if (thunder) { items.push({ label: 'Gewitter', why: 'Wettercode ≥ 95 – nicht aufs Wasser', pts: -score }); score = 0; }
    return { score, items, spd, gst, dir: val(h, 'wind_direction_10m', i), thunder, rain: pr, dark, rad, tmp, code };
  };

  /* ---------- Druckgradient klassifizieren ---------- */
  // a − b je Zeitschritt, beide Werte immer aus demselben Modell (sonst entsteht ein falscher Gradient)
  A.diffSeries = function (ha, hb, k) {
    k = k || 'pressure_msl';
    const pa = ha.p[k], pb = hb.p[k], fa = ha.f[k], fb = hb.f[k];
    return ha.t.map((_, i) => {
      if (pa && pb && U.isNum(pa[i]) && U.isNum(pb[i])) return pa[i] - pb[i];       // gewähltes Modell für beide Orte
      if (fa && fb && U.isNum(fa[i]) && U.isNum(fb[i])) return fa[i] - fb[i];       // sonst Fallback für beide Orte
      return null;
    });
  };
  A.foehn = function (v) {
    const r = C.rules.foehn;
    if (!U.isNum(v)) return { st: 'na', text: 'keine Daten' };
    if (v >= r.southStrong) return { st: 'bad', text: 'Kräftiger Südföhn' };
    if (v >= r.south) return { st: 'warn', text: 'Südföhn möglich' };
    if (v <= r.northStrong) return { st: 'bad', text: 'Kräftiger Nordföhn' };
    if (v <= r.north) return { st: 'warn', text: 'Nordföhn möglich' };
    return { st: 'off', text: 'Kein Föhn' };
  };
  A.bise = function (v) {
    const r = C.rules.bise;
    if (!U.isNum(v)) return { st: 'na', text: 'keine Daten' };
    if (v >= r.storm) return { st: 'bad', text: 'Bisensturm' };
    if (v >= r.strong) return { st: 'ok', text: 'Starke Bise' };
    if (v >= r.weak) return { st: 'warn', text: 'Mässige Bise' };
    return { st: 'off', text: 'Keine Bise' };
  };
  A.west = function (v) {
    const r = C.rules.west;
    if (!U.isNum(v)) return { st: 'na', text: 'keine Daten' };
    if (v >= r.strong) return { st: 'ok', text: 'Starke Westlage' };
    if (v >= r.weak) return { st: 'warn', text: 'Westwind-Tendenz' };
    return { st: 'off', text: 'Keine Westlage' };
  };

  /* ---------- Comersee: Tivano (N, morgens) und Breva (S, nachmittags) ---------- */
  A.como = function (set, days) {
    const K = C.como, h = set.hourly;
    const tiv = h.t.map((_, i) => { const d = val(h, 'wind_direction_10m', i), s = val(h, 'wind_speed_10m', i); return U.isNum(s) && U.isNum(d) ? (U.inSector(d, K.tivano.dirLo, K.tivano.dirHi) ? s : 0) : null; });
    const bre = h.t.map((_, i) => { const d = val(h, 'wind_direction_10m', i), s = val(h, 'wind_speed_10m', i); return U.isNum(s) && U.isNum(d) ? (U.inSector(d, K.breva.dirLo, K.breva.dirHi) ? s : 0) : null; });
    const perDay = days.map(day => {
      const f = (series, w) => { let best = null; day.idx.forEach(i => { const hr = U.hourOf(h.t[i]); if (hr < w.hours[0] || hr > w.hours[1]) return; const v = series[i]; if (U.isNum(v) && (!best || v > best.v)) best = { v, t: h.t[i], g: val(h, 'wind_gusts_10m', i), d: val(h, 'wind_direction_10m', i) }; }); return best; };
      return { day, tivano: f(tiv, K.tivano), breva: f(bre, K.breva) };
    });
    return { tiv, bre, perDay };
  };
  A.comoRating = function (v) {
    const K = C.como;
    if (!v || !U.isNum(v.v)) return { st: 'na', text: 'keine Daten' };
    if (v.v >= K.strongKt) return { st: 'ok', text: 'Stark' };
    if (v.v >= K.goodKt) return { st: 'ok', text: 'Gut fahrbar' };
    if (v.v >= 6) return { st: 'warn', text: 'Leicht' };
    return { st: 'off', text: 'Kaum' };
  };

  /* ---------- Flusswelle ---------- */
  A.welleZone = function (q) {
    const W = C.welle;
    if (!U.isNum(q)) return { key: 'na', label: 'keine Messung', st: 'na' };
    if (q < W.low) return { key: 'low', label: 'Zu tief', st: 'warn' };
    if (q > W.high) return { key: 'high', label: 'Hochwasser', st: 'bad' };
    return { key: 'ok', label: 'Ideal', st: 'ok' };
  };

  /* ---------- Gelbes Band: Tagesbewertung ---------- */
  A.bandDay = function (day, hL, diff, extra) {
    const R = C.rules.band;
    const hrs = day.idx.filter(i => { const hr = U.hourOf(hL.t[i]); return hr >= 8 && hr <= 20; });
    const grad = U.max(hrs.map(i => diff[i]));
    const w850 = U.max(hrs.map(i => { const d = val(hL, 'wind_direction_850hPa', i); const s = val(hL, 'wind_speed_850hPa', i); return U.isNum(s) && U.isNum(d) ? (U.inSector(d, R.dirLo, R.dirHi) ? s : 0) : null; }));
    const jet = U.max(hrs.map(i => val(hL, 'wind_speed_250hPa', i)));
    let w10 = null, g10 = null, peak = null;
    hrs.forEach(i => { const s = extra.spd(i), g = extra.gst(i); if (U.isNum(s) && (w10 === null || s > w10)) w10 = s; if (U.isNum(g) && (g10 === null || g > g10)) { g10 = g; peak = hL.t[i]; } });
    const items = [
      { label: 'Gradient Wien − Brest', why: U.isNum(grad) ? `max ${grad.toFixed(1)} hPa (Rekord ≥ ${R.record})` : NA, pts: U.isNum(grad) ? 30 * U.ramp(grad, 0, R.record) : 0 },
      { label: 'Höhenwind 850 hPa aus W/SW', why: U.isNum(w850) ? `max ${U.r(w850)} kt (Rekord ≥ ${R.h850record})` : NA, pts: U.isNum(w850) ? 30 * U.ramp(w850, 10, R.h850record) : 0 },
      { label: 'Wind auf dem See', why: U.isNum(w10) ? `max ${U.r(w10)} kt Mittel (Ziel ${R.recordKt})` : NA, pts: U.isNum(w10) ? 40 * U.ramp(w10, 8, R.recordKt) : 0 }
    ];
    const score = U.clamp(items.reduce((s, x) => s + x.pts, 0), 0, 100);
    const record = U.isNum(grad) && U.isNum(w850) && grad >= R.record && w850 >= R.h850record;
    const strong = !record && U.isNum(grad) && grad >= R.good && ((U.isNum(w850) && w850 >= R.h850good) || (U.isNum(g10) && g10 >= 22));
    return { day, grad, w850, jet, w10, g10, peak, items, score, record, strong, cat: record ? 'record' : strong ? 'strong' : (U.isNum(grad) && grad > 3 ? 'mod' : 'flat') };
  };

  /* ---------- Durchsegel-Rechner ---------- */
  const P = C.route.polar;
  A.polarSpeed = function (twa, tws) {                                // bilineare Interpolation in der Polare
    if (!U.isNum(tws) || tws <= 0) return 0;
    twa = U.clamp(twa, 0, 180); const ws = U.clamp(tws, P.tws[0], P.tws[P.tws.length - 1]);
    const ia = Math.max(0, P.twa.findIndex((a, k) => k < P.twa.length - 1 && twa >= a && twa <= P.twa[k + 1]));
    const iw = Math.max(0, P.tws.findIndex((w, k) => k < P.tws.length - 1 && ws >= w && ws <= P.tws[k + 1]));
    const fa = (twa - P.twa[ia]) / (P.twa[ia + 1] - P.twa[ia]), fw = (ws - P.tws[iw]) / (P.tws[iw + 1] - P.tws[iw]);
    const s00 = P.speed[ia][iw], s01 = P.speed[ia][iw + 1], s10 = P.speed[ia + 1][iw], s11 = P.speed[ia + 1][iw + 1];
    let s = U.lerp(U.lerp(s00, s01, fw), U.lerp(s10, s11, fw), fa);
    if (tws < P.tws[0]) s *= tws / P.tws[0];                          // unter 4 kt linear gegen 0
    return s;
  };
  // Beste Geschwindigkeit in Kursrichtung (VMG): direkt oder kreuzen/halsen
  A.vmg = function (twaCourse, tws) {
    let best = { v: 0, twa: twaCourse };
    for (let a = 0; a <= 180; a += 1) {
      const off = Math.abs(a - twaCourse); if (off >= 90) continue;
      const v = A.polarSpeed(a, tws) * Math.cos(off * Math.PI / 180);
      if (v > best.v) best = { v, twa: a };
    }
    const direct = Math.abs(best.twa - twaCourse) <= 3;
    const v = direct ? A.polarSpeed(twaCourse, tws) : best.v * C.route.tackPenalty; // Kreuzen kostet Wenden
    const mode = twaCourse < 50 ? (direct ? 'Am Wind' : 'Kreuzen') : twaCourse < 80 ? 'Hoch am Wind' : twaCourse < 115 ? 'Halbwind' : twaCourse < 160 ? 'Raumwind' : (direct ? 'Vorwind' : 'Vorwind kreuzen');
    return { v, mode, sailTwa: direct ? twaCourse : best.twa, boat: A.polarSpeed(direct ? twaCourse : best.twa, tws) };
  };

  // Wind an Ort und Zeit: räumlich (inverse Distanz) und zeitlich (linear, Richtung über Kreis) interpoliert
  A.windAt = function (wp, sets, pos, sec) {
    const ws = [], spd = [], dir = [], gst = [];
    wp.forEach((p, k) => {
      const h = sets[k].useM15 ? sets[k].m15 : sets[k].hourly;
      const i = U.indexAt(h.t, sec); if (i < 0 || sec > h.t[h.t.length - 1]) return;
      const j = Math.min(i + 1, h.t.length - 1);
      const f = j > i ? U.clamp((sec - h.t[i]) / (h.t[j] - h.t[i]), 0, 1) : 0;
      const s = U.isNum(val(h, 'wind_speed_10m', i)) && U.isNum(val(h, 'wind_speed_10m', j)) ? U.lerp(val(h, 'wind_speed_10m', i), val(h, 'wind_speed_10m', j), f) : val(h, 'wind_speed_10m', i);
      const g = U.isNum(val(h, 'wind_gusts_10m', i)) && U.isNum(val(h, 'wind_gusts_10m', j)) ? U.lerp(val(h, 'wind_gusts_10m', i), val(h, 'wind_gusts_10m', j), f) : val(h, 'wind_gusts_10m', i);
      const d = U.circLerp(val(h, 'wind_direction_10m', i), val(h, 'wind_direction_10m', j), f);
      if (!U.isNum(s) || !U.isNum(d)) return;
      const dist = Math.max(0.3, U.distKm(pos, p));
      ws.push(1 / (dist * dist)); spd.push(s); dir.push(d); gst.push(g);
    });
    if (!ws.length) return null;
    const W = ws.reduce((a, b) => a + b, 0);
    return { spd: spd.reduce((s, v, k) => s + v * ws[k], 0) / W, gst: U.isNum(gst[0]) ? gst.reduce((s, v, k) => s + (U.isNum(v) ? v : spd[k]) * ws[k], 0) / W : null, dir: U.circMean(dir, ws) };
  };

  /* ---------- Eigene Strecken: Stützpunkte, Optimierung, Startzeit-Scan ---------- */
  const KM_LAT = 111.32;
  A.offset = function (p, bearingDeg, km) {                         // Punkt um km in Richtung bearing verschieben (kurze Distanzen)
    const b = bearingDeg * Math.PI / 180;
    return { lat: p.lat + km * Math.cos(b) / KM_LAT, lon: p.lon + km * Math.sin(b) / (KM_LAT * Math.cos(p.lat * Math.PI / 180)) };
  };
  A.routeKm = pts => pts.slice(1).reduce((s, p, k) => s + U.distKm(pts[k], p), 0);
  // Wind-Stützpunkte gleichmässig entlang der Strecke (Start und Ziel immer dabei)
  A.sampleRoute = function (pts) {
    const R = C.route, D = A.routeKm(pts);
    const n = U.clamp(Math.round(D / R.sampleKm) + 1, 2, R.maxSamples);
    const out = [];
    for (let k = 0; k < n; k++) out.push(A.pointAt(pts, D * k / (n - 1)));
    return out;
  };
  A.pointAt = function (pts, km) {                                   // Punkt nach km entlang der Polylinie
    for (let k = 0; k < pts.length - 1; k++) {
      const d = U.distKm(pts[k], pts[k + 1]);
      if (km <= d || k === pts.length - 2) { const f = d ? U.clamp(km / d, 0, 1) : 0; return { lat: U.lerp(pts[k].lat, pts[k + 1].lat, f), lon: U.lerp(pts[k].lon, pts[k + 1].lon, f) }; }
      km -= d;
    }
    return pts[pts.length - 1];
  };

  // VMG-Tabelle einmal vorrechnen (Kurswinkel 0–180°, Wind 0–40 kt) → schnelle Abfrage in der Optimierung
  let VT = null;
  function vmgTable() {
    if (VT) return VT;
    VT = [];
    for (let ws = 0; ws <= 40; ws++) { const row = []; for (let a = 0; a <= 180; a++) { const r = A.vmg(a, ws); row.push([r.v, r.mode]); } VT.push(row); }
    return VT;
  }
  A.vmgFast = function (twa, tws) {
    const T = vmgTable(), a = Math.round(U.clamp(twa, 0, 180)), w = U.clamp(tws, 0, 40);
    const w0 = Math.floor(w), w1 = Math.min(40, w0 + 1), f = w - w0;
    return { v: U.lerp(T[w0][a][0], T[w1][a][0], f), mode: T[Math.round(w)][a][1] };
  };

  // Schnellster Weg durch einen Korridor um die Strecke (zeitabhängige Suche, Stufe für Stufe).
  // route: {points, corridorKm, speedFactor}; samples/sets: Wind-Stützpunkte; lanes=0 → direkte Linie
  A.optimize = function (route, samples, sets, startSec, reverse, lanesOverride) {
    const O = C.route.opt;
    const raw = reverse ? route.points.slice().reverse() : route.points.slice();
    const pts = SW.freeRoute ? SW.freeRoute.expand(raw) : raw;             // Verbindungen über Land folgen dem Wasser
    const NL = lanesOverride !== undefined ? lanesOverride : O.lanes;
    const laneW = NL ? (route.corridorKm || O.corridorKm) / NL : 0;
    const factor = (route.speedFactor || 100) / 100;
    // Stufen: jede Etappe in Abschnitte von ~stageKm, Wegpunkte sind Pflichtstufen (Spur 0 = auf der Marke)
    const stages = [];
    for (let k = 0; k < pts.length - 1; k++) {
      const a = pts[k], b = pts[k + 1], d = U.distKm(a, b), brg = U.bearing(a, b);
      const n = Math.max(1, Math.ceil(d / O.stageKm));
      for (let s = 0; s < n; s++) {
        const base = { lat: U.lerp(a.lat, b.lat, s / n), lon: U.lerp(a.lon, b.lon, s / n) };
        const forced = s === 0;                                      // Wegpunkt
        stages.push({ leg: k, forced, lanes: forced ? [0] : range(NL).map(j => ({ j, p: j ? A.offset(base, brg + 90, j * laneW) : base })).map(x => x), base, brg });
      }
    }
    stages.push({ leg: pts.length - 2, forced: true, base: pts[pts.length - 1], lanes: [0] });
    stages.forEach(st => { st.pos = {}; if (st.forced) st.pos[0] = st.base; else st.lanes.forEach(x => { st.pos[x.j] = x.p; }); st.js = st.forced ? [0] : st.lanes.map(x => x.j); });
    // Uferlinie: liegt die Strecke auf einem bekannten See, bleiben Spuren und Abschnitte auf dem Wasser
    const FR = SW.freeRoute, lake = FR && FR.lakeOf(pts);
    const M = NL > 0 && lake ? FR.mask(lake) : null;
    if (M) stages.forEach(st => { if (!st.forced) st.js = st.js.filter(j => FR.waterAt(M, st.pos[j])); });
    // Vorwärtsrechnung: früheste Ankunft je Stufe und Spur
    const arr = stages.map(() => ({})), prev = stages.map(() => ({})), info = stages.map(() => ({}));
    arr[0][0] = startSec;
    let note = null;
    for (let k = 0; k < stages.length - 1; k++) {
      const A0 = stages[k], B = stages[k + 1];
      for (const i of A0.js) {
        const t0 = arr[k][i]; if (t0 === undefined) continue;
        const pa = A0.pos[i];
        for (const j of B.js) {
          if (Math.abs(j - i) > O.maxLaneJump && !A0.forced && !B.forced) continue;
          if (A0.forced && Math.abs(j) > O.maxLaneJump) continue;    // von der Marke aus nur langsam auffächern
          if (B.forced && Math.abs(i) > O.maxLaneJump) continue;     // zur Marke hin wieder zusammenführen
          const pb = B.pos[j], dist = U.distKm(pa, pb);
          if (M && !FR.segWater(M, pa, pb, A0.forced, B.forced)) continue;   // Abschnitt würde über Land führen
          const mid = { lat: (pa.lat + pb.lat) / 2, lon: (pa.lon + pb.lon) / 2 };
          const w = A.windAt(samples, sets, mid, t0);
          if (!w) { note = 'Prognose endet vor dem Ziel'; continue; }
          const course = U.bearing(pa, pb), twa = U.angDiff(course, w.dir), vm = A.vmgFast(twa, w.spd);
          const v = Math.max(0.3, vm.v * factor);                     // Flaute: 0.3 kt Treiben statt Stillstand
          const t1 = t0 + dist / (v * 1.852) * 3600;
          if (arr[k + 1][j] === undefined || t1 < arr[k + 1][j]) { arr[k + 1][j] = t1; prev[k + 1][j] = i; info[k + 1][j] = { w, twa, v, mode: vm.mode, course, dist }; }
        }
      }
    }
    const last = stages.length - 1;
    if (arr[last][0] === undefined) return { done: false, note: note || (M ? 'Kein Weg auf dem Wasser im Korridor – an engen Stellen Wegpunkte setzen' : 'Keine Lösung gefunden'), start: startSec };
    // Rückverfolgen
    const path = []; let j = 0;
    for (let k = last; k >= 0; k--) { path.unshift({ k, j, pos: stages[k].pos[j], t: arr[k][j], leg: stages[k].leg, forced: stages[k].forced, e: info[k][j] }); if (k) j = prev[k][j]; }
    // Etappen-Auswertung
    const legs = [];
    for (let k = 0; k < pts.length - 1; k++) {
      const seg = path.filter(p => p.e && path[path.indexOf(p) - 1] && path[path.indexOf(p) - 1].leg === k);
      const endP = path.filter(p => p.forced)[k + 1];
      const side = U.mean(seg.map(p => p.j));
      const modes = {}; seg.forEach(p => { modes[p.e.mode] = (modes[p.e.mode] || 0) + p.e.dist; });
      legs.push({ from: pts[k], to: pts[k + 1], km: U.distKm(pts[k], pts[k + 1]), course: U.bearing(pts[k], pts[k + 1]), end: endP ? endP.t : null,
        spd: U.mean(seg.map(p => p.e.w.spd)), gst: U.mean(seg.map(p => p.e.w.gst)), dir: U.circMean(seg.map(p => p.e.w.dir)),
        boat: U.mean(seg.map(p => p.e.v)), mode: Object.keys(modes).sort((a, b) => modes[b] - modes[a])[0] || '–',
        side: !NL || Math.abs(side) < 0.5 ? 'Mitte' : side > 0 ? 'Steuerbordseite' : 'Backbordseite' });
    }
    const sailed = path.slice(1).reduce((s, p) => s + p.e.dist, 0);
    // Direkte Linie (ohne Spuren) bleibt die gerade Verbindung; melden, wenn sie über Land führt
    if (!(NL > 0) && lake) { const Mk = FR.mask(lake); if (path.slice(1).some((p, k) => !FR.segWater(Mk, path[k].pos, p.pos, path[k].forced, p.forced))) note = 'führt teilweise über Land'; }
    return { done: true, path, legs, start: startSec, end: arr[last][0], duration: arr[last][0] - startSec, km: A.routeKm(pts), sailedKm: sailed, from: pts[0].name, to: pts[pts.length - 1].name, note, onWater: !!M };
  };
  function range(M) { const r = []; for (let j = -M; j <= M; j++) r.push(j); return r; }
})();

/* ---- js/lake.js ---- */
/* Uferlinien der Seen, vereinfacht auf ~20 m. Daten © OpenStreetMap-Mitwirkende, ODbL. Erzeugt mit tools/make_lake.py. */
window.SW = window.SW || {};
SW.LAKES = SW.LAKES || {};
SW.LAKES.vierwaldstaettersee = { name: 'Vierwaldstättersee', bbox: [8.27878, 46.88867, 8.625, 47.08218],
  outer: [[[8.31148,47.05137],[8.30920,47.05131],[8.30895,47.05272],[8.30938,47.05340],[8.31185,47.05442],[8.31308,47.05424],[8.31906,47.05490],[8.32250,47.05495],[8.32440,47.05483],[8.32535,47.05421],[8.32732,47.05390],[8.32924,47.05491],[8.33237,47.05442],[8.33383,47.05326],[8.33468,47.05191],[8.33505,47.05075],[8.33465,47.05016],[8.33575,47.04945],[8.33627,47.04967],[8.33575,47.04941],[8.33900,47.04899],[8.33945,47.04867],[8.33919,47.04835],[8.33973,47.04882],[8.34062,47.04881],[8.34282,47.04684],[8.34381,47.04657],[8.34461,47.04550],[8.34731,47.04497],[8.34963,47.04264],[8.35095,47.04015],[8.35163,47.03989],[8.35146,47.03923],[8.35220,47.03919],[8.35359,47.03814],[8.35359,47.03697],[8.35279,47.03617],[8.35333,47.03542],[8.35292,47.03428],[8.35501,47.03350],[8.35839,47.03331],[8.36019,47.03369],[8.36251,47.03330],[8.36427,47.03478],[8.36848,47.03678],[8.37027,47.03837],[8.37001,47.03869],[8.37139,47.04016],[8.37275,47.04034],[8.37292,47.04071],[8.37541,47.04138],[8.37543,47.04173],[8.37557,47.04140],[8.37590,47.04151],[8.37660,47.04204],[8.37624,47.04204],[8.37657,47.04251],[8.37683,47.04241],[8.37656,47.04301],[8.37770,47.04343],[8.37856,47.04457],[8.37946,47.04458],[8.38025,47.04618],[8.38210,47.04724],[8.38283,47.04729],[8.38525,47.04936],[8.38657,47.05001],[8.38758,47.05001],[8.38795,47.05057],[8.39213,47.05245],[8.39402,47.05363],[8.39428,47.05347],[8.39484,47.05388],[8.39527,47.05357],[8.39459,47.05427],[8.39510,47.05464],[8.39582,47.05424],[8.39600,47.05486],[8.39795,47.05666],[8.39942,47.05888],[8.40153,47.06055],[8.40311,47.06090],[8.40522,47.06331],[8.40634,47.06377],[8.40833,47.06404],[8.40950,47.06477],[8.41205,47.06359],[8.41325,47.06345],[8.41603,47.06453],[8.41749,47.06569],[8.41894,47.06631],[8.41991,47.06786],[8.42138,47.06798],[8.42122,47.06961],[8.42290,47.07022],[8.42397,47.07216],[8.42524,47.07267],[8.42628,47.07439],[8.42836,47.07641],[8.42926,47.07683],[8.43042,47.07844],[8.43377,47.08179],[8.43427,47.08165],[8.43424,47.08199],[8.43502,47.08218],[8.43578,47.08203],[8.43600,47.08157],[8.43799,47.08098],[8.43885,47.08043],[8.43947,47.07876],[8.43786,47.07767],[8.43657,47.07768],[8.43489,47.07713],[8.43534,47.07664],[8.43523,47.07592],[8.43447,47.07430],[8.43237,47.07272],[8.43237,47.07070],[8.43169,47.06942],[8.43130,47.06933],[8.43163,47.06883],[8.43151,47.06762],[8.43022,47.06557],[8.43003,47.06371],[8.43046,47.06229],[8.42838,47.06143],[8.42768,47.05984],[8.42675,47.05915],[8.42719,47.05441],[8.42690,47.05423],[8.42760,47.05338],[8.42703,47.05238],[8.42287,47.04955],[8.41814,47.04417],[8.41749,47.04392],[8.41700,47.04427],[8.41396,47.04218],[8.41156,47.04181],[8.40896,47.04011],[8.40664,47.03939],[8.40137,47.03546],[8.40079,47.03325],[8.39982,47.03269],[8.39870,47.03268],[8.39841,47.03204],[8.39729,47.03145],[8.39660,47.02961],[8.39622,47.02982],[8.39558,47.02903],[8.39666,47.02711],[8.39735,47.02685],[8.40086,47.02832],[8.40150,47.02784],[8.40054,47.02659],[8.40143,47.02615],[8.40419,47.02691],[8.40584,47.02787],[8.40746,47.02828],[8.40834,47.02941],[8.40935,47.03002],[8.41071,47.03003],[8.41143,47.02946],[8.41293,47.02900],[8.41489,47.02919],[8.42072,47.02864],[8.42130,47.02871],[8.42365,47.03040],[8.42574,47.03127],[8.42704,47.03112],[8.42877,47.03177],[8.42956,47.03161],[8.42964,47.03114],[8.43018,47.03111],[8.43130,47.03160],[8.43342,47.03142],[8.43582,47.03214],[8.43646,47.03160],[8.43680,47.03176],[8.43722,47.03133],[8.43797,47.03104],[8.43820,47.03120],[8.43957,47.03039],[8.44192,47.03114],[8.44302,47.03081],[8.44379,47.03012],[8.44585,47.02961],[8.45031,47.02643],[8.45272,47.02544],[8.45407,47.02376],[8.45549,47.02359],[8.45558,47.02394],[8.45582,47.02353],[8.45764,47.02336],[8.46015,47.02431],[8.46235,47.02450],[8.46438,47.02341],[8.46554,47.02326],[8.46795,47.02358],[8.46838,47.02147],[8.47061,47.01956],[8.47210,47.01895],[8.47222,47.01812],[8.47336,47.01694],[8.47650,47.01626],[8.47760,47.01461],[8.48105,47.01426],[8.48181,47.01395],[8.48251,47.01286],[8.48201,47.01091],[8.48270,47.01034],[8.48234,47.00947],[8.48265,47.00710],[8.48348,47.00649],[8.48376,47.00523],[8.48533,47.00258],[8.48424,47.00143],[8.48140,47.00043],[8.48008,47.00031],[8.47840,46.99927],[8.47662,46.99895],[8.47705,46.99785],[8.47576,46.99643],[8.47406,46.99596],[8.47350,46.99536],[8.47465,46.99474],[8.47611,46.99463],[8.47746,46.99405],[8.47818,46.99410],[8.48035,46.99346],[8.48434,46.99442],[8.48773,46.99333],[8.49277,46.99068],[8.49693,46.99022],[8.50145,46.99195],[8.50265,46.99206],[8.50271,46.99187],[8.50728,46.99261],[8.51144,46.99272],[8.51529,46.99328],[8.51685,46.99402],[8.51905,46.99382],[8.51926,46.99344],[8.51974,46.99351],[8.51952,46.99327],[8.51931,46.99341],[8.51956,46.99320],[8.52302,46.99248],[8.52403,46.99075],[8.52976,46.99064],[8.53047,46.98997],[8.53242,46.98981],[8.53301,46.98891],[8.53454,46.98832],[8.53971,46.98803],[8.54887,46.98895],[8.55029,46.98953],[8.55161,46.98951],[8.55308,46.99018],[8.55609,46.99039],[8.55710,46.99115],[8.55785,46.99125],[8.55823,46.99208],[8.56069,46.99291],[8.56115,46.99363],[8.56277,46.99423],[8.56352,46.99523],[8.56508,46.99605],[8.56711,46.99646],[8.56888,46.99646],[8.57030,46.99807],[8.57342,46.99928],[8.57516,46.99977],[8.57752,46.99951],[8.57890,47.00078],[8.58180,47.00048],[8.58172,47.00084],[8.58253,47.00075],[8.58265,47.00112],[8.58525,47.00119],[8.58530,47.00096],[8.58578,47.00098],[8.58577,47.00123],[8.58763,47.00081],[8.59010,46.99875],[8.59014,46.99726],[8.59209,46.99539],[8.59350,46.99530],[8.59389,46.99559],[8.59403,46.99515],[8.59457,46.99536],[8.59480,46.99480],[8.59781,46.99475],[8.59833,46.99498],[8.59922,46.99444],[8.59944,46.99475],[8.60048,46.99394],[8.60128,46.99376],[8.59977,46.99372],[8.60017,46.99315],[8.60553,46.99357],[8.60806,46.99261],[8.61020,46.99081],[8.61166,46.98755],[8.61167,46.98288],[8.61111,46.98042],[8.61073,46.98012],[8.61133,46.97868],[8.61121,46.97719],[8.61036,46.97298],[8.61264,46.96960],[8.61332,46.96737],[8.61455,46.96125],[8.61511,46.96058],[8.61438,46.95917],[8.61470,46.95899],[8.61574,46.95920],[8.61666,46.95649],[8.61909,46.95528],[8.61921,46.95427],[8.62077,46.95253],[8.61882,46.95059],[8.61834,46.94934],[8.61942,46.94925],[8.61928,46.94896],[8.61857,46.94890],[8.61886,46.94816],[8.61944,46.94754],[8.62059,46.94709],[8.61985,46.94600],[8.62001,46.94469],[8.61911,46.94440],[8.61955,46.94397],[8.61838,46.94258],[8.61671,46.94177],[8.61552,46.94065],[8.61613,46.93982],[8.61583,46.93884],[8.61389,46.93695],[8.61298,46.93525],[8.61254,46.93347],[8.61167,46.93261],[8.61163,46.93041],[8.61066,46.92913],[8.61209,46.92785],[8.61132,46.92649],[8.61147,46.92604],[8.61270,46.92587],[8.61628,46.92287],[8.61773,46.92245],[8.61878,46.92177],[8.62007,46.92171],[8.62072,46.92134],[8.62242,46.91823],[8.62363,46.91711],[8.62200,46.91608],[8.62210,46.91542],[8.62123,46.91422],[8.62115,46.91184],[8.62165,46.90979],[8.62235,46.90962],[8.62466,46.90751],[8.62500,46.90473],[8.62435,46.90323],[8.62354,46.90290],[8.62420,46.90221],[8.62252,46.90184],[8.62219,46.90225],[8.62245,46.90161],[8.62203,46.90225],[8.62204,46.90143],[8.62093,46.90205],[8.62165,46.90130],[8.62111,46.90108],[8.62171,46.89998],[8.62076,46.89968],[8.61987,46.89980],[8.61693,46.89828],[8.61604,46.89827],[8.61514,46.89916],[8.61535,46.89956],[8.61468,46.89997],[8.61061,46.89849],[8.60965,46.89850],[8.60914,46.89777],[8.60957,46.89675],[8.60883,46.89643],[8.60916,46.89627],[8.60877,46.89604],[8.60945,46.89560],[8.60912,46.89518],[8.60816,46.89521],[8.60637,46.89435],[8.60785,46.89408],[8.60790,46.89371],[8.60594,46.89311],[8.60645,46.89297],[8.60459,46.89164],[8.60491,46.89112],[8.60582,46.89144],[8.60495,46.89092],[8.60478,46.88992],[8.60403,46.88908],[8.60194,46.88867],[8.60136,46.88908],[8.59928,46.88945],[8.59777,46.89081],[8.59702,46.89206],[8.59596,46.89275],[8.59385,46.89557],[8.59365,46.89645],[8.59515,46.89766],[8.59501,46.89898],[8.59317,46.89970],[8.59362,46.90122],[8.59259,46.90278],[8.59252,46.90479],[8.59185,46.90559],[8.59268,46.91062],[8.59197,46.91271],[8.59203,46.91376],[8.59406,46.91544],[8.59410,46.91638],[8.59722,46.91885],[8.59514,46.92016],[8.59368,46.92078],[8.59242,46.92075],[8.59044,46.92228],[8.58803,46.92309],[8.58765,46.92360],[8.58687,46.92368],[8.58645,46.92486],[8.58480,46.92638],[8.58375,46.92672],[8.58254,46.92774],[8.58005,46.92851],[8.57946,46.92932],[8.57968,46.93071],[8.57904,46.93115],[8.57849,46.93230],[8.57902,46.93352],[8.58047,46.93478],[8.57991,46.93644],[8.58279,46.93936],[8.58267,46.94077],[8.58422,46.94221],[8.58446,46.94324],[8.58548,46.94467],[8.58593,46.94650],[8.58507,46.94755],[8.58596,46.94916],[8.58695,46.94999],[8.58745,46.95169],[8.58886,46.95397],[8.58890,46.95507],[8.59000,46.95567],[8.58952,46.95613],[8.58975,46.95726],[8.59035,46.95775],[8.59040,46.95900],[8.58976,46.95959],[8.59099,46.95975],[8.59187,46.96115],[8.59165,46.96159],[8.59212,46.96156],[8.59211,46.96205],[8.59272,46.96260],[8.59328,46.96266],[8.59290,46.96413],[8.59310,46.96490],[8.59401,46.96572],[8.59381,46.96703],[8.59435,46.96747],[8.59346,46.97030],[8.59305,46.97041],[8.59320,46.97078],[8.59236,46.97100],[8.59213,46.97277],[8.59253,46.97365],[8.59180,46.97500],[8.59193,46.97581],[8.59430,46.97861],[8.59450,46.97953],[8.59530,46.98014],[8.59673,46.98282],[8.59506,46.98592],[8.59327,46.98687],[8.59120,46.98709],[8.58913,46.98803],[8.58568,46.98729],[8.57627,46.98429],[8.56967,46.98265],[8.56779,46.98139],[8.56479,46.98059],[8.56092,46.97894],[8.55959,46.97707],[8.55840,46.97643],[8.55643,46.97599],[8.55410,46.97506],[8.55417,46.97464],[8.55390,46.97501],[8.54798,46.97266],[8.54544,46.97270],[8.54411,46.97207],[8.54369,46.97204],[8.54403,46.97227],[8.54075,46.97174],[8.54022,46.97126],[8.53869,46.97128],[8.52988,46.96937],[8.52682,46.96899],[8.52465,46.96831],[8.52458,46.96800],[8.52440,46.96820],[8.52321,46.96792],[8.51349,46.96395],[8.50746,46.96316],[8.50746,46.96255],[8.50800,46.96263],[8.50817,46.96239],[8.50762,46.96219],[8.50720,46.96232],[8.50700,46.96298],[8.50537,46.96253],[8.50451,46.96250],[8.50440,46.96274],[8.50247,46.96235],[8.50094,46.96248],[8.50062,46.96227],[8.50074,46.96253],[8.49529,46.96206],[8.49127,46.96315],[8.49118,46.96280],[8.48933,46.96281],[8.48588,46.96339],[8.48369,46.96411],[8.48057,46.96423],[8.47941,46.96398],[8.47825,46.96436],[8.47734,46.96485],[8.47560,46.96698],[8.47264,46.96903],[8.47112,46.96986],[8.47067,46.96980],[8.46925,46.97086],[8.46832,46.97088],[8.46597,46.97210],[8.46456,46.97144],[8.45975,46.97210],[8.45955,46.97186],[8.45955,46.97213],[8.45491,46.97117],[8.45459,46.97135],[8.45461,46.97110],[8.45451,46.97134],[8.45243,46.97139],[8.45271,46.97121],[8.45235,46.97111],[8.45180,46.97153],[8.44897,46.97176],[8.44873,46.97152],[8.44808,46.97204],[8.44597,46.97257],[8.44513,46.97347],[8.44083,46.97476],[8.43375,46.97512],[8.43126,46.97446],[8.42664,46.97508],[8.42511,46.97595],[8.42405,46.97734],[8.42573,46.97867],[8.42548,46.97909],[8.42447,46.97914],[8.42449,46.97885],[8.42400,46.97873],[8.42386,46.97900],[8.42280,46.97883],[8.42156,46.97915],[8.42164,46.97975],[8.42073,46.98042],[8.42166,46.97953],[8.42112,46.97919],[8.42056,46.97959],[8.41975,46.97905],[8.41937,46.97932],[8.42053,46.98020],[8.42044,46.98064],[8.41952,46.98095],[8.42039,46.98063],[8.41999,46.98013],[8.41936,46.98090],[8.41908,46.98098],[8.41913,46.98068],[8.41813,46.98132],[8.41756,46.98220],[8.41746,46.98349],[8.41792,46.98567],[8.41831,46.98587],[8.41831,46.98706],[8.41879,46.98698],[8.41882,46.98727],[8.41915,46.98692],[8.41942,46.98734],[8.42397,46.98849],[8.42867,46.99045],[8.43566,46.99207],[8.43953,46.99360],[8.44574,46.99436],[8.44769,46.99487],[8.45184,46.99461],[8.45294,46.99498],[8.45515,46.99459],[8.45912,46.99539],[8.45994,46.99652],[8.46212,46.99707],[8.46297,46.99775],[8.46186,46.99887],[8.45796,47.00036],[8.45059,47.00150],[8.44668,47.00181],[8.44566,47.00178],[8.44523,47.00112],[8.44343,47.00052],[8.44246,47.00082],[8.44087,47.00070],[8.43961,47.00106],[8.43509,47.00149],[8.43441,47.00183],[8.43450,47.00219],[8.43282,47.00217],[8.43150,47.00255],[8.42908,47.00196],[8.42478,47.00246],[8.41921,47.00172],[8.41844,47.00205],[8.41285,47.00245],[8.40735,47.00367],[8.40253,47.00334],[8.40126,47.00371],[8.39808,47.00390],[8.39090,47.00400],[8.39005,47.00360],[8.38700,47.00351],[8.38471,47.00285],[8.38314,47.00278],[8.38232,47.00303],[8.37540,47.00284],[8.36997,47.00360],[8.36828,47.00357],[8.36698,47.00224],[8.36588,47.00039],[8.36445,46.99932],[8.36399,46.99750],[8.36270,46.99628],[8.35963,46.99440],[8.35535,46.99293],[8.35524,46.99183],[8.35453,46.99090],[8.35332,46.98981],[8.35205,46.98925],[8.35131,46.98819],[8.35176,46.98654],[8.35134,46.98539],[8.34948,46.98510],[8.34866,46.98462],[8.34832,46.98342],[8.34666,46.98289],[8.34616,46.98207],[8.34508,46.98244],[8.34280,46.98210],[8.34183,46.98138],[8.34198,46.98117],[8.34110,46.98143],[8.34167,46.98168],[8.33996,46.98091],[8.33913,46.98114],[8.33946,46.98089],[8.33898,46.98060],[8.33824,46.98118],[8.33810,46.98057],[8.33786,46.98099],[8.33691,46.98047],[8.33660,46.98065],[8.33705,46.98080],[8.33653,46.98091],[8.33586,46.98052],[8.33606,46.98035],[8.33473,46.97993],[8.33611,46.98033],[8.33664,46.97973],[8.33438,46.97895],[8.33404,46.97956],[8.33435,46.97984],[8.33353,46.97946],[8.33373,46.97899],[8.33306,46.97934],[8.33272,46.97660],[8.33502,46.97578],[8.33648,46.97475],[8.33721,46.97361],[8.33752,46.97202],[8.33712,46.97165],[8.33741,46.97122],[8.33705,46.97137],[8.33591,46.96927],[8.33384,46.96823],[8.33391,46.96768],[8.33311,46.96759],[8.33316,46.96736],[8.33265,46.96779],[8.33167,46.96739],[8.33201,46.96692],[8.33169,46.96679],[8.33134,46.96725],[8.33067,46.96697],[8.33089,46.96652],[8.33047,46.96689],[8.33008,46.96673],[8.33032,46.96636],[8.32929,46.96611],[8.32881,46.96497],[8.32504,46.96336],[8.32324,46.96269],[8.32100,46.96244],[8.31973,46.96148],[8.31310,46.95918],[8.30628,46.95575],[8.30453,46.95558],[8.30311,46.95444],[8.30185,46.95409],[8.29945,46.95226],[8.29854,46.95290],[8.29737,46.95310],[8.29886,46.95257],[8.29721,46.95194],[8.29686,46.95096],[8.29435,46.95203],[8.29572,46.95353],[8.29421,46.95211],[8.29272,46.95298],[8.29548,46.95425],[8.29660,46.95358],[8.29642,46.95414],[8.29577,46.95451],[8.29452,46.95468],[8.29493,46.95432],[8.29460,46.95404],[8.29340,46.95443],[8.29226,46.95293],[8.29033,46.95321],[8.29168,46.95515],[8.29115,46.95609],[8.29000,46.95618],[8.28920,46.95561],[8.28904,46.95443],[8.29009,46.95431],[8.29056,46.95371],[8.29021,46.95327],[8.28789,46.95314],[8.28820,46.95446],[8.28788,46.95498],[8.28853,46.95646],[8.28569,46.95414],[8.28632,46.95370],[8.28483,46.95371],[8.28510,46.95483],[8.28454,46.95515],[8.28377,46.95418],[8.28379,46.95487],[8.28313,46.95404],[8.28237,46.95417],[8.28190,46.95339],[8.28143,46.95351],[8.28182,46.95366],[8.28145,46.95393],[8.27995,46.95416],[8.28034,46.95456],[8.27878,46.95524],[8.27958,46.95662],[8.28247,46.95867],[8.28553,46.96021],[8.28654,46.96061],[8.28753,46.96043],[8.28944,46.96166],[8.29042,46.96272],[8.29318,46.96315],[8.29410,46.96357],[8.29386,46.96561],[8.29461,46.96627],[8.29828,46.96739],[8.30256,46.96807],[8.30798,46.96961],[8.30988,46.96948],[8.31188,46.96876],[8.31611,46.96957],[8.32079,46.97117],[8.32485,46.97207],[8.32971,46.97360],[8.33100,46.97449],[8.33092,46.97643],[8.33146,46.97813],[8.33123,46.97920],[8.32861,46.98008],[8.32713,46.98014],[8.32547,46.97941],[8.32215,46.97889],[8.31234,46.97949],[8.31185,46.98144],[8.31241,46.98231],[8.31271,46.98649],[8.31478,46.98871],[8.31699,46.98978],[8.31608,46.99079],[8.31616,46.99194],[8.31565,46.99277],[8.31589,46.99319],[8.31498,46.99399],[8.31455,46.99483],[8.31471,46.99546],[8.31368,46.99596],[8.31304,46.99679],[8.31319,46.99745],[8.31246,46.99790],[8.31165,47.00117],[8.30970,47.00290],[8.30905,47.00400],[8.30654,47.00488],[8.30573,47.00589],[8.30556,47.00632],[8.30650,47.00784],[8.30618,47.00827],[8.30647,47.00868],[8.30862,47.00946],[8.30927,47.00902],[8.30997,47.00943],[8.30984,47.00970],[8.31103,47.01009],[8.31233,47.01000],[8.31263,47.01049],[8.31382,47.01089],[8.31409,47.01063],[8.31528,47.01102],[8.31556,47.01159],[8.31671,47.01174],[8.31764,47.01114],[8.31853,47.00964],[8.31990,47.00835],[8.32090,47.00457],[8.32172,47.00366],[8.32356,47.00290],[8.32515,47.00280],[8.32743,47.00095],[8.32924,47.00035],[8.33061,47.00059],[8.33179,47.00149],[8.33339,47.00189],[8.33386,47.00220],[8.33380,47.00259],[8.33401,47.00241],[8.33496,47.00302],[8.33499,47.00355],[8.33761,47.00414],[8.33972,47.00517],[8.34135,47.00517],[8.34171,47.00570],[8.34107,47.00695],[8.34059,47.01165],[8.34102,47.01305],[8.34214,47.01394],[8.34104,47.01464],[8.34085,47.01545],[8.33945,47.01574],[8.33905,47.01640],[8.33927,47.01686],[8.34261,47.01802],[8.34122,47.01907],[8.34084,47.02008],[8.33744,47.02174],[8.33641,47.02371],[8.33646,47.02692],[8.33737,47.02869],[8.33965,47.03076],[8.33891,47.03091],[8.33832,47.03176],[8.33836,47.03278],[8.33718,47.03278],[8.33686,47.03354],[8.33620,47.03386],[8.33621,47.03433],[8.33487,47.03459],[8.33350,47.03548],[8.33325,47.03634],[8.33139,47.03703],[8.33089,47.03768],[8.33084,47.03891],[8.32998,47.03992],[8.33010,47.04066],[8.33057,47.04097],[8.33034,47.04120],[8.33092,47.04180],[8.33036,47.04288],[8.32509,47.04238],[8.32453,47.04288],[8.32465,47.04324],[8.32375,47.04376],[8.32320,47.04367],[8.32074,47.04539],[8.32344,47.04568],[8.32225,47.04609],[8.32033,47.04751],[8.31906,47.04657],[8.31793,47.04736],[8.31893,47.04804],[8.31846,47.04834],[8.31813,47.04792],[8.31625,47.04741],[8.31613,47.04791],[8.31438,47.04877],[8.31499,47.04917],[8.31409,47.05026],[8.31316,47.05014],[8.31235,47.05145],[8.31148,47.05137]]],
  inner: [[[8.31219,47.05427],[8.31141,47.05408],[8.31219,47.05427]],[[8.60866,46.89621],[8.60800,46.89610],[8.60866,46.89621]],[[8.60735,46.89554],[8.60810,46.89592],[8.60851,46.89564],[8.60735,46.89554]],[[8.60370,46.89217],[8.60445,46.89318],[8.60362,46.89253],[8.60370,46.89217]],[[8.60454,46.89327],[8.60447,46.89362],[8.60502,46.89360],[8.60454,46.89327]],[[8.60639,46.89494],[8.60704,46.89536],[8.60766,46.89532],[8.60639,46.89494]],[[8.60562,46.89387],[8.60515,46.89407],[8.60562,46.89387]],[[8.32304,47.04436],[8.32373,47.04419],[8.32304,47.04436]],[[8.32265,47.04425],[8.32383,47.04389],[8.32265,47.04425]],[[8.36261,47.03267],[8.36196,47.03221],[8.36281,47.03216],[8.36334,47.03267],[8.36280,47.03289],[8.36261,47.03267]],[[8.35791,47.03324],[8.35779,47.03316],[8.35791,47.03324]],[[8.61782,46.90067],[8.61760,46.89988],[8.61828,46.90050],[8.61782,46.90067]],[[8.61792,46.90089],[8.61950,46.90024],[8.61905,46.90084],[8.61792,46.90089]],[[8.29256,46.95550],[8.29419,46.95545],[8.29285,46.95472],[8.29218,46.95551],[8.29281,46.95591],[8.29256,46.95550]],[[8.46821,47.02146],[8.46828,47.02141],[8.46821,47.02146]]] };
SW.LAKES.zugersee = { name: 'Zugersee', bbox: [8.45291, 47.06147, 8.52814, 47.18288],
  outer: [[[8.47819,47.17836],[8.48123,47.17789],[8.48136,47.17677],[8.48077,47.17637],[8.48121,47.17588],[8.48183,47.17601],[8.48217,47.17697],[8.48316,47.17738],[8.48729,47.17806],[8.49254,47.17751],[8.49209,47.17715],[8.49151,47.17749],[8.49224,47.17676],[8.49524,47.17686],[8.49625,47.17643],[8.49575,47.17599],[8.49605,47.17569],[8.49654,47.17574],[8.49697,47.17627],[8.49732,47.17616],[8.49765,47.17494],[8.49876,47.17523],[8.50143,47.17512],[8.50426,47.17281],[8.50499,47.17256],[8.50528,47.17272],[8.50507,47.17241],[8.50629,47.17209],[8.50721,47.17129],[8.50730,47.17169],[8.50761,47.17124],[8.50828,47.17137],[8.50817,47.17182],[8.50908,47.17180],[8.51108,47.17121],[8.51299,47.17018],[8.51355,47.17023],[8.51414,47.16934],[8.51374,47.16903],[8.51426,47.16753],[8.51407,47.16728],[8.51354,47.16740],[8.51416,47.16630],[8.51309,47.16466],[8.51231,47.15938],[8.51135,47.15743],[8.50970,47.15619],[8.51091,47.15515],[8.51091,47.15414],[8.50984,47.15350],[8.50867,47.15212],[8.50838,47.15028],[8.50704,47.15019],[8.50720,47.14944],[8.50670,47.14904],[8.50690,47.14856],[8.50637,47.14763],[8.50494,47.14718],[8.50573,47.14610],[8.50542,47.14547],[8.50557,47.14289],[8.50427,47.13932],[8.50597,47.13724],[8.50605,47.13627],[8.50205,47.13134],[8.50063,47.13090],[8.49965,47.13019],[8.49828,47.12814],[8.49793,47.12587],[8.49476,47.12360],[8.49582,47.12168],[8.49645,47.11907],[8.49732,47.11771],[8.49835,47.11750],[8.49947,47.11682],[8.49976,47.11515],[8.50056,47.11423],[8.50118,47.11248],[8.50237,47.11114],[8.50255,47.10994],[8.50362,47.10797],[8.50538,47.10756],[8.50593,47.10650],[8.50808,47.10612],[8.50921,47.10316],[8.51038,47.10236],[8.51112,47.10123],[8.51201,47.10085],[8.51283,47.09941],[8.51453,47.09851],[8.51565,47.09629],[8.51687,47.09541],[8.51813,47.09550],[8.51815,47.09512],[8.51903,47.09461],[8.51909,47.09360],[8.52074,47.09252],[8.52109,47.09062],[8.52206,47.08976],[8.52254,47.08983],[8.52357,47.08932],[8.52384,47.08838],[8.52287,47.08626],[8.52325,47.08573],[8.52323,47.08459],[8.52293,47.08413],[8.52228,47.08411],[8.52314,47.08239],[8.52307,47.08147],[8.52461,47.07934],[8.52573,47.07670],[8.52658,47.07609],[8.52812,47.07344],[8.52814,47.07171],[8.52791,47.07044],[8.52708,47.06918],[8.52636,47.06880],[8.52518,47.06871],[8.52530,47.06783],[8.52467,47.06664],[8.52255,47.06504],[8.52212,47.06409],[8.52142,47.06362],[8.52122,47.06281],[8.52036,47.06218],[8.51742,47.06147],[8.51418,47.06163],[8.51236,47.06410],[8.51168,47.06432],[8.51119,47.06525],[8.51019,47.06582],[8.50945,47.06794],[8.50872,47.06855],[8.50597,47.06882],[8.50513,47.06994],[8.50325,47.07058],[8.50227,47.07058],[8.50000,47.07218],[8.49847,47.07229],[8.49635,47.07319],[8.49396,47.07476],[8.49026,47.07649],[8.48869,47.07838],[8.48513,47.07950],[8.48352,47.08086],[8.48333,47.08177],[8.48242,47.08204],[8.48169,47.08282],[8.47853,47.08446],[8.47719,47.08583],[8.47123,47.08730],[8.46882,47.08918],[8.46669,47.09212],[8.46535,47.09313],[8.46504,47.09460],[8.46405,47.09577],[8.46394,47.09661],[8.46443,47.09747],[8.46595,47.09797],[8.47111,47.10064],[8.47289,47.10165],[8.47452,47.10331],[8.47578,47.10380],[8.47556,47.10528],[8.47628,47.10615],[8.47799,47.10637],[8.48113,47.10735],[8.48336,47.10857],[8.48590,47.10910],[8.48660,47.10954],[8.48722,47.11049],[8.48744,47.11218],[8.48807,47.11267],[8.48691,47.11470],[8.48584,47.11471],[8.48503,47.11519],[8.48463,47.11502],[8.48323,47.11546],[8.48128,47.11455],[8.47862,47.11435],[8.47632,47.11475],[8.47568,47.11440],[8.47355,47.11455],[8.47234,47.11502],[8.47228,47.11563],[8.46997,47.11621],[8.46843,47.11711],[8.46766,47.11859],[8.46583,47.11955],[8.46523,47.12028],[8.46446,47.12169],[8.46509,47.12368],[8.46405,47.12654],[8.46431,47.12820],[8.46417,47.13000],[8.46387,47.13010],[8.46459,47.13114],[8.46784,47.13342],[8.46833,47.13502],[8.47175,47.13768],[8.47293,47.13964],[8.47234,47.14112],[8.47043,47.14119],[8.46936,47.14043],[8.46706,47.13952],[8.46657,47.13861],[8.46582,47.13844],[8.46383,47.13951],[8.46152,47.13974],[8.46005,47.14027],[8.45970,47.14088],[8.45823,47.14144],[8.45852,47.14216],[8.45801,47.14384],[8.45876,47.14618],[8.45769,47.14674],[8.45791,47.14772],[8.45762,47.14784],[8.45897,47.14825],[8.45970,47.15043],[8.46278,47.15124],[8.46174,47.15175],[8.46157,47.15480],[8.46268,47.15541],[8.46285,47.15588],[8.46390,47.15629],[8.46040,47.15745],[8.45968,47.15799],[8.45959,47.15905],[8.46075,47.15924],[8.46079,47.15970],[8.46131,47.15992],[8.46083,47.16008],[8.45970,47.16164],[8.45953,47.16315],[8.45823,47.16476],[8.45765,47.16638],[8.45421,47.16845],[8.45291,47.17201],[8.45572,47.17555],[8.45824,47.17669],[8.45893,47.17641],[8.45877,47.17686],[8.46151,47.17800],[8.46208,47.17886],[8.46168,47.17987],[8.46346,47.17857],[8.46704,47.17733],[8.46779,47.17784],[8.46794,47.17745],[8.46785,47.17847],[8.46844,47.17955],[8.46869,47.17948],[8.46837,47.17969],[8.46854,47.18003],[8.46938,47.18002],[8.46976,47.18033],[8.46950,47.18062],[8.47312,47.18159],[8.47522,47.18108],[8.47587,47.18128],[8.47575,47.18288],[8.47634,47.18200],[8.47765,47.18234],[8.47843,47.18195],[8.47851,47.18126],[8.47759,47.18032],[8.47801,47.17774],[8.47819,47.17836]]],
  inner: [[[8.49701,47.17454],[8.49699,47.17414],[8.49745,47.17422],[8.49741,47.17453],[8.49701,47.17454]],[[8.49619,47.12650],[8.49666,47.12669],[8.49619,47.12650]],[[8.46181,47.17811],[8.46203,47.17781],[8.46226,47.17838],[8.46181,47.17811]]] };

/* ---- js/router.js ---- */
/* Freie Routensuche auf dem See: schnellster Weg von Start zu Ziel bei dem Wind, der unterwegs herrscht.
   Gitter über die Wasserfläche, 16 Fahrtrichtungen, echter Bootsspeed aus der Polare (kein Fahren im toten Winkel),
   Wenden und Halsen kosten Zeit. Zeitabhängige Suche (früheste Ankunft) mit Binär-Heap. */
(function () {
  const C = SW.CONFIG, U = SW.util, A = SW.ana;
  const FR = SW.freeRoute = {};
  const masks = {};

  /* ---------- Wasserfläche rastern (einmal pro See) ---------- */
  FR.mask = function (lakeId) {
    const lc = C.route.lakes && C.route.lakes[lakeId], cell = (lc && lc.cellM) || C.route.free.cellM;   // Gitterweite pro See
    const key = lakeId + cell;
    if (masks[key]) return masks[key];
    const lake = SW.LAKES[lakeId];
    const [x0, y0, x1, y1] = lake.bbox;
    const lat0 = (y0 + y1) / 2;
    const dLat = cell / 110540, dLon = cell / (111320 * Math.cos(lat0 * Math.PI / 180));   // quadratische Zellen in Metern
    const nx = Math.ceil((x1 - x0) / dLon) + 1, ny = Math.ceil((y1 - y0) / dLat) + 1;
    const water = new Uint8Array(nx * ny);
    const rings = lake.outer.concat(lake.inner);
    for (let y = 0; y < ny; y++) {                                    // Scanlinie: Schnittpunkte mit allen Kanten (gerade-ungerade-Regel)
      const lat = y0 + y * dLat, xs = [];
      rings.forEach(r => {
        for (let k = 0, j = r.length - 1; k < r.length; j = k++) {
          const a = r[j], b = r[k];
          if ((a[1] > lat) !== (b[1] > lat)) xs.push(a[0] + (lat - a[1]) / (b[1] - a[1]) * (b[0] - a[0]));
        }
      });
      xs.sort((p, q) => p - q);
      for (let k = 0; k + 1 < xs.length; k += 2) {
        const from = Math.ceil((xs[k] - x0) / dLon), to = Math.floor((xs[k + 1] - x0) / dLon);
        for (let x = Math.max(0, from); x <= Math.min(nx - 1, to); x++) water[y * nx + x] = 1;
      }
    }
    return (masks[key] = { x0, y0, dLat, dLon, nx, ny, water, cell, lat0 });
  };
  FR.toCell = (M, p) => ({ x: Math.round((p.lon - M.x0) / M.dLon), y: Math.round((p.lat - M.y0) / M.dLat) });
  FR.toPos = (M, x, y) => ({ lat: M.y0 + y * M.dLat, lon: M.x0 + x * M.dLon });
  FR.isWater = (M, x, y) => x >= 0 && y >= 0 && x < M.nx && y < M.ny && M.water[y * M.nx + x] === 1;
  // Nächste Wasserzelle (Start/Ziel liegen oft am Steg oder Ufer)
  FR.snap = function (M, p, maxM) {
    const c = FR.toCell(M, p), R = Math.ceil((maxM || 600) / M.cell);
    let best = null;
    for (let r = 0; r <= R && !best; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) !== r || !FR.isWater(M, c.x + dx, c.y + dy)) continue;
      const d = dx * dx + dy * dy; if (!best || d < best.d) best = { x: c.x + dx, y: c.y + dy, d };
    }
    return best;
  };
  FR.covers = (lakeId, pts) => { if (!SW.LAKES || !SW.LAKES[lakeId]) return false; const M = FR.mask(lakeId); return pts.every(p => FR.snap(M, p, 800)); };
  // Auf welchem See liegt eine Strecke? (alle Punkte höchstens 800 m vom Wasser)
  FR.lakeOf = function (pts) {
    if (!SW.LAKES || !pts || !pts.length) return null;
    return Object.keys(SW.LAKES).find(id => { const b = SW.LAKES[id].bbox; return pts.every(p => p.lon > b[0] - 0.02 && p.lon < b[2] + 0.02 && p.lat > b[1] - 0.02 && p.lat < b[3] + 0.02) && FR.covers(id, pts); }) || null;
  };
  // Verbindungen über Land durch einen Wasserweg ersetzen: kürzester Weg im Gitter (mit Abstand zum Ufer), dann auf wenige
  // gerade, ganz im Wasser liegende Stücke vereinfacht. Zusätzliche Punkte sind mit auto: true markiert.
  const expandCache = new Map();
  FR.expand = function (pts) {
    const lake = FR.lakeOf(pts);
    if (!lake || pts.length < 2) return pts;
    const key = lake + JSON.stringify(pts.map(p => [p.lat, p.lon]));
    if (expandCache.has(key)) return expandCache.get(key);
    const M = FR.mask(lake), out = [pts[0]];
    for (let k = 0; k < pts.length - 1; k++) {
      const a = pts[k], b = pts[k + 1];
      if (!FR.segWater(M, a, b, true, true)) waterPath(M, a, b).forEach(p => out.push(Object.assign({ name: 'Wasserweg', auto: true }, p)));
      out.push(b);
    }
    expandCache.set(key, out);
    return out;
  };
  function waterPath(M, a, b) {
    const A = FR.snap(M, a, 800), B = FR.snap(M, b, 800); if (!A || !B) return [];
    const W = (x, y) => FR.isWater(M, x, y);
    const near = (x, y) => { let n = 0; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (!W(x + dx, y + dy)) n++; return n; };
    const N = M.nx * M.ny, dist = new Float64Array(N).fill(Infinity), prev = new Int32Array(N).fill(-1), heap = new Heap();
    const s = A.y * M.nx + A.x, g = B.y * M.nx + B.x; dist[s] = 0; heap.push(0, s);
    while (heap.a.length) {
      const [d, c] = heap.pop(); if (d > dist[c]) continue; if (c === g) break;
      const x = c % M.nx, y = (c / M.nx) | 0;
      for (const mv of MOVES) {
        if (!moveOk(M, x, y, mv)) continue;
        const nc = (y + mv.dy) * M.nx + x + mv.dx, nd = d + mv.len * (1 + 0.3 * near(x + mv.dx, y + mv.dy));   // Ufernähe kostet etwas
        if (nd < dist[nc]) { dist[nc] = nd; prev[nc] = c; heap.push(nd, nc); }
      }
    }
    if (prev[g] < 0) return [];
    const path = []; for (let c = g; c >= 0; c = prev[c]) path.unshift(FR.toPos(M, c % M.nx, (c / M.nx) | 0));
    path[0] = a; path[path.length - 1] = b;
    const keep = []; let i = 0;                                         // vereinfachen: möglichst lange gerade Stücke im Wasser
    while (i < path.length - 1) {
      let j = path.length - 1;
      while (j > i + 1 && !FR.segWater(M, path[i], path[j], i === 0, j === path.length - 1)) j--;
      if (j < path.length - 1) keep.push({ lat: +path[j].lat.toFixed(5), lon: +path[j].lon.toFixed(5) });
      i = j;
    }
    return keep;
  }
  FR.windPoints = id => { const lc = C.route.lakes && C.route.lakes[id]; return (lc && lc.windPoints) || C.route.lakeWindPoints; };
  FR.waterAt = (M, p) => { const c = FR.toCell(M, p); return FR.isWater(M, c.x, c.y); };
  // Liegt die Strecke a→b auf dem Wasser? Bei Wegpunkten (Ufer, Steg) die ersten/letzten 250 m nicht prüfen.
  FR.segWater = function (M, a, b, skipA, skipB) {
    const km = U.distKm(a, b), n = Math.max(2, Math.ceil(km * 1000 / 50));
    for (let k = 1; k < n; k++) {
      const f = k / n, dA = km * f, dB = km * (1 - f);
      if ((skipA && dA < 0.25) || (skipB && dB < 0.25)) continue;
      if (!FR.waterAt(M, { lat: U.lerp(a.lat, b.lat, f), lon: U.lerp(a.lon, b.lon, f) })) return false;
    }
    return true;
  };

  /* ---------- Fahrtrichtungen: 8 Nachbarn + 8 Springerzüge = 16 Kurse ---------- */
  const MOVES = [[0, 1], [1, 2], [1, 1], [2, 1], [1, 0], [2, -1], [1, -1], [1, -2], [0, -1], [-1, -2], [-1, -1], [-2, -1], [-1, 0], [-2, 1], [-1, 1], [-1, 2]]
    .map(([dx, dy]) => ({ dx, dy, len: Math.hypot(dx, dy), brg: (Math.atan2(dx, dy) * 180 / Math.PI + 360) % 360 }));
  function moveOk(M, x, y, m) {                                       // Zwischenpunkte müssen im Wasser liegen (nicht übers Ufer schneiden)
    if (!FR.isWater(M, x + m.dx, y + m.dy)) return false;
    for (const f of [0.25, 0.5, 0.75]) if (!FR.isWater(M, Math.round(x + m.dx * f), Math.round(y + m.dy * f))) return false;
    if (Math.abs(m.dx) === 1 && Math.abs(m.dy) === 1 && (!FR.isWater(M, x + m.dx, y) || !FR.isWater(M, x, y + m.dy))) return false;
    return true;
  }

  /* ---------- Bootsspeed-Tabelle (direkt aus der Polare, ohne VMG) ---------- */
  let PS = null;
  function speed(twa, tws) {
    if (!PS) { PS = []; for (let w = 0; w <= 40; w++) { const row = new Float32Array(181); for (let a = 0; a <= 180; a++) row[a] = A.polarSpeed(a, w); PS.push(row); } }
    const a = Math.round(U.clamp(twa, 0, 180)), w = U.clamp(tws, 0, 40), w0 = Math.floor(w), w1 = Math.min(40, w0 + 1);
    return U.lerp(PS[w0][a], PS[w1][a], w - w0);
  }

  /* ---------- Windfeld: pro Wasserzelle und Stunde vorrechnen ---------- */
  function windField(M, samples, sets, t0, hours) {
    const h = sets[0].hourly, i0 = U.indexAt(h.t, t0), slots = [];
    for (let k = 0; k <= hours && i0 + k < h.t.length; k++) slots.push(h.t[i0 + k]);
    const n = M.nx * M.ny, spd = [], dir = [];
    slots.forEach(t => {
      const s = new Float32Array(n).fill(NaN), d = new Float32Array(n).fill(NaN);
      for (let y = 0; y < M.ny; y++) for (let x = 0; x < M.nx; x++) {
        const c = y * M.nx + x; if (!M.water[c]) continue;
        const w = A.windAt(samples, sets, FR.toPos(M, x, y), t);
        if (w) { s[c] = w.spd; d[c] = w.dir; }
      }
      spd.push(s); dir.push(d);
    });
    return {
      slots,
      at(c, t) {                                                       // zeitlich linear, Richtung über den Kreis
        let k = Math.floor((t - slots[0]) / 3600); if (k < 0) k = 0;
        if (k >= slots.length - 1) { const z = slots.length - 1; return isNaN(spd[z][c]) || t > slots[z] + 3600 ? null : { spd: spd[z][c], dir: dir[z][c] }; }
        const f = (t - slots[k]) / 3600, a = spd[k][c], b = spd[k + 1][c];
        if (isNaN(a) || isNaN(b)) return null;
        return { spd: a + (b - a) * f, dir: U.circLerp(dir[k][c], dir[k + 1][c], f) };
      }
    };
  }

  /* ---------- Binär-Heap nach Ankunftszeit ---------- */
  function Heap() { this.a = []; }
  Heap.prototype.push = function (t, s) { const a = this.a; a.push([t, s]); let i = a.length - 1; while (i) { const p = (i - 1) >> 1; if (a[p][0] <= a[i][0]) break; [a[p], a[i]] = [a[i], a[p]]; i = p; } };
  Heap.prototype.pop = function () {
    const a = this.a, top = a[0], last = a.pop();
    if (a.length) { a[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < a.length && a[l][0] < a[m][0]) m = l; if (r < a.length && a[r][0] < a[m][0]) m = r; if (m === i) break; [a[m], a[i]] = [a[i], a[m]]; i = m; } }
    return top;
  };

  // Seite, von der der Wind einfällt: +1 = Steuerbord-Bug (Wind von rechts), −1 = Backbord-Bug
  const tack = (heading, windDir) => (((windDir - heading + 540) % 360) - 180 > 0 ? 1 : -1);

  /* ---------- Suche für eine Teilstrecke ---------- */
  function leg(M, F, from, to, t0, h0, factor) {
    const NS = M.nx * M.ny * 16, best = new Float64Array(NS).fill(Infinity), prev = new Int32Array(NS).fill(-1);
    const P = C.route.free, heap = new Heap(), goal = to.y * M.nx + to.x, startC = from.y * M.nx + from.x;
    const stateOf = (c, h) => c * 16 + h;
    // Startzustand: alle Kurse erlaubt; Manöver gegenüber dem bisherigen Kurs (h0) kosten trotzdem
    const s0 = stateOf(startC, h0 >= 0 ? h0 : 0); best[s0] = t0; heap.push(t0, s0);
    const firstFree = h0 < 0;
    let found = -1, pops = 0;
    while (heap.a.length) {
      const [t, s] = heap.pop();
      if (t > best[s]) continue;
      const c = (s / 16) | 0, hd = s % 16, x = c % M.nx, y = (c / M.nx) | 0;
      if (c === goal) { found = s; break; }
      if (++pops > P.maxStates) break;                                // Sicherung gegen endloses Suchen
      const w = F.at(c, t); if (!w) continue;                         // Prognose zu Ende
      for (let m = 0; m < 16; m++) {
        const mv = MOVES[m];
        if (!moveOk(M, x, y, mv)) continue;
        const twa = U.angDiff(mv.brg, w.dir);
        const v = speed(twa, w.spd) * factor;
        if (v < 0.3) continue;                                         // toter Winkel oder Flaute: diese Richtung geht nicht
        let dt = mv.len * M.cell / (v * 0.5144);                       // Sekunden für den Zug
        const isFirst = firstFree && c === startC && pops === 1;
        if (!isFirst && tack(MOVES[hd].brg, w.dir) !== tack(mv.brg, w.dir)) dt += twa < 90 ? P.tackS : P.gybeS;   // Wende oder Halse
        const ns = stateOf(c + mv.dy * M.nx + mv.dx, m), nt = t + dt;
        if (nt < best[ns]) { best[ns] = nt; prev[ns] = s; heap.push(nt, ns); }
      }
    }
    if (found < 0) return null;
    const path = []; for (let s = found; s >= 0; s = prev[s]) path.unshift({ c: (s / 16) | 0, h: s % 16, t: best[s] });
    return { path, end: best[found], h: found % 16 };
  }

  /* ---------- Öffentlich: Route über alle Marken ---------- */
  // pts: Start, (optional Bahnmarken), Ziel. Ergebnis: Punkte, Schläge zwischen Manövern, Wenden, Halsen.
  FR.route = function (lakeId, pts, samples, sets, startSec, factor) {
    const M = FR.mask(lakeId), P = C.route.free;
    const cells = pts.map(p => FR.snap(M, p, 800));
    if (cells.some(c => !c)) return { done: false, note: 'Start, Ziel oder Bahnmarke liegt nicht auf dem Vierwaldstättersee' };
    const F = windField(M, samples, sets, startSec, P.maxHours);
    if (F.slots.length < 2) return { done: false, note: 'Keine Winddaten für diese Zeit' };
    let t = startSec, h = -1, all = [];
    for (let k = 0; k < cells.length - 1; k++) {
      const r = leg(M, F, cells[k], cells[k + 1], t, h, factor || 1);
      if (!r) return { done: false, note: `Kein Weg gefunden (Etappe ${k + 1}): die Fahrt dauert länger, als die Prognose reicht – früher starten oder anderen Tag wählen` };
      all = all.concat(k ? r.path.slice(1) : r.path); t = r.end; h = r.h;
    }
    // Punkte mit Wind und Kurs anreichern, Manöver erkennen
    const pnts = all.map((p, i) => {
      const x = p.c % M.nx, y = (p.c / M.nx) | 0, w = F.at(all[Math.max(0, i - 1)].c, all[Math.max(0, i - 1)].t);
      return { pos: FR.toPos(M, x, y), t: p.t, brg: MOVES[p.h].brg, w };
    });
    const legs = []; let cur = null, tacks = 0, gybes = 0;
    for (let i = 1; i < pnts.length; i++) {
      const p = pnts[i], w = p.w; if (!w) continue;
      const side = tack(p.brg, w.dir), twa = U.angDiff(p.brg, w.dir), dist = U.distKm(pnts[i - 1].pos, p.pos);
      if (!cur || cur.side !== side) {
        if (cur) { if (U.angDiff(p.brg, w.dir) < 90) tacks++; else gybes++; cur.manEnd = twa < 90 ? 'Wende' : 'Halse'; }
        cur = { side, start: pnts[i - 1], km: 0, brgs: [], wts: [], twas: [], spds: [], dirs: [] }; legs.push(cur);
      }
      cur.km += dist; cur.end = p; cur.brgs.push(p.brg); cur.wts.push(dist); cur.twas.push(twa); cur.spds.push(w.spd); cur.dirs.push(w.dir);
    }
    const sch = legs.map(l => ({ start: l.start, end: l.end, km: l.km, dur: l.end.t - l.start.t, heading: U.circMean(l.brgs, l.wts),
      twa: U.mean(l.twas), tws: U.mean(l.spds), twd: U.circMean(l.dirs), bug: l.side > 0 ? 'Steuerbord-Bug' : 'Backbord-Bug', man: l.manEnd || null }));
    sch.forEach(s => { s.v = s.dur > 0 ? s.km / 1.852 / (s.dur / 3600) : null; s.mode = s.twa < 55 ? 'Am Wind' : s.twa < 80 ? 'Hoch am Wind' : s.twa < 115 ? 'Halbwind' : s.twa < 155 ? 'Raumschots' : 'Vor dem Wind'; });
    // Darstellung: je Schlag gerade Linie, falls sie im Wasser bleibt, sonst die Gitterpunkte
    const line = [pnts[0].pos];
    legs.forEach(l => {
      const seg = pnts.filter(p => p.t >= l.start.t && p.t <= l.end.t);
      if (straightOk(M, l.start.pos, l.end.pos)) line.push(l.end.pos); else seg.slice(1).forEach(p => line.push(p.pos));
    });
    return { done: true, start: startSec, end: t, duration: t - startSec, schlaege: sch, tacks, gybes, line, points: pnts,
      km: sch.reduce((s, x) => s + x.km, 0), cellM: M.cell };
  };
  function straightOk(M, a, b) {
    const n = Math.max(2, Math.ceil(U.distKm(a, b) * 1000 / (M.cell / 2)));
    for (let k = 1; k < n; k++) { const c = FR.toCell(M, { lat: U.lerp(a.lat, b.lat, k / n), lon: U.lerp(a.lon, b.lon, k / n) }); if (!FR.isWater(M, c.x, c.y)) return false; }
    return true;
  }
})();

/* ---- js/live.js ---- */
/* GPS-Live-Daten vom Gerät: Speed über Grund, Kurs über Grund, Strecke, Maximum, Fahrzeit, Bildschirm wach halten.
   Läuft seitenübergreifend weiter, bis der Benutzer stoppt. Keine Daten verlassen das Gerät. */
(function () {
  const U = SW.util;
  const MS_TO_KT = 1.943844;
  const LV = SW.live = { running: false, error: null, fix: null, stats: null, wake: false };
  let watchId = null, last = null, wakeLock = null, smooth = [], anchor = null;
  const subs = new Set();
  LV.on = fn => { subs.add(fn); return () => subs.delete(fn); };
  const emit = () => subs.forEach(fn => { try { fn(LV); } catch (e) { console.warn(e); } });

  LV.supported = () => 'geolocation' in navigator;
  LV.reset = function () { LV.stats = { start: Date.now(), dist: 0, max: 0, sum: 0, n: 0 }; emit(); };

  LV.start = function () {
    if (!LV.supported()) { LV.error = 'Dieses Gerät oder dieser Browser bietet kein GPS an.'; emit(); return; }
    if (LV.running) return;
    LV.running = true; LV.error = null; LV.reset();
    watchId = navigator.geolocation.watchPosition(onFix, onErr, { enableHighAccuracy: true, maximumAge: 1000, timeout: 20000 });  // GPS, nicht WLAN-Ortung
    emit();
  };
  LV.stop = function () {
    if (watchId !== null) navigator.geolocation.clearWatch(watchId);
    watchId = null; LV.running = false; last = null; smooth = []; anchor = null;
    LV.setWake(false);
    emit();
  };

  function onErr(e) {
    LV.error = e.code === 1 ? 'Standortzugriff verweigert. In den Einstellungen des Geräts für diese App bzw. Safari erlauben.'
      : e.code === 2 ? 'Kein GPS-Empfang.' : e.code === 3 ? 'GPS antwortet nicht (Zeitlimit).' : 'GPS-Fehler';
    if (e.code === 1) LV.stop(); else emit();
  }
  function onFix(p) {
    const c = p.coords, t = p.timestamp || Date.now();
    const pos = { lat: c.latitude, lon: c.longitude };
    let sog = U.isNum(c.speed) && c.speed >= 0 ? c.speed * MS_TO_KT : null;   // Speed vom GPS-Chip (genauer als aus Positionen)
    let cog = U.isNum(c.heading) && c.heading >= 0 ? c.heading : null;
    if (last) {
      const dt = (t - last.t) / 1000, d = U.distKm(last.pos, pos) * 1000;
      if (sog === null && dt >= 1 && c.accuracy < 50) sog = d / dt * MS_TO_KT;   // Ersatz: aus zwei Positionen
      // Ersatz-Kurs: gegenüber einem Ankerpunkt mindestens 10 m zurück (bei langsamer Fahrt sind Einzelschritte zu kurz)
      if (!anchor) anchor = last.pos;
      if (cog === null && U.distKm(anchor, pos) * 1000 > Math.max(10, c.accuracy)) cog = U.bearing(anchor, pos);
      if (U.distKm(anchor, pos) * 1000 > Math.max(10, c.accuracy)) anchor = pos;
      if (d > Math.max(3, c.accuracy * 0.5) && c.accuracy < 30 && dt < 30) LV.stats.dist += d / 1000;   // Zittern im Stand nicht mitzählen
    }
    // Glättung über die letzten 3 Werte, damit die grosse Zahl nicht flackert
    if (U.isNum(sog)) { smooth.push(sog); if (smooth.length > 3) smooth.shift(); }
    const sogS = smooth.length ? smooth.reduce((a, b) => a + b, 0) / smooth.length : null;
    if (U.isNum(sogS) && sogS < 0.4) cog = LV.fix ? LV.fix.cog : cog;          // im Stand Kurs halten statt springen
    if (U.isNum(sogS)) { LV.stats.max = Math.max(LV.stats.max, sogS); if (sogS > 0.5) { LV.stats.sum += sogS; LV.stats.n++; } }
    LV.fix = { t, pos, acc: c.accuracy, sog: sogS, cog: U.isNum(cog) ? cog : (LV.fix ? LV.fix.cog : null), alt: c.altitude };
    LV.error = null;
    last = { t, pos };
    emit();
  }

  /* Bildschirm wach halten (Screen Wake Lock, Safari ab iPadOS 16.4) */
  LV.wakeSupported = () => 'wakeLock' in navigator;
  LV.setWake = async function (on) {
    LV.wake = !!on;
    try {
      if (on && LV.wakeSupported()) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); }
      else if (wakeLock) { await wakeLock.release(); wakeLock = null; }
    } catch (e) { LV.wake = false; }
    emit();
  };
  document.addEventListener('visibilitychange', () => { if (!document.hidden && LV.wake && !wakeLock) LV.setWake(true); });  // nach App-Wechsel erneut anfordern
})();

/* ---- js/instruments.js ---- */
/* Bordinstrumente: Windgeber (z. B. NASA Clipper Wind) über NMEA 0183 oder Signal K, plus Windberechnung.
   Quellen:
   - signalk: Signal-K-Server an Bord (WebSocket, ws:// oder wss://), z. B. Raspberry Pi mit NMEA-0183-Adapter
   - serial:  NMEA-0183-USB-Adapter direkt am Laptop (Web Serial, nur Chrome/Edge am Computer, nicht iPad)
   - demo:    simulierte Werte zum Ausprobieren
   Gelesen werden MWV (Wind), VWR, VHW (Fahrt durchs Wasser), HDG/HDM/HDT (Steuerkurs), RMC (GPS). */
(function () {
  const U = SW.util;
  const KN = { N: 1, K: 0.539957, M: 1.943844 };                    // Einheiten in MWV: Knoten, km/h, m/s
  const I = SW.inst = { state: 'off', source: null, error: null, data: {}, lastMsg: 0, count: 0 };
  const subs = new Set();
  I.on = fn => { subs.add(fn); return () => subs.delete(fn); };
  const emit = () => subs.forEach(fn => { try { fn(I); } catch (e) { console.warn(e); } });
  let ws = null, port = null, reader = null, demoTimer = null, retry = null, stopped = true;

  // Messwert ablegen (immer mit Zeitstempel, damit veraltete Werte erkannt werden)
  function put(k, v) { if (U.isNum(v)) { I.data[k] = { v, t: Date.now() }; } }
  I.get = (k, maxAgeS) => { const x = I.data[k]; return x && Date.now() - x.t < (maxAgeS || 10) * 1000 ? x.v : null; };
  I.live = () => I.state === 'on' && Date.now() - I.lastMsg < 10000;

  /* ---------- NMEA 0183 ---------- */
  I.parseNmea = function (line) {
    line = String(line).trim();
    if (!/^[$!]/.test(line)) return false;
    const star = line.indexOf('*');
    if (star > 0) {                                                  // Prüfsumme prüfen, falls vorhanden
      let cs = 0; for (let k = 1; k < star; k++) cs ^= line.charCodeAt(k);
      if (parseInt(line.slice(star + 1, star + 3), 16) !== cs) return false;
      line = line.slice(0, star);
    }
    const f = line.split(','), type = f[0].slice(3);                 // $IIMWV → MWV (Talker-ID egal)
    const n = k => (f[k] === undefined || f[k] === '' ? null : parseFloat(f[k]));
    if (type === 'MWV' && f[5] === 'A') {                            // Windwinkel 0–360 relativ zum Bug, R = scheinbar, T = wahr
      let ang = n(1); if (!U.isNum(ang)) return false;
      if (ang > 180) ang -= 360;                                     // −180…180, positiv = Steuerbord
      const spd = n(3) * (KN[f[4]] || 1);
      if (f[2] === 'R') { put('awa', ang); put('aws', spd); } else { put('twaSensor', ang); put('twsSensor', spd); }
    } else if (type === 'VWR') {                                     // Windwinkel 0–180 mit L/R
      const ang = n(1), spd = n(3); if (!U.isNum(ang)) return false;
      put('awa', f[2] === 'L' ? -ang : ang); put('aws', spd);
    } else if (type === 'VHW') { put('stw', n(5)); if (U.isNum(n(1))) put('hdg', n(1)); else if (U.isNum(n(3))) put('hdg', n(3)); }
    else if (type === 'HDT' || type === 'HDM') put('hdg', n(1));
    else if (type === 'HDG') put('hdg', n(1));
    else if (type === 'RMC' && f[2] === 'A') { put('sog', n(7)); put('cog', n(8)); }
    else return false;
    I.lastMsg = Date.now(); I.count++;
    return true;
  };

  /* ---------- Signal K ---------- */
  const RAD = 180 / Math.PI, MS = 1.943844;
  const SK = {
    'environment.wind.angleApparent': v => put('awa', v * RAD),
    'environment.wind.speedApparent': v => put('aws', v * MS),
    'environment.wind.angleTrueWater': v => put('twaSensor', v * RAD),
    'environment.wind.speedTrue': v => put('twsSensor', v * MS),
    'navigation.speedThroughWater': v => put('stw', v * MS),
    'navigation.headingTrue': v => put('hdg', v * RAD),
    'navigation.headingMagnetic': v => { if (!I.get('hdgTrue')) put('hdg', v * RAD); },
    'navigation.speedOverGround': v => put('sog', v * MS),
    'navigation.courseOverGroundTrue': v => put('cog', ((v * RAD) + 360) % 360)
  };
  I.parseSignalK = function (msg) {
    let ok = false;
    (msg.updates || []).forEach(u => (u.values || []).forEach(x => { if (SK[x.path] && typeof x.value === 'number') { SK[x.path](x.value); ok = true; } }));
    if (ok) { I.lastMsg = Date.now(); I.count++; }
    return ok;
  };

  /* ---------- Verbinden ---------- */
  I.start = async function (source, url) {
    I.stop(); stopped = false;
    I.source = source; I.error = null; I.state = 'connecting'; I.count = 0; emit();
    try {
      if (source === 'demo') return startDemo();
      if (source === 'signalk') return startSignalK(url);
      if (source === 'serial') return await startSerial();
      throw new Error('Unbekannte Quelle');
    } catch (e) { I.state = 'error'; I.error = e.message || String(e); emit(); }
  };
  I.stop = function () {
    stopped = true;
    clearTimeout(retry); clearInterval(demoTimer); demoTimer = null;
    if (ws) { try { ws.close(); } catch (e) {} ws = null; }
    if (reader) { try { reader.cancel(); } catch (e) {} reader = null; }
    if (port) { try { port.close(); } catch (e) {} port = null; }
    I.state = 'off'; emit();
  };

  function startSignalK(url) {
    if (!url) throw new Error('Adresse des Signal-K-Servers fehlt');
    let u = url.trim();
    if (!/^wss?:\/\//.test(u)) u = (location.protocol === 'https:' ? 'wss://' : 'ws://') + u.replace(/^https?:\/\//, '');
    if (!/\/signalk\//.test(u)) u = u.replace(/\/$/, '') + '/signalk/v1/stream?subscribe=self';
    if (location.protocol === 'https:' && u.startsWith('ws://')) throw new Error('Die App läuft über HTTPS, darum verlangt der Browser wss:// (Signal K mit SSL). Alternativ die App direkt vom Bordserver öffnen.');
    ws = new WebSocket(u);
    ws.onopen = () => { I.state = 'on'; I.error = null; emit(); };
    ws.onmessage = ev => { try { if (I.parseSignalK(JSON.parse(ev.data))) emit(); } catch (e) { /* keine JSON-Nachricht */ } };
    ws.onerror = () => { I.error = 'Signal-K-Server nicht erreichbar (' + u + ')'; };
    ws.onclose = () => { if (stopped) return; I.state = 'connecting'; emit(); retry = setTimeout(() => { if (!stopped) startSignalK(url); }, 5000); };  // automatisch neu verbinden
  }

  async function startSerial() {
    if (!('serial' in navigator)) throw new Error('Direkter USB-Anschluss geht nur in Chrome oder Edge am Computer (nicht auf dem iPad).');
    port = await navigator.serial.requestPort();                    // Benutzer wählt den NMEA-Adapter
    await port.open({ baudRate: 4800 });                            // NMEA 0183 Standard (Clipper Wind: 4800 Baud)
    I.state = 'on'; emit();
    const dec = new TextDecoderStream(); port.readable.pipeTo(dec.writable).catch(() => {});
    reader = dec.readable.getReader();
    let buf = '';
    for (;;) {
      const { value, done } = await reader.read();
      if (done || stopped) break;
      buf += value; const lines = buf.split(/\r?\n/); buf = lines.pop();
      let any = false; lines.forEach(l => { if (I.parseNmea(l)) any = true; });
      if (any) emit();
    }
  }

  function startDemo() {                                            // simulierter Am-Wind-Kurs mit Winddrehern
    I.state = 'on'; emit();
    let t = 0;
    demoTimer = setInterval(() => {
      t += 1;
      const tws = 12 + 3 * Math.sin(t / 25), twd = 250 + 12 * Math.sin(t / 40), hdg = (twd + 45 + 360) % 360, bs = 5.2 + 0.6 * Math.sin(t / 15);
      const ap = SW.wind.apparent(tws, 45, bs);
      const cs = s => { let c = 0; for (let k = 1; k < s.length; k++) c ^= s.charCodeAt(k); return s + '*' + c.toString(16).toUpperCase().padStart(2, '0'); };
      I.parseNmea(cs(`$WIMWV,${((ap.awa + 360) % 360).toFixed(1)},R,${ap.aws.toFixed(1)},N,A`));
      I.parseNmea(cs(`$IIVHW,,T,${hdg.toFixed(1)},M,${bs.toFixed(1)},N,,K`));
      emit();
    }, 1000);
  }

  /* ---------- Windberechnung ---------- */
  // Wahrer Wind aus scheinbarem Wind und Bootsbewegung. Winkel in Grad, positiv = Steuerbord.
  SW.wind = {
    true(aws, awa, bs, hdg) {
      if (!U.isNum(aws) || !U.isNum(awa)) return null;
      const b = U.isNum(bs) ? bs : 0, a = awa * Math.PI / 180;
      const u = aws * Math.cos(a) - b, v = aws * Math.sin(a);       // Wind relativ zum Wasser in Bootsachsen
      const tws = Math.hypot(u, v), twa = Math.atan2(v, u) * 180 / Math.PI;
      return { tws, twa, twd: U.isNum(hdg) ? ((hdg + twa) % 360 + 360) % 360 : null };
    },
    // Scheinbarer Wind aus wahrem Wind und Bootsbewegung (wenn kein Windgeber da ist: aus Modellwind + GPS)
    apparent(tws, twa, bs) {
      if (!U.isNum(tws) || !U.isNum(twa)) return null;
      const b = U.isNum(bs) ? bs : 0, a = twa * Math.PI / 180;
      const u = tws * Math.cos(a) + b, v = tws * Math.sin(a);
      return { aws: Math.hypot(u, v), awa: Math.atan2(v, u) * 180 / Math.PI };
    },
    signedAngle: (fromDir, heading) => ((((fromDir - heading) % 360) + 540) % 360) - 180   // Wind aus fromDir relativ zum Kurs, −180…180
  };
})();

/* ---- js/nav.js ---- */
/* Routenführung: gestartete Route verfolgen (Abweichung, Restweg, nächstes Manöver) und im gewählten Intervall
   von der aktuellen GPS-Position aus mit neuen Winddaten neu berechnen. Zustand bleibt gespeichert (auch nach Neustart). */
(function () {
  const U = SW.util, C = SW.CONFIG, RT = C.route;
  const N = SW.nav = { busy: false, error: null };
  const subs = new Set();
  N.on = fn => { subs.add(fn); return () => subs.delete(fn); };
  const emit = () => subs.forEach(fn => { try { fn(N); } catch (e) { console.warn(e); } });
  N.state = () => SW.settings.nav && SW.settings.nav.active ? SW.settings.nav : null;
  const save = patch => { SW.saveSettings({ nav: Object.assign({}, SW.settings.nav || {}, patch) }); emit(); };

  // Lokale Meter-Koordinaten um einen Bezugspunkt (genau genug für einige Kilometer)
  const toXY = (o, p) => ({ x: (p.lon - o.lon) * 111320 * Math.cos(o.lat * Math.PI / 180), y: (p.lat - o.lat) * 110540 });

  // Route aus einem Ergebnis der freien Routensuche übernehmen
  function fromResult(fr) {
    const line = fr.line.map(p => [+p.lat.toFixed(5), +p.lon.toFixed(5)]);
    const man = fr.schlaege.filter(s => s.man).map(s => ({ lat: +s.end.pos.lat.toFixed(5), lon: +s.end.pos.lon.toFixed(5), type: s.man, t: s.end.t, heading: Math.round(s.heading) }));
    const cum = [0]; for (let k = 1; k < line.length; k++) cum.push(cum[k - 1] + U.distKm({ lat: line[k - 1][0], lon: line[k - 1][1] }, { lat: line[k][0], lon: line[k][1] }));
    let pos = 0;
    man.forEach(m => { m.along = project({ line, cum }, m, pos).along; pos = m.along; });   // Lage der Manöver der Reihe nach
    return { line, cum, man, plannedEnd: fr.end, plannedStart: fr.start, tacks: fr.tacks, gybes: fr.gybes, km: fr.km };
  }

  // Bojen/Bahnmarken der Reihe nach auf der Linie verorten (Regatta: gleiche Boje kommt mehrmals vor)
  function placeMarks(st, marks) {
    let pos = 0;
    return (marks || []).map(m => { const a = project(st, m, pos).along; pos = a; return Object.assign({}, m, { along: a }); });
  }
  N.start = function (o) {
    // o: { name, ziel, marks, factor, fr }
    const r = fromResult(o.fr);
    lastAlong = 0; firstFix = true;
    SW.saveSettings({ nav: Object.assign({ active: true, name: o.name, lake: o.lake, ziel: o.ziel, factor: o.factor || 1, regatta: o.regatta || null, lines: o.lines || null,
      startedAt: Date.now(), calcAt: Date.now(), interval: (SW.settings.nav && SW.settings.nav.interval) || 10, tol: 150 }, r, { marks: placeMarks(r, o.marks) }) });
    emit();
  };
  let lastAlong = 0, firstFix = true;                                 // Fortschritt entlang der Bahn (verhindert Sprünge auf spätere Bahnteile)
  N.stop = function () { save({ active: false }); };
  N.setInterval = min => save({ interval: min });
  N.toggleMap = () => save({ showMap: !(SW.settings.nav || {}).showMap });

  // Position auf die Linie projizieren: Querabstand (XTE, + = Steuerbord der Linie), Weg entlang der Linie, Restweg
  function project(st, p, from, to) {
    let best = null;
    for (let k = 0; k < st.line.length - 1; k++) {
      if (from !== undefined && st.cum[k + 1] < from) continue;           // nur Abschnitte im Suchfenster
      if (to !== undefined && st.cum[k] > to) break;
      const a = { lat: st.line[k][0], lon: st.line[k][1] }, b = { lat: st.line[k + 1][0], lon: st.line[k + 1][1] };
      const B = toXY(a, b), P = toXY(a, p), L2 = B.x * B.x + B.y * B.y;
      const f = L2 ? U.clamp((P.x * B.x + P.y * B.y) / L2, 0, 1) : 0;
      const dx = P.x - f * B.x, dy = P.y - f * B.y, d = Math.hypot(dx, dy);
      if (!best || d < best.d) best = { d, k, f, side: (B.x * P.y - B.y * P.x) < 0 ? 1 : -1, segKm: Math.sqrt(L2) / 1000 };   // Kreuzprodukt: rechts = Steuerbord
    }
    if (!best) return { xte: null, along: 0 };
    const along = st.cum[best.k] + best.f * best.segKm;
    return { xte: best.d * best.side, along, k: best.k };
  }

  // Lage gegenüber der Route für die Anzeige
  N.progress = function (pos, sog) {
    const st = N.state(); if (!st || !pos) return null;
    // Suchfenster um den bisherigen Fortschritt: etwas zurück, bis 2 km voraus; sonst ganze Linie
    let pr = project(st, pos, Math.max(0, lastAlong - 0.4), lastAlong + 2);
    if (firstFix && (!U.isNum(pr.xte) || Math.abs(pr.xte) > 600)) pr = project(st, pos);   // nur beim ersten Punkt die ganze Bahn absuchen
    firstFix = false;
    if (Math.abs(pr.xte) <= 600) lastAlong = pr.along;                 // weit weg: Fortschritt nicht verschieben, nur «Abseits» melden
    const total = st.cum[st.cum.length - 1], rest = Math.max(0, total - pr.along);
    const next = st.man.find(m => m.along > pr.along + 0.02);
    // Steuerhinweis: Peilung auf einen Punkt 200 m weiter vorne auf der Linie
    let ahead = pr.along + 0.2, aim = null;
    for (let k = 0; k < st.line.length - 1; k++) if (st.cum[k + 1] >= ahead) { const f = (ahead - st.cum[k]) / ((st.cum[k + 1] - st.cum[k]) || 1); aim = { lat: U.lerp(st.line[k][0], st.line[k + 1][0], f), lon: U.lerp(st.line[k][1], st.line[k + 1][1], f) }; break; }
    if (!aim) aim = { lat: st.line[st.line.length - 1][0], lon: st.line[st.line.length - 1][1] };
    const etaS = U.isNum(sog) && sog > 0.5 ? rest / 1.852 / sog * 3600 : null;
    let mark = null;                                                  // Regatta: nächste Boje mit Rundungsseite
    if (st.regatta && st.marks && st.marks.length) { const m = st.marks.find(x => x.along > pr.along + 0.03); if (m) mark = { name: m.name, side: m.side, km: m.along - pr.along, brg: U.bearing(pos, m) }; }
    return { mark, xte: pr.xte, onRoute: Math.abs(pr.xte) <= st.tol, rest, total, along: pr.along, next, nextKm: next ? next.along - pr.along : null,
      steer: U.bearing(pos, aim), eta: etaS ? Date.now() / 1000 + etaS : null, done: rest < 0.08 };
  };

  // Neu berechnen: von der aktuellen Position zum Ziel (noch offene Bahnmarken dazwischen), mit frischen Winddaten
  N.recalc = async function (why) {
    const st = N.state(), f = SW.live.fix;
    if (!st || N.busy) return;
    if (!f || Date.now() - f.t > 15000) { N.error = 'Neu berechnen braucht eine aktuelle GPS-Position'; emit(); return; }
    N.busy = true; N.error = null; emit();
    try {
      const marks = (st.marks || []).filter(m => m.along > lastAlong + 0.1);   // passierte Bahnmarken weglassen
      const lake = st.lake || RT.free.lake, wp = SW.freeRoute.windPoints(lake);
      const r = await SW.api.forecast({ points: wp, days: 2, hourly: ['wind_speed_10m', 'wind_gusts_10m', 'wind_direction_10m'], force: true });
      await new Promise(res => setTimeout(res, 20));
      const fr = SW.freeRoute.route(lake, [f.pos].concat(marks, [st.ziel]), wp, r.sets, U.nowSec(), st.factor);
      if (!fr.done) throw new Error(fr.note || 'keine Route gefunden');
      const nr = fromResult(fr); lastAlong = 0; firstFix = true;
      save(Object.assign({ calcAt: Date.now(), lastWhy: why || 'Intervall', windAt: r.meta.fetchedAt }, nr, { marks: placeMarks(nr, marks) }));
    } catch (e) { N.error = 'Neuberechnung fehlgeschlagen: ' + e.message; save({ calcAt: Date.now() }); }
    finally { N.busy = false; emit(); }
  };

  // Intervall prüfen (alle 20 s); rechnet nur bei aktiver Route und laufendem GPS
  setInterval(() => {
    const st = N.state();
    if (!st || !st.interval || !SW.live.running) return;
    if (Date.now() - (st.calcAt || 0) >= st.interval * 60000) N.recalc('Intervall');
  }, 20000);
})();

/* ---- js/regatta.js ---- */
/* Regattamodus: Bahn aus Startlinie, Bojen (mit Rundungsseite), Bahnfolge und Ziellinie; Startlinien-Abstand; Regatta-Timer. */
(function () {
  const U = SW.util;
  const RG = SW.regatta = {};
  const KX = lat => 111320 * Math.cos(lat * Math.PI / 180), KY = 110540;
  RG.mid = l => ({ lat: (l.a.lat + l.b.lat) / 2, lon: (l.a.lon + l.b.lon) / 2 });
  RG.sideName = s => (s === 'stb' ? 'Steuerbord' : 'Backbord');

  // Bahnfolge «1-2-1-2» (auch «1,2» oder «1 2») → Liste von Bojen-Indizes, mal Anzahl Runden
  RG.sequence = function (rg) {
    const one = String(rg.course || '').split(/[^0-9]+/).filter(Boolean).map(n => +n - 1).filter(i => i >= 0 && i < rg.marks.length);
    const seq = []; for (let k = 0; k < Math.max(1, rg.laps || 1); k++) seq.push(...one);
    return seq;
  };
  // Punkte für Routensuche und Anzeige: Startlinien-Mitte → Bojen in Bahnfolge → Ziellinien-Mitte
  RG.points = function (rg) {
    const fin = rg.finishIsStart ? rg.start : rg.finish;
    const pts = [Object.assign({ name: 'Start', kind: 'start' }, RG.mid(rg.start))];
    RG.sequence(rg).forEach(i => { const m = rg.marks[i]; pts.push({ name: `${m.name} (${m.side === 'stb' ? 'STB' : 'BB'})`, lat: m.lat, lon: m.lon, kind: 'mark', mark: i, side: m.side }); });
    pts.push(Object.assign({ name: 'Ziel', kind: 'ziel' }, RG.mid(fin)));
    return pts;
  };
  // Neue Bahn um einen Mittelpunkt: Startlinie 200 m quer, Luvboje 1.2 km in Windrichtung (Norden als Vorgabe), Leeboje
  RG.make = function (c, windFrom) {
    const w = U.isNum(windFrom) ? windFrom : 0, off = (b, km) => SW.ana.offset(c, b, km);
    const pin = off(w - 90, 0.1), boat = off(w + 90, 0.1);
    return { start: { a: pin, b: boat }, finish: { a: pin, b: boat }, finishIsStart: true, laps: 2, course: '1-2',
      marks: [Object.assign({ name: 'Boje 1', side: 'bb' }, off(w, 1.2)), Object.assign({ name: 'Boje 2', side: 'bb' }, off(w + 180, 0.15))] };
  };

  // Lage zur Startlinie: Abstand senkrecht zur Linie (m), Seite (vor der Linie / Bahnseite), ob innerhalb der Linienenden
  RG.lineInfo = function (line, pos, towards) {
    const o = line.a, kx = KX(o.lat);
    const B = { x: (line.b.lon - o.lon) * kx, y: (line.b.lat - o.lat) * KY }, P = { x: (pos.lon - o.lon) * kx, y: (pos.lat - o.lat) * KY };
    const L = Math.hypot(B.x, B.y) || 1, cross = (B.x * P.y - B.y * P.x) / L, t = (P.x * B.x + P.y * B.y) / (L * L);
    let courseSign = 1;
    if (towards) { const T = { x: (towards.lon - o.lon) * kx, y: (towards.lat - o.lat) * KY }; courseSign = Math.sign(B.x * T.y - B.y * T.x) || 1; }
    const onCourseSide = Math.sign(cross) === courseSign;             // schon über der Linie (Bahnseite)
    return { dist: Math.abs(cross), onCourseSide, within: t >= 0 && t <= 1, lengthM: L };
  };

  // Regatten ohne Punkte (z. B. Vorlage) ergänzen
  if (SW.settings && SW.settings.routes && SW.settings.routes.some(r => r.kind === 'regatta' && !r.points)) {
    SW.saveSettings({ routes: SW.settings.routes.map(r => (r.kind === 'regatta' && !r.points ? Object.assign({}, r, { points: RG.points(r.regatta) }) : r)) });
  }

  /* ---------- Regatta-Timer ---------- */
  // Zustand in den Einstellungen: { minutes, signals:[5,4,1,0], sound, startAt (ms des Startsignals) oder null }
  const T = RG.timer = {};
  const subs = new Set();
  T.on = fn => { subs.add(fn); return () => subs.delete(fn); };
  const emit = () => subs.forEach(fn => { try { fn(); } catch (e) { console.warn(e); } });
  T.cfg = () => Object.assign({ minutes: 5, signals: [5, 4, 1, 0], sound: true, startAt: null, show: false }, SW.settings.timer || {});
  const save = p => { SW.saveSettings({ timer: Object.assign(T.cfg(), p) }); emit(); };
  T.toggleShow = () => save({ show: !T.cfg().show });
  T.start = () => save({ startAt: Date.now() + T.cfg().minutes * 60000, show: true });
  T.reset = () => save({ startAt: null });
  T.shift = min => { const c = T.cfg(); if (c.startAt) save({ startAt: c.startAt + min * 60000 }); };
  // Sync: auf die nächste volle Minute der Restzeit runden (beim Signal drücken)
  T.sync = () => { const c = T.cfg(); if (!c.startAt) return; const rest = c.startAt - Date.now(); save({ startAt: Date.now() + Math.round(rest / 60000) * 60000 }); };
  T.setup = p => save(p);
  T.remaining = () => { const c = T.cfg(); return c.startAt ? (c.startAt - Date.now()) / 1000 : null; };   // Sekunden bis Start, negativ = Rennzeit

  /* Signaltöne (Web Audio):
     volle Minute → so viele Töne wie Minuten bleiben (3 min = 3 Töne),
     30 Sekunden → eigener Ton (tief-hoch-tief), letzte 10 Sekunden → jede Sekunde ein kurzer Ton, Start → langer Ton */
  let actx = null, lastBeep = null;
  function beep(ms, freq, delayMs, type) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t0 = actx.currentTime + (delayMs || 0) / 1000;
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type || 'sine'; o.frequency.value = freq || 880; o.connect(g); g.connect(actx.destination);
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.3, t0 + 0.01);           // ohne Knacken ein- und ausblenden
      g.gain.setValueAtTime(0.3, t0 + ms / 1000 - 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t0 + ms / 1000);
      o.start(t0); o.stop(t0 + ms / 1000 + 0.02);
    } catch (e) { /* kein Ton möglich */ }
  }
  T.signal = function (s) {                                          // Ton für «s Sekunden bis Start»; gibt zurück, ob ein Ton kam
    if (s === 0) { beep(1800, 1040); return true; }                  // Startsignal: lang
    if (s > 0 && s % 60 === 0) {                                     // volle Minute: n Töne für n Minuten
      const n = Math.min(s / 60, 20);
      for (let k = 0; k < n; k++) beep(400, 880, k * 600);              // Töne 0.4 s, Pause 0.2 s
      return true;
    }
    if (s === 30) { [[620, 0], [990, 380], [620, 760]].forEach(([f, d]) => beep(340, f, d, 'square')); return true; }   // 30 s: anderer Klang
    if (s > 0 && s <= 10) { beep(250, 1320); return true; }          // letzte 10 s: jede Sekunde
    return false;
  };
  T.unlockAudio = () => { try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); actx.resume(); } catch (e) {} };   // iPad: Ton erst nach Antippen erlaubt
  setInterval(() => {
    const c = T.cfg(); if (!c.startAt || !c.sound) return;
    const s = Math.round((c.startAt - Date.now()) / 1000);
    if (s === lastBeep) return;
    if (T.signal(s)) lastBeep = s;
  }, 250);
})();

/* ---- vendor/qrcode/qrcode.js ---- */
var qrcode=function(){function i(t,r){function a(t,r){g=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(l=4*u+17),e(0,0),e(l-7,0),e(0,l-7),i(),o(),v(t,r),7<=u&&h(t),null==n&&(n=w(u,f,c)),d(n,r)}var u=t,f=y[r],g=null,l=0,n=null,c=[],s={},e=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||l<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||l<=r+n||(g[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},o=function(){for(var t=8;t<l-8;t+=1)null==g[t][6]&&(g[t][6]=t%2==0);for(var r=8;r<l-8;r+=1)null==g[6][r]&&(g[6][r]=r%2==0)},i=function(){for(var t=B.getPatternPosition(u),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],o=t[e];if(null==g[n][o])for(var i=-2;i<=2;i+=1)for(var a=-2;a<=2;a+=1)g[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},h=function(t){for(var r=B.getBCHTypeNumber(u),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);g[Math.floor(e/3)][e%3+l-8-3]=n}for(e=0;e<18;e+=1){n=!t&&1==(r>>e&1);g[e%3+l-8-3][Math.floor(e/3)]=n}},v=function(t,r){for(var e=f<<3|r,n=B.getBCHTypeInfo(e),o=0;o<15;o+=1){var i=!t&&1==(n>>o&1);o<6?g[o][8]=i:o<8?g[o+1][8]=i:g[l-15+o][8]=i}for(o=0;o<15;o+=1){i=!t&&1==(n>>o&1);o<8?g[8][l-o-1]=i:o<9?g[8][15-o-1+1]=i:g[8][15-o-1]=i}g[l-8][8]=!t},d=function(t,r){for(var e=-1,n=l-1,o=7,i=0,a=B.getMaskFunction(r),u=l-1;0<u;u-=2)for(6==u&&(u-=1);;){for(var f=0;f<2;f+=1)if(null==g[n][u-f]){var c=!1;i<t.length&&(c=1==(t[i]>>>o&1)),a(n,u-f)&&(c=!c),g[n][u-f]=c,-1==(o-=1)&&(i+=1,o=7)}if((n+=e)<0||l<=n){n-=e,e=-e;break}}},w=function(t,r,e){for(var n=b.getRSBlocks(t,r),o=M(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=C(i[u],l.getLength()-1).mod(l);a[u]=new Array(l.getLength()-1);for(g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=0<=s?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};s.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=x(t);break;case"Alphanumeric":e=m(t);break;case"Byte":e=L(t);break;case"Kanji":e=D(t);break;default:throw"mode:"+r}c.push(e),n=null},s.isDark=function(t,r){if(t<0||l<=t||r<0||l<=r)throw t+","+r;return g[t][r]},s.getModuleCount=function(){return l},s.make=function(){if(u<1){for(var t=1;t<40;t++){for(var r=b.getRSBlocks(t,f),e=M(),n=0;n<c.length;n++){var o=c[n];e.put(o.getMode(),4),e.put(o.getLength(),B.getLengthInBits(o.getMode(),t)),o.write(e)}var i=0;for(n=0;n<r.length;n++)i+=r[n].dataCount;if(e.getLengthInBits()<=8*i)break}u=t}a(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){a(!0,e);var n=B.getLostPoint(s);(0==e||n<t)&&(t=n,r=e)}return r}())},s.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<s.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<s.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=s.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},s.createSvgTag=function(t,r,e,n){var o={};"object"==typeof t&&(t=(o=t).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f,c=s.getModuleCount()*t+2*r,g="";for(f="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",g+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',g+=o.scalable?"":' width="'+c+'px" height="'+c+'px"',g+=' viewBox="0 0 '+c+" "+c+'" ',g+=' preserveAspectRatio="xMinYMin meet"',g+=n.text||e.text?' role="img" aria-labelledby="'+p([n.id,e.id].join(" ").trim())+'"':"",g+=">",g+=n.text?'<title id="'+p(n.id)+'">'+p(n.text)+"</title>":"",g+=e.text?'<description id="'+p(e.id)+'">'+p(e.text)+"</description>":"",g+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',g+='<path d="',a=0;a<s.getModuleCount();a+=1)for(u=a*t+r,i=0;i<s.getModuleCount();i+=1)s.isDark(a,i)&&(g+="M"+(i*t+r)+","+u+f);return g+='" stroke="transparent" fill="black"/>',g+="</svg>"},s.createDataURL=function(o,t){o=o||2,t=void 0===t?4*o:t;var r=s.getModuleCount()*o+2*t,i=t,a=r-t;return I(r,r,function(t,r){if(i<=t&&t<a&&i<=r&&r<a){var e=Math.floor((t-i)/o),n=Math.floor((r-i)/o);return s.isDark(n,e)?0:1}return 1})},s.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=s.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=s.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=p(e),o+='"'),o+="/>"};var p=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return s.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*s.getModuleCount()+2*t,u=t,f=a-t,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},g={"██":"▀","█ ":"▀"," █":" ","  ":" "},l="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<f&&u<=r&&r<f&&s.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<f&&u<=r+1&&r+1<f&&s.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",l+=t<1&&f<=r+1?g[i]:c[i];l+="\n"}return a%2&&0<t?l.substring(0,l.length-a-1)+Array(1+a).join("▀"):l.substring(0,l.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=s.getModuleCount()*t+2*r,u=r,f=a-r,c=Array(t+1).join("██"),g=Array(t+1).join("  "),l="",h="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),h="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&s.isDark(o,Math.floor((n-u)/t))&&(i=0),h+=i?c:g;for(o=0;o<t;o+=1)l+=h+"\n"}return l.substring(0,l.length-1)},s.renderTo2dContext=function(t,r){r=r||2;for(var e=s.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=s.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},s}i.stringToBytes=(i.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,i.createStringToBytes=function(u,f){var i=function(){function t(){var t=r.read();if(-1==t)throw"eof";return t}for(var r=S(u),e=0,n={};;){var o=r.read();if(-1==o)break;var i=t(),a=t()<<8|t();n[String.fromCharCode(o<<8|i)]=a,e+=1}if(e!=f)throw e+" != "+f;return n}(),a="?".charCodeAt(0);return function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);if(n<128)r.push(n);else{var o=i[t.charAt(e)];"number"==typeof o?(255&o)==o?r.push(o):(r.push(o>>>8),r.push(255&o)):r.push(a)}}return r}};var r,t,a=1,u=2,o=4,f=8,y={L:1,M:0,Q:3,H:2},e=0,n=1,c=2,g=3,l=4,h=5,s=6,v=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],(t={}).getBCHTypeInfo=function(t){for(var r=t<<10;0<=d(r)-d(1335);)r^=1335<<d(r)-d(1335);return 21522^(t<<10|r)},t.getBCHTypeNumber=function(t){for(var r=t<<12;0<=d(r)-d(7973);)r^=7973<<d(r)-d(7973);return t<<12|r},t.getPatternPosition=function(t){return r[t-1]},t.getMaskFunction=function(t){switch(t){case e:return function(t,r){return(t+r)%2==0};case n:return function(t,r){return t%2==0};case c:return function(t,r){return r%3==0};case g:return function(t,r){return(t+r)%3==0};case l:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case h:return function(t,r){return t*r%2+t*r%3==0};case s:return function(t,r){return(t*r%2+t*r%3)%2==0};case v:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},t.getErrorCorrectPolynomial=function(t){for(var r=C([1],0),e=0;e<t;e+=1)r=r.multiply(C([1,w.gexp(e)],0));return r},t.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case o:case f:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case o:return 16;case f:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case o:return 16;case f:return 12;default:throw"mode:"+t}}},t.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);5<i&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},t);function d(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r}var w=function(){for(var r=new Array(256),e=new Array(256),t=0;t<8;t+=1)r[t]=1<<t;for(t=8;t<256;t+=1)r[t]=r[t-4]^r[t-5]^r[t-6]^r[t-8];for(t=0;t<255;t+=1)e[r[t]]=t;var n={glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return r[t]}};return n}();function C(n,o){if(void 0===n.length)throw n.length+"/"+o;var r=function(){for(var t=0;t<n.length&&0==n[t];)t+=1;for(var r=new Array(n.length-t+o),e=0;e<n.length-t;e+=1)r[e]=n[e+t];return r}(),i={getAt:function(t){return r[t]},getLength:function(){return r.length},multiply:function(t){for(var r=new Array(i.getLength()+t.getLength()-1),e=0;e<i.getLength();e+=1)for(var n=0;n<t.getLength();n+=1)r[e+n]^=w.gexp(w.glog(i.getAt(e))+w.glog(t.getAt(n)));return C(r,0)},mod:function(t){if(i.getLength()-t.getLength()<0)return i;for(var r=w.glog(i.getAt(0))-w.glog(t.getAt(0)),e=new Array(i.getLength()),n=0;n<i.getLength();n+=1)e[n]=i.getAt(n);for(n=0;n<t.getLength();n+=1)e[n]^=w.gexp(w.glog(t.getAt(n))+r);return C(e,0).mod(t)}};return i}function p(){var e=[],o={writeByte:function(t){e.push(255&t)},writeShort:function(t){o.writeByte(t),o.writeByte(t>>>8)},writeBytes:function(t,r,e){r=r||0,e=e||t.length;for(var n=0;n<e;n+=1)o.writeByte(t[n+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)o.writeByte(t.charCodeAt(r))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var r=0;r<e.length;r+=1)0<r&&(t+=","),t+=e[r];return t+="]"}};return o}var k,A,b=(k=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],(A={}).getRSBlocks=function(t,r){var e=function(t,r){switch(r){case y.L:return k[4*(t-1)+0];case y.M:return k[4*(t-1)+1];case y.Q:return k[4*(t-1)+2];case y.H:return k[4*(t-1)+3];default:return}}(t,r);if(void 0===e)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+r;for(var n,o,i=e.length/3,a=[],u=0;u<i;u+=1)for(var f=e[3*u+0],c=e[3*u+1],g=e[3*u+2],l=0;l<f;l+=1)a.push((n=g,o=void 0,(o={}).totalCount=c,o.dataCount=n,o));return a},A),M=function(){var e=[],n=0,o={getBuffer:function(){return e},getAt:function(t){var r=Math.floor(t/8);return 1==(e[r]>>>7-t%8&1)},put:function(t,r){for(var e=0;e<r;e+=1)o.putBit(1==(t>>>r-e-1&1))},getLengthInBits:function(){return n},putBit:function(t){var r=Math.floor(n/8);e.length<=r&&e.push(0),t&&(e[r]|=128>>>n%8),n+=1}};return o},x=function(t){var r=a,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+2<r.length;)t.put(o(r.substring(e,e+3)),10),e+=3;e<r.length&&(r.length-e==1?t.put(o(r.substring(e,e+1)),4):r.length-e==2&&t.put(o(r.substring(e,e+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return e},m=function(t){var r=u,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+1<r.length;)t.put(45*o(r.charAt(e))+o(r.charAt(e+1)),11),e+=2;e<r.length&&t.put(o(r.charAt(e)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return e},L=function(t){var r=o,e=i.stringToBytes(t),n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}};return n},D=function(t){var r=f,e=i.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(){var t=e("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=e(t),n={getMode:function(){return r},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return n},S=function(t){var e=t,n=0,o=0,i=0,r={read:function(){for(;i<8;){if(n>=e.length){if(0==i)return-1;throw"unexpected end of file./"+i}var t=e.charAt(n);if(n+=1,"="==t)return i=0,-1;t.match(/^\s$/)||(o=o<<6|a(t.charCodeAt(0)),i+=6)}var r=o>>>i-8&255;return i-=8,r}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return r},I=function(t,r,e){for(var n=function(t,r){var n=t,o=r,l=new Array(t*r),e={setPixel:function(t,r,e){l[r*n+t]=e},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(o),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(o),t.writeByte(0);var r=i(2);t.writeByte(2);for(var e=0;255<r.length-e;)t.writeByte(255),t.writeBytes(r,e,255),e+=255;t.writeByte(r.length-e),t.writeBytes(r,e,r.length-e),t.writeByte(0),t.writeString(";")}},i=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,o=h(),i=0;i<r;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(r)),o.add(String.fromCharCode(e));var a=p(),u=function(t){var e=t,n=0,o=0,r={write:function(t,r){if(t>>>r!=0)throw"length over";for(;8<=n+r;)e.writeByte(255&(t<<n|o)),r-=8-n,t>>>=8-n,n=o=0;o|=t<<n,n+=r},flush:function(){0<n&&e.writeByte(o)}};return r}(a);u.write(r,n);var f=0,c=String.fromCharCode(l[f]);for(f+=1;f<l.length;){var g=String.fromCharCode(l[f]);f+=1,o.contains(c+g)?c+=g:(u.write(o.indexOf(c),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(c+g)),c=g)}return u.write(o.indexOf(c),n),u.write(e,n),u.flush(),a.toByteArray()},h=function(){var r={},e=0,n={add:function(t){if(n.contains(t))throw"dup key:"+t;r[t]=e,e+=1},size:function(){return e},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return n};return e}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=p();n.write(a);for(var u=function(){function e(t){a+=String.fromCharCode(r(63&t))}var n=0,o=0,i=0,a="",t={},r=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return t.writeByte=function(t){for(n=n<<8|255&t,o+=8,i+=1;6<=o;)e(n>>>o-6),o-=6},t.flush=function(){if(0<o&&(e(n<<6-o),o=n=0),i%3!=0)for(var t=3-i%3,r=0;r<t;r+=1)a+="="},t.toString=function(){return a},t}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return i}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||57344<=n?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}(function(){return qrcode});
/* ---- js/profile.js ---- */
/* Profil teilen und übernehmen – ohne Server und ohne Konto.
   Das Profil (Favoriten, Strecken, Regatten, Modi, Schwellen, Anzeige) wird komprimiert in einen Link gepackt.
   Die Daten stehen hinter dem «#» der Adresse; dieser Teil wird vom Browser nie an einen Server geschickt.
   Zusätzlich: QR-Code (für kleine Profile) und Profildatei (Backup, z. B. in iCloud Drive). */
(function () {
  const U = SW.util, C = SW.CONFIG;
  const P = SW.profile = {};
  const KEYS = ['spots', 'routes', 'modes', 'sports', 'sport', 'mode', 'model', 'theme', 'compact', 'lake', 'spotId', 'timer', 'inst', 'archive'];
  const PREFIX = 'profil=';

  // Was ins Profil kommt (keine Caches, keine laufende Route, kein Seitenzustand)
  P.collect = function () {
    const s = SW.settings, out = { v: 1, app: 'SwissWind24', at: new Date().toISOString() };
    KEYS.forEach(k => { if (s[k] !== undefined && s[k] !== null) out[k] = JSON.parse(JSON.stringify(s[k])); });
    if (out.routes) out.routes = out.routes.map(r => { const c = Object.assign({}, r); if (c.kind === 'regatta') delete c.points; return c; });   // Regatta-Punkte werden neu berechnet
    if (out.timer) delete out.timer.startAt;                         // laufenden Countdown nicht mitgeben
    if (s.spotId === 'search' && s.currentSearch) out.currentSearch = s.currentSearch;
    return out;
  };
  P.summary = p => `${(p.spots || []).length} Favoriten, ${(p.routes || []).length} Strecken/Regatten, ${(p.archive || []).length} im Routenarchiv`;

  /* ---------- Kodieren (deflate + base64url) ---------- */
  const b64u = bytes => { let s = ''; bytes.forEach(b => { s += String.fromCharCode(b); }); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const unb64u = str => { const s = atob(str.replace(/-/g, '+').replace(/_/g, '/')); const a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; };
  async function pipe(bytes, stream) { const r = new Blob([bytes]).stream().pipeThrough(stream); return new Uint8Array(await new Response(r).arrayBuffer()); }
  P.encode = async function (obj) {
    const raw = new TextEncoder().encode(JSON.stringify(obj));
    if ('CompressionStream' in window) return 'z' + b64u(await pipe(raw, new CompressionStream('deflate-raw')));   // komprimiert (Safari ab 16.4)
    return 'j' + b64u(raw);                                                                                       // ältere Browser: unkomprimiert
  };
  P.decode = async function (str) {
    const kind = str[0], bytes = unb64u(str.slice(1));
    const raw = kind === 'z' ? await pipe(bytes, new DecompressionStream('deflate-raw')) : bytes;
    const obj = JSON.parse(new TextDecoder().decode(raw));
    if (!obj || obj.app !== 'SwissWind24') throw new Error('Kein SwissWind24-Profil');
    return obj;
  };

  // Link: aktuelle App-Adresse ohne Anker + #profil=…
  P.link = async function () { return `${location.origin === 'null' ? location.href.split('#')[0] : location.origin + location.pathname}#${PREFIX}${await P.encode(P.collect())}`; };
  P.isFileUrl = () => location.protocol === 'file:';

  /* ---------- QR-Code ---------- */
  P.qrSvg = function (text) {
    if (!window.qrcode) throw new Error('QR-Bibliothek fehlt');
    const q = window.qrcode(0, 'L');                                // Typ automatisch, Fehlerkorrektur niedrig = maximale Kapazität
    q.addData(text, 'Byte');
    q.make();                                                        // wirft, wenn der Text zu lang ist
    return q.createSvgTag({ cellSize: 4, margin: 4, scalable: true });
  };

  /* ---------- Übernehmen ---------- */
  // mode 'merge': neue Favoriten/Strecken dazu, Rest behalten; 'replace': alles aus dem Profil übernehmen
  P.apply = function (p, mode) {
    const s = SW.settings, patch = {};
    if (mode === 'replace') {
      KEYS.forEach(k => { if (p[k] !== undefined) patch[k] = p[k]; });
      if (p.currentSearch) patch.currentSearch = p.currentSearch;
    } else {
      const near = (a, b) => Math.abs(a.lat - b.lat) < 0.002 && Math.abs(a.lon - b.lon) < 0.002;
      const spots = s.spots.slice(); let ns = 0;
      (p.spots || []).forEach(x => { if (!spots.some(y => near(x, y))) { spots.push(Object.assign({}, x, { id: spots.some(y => y.id === x.id) ? 'u' + U.uid() : x.id })); ns++; } });
      const routes = s.routes.slice(); let nr = 0;
      (p.routes || []).forEach(x => {
        const same = routes.find(y => y.id === x.id);
        if (same && JSON.stringify(Object.assign({}, same, { points: undefined })) === JSON.stringify(Object.assign({}, x, { points: undefined }))) return;   // identisch: nichts tun
        routes.push(Object.assign({}, x, same ? { id: 'r' + U.uid(), name: x.name + ' (übernommen)' } : {})); nr++;
      });
      const arch = (s.archive || []).slice(); let na = 0;
      (p.archive || []).forEach(x => { if (!arch.some(y => y.id === x.id)) { arch.push(x); na++; } });
      patch.spots = spots; patch.routes = routes; patch.archive = arch;
      P.lastMerge = { spots: ns, routes: nr, archive: na };
    }
    // Regatten ohne Punkte neu berechnen
    if (patch.routes && SW.regatta) patch.routes = patch.routes.map(r => (r.kind === 'regatta' && !r.points ? Object.assign({}, r, { points: SW.regatta.points(r.regatta) }) : r));
    SW.saveSettings(patch);
  };

  // Beim Start: Link mit #profil=… erkannt → fragen, wie übernommen werden soll
  P.checkHash = async function () {
    const h = location.hash.slice(1);
    if (!h.startsWith(PREFIX)) return false;
    history.replaceState(null, '', location.pathname + location.search + '#heute');   // Profil nicht in der Adresse lassen
    let p;
    try { p = await P.decode(h.slice(PREFIX.length)); }
    catch (e) { SW.ui.toast('Profil-Link ist beschädigt oder unvollständig', 'bad'); return true; }
    P.askImport(p, 'Dieser Link');
    return true;
  };
  P.askImport = function (p, src) {
    const el = U.el(`<div class="prof-import">
      <p>${U.esc(src || 'Dies')} enthält ein SwissWind24-Profil mit <b>${U.esc(P.summary(p))}</b>${p.at ? ` (erstellt ${U.esc(new Date(p.at).toLocaleDateString('de-CH'))})` : ''}.</p>
      <div class="model-list">
        <button type="button" class="model-row" data-m="merge"><b>Zusammenführen</b><span>Neue Favoriten, Strecken und Regatten zu den vorhandenen hinzufügen. Eigene Einstellungen bleiben.</span></button>
        <button type="button" class="model-row" data-m="replace"><b>Ersetzen</b><span>Dieses Gerät übernimmt das Profil komplett (Favoriten, Strecken, Modi, Schwellen, Anzeige).</span></button>
        <button type="button" class="model-row" data-m="no"><b>Nicht übernehmen</b><span>Nichts ändern.</span></button>
      </div><p class="hint" style="display:block">Die Daten werden nur auf diesem Gerät gespeichert. Es gibt keine automatische Synchronisation.</p></div>`);
    const sh = SW.ui.sheet('Profil übernehmen', el);
    el.onclick = e => {
      const b = e.target.closest('[data-m]'); if (!b) return;
      sh.close();
      if (b.dataset.m === 'no') return;
      P.apply(p, b.dataset.m);
      SW.app.applyTheme(); SW.app.buildNav(); SW.app.refreshHeader(); SW.app.show('heute', true);
      SW.ui.toast(b.dataset.m === 'replace' ? 'Profil übernommen' : `Zusammengeführt: ${P.lastMerge.spots} Favoriten, ${P.lastMerge.routes} Strecken, ${P.lastMerge.archive} Archiv-Einträge neu`);
    };
  };

  /* ---------- Datei ---------- */
  P.saveFile = function () {
    const name = `SwissWind24-Profil_${U.todayKey()}.json`;
    U.downloadText(name, JSON.stringify(P.collect(), null, 1), 'application/json');
  };
  P.loadFile = async function (file) {
    const p = JSON.parse((await file.text()).replace(/^﻿/, ''));
    if (!p || p.app !== 'SwissWind24') throw new Error('Keine SwissWind24-Profildatei');
    return p;
  };
})();

/* ---- js/users.js ---- */
/* Benutzerprofile ohne Server: jede Person hat auf jedem Gerät ihren eigenen Speicherbereich
   (Favoriten, Strecken, Routenarchiv, Modi, Schwellen). Das Passwort wird einmal pro Gerät verlangt.
   Hinweis: Ohne Server ist das ein einfacher Schutz vor Verwechslung, keine echte Sicherheit –
   der Programmcode ist öffentlich und die Daten liegen nur im Browser des Geräts. */
(function () {
  const U = SW.util;
  const N = SW.users = {};
  const ITER = SW.USERS_ITER || 5000;                                // gleich wie tools/make_users.py

  /* ---------- SHA-256 (klein, ohne Bibliothek, läuft auch per file://) ---------- */
  const K = new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]);
  function sha256hex(str) {
    const msg = new TextEncoder().encode(str), len = msg.length;
    const n = ((len + 9 + 63) >> 6) << 6, b = new Uint8Array(n);      // auf 64-Byte-Blöcke auffüllen
    b.set(msg); b[len] = 0x80;
    const dv = new DataView(b.buffer); dv.setUint32(n - 4, len * 8); dv.setUint32(n - 8, Math.floor(len / 0x20000000));
    const H = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]), w = new Uint32Array(64);
    const rr = (x, k) => (x >>> k) | (x << (32 - k));
    for (let o = 0; o < n; o += 64) {
      for (let i = 0; i < 16; i++) w[i] = dv.getUint32(o + i * 4);
      for (let i = 16; i < 64; i++) {
        const s0 = rr(w[i - 15], 7) ^ rr(w[i - 15], 18) ^ (w[i - 15] >>> 3), s1 = rr(w[i - 2], 17) ^ rr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
      }
      let [a, bb, c, d, e, f, g, h] = H;
      for (let i = 0; i < 64; i++) {
        const t1 = (h + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) >>> 0;
        const t2 = ((rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & bb) ^ (a & c) ^ (bb & c))) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = bb; bb = a; a = (t1 + t2) >>> 0;
      }
      H[0] += a; H[1] += bb; H[2] += c; H[3] += d; H[4] += e; H[5] += f; H[6] += g; H[7] += h;
    }
    return Array.from(H, x => x.toString(16).padStart(8, '0')).join('');
  }
  N.sha256 = sha256hex;
  const check = (salt, pw) => { let h = sha256hex(`${salt}:${pw}`); for (let i = 0; i < ITER; i++) h = sha256hex(h + salt); return h; };

  /* ---------- Anmelden / Wechseln ---------- */
  N.list = () => SW.USERS || [];
  N.current = () => N.list().find(u => u.id === SW.userId) || null;   // null = Gast
  N.label = () => (N.current() ? N.current().name : 'Gast');

  // Passwort prüfen, Gerät merkt sich die Person, App lädt mit deren Daten neu
  N.login = function (id, pw) {
    const u = N.list().find(x => x.id === id);
    if (id !== 'gast' && (!u || check(u.salt, (pw || '').trim()) !== u.check)) return false;
    SW.claimLegacy(id);                                              // Daten aus der Zeit vor den Profilen übernehmen
    SW.setUser(id);
    location.hash = 'heute'; location.reload();
    return true;
  };
  N.logout = function () { SW.setUser(''); location.reload(); };

  // Kurze Einführung: einmal pro Person und Gerät, danach nie wieder (Setup › «Einführung zeigen» holt sie zurück)
  const introKey = () => 'sw24.intro.' + (SW.userId || 'gast');
  N.introSeen = () => { try { return !!localStorage.getItem(introKey()); } catch (e) { return true; } };
  N.intro = function () {
    const steps = [
      ['Segelscreen', 'Links «Segelscreen» – der Bildschirm für unterwegs: Windrose, Speed, Kurs, Karte. «GPS starten» tippen, alles andere steckt im Knopf «Menü».'],
      ['Route planen', 'Links «Routen» › Planer: ① Strecke wählen, ② Tag und Startzeit, ③ Route ansehen, ④ «Route starten» – der Segelscreen zeigt dann, ob du auf Kurs bist.'],
      ['Regatta speichern', 'Im Planer «Neue Regatta», Bojen und Linien setzen, «Im Archiv speichern». Am Regattatag unter Routen › Archiv öffnen und mit dem aktuellen Wind neu rechnen.']
    ];
    const el = U.el(`<div class="intro">${steps.map(([t, s], k) => `<div class="intro-step"><i>${k + 1}</i><b>${U.esc(t)}</b><span>${U.esc(s)}</span></div>`).join('')}
      <div class="intro-dots"><button class="btn primary" type="button">Los geht's</button></div></div>`);
    const done = () => { try { localStorage.setItem(introKey(), '1'); } catch (e) {} };
    const sh = SW.ui.sheet('So funktioniert SwissWind24', el, done);
    el.querySelector('button').onclick = () => sh.close();
  };

  // Auswahl: wer nutzt die App auf diesem Gerät?
  N.choose = function (firstStart) {
    const el = U.el(`<div class="user-pick">
      <p>${firstStart ? 'Wer nutzt SwissWind24 auf diesem Gerät? Jede Person hat ihre eigenen Favoriten, Strecken und ihr eigenes Routenarchiv.' : 'Profil wechseln. Die Daten des bisherigen Profils bleiben auf diesem Gerät gespeichert.'}</p>
      <div class="model-list">${N.list().map(u => `<button type="button" class="model-row ${u.id === SW.userId ? 'on' : ''}" data-u="${U.esc(u.id)}"><b>${U.esc(u.name)}</b><span>${u.id === SW.userId ? 'angemeldet' : 'mit Passwort'}</span></button>`).join('')}
        <button type="button" class="model-row ${SW.userId === 'gast' ? 'on' : ''}" data-u="gast"><b>Gast</b><span>ohne Passwort, eigener Speicher</span></button></div>
      <form class="add-spot user-pw" hidden><label>Passwort für <b class="u-name"></b><input name="pw" type="password" autocomplete="current-password" autocapitalize="off" spellcheck="false"></label>
        <button class="btn primary" type="submit">Anmelden</button><p class="u-err t-bad" hidden>Passwort stimmt nicht.</p></form>
      <p class="hint" style="display:block">Ohne Server bleiben die Daten auf diesem Gerät. Zum Übertragen auf ein anderes Gerät: Setup → Profil teilen.</p></div>`);
    let sel = null;
    const form = el.querySelector('.user-pw');
    const sh = SW.ui.sheet(firstStart ? 'Willkommen' : 'Profil wählen', el, () => { if (!SW.userId) SW.setUser('gast'); });   // Schliessen = Gast
    el.querySelector('.model-list').onclick = e => {
      const b = e.target.closest('[data-u]'); if (!b) return;
      sel = b.dataset.u;
      if (sel === 'gast') { sh.close(); N.login('gast'); return; }
      el.querySelectorAll('[data-u]').forEach(x => x.classList.toggle('on', x === b));
      form.hidden = false; form.querySelector('.u-name').textContent = N.list().find(u => u.id === sel).name;
      el.querySelector('.u-err').hidden = true; form.pw.value = ''; form.pw.focus();
    };
    form.onsubmit = ev => {
      ev.preventDefault();
      if (!N.login(sel, form.pw.value)) { el.querySelector('.u-err').hidden = false; form.pw.select(); }
    };
  };
})();

/* ---- js/ui.js ---- */
/* Oberfläche: Navigation, Seitenpunkte, Wischen, Karten mit Lade-/Fehlerzustand, Sheets, Toasts. */
(function () {
  const U = SW.util, C = SW.CONFIG;
  const ui = SW.ui = {};

  /* ---------- Icons (24×24, Strich) ---------- */
  const I = {
    archiv: '<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v10h14V9"/><path d="M10 13h4"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/>',
    sail: '<circle cx="12" cy="12" r="9"/><path d="M12 7c1.6 1.4 1.8 6.5 1.2 10h-2.4C10.2 13.5 10.4 8.4 12 7z"/><path d="M12 3v2M18.4 5.6l-1.4 1.4M5.6 5.6L7 7"/>',
    gbw: '<path d="M10 3v13"/><path d="M10 4l6 10h-6"/><path d="M3 19h14"/><path d="M15 5h5M17 8h4M16 11h4"/>',
    heute: '<path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 16l4-5"/><circle cx="12" cy="16" r="1.5"/>',
    spot: '<path d="M12 21s-6-6.2-6-11a6 6 0 1 1 12 0c0 4.8-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>',
    modelle: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5" opacity=".5"/>',
    welle: '<path d="M2 15c3 0 3-3 6-3s3 3 6 3 3-3 6-3 2 1 2 1"/><path d="M2 19c3 0 3-2 6-2s3 2 6 2 3-2 6-2"/><path d="M8 12c0-4 3-7 7-7-2 2-2 5 0 7"/>',
    band: '<path d="M12 3v15"/><path d="M12 4l7 12h-7"/><path d="M11 6L5 16h6"/><path d="M3 19h18l-2 2H5z"/>',
    bodensee: '<circle cx="12" cy="5" r="2"/><path d="M12 7v14"/><path d="M5 13a7 7 0 0 0 14 0"/><path d="M8 10h8"/>',
    lagen: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h16a3 3 0 1 1-3 3"/><path d="M3 16h8"/>',
    feierabend: '<path d="M3 18h18"/><path d="M6 18a6 6 0 0 1 12 0"/><path d="M12 6V3M5.6 8.6L4 7M18.4 8.6L20 7"/><path d="M8 21h8"/>',
    karte: '<rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="12" cy="12.5" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/>',
    setup: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
    theme: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    grip: '<path d="M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01" stroke-width="3" stroke-linecap="round"/>',
    up: '<path d="M6 15l6-6 6 6"/>', down: '<path d="M6 9l6 6 6-6"/>', trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    full: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>', download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'
  };
  ui.icon = (k, cls) => `<svg class="ic ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round">${I[k] || ''}</svg>`;

  /* ---------- Lichtmodi ---------- */
  ui.THEMES = [
    { id: 'dark', name: 'Dark Mode', info: 'Standard. Dunkle Flächen, hoher Kontrast, schont den Akku.', sw: ['#0a0c0f', '#121519', '#f2f5f8', '#47a8ff'] },
    { id: 'sun', name: 'Heller Modus', info: 'Schwarz auf Weiss. Am besten ablesbar in direkter Sonne.', sw: ['#e9ecef', '#ffffff', '#000000', '#0b57c2'] },
    { id: 'night', name: 'Nachtmodus', info: 'Rot auf Schwarz. Blendet nicht und erhält die Nachtsicht am Abend auf dem Wasser.', sw: ['#000000', '#0a0000', '#ff4a3a', '#ff3b22'] }
  ];
  ui.themeName = id => (ui.THEMES.find(t => t.id === id) || ui.THEMES[0]).name;
  ui.themePicker = function (onPick) {                               // gleiche Auswahl im Kopf-Sheet und im Setup
    const el = U.el(`<div class="theme-pick">${ui.THEMES.map(t => `<button type="button" class="theme-btn ${SW.settings.theme === t.id ? 'on' : ''}" data-t="${t.id}" aria-pressed="${SW.settings.theme === t.id}">
      <i aria-hidden="true">${t.sw.map(c => `<em style="background:${c}"></em>`).join('')}</i><b>${t.name}</b><span>${t.info}</span></button>`).join('')}</div>`);
    el.onclick = e => { const x = e.target.closest('.theme-btn'); if (!x) return; SW.saveSettings({ theme: x.dataset.t }); SW.app.applyTheme(); onPick && onPick(x.dataset.t); };
    return el;
  };

  /* ---------- Karten ---------- */
  ui.card = function (o) {
    const el = U.el(`<section class="card ${o.cls || ''}" ${o.id ? `id="${o.id}"` : ''}>
      ${o.title ? `<header class="card-h"><h2>${U.esc(o.title)}</h2>${o.tools ? `<div class="card-tools">${o.tools}</div>` : ''}</header>` : ''}
      ${o.sub ? `<p class="card-sub">${o.sub}</p>` : ''}
      <div class="card-b">${skeleton(o.skeleton || 'block')}</div>
      <footer class="card-f"></footer></section>`);
    if (o.sub) ui.addInfo(el);
    return el;
  };
  // «i»-Knopf: Erklärtexte (Untertitel, Hinweise) erst auf Wunsch zeigen – die Anzeige bleibt ruhig
  ui.addInfo = function (card) {
    const h = card.querySelector('.card-h');
    if (!h || h.querySelector('.info-btn')) return;
    let tools = h.querySelector('.card-tools');
    if (!tools) { tools = document.createElement('div'); tools.className = 'card-tools'; h.appendChild(tools); }
    const b = U.el('<button type="button" class="info-btn" aria-expanded="false" aria-label="Erklärung anzeigen"><span>i</span></button>');
    b.onclick = () => { const open = card.classList.toggle('info-open'); b.setAttribute('aria-expanded', String(open)); };
    tools.appendChild(b);
  };
  function skeleton(kind) {
    if (kind === 'fields') return `<div class="grid-fields">${'<div class="sk sk-field"></div>'.repeat(4)}</div>`;
    if (kind === 'chart') return '<div class="sk sk-chart"></div>';
    if (kind === 'none') return '';
    return '<div class="sk sk-line"></div><div class="sk sk-line w70"></div><div class="sk sk-block"></div>';
  }
  // Inhalt laden: Skeleton → Daten → Stand-Anzeige, Fehler mit Wiederholen-Knopf
  ui.fill = async function (card, loader) {
    const body = card.querySelector('.card-b'), foot = card.querySelector('.card-f');
    try {
      const metas = await loader(body);
      ui.stamp(foot, [].concat(metas || []).filter(Boolean));
      card.classList.remove('is-error');
      if (body.querySelector('.hint')) ui.addInfo(card);
    } catch (err) {
      console.warn('[SwissWind24]', card.id || '', err);
      card.classList.add('is-error');
      body.innerHTML = `<div class="err"><b>Daten nicht verfügbar</b><span>${U.esc(err.message || String(err))}</span>
        <button class="btn" type="button">Erneut laden</button></div>`;
      body.querySelector('button').onclick = () => { body.innerHTML = skeleton(); ui.fill(card, loader); };
      foot.innerHTML = '';
    }
  };
  // Datenstand pro Karte
  ui.stamp = function (foot, metas) {
    if (!metas.length) { foot.innerHTML = ''; return; }
    const oldest = Math.min.apply(null, metas.map(m => m.fetchedAt));
    const old = Date.now() - oldest > C.cache.staleWarnMinutes * 60000;
    const err = metas.find(m => m.error);
    const model = metas.find(m => m.model);
    foot.innerHTML = `<span class="stand ${old ? 'old' : ''}">Stand ${U.hhmm(oldest / 1000)} · ${U.ago(oldest)}</span>
      ${old ? '<span class="badge warn">Daten älter als 1 h</span>' : ''}
      ${err ? `<span class="badge bad">Offline/Fehler: zeige gespeicherte Daten</span>` : ''}
      ${model ? ui.modelNote(model) : ''}`;
  };
  // Welches Modell wurde wirklich genutzt?
  ui.modelNote = function (meta, onlyVars) {
    const m = SW.api.modelInfo(meta.model), f = meta.fallback ? SW.api.modelInfo(meta.fallback) : null;
    const parts = [];
    if (meta.src) {
      const w = meta.src.wind_speed_10m;
      if (w && !w.prim && f) parts.push(`<b>${U.esc(f.label)}</b> (${U.esc(m.label)} liefert für diesen Ort nichts)`);
      else if (w && w.fb && w.until && f) parts.push(`${U.esc(m.label)} bis ${U.dayShort(w.until)} ${U.hhmm(w.until)}, danach ${U.esc(f.label)}`);
      else parts.push(U.esc(m.label));
      Object.keys(meta.src).filter(k => !onlyVars || onlyVars.includes(k)).forEach(k => {
        const s = meta.src[k];
        if (s.missing) parts.push(`${U.esc(SW.api.VAR_LABEL[k] || k)}: keine Daten`);
        else if (!s.prim && s.fb && f && k !== 'wind_speed_10m') parts.push(`${U.esc(SW.api.VAR_LABEL[k] || k)} aus ${U.esc(f.label)}`);
      });
    }
    return `<span class="model-note">Modell: ${parts.join(' · ')}</span>`;
  };

  /* ---------- Toast statt alert() ---------- */
  ui.toast = function (msg, kind) {
    let box = U.$('#toasts');
    const t = U.el(`<div class="toast ${kind || ''}" role="status">${U.esc(msg)}</div>`);
    box.appendChild(t);
    setTimeout(() => t.classList.add('out'), 3200);
    setTimeout(() => t.remove(), 3700);
  };

  /* ---------- Sheet (Auswahlfenster von unten) ---------- */
  ui.sheet = function (title, contentEl, onClose) {
    const wrap = U.el(`<div class="sheet-wrap" role="dialog" aria-modal="true" aria-label="${U.esc(title)}">
      <div class="sheet"><header class="sheet-h"><h2>${U.esc(title)}</h2><button class="icon-btn" type="button" aria-label="Schliessen">${ui.icon('close')}</button></header>
      <div class="sheet-b"></div></div></div>`);
    wrap.querySelector('.sheet-b').appendChild(contentEl);
    const close = () => { wrap.remove(); document.removeEventListener('keydown', esc); onClose && onClose(); };
    const esc = e => { if (e.key === 'Escape') close(); };
    wrap.addEventListener('click', e => { if (e.target === wrap) close(); });
    wrap.querySelector('.icon-btn').onclick = close;
    document.addEventListener('keydown', esc);
    document.body.appendChild(wrap);
    return { close };
  };

  // Einheitliche Rückfrage vor Löschen/Beenden: ein Fenster mit klarer Folge und zwei Knöpfen
  ui.confirm = function (title, text, okLabel, onOk) {
    const el = U.el(`<div class="confirm"><p>${U.esc(text)}</p><div class="row-btns"><button class="btn danger-fill" type="button" data-c="ok">${U.esc(okLabel || 'Löschen')}</button><button class="btn" type="button" data-c="no">Abbrechen</button></div></div>`);
    const sh = ui.sheet(title, el);
    el.onclick = e => { const b = e.target.closest('[data-c]'); if (!b) return; sh.close(); if (b.dataset.c === 'ok') onOk(); };
  };

  /* ---------- Status-Kennzeichen ---------- */
  ui.pill = (st, text) => `<span class="pill st-${st}">${U.esc(text)}</span>`;
  ui.note = (html, kind) => `<div class="note ${kind || ''}">${html}</div>`;

  /* ---------- Wischen zwischen Seiten ---------- */
  ui.enableSwipe = function (area, onSwipe) {
    let sx = 0, sy = 0, st = 0, active = false;
    area.addEventListener('touchstart', e => {
      const t = e.target;
      if (e.touches.length !== 1 || t.closest('[data-noswipe],input,select,textarea,iframe,.sheet-wrap')) { active = false; return; }
      active = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY; st = Date.now();
    }, { passive: true });
    area.addEventListener('touchend', e => {
      if (!active) return; active = false;
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.8 && Date.now() - st < 600) onSwipe(dx < 0 ? 1 : -1); // klar waagrecht und zügig
    }, { passive: true });
  };
})();

/* ---- js/pages/common.js ---- */
/* Gemeinsame Lader und Bausteine für die Seiten. */
(function () {
  const C = SW.CONFIG, U = SW.util;
  SW.pages = [];                                                     // Reihenfolge = Navigation = Seitenpunkte
  SW.page = (id, def) => { def.id = id; SW.pages.push(def); };

  const L = SW.load = {};
  L.SPOT_HOURLY = ['wind_speed_10m', 'wind_gusts_10m', 'wind_direction_10m', 'temperature_2m', 'relative_humidity_2m', 'cloud_cover',
    'precipitation', 'weather_code', 'pressure_msl', 'shortwave_radiation', 'wind_speed_850hPa', 'temperature_850hPa'];
  L.SPOT_DAILY = ['sunrise', 'sunset', 'sunshine_duration', 'temperature_2m_max', 'precipitation_sum'];
  L.WIND = ['wind_speed_10m', 'wind_gusts_10m', 'wind_direction_10m'];

  // Volldatensatz eines Spots (von Heute, Spot und Feierabend gemeinsam genutzt → gleiche URL, ein Cache-Eintrag)
  L.spot = async function (spot) {
    const r = await SW.api.forecast({ points: [spot], hourly: L.SPOT_HOURLY, daily: L.SPOT_DAILY, minutely: L.WIND, m15Hours: 48, days: 3 });
    return { set: r.sets[0], meta: r.meta };
  };
  // Aktuelle Winde aller Favoriten in einem Request
  L.favs = async function (spots) {
    const r = await SW.api.forecast({ points: spots, hourly: L.WIND.concat(['weather_code']), days: 2 });
    return r;
  };

  // Modellwind am GPS-Standort (gerundet auf ~1 km, gecacht) und aktueller Wert (15 min, falls vorhanden)
  let posWind = null;
  L.windAtPos = async function (pos) {
    const key = `${pos.lat.toFixed(2)},${pos.lon.toFixed(2)}`;
    if (posWind && posWind.key === key) return posWind;
    const r = await SW.api.forecast({ points: [{ lat: +pos.lat.toFixed(2), lon: +pos.lon.toFixed(2) }], hourly: L.WIND, minutely: L.WIND, m15Hours: 6, days: 1 });
    posWind = { key, set: r.sets[0], meta: r.meta };
    return posWind;
  };
  L.windNow = set => {
    const s = set.m15 && set.m15.v.wind_speed_10m.some(U.isNum) ? set.m15 : set.hourly, i = U.indexAt(s.t, U.nowSec());
    return { spd: s.v.wind_speed_10m[i], gst: s.v.wind_gusts_10m[i], dir: s.v.wind_direction_10m[i], t: s.t[i] };
  };

  // Kartenhintergrund für Routen: Landeskarte grau, darüber der Vierwaldstättersee als Fläche mit Uferlinie
  // Ohne Landeskarte: ruhiger dunkler Grund, nur der See als Fläche – lädt sofort und funktioniert offline
  SW.lakeMap = function (map) {
    map.getContainer().classList.add('lake-only');
    map.attributionControl.addAttribution('Uferlinie © OpenStreetMap');
    const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
    Object.keys(SW.LAKES || {}).forEach(id => {                       // alle Seen mit Uferlinie
      const lake = SW.LAKES[id], rings = lake.outer.concat(lake.inner).map(r => r.map(p => [p[1], p[0]]));
      window.L.polygon(rings, { color: css('--lake-line') || '#2f7fd1', weight: 1.5, fillColor: css('--lake') || '#3aa0ff', fillOpacity: 0.28, interactive: false }).addTo(map);
    });
  };

  // Seen mit Uferlinie: Auswahl-Chips und Kartengrenzen
  SW.lakeIds = () => Object.keys(SW.LAKES || {});
  SW.lakeBounds = id => { const lk = SW.LAKES && SW.LAKES[id]; return lk ? [[lk.bbox[1], lk.bbox[0]], [lk.bbox[3], lk.bbox[2]]] : [[46.9, 8.3], [47.1, 8.6]]; };
  SW.curLake = () => (SW.LAKES && SW.LAKES[SW.settings.lake] ? SW.settings.lake : C.route.free.lake);
  SW.lakeChips = (cur, cls) => `<div class="chips small lake-chips ${cls || ''}" role="radiogroup" aria-label="See wählen">${SW.lakeIds().map(id => `<button type="button" class="chip ${id === cur ? 'on' : ''}" data-lake="${id}">${U.esc(SW.LAKES[id].name)}</button>`).join('')}</div>`;

  /* ---------- WMO-Wettercodes ---------- */
  const WMO = { 0: 'klar', 1: 'meist klar', 2: 'teils bewölkt', 3: 'bedeckt', 45: 'Nebel', 48: 'Raureifnebel', 51: 'Niesel', 53: 'Niesel', 55: 'starker Niesel',
    56: 'gefrierender Niesel', 57: 'gefrierender Niesel', 61: 'leichter Regen', 63: 'Regen', 65: 'starker Regen', 66: 'gefrierender Regen', 67: 'gefrierender Regen',
    71: 'leichter Schnee', 73: 'Schnee', 75: 'starker Schnee', 77: 'Griesel', 80: 'Schauer', 81: 'Schauer', 82: 'heftige Schauer', 85: 'Schneeschauer', 86: 'Schneeschauer',
    95: 'Gewitter', 96: 'Gewitter mit Hagel', 99: 'Gewitter mit Hagel' };
  L.wmo = c => (U.isNum(c) ? (WMO[c] || `Code ${c}`) : '–');
  L.wmoSt = c => (!U.isNum(c) ? 'na' : c >= 95 ? 'bad' : c >= 51 ? 'warn' : 'off');

  /* ---------- Bausteine ---------- */
  // Kleine Windzelle: Farbe nach kt, Pfeil, Böe
  L.windChip = function (spd, gst, dir) {
    const c = U.windColor(spd);
    return `<span class="wchip" style="background:${c.c};color:${c.t}">
      ${U.isNum(dir) ? `<svg viewBox="0 0 20 20" style="transform:rotate(${dir + 180}deg)"><path d="M10,2 L15,16 L10,13 L5,16 Z" fill="currentColor"/></svg>` : ''}
      <b class="num">${U.r(spd)}</b><small class="num">${U.isNum(gst) ? U.r(gst) : ''}</small></span>`;
  };
  // Auswahl der Sportart (Chips)
  // Sportarten des aktiven Modus (ohne Flusswelle, die hat Abfluss statt Wind)
  L.modeSports = () => { const l = SW.mode().sports.filter(k => k !== 'welle' && SW.settings.sports[k]); return l.length ? l : ['foil']; };
  L.sportKey = () => { const l = L.modeSports(); return l.includes(SW.settings.sport) ? SW.settings.sport : l[0]; };
  L.sport = () => SW.settings.sports[L.sportKey()];
  L.sportChips = function (cur, onPick) {
    const list = L.modeSports();
    if (list.length < 2) return U.el('<div hidden></div>');          // nur eine Sportart im Modus: keine Auswahl nötig
    const el = U.el(`<div class="chips" role="radiogroup" aria-label="Sportart">${list.map(k =>
      `<button type="button" class="chip ${k === cur ? 'on' : ''}" role="radio" aria-checked="${k === cur}" data-k="${k}">${U.esc(SW.settings.sports[k].label)}</button>`).join('')}</div>`);
    el.addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; onPick(b.dataset.k); });
    return el;
  };
  // Windy-Karte nur laden, wenn online
  L.windy = function (view, height) {
    const url = C.windy.url.replace(/\{lat\}/g, view.lat).replace(/\{lon\}/g, view.lon).replace('{zoom}', view.zoom);
    if (navigator.onLine === false) return `<div class="placeholder" style="height:${height || 420}px">Windkarte offline nicht verfügbar</div>`;
    return `<iframe class="windy" title="Windkarte ${U.esc(view.name)}" loading="lazy" style="height:${height || 420}px" src="${url}" referrerpolicy="no-referrer"></iframe>`;
  };
  // 3-Tage-Karten für einen Spot (Romanshorn, Westwind-Spots)
  L.dayCards = function (set, days, opts) {
    opts = opts || {};
    const h = set.hourly, sport = L.sport();
    return `<div class="day-cards">${days.slice(0, 3).map(day => {
      let best = null;
      day.idx.forEach(i => { const hr = U.hourOf(h.t[i]); if (hr < (opts.from || 8) || hr > (opts.to || 20)) return; const g = h.v.wind_gusts_10m[i], s = h.v.wind_speed_10m[i]; if (U.isNum(s) && (!best || s > best.s)) best = { s, g, t: h.t[i], d: h.v.wind_direction_10m[i] }; });
      const ok = best && A_ok(sport, best);
      const rec = !best ? 'keine Daten' : best.s >= 16 ? 'Kite / Windsurf' : best.s >= 10 ? 'Foil / Segeln' : best.s >= 6 ? 'Segeln (leicht)' : 'Flaute';
      return `<div class="day-card"><h3>${U.esc(U.dayLabel(day.start))}</h3>
        <div class="grid-fields three">
          ${SW.g.field({ label: 'Max. Mittelwind', value: best ? U.r(best.s) : '–', unit: 'kt', status: ok ? 'ok' : '' })}
          ${SW.g.field({ label: 'Böen dabei', value: best ? U.r(best.g) : '–', unit: 'kt' })}
          ${SW.g.field({ label: 'Peak', value: best ? U.hhmm(best.t) : '–', sub: best ? `${U.dirName(best.d)} ${U.r(best.d)}°` : '' })}
        </div><div class="day-rec">${U.esc(rec)} ${ok ? SW.ui.pill('ok', sport.label + ' fahrbar') : ''}</div></div>`;
    }).join('')}</div>`;
  };
  function A_ok(sport, b) { return SW.ana.sportOk(sport, b.s, b.g); }
})();

/* ---- js/pages/heute.js ---- */
/* Seite «Heute»: Live-Dashboard (GPS) und Lage auf einen Blick. Welche Karten in welcher Reihenfolge erscheinen, bestimmt der Modus (Setup). */
(function () {
  const U = SW.util, C = SW.CONFIG, L = SW.load, ui = SW.ui, g = SW.g, A = SW.ana;
  const LV = SW.live;

  // Wind des Modells am aktuellen GPS-Standort (gerundet auf ~2 km, gecacht) – Grundlage für den wahren Windwinkel
  let posWind = null;
  async function windAtPos(pos) {
    const key = `${pos.lat.toFixed(2)},${pos.lon.toFixed(2)}`;
    if (posWind && posWind.key === key) return posWind;
    const r = await SW.api.forecast({ points: [{ lat: +pos.lat.toFixed(2), lon: +pos.lon.toFixed(2) }], hourly: L.WIND, minutely: L.WIND, m15Hours: 6, days: 1 });
    posWind = { key, set: r.sets[0], meta: r.meta };
    return posWind;
  }
  const windNow = set => {                                           // 15-min-Wert, falls vorhanden, sonst Stundenwert
    const s = set.m15 && set.m15.v.wind_speed_10m.some(U.isNum) ? set.m15 : set.hourly, i = U.indexAt(s.t, U.nowSec());
    return { spd: s.v.wind_speed_10m[i], gst: s.v.wind_gusts_10m[i], dir: s.v.wind_direction_10m[i], t: s.t[i] };
  };
  const pointOfSail = twa => (!U.isNum(twa) ? '–' : twa < 50 ? 'Am Wind' : twa < 80 ? 'Hoch am Wind' : twa < 110 ? 'Halbwind' : twa < 150 ? 'Raumschots' : 'Vor dem Wind');

  // Kartenregister: id → { size, title, build(card, ctx) }. size: full = ganze Breite, half = halbe Breite
  const CARDS = SW.heuteCards = {
    // Cockpit: der Bildschirm während dem Segeln. Wind jetzt, Speed, Kurs, Ampel und Kleinwerte ohne Scrollen.
    cockpit: { size: 'full', title: s => `Cockpit · ${s.name}`, build(card, ctx) {
      const body = card.querySelector('.card-b');
      body.innerHTML = `<div class="ck">
          <section class="ck-tile ck-wind" aria-label="Wind jetzt">
            <div class="f-lab">Wind jetzt</div>
            <div class="ck-row"><div><div class="ck-big num" data-k="tws">–</div><div class="ck-unit">KT · BÖEN <b class="num" data-k="gst">–</b></div></div>
              <div class="ck-cmp" data-k="wcmp"></div></div>
            <div class="ck-foot" data-k="wsrc">Prognose</div></section>
          <section class="ck-tile ck-sog" aria-label="Speed über Grund">
            <div class="f-lab">Speed über Grund</div>
            <div class="ck-big num" data-k="sog">–</div><div class="ck-unit">KT · SOG</div>
            <div class="ck-foot"><span>Max <b class="num" data-k="max">–</b></span><span>Ø <b class="num" data-k="avg">–</b></span></div></section>
          <section class="ck-tile ck-cog" aria-label="Kurs und Windwinkel">
            <div class="f-lab">Kurs · Windwinkel</div>
            <div class="ck-row"><div><div class="ck-big num" data-k="twa">–</div><div class="ck-unit">° TWA <span data-k="bug"></span></div></div>
              <div class="ck-cmp" data-k="ccmp"></div></div>
            <div class="ck-foot" data-k="pos">Kurs braucht GPS</div></section>
          <section class="ck-tile ck-amp" aria-label="Nächste 3 Stunden">
            <div class="f-lab">Nächste 3 Stunden</div>
            <div class="ck-status" data-k="amp">–</div>
            <div class="ck-hours" data-k="hours"></div>
            <div class="ck-foot" data-k="ampsub"></div></section>
        </div>
        <div class="ck-strip">
          <div><span class="f-lab">COG</span><b class="num" data-k="cog">–</b><small>°</small></div>
          <div><span class="f-lab">Strecke</span><b class="num" data-k="dist">–</b><small>km</small></div>
          <div><span class="f-lab">Fahrzeit</span><b class="num" data-k="dur">–</b></div>
          <div><span class="f-lab">Druck 3 h</span><b class="num" data-k="dp">–</b><small>hPa</small></div>
          <div><span class="f-lab">Uhrzeit</span><b class="num" data-k="clock">–</b></div>
          <div><span class="f-lab">Sonnenuntergang</span><b class="num" data-k="sun">–</b></div>
        </div>
        <div data-k="warn"></div>
        <div class="live-bar" data-noswipe>
          <button class="btn primary" type="button" data-a="gps">GPS starten</button>
          <button class="btn" type="button" data-a="reset">Zurücksetzen</button>
          ${LV.wakeSupported() ? '<label class="toggle"><input type="checkbox" data-a="wake"><span>Bildschirm wach halten</span></label>' : ''}
          <span class="live-state" data-k="state"></span></div>
        <p class="hint">Wind: Modellprognose (15-Minuten-Wert, falls verfügbar) am GPS-Standort, ohne GPS am gewählten Spot. Der Zeiger im Windkreis steht dort, woher der Wind kommt. Speed und Kurs kommen vom GPS des Geräts und bleiben auf dem Gerät. TWA = Winkel zwischen Kurs und Wind, STB/BB = Steuerbord-/Backbord-Bug. Ampel: grün ab ${C.ampel.greenKt} kt Mittelwind, gelb ab ${C.ampel.yellowKt} kt, rot bei Gewitter. GPS braucht die gehostete App oder lokal-starten.bat.</p>`;
      const $ = k => body.querySelector(`[data-k="${k}"]`);
      let spotWind = null, gpsWind = null, sunset = null, shown = false;
      if (ctx.spotP) ctx.spotP.then(({ set, meta }) => {
        spotWind = windNow(set);
        const d = A.days(set, 1)[0]; sunset = d && d.sunset;
        const h = set.hourly, i = U.indexAt(h.t, U.nowSec()), i3 = U.indexAt(h.t, U.nowSec() - 3 * 3600);
        const dp = h.t[0] <= U.nowSec() - 3 * 3600 && U.isNum(h.v.pressure_msl[i]) && U.isNum(h.v.pressure_msl[i3]) ? h.v.pressure_msl[i] - h.v.pressure_msl[i3] : null;
        $('dp').textContent = U.isNum(dp) ? (dp > 0 ? '+' : '') + dp.toFixed(1) : '–';
        $('dp').parentNode.classList.toggle('st-warn', U.isNum(dp) && dp <= -2);
        const wc = A.windcheck(h), warn = A.warning(h, 3);
        const amp = body.querySelector('.ck-amp'); amp.className = `ck-tile ck-amp lv-${wc.level}`;
        $('amp').textContent = wc.text;
        $('hours').innerHTML = wc.rows.map(r => `<span><em>${U.hhmm(r.t)}</em>${L.windChip(r.spd, r.gst, r.dir)}</span>`).join('');
        $('ampsub').textContent = wc.thunder ? 'Gewitter im Modell' : wc.rain ? 'Regen möglich' : 'trocken';
        $('warn').innerHTML = warn ? ui.note(`<b>${warn.level === 'storm' ? 'STURM' : 'STARKWIND'}</b> ${U.esc(warn.text)} um ${U.hhmm(warn.at)}`, warn.level === 'storm' ? 'bad' : 'warn') : '';
        ui.stamp(card.querySelector('.card-f'), [meta]);
        paint();
      }).catch(err => { $('wsrc').textContent = 'Wind nicht verfügbar: ' + err.message; });
      const paint = () => {
        if (!body.isConnected) { if (shown) { off(); clearInterval(clock); } return; }   // erst abmelden, wenn die Karte schon sichtbar war
        shown = true;
        const f = LV.fix, st = LV.stats, fresh = f && Date.now() - f.t < 10000;
        const wind = gpsWind || spotWind;
        // Wind
        $('tws').textContent = wind ? U.r(wind.spd) : '–';
        $('gst').textContent = wind ? U.r(wind.gst) : '–';
        $('wcmp').innerHTML = g.compass({ dir: wind ? wind.dir : null, kind: 'wind', label: '' });
        $('wsrc').textContent = wind ? `aus ${U.dirName(wind.dir)} ${U.r(wind.dir)}° · Prognose ${U.hhmm(wind.t)} · ${gpsWind ? 'GPS-Standort' : ctx.spot.name}` : 'lade Wind…';
        // Speed
        const sogEl = $('sog');
        if (fresh && U.isNum(f.sog)) { sogEl.textContent = f.sog.toFixed(1); sogEl.classList.remove('idle'); }
        else { sogEl.textContent = LV.running ? 'suche GPS' : 'GPS aus'; sogEl.classList.add('idle'); }    // klarer Text statt Platzhalter-Strichen
        $('max').textContent = st && st.max ? st.max.toFixed(1) : '–';
        $('avg').textContent = st && st.n ? (st.sum / st.n).toFixed(1) : '–';
        // Kurs und Windwinkel
        const cog = fresh ? f.cog : null;
        $('cog').textContent = U.isNum(cog) ? Math.round(cog) : '–';
        $('ccmp').innerHTML = g.compass({ dir: U.isNum(cog) ? cog : null, kind: 'course', label: '' });
        if (wind && U.isNum(cog) && U.isNum(wind.dir) && f.sog > 0.8) {
          const twa = U.angDiff(cog, wind.dir), stb = ((wind.dir - cog + 540) % 360) - 180 > 0;
          $('twa').textContent = Math.round(twa); $('twa').classList.remove('idle');
          $('bug').innerHTML = `<span class="bug ${stb ? 'stb' : 'bb'}">${stb ? 'STB' : 'BB'}</span>`;
          $('pos').textContent = `${pointOfSail(twa)} · Kurs ${Math.round(cog)}°`;
        } else {
          $('twa').textContent = '–'; $('twa').classList.add('idle'); $('bug').innerHTML = '';
          $('pos').textContent = !LV.running ? 'Kurs braucht GPS' : U.isNum(cog) ? 'zu langsam für Windwinkel' : 'warte auf GPS-Kurs';
        }
        // Kleinwerte
        $('dist').textContent = st && LV.running ? st.dist.toFixed(2) : '–';
        const s = st && LV.running ? Math.floor((Date.now() - st.start) / 1000) : null;
        $('dur').textContent = s === null ? '–' : `${Math.floor(s / 3600)}:${String(Math.floor(s % 3600 / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
        $('clock').textContent = new Date().toLocaleTimeString('de-CH', { timeZone: C.timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        if (sunset) { const m = Math.round((sunset - U.nowSec()) / 60); $('sun').textContent = m > 0 ? `${U.hhmm(sunset)} (${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')})` : `${U.hhmm(sunset)} vorbei`; }
        // GPS-Leiste
        const btn = body.querySelector('[data-a="gps"]');
        btn.textContent = LV.running ? 'GPS stoppen' : 'GPS starten'; btn.classList.toggle('primary', !LV.running);
        const w = body.querySelector('[data-a="wake"]'); if (w) w.checked = LV.wake;
        $('state').innerHTML = LV.error ? `<span class="t-bad">${U.esc(LV.error)}</span>` : LV.running ? (fresh ? `GPS ± ${Math.round(f.acc)} m` : 'warte auf GPS…') : 'GPS aus';
        card.classList.toggle('is-live', !!(LV.running && fresh));
      };
      const off = LV.on(() => {
        paint();
        if (LV.fix) windAtPos(LV.fix.pos).then(p => { gpsWind = windNow(p.set); paint(); }).catch(() => {});   // Wind am Standort nachladen
      });
      const clock = setInterval(paint, 1000);
      body.querySelector('.live-bar').addEventListener('click', e => {
        const a = e.target.closest('[data-a]'); if (!a) return;
        if (a.dataset.a === 'gps') LV.running ? LV.stop() : LV.start();
        if (a.dataset.a === 'reset') LV.reset();
      });
      body.querySelector('.live-bar').addEventListener('change', e => { if (e.target.dataset.a === 'wake') LV.setWake(e.target.checked); });
      ui.addInfo(card);
      paint();
    } },

    live: { size: 'full', title: () => 'Live', build(card, ctx) {
      const body = card.querySelector('.card-b');
      body.innerHTML = `<div class="live-grid">
          <div class="live-main"><div class="f-lab">Speed über Grund</div><div class="live-sog num" data-k="sog">–</div><div class="live-unit">KT · SOG</div>
            <div class="live-sub"><span>Max <b class="num" data-k="max">–</b></span><span>Ø <b class="num" data-k="avg">–</b></span></div></div>
          <div class="live-cog">${g.compass({ dir: null, kind: 'course', label: 'Kurs über Grund' })}</div>
          <div class="grid-fields three live-fields">
            ${g.field({ label: 'COG', value: '<span data-k="cog">–</span>', unit: '°' })}
            ${g.field({ label: 'Windwinkel TWA', value: '<span data-k="twa">–</span>', unit: '°', sub: '<span data-k="pos">–</span>' })}
            ${g.field({ label: 'Wind (Modell)', value: '<span data-k="tws">–</span>', unit: 'kt', sub: '<span data-k="twd">–</span>' })}
            ${g.field({ label: 'Strecke', value: '<span data-k="dist">–</span>', unit: 'km' })}
            ${g.field({ label: 'Fahrzeit', value: '<span data-k="dur">–</span>' })}
            ${g.field({ label: 'Uhrzeit', value: '<span data-k="clock">–</span>', sub: '<span data-k="sun">–</span>' })}
          </div></div>
        <div class="live-bar" data-noswipe>
          <button class="btn primary" type="button" data-a="gps">GPS starten</button>
          <button class="btn" type="button" data-a="reset">Zurücksetzen</button>
          ${LV.wakeSupported() ? '<label class="toggle"><input type="checkbox" data-a="wake"><span>Bildschirm wach halten</span></label>' : ''}
          <span class="live-state" data-k="state"></span></div>
        <p class="hint">SOG und COG kommen direkt vom GPS des Geräts und bleiben auf dem Gerät. Der Wind ist eine Modellprognose für den aktuellen Standort (ohne GPS: aktueller Spot); daraus rechnet die App den wahren Windwinkel TWA und den Bug. GPS braucht HTTPS oder die installierte App; das GPS läuft weiter, bis du es stoppst.</p>`;
      const $ = k => body.querySelector(`[data-k="${k}"]`);
      const compass = body.querySelector('.live-cog');
      let wind = null, sunset = null;
      ctx.spotP && ctx.spotP.then(({ set }) => { if (!wind) wind = windNow(set); const d = A.days(set, 1)[0]; sunset = d && d.sunset; paint(); }).catch(() => {});
      let shown = false;
      const paint = () => {
        if (!body.isConnected) { if (shown) { off(); clearInterval(clock); } return; }   // erst abmelden, wenn die Karte schon sichtbar war
        shown = true;
        const f = LV.fix, st = LV.stats;
        const fresh = f && Date.now() - f.t < 10000;
        $('sog').textContent = fresh && U.isNum(f.sog) ? f.sog.toFixed(1) : (LV.running ? 'suche GPS' : 'GPS aus'); $('sog').classList.toggle('idle', !(fresh && U.isNum(f.sog)));
        $('cog').textContent = fresh && U.isNum(f.cog) ? Math.round(f.cog) : '–';
        $('max').textContent = st && st.max ? st.max.toFixed(1) : '–';
        $('avg').textContent = st && st.n ? (st.sum / st.n).toFixed(1) : '–';
        $('dist').textContent = st ? st.dist.toFixed(2) : '–';
        const s = st && LV.running ? Math.floor((Date.now() - st.start) / 1000) : null;
        $('dur').textContent = s === null ? '–' : `${Math.floor(s / 3600)}:${String(Math.floor(s % 3600 / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
        if (wind) { $('tws').textContent = U.r(wind.spd); $('twd').textContent = `aus ${U.dirName(wind.dir)} ${U.r(wind.dir)}° · Böen ${U.r(wind.gst)}`; }
        const cog = fresh ? f.cog : null;
        if (wind && U.isNum(cog) && U.isNum(wind.dir) && f.sog > 0.8) {
          const twa = U.angDiff(cog, wind.dir), stb = ((wind.dir - cog + 540) % 360) - 180 > 0;
          $('twa').textContent = Math.round(twa);
          $('pos').innerHTML = `<span class="bug ${stb ? 'stb' : 'bb'}">${stb ? 'STB' : 'BB'}</span> ${pointOfSail(twa)}`;
        } else { $('twa').textContent = '–'; $('pos').textContent = U.isNum(cog) ? 'zu langsam' : 'braucht GPS-Kurs'; }
        compass.innerHTML = g.compass({ dir: U.isNum(cog) ? cog : null, kind: 'course', label: 'Kurs über Grund' });
        $('clock').textContent = new Date().toLocaleTimeString('de-CH', { timeZone: C.timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        if (sunset) { const m = Math.round((sunset - U.nowSec()) / 60); $('sun').textContent = m > 0 ? `Sonnenuntergang in ${Math.floor(m / 60)} h ${m % 60} min` : `Sonnenuntergang ${U.hhmm(sunset)}`; }
        const btn = body.querySelector('[data-a="gps"]');
        btn.textContent = LV.running ? 'GPS stoppen' : 'GPS starten'; btn.classList.toggle('primary', !LV.running);
        const w = body.querySelector('[data-a="wake"]'); if (w) w.checked = LV.wake;
        $('state').innerHTML = LV.error ? `<span class="t-bad">${U.esc(LV.error)}</span>` : LV.running ? (fresh ? `GPS ± ${Math.round(f.acc)} m` : 'warte auf GPS…') : 'GPS aus';
        card.classList.toggle('is-live', !!(LV.running && fresh));
      };
      const off = LV.on(() => {
        paint();
        if (LV.fix) windAtPos(LV.fix.pos).then(p => { wind = windNow(p.set); paint(); }).catch(() => {});   // Wind am Standort nachladen
      });
      const clock = setInterval(paint, 1000);
      body.querySelector('.live-bar').addEventListener('click', e => {
        const a = e.target.closest('[data-a]'); if (!a) return;
        if (a.dataset.a === 'gps') LV.running ? LV.stop() : LV.start();
        if (a.dataset.a === 'reset') LV.reset();
      });
      body.querySelector('.live-bar').addEventListener('change', e => { if (e.target.dataset.a === 'wake') LV.setWake(e.target.checked); });
      ui.addInfo(card);
      paint();
    } },

    ampel: { size: 'full', skeleton: 'fields', title: s => `3h Windcheck · ${s.name}`, build(card, ctx) {
      ui.fill(card, async body => {
        const { set, meta } = await ctx.spotP;
        const wc = A.windcheck(set.hourly), warn = A.warning(set.hourly, 3);
        body.innerHTML = `<div class="ampel lv-${wc.level}">
            <div class="ampel-lamp" aria-hidden="true"></div>
            <div class="ampel-txt"><div class="ampel-main">${U.esc(wc.text)}</div>
              <div class="ampel-hours">${wc.rows.map(r => `<span><em>${U.hhmm(r.t)}</em> ${L.windChip(r.spd, r.gst, r.dir)}</span>`).join('')}</div>
              <div class="f-sub">${wc.thunder ? 'Gewitter im Modell' : wc.rain ? 'Regen möglich' : 'trocken'}${wc.codeMissing ? ' · Wettercode fehlt im Modell' : ''}</div></div></div>
          ${warn ? ui.note(`<b>${warn.level === 'storm' ? 'STURM' : 'STARKWIND'}</b> ${U.esc(warn.text)} um ${U.hhmm(warn.at)}`, warn.level === 'storm' ? 'bad' : 'warn') : ''}
          <p class="hint">Grün ab ${C.ampel.greenKt} kt Mittelwind, gelb ab ${C.ampel.yellowKt} kt, rot bei Gewitter. Warnungen angelehnt an den Sturmwarndienst der Seen (Böen 25 / 61 km/h), keine offizielle Warnung.</p>`;
        return meta;
      });
    } },

    now: { size: 'half', skeleton: 'fields', title: s => `Wind jetzt · ${s.name}`, build(card, ctx) {
      ui.fill(card, async body => {
        const { set, meta } = await ctx.spotP;
        const w = windNow(set), days = A.days(set, 3), th = A.thermik(set, days[0]);
        body.innerHTML = `<div class="now-row">
            ${g.tacho({ value: w.spd, gust: w.gst, max: 40, label: 'Mittelwind / Böe' })}
            ${g.compass({ dir: w.dir, kind: 'wind', label: 'Wind' })}
          </div>
          <div class="grid-fields three">
            ${g.field({ label: 'Böen max 3 h', value: U.r(A.windcheck(set.hourly).maxGst), unit: 'kt' })}
            ${g.field({ label: 'Thermik-Index', value: U.r(th.score), sub: th.peak && th.score >= 15 ? 'Peak ' + U.hhmm(th.peak) : 'heute' })}
            ${g.field({ label: 'Gültig für', value: U.hhmm(w.t), sub: 'Prognose' })}</div>
          <p class="hint">15-Minuten-Wert, wenn das Modell ihn liefert, sonst Stundenwert. Der Zeiger im Windkreis steht dort, woher der Wind kommt.</p>`;
        return meta;
      });
    } },

    wetter: { size: 'full', skeleton: 'fields', title: s => `Wetter jetzt · ${s.name}`, build(card, ctx) {
      ui.fill(card, async body => {
        const { set, meta } = await ctx.spotP;
        const h = set.hourly, i = U.indexAt(h.t, U.nowSec()), d = A.days(set, 1)[0];
        const p = h.v.pressure_msl[i], p3 = h.v.pressure_msl[U.indexAt(h.t, U.nowSec() - 3 * 3600)];
        const dp = U.isNum(p) && U.isNum(p3) && h.t[0] <= U.nowSec() - 3 * 3600 ? p - p3 : null;
        const rain3 = U.sum([0, 1, 2].map(k => h.v.precipitation[i + k]));
        const code = h.v.weather_code[i];
        const light = d && d.sunset ? Math.round((d.sunset - U.nowSec()) / 60) : null;
        body.innerHTML = `<div class="grid-fields six">
          ${g.field({ label: 'Druck MSL', value: U.r(p), unit: 'hPa', status: U.isNum(dp) && dp <= -2 ? 'warn' : '', sub: U.isNum(dp) ? `${dp > 0 ? '▲ +' : dp < 0 ? '▼ ' : ''}${dp.toFixed(1)} hPa in 3 h` : 'Tendenz noch offen' })}
          ${g.field({ label: 'Temperatur', value: U.r(h.v.temperature_2m[i], 1), unit: '°C', sub: `Feuchte ${U.r(h.v.relative_humidity_2m[i])} %` })}
          ${g.field({ label: 'Bewölkung', value: U.r(h.v.cloud_cover[i]), unit: '%', sub: U.esc(L.wmo(code)) })}
          ${g.field({ label: 'Regen 3 h', value: U.r(rain3, 1), unit: 'mm', status: U.isNum(code) && code >= 95 ? 'bad' : rain3 >= 1 ? 'warn' : '' })}
          ${g.field({ label: 'Einstrahlung', value: U.r(h.v.shortwave_radiation[i]), unit: 'W/m²' })}
          ${g.field({ label: 'Tageslicht', value: U.isNum(light) && light > 0 ? `${Math.floor(light / 60)}:${String(light % 60).padStart(2, '0')}` : '–', unit: U.isNum(light) && light > 0 ? 'h' : '', sub: d && d.sunset ? `${U.hhmm(d.sunrise)} – ${U.hhmm(d.sunset)}` : '' })}
          </div><p class="hint">Fallender Druck von 2 hPa und mehr in 3 Stunden (gelb markiert) kündigt oft Wetterumschwung und mehr Wind an – Faustregel.</p>`;
        return meta;
      });
    } },

    win: { size: 'half', title: () => 'Fahrbar heute & morgen', build(card, ctx) {
      ui.fill(card, async body => {
        const { set, meta } = await ctx.spotP;
        const draw = () => {
          const sport = L.sport(), days = A.days(set, 2);
          const wins = A.windows(set, days, sport);
          const best = days.map(d => ({ d, b: A.bestBlock(set, d, 3) }));
          body.innerHTML = '';
          body.appendChild(L.sportChips(L.sportKey(), k => { SW.saveSettings({ sport: k }); draw(); }));
          body.insertAdjacentHTML('beforeend', `
            <div class="win-list">${wins.length ? wins.map(w => `<div class="win st-ok"><b>${U.esc(U.dayLabel(w.start))} ${U.hhmm(w.start)}–${U.hhmm(w.end)}</b>
              <span>${U.esc(sport.label)} fahrbar · Ø ${U.r(w.avg)} kt, max ${U.r(w.max)} kt, Böen ${U.r(w.gust)} kt</span></div>`).join('')
              : `<div class="win st-off"><b>Kein ${U.esc(sport.label)}-Fenster</b><span>${sport.min}–${sport.max} kt während ${C.minWindowHours} h bei Tageslicht nicht erreicht</span></div>`}</div>
            <h3 class="sub-h">Bester 3-h-Block</h3>
            <div class="grid-fields two">${best.map(x => g.field({ label: U.dayLabel(x.d.start), value: x.b ? `${U.hhmm(x.b.start)}–${U.hhmm(x.b.end)}` : '–',
              sub: x.b ? `Ø ${U.r(x.b.avg)} kt · Böen ${U.r(x.b.gust)} · ${U.dirName(x.b.dir)}` : 'kein Block mehr bei Tageslicht' })).join('')}</div>`);
        };
        draw();
        return meta;
      });
    } },

    timeline: { size: 'full', title: s => `Zeitleiste · ${s.name}`, build(card, ctx) {
      ui.fill(card, async body => {
        const { set, meta } = await ctx.spotP;
        const use15 = set.m15 && SW.api.modelInfo(meta.model).minutely15 && set.m15.src.wind_speed_10m.prim;
        const s = use15 ? set.m15 : set.hourly;
        body.innerHTML = g.timeline(s.t, s.v.wind_speed_10m, s.v.wind_gusts_10m, s.v.wind_direction_10m);
        return meta;
      });
    } },

    fav: { size: 'half', title: () => 'Favoriten jetzt', build(card, ctx) {
      ui.fill(card, async body => {
        const spots = SW.settings.spots.filter(s => s.fav !== false);
        const r = await L.favs(spots);
        const now = U.nowSec();
        body.innerHTML = `<div class="fav-list">${spots.map((s, k) => {
          const h = r.sets[k].hourly, i = U.indexAt(h.t, now), wc = A.windcheck(h);
          return `<button type="button" class="fav-row ${s.id === ctx.spot.id ? 'cur' : ''}" data-id="${U.esc(s.id)}">
            <span class="dot lv-${wc.level}"></span><span class="fav-name">${U.esc(s.name)}</span>
            ${L.windChip(h.v.wind_speed_10m[i], h.v.wind_gusts_10m[i], h.v.wind_direction_10m[i])}
            <span class="fav-max">3h max <b class="num">${U.r(wc.maxSpd)}</b></span></button>`;
        }).join('')}</div><p class="hint">Antippen wechselt den Spot.</p>`;
        body.onclick = e => { const b = e.target.closest('.fav-row'); if (!b) return; SW.saveSettings({ spotId: b.dataset.id }); SW.app.refreshHeader(); SW.app.show('heute', true); };
        return r.meta;
      });
    } },

    welle: { size: 'half', title: () => 'Flusswelle Bremgarten', build(card) {
      ui.fill(card, async body => {
        const W = C.welle;
        const { data, meta } = await SW.api.hydroLatest([W.station].concat(W.upstream.map(u => u.id)));
        const m = data[W.station] || {}, q = m.flow ? m.flow.val : null, z = A.welleZone(q);
        const up = W.upstream.map(u => { const x = data[u.id] || {}; return `${U.esc(u.name.replace('Reuss – ', ''))} <b class="num">${x.flow ? U.r(x.flow.val) : '–'}</b>`; }).join(' · ');
        body.innerHTML = `<div class="grid-fields two">
          ${g.field({ label: 'Abfluss Mellingen', value: U.r(q), unit: 'm³/s', status: z.st, sub: ui.pill(z.st, z.label) })}
          ${g.field({ label: 'Messung', value: m.flow ? U.hhmm(m.flow.t) : '–', sub: 'BAFU, echte Messung' })}</div>
          ${g.zoneBar({ value: q, min: 0, max: W.scaleMax, zones: [{ to: W.low, color: 'var(--warn)' }, { to: W.high, color: 'var(--ok)' }, { to: W.scaleMax, color: 'var(--bad)' }], marks: [W.low, W.high] })}
          <p class="hint">Oberlieger (m³/s): ${up}</p>`;
        return meta;
      });
    } },

    rekord: { size: 'half', title: () => 'Rekordcheck Gelbes Band', build(card) {
      ui.fill(card, async body => {
        const b = await SW.bandData();
        body.innerHTML = `<div class="mini-days">${b.ev.map(e => {
          const st = e.record ? 'ok' : e.strong ? 'warn' : 'off';
          return `<div class="mini-day st-${st}"><b>${U.esc(U.dayShort(e.day.start))}</b><span class="num">${Math.round(e.score)}</span><small>${e.record ? 'Rekord' : e.strong ? 'gut' : 'flau'}</small></div>`;
        }).join('')}</div><p class="hint">Punkte 0–100 aus Druckgradient, Höhenwind und Seewind. Details auf der Seite «Wetter Gelbes Band».</p>`;
        return b.r.meta;
      });
    } },

    lagen: { size: 'half', title: () => 'Föhn · Bise · Westwind jetzt', build(card) {
      ui.fill(card, async body => {
        const { r, by } = await SW.lagenData();
        const now = (a, b) => { const d = A.diffSeries(by[a].hourly, by[b].hourly); return d[U.indexAt(by[a].hourly.t, U.nowSec())]; };
        const f = now('lugano', 'zuerich'), bi = now('konstanz', 'genf'), w = now('genf', 'bern');
        const cell = (lab, v, c) => g.field({ label: lab, value: U.isNum(v) ? (v > 0 ? '+' : '') + v.toFixed(1) : '–', unit: 'hPa', status: c.st === 'off' ? '' : c.st, sub: ui.pill(c.st, c.text) });
        body.innerHTML = `<div class="grid-fields three">${cell('Föhn', f, A.foehn(f))}${cell('Bise', bi, A.bise(bi))}${cell('West', w, A.west(w))}</div>
          <p class="hint">Föhn = Lugano − Zürich, Bise = Konstanz − Genf, West = Genf − Bern (Druck auf Meereshöhe). Faustregeln.</p>`;
        return r.meta;
      });
    } }
  };

  // Eine Zeile Antwort: Wann ist heute (oder morgen) die gewählte Sportart möglich?
  function verdict(spotP, spot) {
    const el = U.el('<div class="verdict st-off" role="status"><b>Prognose wird geladen …</b><span></span></div>');
    spotP.then(({ set }) => {
      const sport = L.sport(), days = A.days(set, 2), h = set.hourly;
      const wins = A.windows(set, days, sport);
      const dirOf = w => { const ii = h.t.map((t, i) => (t >= w.start && t < w.end ? i : -1)).filter(i => i >= 0); return U.circMean(ii.map(i => h.v.wind_direction_10m[i])); };
      const hh = t => U.hhmm(t).replace(':00', '');
      const today = wins.filter(w => w.day.date === U.todayKey()), later = wins.filter(w => w.day.date !== U.todayKey());
      let cls = 'st-off', main, sub;
      if (today.length) {
        const w = today[0];
        cls = 'st-ok'; main = `Heute ${hh(w.start)}–${hh(w.end)} Uhr ${sport.label} fahrbar`;
        sub = `Ø ${U.r(w.avg)} kt, Böen ${U.r(w.gust)} kt aus ${U.dirName(dirOf(w))}${today.length > 1 ? ` · ${today.length - 1} weiteres Fenster` : ''}${later.length ? ` · morgen ab ${hh(later[0].start)} Uhr` : ''}`;
      } else if (later.length) {
        const w = later[0];
        cls = 'st-warn'; main = `Heute nichts los – morgen ab ${hh(w.start)} Uhr`;
        sub = `${sport.label}: Ø ${U.r(w.avg)} kt, Böen ${U.r(w.gust)} kt aus ${U.dirName(dirOf(w))}, bis ${hh(w.end)} Uhr`;
      } else {
        const mx = U.max(days.flatMap(d => d.idx.map(i => h.v.wind_speed_10m[i])));
        main = `Heute und morgen kein ${sport.label}-Wind`;
        sub = `Höchstens ${U.r(mx)} kt bei ${spot.name} – nötig sind ${sport.min}–${sport.max} kt während ${C.minWindowHours} h`;
      }
      el.className = 'verdict ' + cls;
      el.innerHTML = `<b>${U.esc(main)}</b><span>${U.esc(sub)} · ${U.esc(spot.name)}</span>`;
    }).catch(() => el.remove());
    return el;
  }

  SW.page('heute', {
    label: 'Heute', icon: 'heute',
    async render(root) {
      const spot = SW.currentSpot();
      const ids = SW.mode().cards.filter(id => CARDS[id]);
      const ctx = { spot };
      if (ids.some(id => ['cockpit', 'ampel', 'now', 'win', 'timeline', 'wetter', 'live'].includes(id))) ctx.spotP = L.spot(spot);  // nur laden, wenn eine Karte es braucht
      if (ctx.spotP) root.appendChild(verdict(ctx.spotP, spot));          // klare Antwort ganz oben: lohnt es sich heute?
      const grid = U.el('<div class="grid g-home"></div>');
      if (!ids.length) grid.innerHTML = ui.note('Keine Karten eingeblendet. Unter Setup → Modus Karten auswählen.');
      ids.forEach((id, n) => {
        const def = CARDS[id];
        const size = n === 0 ? 'full' : def.size;                     // erste Karte immer volle Breite
        const card = ui.card({ id: 'c-h-' + id, cls: 'sz-' + size, title: def.title ? def.title(spot) : '', sub: def.sub, skeleton: def.skeleton || 'block' });
        grid.appendChild(card);
        def.build(card, ctx);
      });
      // Halbe Karten ohne Partner auf volle Breite ziehen, damit keine Lücken entstehen
      let col = 0;
      Array.from(grid.children).forEach((c, k, arr) => {
        if (!c.classList.contains('sz-half')) { col = 0; return; }
        const next = arr[k + 1];
        if (col === 0 && (!next || !next.classList.contains('sz-half'))) c.classList.replace('sz-half', 'sz-full');
        else col = col ? 0 : 1;
      });
      root.appendChild(grid);
    }
  });
})();

/* ---- js/pages/segeln.js ---- */
/* Seite «Segelscreen»: grosse Instrumente für unterwegs, Vollbild. Scheinbarer und wahrer Wind aus Windgeber
   (NMEA 0183 / Signal K) und GPS; ohne Windgeber aus Modellwind und GPS berechnet. */
(function () {
  const U = SW.util, C = SW.CONFIG, L = SW.load, ui = SW.ui, g = SW.g, LV = SW.live, I = SW.inst;

  // Bootsbezogene Wind-Uhr: Bug oben, Backbord rot, Steuerbord grün, Zeiger für scheinbaren (blau) und wahren (amber) Wind
  function windDial(awa, twa) {
    const R = 100, c = 120;
    const pt = (deg, r) => [c + r * Math.sin(deg * Math.PI / 180), c - r * Math.cos(deg * Math.PI / 180)];
    const arc = (a, b, r) => { const p = pt(a, r), q = pt(b, r); return `M${p[0].toFixed(1)},${p[1].toFixed(1)} A${r},${r} 0 0 ${b > a ? 1 : 0} ${q[0].toFixed(1)},${q[1].toFixed(1)}`; };
    let s = `<circle cx="${c}" cy="${c}" r="${R}" class="g-track" fill="none" stroke-width="2"/>`;
    s += `<path d="${arc(20, 60, R - 6)}" stroke="var(--stbd)" stroke-width="10" fill="none"/><path d="${arc(-60, -20, R - 6)}" stroke="var(--port)" stroke-width="10" fill="none"/>`;   // Am-Wind-Sektoren
    s += `<path d="${arc(150, 180, R - 6)}" stroke="var(--stbd)" stroke-width="4" fill="none" opacity=".6"/><path d="${arc(-180, -150, R - 6)}" stroke="var(--port)" stroke-width="4" fill="none" opacity=".6"/>`;
    for (let a = 0; a < 360; a += 10) { const big = a % 30 === 0, p = pt(a, R), q = pt(a, R - (big ? 14 : 7)); s += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" class="g-tickline" stroke-width="${big ? 2 : 1}"/>`; }
    [30, 60, 90, 120, 150].forEach(a => { [a, -a].forEach(x => { const p = pt(x, R - 26); s += `<text x="${p[0]}" y="${p[1] + 4}" class="g-tick" text-anchor="middle">${a}</text>`; }); });
    s += `<path d="M${c},${c - 38} C${c + 14},${c - 20} ${c + 15},${c + 18} ${c + 10},${c + 36} L${c - 10},${c + 36} C${c - 15},${c + 18} ${c - 14},${c - 20} ${c},${c - 38} Z" fill="none" stroke="var(--fg-1)" stroke-width="2"/>`;   // Boot, Bug oben
    if (U.isNum(twa)) { const p = pt(twa, R + 2), a = pt(twa - 6, R + 16), b = pt(twa + 6, R + 16); s += `<path d="M${p[0]},${p[1]} L${a[0]},${a[1]} L${b[0]},${b[1]} Z" fill="var(--route)"/>`; }
    if (U.isNum(awa)) { const p = pt(awa, R - 4), q = pt(awa, 44), a = pt(awa - 4, R - 22), b = pt(awa + 4, R - 22); s += `<line x1="${q[0]}" y1="${q[1]}" x2="${p[0]}" y2="${p[1]}" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/><path d="M${p[0]},${p[1]} L${a[0]},${a[1]} L${b[0]},${b[1]} Z" fill="var(--accent)"/>`; }
    return `<svg viewBox="0 0 240 240" class="wdial" role="img" aria-label="Wind-Uhr: scheinbar ${U.r(awa)} Grad, wahr ${U.r(twa)} Grad">${s}</svg>`;
  }
  const side = a => (!U.isNum(a) ? '' : a >= 0 ? '<span class="bug stb">STB</span>' : '<span class="bug bb">BB</span>');

  SW.page('segeln', {
    label: 'Segelscreen', icon: 'sail',
    leave() { document.documentElement.classList.remove('sail-full'); if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {}); },
    async render(root) {
      const spot = SW.currentSpot();
      root.insertAdjacentHTML('beforeend', `<section class="sail" id="sail">
        <div class="sail-dial"><div data-k="dial"></div>
          <div class="sail-legend"><span><i style="background:var(--accent)"></i>Scheinbar</span><span><i style="background:var(--route)"></i>Wahr</span></div></div>
        <div class="sail-tiles">
          <div class="st"><span class="f-lab">AWS scheinbar</span><b class="num" data-k="aws">–</b><small>kt</small></div>
          <div class="st"><span class="f-lab">AWA scheinbar</span><b class="num" data-k="awa">–</b><small data-k="awas">°</small></div>
          <div class="st"><span class="f-lab">TWS wahr</span><b class="num" data-k="tws">–</b><small data-k="twsx">kt</small></div>
          <div class="st"><span class="f-lab">TWA wahr</span><b class="num" data-k="twa">–</b><small data-k="twas">°</small></div>
          <div class="st"><span class="f-lab">Fahrt</span><b class="num" data-k="bs">–</b><small data-k="bsx">kt</small></div>
          <div class="st"><span class="f-lab">VMG</span><b class="num" data-k="vmg">–</b><small>kt zum Wind</small></div>
          <div class="st"><span class="f-lab">Kurs</span><b class="num" data-k="hdg">–</b><small data-k="hdgx">°</small></div>
          <div class="st"><span class="f-lab">TWD Wind aus</span><b class="num" data-k="twd">–</b><small data-k="twdx">°</small></div>
        </div>
        <div class="timer-bar" data-k="timer" data-noswipe hidden></div>
        <div class="nav-panel" data-k="nav" data-noswipe></div>
        <div class="sail-bar" data-noswipe>
          <span class="src" data-k="srcw">Windgeber aus</span><span class="src" data-k="srcg">GPS aus</span><span class="src" data-k="clock"></span>
          <span class="sail-btns">
            <button class="btn primary" type="button" data-a="gps">GPS starten</button>
            <button class="btn menu-btn" type="button" data-a="menu">☰ Menü</button></span></div>
        <p class="sail-basis" data-k="basis"></p>
      </section>`);
      const el = root.querySelector('#sail'), $ = k => el.querySelector(`[data-k="${k}"]`);
      let spotWind = null, gpsWind = null, shown = false;
      L.spot(spot).then(({ set }) => { spotWind = L.windNow(set); paint(); }).catch(() => {});

      let paint = () => {
        if (!el.isConnected) { if (shown) { offI(); offL(); offN(); offT(); clearInterval(tick); if (navMap) { try { navMap.remove(); } catch (e) {} } } return; }
        shown = true;
        const f = LV.fix, fresh = f && Date.now() - f.t < 10000;
        const sensor = I.live();
        // Fahrt und Kurs: Logge/Kompass vom Bordnetz, sonst GPS
        const stw = I.get('stw'), hdgS = I.get('hdg');
        const sog = fresh ? f.sog : I.get('sog'), cog = fresh ? f.cog : I.get('cog');
        const bs = U.isNum(stw) ? stw : sog, hdg = U.isNum(hdgS) ? hdgS : cog;
        let aws = null, awa = null, tw = null, basis;
        const awaS = I.get('awa'), awsS = I.get('aws');
        if (sensor && U.isNum(awaS) && U.isNum(awsS)) {                 // Windgeber da: wahren Wind daraus berechnen
          aws = awsS; awa = awaS; tw = SW.wind.true(aws, awa, bs, hdg);
          basis = `Scheinbarer Wind vom Windgeber. Wahrer Wind berechnet mit ${U.isNum(stw) ? 'Logge' : 'GPS-Speed'} und ${U.isNum(hdgS) ? 'Kompass' : 'GPS-Kurs'}${U.isNum(stw) ? '' : ' (Wind über Grund, Strömung nicht berücksichtigt)'}.`;
        } else {                                                        // kein Windgeber: Modellwind + GPS
          const mw = gpsWind || spotWind;
          if (mw && U.isNum(hdg)) {
            const twa = SW.wind.signedAngle(mw.dir, hdg), ap = SW.wind.apparent(mw.spd, twa, bs);
            tw = { tws: mw.spd, twa, twd: mw.dir }; aws = ap && ap.aws; awa = ap && ap.awa;
          } else if (mw) tw = { tws: mw.spd, twa: null, twd: mw.dir };
          basis = `Kein Windgeber verbunden: wahrer Wind aus der Prognose (${gpsWind ? 'GPS-Standort' : U.esc(spot.name)}), scheinbarer Wind daraus mit GPS berechnet. Schätzung – Böen und Dreher sieht das Modell nicht.`;
        }
        $('dial').innerHTML = windDial(awa, tw && tw.twa);
        $('aws').textContent = U.isNum(aws) ? aws.toFixed(1) : '–';
        $('awa').textContent = U.isNum(awa) ? Math.abs(Math.round(awa)) : '–'; $('awas').innerHTML = U.isNum(awa) ? '° ' + side(awa) : '°';
        $('tws').textContent = tw && U.isNum(tw.tws) ? tw.tws.toFixed(1) : '–'; $('twsx').textContent = sensor ? 'kt' : 'kt · Modell';
        $('twa').textContent = tw && U.isNum(tw.twa) ? Math.abs(Math.round(tw.twa)) : '–'; $('twas').innerHTML = tw && U.isNum(tw.twa) ? '° ' + side(tw.twa) : '°';
        $('twd').textContent = tw && U.isNum(tw.twd) ? Math.round(tw.twd) : '–'; $('twdx').textContent = tw && U.isNum(tw.twd) ? '° ' + U.dirName(tw.twd) : '°';
        $('bs').textContent = U.isNum(bs) ? bs.toFixed(1) : '–'; $('bsx').textContent = U.isNum(stw) ? 'kt durchs Wasser' : 'kt über Grund';
        $('hdg').textContent = U.isNum(hdg) ? Math.round(hdg) : '–'; $('hdgx').textContent = U.isNum(hdgS) ? '° Kompass' : '° GPS';
        const vmg = tw && U.isNum(tw.twa) && U.isNum(bs) ? bs * Math.cos(tw.twa * Math.PI / 180) : null;
        $('vmg').textContent = U.isNum(vmg) ? vmg.toFixed(1) : '–';
        $('srcw').innerHTML = I.state === 'on' ? (sensor ? `<b class="t-ok">Windgeber ${I.source === 'demo' ? 'Demo' : 'verbunden'}</b>` : '<b class="t-warn">Windgeber: keine Daten</b>') : I.state === 'connecting' ? '<b class="t-warn">Windgeber verbindet…</b>' : I.state === 'error' ? `<b class="t-bad">Windgeber: ${U.esc(I.error)}</b>` : 'Windgeber aus';
        $('srcg').innerHTML = LV.running ? (fresh ? `<b class="t-ok">GPS ± ${Math.round(f.acc)} m</b>` : '<b class="t-warn">suche GPS…</b>') : 'GPS aus';
        $('clock').textContent = new Date().toLocaleTimeString('de-CH', { timeZone: C.timeZone, hour: '2-digit', minute: '2-digit' });
        $('basis').innerHTML = basis;
        el.querySelector('[data-a="gps"]').hidden = LV.running;            // nur nötig, solange GPS aus ist – sonst alles im Menü
        el.classList.toggle('calm', LV.running && !!N.state());            // unterwegs mit Route: nur Instrumente und Karte
      };
      // Routenführung und Mini-Karte: Karte ist immer da (Boot), mit gestarteter Route zusätzlich Linie, Status und Werte
      const N = SW.nav, navEl = $('nav');
      let navMap = null, navLayers = null, follow = true, fitted = false;
      const lakeBounds = () => SW.lakeBounds(SW.curLake());
      const navShell = st => {
        navEl.innerHTML = `<div class="nav-wrap">
          <div class="nav-left">${st ? `
            <div class="nav-head"><span class="f-lab">Route · ${U.esc(st.name)}</span></div>
            <div class="nav-grid">
              <div><span class="f-lab">Abweichung</span><b class="num" data-n="xte">–</b><small data-n="xtes">m</small></div>
              ${st.regatta ? '<div><span class="f-lab">Nächste Boje</span><b class="num" data-n="mk">–</b><small data-n="mks">–</small></div>' : '<div><span class="f-lab">Kurs zur Route</span><b class="num" data-n="steer">–</b><small>°</small></div>'}
              <div><span class="f-lab">Nächstes Manöver</span><b class="num" data-n="man">–</b><small data-n="mans"></small></div>
              <div><span class="f-lab">Bis Ziel</span><b class="num" data-n="rest">–</b><small data-n="eta">km</small></div>
            </div>
            <div class="nav-tools">
              <label>Neu rechnen <select data-n="iv" aria-label="Neu berechnen">${[0, 5, 10, 15, 30].map(m => `<option value="${m}" ${st.interval === m ? 'selected' : ''}>${m ? 'alle ' + m + ' min' : 'aus'}</option>`).join('')}</select></label>
              <button class="btn" type="button" data-n="recalc">Jetzt</button>
              <button class="btn" type="button" data-n="stop">Beenden</button>
              <span class="nav-calc" data-n="calc"></span></div>` : `
            <div class="nav-head"><span class="f-lab">Position</span></div>
            <p class="nav-none">Keine Route aktiv. Unter «Routen» › Planer eine Strecke oder Regatta wählen und «Route starten» tippen – dann zeigt die Karte die Route und ob du darauf bist.</p>`}
          </div>
          <div class="nav-right">
            <div class="nav-map" id="nav-map"></div>
            <div class="map-badge" data-n="status">–</div>
            ${SW.lakeChips(SW.curLake(), 'map-lakes')}
            <div class="map-ov">
              <button type="button" data-z="in" aria-label="Hineinzoomen">+</button>
              <button type="button" data-z="out" aria-label="Herauszoomen">−</button>
              <button type="button" data-z="boat" aria-label="Boot zentrieren" title="Boot zentrieren">◎</button>
              <button type="button" data-z="all" aria-label="${st ? 'Ganze Route' : 'Ganzer See'}" title="${st ? 'Ganze Route' : 'Ganzer See'}">⤢</button>
            </div></div></div>`;
        navEl.dataset.key = st ? String(st.startedAt) : 'none';
        navEl.dataset.line = '';
        if (navMap) { const old = navMap; navMap = null; try { old.stop(); old.remove(); } catch (e) {} }
        fitted = false;
        if (window.L) {
          navMap = window.L.map(navEl.querySelector('#nav-map'), { zoomControl: false, scrollWheelZoom: false, dragging: !window.matchMedia('(pointer: coarse)').matches, attributionControl: true, zoomSnap: 0.5 });
          SW.lakeMap(navMap);
          navLayers = { route: window.L.layerGroup().addTo(navMap), boat: window.L.layerGroup().addTo(navMap) };
          navMap.fitBounds(st ? st.line : lakeBounds(), { padding: [16, 16], animate: false });
          navMap.on('dragstart', () => { follow = false; });               // selbst verschoben: nicht mehr automatisch nachführen
          const mine = navMap;
          setTimeout(() => { try { if (navMap === mine && navEl.isConnected) { navMap.invalidateSize(false); if (!fitted) navMap.fitBounds(st ? st.line : lakeBounds(), { padding: [16, 16], animate: false }); } } catch (e) { /* Karte schon abgebaut */ } }, 80);
        }
      };
      const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
      const drawNavRoute = () => {
        const st = N.state(); if (!navMap) return;
        navLayers.route.clearLayers();
        if (!st) return;
        window.L.polyline(st.line, { color: css('--route'), weight: 5 }).addTo(navLayers.route);
        st.man.forEach(m => window.L.marker([m.lat, m.lon], { icon: window.L.divIcon({ className: 'man-icon', html: `<span>${m.type === 'Wende' ? 'W' : 'H'}</span>`, iconSize: [22, 22], iconAnchor: [11, 11] }) }).bindTooltip(`${m.type} ${U.hhmm(m.t)}`).addTo(navLayers.route));
        window.L.marker([st.ziel.lat, st.ziel.lon], { icon: window.L.divIcon({ className: 'wp-icon ziel', html: '<span>Z</span>', iconSize: [30, 30], iconAnchor: [15, 15] }) }).addTo(navLayers.route);
      };
      navEl.addEventListener('click', e => {
        const b = e.target.closest('[data-n],[data-z],[data-lake]'); if (!b) return;
        const n = b.dataset.n, z = b.dataset.z, st = N.state();
        if (n === 'recalc') N.recalc('von Hand');
        if (n === 'stop') ui.confirm('Route beenden?', 'Die Route wird nicht mehr verfolgt. Sie bleibt im Routenplaner gespeichert.', 'Route beenden', () => N.stop());
        if (!navMap) return;
        if (z === 'in') navMap.zoomIn(1);
        if (z === 'out') navMap.zoomOut(1);
        if (z === 'all') { follow = false; navMap.fitBounds(st ? st.line : lakeBounds(), { padding: [16, 16] }); }
        if (b.dataset.lake) { SW.saveSettings({ lake: b.dataset.lake }); follow = false; navMap.fitBounds(SW.lakeBounds(b.dataset.lake), { padding: [16, 16] }); navEl.querySelectorAll('[data-lake]').forEach(x => x.classList.toggle('on', x === b)); return; }
        if (z === 'boat') { follow = true; const f = LV.fix; if (f) navMap.setView([f.pos.lat, f.pos.lon], Math.max(navMap.getZoom(), 14)); else ui.toast('Noch keine GPS-Position', 'warn'); }
      });
      navEl.addEventListener('change', e => { if (e.target.dataset.n === 'iv') N.setInterval(+e.target.value); });
      // Distanzen seemännisch: unter 1 km in Metern, sonst Seemeilen (sm)
      const dist = km => (km < 1 ? { v: String(Math.round(km * 100) * 10), u: 'm' } : { v: (km / 1.852).toFixed(km / 1.852 < 10 ? 1 : 0), u: 'sm' });
      const paintNav = () => {
        const st = N.state();
        if (navEl.dataset.key !== (st ? String(st.startedAt) : 'none')) navShell(st);
        const q = k => navEl.querySelector(`[data-n="${k}"]`);
        const f = LV.fix, fresh = f && Date.now() - f.t < 10000;
        const pr = st && fresh ? N.progress(f.pos, f.sog) : null;
        // Status gross auf der Karte
        const stEl = q('status');
        if (!st) { stEl.className = 'map-badge'; stEl.textContent = fresh ? 'Keine Route' : (LV.running ? 'Suche GPS' : 'GPS aus'); }
        else if (!pr) { stEl.className = 'map-badge'; stEl.textContent = LV.running ? 'Suche GPS' : 'GPS starten'; }
        else if (pr.done) { stEl.className = 'map-badge ok'; stEl.textContent = 'Ziel erreicht'; }
        else if (pr.onRoute) { stEl.className = 'map-badge ok'; stEl.textContent = 'Auf Route'; }
        else { stEl.className = 'map-badge ' + (Math.abs(pr.xte) > st.tol * 3 ? 'bad' : 'warn'); stEl.textContent = `Abseits ${Math.round(Math.abs(pr.xte))} m ${pr.xte > 0 ? 'Stb' : 'Bb'}`; }
        if (st) {
          q('xte').textContent = pr ? Math.round(Math.abs(pr.xte)) : '–';
          q('xtes').textContent = pr ? `m ${pr.xte > 0 ? 'Steuerbord' : 'Backbord'} der Route` : 'm';
          if (st.regatta) {
            q('mk').textContent = pr && pr.mark ? dist(pr.mark.km).v : '–';
            q('mks').innerHTML = pr && pr.mark ? `${dist(pr.mark.km).u} · ${U.esc(pr.mark.name)} · <b>${pr.mark.side === 'stb' ? 'an Steuerbord' : 'an Backbord'}</b> runden · ${Math.round(pr.mark.brg)}°` : (pr ? 'alle Bojen gerundet' : '–');
          } else q('steer').textContent = pr ? Math.round(pr.steer) : '–';
          q('man').textContent = pr && pr.next ? dist(pr.nextKm).v : '–';
          q('mans').textContent = pr && pr.next ? `${dist(pr.nextKm).u} bis ${pr.next.type}${U.isNum(f.sog) && f.sog > 0.5 ? ' · ~' + Math.max(1, Math.round(pr.nextKm / 1.852 / f.sog * 60)) + ' min' : ''} · dann ${pr.next.heading}°` : (pr ? 'keins mehr bis Ziel' : '');
          const restSm = (pr ? pr.rest : st.cum[st.cum.length - 1]) / 1.852;             // Restweg in Seemeilen
          q('rest').textContent = restSm.toFixed(restSm < 10 ? 1 : 0);
          q('eta').textContent = pr && pr.eta ? `sm · Ankunft ~${U.hhmm(pr.eta)}` : `sm · Plan ${U.hhmm(st.plannedEnd)}`;
          const next = st.interval ? new Date((st.calcAt || Date.now()) + st.interval * 60000) : null;
          q('calc').innerHTML = N.busy ? 'rechne…' : N.error ? `<span class="t-bad">${U.esc(N.error)}</span>` : `berechnet ${new Date(st.calcAt).toLocaleTimeString('de-CH', { timeZone: C.timeZone, hour: '2-digit', minute: '2-digit' })}${next ? ' · nächste ' + next.toLocaleTimeString('de-CH', { timeZone: C.timeZone, hour: '2-digit', minute: '2-digit' }) : ''}${LV.running ? '' : ' · braucht GPS'}`;
        }
        if (navMap && navEl.isConnected) try {
          const lineKey = st ? String(st.calcAt) : 'none';
          if (navEl.dataset.line !== lineKey) { navEl.dataset.line = lineKey; drawNavRoute(); }
          navLayers.boat.clearLayers();
          if (f) {                                                       // letzte bekannte Position grau, wenn das GPS gerade nichts Neues liefert
            if (U.isNum(f.cog)) { const a = SW.ana.offset(f.pos, f.cog, 0.3); window.L.polyline([[f.pos.lat, f.pos.lon], [a.lat, a.lon]], { color: css('--fg-0'), weight: 3 }).addTo(navLayers.boat); }
            window.L.circleMarker([f.pos.lat, f.pos.lon], { radius: 8, color: '#fff', weight: 2, fillColor: fresh ? css('--accent') : css('--fg-3'), fillOpacity: 1 }).addTo(navLayers.boat);
            if (fresh && follow) {
              if (!fitted) { navMap.setView([f.pos.lat, f.pos.lon], Math.max(navMap.getZoom(), 13), { animate: false }); fitted = true; }
              else navMap.panTo([f.pos.lat, f.pos.lon], { animate: false });
            }
          }
        } catch (e) { /* Karte wird gerade neu aufgebaut */ }
      };
      // Regatta-Timer: Countdown, Rennzeit, Startlinie
      const TM = SW.regatta.timer, timerEl = $('timer');
      const fmtT = s => { const a = Math.abs(Math.round(s)); return `${s < 0 ? '+' : ''}${Math.floor(a / 60)}:${String(a % 60).padStart(2, '0')}`; };
      const paintTimer = () => {
        const c = TM.cfg(); timerEl.hidden = !c.show; el.classList.toggle("has-timer", !!c.show); if (!c.show) return;
        if (!timerEl.dataset.built) {
          timerEl.dataset.built = '1';
          timerEl.innerHTML = `<div class="tm-main"><span class="f-lab" data-t="lab">Start in</span><b class="num tm-clock" data-t="clock">–</b></div>
            <div class="tm-line"><span class="f-lab">Startlinie</span><b class="num" data-t="dist">–</b><small data-t="lsub">Regatta unter Routen › Planer starten</small></div>
            <div class="tm-btns"><button class="btn primary" type="button" data-t="go">Start</button><button class="btn" type="button" data-t="sync">Sync</button>
              <button class="btn" type="button" data-t="m1">−1</button><button class="btn" type="button" data-t="p1">+1</button>
              <button class="btn" type="button" data-t="reset">Stopp</button><button class="btn" type="button" data-t="cfg">Einstellen</button></div>`;
          timerEl.onclick = e => {
            const b = e.target.closest('[data-t]'); if (!b || !b.matches('button')) return;
            TM.unlockAudio();
            ({ go: TM.start, sync: TM.sync, m1: () => TM.shift(-1), p1: () => TM.shift(1), reset: TM.reset, cfg: timerSheet })[b.dataset.t]();
          };
        }
        const rem = TM.remaining(), qt = k => timerEl.querySelector(`[data-t="${k}"]`);
        qt('lab').textContent = rem === null ? `Timer ${c.minutes} min` : rem > 0 ? 'Start in' : 'Rennzeit';
        qt('clock').textContent = rem === null ? fmtT(c.minutes * 60) : fmtT(rem);
        timerEl.classList.toggle('last-min', rem !== null && rem > 0 && rem <= 60);
        qt('go').hidden = rem !== null;
        // Startlinie aus der gestarteten Regatta
        const st = N.state(), f = LV.fix, fresh = f && Date.now() - f.t < 10000;
        const lineSrc = st && (st.regatta || st.lines), line = lineSrc && lineSrc.start;   // Regatta oder Strecke mit Startlinie (Gelbes Band)
        timerEl.classList.remove('ocs');
        if (!line) { qt('dist').textContent = '–'; qt('lsub').textContent = 'Route mit Startlinie unter Routen › Planer starten'; return; }
        if (!fresh) { qt('dist').textContent = '–'; qt('lsub').textContent = 'braucht GPS'; return; }
        const li = SW.regatta.lineInfo(line, f.pos, lineSrc.first), sog = f.sog;
        qt('dist').textContent = Math.round(li.dist);
        const tLine = U.isNum(sog) && sog > 0.5 ? li.dist / (sog * 0.5144) : null;
        const early = rem !== null && rem > 0 && li.onCourseSide;            // vor dem Start schon auf der Bahnseite
        timerEl.classList.toggle('ocs', early);
        qt('lsub').textContent = early ? 'ZU FRÜH – zurück hinter die Linie!' : `m ${li.onCourseSide ? 'auf der Bahnseite' : 'vor der Linie'}${li.within ? '' : ' (ausserhalb der Linienenden)'}${tLine !== null ? ` · ${fmtT(tLine)} bis Linie` + (rem !== null && rem > 0 ? (tLine < rem ? ` · ${fmtT(rem - tLine)} zu früh` : ' · knapp') : '') : ''}`;
      };
      function timerSheet() {
        const c = TM.cfg();
        const el = U.el(`<form class="add-spot timer-form">
          <label>Countdown (Minuten)<input name="min" type="number" inputmode="numeric" min="1" max="20" value="${c.minutes}"></label>
          <label class="toggle"><input name="snd" type="checkbox" ${c.sound ? 'checked' : ''}><span>Signaltöne</span></label>
          <p class="hint timer-hint" style="display:block">Jede volle Minute so viele Töne, wie Minuten bleiben (3 min = 3 Töne). Bei 30 Sekunden ein eigener Ton (tief-hoch-tief). Letzte 10 Sekunden: jede Sekunde ein kurzer Ton. Start: langer Ton.</p>
          <button class="btn" type="button" id="tm-test">Töne anhören</button>
          <button class="btn primary" type="submit">Speichern</button></form>`);
        const sh = ui.sheet('Regatta-Timer einstellen', el);
        el.querySelector('#tm-test').onclick = () => {                 // Probe: 3 Minuten, 30 s, 3 Sekunden, Start
          TM.unlockAudio(); [[180, 0], [30, 2400], [3, 4200], [2, 5200], [1, 6200], [0, 7200]].forEach(([s, d]) => setTimeout(() => TM.signal(s), d));
        };
        el.onsubmit = ev => {
          ev.preventDefault(); const fd = new FormData(el);
          TM.setup({ minutes: U.clamp(parseInt(fd.get('min'), 10) || 5, 1, 20), sound: !!fd.get('snd') });
          sh.close(); ui.toast('Timer gespeichert');
        };
      }
      const offT = TM.on(paintTimer);
      const offN = N.on(paintNav);
      const paint0 = paint;
      paint = () => { paint0(); if (el.isConnected) { paintNav(); paintTimer(); } };   // Instrumente und Route gemeinsam auffrischen

      const offI = I.on(paint);
      const offL = LV.on(() => { paint(); if (LV.fix) L.windAtPos(LV.fix.pos).then(p => { gpsWind = L.windNow(p.set); paint(); }).catch(() => {}); });
      const tick = setInterval(paint, 1000);
      el.querySelector('.sail-bar').onclick = e => {
        const a = e.target.closest('[data-a]'); if (!a) return;
        if (a.dataset.a === 'gps') { SW.regatta.timer.unlockAudio(); LV.start(); }
        if (a.dataset.a === 'menu') menuSheet();
      };
      paint();
    }
  });

  // Ein Menü für alles, was man während der Fahrt selten braucht (grosse Tippflächen)
  function menuSheet() {
    const LV = SW.live, T = SW.regatta.timer, full = document.documentElement.classList.contains('sail-full'), nav = SW.nav.state();
    const rows = [
      ['gps', LV.running ? 'GPS stoppen' : 'GPS starten', LV.running ? 'Speed, Kurs und Position ausschalten' : 'Speed, Kurs und Position vom iPad'],
      ['timer', T.cfg().show ? 'Regatta-Timer ausblenden' : 'Regatta-Timer zeigen', 'Countdown mit Signaltönen, Abstand zur Startlinie'],
      ['inst', 'Windgeber verbinden', SW.inst.live() ? 'verbunden – Einstellungen ändern' : 'Signal K (WLAN), USB-Adapter oder Demo'],
      ['full', full ? 'Vollbild beenden' : 'Vollbild', 'Kopfzeile und Navigation ausblenden, Bildschirm bleibt an']
    ].concat(nav ? [['stop', 'Route beenden', `«${nav.name || 'Route'}» nicht mehr verfolgen`]] : []);
    const el = U.el(`<div class="model-list sail-menu">${rows.map(([k, t, s]) => `<button type="button" class="model-row ${k === 'stop' ? 'danger' : ''}" data-m="${k}"><b>${U.esc(t)}</b><span>${U.esc(s)}</span></button>`).join('')}</div>`);
    const sh = ui.sheet('Segelscreen', el);
    el.onclick = e => {
      const b = e.target.closest('[data-m]'); if (!b) return;
      sh.close(); T.unlockAudio();
      const m = b.dataset.m;
      if (m === 'gps') LV.running ? LV.stop() : LV.start();
      if (m === 'timer') T.toggleShow();
      if (m === 'inst') instSheet();
      if (m === 'full') toggleFull();
      if (m === 'stop') ui.confirm('Route beenden?', 'Die Route wird nicht mehr verfolgt. Sie bleibt im Routenplaner gespeichert.', 'Route beenden', () => SW.nav.stop());
    };
  }

  // Vollbild: Kopfzeile und Navigation ausblenden, zusätzlich echtes Vollbild, wo der Browser es erlaubt
  function toggleFull() {
    const h = document.documentElement, on = !h.classList.contains('sail-full');
    h.classList.toggle('sail-full', on);
    const req = h.requestFullscreen || h.webkitRequestFullscreen, exit = document.exitFullscreen || document.webkitExitFullscreen;
    try { if (on && req) { const p = req.call(h); if (p && p.catch) p.catch(() => {}); } else if (!on && (document.fullscreenElement || document.webkitFullscreenElement) && exit) exit.call(document); } catch (e) { /* nicht unterstützt: CSS-Vollbild reicht */ }
    if (on && SW.live.wakeSupported()) SW.live.setWake(true);           // im Vollbild Bildschirm wach halten
  }
  document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement) document.documentElement.classList.remove('sail-full'); });

  // Verbindung zum Windgeber einstellen
  function instSheet() {
    const s = SW.settings.inst || { source: 'signalk', url: '' };
    const el = U.el(`<div class="inst-sheet">
      <div class="chips" role="radiogroup">${[['signalk', 'Signal K (WLAN)'], ['serial', 'USB-Adapter'], ['demo', 'Demo']].map(([k, l]) => `<button type="button" class="chip ${s.source === k ? 'on' : ''}" data-s="${k}">${l}</button>`).join('')}</div>
      <label class="inst-url">Adresse Signal-K-Server<input type="text" inputmode="url" autocomplete="off" placeholder="z. B. wss://openplotter.local:3443" value="${U.esc(s.url || '')}"></label>
      <p class="hint inst-help"></p>
      <div class="row-btns"><button class="btn primary" type="button" data-a="go">Verbinden</button><button class="btn" type="button" data-a="stop">Trennen</button></div>
      <p class="inst-state"></p></div>`);
    let src = s.source || 'signalk';
    const help = {
      signalk: 'Für die NASA Clipper Wind: NMEA-0183-Ausgang der Empfängerbox (4800 Baud, MWV) über einen USB-NMEA-Adapter an einen Signal-K-Server an Bord (z. B. Raspberry Pi mit OpenPlotter). Der Server stellt die Daten im WLAN bereit. Läuft die App über HTTPS, braucht Signal K SSL (wss://). Anleitung in der README.',
      serial: 'NMEA-0183-USB-Adapter direkt am Laptop. Geht nur in Chrome oder Edge am Computer, nicht auf dem iPad. Beim Verbinden den Adapter in der Liste wählen.',
      demo: 'Simulierte Werte (Am-Wind-Kurs mit Winddrehern) zum Ausprobieren ohne Hardware.'
    };
    const upd = () => { el.querySelector('.inst-url').hidden = src !== 'signalk'; el.querySelector('.inst-help').textContent = help[src]; el.querySelector('.inst-help').style.display = 'block';
      el.querySelector('.inst-state').innerHTML = I.state === 'on' ? `<b class="t-ok">Verbunden (${U.esc(I.source)}), ${I.count} Datensätze</b>` : I.error ? `<b class="t-bad">${U.esc(I.error)}</b>` : ({ off: 'Nicht verbunden', connecting: 'Verbinde …', error: 'Fehler' })[I.state] || I.state; };
    el.querySelector('.chips').onclick = e => { const b = e.target.closest('.chip'); if (!b) return; src = b.dataset.s; el.querySelectorAll('.chip').forEach(x => x.classList.toggle('on', x === b)); upd(); };
    el.querySelector('.row-btns').onclick = e => {
      const a = e.target.closest('[data-a]'); if (!a) return;
      if (a.dataset.a === 'stop') { I.stop(); SW.saveSettings({ inst: { source: src, url: el.querySelector('input').value.trim(), auto: false } }); }
      else { const url = el.querySelector('input').value.trim(); SW.saveSettings({ inst: { source: src, url, auto: src !== 'serial' } }); I.start(src, url); }
    };
    const off = I.on(upd);
    ui.sheet('Windgeber verbinden', el, off);
    upd();
  }
  SW.instSheet = instSheet;
  // Beim Start automatisch neu verbinden, wenn so gespeichert (USB braucht immer eine Benutzeraktion)
  setTimeout(() => { const s = SW.settings.inst; if (s && s.auto && s.source !== 'serial') I.start(s.source, s.url); }, 500);
})();

/* ---- js/pages/spot.js ---- */
/* Seite «Spot»: Ortssuche, Zeitleiste, Chart, 3 Tage im 2-Stunden-Raster, Thermik, Tabelle und CSV. */
(function () {
  const U = SW.util, C = SW.CONFIG, L = SW.load, ui = SW.ui, g = SW.g, A = SW.ana;

  // Suchfeld mit Vorschlagsliste (wird auch im Spot-Sheet des Headers verwendet)
  SW.searchBox = function (onPick) {
    const el = U.el(`<div class="search" data-noswipe>
      <input type="search" inputmode="search" autocomplete="off" placeholder="Ort suchen, z. B. Silvaplana" aria-label="Ort suchen">
      <ul class="suggest" role="listbox" hidden></ul></div>`);
    const inp = el.querySelector('input'), list = el.querySelector('.suggest');
    let results = [], seq = 0;
    const run = U.debounce(async () => {
      const q = inp.value.trim(); const my = ++seq;
      if (q.length < 2) { list.hidden = true; return; }
      try {
        results = await SW.api.geocode(q);
        if (my !== seq) return;                                       // ältere Antwort verwerfen
        list.innerHTML = results.length ? results.map((r, k) => `<li role="option" data-k="${k}"><b>${U.esc(r.name)}</b><span>${U.esc(r.region)} · ${r.lat.toFixed(2)}, ${r.lon.toFixed(2)}</span></li>`).join('')
          : '<li class="none">Kein Ort gefunden</li>';
        list.hidden = false;
      } catch (e) { list.innerHTML = `<li class="none">Suche nicht möglich: ${U.esc(e.message)}</li>`; list.hidden = false; }
    }, 300);
    inp.addEventListener('input', run);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && results[0]) { e.preventDefault(); pick(results[0]); } });
    list.addEventListener('click', e => { const li = e.target.closest('li[data-k]'); if (li) pick(results[+li.dataset.k]); });
    function pick(r) { list.hidden = true; inp.value = ''; inp.blur(); onPick(r); }
    return el;
  };
  SW.useSearchResult = function (r) {                                // Suchtreffer als aktuellen Spot setzen
    const fav = SW.settings.spots.find(s => Math.abs(s.lat - r.lat) < 0.01 && Math.abs(s.lon - r.lon) < 0.01);
    if (fav) SW.saveSettings({ spotId: fav.id });
    else SW.saveSettings({ spotId: 'search', currentSearch: { id: 'search', name: r.name, lat: r.lat, lon: r.lon, region: r.region } });
  };

  SW.page('spot', {
    label: 'Spot', icon: 'spot',
    async render(root) {
      const spot = SW.currentSpot();
      const isFav = SW.settings.spots.some(s => s.id === spot.id);
      const top = U.el(`<section class="card"><header class="card-h"><h2>${U.esc(spot.name)}</h2>
        <div class="card-tools">${isFav ? '' : `<button class="btn" type="button" id="b-addfav">${ui.icon('star')} Als Favorit</button>`}</div></header>
        <div class="card-b"></div></section>`);
      const sb = SW.searchBox(r => { SW.useSearchResult(r); SW.app.refreshHeader(); SW.app.show('spot', true); });
      top.querySelector('.card-b').appendChild(sb);
      const chips = U.el(`<div class="chips">${SW.settings.spots.map(s => `<button type="button" class="chip ${s.id === spot.id ? 'on' : ''}" data-id="${U.esc(s.id)}">${U.esc(s.name)}</button>`).join('')}<button type="button" class="chip chip-add" data-add="1">+ Favorit</button></div>`);
      chips.onclick = e => {
        const b = e.target.closest('.chip'); if (!b) return;
        if (b.dataset.add) {                                          // neuen Favoriten suchen und speichern
          const box = U.el('<div><p class="hint" style="display:block">Ort suchen und antippen – er wird als Favorit gespeichert. Löschen und sortieren unter Setup › Spots.</p></div>');
          let sh;
          box.prepend(SW.searchBox(r => {
            const s = { id: 'u' + U.uid(), name: r.name, lat: r.lat, lon: r.lon, fav: true };
            SW.saveSettings({ spots: SW.settings.spots.concat([s]), spotId: s.id }); sh.close(); ui.toast(`${s.name} als Favorit gespeichert`); SW.app.refreshHeader(); SW.app.show('spot', true);
          }));
          sh = ui.sheet('Favorit hinzufügen', box);
          setTimeout(() => { const i = box.querySelector('input'); if (i) i.focus(); }, 60);
          return;
        }
        SW.saveSettings({ spotId: b.dataset.id }); SW.app.refreshHeader(); SW.app.show('spot', true);
      };
      top.querySelector('.card-b').appendChild(chips);
      const add = top.querySelector('#b-addfav');
      if (add) add.onclick = () => { const s = Object.assign({}, spot, { id: 'u' + U.uid(), fav: true }); SW.saveSettings({ spots: SW.settings.spots.concat([s]), spotId: s.id }); ui.toast(`${s.name} als Favorit gespeichert`); SW.app.show('spot', true); };
      root.appendChild(top);

      // Unterreiter: Prognose · Modelle · Tabelle · Feierabend
      const TABS = { prognose: 'Prognose', modelle: 'Modelle', tabelle: 'Tabelle', feierabend: 'Feierabend' };
      const tab = TABS[SW.settings.spotTab] ? SW.settings.spotTab : 'prognose';
      const tabs = U.el(`<div class="subtabs" role="tablist">${Object.keys(TABS).map(k => `<button type="button" role="tab" class="subtab ${k === tab ? 'on' : ''}" aria-selected="${k === tab}" data-t="${k}">${TABS[k]}</button>`).join('')}</div>`);
      tabs.onclick = e => { const b = e.target.closest('.subtab'); if (!b) return; SW.saveSettings({ spotTab: b.dataset.t }); SW.app.show('spot', true); };
      root.appendChild(tabs);
      if (tab !== 'prognose') return SW.spotTabs[tab](root, spot);

      const cWarn = U.el('<div id="spot-warn"></div>'); root.appendChild(cWarn);
      const cTl = ui.card({ id: 'c-tl', title: 'Wind-Zeitleiste', skeleton: 'block' });
      const cChart = ui.card({ id: 'c-spotchart', title: 'Wind & Böen 3 Tage', skeleton: 'chart' });
      const cTh = ui.card({ id: 'c-thermik', title: 'Thermik-Index', sub: 'Begründete Faustregel, keine kalibrierte Wahrscheinlichkeit. Antippen zeigt die Aufschlüsselung.', skeleton: 'fields' });
      const cDays = ui.card({ id: 'c-days', title: '3 Tage · 2-Stunden-Raster', skeleton: 'block' });
      [cTl, cChart, cTh, cDays].forEach(c => root.appendChild(c));

      const p = L.spot(spot);
      ui.fill(cTl, async body => {
        const { set, meta } = await p;
        const mi = SW.api.modelInfo(meta.model);
        const use15 = set.m15 && mi.minutely15 && set.m15.src.wind_speed_10m.prim;
        const s = use15 ? set.m15 : set.hourly;
        const warn = A.warning(set.hourly, 6);
        cWarn.innerHTML = warn ? ui.note(`<b>${warn.level === 'storm' ? 'STURMWARNUNG' : 'WINDWARNUNG'}</b> ${U.esc(warn.text)} um ${U.hhmm(warn.at)} (nächste 6 h, Faustregel)`, warn.level === 'storm' ? 'bad' : 'warn') : '';
        body.innerHTML = g.timeline(s.t, s.v.wind_speed_10m, s.v.wind_gusts_10m, s.v.wind_direction_10m) +
          `<p class="hint">${use15 ? `15-Minuten-Raster (${U.esc(mi.label)} liefert native 15-min-Werte, ~48 h). Ein 10-Minuten-Raster bietet keine Gratis-API an.` : `Stundenraster: ${U.esc(mi.label)} liefert keine nativen 15-Minuten-Werte.`} Pfeil zeigt, wohin der Wind weht.</p>`;
        return meta;
      });
      ui.fill(cChart, async body => {
        const { set, meta } = await p; const h = set.hourly, sp = L.sport();
        body.innerHTML = '<div class="chart-host"></div>';
        SW.chart(body.firstChild, { t: h.t, height: 260, axes: { l: { min: 0, unit: 'kt' } },
          series: [ { label: 'Mittelwind', values: h.v.wind_speed_10m, color: 'var(--accent)', width: 2.4, unit: 'kt' },
                    { label: 'Böen', values: h.v.wind_gusts_10m, color: 'var(--fg-2)', width: 1.4, dash: '4 3', unit: 'kt' } ],
          thresholds: [ { y: sp.min, label: `${sp.label} ab ${sp.min} kt`, color: 'var(--ok)' }, { y: C.warnings.stormGustKt, label: 'Sturm 33 kt', color: 'var(--bad)', right: true } ],
          arrows: { values: h.v.wind_direction_10m, speed: h.v.wind_speed_10m } });
        return meta;
      });
      ui.fill(cTh, async body => {
        const { set, meta } = await p;
        const days = A.days(set, 3);
        body.innerHTML = `<div class="grid-fields three">${days.map((d, k) => {
          const th = A.thermik(set, d);
          return `<details class="th-day"><summary>${g.ring({ value: th.score, label: U.dayLabel(d.start), unit: th.peak && th.score >= 15 ? 'Peak ' + U.hhmm(th.peak) : 'Index' })}</summary>${g.breakdown(th.items, th.score)}</details>`;
        }).join('')}</div><p class="hint">Zeitfenster ${C.thermik.window[0]}–${C.thermik.window[1]} Uhr. Peak = wärmste Stunde des jeweiligen Tages.</p>`;
        return [meta];
      });
      ui.fill(cDays, async body => {
        const { set, meta } = await p;
        body.innerHTML = dayGrid(set);
        return meta;
      });
    }
  });

  // Unterreiter «Tabelle»: alle Stundenwerte plus CSV-Export
  SW.spotTabs = SW.spotTabs || {};
  SW.spotTabs.tabelle = function (root, spot) {
    const card = ui.card({ id: 'c-table', title: 'Stundenwerte 3 Tage', tools: `<button class="btn" type="button" id="b-csv">${ui.icon('download')} CSV</button>`, skeleton: 'block' });
    root.appendChild(card);
    const p = L.spot(spot);
    card.querySelector('#b-csv').onclick = async () => {               // sofort bedienbar, wartet selbst auf die Daten
      try { const { set, meta } = await p; U.downloadText(`swisswind24_${spot.name.replace(/\W+/g, '_')}_${U.todayKey()}.csv`, csv(set, spot, meta)); ui.toast('CSV-Datei erstellt'); }
      catch (e) { ui.toast('Keine Daten für den Export', 'bad'); }
    };
    ui.fill(card, async body => {
      const { set, meta } = await p;
      body.innerHTML = table(set);
      return meta;
    });
  };

  function dayGrid(set) {
    const h = set.hourly, days = A.days(set, 3);
    return days.map(d => {
      let pk = null;
      d.idx.forEach(i => { const gst = h.v.wind_gusts_10m[i]; if (U.isNum(gst) && (!pk || gst > pk.g)) pk = { g: gst, s: h.v.wind_speed_10m[i], t: h.t[i], d: h.v.wind_direction_10m[i] }; });
      const ids = d.idx.filter(i => U.hourOf(h.t[i]) % 2 === 0);
      const avg = k => U.mean(d.idx.map(i => h.v[k] ? h.v[k][i] : null));
      const tmax = U.max(d.idx.map(i => h.v.temperature_2m[i]));
      return `<div class="day-block"><h3>${U.esc(U.dayLabel(d.start))} <small>${U.esc(U.dayLong(d.start))}</small></h3>
        <div class="grid-fields four small">
          ${g.field({ label: 'Stärkster Wind', value: pk ? U.r(pk.s) : '–', unit: 'kt', sub: pk ? `${U.hhmm(pk.t)} · Böen ${U.r(pk.g)} · ${U.dirName(pk.d)}` : '' })}
          ${g.field({ label: 'Tmax', value: U.r(tmax, 1), unit: '°C' })}
          ${g.field({ label: 'Bewölkung Ø', value: U.r(avg('cloud_cover')), unit: '%', sub: `Feuchte ${U.r(avg('relative_humidity_2m'))} %` })}
          ${g.field({ label: 'Druck MSL Ø', value: U.r(avg('pressure_msl')), unit: 'hPa', sub: d.sunset ? `Sonne ${U.hhmm(d.sunrise)}–${U.hhmm(d.sunset)}` : '' })}
        </div>
        <div class="h2-grid">${ids.map(i => `<div class="h2"><em>${U.hh(h.t[i])}</em>${L.windChip(h.v.wind_speed_10m[i], h.v.wind_gusts_10m[i], h.v.wind_direction_10m[i])}<span>${U.dirName(h.v.wind_direction_10m[i])}</span></div>`).join('')}</div></div>`;
    }).join('');
  }
  const COLS = [['wind_speed_10m', 'Wind kt'], ['wind_gusts_10m', 'Böen kt'], ['wind_direction_10m', 'Richtung °'], ['temperature_2m', 'Temp °C'], ['precipitation', 'Regen mm'],
    ['cloud_cover', 'Wolken %'], ['pressure_msl', 'Druck MSL hPa'], ['shortwave_radiation', 'Strahlung W/m²'], ['wind_speed_850hPa', 'Wind 850 hPa kt']];
  function table(set) {
    const h = set.hourly, now = U.nowSec() - 3600;
    const rows = h.t.map((t, i) => t < now ? '' : `<tr><td>${U.dayShort(t)} ${U.hhmm(t)}</td>${COLS.map(([k]) => `<td class="num">${h.v[k] && U.isNum(h.v[k][i]) ? U.r(h.v[k][i], k === 'precipitation' ? 1 : 0) : '–'}</td>`).join('')}<td>${U.esc(L.wmo(h.v.weather_code[i]))}</td></tr>`).join('');
    return `<div class="table-wrap" data-noswipe><table class="data"><thead><tr><th>Zeit</th>${COLS.map(c => `<th>${c[1]}</th>`).join('')}<th>Wetter</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  function csv(set, spot, meta) {
    const h = set.hourly;
    const head = ['Zeit (Europe/Zurich)'].concat(COLS.map(c => c[1]), ['Wettercode']);
    const lines = [`# SwissWind24 · ${spot.name} (${spot.lat}, ${spot.lon}) · Modell ${SW.api.modelInfo(meta.model).label} · Stand ${U.dateTime(meta.fetchedAt / 1000)}`, head.join(';')];
    h.t.forEach((t, i) => lines.push([`${U.parts(t).date} ${U.hhmm(t)}`].concat(COLS.map(([k]) => (h.v[k] && U.isNum(h.v[k][i]) ? String(h.v[k][i]).replace('.', ',') : '')), [U.isNum(h.v.weather_code[i]) ? h.v.weather_code[i] : '']).join(';')));
    return lines.join('\r\n');
  }
})();

/* ---- js/pages/modelle.js ---- */
/* Spot-Unterreiter «Modelle»: alle Wettermodelle nebeneinander, Spread als Unsicherheitsband. */
(function () {
  const U = SW.util, C = SW.CONFIG, ui = SW.ui, g = SW.g;
  const COLORS = ['#4fb3ff', '#7fd0ff', '#ffb347', '#e06666', '#93c47d', '#c27ba0', '#ffd966', '#76a5af', '#b4a7d6'];

  SW.spotTabs = SW.spotTabs || {};
  SW.spotTabs.modelle = function (root, spot) {                      // Unterreiter der Spot-Seite
    {
      const cChart = ui.card({ id: 'c-mchart', title: `Modellvergleich · ${spot.name}`, sub: 'Band = Bereich zwischen schwächstem und stärkstem Modell, Linie = Median. Schmales Band = Modelle sind sich einig.', skeleton: 'chart' });
      const cAgree = ui.card({ id: 'c-magree', title: 'Einigkeit alle 3 Stunden', skeleton: 'block' });
      const cCover = ui.card({ id: 'c-mcover', title: 'Reichweite je Modell', skeleton: 'block' });
      const pick = U.el(`<div class="model-pick" data-noswipe><span>Verwendetes Modell: <b>${U.esc(SW.api.modelInfo(SW.settings.model).label)}</b></span><button class="btn" type="button">Modell wechseln</button></div>`);
      pick.querySelector('button').onclick = () => SW.app.modelSheet();   // Modellwahl hier statt in der Kopfzeile
      root.appendChild(pick);
      [cChart, cAgree, cCover].forEach(c => root.appendChild(c));
      const p = SW.api.allModels(spot, ['wind_speed_10m', 'wind_gusts_10m', 'wind_direction_10m'], 3);

      ui.fill(cChart, async body => {
        const { data, meta } = await p;
        const ids = C.models.map(m => m.id).filter(id => data.models[id].wind_speed_10m && data.models[id].wind_speed_10m.some(U.isNum));
        const st = stats(data, ids, 'wind_speed_10m');
        let shown = new Set([SW.settings.model]);
        const draw = () => {
          const series = [{ label: 'Median', values: st.med, color: 'var(--accent)', width: 2.6, unit: 'kt', band: { lo: st.lo, hi: st.hi }, bandOpacity: 0.22 }];
          ids.forEach((id, k) => { if (shown.has(id)) series.push({ label: SW.api.modelInfo(id).label, values: data.models[id].wind_speed_10m, color: COLORS[k % COLORS.length], width: 1.3, unit: 'kt' }); });
          body.innerHTML = '<div class="chart-host"></div><div class="chips small" data-noswipe></div>';
          SW.chart(body.firstChild, { t: data.t, height: 280, axes: { l: { min: 0, unit: 'kt' } }, series, thresholds: [{ y: SW.load.sport().min, label: `${SW.load.sport().label} ab ${SW.load.sport().min} kt`, color: 'var(--ok)' }] });
          const chips = body.querySelector('.chips');
          chips.innerHTML = ids.map((id, k) => `<button type="button" class="chip ${shown.has(id) ? 'on' : ''}" data-id="${id}"><i style="background:${COLORS[k % COLORS.length]}"></i>${U.esc(SW.api.modelInfo(id).label)}</button>`).join('');
          chips.onclick = e => { const b = e.target.closest('.chip'); if (!b) return; shown.has(b.dataset.id) ? shown.delete(b.dataset.id) : shown.add(b.dataset.id); draw(); };
        };
        draw();
        return meta;
      });

      ui.fill(cAgree, async body => {
        const { data, meta } = await p;
        const ids = C.models.map(m => m.id).filter(id => data.models[id].wind_speed_10m && data.models[id].wind_speed_10m.some(U.isNum));
        const st = stats(data, ids, 'wind_speed_10m'), now = U.nowSec();
        const rows = [];
        data.t.forEach((t, i) => {
          if (t < now - 3600 || U.hourOf(t) % 3) return;
          const spread = U.isNum(st.hi[i]) ? st.hi[i] - st.lo[i] : null;
          const lv = !U.isNum(spread) ? ['na', '–'] : spread < 4 ? ['ok', 'einig'] : spread < 8 ? ['warn', 'mittel'] : ['bad', 'uneinig'];
          const dirs = ids.map(id => data.models[id].wind_direction_10m ? data.models[id].wind_direction_10m[i] : null);
          const dmean = U.circMean(dirs);
          rows.push(`<tr><td>${U.dayShort(t)} ${U.hhmm(t)}</td><td>${SW.load.windChip(st.med[i], null, dmean)}</td><td class="num">${U.r(st.lo[i])}–${U.r(st.hi[i])}</td><td class="num">${st.n[i]}</td><td>${ui.pill(lv[0], lv[1])}</td></tr>`);
        });
        body.innerHTML = `<div class="table-wrap" data-noswipe><table class="data"><thead><tr><th>Zeit</th><th>Median</th><th>Bereich kt</th><th>Modelle</th><th>Einigkeit</th></tr></thead><tbody>${rows.join('')}</tbody></table></div>
          <p class="hint">Einig: Spread unter 4 kt · mittel: 4–8 kt · uneinig: über 8 kt. Die Richtung ist der Kreismittelwert aller Modelle.</p>`;
        return meta;
      });

      ui.fill(cCover, async body => {
        const { data, meta } = await p;
        body.innerHTML = `<div class="cover">${C.models.map(m => {
          const a = data.models[m.id].wind_speed_10m || [];
          let last = -1; a.forEach((v, i) => { if (U.isNum(v)) last = i; });
          const frac = data.t.length ? (last + 1) / data.t.length : 0;
          return `<div class="cov-row"><span class="cov-name">${U.esc(m.label)} <small>${U.esc(m.info)}</small></span>
            <span class="cov-bar"><i style="width:${(frac * 100).toFixed(0)}%"></i></span>
            <span class="cov-end num">${last >= 0 ? U.dayShort(data.t[last]) + ' ' + U.hhmm(data.t[last]) : 'keine Daten'}</span></div>`;
        }).join('')}</div><p class="hint">Balken = Anteil der 3-Tage-Periode, den das Modell für diesen Ort abdeckt.</p>`;
        return meta;
      });
    }
  };

  function stats(data, ids, k) {                                     // Median, Minimum, Maximum je Zeitschritt
    const med = [], lo = [], hi = [], n = [];
    data.t.forEach((_, i) => {
      const vals = ids.map(id => data.models[id][k] ? data.models[id][k][i] : null).filter(U.isNum);
      n.push(vals.length);
      if (vals.length < 2) { med.push(vals[0] ?? null); lo.push(null); hi.push(null); return; }
      med.push(U.median(vals)); lo.push(U.min(vals)); hi.push(U.max(vals));
    });
    return { med, lo, hi, n };
  }
})();

/* ---- js/pages/welle.js ---- */
/* Seite «Welle»: Flusswelle Bremgarten mit echten BAFU-Messwerten und geschätztem Trend. */
(function () {
  const U = SW.util, C = SW.CONFIG, ui = SW.ui, g = SW.g, A = SW.ana;
  const W = C.welle;
  const zones = () => [{ to: W.low, color: 'var(--warn)', label: `zu tief < ${W.low}` }, { to: W.high, color: 'var(--ok)', label: `ideal ${W.low}–${W.high}` }, { to: W.scaleMax, color: 'var(--bad)', label: `Hochwasser > ${W.high}` }];

  const WX_H = ['temperature_2m', 'precipitation', 'cloud_cover', 'weather_code'];      // Wetter in Bremgarten (ohne Wind)
  const WX_D = ['sunrise', 'sunset', 'temperature_2m_max', 'temperature_2m_min', 'precipitation_sum'];

  /* Ein einziger Bildschirm für die Flusswelle: alles auf Bremgarten bezogen, keine Winddaten. */
  SW.page('welle', {
    label: 'Welle', icon: 'welle',
    async render(root) {
      const grid = U.el('<div class="grid g-home"></div>');
      const cLive = ui.card({ id: 'c-wlive', cls: 'hero sz-full', title: 'Reuss bei Bremgarten jetzt', skeleton: 'fields' });
      const cWx = ui.card({ id: 'c-wwx', cls: 'sz-half', title: 'Wetter in Bremgarten', skeleton: 'fields' });
      const cUp = ui.card({ id: 'c-wup', cls: 'sz-half', title: 'Oberlieger (kommt in Stunden an)', skeleton: 'fields' });
      const cChart = ui.card({ id: 'c-wchart', cls: 'sz-full', title: 'Abfluss: 5 Tage gemessen + Trend', skeleton: 'chart' });
      const cDays = ui.card({ id: 'c-wdays', cls: 'sz-full', title: 'Ausblick 3 Tage (geschätzt)', skeleton: 'block' });
      const cInfo = ui.card({ id: 'c-winfo', cls: 'sz-full', title: 'So liest du die Welle', skeleton: 'none' });
      [cLive, cWx, cUp, cChart, cDays, cInfo].forEach(c => grid.appendChild(c));
      root.appendChild(grid);
      cInfo.querySelector('.card-b').innerHTML = `<ul class="plain">
        <li><b class="t-warn">Zu tief, unter ${W.low} m³/s:</b> Welle bricht nicht sauber, Bodenkontakt möglich.</li>
        <li><b class="t-ok">Ideal ${W.low}–${W.high} m³/s:</b> druckvolle, surfbare Welle.</li>
        <li><b class="t-bad">Hochwasser über ${W.high} m³/s:</b> Welle flacht ab, starke Strömung, Treibholz.</li></ul>
        <p class="hint">Messstation: BAFU ${W.station} ${U.esc(W.stationName)} (wenige Kilometer unterhalb von Bremgarten; eine BAFU-Station direkt in Bremgarten gibt es nicht, der Abfluss ist praktisch derselbe). Der Pegel wird als Wasserspiegel in m ü.M. gemessen, darum zeigt die App die Änderung in cm. Wetter und Sonnenzeiten gelten für Bremgarten. Schwellen in <code>config.js</code> anpassbar.</p>`;

      const ids = [W.station].concat(W.upstream.map(u => u.id));
      const latestP = SW.api.hydroLatest(ids);
      const rangeP = SW.api.hydroRange(ids, 5);
      const floodP = SW.api.flood(W.floodPoint);
      const wxP = SW.api.forecast({ points: [W.spot, W.rainPoint], hourly: WX_H, daily: WX_D, days: 3 });   // [0] Bremgarten, [1] Einzugsgebiet

      ui.fill(cLive, async body => {
        const [{ data: lat, meta: m1 }, { data: rng, meta: m2 }] = await Promise.all([latestP, rangeP]);
        const cur = lat[W.station] || {};
        const q = cur.flow ? cur.flow.val : null, hgt = cur.height ? cur.height.val : null, z = A.welleZone(q);
        const tw = cur.temperature ? cur.temperature.val : null;                        // Wassertemperatur Reuss
        const hs = rng[W.station] && rng[W.station].height, qs = rng[W.station] && rng[W.station].flow;
        const ago = (s, hrs) => { if (!s) return null; const i = U.indexAt(s.t, U.nowSec() - hrs * 3600); return s.v[i]; };
        const dH = U.isNum(hgt) && U.isNum(ago(hs, 24)) ? (hgt - ago(hs, 24)) * 100 : null;
        const dQ = U.isNum(q) && U.isNum(ago(qs, 6)) ? q - ago(qs, 6) : null;
        const age = cur.flow ? (Date.now() / 1000 - cur.flow.t) / 60 : null;
        const suit = !U.isNum(tw) ? '' : tw < 10 ? 'dicker Neopren, Schuhe, Haube' : tw < 15 ? 'Neopren 5/4 mm' : tw < 19 ? 'Neopren 4/3 mm' : 'Shorty oder 3/2 mm';   // grobe Faustregel
        body.innerHTML = `<div class="grid-fields five">
            ${g.field({ label: 'Abfluss', value: U.r(q), unit: 'm³/s', status: z.st, sub: ui.pill(z.st, z.label) })}
            ${g.field({ label: 'Trend 6 h', value: U.isNum(dQ) ? (dQ > 0 ? '+' : '') + U.r(dQ) : '–', unit: 'm³/s', sub: U.isNum(dQ) ? (Math.abs(dQ) < 5 ? 'stabil' : dQ > 0 ? 'steigend' : 'fallend') : '' })}
            ${g.field({ label: 'Wassertemperatur', value: U.r(tw, 1), unit: '°C', sub: U.esc(suit) })}
            ${g.field({ label: 'Pegel', value: U.r(hgt, 2), unit: 'm ü.M.', sub: U.isNum(dH) ? `${dH > 0 ? '+' : ''}${U.r(dH)} cm in 24 h` : '' })}
            ${g.field({ label: 'Messzeit', value: cur.flow ? U.hhmm(cur.flow.t) : '–', sub: U.isNum(age) && age > 60 ? '<span class="t-warn">Messung älter als 1 h</span>' : 'BAFU, 10-min-Wert' })}
          </div>
          ${g.zoneBar({ label: 'Abfluss-Zonen (m³/s)', value: q, min: 0, max: W.scaleMax, zones: zones(), marks: [W.low, W.high] })}`;
        return [m1, m2];
      });

      ui.fill(cUp, async body => {
        const [{ data: lat, meta: m1 }, { data: rng }] = await Promise.all([latestP, rangeP]);
        body.innerHTML = `<div class="grid-fields two">${W.upstream.map(u => {
          const x = lat[u.id] || {}, s = rng[u.id] && rng[u.id].flow;
          const d6 = x.flow && s ? x.flow.val - s.v[U.indexAt(s.t, U.nowSec() - 6 * 3600)] : null;
          return g.field({ label: u.name, value: x.flow ? U.r(x.flow.val) : '–', unit: 'm³/s', sub: x.flow ? `${U.isNum(d6) ? (d6 > 0 ? '+' : '') + U.r(d6) + ' in 6 h · ' : ''}Stand ${U.hhmm(x.flow.t)}` : 'keine Messung' });
        }).join('')}</div><p class="hint">Steigt der Abfluss in Luzern und Mühlau, steigt er wenige Stunden später auch in Bremgarten.</p>`;
        return m1;
      });

      ui.fill(cWx, async body => {
        const { sets, meta } = await wxP;
        const set = sets[0], h = set.hourly, i = U.indexAt(h.t, U.nowSec()), d = A.days(set, 1)[0];
        const rain3 = U.sum([0, 1, 2].map(k => h.v.precipitation[i + k]));
        const code = h.v.weather_code[i];
        const k = d ? d.di : -1, dv = set.daily ? set.daily.v : {};
        body.innerHTML = `<div class="grid-fields two">
          ${g.field({ label: 'Lufttemperatur', value: U.r(h.v.temperature_2m[i], 1), unit: '°C', sub: k >= 0 ? `heute ${U.r(dv.temperature_2m_min[k])} – ${U.r(dv.temperature_2m_max[k])} °C` : '' })}
          ${g.field({ label: 'Himmel', value: U.r(h.v.cloud_cover[i]), unit: '%', sub: U.esc(SW.load.wmo(code)) })}
          ${g.field({ label: 'Regen 3 h', value: U.r(rain3, 1), unit: 'mm', status: U.isNum(code) && code >= 95 ? 'bad' : rain3 >= 1 ? 'warn' : '', sub: k >= 0 ? `heute total ${U.r(dv.precipitation_sum[k], 1)} mm` : '' })}
          ${g.field({ label: 'Sonnenaufgang', value: d && d.sunrise ? U.hhmm(d.sunrise) : '–', sub: d && d.sunset ? `Untergang ${U.hhmm(d.sunset)}` : '' })}
          </div>`;
        return meta;
      });

      ui.fill(cChart, async body => {
        const [{ data: rng, meta: m2 }, fl] = await Promise.all([rangeP, floodP.catch(e => ({ error: e }))]);
        const qs = rng[W.station] && rng[W.station].flow;
        if (!qs) throw new Error('Keine Messreihe für Mellingen');
        // GloFAS-Tageswerte auf Stundenachse und auf letzten Messwert korrigieren (Faktor)
        let t = qs.t.slice(), meas = qs.v.slice(), fc = t.map(() => null), note = '';
        if (!fl.error) {
          const fd = fl.data, lastT = t[t.length - 1], lastQ = meas[meas.length - 1];
          const iNow = U.indexAt(fd.t, lastT);
          const factor = U.isNum(fd.q[iNow]) && fd.q[iNow] > 1 ? lastQ / fd.q[iNow] : 1;
          for (let k = iNow + 1; k < fd.t.length; k++) {
            const tt = fd.t[k] + 12 * 3600;                               // Tagesmittel auf Mittag legen
            t.push(tt); meas.push(null); fc.push(U.isNum(fd.q[k]) ? fd.q[k] * factor : null);
          }
          fc[qs.t.length - 1] = lastQ;                                    // Linien verbinden
          note = `Trend: GloFAS-Abflussmodell (Open-Meteo Flood API), Tageswerte, mit Faktor ${factor.toFixed(2)} auf die aktuelle Messung korrigiert. <b>Geschätzt</b> – GloFAS rechnet grob und kennt die Seeregulierung nicht.`;
          SW._welleFc = { t: t.slice(qs.t.length), q: fc.slice(qs.t.length), factor, now: lastQ };
        } else note = 'Trend nicht verfügbar: ' + U.esc(fl.error.message);
        body.innerHTML = '<div class="chart-host"></div><p class="hint">' + note + '</p>';
        SW.chart(body.firstChild, { t, height: 270, axes: { l: { min: 0, max: W.high + 40, unit: 'm³/s' } },
          series: [{ label: 'Gemessen', values: meas, color: 'var(--accent)', width: 2.4, unit: 'm³/s' }, { label: 'Trend geschätzt', values: fc, color: 'var(--fg-1)', width: 1.6, dash: '5 4', unit: 'm³/s' }],
          zones: [{ from: 0, to: W.low, color: 'var(--warn)', opacity: 0.08 }, { from: W.low, to: W.high, color: 'var(--ok)', opacity: 0.1 }, { from: W.high, to: 2000, color: 'var(--bad)', opacity: 0.1 }],
          thresholds: [{ y: W.low, label: `${W.low} m³/s`, color: 'var(--warn)' }, { y: W.high, label: `${W.high} m³/s`, color: 'var(--bad)' }] });
        return [m2].concat(fl.meta ? [fl.meta] : []);
      });

      ui.fill(cDays, async body => {
        await Promise.all([rangeP, floodP.catch(() => null)]);
        await new Promise(r => setTimeout(r, 0));
        const fc = SW._welleFc;
        const { sets, meta } = await wxP;
        const bg = sets[0], rain = sets[1];
        const days = A.days(bg, 3);
        body.innerHTML = `<div class="day-cards">${days.map(d => {
          const k = fc ? fc.t.findIndex(x => U.parts(x).date === d.date) : -1;
          const isToday = d.date === U.todayKey();
          const q = k >= 0 ? fc.q[k] : (isToday && fc ? fc.now : null), z = A.welleZone(q);  // heute: aktuelle Messung
          const mm = U.sum(d.idx.map(i => rain.hourly.v.precipitation[i]));
          const dv = bg.daily ? bg.daily.v : {}, di = d.di;
          return `<div class="day-card"><h3>${U.esc(U.dayLabel(d.start))}</h3><div class="grid-fields three">
            ${g.field({ label: k < 0 && isToday ? 'Abfluss gemessen' : 'Abfluss geschätzt', value: U.isNum(q) ? (k < 0 && isToday ? '' : '~') + U.r(q) : '–', unit: 'm³/s', status: z.st, sub: ui.pill(z.st, z.label) })}
            ${g.field({ label: 'Bremgarten max', value: di >= 0 ? U.r(dv.temperature_2m_max[di]) : '–', unit: '°C', sub: di >= 0 ? `Regen ${U.r(dv.precipitation_sum[di], 1)} mm` : '' })}
            ${g.field({ label: 'Regen Einzugsgebiet', value: U.r(mm, 1), unit: 'mm', sub: 'Vierwaldstättersee' })}</div></div>`;
        }).join('')}</div><p class="hint">Die Reuss unterhalb des Vierwaldstättersees reagiert träge: Regen im Einzugsgebiet zeigt sich in Bremgarten oft erst nach 1–2 Tagen.${fc ? '' : ' Abfluss-Trend zurzeit nicht verfügbar.'}</p>`;
        return [meta];
      });
    }
  });
})();

/* ---- js/pages/band.js ---- */
/* Seite «Gelbes Band»: Unterseite Wetterlage (Faktoren, 5-Tage-Bewertung) und Unterseite Route (Karte, generierte Route, Vergleich, beste Startzeit). */
(function () {
  const U = SW.util, C = SW.CONFIG, ui = SW.ui, g = SW.g, A = SW.ana;
  const R = C.rules.band, RT = C.route, P = C.points;
  const RECORD_S = 94 * 60;                                           // Rekord 1 h 34 min

  /* ---------- Daten ---------- */
  // Grosswetterlage: Wind-Stützpunkte des Sees (Luzern zuerst) + Brest + Wien, ein Request
  SW.bandData = function () {
    const pts = RT.windPoints.concat([P.brest, P.wien]);
    return SW.api.forecast({ points: pts, days: 7,
      hourly: ['pressure_msl', 'wind_speed_10m', 'wind_gusts_10m', 'wind_direction_10m', 'wind_speed_850hPa', 'wind_direction_850hPa', 'wind_speed_250hPa'],
      daily: ['sunrise', 'sunset'] }).then(r => {
      const n = RT.windPoints.length, luz = r.sets[0], brest = r.sets[n], wien = r.sets[n + 1];
      const diff = A.diffSeries(wien.hourly, brest.hourly);
      const lakeSets = r.sets.slice(0, n);
      const lake = (k, i) => U.mean(lakeSets.map(s => s.hourly.v[k][i]));   // Mittel der See-Stützpunkte
      const days = A.days(luz, 5);
      const ev = days.map(d => A.bandDay(d, luz.hourly, diff, { spd: i => lake('wind_speed_10m', i), gst: i => lake('wind_gusts_10m', i) }));
      return { r, luz, diff, days, ev };
    });
  };
  // Wind entlang einer eigenen Strecke: Stützpunkte automatisch, ein Request
  function routeData(route) {
    const samples = A.sampleRoute(SW.freeRoute.expand(route.points));   // Stützpunkte entlang des Wasserwegs
    return SW.api.forecast({ points: samples, days: 5, hourly: ['wind_speed_10m', 'wind_gusts_10m', 'wind_direction_10m'] })
      .then(r => ({ samples, sets: r.sets, meta: r.meta, days: U.groupDays(r.sets[0].hourly.t).filter(d => d.date >= U.todayKey()).slice(0, 5) }));
  }
  const fmtDur = s => (U.isNum(s) ? `${Math.floor(s / 3600)} h ${String(Math.round(s % 3600 / 60)).padStart(2, '0')} min` : '–');

  SW.page('band', {
    label: 'Routenplaner', icon: 'band',
    leave() { dropMap(); scanToken++; genToken++; },
    async render(root) {
      routeSection(root);                                             // Strecken und Regatten auf Vierwaldstätter- und Zugersee
    }
  });

  // Eigene Seite: Wetterlage für das Gelbe Band (Rekordanalyse)
  SW.page('gbwetter', {
    label: 'Wetter Gelbes Band', icon: 'gbw',
    async render(root) { strategy(root); }
  });

  /* ---------- Grosswetterlage (wie bisher) ---------- */
  function strategy(root) {
    const cFazit = ui.card({ id: 'c-fazit', cls: 'hero', title: `Fazit Rekordfahrt Gelbes Band (${R.recordTime})`, skeleton: 'block' });
    const cDays = ui.card({ id: 'c-band5', title: '5-Tage-Bewertung', sub: `Rekord braucht ≥ ${R.recordKt} kt konstanten Westwind. Faustregel: Gradient Wien − Brest ≥ ${R.record} hPa und Höhenwind 850 hPa aus ${R.dirLo}–${R.dirHi}° ≥ ${R.h850record} kt.`, skeleton: 'fields' });
    const cChart = ui.card({ id: 'c-bandchart', title: 'Alle Indikatoren 7 Tage', skeleton: 'chart' });
    const cInd = ui.card({ id: 'c-bandind', title: 'Indikatoren 09 · 12 · 15 · 18 Uhr', skeleton: 'block' });
    const cFac = ui.card({ id: 'c-factors', title: 'Wie die Faktoren wirken', sub: 'Pro Tag: Wert jedes Faktors, Schwellen als Marken, Punkte für die Rekord-Bewertung. Alle Schwellen sind Faustregeln.', skeleton: 'block' });
    [cFazit, cFac, cDays, cChart, cInd].forEach(c => root.appendChild(c));
    const prep = SW.bandData();
    ui.fill(cFac, async body => {
      const { r, ev } = await prep;
      let sel = ev.reduce((a, e, k) => (e.score > ev[a].score ? k : a), 0);
      const F = [
        { lab: 'Druckgefälle Wien − Brest', unit: 'hPa', v: e => e.grad, d: 1, min: -4, max: 14, zones: [{ to: R.good, color: 'var(--bg-3)' }, { to: R.record, color: 'var(--warn)' }, { to: 14, color: 'var(--ok)' }], marks: [R.good, R.record], pts: 0,
          how: 'Treibt die Südwest- bis Westströmung über der Schweiz an. Je grösser das Gefälle vom Atlantik nach Osteuropa, desto kräftiger und beständiger der Wind.' },
        { lab: 'Höhenwind 850 hPa aus W/SW', unit: 'kt', v: e => e.w850, d: 0, min: 0, max: 50, zones: [{ to: R.h850good, color: 'var(--bg-3)' }, { to: R.h850record, color: 'var(--warn)' }, { to: 50, color: 'var(--ok)' }], marks: [R.h850good, R.h850record], pts: 1,
          how: 'Wind auf rund 1500 m ü.M. Bei labiler Luft mischt er sich am Nachmittag bis auf den See durch. Zählt nur aus Richtung ' + R.dirLo + '–' + R.dirHi + '°.' },
        { lab: 'Jetstream 250 hPa', unit: 'kt', v: e => e.jet, d: 0, min: 0, max: 160, zones: [{ to: R.jet, color: 'var(--bg-3)' }, { to: 160, color: 'var(--warn)' }], marks: [R.jet], pts: null,
          how: 'Steuert die Tiefs. Ein kräftiger Jet nahe der Alpen bringt Fronten, Böen und Weststurm. Kein Punkteanteil, nur Hinweis.' },
        { lab: 'Wind auf dem See (Mittel)', unit: 'kt', v: e => e.w10, d: 0, min: 0, max: 35, zones: [{ to: 15, color: 'var(--bg-3)' }, { to: R.recordKt, color: 'var(--warn)' }, { to: 35, color: 'var(--ok)' }], marks: [15, R.recordKt], pts: 2,
          how: 'Was die Modelle direkt auf dem See erwarten (Mittel der Stützpunkte Luzern, Weggis, Gersau, Brunnen). Für den Rekord braucht es rund ' + R.recordKt + ' kt.' }
      ];
      const draw = () => {
        const e = ev[sel];
        body.innerHTML = `<div class="chips" role="radiogroup">${ev.map((x, k) => `<button type="button" class="chip ${k === sel ? 'on' : ''}" data-k="${k}">${U.esc(U.dayShort(x.day.start))} <small class="num">${Math.round(x.score)}</small></button>`).join('')}</div>
          <div class="factors">${F.map(f => { const v = f.v(e); return `<div class="factor">
            <div class="fx-head"><span class="f-lab">${f.lab}</span><span class="fx-val num">${U.isNum(v) ? U.r(v, f.d) : '–'}<small>${f.unit}</small></span>${f.pts !== null ? `<span class="fx-pts num">+${Math.round(e.items[f.pts].pts)}</span>` : ''}</div>
            ${g.zoneBar({ value: v, min: f.min, max: f.max, zones: f.zones, marks: f.marks })}
            <p class="fx-how">${U.esc(f.how)}</p></div>`; }).join('')}</div>
          <div class="fx-sum"><span class="f-lab">Rekord-Bewertung ${U.esc(U.dayLabel(e.day.start))}</span><b class="num">${Math.round(e.score)}</b><span>von 100 · ${e.record ? 'Rekordpotenzial' : e.strong ? 'gute Strömung' : 'zu schwach'}</span></div>`;
        body.querySelector('.chips').onclick = ev2 => { const c = ev2.target.closest('.chip'); if (c) { sel = +c.dataset.k; draw(); } };
      };
      draw();
      return r.meta;
    });

    ui.fill(cFazit, async body => {
      const { r, ev } = await prep;
      const best = ev.slice().sort((a, b) => b.score - a.score)[0];
      const head = !best ? 'Keine Daten' : best.record ? `Bester Tag: ${U.dayLabel(best.day.start)} – Rekordpotenzial` : best.strong ? `Bester Tag: ${U.dayLabel(best.day.start)} – gute Strömung, 25 kt knapp verfehlt` : 'Keine Rekordbedingungen in den nächsten 5 Tagen';
      const st = !best ? 'na' : best.record ? 'ok' : best.strong ? 'warn' : 'off';
      body.innerHTML = `<div class="fazit st-${st}"><div class="fazit-h">${U.esc(head)}</div>
        ${best ? `<p>Gradient bis ${U.r(best.grad, 1)} hPa, Höhenwind W/SW bis ${U.r(best.w850)} kt, auf dem See bis ${U.r(best.w10)} kt (Böen ${U.r(best.g10)} kt).
        ${(best.record || best.strong) && best.peak ? `Stärkste Böen gegen <b>${U.hhmm(best.peak)}</b> – die beste Startzeit zeigt die Unterseite «Route».` : 'Am ehesten noch: <b>' + U.esc(U.dayLabel(best.day.start)) + '</b> (höchste Punktzahl).'}</p>` : ''}</div>`;
      return r.meta;
    });
    ui.fill(cDays, async body => {
      const { r, ev } = await prep;
      body.innerHTML = `<div class="band-days">${ev.map(e => {
        const lab = { record: ['ok', 'Rekordpotenzial'], strong: ['warn', 'Gute Strömung'], mod: ['off', 'Mässig'], flat: ['off', 'Flachdruck'] }[e.cat];
        return `<details class="band-day st-${lab[0]}"><summary><b>${U.esc(U.dayLabel(e.day.start))}</b>${ui.pill(lab[0], lab[1])}
          <span>Δp ${U.r(e.grad, 1)} hPa</span><span>850: ${U.r(e.w850)} kt</span><span>See ${U.r(e.w10)} kt</span><span class="num score">${Math.round(e.score)}</span></summary>
          ${g.breakdown(e.items, e.score)}</details>`;
      }).join('')}</div>`;
      return r.meta;
    });
    ui.fill(cChart, async body => {
      const { r, luz, diff } = await prep; const h = luz.hourly;
      body.innerHTML = '<div class="chart-host"></div><p class="hint">Gradient = Meeresspiegeldruck Wien minus Brest (beide Orte aus demselben Modell). Höhenwind und Jetstream über Luzern.</p>';
      SW.chart(body.firstChild, { t: h.t, height: 300, axes: { l: { unit: 'hPa' }, r: { min: 0, unit: 'kt' } },
        series: [{ label: 'Gradient Wien − Brest', values: diff, color: 'var(--ok)', width: 2.4, unit: 'hPa', decimals: 1 },
                 { label: 'Höhenwind 850 hPa', values: h.v.wind_speed_850hPa, color: 'var(--accent)', width: 1.8, axis: 'r', unit: 'kt' },
                 { label: 'Jetstream 250 hPa', values: h.v.wind_speed_250hPa, color: 'var(--warn)', width: 1.4, dash: '5 4', axis: 'r', unit: 'kt' }],
        thresholds: [{ y: R.record, label: `${R.record} hPa Faustregel`, color: 'var(--ok)' }, { y: R.h850record, axis: 'r', label: `850 hPa ${R.h850record} kt`, color: 'var(--accent)', right: true }, { y: R.jet, axis: 'r', label: `Jet ${R.jet} kt`, color: 'var(--warn)', right: true }] });
      return r.meta;
    });
    ui.fill(cInd, async body => {
      const { r, luz, diff, days } = await prep; const h = luz.hourly;
      const at = (d, hr) => d.idx.find(i => U.hourOf(h.t[i]) === hr);
      const cell = (v, d) => (U.isNum(v) ? U.r(v, d) : '<span class="na" title="Modell liefert diese Grösse nicht">n/v</span>');
      const row = (label, fn, unit) => `<tr><th>${label}<small>${unit}</small></th>${days.map(d => `<td class="num">${[9, 12, 15, 18].map(hr => { const i = at(d, hr); return i === undefined ? '–' : fn(i); }).join(' · ')}</td>`).join('')}</tr>`;
      const jetMax = U.max(h.v.wind_speed_250hPa), w850Max = U.max(h.v.wind_speed_850hPa), gMax = U.max(diff);
      body.innerHTML = `<div class="grid-fields three">
          ${g.field({ label: 'Gradient max 7 Tage', value: U.r(gMax, 1), unit: 'hPa', status: gMax >= R.record ? 'ok' : gMax >= R.good ? 'warn' : '' })}
          ${g.field({ label: 'Höhenwind 850 max', value: U.r(w850Max), unit: 'kt', status: w850Max >= R.h850record ? 'ok' : w850Max >= R.h850good ? 'warn' : '' })}
          ${g.field({ label: 'Jetstream 250 max', value: U.r(jetMax), unit: 'kt', status: jetMax >= R.jet ? 'ok' : '', sub: jetMax >= R.jet ? 'aktiver Jet' : 'schwach' })}</div>
        <div class="table-wrap" data-noswipe><table class="data ind"><thead><tr><th></th>${days.map(d => `<th>${U.esc(U.dayShort(d.start))}</th>`).join('')}</tr></thead><tbody>
          ${row('Gradient', i => cell(diff[i], 1), 'hPa')}${row('850 hPa', i => cell(h.v.wind_speed_850hPa[i]), 'kt')}${row('250 hPa', i => cell(h.v.wind_speed_250hPa[i]), 'kt')}${row('Luzern 10 m', i => cell(h.v.wind_speed_10m[i]), 'kt')}
        </tbody></table></div>`;
      return r.meta;
    });
  }

  /* ---------- Unterseite «Route»: Karte mit Legende, generierte Route, Vergleich, beste Startzeit ---------- */
  let map = null, layers = null, scanToken = 0, genToken = 0;
  function dropMap() {                                               // Karte sauber abbauen (laufende Animationen stoppen)
    if (!map) return;
    try { map.stop(); map.off(); map.remove(); } catch (e) { /* bereits entfernt */ }
    map = null;
  }
  // Linien auf der Karte: Farbe, Strich und Bedeutung an EINER Stelle (Legende und Zeichnung nutzen dieselbe Liste)
  const LINES = [
    { k: 'free',   label: 'Generierte Route', note: 'freie Linienwahl, W = Wende, H = Halse', color: '--route', dash: '' },
    { k: 'opt',    label: 'Korridor-Kurs',    note: 'schnellster Kurs nahe der Strecke',      color: '--accent', dash: '' },
    { k: 'direct', label: 'Direkte Linie',    note: 'Wegpunkte gerade verbunden',             color: '--fg-2', dash: '2 6' },
    { k: 'route',  label: 'Strecke',          note: 'S = Start, Z = Ziel, Zahlen = Wegpunkte', color: '--fg-0', dash: '8 6' }
  ];
  const lineOn = k => { const s = SW.settings.bandLines || {}; return s[k] !== undefined ? s[k] : (k === 'free' || k === 'route'); };

  function routeSection(root) {
    const cMain = ui.card({ id: 'c-route', cls: 'hero', title: 'Strecke und Route', sub: 'Strecke = deine Punkte (Start, Wegpunkte, Ziel). Route = der berechnete schnellste Weg.', skeleton: 'none' });
    const cCmp = ui.card({ id: 'c-cmp', title: 'Vergleich der Linien', sub: 'Alle drei Linien mit derselben Startzeit, demselben Wind und derselben Polare gerechnet.', skeleton: 'none' });
    const cScan = ui.card({ id: 'c-scan', title: 'Beste Startzeit', sub: `Jede Startzeit von 06:00 bis 20:00 im ${RT.scanStepMinutes}-Minuten-Raster mit dem Korridor-Kurs durchgerechnet.`, skeleton: 'none' });
    const more = U.el(`<div class="rt-more"><button type="button" class="btn more-btn" id="rt-morebtn" aria-expanded="false"></button><div class="rt-more-b" hidden></div></div>`);
    [cCmp, cScan].forEach(c => more.querySelector('.rt-more-b').appendChild(c));
    [cMain, more].forEach(c => root.appendChild(c));
    let lastScan = null;
    const setMore = open => {                                          // Details: Vergleich der Linien und beste Startzeit
      more.querySelector('.rt-more-b').hidden = !open;
      const b = more.querySelector('#rt-morebtn'); b.setAttribute('aria-expanded', String(open));
      b.textContent = open ? '▴ Details ausblenden' : '▾ Details: Vergleich der Linien · beste Startzeit über den Tag';
    };
    setMore(!!SW.settings.rtMore);
    more.querySelector('#rt-morebtn').onclick = () => { const o = !SW.settings.rtMore; SW.saveSettings({ rtMore: o }); setMore(o); if (o && lastScan) drawScan(lastScan); };
    const mb = cMain.querySelector('.card-b'), cmpB = cCmp.querySelector('.card-b'), scanB = cScan.querySelector('.card-b');
    mb.innerHTML = `<div class="rt-top" data-noswipe>
        <label class="rt-f-sel">Strecke<select id="rt-sel"></select></label>
        <button class="btn rt-dirbtn" type="button" id="rt-dirbtn" title="Richtung umkehren" aria-label="Richtung umkehren">⇄</button>
        <label>Tag<select id="rt-day"></select></label>
        <label>Start<select id="rt-time"></select></label>
        <button class="btn rt-menubtn" type="button" id="rt-menu" aria-label="Weitere Aktionen">⋯ Mehr</button></div>
      <select id="rt-dir" hidden><option value="0">vorwärts</option><option value="1">rückwärts</option></select>
      <p id="rt-dirtxt" class="rt-dirtxt"></p>
      <div id="rt-best" class="rt-best" data-noswipe></div>
      <div class="rt-mapwrap" data-noswipe>
        <div id="rt-map" class="route-map"></div>
        <div class="rt-mapacts">
          <button class="btn primary edit-btn" type="button" id="rt-editbtn" aria-pressed="false">${ui.icon('edit')}<span>Bearbeiten</span></button>
          <button class="btn save-btn" type="button" id="rt-save">${ui.icon('archiv')}<span>Speichern</span></button></div>
        <div class="map-tools rt-maptools">
          <button class="btn map-btn" type="button" data-z="in" aria-label="Hineinzoomen">+</button>
          <button class="btn map-btn" type="button" data-z="out" aria-label="Herauszoomen">−</button>
          <button class="btn map-btn" type="button" data-z="fit" aria-label="Strecke einpassen" title="Strecke einpassen">⤢</button>
          <button class="btn map-btn" type="button" data-z="pan" aria-pressed="false" aria-label="Karte verschieben" title="Karte verschieben">✋</button></div>
        <div id="rt-lakes"></div>
        <div id="rt-tapbar" class="tapbar rt-tapover" hidden data-noswipe><span>Antippen setzt:</span><div class="chips small" id="rt-tap"></div></div></div>
      <div class="map-legend compact" role="group" aria-label="Linien ein- und ausblenden" data-noswipe>${LINES.map(l => `<button type="button" class="lg-item" data-l="${l.k}" aria-pressed="${lineOn(l.k)}" title="${U.esc(l.note)}">
          <svg viewBox="0 0 36 10" aria-hidden="true"><line x1="1" y1="5" x2="35" y2="5" stroke="var(${l.color})" stroke-width="${l.k === 'route' ? 2 : 4}" ${l.dash ? `stroke-dasharray="${l.dash}"` : ''}/></svg>
          <span><b>${l.label}</b></span></button>`).join('')}</div>
      <div id="fr-out"></div>
      <details class="edit-panel" id="rt-editp"><summary id="rt-editsum">Strecke bearbeiten</summary>
        <ol id="rt-list" class="wp-list" data-noswipe></ol>
        <div id="rg-edit" class="rg-edit" data-noswipe hidden></div>
        <p class="route-hint" id="rt-hint"></p>
        <div class="route-ctl" data-noswipe>
          <label>Korridor ± km<input id="rt-cor" type="number" inputmode="decimal" min="0" max="2" step="0.1"></label>
          <label>Boot-Faktor %<input id="rt-fac" type="number" inputmode="numeric" min="50" max="200" step="5"></label></div>
        <div class="row-btns" data-noswipe><label class="toggle"><input type="checkbox" id="fr-marks"><span>Wegpunkte als Bahnmarken runden (generierte Route)</span></label></div>
        <div class="row-btns" data-noswipe><button class="btn primary" type="button" id="rt-done">Fertig bearbeitet</button></div>
        <div hidden>
          <button type="button" id="rt-new"></button><button type="button" id="rt-newrg"></button><button type="button" id="rt-ren"></button>
          <button type="button" id="rt-gpx"></button><input id="rt-imp" type="file" accept=".gpx,application/gpx+xml">
          <button type="button" id="rt-std"></button><button type="button" id="rt-del"></button></div>
      </details>`;
    const tSel = mb.querySelector('#rt-time'), dSel = mb.querySelector('#rt-day'), editP = mb.querySelector('#rt-editp');
    for (let m = RT.startTimes.from * 60; m <= RT.startTimes.to * 60; m += RT.scanStepMinutes) tSel.insertAdjacentHTML('beforeend', `<option value="${m}" ${m === 12 * 60 ? 'selected' : ''}>${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}</option>`);

    const route = () => SW.route();
    // Vorlagen (Gelbes Band, Beispiel-Regatta) bleiben immer gleich: die erste Änderung legt automatisch eine eigene Strecke an
    const FIXED = ['gelbesband', C.route.regattaPreset.id];
    const isFixed = r => FIXED.includes(r.id);
    const SETTINGS_ONLY = ['corridorKm', 'speedFactor'];               // Rechen-Einstellungen ändern den Kurs nicht
    function forkRoute(r) {
      const n = SW.settings.routes.filter(x => x.base === r.id).length + 1;
      const copy = Object.assign(JSON.parse(JSON.stringify(r)), { id: (r.kind === 'regatta' ? 'g' : 'r') + U.uid(), name: `${r.name} – Variante ${n}`, base: r.id });
      SW.saveSettings({ routes: SW.settings.routes.concat([copy]), routeId: copy.id });
      ui.toast(`«${r.name}» bleibt unverändert – Änderung gespeichert als «${copy.name}»`);
      return copy;
    }
    const saveRoute = patch => {
      let r = route();
      if (isFixed(r) && Object.keys(patch).some(k => !SETTINGS_ONLY.includes(k))) r = forkRoute(r);
      SW.saveSettings({ routes: SW.settings.routes.map(x => (x.id === r.id ? Object.assign({}, x, patch) : x)) });
    };
    const isRg = () => route().kind === 'regatta';
    const saveRg = rg => saveRoute({ regatta: rg, points: SW.regatta.points(rg) });   // Bahn → Punkte für Suche und Anzeige
    const rgCopy = () => JSON.parse(JSON.stringify(route().regatta));
    const rev = () => mb.querySelector('#rt-dir').value === '1';
    let data = null, dataKey = '', tapMode = 'ziel', rgMode = 'boje', last = {};
    const editing = () => editP.open;
    // Schrittleiste: antippen springt zum Schritt, erledigte Schritte bekommen einen Haken
    const markSteps = () => {
      const done = { 1: route().points.length >= 2, 2: route().points.length >= 2, 3: !!(last.free && last.free.done), 4: !!(SW.nav && SW.nav.state && SW.nav.state()) };
      mb.dataset.steps = Object.keys(done).filter(k => done[k]).join('');   // für Tests
    };

    /* Karte */
    const mapEl = mb.querySelector('#rt-map');
    dropMap();
    if (window.L && window.L.map) {
      const touch = window.matchMedia('(pointer: coarse)').matches;
      map = window.L.map(mapEl, { zoomControl: false, attributionControl: true, scrollWheelZoom: false, dragging: !touch, zoomSnap: 0.5 });
      SW.lakeMap(map);                                               // grauer Hintergrund, See farbig hervorgehoben
      layers = {}; ['direct', 'opt', 'free', 'route'].forEach(k => { layers[k] = window.L.layerGroup(); if (lineOn(k)) layers[k].addTo(map); });
      map.on('click', e => {
        if (!editing()) return;
        const p = { lat: +e.latlng.lat.toFixed(5), lon: +e.latlng.lng.toFixed(5) };
        if (isRg()) {                                                  // Regatta: Startlinie, Bojen, Ziellinie
          const rg = rgCopy();
          if (rgMode === 'pin') rg.start.a = p;
          if (rgMode === 'boot') rg.start.b = p;
          if (rgMode === 'za') { rg.finish.a = p; rg.finishIsStart = false; }
          if (rgMode === 'zb') { rg.finish.b = p; rg.finishIsStart = false; }
          if (rgMode === 'boje') { rg.marks.push(Object.assign({ name: `Boje ${rg.marks.length + 1}`, side: 'bb' }, p)); rg.course = (rg.course ? rg.course + '-' : '') + rg.marks.length; }
          saveRg(rg); drawRoute(); recalc(); return;
        }
        const pts = route().points.slice();
        if (tapMode === 'start') pts[0] = Object.assign({ name: 'Start' }, pts[0] || {}, p);
        else if (tapMode === 'ziel') { if (pts.length < 2) pts.push(Object.assign({ name: 'Ziel' }, p)); else pts[pts.length - 1] = Object.assign({}, pts[pts.length - 1], p); }
        else pts.splice(Math.max(1, pts.length - 1), 0, Object.assign({ name: `WP ${pts.length}` }, p));   // vor dem Ziel einfügen
        saveRoute({ points: pts }); drawRoute(); recalc();
      });
    } else mapEl.innerHTML = '<div class="placeholder">Karte nicht verfügbar</div>';
    const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim() || '#999';
    const lineStyle = k => { const l = LINES.find(x => x.k === k); return { color: css(l.color), dashArray: l.dash || null }; };

    function drawRoute(fit) {
      const r = route();
      const rg = r.kind === 'regatta';
      mb.querySelector('#rt-editsum').textContent = rg ? 'Regatta-Bahn bearbeiten · Startlinie, Bojen, Bahnfolge, Ziel' : 'Strecke bearbeiten · Start und Ziel setzen';
      const eb = mb.querySelector('#rt-editbtn');                       // Knopf über der Karte zeigt, ob bearbeitet wird
      eb.setAttribute('aria-pressed', String(editing()));

      mb.querySelector('#rt-list').hidden = rg; mb.querySelector('#rg-edit').hidden = !rg;
      mb.querySelector('#fr-marks').closest('.row-btns').hidden = rg;
      const modes = rg ? [['boje', 'Boje'], ['pin', 'Startlinie Pin'], ['boot', 'Startschiff'], ['za', 'Ziellinie A'], ['zb', 'Ziellinie B']] : [['ziel', 'Ziel'], ['start', 'Start'], ['wp', 'Wegpunkt']];
      const cur = rg ? rgMode : tapMode;
      mb.querySelector('#rt-tap').innerHTML = modes.map(([k, l]) => `<button type="button" class="chip ${k === cur ? 'on' : ''}" data-m="${k}">${l}</button>`).join('');
      const lakeNow = SW.curLake();
      mb.querySelector('#rt-lakes').innerHTML = SW.lakeChips(lakeNow, 'map-lakes');
      const onLake = SW.settings.routes.filter(x => SW.freeRoute.lakeOf(x.points) === lakeNow || x.id === r.id);
      mb.querySelector('#rt-sel').innerHTML = onLake.map(x => `<option value="${U.esc(x.id)}" ${x.id === r.id ? 'selected' : ''}>${U.esc(x.name)}</option>`).join('');
      mb.querySelector('#rt-cor').value = r.corridorKm;
      mb.querySelector('#rt-fac').value = r.speedFactor || 100;
      mb.querySelector('#rt-std').hidden = r.base !== 'gelbesband';        // Variante des Gelben Bands: auf Original zurücksetzen
      mb.querySelector('#rt-del').hidden = isFixed(r);                     // Vorlagen lassen sich nicht löschen
      mb.querySelector('#rt-editbtn span').textContent = editing() ? 'Fertig' : isFixed(r) ? 'Eigene Version' : 'Bearbeiten';
      { const ps = rev() ? r.points.slice().reverse() : r.points, nm = p => (p ? p.name.replace(/^(Start|Ziel) | \(Linie\)$/g, '') : '–');
        mb.querySelector('#rt-dirtxt').innerHTML = r.points.length < 2 && !rg ? '<b>Ziel auf der Karte antippen</b> – danach Wegpunkte nach Wunsch' : `${isFixed(r) ? '🔒 ' : ''}<b>${U.esc(nm(ps[0]))} → ${U.esc(nm(ps[ps.length - 1]))}</b>${isFixed(r) ? ' · Vorlage, bleibt immer gleich' : r.base ? ' · eigene Variante' : ''}`; }
      mb.querySelector('#rt-tapbar').hidden = !editing();
      const n = r.points.length;
      const tag = k => (k === 0 ? 'S' : k === n - 1 ? 'Z' : String(k));
      mb.querySelector('#rt-hint').hidden = rg;
      mb.querySelector('#rt-hint').innerHTML = `${n} Punkte · ${U.r(A.routeKm(r.points), 1)} km über die Punkte. ${editing() ? '<b>Auf der Karte: oben wählen, was ein Tippen setzt (Ziel, Start oder zusätzlicher Wegpunkt). Punkte lassen sich ziehen.</b>' : ''} Koordinaten können auch direkt eingetippt werden.`;
      if (rg) rgEditor(r.regatta);
      mb.querySelector('#rt-list').innerHTML = rg ? '' : r.points.map((p, k) => `<li><span class="wp-n num ${k === 0 ? 'is-start' : k === n - 1 ? 'is-ziel' : ''}">${tag(k)}</span>
        <input class="wp-name" value="${U.esc(p.name)}" data-k="${k}" data-f="name" aria-label="Name Punkt ${tag(k)}">
        <input class="wp-coord" value="${p.lat.toFixed(5)}" data-k="${k}" data-f="lat" inputmode="decimal" aria-label="Breite Punkt ${tag(k)}">
        <input class="wp-coord" value="${p.lon.toFixed(5)}" data-k="${k}" data-f="lon" inputmode="decimal" aria-label="Länge Punkt ${tag(k)}">
        <button class="icon-btn" type="button" data-up="${k}" aria-label="Nach oben" ${k ? '' : 'disabled'}>${ui.icon('up')}</button><button class="icon-btn" type="button" data-del="${k}" aria-label="Löschen" ${n <= 2 ? 'disabled' : ''}>${ui.icon('trash')}</button></li>`).join('');
      if (!map) return;
      layers.route.clearLayers();
      const ll = r.points.map(p => [p.lat, p.lon]);
      const wet = SW.freeRoute.expand(r.points).map(p => [p.lat, p.lon]);   // Strecke über das Wasser (nicht quer über Land)
      if (wet.length > 1) window.L.polyline(wet, Object.assign({ weight: 2, opacity: 0.9 }, lineStyle('route'))).addTo(layers.route);
      if (rg) { drawRegatta(r.regatta); if (fit && ll.length) map.fitBounds(ll, { padding: [40, 40], maxZoom: 15, animate: false }); return; }
      if (r.lines) drawLines(r);                                       // Start- und Ziellinie (z. B. Gelbes Band)
      r.points.forEach((p, k) => {
        const cls = k === 0 ? 'wp-icon start' : k === n - 1 ? 'wp-icon ziel' : 'wp-icon';
        const m = window.L.marker([p.lat, p.lon], { draggable: editing(), icon: window.L.divIcon({ className: cls, html: `<span>${tag(k)}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] }), title: p.name }).addTo(layers.route);
        m.bindTooltip(`${tag(k)} · ${U.esc(p.name)}`);
        const delPt = () => { const pts = route().points.slice(); pts.splice(k, 1); saveRoute({ points: pts }); drawRoute(); recalc(); ui.toast(`${p.name} gelöscht`); };
        const acts = [];
        if (k > 0 && k < n - 1) acts.push({ label: 'Wegpunkt löschen', danger: true, fn: delPt });
        if (k > 0 && k < n - 1) acts.push({ label: 'Davor neuen Punkt einfügen', fn: () => { const pts = route().points.slice(), a = pts[k - 1]; pts.splice(k, 0, { name: `WP ${pts.length}`, lat: +((a.lat + p.lat) / 2).toFixed(5), lon: +((a.lon + p.lon) / 2).toFixed(5) }); saveRoute({ points: pts }); drawRoute(); recalc(); } });
        if ((k === 0 || k === n - 1) && n > 2 && !r.lines) acts.push({ label: k === 0 ? 'Start löschen (nächster Punkt wird Start)' : 'Ziel löschen (vorheriger Punkt wird Ziel)', danger: true, fn: delPt });
        acts.push({ label: 'Strecke umkehren', fn: () => { saveRoute({ points: route().points.slice().reverse(), lines: r.lines ? { start: r.lines.finish, finish: r.lines.start } : r.lines }); drawRoute(); recalc(); } });
        pointMenu(m, `${tag(k)} · ${p.name}`, `${p.lat.toFixed(5)}, ${p.lon.toFixed(5)}${editing() ? ' · ziehen zum Verschieben' : ''}`, acts);
        m.on('dragend', () => { const q = m.getLatLng(); const pts = route().points.slice(); pts[k] = Object.assign({}, pts[k], { lat: +q.lat.toFixed(5), lon: +q.lng.toFixed(5) }); saveRoute({ points: pts }); drawRoute(); recalc(); });
      });
      if (fit && ll.length) map.fitBounds(ll, { padding: [30, 30], maxZoom: 14, animate: false });
    }

    // Regatta-Editor: Bahnfolge, Runden, Ziel = Start, Bojen mit Rundungsseite
    function rgEditor(rgd) {
      const box = mb.querySelector('#rg-edit'), seq = SW.regatta.sequence(rgd);
      box.innerHTML = `<div class="route-ctl">
          <label>Bahnfolge (Bojen-Nummern)<input id="rg-course" type="text" inputmode="numeric" value="${U.esc(rgd.course)}" placeholder="z. B. 1-2"></label>
          <label>Runden<input id="rg-laps" type="number" inputmode="numeric" min="1" max="9" step="1" value="${rgd.laps || 1}"></label></div>
        <div class="row-btns"><label class="toggle"><input type="checkbox" id="rg-fis" ${rgd.finishIsStart ? 'checked' : ''}><span>Ziellinie = Startlinie</span></label></div>
        <p class="route-hint">Bahn: Start → ${seq.map(i => U.esc(rgd.marks[i].name) + ' ' + (rgd.marks[i].side === 'stb' ? 'STB' : 'BB')).join(' → ') || '–'} → Ziel. BB = Boje an Backbord lassen (Bahn im Uhrzeigersinn), STB = an Steuerbord.</p>
        <ol class="wp-list">${rgd.marks.map((m, k) => `<li><span class="wp-n num mark-n">${k + 1}</span>
          <input class="wp-name" value="${U.esc(m.name)}" data-m="${k}" data-f="name" aria-label="Name Boje ${k + 1}">
          <select data-m="${k}" data-f="side" aria-label="Rundungsseite Boje ${k + 1}"><option value="bb" ${m.side !== 'stb' ? 'selected' : ''}>an Backbord</option><option value="stb" ${m.side === 'stb' ? 'selected' : ''}>an Steuerbord</option></select>
          <input class="wp-coord" value="${m.lat.toFixed(5)}" data-m="${k}" data-f="lat" inputmode="decimal" aria-label="Breite Boje ${k + 1}">
          <input class="wp-coord" value="${m.lon.toFixed(5)}" data-m="${k}" data-f="lon" inputmode="decimal" aria-label="Länge Boje ${k + 1}">
          <button class="icon-btn" type="button" data-mdel="${k}" aria-label="Boje löschen">${ui.icon('trash')}</button></li>`).join('')}</ol>
        <p class="route-hint">Startlinie: ${Math.round(SW.regatta.lineInfo(rgd.start, rgd.start.a).lengthM)} m zwischen Pin und Startschiff. Bojen und Linienenden lassen sich auf der Karte ziehen.</p>`;
    }
    mb.querySelector('#rg-edit').addEventListener('change', e => {
      const t = e.target, rg = rgCopy();
      if (t.id === 'rg-course') rg.course = t.value.replace(/[^0-9]+/g, '-').replace(/^-|-$/g, '');
      if (t.id === 'rg-laps') rg.laps = U.clamp(parseInt(t.value, 10) || 1, 1, 9);
      if (t.id === 'rg-fis') { rg.finishIsStart = t.checked; if (!t.checked && !rg.finish) rg.finish = JSON.parse(JSON.stringify(rg.start)); }
      if (t.dataset.m !== undefined) {
        const m = rg.marks[+t.dataset.m], f = t.dataset.f;
        if (f === 'name') m.name = t.value.trim().replace(/ß/g, 'ss') || `Boje ${+t.dataset.m + 1}`;
        else if (f === 'side') m.side = t.value;
        else { const v = parseFloat(t.value.replace(',', '.')); if (isFinite(v)) m[f] = +v.toFixed(5); }
      }
      saveRg(rg); drawRoute(); recalc();
    });
    function deleteMark(k) {
      const rg = rgCopy();
      rg.marks.splice(k, 1);
      rg.course = String(rg.course).split(/[^0-9]+/).filter(Boolean).map(Number).filter(n => n !== k + 1).map(n => (n > k + 1 ? n - 1 : n)).join('-');   // Nummern nachführen
      saveRg(rg); drawRoute(); recalc(); ui.toast('Boje gelöscht');
    }
    mb.querySelector('#rg-edit').addEventListener('click', e => {
      const b = e.target.closest('[data-mdel]'); if (!b) return;
      const rg = rgCopy(), k = +b.dataset.mdel;
      rg.marks.splice(k, 1);
      rg.course = String(rg.course).split(/[^0-9]+/).filter(Boolean).map(Number).filter(n => n !== k + 1).map(n => (n > k + 1 ? n - 1 : n)).join('-');   // Nummern nachführen
      saveRg(rg); drawRoute(); recalc();
    });
    // Start-/Ziellinie einer Strecke: Linien zeichnen, Enden ziehbar; Start- und Zielpunkt bleiben in der Linienmitte
    // Menü beim Antippen eines Kartenpunkts: Titel, Erklärung, Aktionen
    function pointMenu(marker, title, sub, actions) {
      if (isFixed(route())) { sub = 'Vorlage – bleibt immer gleich'; actions = [{ label: 'Eigene Version anlegen und bearbeiten', fn: () => newSheet(isRg() ? 'regatta' : 'strecke', true) }]; }
      const el = U.el(`<div class="mk-pop"><b>${U.esc(title)}</b>${sub ? `<span>${U.esc(sub)}</span>` : ''}${actions.map((a, i) => `<button class="btn ${a.danger ? 'mk-del' : ''}" type="button" data-i="${i}">${U.esc(a.label)}</button>`).join('')}</div>`);
      el.addEventListener('click', ev => { const b = ev.target.closest('[data-i]'); if (!b) return; map.closePopup(); actions[+b.dataset.i].fn(); });
      marker.bindPopup(el, { closeButton: true, minWidth: 190, className: 'mk-popup' });
    }
    function drawLines(r) {
      const ed = editing(), L = r.lines;
      const setLine = (which, end, p) => {
        const lines = JSON.parse(JSON.stringify(route().lines)); Object.assign(lines[which][end], p);
        const pts = route().points.slice(), m = SW.regatta.mid(lines[which]), mid = { lat: +m.lat.toFixed(5), lon: +m.lon.toFixed(5) };
        if (which === 'start') pts[0] = Object.assign({}, pts[0], mid); else pts[pts.length - 1] = Object.assign({}, pts[pts.length - 1], mid);
        saveRoute({ lines, points: pts }); drawRoute(); recalc();
      };
      [['start', '--ok', 'Startlinie'], ['finish', '--bad', 'Ziellinie']].forEach(([w, col, lab]) => {
        const l = L[w]; if (!l) return;
        window.L.polyline([[l.a.lat, l.a.lon], [l.b.lat, l.b.lon]], { color: css(col), weight: 5 }).bindTooltip(lab).addTo(layers.route);
        ['a', 'b'].forEach(e => {
          const mk = window.L.marker([l[e].lat, l[e].lon], { draggable: ed, icon: window.L.divIcon({ className: 'rg-handle ' + (w === 'start' ? 'pin' : 'fin'), html: `<span>${w === 'start' ? 'S' : 'Z'}</span>`, iconSize: [26, 26], iconAnchor: [13, 13] }) }).addTo(layers.route);
          mk.bindTooltip(`${lab}: ${U.esc(l[e].name || '')}`);
          pointMenu(mk, `${lab} · ${l[e].name || (e === 'a' ? 'Ende A' : 'Ende B')}`, editing() ? 'Ende ziehen zum Verschieben' : '«Strecke bearbeiten» über der Karte tippen zum Verschieben', [
            { label: `${lab} entfernen`, danger: true, fn: () => { const lines = JSON.parse(JSON.stringify(route().lines)); delete lines[w]; saveRoute({ lines: Object.keys(lines).length ? lines : null }); drawRoute(); recalc(); ui.toast(`${lab} entfernt`); } }
          ].concat(r.base === 'gelbesband' ? [{ label: 'Offizielle Linien wiederherstellen', fn: () => { const d = SW.defaultRoute(); const pts = route().points.slice(); pts[0] = d.points[0]; pts[pts.length - 1] = d.points[d.points.length - 1]; saveRoute({ lines: d.lines, points: pts }); drawRoute(); recalc(); } }] : []));
          mk.on('dragend', () => { const q = mk.getLatLng(); setLine(w, e, { lat: +q.lat.toFixed(5), lon: +q.lng.toFixed(5) }); });
        });
      });
    }
    function drawRegatta(rgd) {
      const ed = editing(), fin = rgd.finishIsStart ? rgd.start : rgd.finish;
      const handle = (p, label, cls, onMove) => {
        const m = window.L.marker([p.lat, p.lon], { draggable: ed, icon: window.L.divIcon({ className: 'rg-handle ' + cls, html: `<span>${label}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] }) }).addTo(layers.route);
        m.on('dragend', () => { const q = m.getLatLng(); onMove({ lat: +q.lat.toFixed(5), lon: +q.lng.toFixed(5) }); });
        return m;
      };
      window.L.polyline([[rgd.start.a.lat, rgd.start.a.lon], [rgd.start.b.lat, rgd.start.b.lon]], { color: css('--ok'), weight: 5 }).bindTooltip('Startlinie').addTo(layers.route);
      if (!rgd.finishIsStart) window.L.polyline([[fin.a.lat, fin.a.lon], [fin.b.lat, fin.b.lon]], { color: css('--bad'), weight: 5, dashArray: '6 4' }).bindTooltip('Ziellinie').addTo(layers.route);
      const swapStart = () => { const rg = rgCopy(); [rg.start.a, rg.start.b] = [rg.start.b, rg.start.a]; saveRg(rg); drawRoute(); recalc(); ui.toast('Pin und Startschiff getauscht'); };
      const toFinish = () => { const rg = rgCopy(); rg.finishIsStart = false; rg.finish = JSON.parse(JSON.stringify(rg.start)); rg.finish.a = SW.ana.offset(rg.start.a, 0, 0.15); rg.finish.b = SW.ana.offset(rg.start.b, 0, 0.15); saveRg(rg); drawRoute(); recalc(); ui.toast('Eigene Ziellinie angelegt – Enden ziehen'); };
      const hint = editing() ? 'ziehen zum Verschieben' : '«Regatta-Bahn bearbeiten» über der Karte tippen zum Verschieben';
      pointMenu(handle(rgd.start.a, 'P', 'pin', p => { const rg = rgCopy(); rg.start.a = p; saveRg(rg); drawRoute(); recalc(); }), 'Startlinie · Pin', hint,
        [{ label: 'Pin und Startschiff tauschen', fn: swapStart }].concat(rgd.finishIsStart ? [{ label: 'Eigene Ziellinie anlegen', fn: toFinish }] : []));
      pointMenu(handle(rgd.start.b, 'S', 'boat', p => { const rg = rgCopy(); rg.start.b = p; saveRg(rg); drawRoute(); recalc(); }), 'Startlinie · Startschiff', hint,
        [{ label: 'Pin und Startschiff tauschen', fn: swapStart }].concat(rgd.finishIsStart ? [{ label: 'Eigene Ziellinie anlegen', fn: toFinish }] : []));
      if (!rgd.finishIsStart) {
        const delFin = { label: 'Ziellinie entfernen (Ziel = Startlinie)', danger: true, fn: () => { const rg = rgCopy(); rg.finishIsStart = true; saveRg(rg); drawRoute(); recalc(); ui.toast('Ziel ist wieder die Startlinie'); } };
        pointMenu(handle(fin.a, 'Z', 'fin', p => { const rg = rgCopy(); rg.finish.a = p; saveRg(rg); drawRoute(); recalc(); }), 'Ziellinie · Ende A', hint, [delFin]);
        pointMenu(handle(fin.b, 'Z', 'fin', p => { const rg = rgCopy(); rg.finish.b = p; saveRg(rg); drawRoute(); recalc(); }), 'Ziellinie · Ende B', hint, [delFin]);
      }
      rgd.marks.forEach((mk, k) => {
        const m = handle(mk, String(k + 1), 'mark side-' + mk.side, p => { const rg = rgCopy(); Object.assign(rg.marks[k], p); saveRg(rg); drawRoute(); recalc(); });
        // Boje antippen: kleines Menü direkt auf der Karte (Rundungsseite wechseln, löschen)
        const pop = U.el(`<div class="mk-pop"><b>${U.esc(mk.name)}</b><span>an ${mk.side === 'stb' ? 'Steuerbord' : 'Backbord'} runden</span>
          <button class="btn" type="button" data-act="side">Seite wechseln</button><button class="btn mk-del" type="button" data-act="del">Boje löschen</button></div>`);
        pop.addEventListener('click', ev => {
          const b = ev.target.closest('[data-act]'); if (!b) return;
          map.closePopup();
          if (b.dataset.act === 'del') deleteMark(k);
          else { const rg = rgCopy(); rg.marks[k].side = rg.marks[k].side === 'stb' ? 'bb' : 'stb'; saveRg(rg); drawRoute(); recalc(); }
        });
        m.bindPopup(pop, { closeButton: true, minWidth: 180, className: 'mk-popup' });
      });
    }

    /* Bedienelemente */
    // Kartenknöpfe: Zoom, Strecke einpassen, Verschieben ein/aus
    const panBtn = mb.querySelector('[data-z="pan"]');
    const setPan = on => { if (!map) return; on ? map.dragging.enable() : map.dragging.disable(); panBtn.setAttribute('aria-pressed', String(on)); panBtn.classList.toggle('primary', on); mapEl.classList.toggle('can-pan', on); };
    if (map) setPan(map.dragging.enabled());
    mb.querySelector('.map-tools').onclick = e => {
      const b = e.target.closest('[data-z]'); if (!b || !map) return;
      const z = b.dataset.z;
      if (z === 'in') map.zoomIn(1);
      if (z === 'out') map.zoomOut(1);
      if (z === 'fit') { const ll = route().points.map(p => [p.lat, p.lon]); if (ll.length) map.fitBounds(ll, { padding: [30, 30], maxZoom: 14 }); }
      if (z === 'pan') setPan(!map.dragging.enabled());
    };
    mb.querySelector('.map-legend').onclick = e => {
      const b = e.target.closest('.lg-item'); if (!b) return;
      const k = b.dataset.l, on = !lineOn(k);
      SW.saveSettings({ bandLines: Object.assign({}, SW.settings.bandLines || {}, { [k]: on }) });
      b.setAttribute('aria-pressed', String(on));
      if (map) { if (on) layers[k].addTo(map); else map.removeLayer(layers[k]); }
    };
    editP.addEventListener('toggle', () => { if (editP.open && isFixed(route())) { editP.open = false; newSheet(isRg() ? 'regatta' : 'strecke', true); return; } drawRoute(); });
    // Strecke oder Regatta ins Routenarchiv (mit generierter Route, falls berechnet)
    mb.querySelector('#rt-save').onclick = () => {
      const r = route(), fr = last.free && last.free.done ? last.free : null;
      const genTxt = fr ? `Generierte Route mitspeichern (${U.esc(U.dayLabel(fr.start))}, Start ${U.hhmm(fr.start)}, ${fmtDur(fr.duration)})` : null;
      SW.archive.form(r.kind === 'regatta' ? 'Regatta im Archiv speichern' : 'Strecke im Archiv speichern', { name: r.name }, genTxt, (d, withGen) => {
        SW.archive.save(r, withGen ? fr : null, d);
        ui.toast(`«${d.name}» im Routenarchiv gespeichert`);
      });
    };
    mb.querySelector('#rt-editbtn').onclick = () => { if (!editP.open && isFixed(route())) { newSheet(isRg() ? 'regatta' : 'strecke', true); return; } editP.open = !editP.open; if (editP.open) ui.toast(isRg() ? 'Bearbeiten: Punkte ziehen oder Karte antippen' : 'Bearbeiten: Karte antippen setzt Ziel, Start oder Wegpunkt'); };
    mb.querySelector('#rt-tap').onclick = e => { const b = e.target.closest('.chip'); if (!b) return; if (isRg()) rgMode = b.dataset.m; else tapMode = b.dataset.m; mb.querySelectorAll('#rt-tap .chip').forEach(x => x.classList.toggle('on', x === b)); };
    // See wählen: Karte auf den See, erste Strecke dieses Sees (falls vorhanden)
    mb.querySelector('#rt-lakes').onclick = e => {
      const b = e.target.closest('[data-lake]'); if (!b) return;
      const id = b.dataset.lake, first = SW.settings.routes.find(x => SW.freeRoute.lakeOf(x.points) === id);
      SW.saveSettings(Object.assign({ lake: id }, first ? { routeId: first.id } : {}));
      if (map) map.fitBounds(SW.lakeBounds(id), { padding: [20, 20], animate: false });
      if (first) { drawRoute(true); recalc(); } else { drawRoute(false); emptyLake(id); }
    };
    // Leerer See: direkt anlegen statt nur Text
    function emptyLake(id) {
      const out = mb.querySelector('#fr-out');
      out.innerHTML = `<div class="empty-state"><p>Noch keine Strecke auf dem ${U.esc(SW.LAKES[id].name)}.</p><div class="row-btns">
        <button class="btn primary" type="button" data-e="new">Neue Strecke</button><button class="btn" type="button" data-e="rg">Neue Regatta</button></div></div>`;
      out.querySelector('[data-e="new"]').onclick = () => mb.querySelector('#rt-new').click();
      out.querySelector('[data-e="rg"]').onclick = () => mb.querySelector('#rt-newrg').click();
    }
    // «⋯ Mehr»: alles, was man selten braucht, in einem Menü
    mb.querySelector('#rt-menu').onclick = () => {
      const r = route(), fx = isFixed(r), rg = isRg();
      const rows = [
        ['new', '+ Neue Strecke', 'leer beginnen oder die aktuelle kopieren'],
        ['newrg', '+ Neue Regatta', 'Startlinie, Bojen, Bahnfolge'],
        fx ? ['own', 'Eigene Version anlegen', `«${r.name}» bleibt fest – Kopie mit eigenem Namen`] : ['ren', 'Umbenennen', `jetzt: «${r.name}»`],
        ['save', 'Im Archiv speichern', 'mit Name, Datum, Notiz und berechneter Route'],
        ['gpx', 'Als GPX exportieren', 'für Plotter oder andere Apps'],
        ['imp', 'GPX-Datei laden', 'Strecke aus Datei übernehmen']
      ].concat(r.base === 'gelbesband' ? [['std', 'Wie Gelbes Band zurücksetzen', 'Punkte und Linien wie das Original']] : [])
       .concat(fx ? [] : [['del', rg ? 'Regatta löschen' : 'Strecke löschen', 'mit Rückfrage']]);
      const el = U.el(`<div class="model-list">${rows.map(([k, t, d]) => `<button type="button" class="model-row ${k === 'del' ? 'danger' : ''}" data-m="${k}"><b>${U.esc(t)}</b><span>${U.esc(d)}</span></button>`).join('')}</div>`);
      const sh = ui.sheet(r.name, el);
      el.onclick = e => {
        const b = e.target.closest('[data-m]'); if (!b) return; sh.close();
        const m = b.dataset.m;
        if (m === 'own') newSheet(rg ? 'regatta' : 'strecke', true);
        else if (m === 'save') mb.querySelector('#rt-save').click();
        else if (m === 'imp') mb.querySelector('#rt-imp').click();
        else mb.querySelector('#rt-' + m).click();
      };
    };
    mb.querySelector('#rt-done').onclick = () => { editP.open = false; };
    // Richtung: ein Knopf statt Auswahlliste
    mb.querySelector('#rt-dirbtn').onclick = () => { const d = mb.querySelector('#rt-dir'); d.value = d.value === '1' ? '0' : '1'; d.dispatchEvent(new Event('change')); drawRoute(); };
    mb.querySelector('#rt-sel').onchange = e => { SW.saveSettings({ routeId: e.target.value }); drawRoute(true); recalc(); };
    mb.querySelector('#rt-dir').onchange = () => computeAll();
    dSel.onchange = () => { computeAll(); scan(); };
    tSel.onchange = () => computeAll();
    mb.querySelector('#fr-marks').onchange = () => generate();
    mb.querySelector('#rt-cor').onchange = e => { saveRoute({ corridorKm: U.clamp(parseFloat(e.target.value) || 0, 0, 2) }); computeAll(); scan(); };
    mb.querySelector('#rt-fac').onchange = e => { saveRoute({ speedFactor: U.clamp(parseFloat(e.target.value) || 100, 50, 200) }); computeAll(); scan(); };
    /* Eigene Strecke oder Regatta anlegen: immer mit selbst gewähltem Namen, leer oder als Kopie der aktuellen */
    function createRoute(kind, name, copy) {
      const cur = route(), c = map ? map.getCenter() : { lat: 47.0, lng: 8.45 }, center = { lat: +c.lat.toFixed(5), lon: +c.lng.toFixed(5) };
      let r;
      if (copy) r = Object.assign(JSON.parse(JSON.stringify(cur)), { id: (cur.kind === 'regatta' ? 'g' : 'r') + U.uid(), name, base: FIXED.includes(cur.id) ? cur.id : cur.base });
      else if (kind === 'regatta') {
        if (!SW.freeRoute.lakeOf([center])) { ui.toast('Kartenmitte auf einen See legen (Vierwaldstättersee oder Zugersee), dann nochmals', 'warn'); return false; }
        const w = data && data.sets ? SW.load.windNow(data.sets[0]).dir : null, rg = SW.regatta.make(center, w);
        r = { id: 'g' + U.uid(), kind: 'regatta', name, regatta: rg, points: SW.regatta.points(rg), corridorKm: 0.3, speedFactor: 100 };
      } else r = { id: 'r' + U.uid(), name, points: [Object.assign({ name: 'Start' }, center)], corridorKm: RT.opt.corridorKm, speedFactor: 100 };
      SW.saveSettings({ routes: SW.settings.routes.concat([r]), routeId: r.id });
      editP.open = true; tapMode = 'ziel'; rgMode = 'boje';
      drawRoute(!!copy || kind === 'regatta'); recalc();
      ui.toast(copy ? `«${name}» angelegt – jetzt bearbeiten` : kind === 'regatta' ? `«${name}» angelegt – Startlinie und Bojen ziehen oder antippen` : `«${name}» angelegt – Ziel auf der Karte antippen`);
      return true;
    }
    function newSheet(kind, fromFixed) {
      const cur = route(), rg = kind === 'regatta';
      const canCopy = rg ? cur.kind === 'regatta' : cur.kind !== 'regatta';
      const own = SW.settings.routes.filter(x => (rg ? x.kind === 'regatta' : !x.kind) && !FIXED.includes(x.id)).length + 1;
      const def = fromFixed ? `Mein ${cur.name.replace(/ Luzern – Brunnen| \(Beispiel\)/, '')}` : rg ? `Regatta ${own}` : `Eigene Strecke ${own}`;
      const el = U.el(`<form class="add-spot new-route">
        ${fromFixed ? `<p class="hint" style="display:block">«${U.esc(cur.name)}» ist fest eingebaut und bleibt immer gleich. Lege eine eigene ${rg ? 'Regatta' : 'Strecke'} an – die kannst du frei bearbeiten.</p>` : ''}
        <label>Name<input name="n" maxlength="50" value="${U.esc(def)}" required></label>
        <div class="model-list" role="radiogroup">
          ${canCopy ? `<label class="model-row ${fromFixed ? 'on' : ''}"><input type="radio" name="t" value="copy" ${fromFixed ? 'checked' : ''}><b>Kopie von «${U.esc(cur.name)}»</b><span>alle Punkte${rg ? ', Bojen und Linien' : ' und Linien'} übernehmen und anpassen</span></label>` : ''}
          <label class="model-row ${fromFixed && canCopy ? '' : 'on'}"><input type="radio" name="t" value="empty" ${fromFixed && canCopy ? '' : 'checked'}><b>${rg ? 'Neue Regatta-Bahn' : 'Leere Strecke'}</b><span>${rg ? 'Startlinie und zwei Bojen an der Kartenmitte, dann anpassen' : 'Start an der Kartenmitte, Ziel und Wegpunkte auf der Karte antippen'}</span></label>
        </div>
        <button class="btn primary" type="submit">Anlegen und bearbeiten</button></form>`);
      el.addEventListener('change', () => el.querySelectorAll('.model-row').forEach(x => x.classList.toggle('on', x.querySelector('input').checked)));
      const sh = ui.sheet(fromFixed ? 'Eigene Version anlegen' : rg ? 'Neue Regatta' : 'Neue Strecke', el);
      setTimeout(() => { const i = el.querySelector('input[name="n"]'); i.focus(); i.select(); }, 50);
      el.onsubmit = ev => {
        ev.preventDefault();
        const f = new FormData(el), name = (f.get('n') || '').toString().trim().replace(/ß/g, 'ss') || def;
        if (createRoute(kind, name, f.get('t') === 'copy')) sh.close();
      };
    }
    SW.bandNewSheet = newSheet;
    mb.querySelector('#rt-new').onclick = () => newSheet('strecke');
    mb.querySelector('#rt-newrg').onclick = () => newSheet('regatta');
    mb.querySelector('#rt-std').onclick = () => { const d = SW.defaultRoute(); saveRoute({ points: d.points, lines: d.lines }); drawRoute(true); recalc(); ui.toast('Strecke wie Gelbes Band zurückgesetzt'); };
    mb.querySelector('#rt-ren').onclick = () => {
      // eigenes Formular statt prompt()
      const el = U.el(`<form class="add-spot"><label>Name<input name="n" maxlength="50" value="${U.esc(route().name)}"></label><button class="btn primary" type="submit">Speichern</button></form>`);
      const sh = ui.sheet(isRg() ? 'Regatta umbenennen' : 'Strecke umbenennen', el);
      setTimeout(() => { const i = el.querySelector('input'); i.focus(); i.select(); }, 50);
      el.onsubmit = ev => { ev.preventDefault(); saveRoute({ name: (new FormData(el).get('n') || 'Strecke').toString().trim().replace(/ß/g, 'ss') }); sh.close(); drawRoute(); };
    };
    mb.querySelector('#rt-del').onclick = e => {
      if (SW.settings.routes.length <= 1) { ui.toast('Mindestens eine Strecke muss bleiben', 'warn'); return; }
      ui.confirm(isRg() ? 'Regatta löschen?' : 'Strecke löschen?', `«${route().name}» wird gelöscht. Gespeicherte Einträge im Routenarchiv bleiben erhalten.`, 'Löschen', () => {
        const rs = SW.settings.routes.filter(r => r.id !== route().id); SW.saveSettings({ routes: rs, routeId: rs[0].id });
        drawRoute(true); recalc();
      });
    };
    mb.querySelector('#rt-gpx').onclick = () => { U.downloadText(`${route().name.replace(/\W+/g, '_')}.gpx`, toGpx(route()), 'application/gpx+xml'); ui.toast('GPX-Datei erstellt'); };
    mb.querySelector('#rt-imp').onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      try {
        const pts = fromGpx(await f.text());
        if (pts.length < 2) throw new Error('weniger als 2 Punkte');
        const id = 'r' + U.uid();
        SW.saveSettings({ routes: SW.settings.routes.concat([{ id, name: f.name.replace(/\.gpx$/i, ''), points: pts, corridorKm: RT.opt.corridorKm, speedFactor: 100 }]), routeId: id });
        ui.toast(`${pts.length} Punkte importiert`); drawRoute(true); recalc();
      } catch (err) { ui.toast('GPX nicht lesbar: ' + err.message, 'bad'); }
      e.target.value = '';
    };
    const list = mb.querySelector('#rt-list');
    list.onclick = e => {
      const b = e.target.closest('button'); if (!b) return;
      const pts = route().points.slice();
      if (b.dataset.del !== undefined) pts.splice(+b.dataset.del, 1);
      if (b.dataset.up !== undefined) { const k = +b.dataset.up; [pts[k - 1], pts[k]] = [pts[k], pts[k - 1]]; }
      saveRoute({ points: pts }); drawRoute(); recalc();
    };
    list.onchange = e => {
      const i = e.target.closest('input[data-k]'); if (!i) return;
      const k = +i.dataset.k, f = i.dataset.f, pts = route().points.slice(), p = Object.assign({}, pts[k]);
      if (f === 'name') p.name = i.value.trim().replace(/ß/g, 'ss') || `Punkt ${k + 1}`;
      else {
        const v = parseFloat(i.value.replace(',', '.'));
        if (!isFinite(v) || (f === 'lat' ? Math.abs(v) > 90 : Math.abs(v) > 180)) { ui.toast('Koordinate ungültig', 'bad'); drawRoute(); return; }
        p[f] = +v.toFixed(5);
      }
      pts[k] = p; saveRoute({ points: pts }); drawRoute(f !== 'name'); if (f !== 'name') recalc();
    };

    /* Rechnen */
    const recalc = U.debounce(async () => {
      const r = route();
      if (r.points.length < 2) { mb.querySelector('#fr-out').innerHTML = ui.note('Start und Ziel setzen: «Strecke bearbeiten» über der Karte tippen und auf die Karte tippen.', 'warn'); cmpB.innerHTML = ''; scanB.innerHTML = ''; ['opt', 'direct', 'free'].forEach(k => layers && layers[k].clearLayers()); return; }
      const key = JSON.stringify(r.points.map(p => [p.lat, p.lon]));
      if (key !== dataKey) {
        mb.querySelector('#fr-out').innerHTML = '<div class="sk sk-block"></div>';
        try { data = await routeData(r); dataKey = key; }
        catch (err) { mb.querySelector('#fr-out').innerHTML = `<div class="err"><b>Winddaten nicht verfügbar</b><span>${U.esc(err.message)}</span></div>`; return; }
        const old = dSel.value;
        dSel.innerHTML = data.days.map((d, k) => `<option value="${k}">${U.esc(U.dayLabel(d.start))}</option>`).join('');
        if (old && +old < data.days.length) dSel.value = old;
      }
      computeAll(); scan();
    }, 400);
    function startOf(mins) {
      const d = data.days[+dSel.value || 0], h = data.sets[0].hourly;
      const t = d.idx.map(i => h.t[i]).find(x => U.hourOf(x) === Math.floor(mins / 60));
      return U.isNum(t) ? t + (mins % 60) * 60 : null;
    }
    function computeAll() {
      if (!data) return;
      const r = route(), start = startOf(+tSel.value);
      if (!U.isNum(start)) { mb.querySelector('#fr-out').innerHTML = ui.note('Startzeit liegt ausserhalb der Prognose', 'warn'); return; }
      last.opt = A.optimize(r, data.samples, data.sets, start, rev());
      last.direct = A.optimize(r, data.samples, data.sets, start, rev(), 0);
      drawLine('opt', last.opt); drawLine('direct', last.direct);
      renderCmp();
      generate();
    }
    function drawLine(k, res) {
      if (!map) return;
      layers[k].clearLayers();
      if (!res || !res.done) return;
      window.L.polyline(res.path.map(p => [p.pos.lat, p.pos.lon]), Object.assign({ weight: k === 'opt' ? 4 : 3, opacity: 0.95 }, lineStyle(k))).bindTooltip(LINES.find(l => l.k === k).label).addTo(layers[k]);
    }

    // Generierte Route: Wind über den ganzen See (ein Request, gecacht), dann Gittersuche
    const lakeP = {};                                                 // Wind über den See, pro See ein Request (gecacht)
    const lakeData = id => (lakeP[id] = lakeP[id] || SW.api.forecast({ points: SW.freeRoute.windPoints(id), days: 5, hourly: ['wind_speed_10m', 'wind_gusts_10m', 'wind_direction_10m'] })
      .catch(e => { delete lakeP[id]; throw e; }));
    async function generate() {
      if (!data) return;
      const my = ++genToken, out = mb.querySelector('#fr-out'), r = route();
      let pts = rev() ? r.points.slice().reverse() : r.points.slice();
      if (!mb.querySelector('#fr-marks').checked && r.kind !== 'regatta') pts = [pts[0], pts[pts.length - 1]];   // Regatta: Bojen immer runden
      last.free = null;
      const lake = SW.freeRoute.lakeOf(pts);
      if (!lake) {
        out.innerHTML = ui.note('Eine Route generieren kann die App auf dem Vierwaldstättersee und dem Zugersee: Start, Ziel und Wegpunkte dürfen höchstens 800 m vom Wasser entfernt sein. Der Korridor-Kurs im Vergleich unten funktioniert überall.', 'warn');
        if (layers) layers.free.clearLayers(); renderCmp(); return;
      }
      const start = startOf(+tSel.value);
      if (!U.isNum(start)) return;
      out.innerHTML = '<div class="sk sk-block"></div>';
      let lk;
      try { lk = await lakeData(lake); } catch (err) { out.innerHTML = `<div class="err"><b>Winddaten nicht verfügbar</b><span>${U.esc(err.message)}</span></div>`; return; }
      await new Promise(res => setTimeout(res, 30));                  // Ladeanzeige zeichnen lassen
      if (my !== genToken) return;
      const fr = SW.freeRoute.route(lake, pts, SW.freeRoute.windPoints(lake), lk.sets, start, (r.speedFactor || 100) / 100);
      if (my !== genToken) return;
      last.free = fr;
      out.innerHTML = freeHtml(fr); markSteps();
      const go = out.querySelector('#fr-start');
      if (go) go.onclick = () => {                                     // Route starten → Segelscreen zeigt Abweichung, Restweg, Manöver
        const rgo = r.kind === 'regatta' ? { start: r.regatta.start, finish: r.regatta.finishIsStart ? r.regatta.start : r.regatta.finish, first: pts[1] } : null;
        const lineo = r.lines ? { start: r.lines.start, finish: r.lines.finish, first: pts[1] } : null;
        SW.nav.start({ regatta: rgo, lines: lineo, name: r.name, lake, ziel: pts[pts.length - 1], marks: pts.slice(1, -1), factor: (r.speedFactor || 100) / 100, fr });
        ui.toast('Route gestartet');
        if (SW.app.visible().some(x => x.id === 'segeln')) location.hash = 'segeln'; else ui.toast('Segelscreen im Setup für diesen Modus einblenden', 'warn');
      };
      ui.addInfo(cMain);
      ui.stamp(cMain.querySelector('.card-f'), [lk.meta, data.meta]);
      drawFree(fr); renderCmp();
    }
    function drawFree(fr) {
      if (!map) return;
      layers.free.clearLayers();
      if (!fr.done) return;
      window.L.polyline(fr.line.map(p => [p.lat, p.lon]), Object.assign({ weight: 5 }, lineStyle('free'))).bindTooltip('Generierte Route').addTo(layers.free);
      fr.schlaege.forEach(s => {
        if (!s.man) return;
        window.L.marker([s.end.pos.lat, s.end.pos.lon], { icon: window.L.divIcon({ className: 'man-icon', html: `<span>${s.man === 'Wende' ? 'W' : 'H'}</span>`, iconSize: [22, 22], iconAnchor: [11, 11] }) })
          .bindTooltip(`${s.man} ${U.hhmm(s.end.t)}`).addTo(layers.free);
      });
    }
    function renderCmp() {
      const row = (k, res, extra) => {
        const l = LINES.find(x => x.k === k);
        return `<tr><td><svg viewBox="0 0 36 10" class="lg-swatch" aria-hidden="true"><line x1="1" y1="5" x2="35" y2="5" stroke="var(${l.color})" stroke-width="4" ${l.dash ? `stroke-dasharray="${l.dash}"` : ''}/></svg> <b>${l.label}</b></td>
          <td class="num">${res && res.done ? fmtDur(res.duration) : '–'}</td><td class="num">${res && res.done ? U.hhmm(res.end) : '–'}</td>
          <td class="num">${res && res.done ? U.r(extra.km(res), 1) + ' km' : '–'}</td><td>${res && res.done ? extra.more(res) : U.esc((res && res.note) || 'nicht verfügbar')}</td></tr>`;
      };
      const best = [last.free, last.opt, last.direct].filter(x => x && x.done).sort((a, b) => a.duration - b.duration)[0];
      cmpB.innerHTML = `<div class="table-wrap" data-noswipe><table class="data cmp"><thead><tr><th>Linie</th><th>Fahrzeit</th><th>Ankunft</th><th>Gesegelt</th><th></th></tr></thead><tbody>
          ${row('free', last.free, { km: r => r.km, more: r => `${r.tacks} ${r.tacks === 1 ? "Wende" : "Wenden"} · ${r.gybes} ${r.gybes === 1 ? "Halse" : "Halsen"}` })}
          ${row('opt', last.opt, { km: r => r.sailedKm, more: () => 'Korridor ±' + U.r(route().corridorKm, 1) + ' km' })}
          ${row('direct', last.direct, { km: r => r.sailedKm, more: () => 'ohne Abweichung' })}
        </tbody></table></div>
        ${best && best.duration < RECORD_S ? ui.note(`Schnellste Linie unter dem Rekord von ${R.recordTime}.`, 'ok') : ''}
        ${last.opt && last.opt.done ? `<details class="steps"><summary>Korridor-Kurs je Etappe</summary>${optLegs(last.opt)}</details>` : ''}`;
      ui.addInfo(cCmp);
    }

    // Beste Startzeit in kleinen Portionen rechnen, damit die Oberfläche flüssig bleibt
    function scan() {
      if (!data) return;
      const my = ++scanToken, r = route(), rv = rev();
      const mins = []; for (let m = RT.startTimes.from * 60; m <= RT.startTimes.to * 60; m += RT.scanStepMinutes) mins.push(m);
      const res = []; let k = 0;
      scanB.innerHTML = '<div class="sk sk-chart"></div>';
      const step = () => {
        if (my !== scanToken) return;                                 // neuer Scan gestartet: diesen abbrechen
        const t0 = performance.now();
        while (k < mins.length && performance.now() - t0 < 30) {
          const s = startOf(mins[k]);
          const o = U.isNum(s) ? A.optimize(r, data.samples, data.sets, s, rv) : null;
          res.push({ m: mins[k], s, dur: o && o.done ? o.duration : null, end: o && o.done ? o.end : null }); k++;
        }
        if (k < mins.length) { setTimeout(step, 0); return; }
        drawScan(res);
      };
      setTimeout(step, 0);
    }
    function drawScan(res) {
      lastScan = res;
      const ok = res.filter(x => U.isNum(x.dur));
      const bestEl = mb.querySelector('#rt-best');
      if (ok.length) {                                                 // Schritt 2: beste Startzeit direkt anbieten
        const b0 = ok.reduce((a, b) => (b.dur < a.dur ? b : a));
        bestEl.innerHTML = +tSel.value === b0.m ? `<span class="t-ok">✓ Schnellste Startzeit gewählt (${U.hhmm(b0.s)}, ${fmtDur(b0.dur)})</span>`
          : `<button type="button" class="btn" id="rt-bestbtn">Schnellste Startzeit: ${U.hhmm(b0.s)} (${fmtDur(b0.dur)}) übernehmen</button>`;
        const bb = bestEl.querySelector('#rt-bestbtn'); if (bb) bb.onclick = () => { tSel.value = String(b0.m); computeAll(); drawScan(res); };
      } else bestEl.innerHTML = '';
      if (scanB.closest('[hidden]')) return;                           // Details zu: Kurve erst beim Aufklappen zeichnen
      if (!ok.length) { scanB.innerHTML = ui.note('Für diesen Tag keine Lösung (Prognose zu kurz?)', 'warn'); return; }
      const best = ok.reduce((a, b) => (b.dur < a.dur ? b : a));
      const isRec = best.dur < RECORD_S;
      scanB.innerHTML = `<div class="grid-fields three">
          ${g.field({ label: 'Beste Startzeit', value: U.hhmm(best.s), status: isRec ? 'ok' : '' })}
          ${g.field({ label: 'Fahrzeit dann', value: fmtDur(best.dur), status: isRec ? 'ok' : '', sub: isRec ? 'unter Rekord' : `Rekord ${R.recordTime}` })}
          ${g.field({ label: 'Ankunft', value: U.hhmm(best.end) })}</div>
        <div class="chart-host"></div>
        <div class="row-btns"><button class="btn primary" type="button" id="scan-use">Start ${U.hhmm(best.s)} übernehmen</button></div>`;
      const pts = res.filter(x => x.s);
      SW.chart(scanB.querySelector('.chart-host'), { t: pts.map(x => x.s), height: 200, nowLine: false, axes: { l: { min: 0, unit: 'min' } },
        series: [{ label: 'Fahrzeit je Startzeit', values: pts.map(x => (U.isNum(x.dur) ? x.dur / 60 : null)), color: 'var(--accent)', width: 2.4, unit: 'min' }],
        thresholds: [{ y: 94, label: 'Rekord 94 min', color: 'var(--ok)' }] });
      scanB.querySelector('#scan-use').onclick = () => { tSel.value = String(best.m); computeAll(); cMain.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
      ui.stamp(cScan.querySelector('.card-f'), [data.meta]);
    }

    { const lk = SW.freeRoute.lakeOf(route().points); if (lk && lk !== SW.settings.lake) SW.saveSettings({ lake: lk }); }
    drawRoute(true); markSteps();
    if (!SW.settings.legendSeen) setTimeout(() => SW.saveSettings({ legendSeen: true }), 0);   // Legende ab dem zweiten Besuch kompakt
    if (SW.settings.pendingNew === 'regatta') { SW.saveSettings({ pendingNew: null }); setTimeout(() => { if (map) map.fitBounds(SW.lakeBounds('zugersee'), { animate: false }); mb.querySelector('#rt-newrg').click(); }, 120); }   // aus dem leeren Archiv: Regatta anlegen
    const myMap = map;
    setTimeout(() => { if (map && map === myMap && mapEl.isConnected) { map.invalidateSize(false); drawRoute(true); } }, 60);  // Karte erst nach dem Einhängen vermessen
    recalc();
  }

  function freeHtml(fr) {
    if (!fr.done) return ui.note(U.esc(fr.note), 'warn');
    return `<div class="route-head"><span class="lg-dot" style="background:var(--route)"></span><b>Generierte Route</b><span>Start ${U.hhmm(fr.start)}</span>
        <button class="btn primary route-go" type="button" id="fr-start"><i class="st-n">4</i>Route starten ▸ Segelscreen</button></div>
      <div class="grid-fields four">
        ${g.field({ label: 'Fahrzeit', value: fmtDur(fr.duration), status: SW.route().id === 'gelbesband' && fr.duration < RECORD_S ? 'ok' : '', sub: SW.route().id !== 'gelbesband' ? `Start ${U.hhmm(fr.start)}` : fr.duration < RECORD_S ? 'unter Rekord' : `Rekord ${R.recordTime}` })}
        ${g.field({ label: 'Ankunft', value: U.hhmm(fr.end) })}
        ${g.field({ label: 'Manöver', value: `${fr.tacks}<small> W</small> ${fr.gybes}<small> H</small>`, sub: 'Wenden · Halsen' })}
        ${g.field({ label: 'Gesegelt', value: U.r(fr.km, 1), unit: 'km' })}</div>
      <div class="table-wrap" data-noswipe><table class="data"><thead><tr><th>Schlag</th><th>Ab</th><th>Kurs</th><th>Bug</th><th>Wind</th><th>TWA</th><th>Speed</th><th>Dauer</th><th>Danach</th></tr></thead><tbody>
        ${fr.schlaege.map((s, k) => `<tr><td class="num">${k + 1}</td><td class="num">${U.hhmm(s.start.t)}</td><td class="num">${U.r(s.heading)}° <small>${U.dirName(s.heading)}</small></td>
          <td><span class="bug ${s.bug.startsWith('Steuer') ? 'stb' : 'bb'}">${s.bug.startsWith('Steuer') ? 'STB' : 'BB'}</span></td>
          <td>${SW.load.windChip(s.tws, null, s.twd)}</td><td class="num">${U.r(s.twa)}° <small>${U.esc(s.mode)}</small></td><td class="num">${U.r(s.v, 1)} kt</td>
          <td class="num">${Math.round(s.dur / 60)} min <small>${U.r(s.km, 1)} km</small></td><td>${s.man ? U.esc(s.man) : 'Ziel'}</td></tr>`).join('')}
      </tbody></table></div>
      <p class="hint">Freie Linienwahl über den ganzen See bei dem Wind, der zur Startzeit und unterwegs herrscht. Uferlinie aus OpenStreetMap, Gitter ${fr.cellM} m, Bootsspeed aus der Polare (kein Segeln im toten Winkel), Wende ${C.route.free.tackS} s, Halse ${C.route.free.gybeS} s. STB = Steuerbord-Bug (Wind von rechts), BB = Backbord-Bug. Kürzere Schläge als eine Gitterweite bildet das Gitter nicht ab; Uferdüsen und Abdeckungen kennen die Modelle nicht.</p>`;
  }
  function optLegs(best) {
    return `<div class="table-wrap" data-noswipe><table class="data"><thead><tr><th>Etappe</th><th>Kurs</th><th>Ankunft</th><th>Wind</th><th>Speed</th><th>Segeln</th><th>Seite</th></tr></thead><tbody>
      ${best.legs.map((l, k) => `<tr><td>${k + 1}. ${U.esc(l.from.name)} → ${U.esc(l.to.name)} <small>${U.r(l.km, 1)} km</small></td><td class="num">${U.r(l.course)}°</td><td class="num">${l.end ? U.hhmm(l.end) : '–'}</td>
        <td>${SW.load.windChip(l.spd, l.gst, l.dir)} <small>${U.dirName(l.dir)}</small></td><td class="num">${U.r(l.boat, 1)} kt</td><td>${U.esc(l.mode)}</td><td>${U.esc(l.side)}</td></tr>`).join('')}
    </tbody></table></div>`;
  }

  /* ---------- GPX ---------- */
  function toGpx(r) {
    const esc = s => String(s).replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
    return `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="SwissWind24" xmlns="http://www.topografix.com/GPX/1/1">\n<rte><name>${esc(r.name)}</name>\n` +
      r.points.map(p => `<rtept lat="${p.lat}" lon="${p.lon}"><name>${esc(p.name)}</name></rtept>`).join('\n') + '\n</rte>\n</gpx>\n';
  }
  function fromGpx(text) {
    const doc = new DOMParser().parseFromString(text, 'application/xml');
    let nodes = Array.from(doc.getElementsByTagName('rtept'));
    if (!nodes.length) nodes = Array.from(doc.getElementsByTagName('wpt'));
    if (!nodes.length) {                                               // Track: auf höchstens 25 Punkte ausdünnen
      const tr = Array.from(doc.getElementsByTagName('trkpt')); const step = Math.max(1, Math.ceil(tr.length / 25));
      nodes = tr.filter((_, k) => k % step === 0 || k === tr.length - 1);
    }
    return nodes.map((n, k) => {
      const nm = n.getElementsByTagName('name')[0];
      return { name: (nm ? nm.textContent : `WP ${k + 1}`).replace(/ß/g, 'ss').slice(0, 40), lat: +(+n.getAttribute('lat')).toFixed(5), lon: +(+n.getAttribute('lon')).toFixed(5) };
    }).filter(p => isFinite(p.lat) && isFinite(p.lon));
  }
})();

/* ---- js/pages/archiv.js ---- */
/* Seite «Routenarchiv»: gespeicherte Strecken, vorbereitete Regatten und generierte Routen.
   Ein Eintrag ist eine Kopie – späteres Bearbeiten im Routenplaner ändert das Archiv nicht. */
(function () {
  const U = SW.util, ui = SW.ui, g = SW.g;
  const AR = SW.archive = {};

  const fmtDur = s => (U.isNum(s) ? `${Math.floor(s / 3600)}:${String(Math.round((s % 3600) / 60)).padStart(2, '0')}` : '–');
  const lakeName = id => (SW.LAKES[id] ? SW.LAKES[id].name : 'unbekannter See');
  const isRg = e => e.route && e.route.kind === 'regatta';
  const fmtDate = iso => (iso ? new Date(iso).toLocaleDateString('de-CH', { day: 'numeric', month: 'numeric', year: 'numeric' }) : '');

  // Generierte Route verkleinern: nur Punkte behalten, an denen der Kurs um mehr als 4° dreht
  function slim(line) {
    if (!line || line.length < 3) return (line || []).map(p => [+p.lat.toFixed(5), +p.lon.toFixed(5)]);
    const out = [line[0]];
    for (let i = 1; i < line.length - 1; i++) {
      const a = U.bearing(out[out.length - 1], line[i]), b = U.bearing(line[i], line[i + 1]);
      if (Math.abs(U.angDiff(a, b)) > 4) out.push(line[i]);
    }
    out.push(line[line.length - 1]);
    return out.map(p => [+p.lat.toFixed(5), +p.lon.toFixed(5)]);
  }

  // Speichern: Strecke/Regatta als Kopie, optional mit der generierten Route
  AR.save = function (route, fr, extra) {
    const r = JSON.parse(JSON.stringify(route));
    if (r.kind === 'regatta') delete r.points;                         // Regatta-Punkte werden beim Öffnen neu berechnet
    const e = Object.assign({
      id: 'a' + U.uid(), name: route.name, savedAt: new Date().toISOString(), note: '', eventDate: '',
      lake: SW.freeRoute.lakeOf(route.points) || SW.settings.lake || null, route: r,
      gen: fr && fr.done ? { start: fr.start, end: fr.end, duration: fr.duration, km: fr.km, tacks: fr.tacks, gybes: fr.gybes, line: slim(fr.line), model: SW.settings.model } : null
    }, extra || {});
    SW.saveSettings({ archive: [e].concat(SW.settings.archive || []) });
    return e;
  };

  // Öffnen: als Strecke in den Routenplaner laden (gleicher Eintrag → gleiche Strecke wird ersetzt)
  AR.open = function (e) {
    const rid = 'arch-' + e.id;
    const r = Object.assign(JSON.parse(JSON.stringify(e.route)), { id: rid, name: e.name });
    if (r.kind === 'regatta') r.points = SW.regatta.points(r.regatta);
    const routes = SW.settings.routes.filter(x => x.id !== rid).concat([r]);
    SW.saveSettings(Object.assign({ routes, routeId: rid }, e.lake ? { lake: e.lake } : {}));
    ui.toast(`«${e.name}» im Planer geöffnet`);
    location.hash = 'band';
  };

  // Formular: Name, Regatta-Datum, Notiz (für Speichern und Bearbeiten)
  AR.form = function (title, init, withGen, onOk) {
    const el = U.el(`<form class="add-spot arch-form">
      <label>Name<input name="n" maxlength="60" value="${U.esc(init.name || '')}" required></label>
      <label>Datum der Regatta / Fahrt<input name="d" type="date" value="${U.esc(init.eventDate || '')}"></label>
      <label class="arch-note">Notiz<input name="t" maxlength="200" value="${U.esc(init.note || '')}" placeholder="z. B. Startzeit, Bahn, Wetter"></label>
      ${withGen ? `<label class="toggle"><input type="checkbox" name="g" checked><span>${withGen}</span></label>` : ''}
      <button class="btn primary" type="submit">Speichern</button></form>`);
    const sh = ui.sheet(title, el);
    el.onsubmit = ev => {
      ev.preventDefault();
      const f = new FormData(el), clean = v => (v || '').toString().trim().replace(/ß/g, 'ss');
      sh.close();
      onOk({ name: clean(f.get('n')) || 'Ohne Namen', eventDate: clean(f.get('d')), note: clean(f.get('t')) }, !!f.get('g'));
    };
  };

  /* ---------- Vorschau als kleine Karte (SVG, ohne Kacheln) ---------- */
  function preview(e) {
    const r = Object.assign({}, e.route);
    const pts = isRg(e) ? SW.regatta.points(r.regatta) : (r.points || []);
    const all = pts.map(p => [p.lat, p.lon]).concat(e.gen ? e.gen.line : []);
    if (isRg(e)) ['start', 'finish'].forEach(k => { const l = r.regatta[k]; if (l && l.a) all.push([l.a.lat, l.a.lon], [l.b.lat, l.b.lon]); });
    if (r.lines) ['start', 'finish'].forEach(k => { const l = r.lines[k]; if (l) all.push([l.a.lat, l.a.lon], [l.b.lat, l.b.lon]); });
    if (!all.length) return '';
    let la0 = Math.min(...all.map(p => p[0])), la1 = Math.max(...all.map(p => p[0])), lo0 = Math.min(...all.map(p => p[1])), lo1 = Math.max(...all.map(p => p[1]));
    const k = Math.cos((la0 + la1) / 2 * Math.PI / 180);
    const minSpan = 0.012;                                             // mindestens ~1.3 km Ausschnitt
    let h = Math.max(la1 - la0, minSpan), w = Math.max((lo1 - lo0) * k, minSpan);
    if (w / h < 1.6) w = h * 1.6; else h = w / 1.6;                     // Seitenverhältnis 16:10
    const cy = (la0 + la1) / 2, cx = (lo0 + lo1) / 2 * k, pad = 0.15;
    const vb = [cx - w * (0.5 + pad), -(cy + h * (0.5 + pad)), w * (1 + 2 * pad), h * (1 + 2 * pad)];
    const X = lon => (lon * k).toFixed(5), Y = lat => (-lat).toFixed(5);
    const ring = rg => 'M' + rg.map(p => `${X(p[0])} ${Y(p[1])}`).join('L') + 'Z';
    const lake = SW.LAKES[e.lake];
    const water = lake ? `<path d="${lake.outer.map(ring).join('')}${(lake.inner || []).map(ring).join('')}" fill="var(--lake)" fill-opacity=".28" fill-rule="evenodd" stroke="var(--lake-line)" stroke-width="${(w / 300).toFixed(5)}"/>` : '';
    const sw = (w / 160).toFixed(5);
    const line = (a, b, col) => `<line x1="${X(a.lon)}" y1="${Y(a.lat)}" x2="${X(b.lon)}" y2="${Y(b.lat)}" stroke="${col}" stroke-width="${sw * 1.2}" stroke-linecap="round"/>`;
    let marks = '';
    if (isRg(e)) {
      marks += line(r.regatta.start.a, r.regatta.start.b, 'var(--ok)');
      if (!r.regatta.finishIsStart && r.regatta.finish) marks += line(r.regatta.finish.a, r.regatta.finish.b, 'var(--bad)');
      (r.regatta.marks || []).forEach(m => { marks += `<circle cx="${X(m.lon)}" cy="${Y(m.lat)}" r="${sw * 2.2}" fill="var(--warn)" stroke="#000" stroke-width="${sw / 3}"/>`; });
    }
    if (r.lines) { if (r.lines.start) marks += line(r.lines.start.a, r.lines.start.b, 'var(--ok)'); if (r.lines.finish) marks += line(r.lines.finish.a, r.lines.finish.b, 'var(--bad)'); }
    const course = pts.length > 1 ? `<polyline points="${pts.map(p => `${X(p.lon)},${Y(p.lat)}`).join(' ')}" fill="none" stroke="var(--fg-0)" stroke-width="${sw * 0.6}" stroke-dasharray="${sw * 3} ${sw * 2}"/>` : '';
    const gen = e.gen && e.gen.line.length > 1 ? `<polyline points="${e.gen.line.map(p => `${X(p[1])},${Y(p[0])}`).join(' ')}" fill="none" stroke="var(--route)" stroke-width="${sw * 1.3}" stroke-linejoin="round"/>` : '';
    return `<svg class="arch-map" viewBox="${vb.map(v => v.toFixed(5)).join(' ')}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${water}${course}${gen}${marks}</svg>`;
  }

  SW.page('archiv', {
    label: 'Routenarchiv', icon: 'archiv',
    render(root) {
      const filter = SW.settings.archFilter || 'alle';
      const list = (SW.settings.archive || []).filter(e => filter === 'alle' || (filter === 'regatta' ? isRg(e) : !isRg(e)));
      const head = ui.card({ id: 'c-arch', cls: 'hero', title: 'Routenarchiv', skeleton: 'none' });
      head.querySelector('.card-b').innerHTML = `<div class="arch-head" data-noswipe>
          <div class="chips" id="ar-filter">${[['alle', 'Alle'], ['strecke', 'Strecken'], ['regatta', 'Regatten']].map(([k, l]) => `<button type="button" class="chip ${k === filter ? 'on' : ''}" data-f="${k}">${l}</button>`).join('')}</div>
          <button type="button" class="btn primary" id="ar-add">${ui.icon('archiv')} Aktuelle Strecke speichern</button></div>
        <p class="hint">Im Planer «Im Archiv speichern» tippen: Die Strecke oder Regatta (Bojen, Start- und Ziellinie, Bahnfolge) wird mit Namen, Datum und Notiz abgelegt – auf Wunsch mit der generierten Route. Am Regattatag hier «Öffnen» tippen und die Route mit dem aktuellen Wind neu rechnen lassen.</p>`;
      root.appendChild(head);
      head.querySelector('#ar-filter').onclick = ev => { const b = ev.target.closest('[data-f]'); if (!b) return; SW.saveSettings({ archFilter: b.dataset.f }); SW.app.show('archiv', true); };
      head.querySelector('#ar-add').onclick = () => {
        const r = SW.route();
        AR.form(r.kind === 'regatta' ? 'Regatta im Archiv speichern' : 'Strecke im Archiv speichern', { name: r.name }, null, d => { AR.save(r, null, d); ui.toast('Im Routenarchiv gespeichert'); SW.app.show('archiv', true); });
      };
      if (!list.length) {
        const any = SW.settings.archive && SW.settings.archive.length;
        const es = U.el(`<div class="empty-state"><p>${any ? 'Keine Einträge in diesem Filter.' : 'Noch nichts gespeichert. Strecke oder Regatta im Planer vorbereiten, dann «Im Archiv speichern».'}</p>
          <div class="row-btns"><button class="btn primary" type="button" data-e="plan">Zum Planer</button><button class="btn" type="button" data-e="rg">Regatta anlegen</button></div></div>`);
        es.onclick = ev => { const b = ev.target.closest('[data-e]'); if (!b) return; if (b.dataset.e === 'rg') SW.saveSettings({ pendingNew: 'regatta' }); location.hash = 'band'; };
        root.appendChild(es);
        return;
      }
      const grid = U.el('<div class="grid g-home arch-grid"></div>');
      list.forEach(e => {
        const c = ui.card({ id: 'c-ar-' + e.id, cls: 'sz-half arch-card', title: e.name, skeleton: 'none' });
        const gen = e.gen;
        c.querySelector('.card-b').innerHTML = `
          <div class="arch-meta">${ui.pill(isRg(e) ? 'warn' : 'off', isRg(e) ? 'Regatta' : 'Strecke')}<span>${U.esc(lakeName(e.lake))}</span>
            ${e.eventDate ? `<span><b>${U.esc(new Date(e.eventDate + 'T12:00').toLocaleDateString('de-CH', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }))}</b></span>` : ''}
            <span class="arch-saved">gespeichert ${U.esc(fmtDate(e.savedAt))}</span></div>
          ${preview(e)}
          ${e.note ? `<p class="arch-text">${U.esc(e.note)}</p>` : ''}
          ${gen ? `<div class="grid-fields three">
              ${g.field({ label: 'Fahrzeit', value: fmtDur(gen.duration), sub: `Start ${U.hhmm(gen.start)} · Wind vom ${new Date(gen.start * 1000).toLocaleDateString('de-CH', { day: 'numeric', month: 'numeric' })}` })}
              ${g.field({ label: 'Gesegelt', value: U.r(gen.km, 1), unit: 'km', sub: `${U.r(gen.km / 1.852, 1)} sm` })}
              ${g.field({ label: 'Manöver', value: `${gen.tacks}<small> W</small> ${gen.gybes}<small> H</small>` })}</div>` : `<p class="hint" style="display:block">${isRg(e) ? `${(e.route.regatta.marks || []).length} Bojen · ${e.route.regatta.laps || 1} ${e.route.regatta.laps === 1 ? 'Runde' : 'Runden'}` : `${(e.route.points || []).length} Punkte`} · ohne generierte Route</p>`}
          <div class="row-btns arch-btns" data-noswipe>
            <button class="btn primary" type="button" data-a="open">Im Planer öffnen</button>
            <button class="btn" type="button" data-a="edit">Umbenennen / Notiz</button>
            <button class="btn" type="button" data-a="dup">Kopie</button>
            <button class="btn" type="button" data-a="del">Löschen</button></div>`;
        c.querySelector('.arch-btns').onclick = ev => {
          const b = ev.target.closest('[data-a]'); if (!b) return;
          const a = b.dataset.a, arch = SW.settings.archive;
          if (a === 'open') AR.open(e);
          if (a === 'edit') AR.form('Eintrag bearbeiten', e, null, d => { SW.saveSettings({ archive: arch.map(x => (x.id === e.id ? Object.assign({}, x, d) : x)) }); SW.app.show('archiv', true); });
          if (a === 'dup') { const cp = Object.assign(JSON.parse(JSON.stringify(e)), { id: 'a' + U.uid(), name: e.name + ' (Kopie)', savedAt: new Date().toISOString() }); SW.saveSettings({ archive: [cp].concat(arch) }); SW.app.show('archiv', true); }
          if (a === 'del') {
            ui.confirm('Eintrag löschen?', `«${e.name}» wird aus dem Routenarchiv entfernt. Das lässt sich nicht rückgängig machen.`, 'Löschen', () => {
              SW.saveSettings({ archive: SW.settings.archive.filter(x => x.id !== e.id) }); ui.toast(`«${e.name}» gelöscht`); SW.app.show('archiv', true);
            });
          }
        };
        grid.appendChild(c);
      });
      // Halbe Karten ohne Partner auf volle Breite
      if (list.length % 2 === 1) grid.lastChild.classList.replace('sz-half', 'sz-full');
      root.appendChild(grid);
    }
  });
})();

/* ---- js/pages/lagen.js ---- */
/* Seite «Lagen»: Föhn-, Bisen- und Westwind-Radar (Druckdifferenzen) sowie Comersee Tivano/Breva. */
(function () {
  const U = SW.util, C = SW.CONFIG, L = SW.load, ui = SW.ui, g = SW.g, A = SW.ana;
  const P = C.points, RU = C.rules;

  // Alle Orte der Seite in EINEM Request (alt: 14 Einzel-Requests)
  const KEYS = ['lugano', 'zuerich', 'genf', 'konstanz', 'bern', 'urnersee', 'aegerisee', 'meggen'];
  function loadAll() {
    const extra = ['kuessnacht', 'eich', 'romanshorn', 'domaso'].map(id => SW.spotById(id));
    const pts = KEYS.map(k => P[k]).concat(extra);
    return SW.api.forecast({ points: pts, hourly: ['pressure_msl', 'wind_speed_10m', 'wind_gusts_10m', 'wind_direction_10m'], daily: ['sunrise', 'sunset'], days: 5 })
      .then(r => { const by = {}; KEYS.concat(['kuessnacht', 'eich', 'romanshorn', 'domaso']).forEach((k, i) => { by[k] = r.sets[i]; }); return { r, by }; });
  }
  SW.lagenData = loadAll;                                            // auch für die Karte auf «Heute»
  const live = (set, name) => { const h = set.hourly, i = U.indexAt(h.t, U.nowSec()); return `<span class="live"><em>${U.esc(name)}</em>${L.windChip(h.v.wind_speed_10m[i], h.v.wind_gusts_10m[i], h.v.wind_direction_10m[i])}</span>`; };
  const nowVal = (t, s) => s[U.indexAt(t, U.nowSec())];

  SW.page('lagen', {
    label: 'Wetterlagen', icon: 'lagen',
    async render(root) {
      const cF = ui.card({ id: 'c-foehn', title: 'Föhn-Radar · Lugano − Zürich', skeleton: 'chart' });
      const cB = ui.card({ id: 'c-bise', title: 'Bisen-Radar · Konstanz − Genf', skeleton: 'chart' });
      const cW = ui.card({ id: 'c-west', title: 'Westwind · Genf − Bern', skeleton: 'chart' });
      const cWs = ui.card({ id: 'c-westspot', title: 'Westwind-Spots 3 Tage', skeleton: 'fields' });
      const cK = ui.card({ id: 'c-como', title: 'Comersee · Domaso: Tivano & Breva', skeleton: 'chart' });
      [cF, cB, cW, cWs, cK].forEach(c => root.appendChild(c));
      const p = loadAll();
      const foot = 'Druck auf Meereshöhe (MSL, nicht QNH), beide Orte aus demselben Modell. Schwellen sind Faustregeln.';

      ui.fill(cF, async body => {
        const { r, by } = await p; const t = by.lugano.hourly.t, d = A.diffSeries(by.lugano.hourly, by.zuerich.hourly);
        const mx = U.max(d), mn = U.min(d), cur = nowVal(t, d), c = A.foehn(cur), peak = A.foehn(Math.abs(mx) >= Math.abs(mn) ? mx : mn);
        body.innerHTML = `<div class="lage-head">${ui.pill(c.st, 'Jetzt: ' + c.text)} ${ui.pill(peak.st, '5 Tage: ' + peak.text)}
          <span class="num big">${U.isNum(cur) ? (cur > 0 ? '+' : '') + cur.toFixed(1) : '–'}<small>hPa</small></span></div>
          ${g.zoneBar({ value: cur, min: -12, max: 12, zones: [{ to: RU.foehn.northStrong, color: 'var(--bad)' }, { to: RU.foehn.north, color: 'var(--warn)' }, { to: RU.foehn.south, color: 'var(--bg-3)' }, { to: RU.foehn.southStrong, color: 'var(--warn)' }, { to: 12, color: 'var(--bad)' }], marks: [RU.foehn.north, 0, RU.foehn.south] })}
          <div class="chart-host"></div><div class="lives">${live(by.urnersee, 'Urnersee')}${live(by.aegerisee, 'Ägerisee')}</div><p class="hint">${foot} Positiv = Südföhn, negativ = Nordföhn.</p>`;
        SW.chart(body.querySelector('.chart-host'), { t, height: 220, axes: { l: { min: -8, max: 8, unit: 'hPa' } }, series: [{ label: 'Lugano − Zürich', values: d, color: 'var(--accent)', width: 2.2, unit: 'hPa', decimals: 1, area: true }],
          thresholds: [{ y: RU.foehn.south, label: `Südföhn +${RU.foehn.south}`, color: 'var(--warn)' }, { y: RU.foehn.southStrong, label: `kräftig +${RU.foehn.southStrong}`, color: 'var(--bad)', right: true }, { y: RU.foehn.north, label: `Nordföhn ${RU.foehn.north}`, color: 'var(--warn)' }, { y: 0, color: 'var(--fg-3)' }] });
        return r.meta;
      });

      ui.fill(cB, async body => {
        const { r, by } = await p; const t = by.konstanz.hourly.t, d = A.diffSeries(by.konstanz.hourly, by.genf.hourly);
        const cur = nowVal(t, d), c = A.bise(cur), pk = A.bise(U.max(d));
        body.innerHTML = `<div class="lage-head">${ui.pill(c.st, 'Jetzt: ' + c.text)} ${ui.pill(pk.st, '5 Tage: ' + pk.text)}<span class="num big">${U.isNum(cur) ? (cur > 0 ? '+' : '') + cur.toFixed(1) : '–'}<small>hPa</small></span></div>
          <div class="chart-host"></div><div class="lives">${live(by.eich, 'Eich')}${live(by.romanshorn, 'Romanshorn')}</div><p class="hint">${foot} Positiv = höherer Druck im Nordosten = Bise.</p>`;
        SW.chart(body.querySelector('.chart-host'), { t, height: 220, axes: { l: { min: -2, max: 8, unit: 'hPa' } }, series: [{ label: 'Konstanz − Genf', values: d, color: 'var(--accent)', width: 2.2, unit: 'hPa', decimals: 1, area: true }],
          thresholds: [{ y: RU.bise.weak, label: `mässig +${RU.bise.weak}`, color: 'var(--warn)' }, { y: RU.bise.strong, label: `stark +${RU.bise.strong}`, color: 'var(--ok)' }, { y: RU.bise.storm, label: `Sturm +${RU.bise.storm}`, color: 'var(--bad)', right: true }] });
        return r.meta;
      });

      ui.fill(cW, async body => {
        const { r, by } = await p; const t = by.genf.hourly.t, d = A.diffSeries(by.genf.hourly, by.bern.hourly);
        const cur = nowVal(t, d), c = A.west(cur), pk = A.west(U.max(d));
        body.innerHTML = `<div class="lage-head">${ui.pill(c.st, 'Jetzt: ' + c.text)} ${ui.pill(pk.st, '5 Tage: ' + pk.text)}<span class="num big">${U.isNum(cur) ? (cur > 0 ? '+' : '') + cur.toFixed(1) : '–'}<small>hPa</small></span></div>
          <div class="chart-host"></div><div class="lives">${live(by.kuessnacht, 'Küssnacht')}${live(by.meggen, 'Meggen')}${live(by.romanshorn, 'Romanshorn')}${live(by.eich, 'Eich')}</div>
          <p class="hint">${foot} Positiv = höherer Druck im Westen, Luft strömt durchs Mittelland nach Osten. Die alte App rechnete Bern − Genf (Vorzeichen umgekehrt).</p>`;
        SW.chart(body.querySelector('.chart-host'), { t, height: 220, axes: { l: { min: -2, max: 6, unit: 'hPa' } }, series: [{ label: 'Genf − Bern', values: d, color: 'var(--accent)', width: 2.2, unit: 'hPa', decimals: 1, area: true }],
          thresholds: [{ y: RU.west.weak, label: `Tendenz +${RU.west.weak}`, color: 'var(--warn)' }, { y: RU.west.strong, label: `stark +${RU.west.strong}`, color: 'var(--ok)' }] });
        return r.meta;
      });

      ui.fill(cWs, async body => {
        const { r, by } = await p;
        let cur = 'kuessnacht';
        const draw = () => {
          body.innerHTML = `<div class="chips" role="radiogroup">${['kuessnacht', 'romanshorn'].map(k => `<button type="button" class="chip ${k === cur ? 'on' : ''}" data-k="${k}">${U.esc(SW.spotById(k).name)}</button>`).join('')}</div>` + L.dayCards(by[cur], A.days(by[cur], 3), { from: 8, to: 21 });
          body.querySelector('.chips').onclick = e => { const b = e.target.closest('.chip'); if (b) { cur = b.dataset.k; draw(); } };
        };
        draw();
        return r.meta;
      });

      ui.fill(cK, async body => {
        const { r, by } = await p; const set = by.domaso, h = set.hourly, K = C.como;
        const days = A.days(set, 3), cm = A.como(set, days);
        body.innerHTML = `<div class="chart-host"></div>
          <div class="day-cards">${cm.perDay.map(x => {
            const t = A.comoRating(x.tivano), b = A.comoRating(x.breva);
            return `<div class="day-card"><h3>${U.esc(U.dayLabel(x.day.start))}</h3><div class="grid-fields two">
              ${g.field({ label: `Tivano (N) ${K.tivano.hours[0]}–${K.tivano.hours[1]} h`, value: x.tivano ? U.r(x.tivano.v) : '–', unit: 'kt', status: t.st, sub: x.tivano && x.tivano.v > 0 ? `${U.hhmm(x.tivano.t)} · Böen ${U.r(x.tivano.g)} · ${ui.pill(t.st, t.text)}` : ui.pill(t.st, t.text) })}
              ${g.field({ label: `Breva (S) ${K.breva.hours[0]}–${K.breva.hours[1]} h`, value: x.breva ? U.r(x.breva.v) : '–', unit: 'kt', status: b.st, sub: x.breva && x.breva.v > 0 ? `${U.hhmm(x.breva.t)} · Böen ${U.r(x.breva.g)} · ${ui.pill(b.st, b.text)}` : ui.pill(b.st, b.text) })}</div></div>`;
          }).join('')}</div>
          <div class="lives">${live(set, 'Domaso jetzt')}</div>
          <p class="hint">Tivano: Nordwind aus ${K.tivano.dirLo}–${K.tivano.dirHi}°, nachts bis Mittag. Breva: thermischer Südwind aus ${K.breva.dirLo}–${K.breva.dirHi}°, am Nachmittag, bei Sonne meist der stärkere Wind am Nordende. Das Modellgitter löst den engen See nur grob auf – Webcam prüfen.</p>`;
        SW.chart(body.querySelector('.chart-host'), { t: h.t, height: 220, axes: { l: { min: 0, max: 15, unit: 'kt' } },
          series: [{ label: 'Tivano (N)', values: cm.tiv, color: 'var(--accent)', width: 2.2, unit: 'kt' }, { label: 'Breva (S)', values: cm.bre, color: 'var(--warn)', width: 2.2, unit: 'kt' }],
          thresholds: [{ y: K.goodKt, label: `gut ab ${K.goodKt} kt`, color: 'var(--ok)' }] });
        return r.meta;
      });
    }
  });
})();

/* ---- js/pages/feierabend.js ---- */
/* Spot-Unterreiter «Feierabend»: 15/17/19/21 Uhr für den aktuellen Spot, 3 Tage, transparenter Index. */
(function () {
  const U = SW.util, C = SW.CONFIG, L = SW.load, ui = SW.ui, g = SW.g, A = SW.ana;
  const F = C.feierabend;

  SW.spotTabs = SW.spotTabs || {};
  SW.spotTabs.feierabend = function (root, spot) {                      // Unterreiter der Spot-Seite
    {
      const card = ui.card({ id: 'c-feier', title: `${spot.name} · Feierabend-Runde`, sub: `Index 0–100 = wie gut die Stunde für die gewählte Sportart passt. Antippen zeigt, was wie viel beiträgt. Nach Sonnenuntergang gibt es deutlichen Abzug.`, skeleton: 'fields' });
      root.appendChild(card);
      ui.fill(card, async body => {
        const { set, meta } = await L.spot(spot);
        const draw = () => {
          const sport = L.sport(), days = A.days(set, 3), h = set.hourly;
          body.innerHTML = '';
          body.appendChild(L.sportChips(L.sportKey(), k => { SW.saveSettings({ sport: k }); draw(); }));
          body.insertAdjacentHTML('beforeend', days.map(d => `<h3 class="sub-h">${U.esc(U.dayLabel(d.start))} <small>${d.sunset ? 'Sonnenuntergang ' + U.hhmm(d.sunset) : ''}</small></h3>
            <div class="slots">${F.hours.map(hr => {
              const i = d.idx.find(k => U.hourOf(h.t[k]) === hr);
              if (i === undefined) return `<div class="slot na"><div class="f-lab">${hr}:00</div><div>keine Daten</div></div>`;
              const f = A.feierabend(set, i, d, sport);
              const st = f.thunder ? 'bad' : f.score >= 60 ? 'ok' : f.score >= 30 ? 'warn' : 'off';
              const thermal = U.isNum(f.rad) && f.rad > 350 && f.tmp > 20 ? 'Thermik stark' : U.isNum(f.rad) && f.rad > 150 && f.tmp > 16 ? 'Thermik mässig' : 'Thermik neutral';
              return `<details class="slot st-${st}"><summary>
                <div class="slot-h"><b class="num">${hr}:00</b>${f.dark ? ui.pill('off', 'dunkel') : ''}</div>
                ${g.ring({ value: f.score, label: 'Index', unit: '' })}
                <div class="slot-w">${L.windChip(f.spd, f.gst, f.dir)} <span>${U.dirName(f.dir)}</span></div>
                <div class="slot-x">${f.thunder ? '<b class="t-bad">Gewitterrisiko</b>' : U.isNum(f.rain) && f.rain >= 0.2 ? `Regen ${f.rain.toFixed(1)} mm` : U.esc(L.wmo(f.code))} · ${thermal}</div></summary>
                ${g.breakdown(f.items, f.score)}</details>`;
            }).join('')}</div>`).join(''));
        };
        draw();
        return meta;
      });
    }
  };
})();

/* ---- js/pages/karte.js ---- */
/* Seite «Karte»: Windy-Windkarte und Webcams mit echtem Ladezustand und Vollbild. */
(function () {
  const U = SW.util, C = SW.CONFIG, L = SW.load, ui = SW.ui;
  let camTimer = null;

  SW.page('karte', {
    label: 'Karte', icon: 'karte',
    leave() { clearInterval(camTimer); camTimer = null; },             // beim Verlassen keine Bilder mehr nachladen
    async render(root) {
      const cMap = ui.card({ id: 'c-map', title: 'Live-Windkarte', skeleton: 'none' });
      const cCam = ui.card({ id: 'c-cams', title: 'Webcams', sub: 'Bild antippen für Vollbild. Bilder kommen direkt von den Betreibern und werden alle 5 Minuten neu geladen, solange diese Seite offen ist.', skeleton: 'none' });
      root.appendChild(cMap); root.appendChild(cCam);
      const mb = cMap.querySelector('.card-b');
      let view = 0;
      const drawMap = () => {
        mb.innerHTML = `<div class="chips">${C.windy.views.map((v, k) => `<button type="button" class="chip ${k === view ? 'on' : ''}" data-k="${k}">${U.esc(v.name)}</button>`).join('')}</div>${L.windy(C.windy.views[view], 460)}
          <p class="hint">Windy (ECMWF), extern eingebettet – braucht Internet.</p>`;
        mb.querySelector('.chips').onclick = e => { const b = e.target.closest('.chip'); if (b) { view = +b.dataset.k; drawMap(); } };
      };
      drawMap();

      const cb = cCam.querySelector('.card-b');
      cb.innerHTML = `<div class="cams">${C.webcams.map(c => `<figure class="cam" data-id="${c.id}">
          <div class="cam-img"><img alt="Webcam ${U.esc(c.name)}" decoding="async"><div class="cam-ph">Lade Bild…</div></div>
          <figcaption><b>${U.esc(c.name)}</b><span class="cam-t">–</span>${c.note ? `<small>${U.esc(c.note)}</small>` : ''}</figcaption></figure>`).join('')}</div>`;
      const load = () => C.webcams.forEach(c => loadCam(cb.querySelector(`[data-id="${c.id}"]`), c));
      load();
      clearInterval(camTimer);
      camTimer = setInterval(load, C.webcamRefreshMinutes * 60000);
      cb.addEventListener('click', e => {
        const f = e.target.closest('.cam'); if (!f) return;
        const img = f.querySelector('img'); if (!img.dataset.ok) return;
        const box = U.el(`<div class="lightbox" role="dialog" aria-label="Webcam Vollbild"><img src="${img.src}" alt="${U.esc(img.alt)}"><button class="icon-btn" type="button" aria-label="Schliessen">${ui.icon('close')}</button><span>${U.esc(f.querySelector('b').textContent)} · ${U.esc(f.querySelector('.cam-t').textContent)}</span></div>`);
        box.onclick = () => box.remove();
        document.body.appendChild(box);
      });
    }
  });

  // Bild laden; Zeitstempel nur bei Erfolg, sonst Platzhalter. Fallback-URL wird einmal versucht.
  function loadCam(fig, c, useFallback) {
    const img = fig.querySelector('img'), ph = fig.querySelector('.cam-ph'), ts = fig.querySelector('.cam-t');
    const src = (useFallback ? c.fallback : c.src);
    const probe = new Image();
    probe.onload = () => {
      img.src = probe.src; img.dataset.ok = '1'; ph.hidden = true; fig.classList.remove('bad');
      ts.textContent = `Geladen ${U.hhmm(Date.now() / 1000)}`;
    };
    probe.onerror = () => {
      if (!useFallback && c.fallback) return loadCam(fig, c, true);
      fig.classList.add('bad'); ph.hidden = false;
      ph.textContent = navigator.onLine === false ? 'Offline – kein Bild' : 'Bild nicht erreichbar';
      if (!img.dataset.ok) ts.textContent = 'nicht geladen';
      else ts.textContent += ' (Aktualisierung fehlgeschlagen)';
    };
    probe.src = src + (src.includes('?') ? '&' : '?') + 't=' + Math.floor(Date.now() / 60000); // Cache-Brecher pro Minute
  }
})();

/* ---- js/pages/gruppen.js ---- */
/* Sammelseiten mit Unterreitern: weniger Knöpfe in der Navigation.
   «Routen» = Routenplaner · Wetter Gelbes Band · Archiv, «Wetter» = Wetterlagen · Karte.
   Die bisherigen Seiten bleiben als Unterseiten erhalten (alte Links wie #band funktionieren weiter). */
(function () {
  const U = SW.util;
  const GROUPS = {
    routen: { label: 'Routen', icon: 'band', key: 'routenTab', tabs: [['band', 'Planer'], ['gbwetter', 'Wetter Gelbes Band'], ['archiv', 'Archiv']] },
    wetter: { label: 'Wetter', icon: 'lagen', key: 'wetterTab', tabs: [['lagen', 'Wetterlagen'], ['karte', 'Karte & Webcams']] }
  };
  SW.GROUPS = GROUPS;
  const subPage = id => SW.pages.find(p => p.id === id);
  // Unterseite → Sammelseite (für alte Links und Sprünge aus anderen Seiten)
  SW.groupOf = id => Object.keys(GROUPS).find(g => GROUPS[g].tabs.some(t => t[0] === id)) || null;

  Object.keys(GROUPS).forEach(gid => {
    const G = GROUPS[gid];
    G.tabs.forEach(([id]) => { const p = subPage(id); if (p) p.sub = gid; });   // Unterseiten nicht einzeln in der Navigation
    let active = null;
    SW.page(gid, {
      label: G.label, icon: G.icon,
      leave() { const p = subPage(active); if (p && p.leave) p.leave(); active = null; },
      async render(root) {
        const tab = G.tabs.some(t => t[0] === SW.settings[G.key]) ? SW.settings[G.key] : G.tabs[0][0];
        const prev = subPage(active);
        if (prev && active !== tab && prev.leave) prev.leave();          // Unterreiter gewechselt: alte Unterseite aufräumen
        active = tab;
        const bar = U.el(`<div class="subtabs group-tabs" role="tablist" data-noswipe>${G.tabs.map(([id, l]) => `<button type="button" role="tab" class="subtab ${id === tab ? 'on' : ''}" aria-selected="${id === tab}" data-t="${id}">${U.esc(l)}</button>`).join('')}</div>`);
        bar.onclick = e => { const b = e.target.closest('.subtab'); if (!b || b.dataset.t === active) return; SW.saveSettings({ [G.key]: b.dataset.t }); SW.app.show(gid, true); };
        root.appendChild(bar);
        root.classList.add('page-' + tab);                               // Stile der Unterseite gelten weiter
        await subPage(tab).render(root);
      }
    });
  });
})();

/* ---- js/pages/setup.js ---- */
/* Seite «Setup»: Anzeige-Modus, Spots verwalten, Schwellen pro Sportart, Daten, Info. */
(function () {
  const U = SW.util, C = SW.CONFIG, ui = SW.ui;

  SW.page('setup', {
    label: 'Setup', icon: 'setup',
    async render(root) {
      const cMode = ui.card({ id: 'c-mode', title: 'Modus anpassen', sub: 'Ausgeblendete Seiten und Karten verschwinden ganz. Der Modus «Alles» bringt jederzeit alles zurück.', skeleton: 'none' });
      root.appendChild(cMode);
      modeCard(cMode.querySelector('.card-b'));
      const cTheme = ui.card({ id: 'c-theme', title: 'Lichtmodus', skeleton: 'none' });
      const cSpots = ui.card({ id: 'c-spots', title: 'Spots', sub: 'Reihenfolge: am Griff ziehen oder Pfeile nutzen. Oberster Spot = Start-Spot.', skeleton: 'none' });
      const cSport = ui.card({ id: 'c-sports', title: 'Schwellen pro Sportart', sub: 'Mittelwind in Knoten (Flusswelle: Abfluss m³/s). Gilt für Ampel-Fenster, Feierabend-Index und Spot-Karten.', skeleton: 'none' });
      const cUser = ui.card({ id: 'c-user', cls: 'hero', title: 'Angemeldet', skeleton: 'none' });
      const cModel = ui.card({ id: 'c-model', title: 'Wettermodell', skeleton: 'none' });
      const cProf = ui.card({ id: 'c-profile', title: 'Profil teilen & übernehmen', skeleton: 'none' });
      const cData = ui.card({ id: 'c-data', title: 'Daten & Info', skeleton: 'none' });
      [cTheme, cSpots, cSport, cProf, cData].forEach(c => root.appendChild(c));
      root.insertBefore(cUser, root.firstChild);
      root.insertBefore(cModel, cUser.nextSibling);
      const mi = SW.api.modelInfo(SW.settings.model);
      cModel.querySelector('.card-b').innerHTML = `<div class="user-row"><div><b class="user-name">${U.esc(mi.label)}</b>
          <span class="hint" style="display:block">${U.esc(mi.info || '')}. Vergleich aller Modelle: Spot › Modelle.</span></div>
          <button class="btn" type="button" id="s-model">Modell wechseln</button></div>`;
      cModel.querySelector('#s-model').onclick = () => SW.app.modelSheet();
      cUser.querySelector('.card-b').innerHTML = `<div class="user-row"><div><b class="user-name">${U.esc(SW.users.label())}</b>
          <span class="hint" style="display:block">Favoriten, Strecken und Routenarchiv gehören zu diesem Profil und bleiben auf diesem Gerät.</span></div>
          <div class="row-btns"><button class="btn primary" type="button" id="u-switch">Profil wechseln</button><button class="btn" type="button" id="u-intro">Einführung zeigen</button></div></div>`;
      cUser.querySelector('#u-switch').onclick = () => SW.users.choose(false);
      cUser.querySelector('#u-intro').onclick = () => SW.users.intro();
      profileCard(cProf.querySelector('.card-b'));
      themeCard(cTheme.querySelector('.card-b'));
      spotsCard(cSpots.querySelector('.card-b'));
      sportCard(cSport.querySelector('.card-b'));
      dataCard(cData.querySelector('.card-b'));
    }
  });

  // Modus bearbeiten: Seiten, Karten auf «Heute» (mit Reihenfolge), Sportarten, Kompaktansicht
  let editMode = null;
  function modeCard(b) {
    const S = SW.settings, k = editMode && S.modes[editMode] ? editMode : S.mode, m = S.modes[k];
    const PAGES = SW.pages.filter(p => p.id !== 'setup' && !p.sub);   // Unterreiter nicht einzeln
    const allCards = Object.keys(C.heuteCards);
    const order = m.cards.concat(allCards.filter(c => !m.cards.includes(c)));   // eingeblendete zuerst, Rest dahinter
    const wind = ['foil', 'windsurf', 'kite', 'segeln'];
    b.innerHTML = `<div class="chips" role="radiogroup" aria-label="Modus wählen">${Object.keys(S.modes).map(x => `<button type="button" class="chip ${x === k ? 'on' : ''}" data-m="${x}">${U.esc(S.modes[x].label)}${x === S.mode ? ' ●' : ''}</button>`).join('')}</div>
      <h3 class="sub-h">Seiten</h3>
      <div class="toggles">${PAGES.map(p => `<label class="toggle"><input type="checkbox" data-page="${p.id}" ${m.pages.includes(p.id) ? 'checked' : ''} ${p.id === 'heute' ? 'disabled' : ''}><span>${U.esc(p.label)}</span></label>`).join('')}</div>
      <h3 class="sub-h">Karten auf «Heute» <small>Reihenfolge mit Pfeilen</small></h3>
      <ul class="spot-list card-order">${order.map((c, i) => `<li class="spot-item" data-c="${c}"><label class="toggle flat"><input type="checkbox" data-card="${c}" ${m.cards.includes(c) ? 'checked' : ''}><span>${U.esc(C.heuteCards[c])}</span></label>
        <button class="icon-btn" type="button" data-cu="${c}" aria-label="Nach oben" ${i ? '' : 'disabled'}>${ui.icon('up')}</button><button class="icon-btn" type="button" data-cd="${c}" aria-label="Nach unten" ${i < order.length - 1 ? '' : 'disabled'}>${ui.icon('down')}</button></li>`).join('')}</ul>
      <h3 class="sub-h">Sportarten in diesem Modus</h3>
      <div class="toggles">${wind.map(w => `<label class="toggle"><input type="checkbox" data-sport="${w}" ${m.sports.includes(w) ? 'checked' : ''}><span>${U.esc(S.sports[w].label)}</span></label>`).join('')}</div>
      <div class="row-btns" style="margin-top:12px">
        <label class="toggle"><input type="checkbox" id="m-compact" ${S.compact ? 'checked' : ''}><span>Kompaktansicht (ohne Erklärtexte)</span></label>
        ${k !== S.mode ? `<button class="btn primary" type="button" id="m-use">${U.esc(m.label)} aktivieren</button>` : ''}
        ${C.modes[k] ? `<button class="btn" type="button" id="m-reset">Vorlage wiederherstellen</button>` : ''}</div>`;
    const save = patch => {
      const modes = JSON.parse(JSON.stringify(S.modes)); Object.assign(modes[k], patch);
      SW.saveSettings({ modes }); if (k === S.mode) SW.app.buildNav(); modeCard(b);
    };
    b.onclick = e => {
      const t = e.target;
      const chip = t.closest('[data-m]'); if (chip) { editMode = chip.dataset.m; modeCard(b); return; }
      const up = t.closest('[data-cu]'), dn = t.closest('[data-cd]');
      if (up || dn) {
        const c = (up || dn).dataset[up ? 'cu' : 'cd'], arr = order.slice(), i = arr.indexOf(c), j = i + (up ? -1 : 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
        save({ cards: arr.filter(x => m.cards.includes(x)) });
        return;
      }
      if (t.id === 'm-use') { SW.saveSettings({ mode: k }); SW.app.applyMode(); return; }
      if (t.id === 'm-reset') { save(JSON.parse(JSON.stringify(C.modes[k]))); ui.toast('Vorlage wiederhergestellt'); }
    };
    b.onchange = e => {
      const t = e.target;
      if (t.dataset.page) save({ pages: PAGES.map(p => p.id).filter(id => id === 'heute' || (id === t.dataset.page ? t.checked : m.pages.includes(id))) });
      if (t.dataset.card) save({ cards: order.filter(c => (c === t.dataset.card ? t.checked : m.cards.includes(c))) });
      if (t.dataset.sport) { const sp = wind.filter(w => (w === t.dataset.sport ? t.checked : m.sports.includes(w))); if (!sp.length) { ui.toast('Mindestens eine Sportart', 'warn'); modeCard(b); return; } save({ sports: sp.concat(m.sports.includes('welle') ? ['welle'] : []) }); }
      if (t.id === 'm-compact') { SW.saveSettings({ compact: t.checked }); SW.app.buildNav(); }
    };
  }

  // Profil teilen: Link (AirDrop, Nachricht), QR-Code, Datei; übernehmen aus Datei
  function profileCard(b) {
    const P = SW.profile, p = P.collect();
    b.innerHTML = `<p class="route-hint">Dein Profil: <b>${U.esc(P.summary(p))}</b>, dazu Modi, Schwellen, Anzeige und Timer. Ohne Konto und ohne Server: die Daten stecken im Link bzw. in der Datei.</p>
      ${P.isFileUrl() ? ui.note('Die App ist gerade als Datei geöffnet. Ein Link zeigt dann auf diesen Computer und funktioniert auf anderen Geräten nicht – zum Teilen die gehostete App (z. B. GitHub Pages) verwenden oder die Profildatei nehmen.', 'warn') : ''}
      <div class="row-btns" style="margin-top:10px">
        <button class="btn primary" type="button" data-p="share">Link teilen</button>
        <button class="btn" type="button" data-p="copy">Link kopieren</button>
        <button class="btn" type="button" data-p="qr">QR-Code zeigen</button>
        <button class="btn" type="button" data-p="file">Als Datei sichern</button>
        <label class="btn" for="prof-in">Datei laden<input id="prof-in" type="file" accept=".json,application/json" hidden></label></div>
      <p class="hint">Auf dem anderen Gerät den Link antippen (oder den QR-Code mit der Kamera scannen, oder die Datei laden). Die App fragt dann: zusammenführen oder ersetzen. Danach liegen die Daten fest auf jenem Gerät; spätere Änderungen werden nicht automatisch abgeglichen.</p>`;
    b.onclick = async e => {
      const t = e.target.closest('[data-p]'); if (!t) return;
      try {
        if (t.dataset.p === 'file') { P.saveFile(); ui.toast('Profildatei erstellt'); return; }
        const link = await P.link();
        if (t.dataset.p === 'share') {
          if (navigator.share) { try { await navigator.share({ title: 'SwissWind24-Profil', text: 'Mein SwissWind24-Profil: antippen zum Übernehmen', url: link }); } catch (err) { /* abgebrochen */ } }
          else { await navigator.clipboard.writeText(link); ui.toast('Teilen nicht verfügbar – Link kopiert'); }
        }
        if (t.dataset.p === 'copy') { await navigator.clipboard.writeText(link); ui.toast(`Link kopiert (${link.length} Zeichen)`); }
        if (t.dataset.p === 'qr') {
          let html;
          try { html = `<div class="qr-box">${P.qrSvg(link)}</div><p class="hint" style="display:block">Mit der Kamera des anderen iPads scannen und den Link öffnen. ${link.length} Zeichen.</p>`; }
          catch (err) { html = ui.note(`Das Profil ist zu gross für einen QR-Code (${link.length} Zeichen). Bitte «Link teilen» oder «Als Datei sichern» verwenden.`, 'warn'); }
          ui.sheet('Profil als QR-Code', U.el(`<div>${html}</div>`));
        }
      } catch (err) { ui.toast('Teilen nicht möglich: ' + err.message, 'bad'); }
    };
    b.querySelector('#prof-in').onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      try { SW.profile.askImport(await SW.profile.loadFile(f), 'Diese Datei'); } catch (err) { ui.toast(err.message, 'bad'); }
      e.target.value = '';
    };
  }

  function themeCard(b) {
    b.innerHTML = '';
    b.appendChild(ui.themePicker(() => themeCard(b)));                  // Dark Mode, Heller Modus, Nachtmodus
  }

  function spotsCard(b) {
    const s = SW.settings.spots;
    b.innerHTML = `<ul class="spot-list" data-noswipe>${s.map((x, k) => `<li class="spot-item" data-k="${k}">
        <span class="grip" aria-hidden="true">${ui.icon('grip')}</span>
        <span class="spot-n"><b>${U.esc(x.name)}</b><small>${(+x.lat).toFixed(3)}, ${(+x.lon).toFixed(3)}</small></span>
        <button class="icon-btn" type="button" data-a="up" aria-label="Nach oben" ${k === 0 ? 'disabled' : ''}>${ui.icon('up')}</button>
        <button class="icon-btn" type="button" data-a="down" aria-label="Nach unten" ${k === s.length - 1 ? 'disabled' : ''}>${ui.icon('down')}</button>
        <button class="icon-btn" type="button" data-a="del" aria-label="Löschen">${ui.icon('trash')}</button></li>`).join('')}</ul>
      <h3 class="sub-h">Eigenen Spot hinzufügen</h3>
      <form class="add-spot" data-noswipe>
        <label>Name<input name="name" required maxlength="40" placeholder="z. B. Brunnen Seepark"></label>
        <label>Breite<input name="lat" required inputmode="decimal" placeholder="46.995"></label>
        <label>Länge<input name="lon" required inputmode="decimal" placeholder="8.605"></label>
        <button class="btn primary" type="submit">Hinzufügen</button></form>
      <p class="hint">Oder auf der Seite «Spot» suchen und «Als Favorit» tippen.</p>`;
    const list = b.querySelector('.spot-list');
    const move = (from, to) => { const arr = SW.settings.spots.slice(); const [it] = arr.splice(from, 1); arr.splice(to, 0, it); SW.saveSettings({ spots: arr }); spotsCard(b); SW.app.refreshHeader(); };
    list.onclick = e => {
      const btn = e.target.closest('button'); if (!btn) return;
      const k = +btn.closest('li').dataset.k;
      if (btn.dataset.a === 'up') move(k, k - 1);
      if (btn.dataset.a === 'down') move(k, k + 1);
      if (btn.dataset.a === 'del') {
        if (SW.settings.spots.length <= 1) { ui.toast('Mindestens ein Spot muss bleiben', 'warn'); return; }
        const arr = SW.settings.spots.slice(); const [gone] = arr.splice(k, 1);
        SW.saveSettings({ spots: arr, spotId: SW.settings.spotId === gone.id ? arr[0].id : SW.settings.spotId });
        ui.toast(`${gone.name} entfernt`); spotsCard(b); SW.app.refreshHeader();
      }
    };
    // Ziehen per Touch/Maus am Griff
    list.addEventListener('pointerdown', e => {
      const grip = e.target.closest('.grip'); if (!grip) return;
      e.preventDefault();
      const li = grip.closest('li'), from = +li.dataset.k, items = U.$$('.spot-item', list);
      const startY = e.clientY, h = li.offsetHeight;
      li.classList.add('drag'); grip.setPointerCapture(e.pointerId);
      let to = from;
      const mv = ev => {
        const dy = ev.clientY - startY; li.style.transform = `translateY(${dy}px)`;
        to = U.clamp(from + Math.round(dy / h), 0, items.length - 1);
        items.forEach((it, k) => { if (it === li) return; let off = 0; if (from < to && k > from && k <= to) off = -h; if (from > to && k < from && k >= to) off = h; it.style.transform = off ? `translateY(${off}px)` : ''; });
      };
      const up = () => { grip.removeEventListener('pointermove', mv); grip.removeEventListener('pointerup', up); grip.removeEventListener('pointercancel', up); if (to !== from) move(from, to); else spotsCard(b); };
      grip.addEventListener('pointermove', mv); grip.addEventListener('pointerup', up); grip.addEventListener('pointercancel', up);
    });
    b.querySelector('form').onsubmit = e => {
      e.preventDefault();
      const f = new FormData(e.target), lat = parseFloat(String(f.get('lat')).replace(',', '.')), lon = parseFloat(String(f.get('lon')).replace(',', '.'));
      if (!(lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180)) { ui.toast('Koordinaten ungültig (Breite −90…90, Länge −180…180)', 'bad'); return; }
      const name = String(f.get('name')).trim().replace(/ß/g, 'ss');
      SW.saveSettings({ spots: SW.settings.spots.concat([{ id: 'u' + U.uid(), name, lat, lon, fav: true }]) });
      ui.toast(`${name} hinzugefügt`); spotsCard(b); SW.app.refreshHeader();
    };
  }

  function sportCard(b) {
    const S = SW.settings.sports;
    const F = [['min', 'ab'], ['idealLo', 'ideal von'], ['idealHi', 'ideal bis'], ['max', 'max'], ['gustMax', 'Böe max']];
    b.innerHTML = `<div class="table-wrap" data-noswipe><table class="data edit"><thead><tr><th>Sportart</th>${F.map(f => `<th>${f[1]}</th>`).join('')}</tr></thead><tbody>
      ${Object.keys(S).map(k => `<tr><th>${U.esc(S[k].label)} <small>${S[k].unit || 'kt'}</small></th>${F.map(f => S[k][f[0]] === undefined ? '<td>–</td>' : `<td><input type="number" inputmode="decimal" step="1" min="0" data-s="${k}" data-f="${f[0]}" value="${S[k][f[0]]}" aria-label="${U.esc(S[k].label)} ${f[1]}"></td>`).join('')}</tr>`).join('')}
      </tbody></table></div>
      <div class="row-btns"><button class="btn" type="button" id="sp-reset">Vorgaben wiederherstellen</button></div>
      <p class="hint">Hinweis «fahrbar» erscheint auf «Heute», wenn mindestens ${C.minWindowHours} zusammenhängende Stunden bei Tageslicht in den Bereich «ab» bis «max» fallen und die Böen unter «Böe max» bleiben. Die Flusswelle nutzt die Zonen aus der Konfiguration (${C.welle.low}/${C.welle.high} m³/s).</p>`;
    b.oninput = U.debounce(e => {
      const i = e.target; if (!i.dataset.s) return;
      const v = parseFloat(i.value); if (!isFinite(v)) return;
      const s = JSON.parse(JSON.stringify(SW.settings.sports)); s[i.dataset.s][i.dataset.f] = v;
      SW.saveSettings({ sports: s }); ui.toast('Schwelle gespeichert');
    }, 500);
    b.querySelector('#sp-reset').onclick = () => { SW.saveSettings({ sports: JSON.parse(JSON.stringify(C.sports)) }); sportCard(b); ui.toast('Vorgaben wiederhergestellt'); };
  }

  function dataCard(b) {
    b.innerHTML = `<div class="row-btns">
        <button class="btn" type="button" id="d-clear">Daten-Cache leeren</button>
        <button class="btn" type="button" id="d-sim">${SW.api.simulateError ? 'API-Fehler-Simulation AUS' : 'API-Fehler simulieren (Test)'}</button>
        <button class="btn" type="button" id="d-reset">Alle Einstellungen zurücksetzen</button></div>
      <dl class="info">
        <dt>Version</dt><dd>${U.esc(C.version)}</dd>
        <dt>Wetter</dt><dd>Open-Meteo.com (CC BY 4.0), Modelle: ${C.models.map(m => U.esc(m.label)).join(', ')}</dd>
        <dt>Abfluss & Pegel</dt><dd>BAFU Hydrologie via api.existenz.ch, Prognose GloFAS via Open-Meteo Flood API</dd>
        <dt>Karten</dt><dd>Windy.com (Embed), Leaflet (BSD-2)</dd>
        <dt>Uferlinien</dt><dd>Vierwaldstättersee und Zugersee © OpenStreetMap-Mitwirkende (ODbL), vereinfacht auf ~20 m</dd>
        <dt>QR-Code</dt><dd>qrcode-generator von Kazuhiko Arase (MIT)</dd>
        <dt>Schrift</dt><dd>Barlow Condensed, SIL Open Font License</dd>
        <dt>Cache</dt><dd>Daten ${C.cache.ttlMinutes} min frisch, offline bis ${C.cache.maxAgeDays} Tage gespeichert. Es wird nur die sichtbare Seite geladen.</dd>
        <dt>Rechtliches</dt><dd>Nicht-kommerzielle Privatanwendung von Philippe Becker. Alle Angaben sind Modellprognosen und Faustregeln ohne Gewähr – keine offizielle Warnung. Massgebend sind MeteoSchweiz und der Sturmwarndienst der Seen.</dd>
        <dt>Datenschutz</dt><dd>Kein Login, keine Analyse, keine Cookies. Einstellungen bleiben im Browser dieses Geräts. Abfragen gehen direkt an die genannten Dienste.</dd>
      </dl>`;
    b.querySelector('#d-clear').onclick = async () => { await SW.cache.clear(); ui.toast('Cache geleert'); };
    b.querySelector('#d-sim').onclick = () => { SW.api.simulateError = !SW.api.simulateError; ui.toast(SW.api.simulateError ? 'Simulation aktiv: alle Abfragen schlagen fehl, gespeicherte Daten erscheinen mit Hinweis' : 'Simulation aus'); dataCard(b); };
    b.querySelector('#d-reset').onclick = () => ui.confirm('Alles zurücksetzen?', 'Favoriten, Strecken, Routenarchiv und Einstellungen dieses Profils werden auf die Vorgaben gesetzt. Das lässt sich nicht rückgängig machen.', 'Zurücksetzen', () => { SW.resetSettings(); SW.app.applyTheme(); SW.app.refreshHeader(); ui.toast('Einstellungen zurückgesetzt'); SW.app.show('setup', true); });
  }
})();

/* ---- js/app.js ---- */
/* App-Start: Rahmen, Navigation, Router, Aktualisierung nur der sichtbaren Seite, Service Worker. */
(function () {
  const U = SW.util, C = SW.CONFIG, ui = SW.ui;
  const app = SW.app = {};
  let current = null, rendering = 0, lastMetas = [];

  /* ---------- Rahmen aufbauen ---------- */
  // Sichtbare Seiten = Seiten des aktiven Modus (Reihenfolge wie registriert); Setup ist immer erreichbar über das Zahnrad
  app.visible = () => { const ids = SW.mode().pages; const v = SW.pages.filter(p => ids.includes(p.id)); return v.length ? v : [SW.pages[0]]; };
  app.buildNav = function () {
    const vis = app.visible();
    const nav = U.$('#nav');
    nav.innerHTML = vis.map(p => `<button type="button" class="nav-btn" data-p="${p.id}" aria-label="${U.esc(p.label)}">${ui.icon(p.icon)}<span>${U.esc(p.label)}</span></button>`).join('');
    U.$('#dots').innerHTML = vis.length > 1 ? vis.map(p => `<button type="button" class="dot-btn" data-p="${p.id}" aria-label="Seite ${U.esc(p.label)}"><i></i></button>`).join('') : '';
    document.documentElement.classList.toggle('compact', !!SW.settings.compact);       // Kompaktansicht ohne Erklärtexte
    markNav();
  };
  function markNav() {
    U.$$('.nav-btn').forEach(b => { b.classList.toggle('on', b.dataset.p === current); b.setAttribute('aria-current', b.dataset.p === current ? 'page' : 'false'); });
    U.$$('.dot-btn').forEach(b => b.classList.toggle('on', b.dataset.p === current));
    U.$('#b-setup').classList.toggle('on', current === 'setup');
  }
  function shell() {
    U.$('#nav').onclick = e => { const b = e.target.closest('.nav-btn'); if (b) go(b.dataset.p); };
    U.$('#dots').onclick = e => { const b = e.target.closest('.dot-btn'); if (b) go(b.dataset.p); };
    app.buildNav();
    app.modelSheet = modelSheet;                                       // Modell wird selten gewechselt: Setup und Spot › Modelle
    U.$('#b-user').onclick = () => SW.users.choose(false);
    U.$('#b-spot').onclick = spotSheet;
    U.$('#b-mode').onclick = modeSheet;
    U.$('#b-setup').onclick = () => go('setup');
    U.$('#b-refresh').onclick = () => app.show(current, true, { force: true });
    U.$('#b-theme').onclick = () => { let sh; sh = ui.sheet('Lichtmodus', ui.themePicker(id => { sh.close(); ui.toast(ui.themeName(id)); })); };
    ui.enableSwipe(U.$('#main'), dir => {                               // Wischen wie bei Garmin: nächste/vorige Seite des Modus
      const vis = app.visible();
      const k = vis.findIndex(p => p.id === current);
      if (k < 0) { go(vis[0].id); return; }
      go(vis[(k + dir + vis.length) % vis.length].id);
    });
  }
  function go(id) { if (location.hash !== '#' + id) location.hash = id; else app.show(id); }

  app.applyTheme = function () {
    document.documentElement.dataset.theme = SW.settings.theme;
    const tb = U.$('#b-theme'); if (tb) { tb.setAttribute('aria-label', 'Lichtmodus: ' + ui.themeName(SW.settings.theme)); tb.title = ui.themeName(SW.settings.theme); }
    const col = { dark: '#07090c', night: '#000000', sun: '#ffffff' }[SW.settings.theme];
    U.$$('meta[name="theme-color"]').forEach(m => m.setAttribute('content', col));
  };
  app.refreshHeader = function () {
    const s = SW.currentSpot();
    U.$('#b-mode span').textContent = SW.mode().label;
    U.$('#b-spot span').textContent = s.name;
    U.$('#b-spot').hidden = SW.settings.mode === 'welle';             // Flusswelle: immer Bremgarten, kein Spot-Wechsel
    const ub = U.$('#b-user'), nm = SW.users.label();                  // Profil-Kürzel, z. B. «PB»
    ub.textContent = nm === 'Gast' ? 'G' : nm.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    ub.title = 'Profil: ' + nm; ub.setAttribute('aria-label', 'Profil: ' + nm + ' – wechseln');
  };

  /* ---------- Seite anzeigen ---------- */
  app.show = async function (id, force, opts) {
    opts = opts || {};
    if (id === 'modelle' || id === 'feierabend') { SW.saveSettings({ spotTab: id }); id = 'spot'; }   // alte Lesezeichen: jetzt Unterreiter
    const grp = SW.groupOf && SW.groupOf(id);                         // Unterseite (z. B. #band) → Sammelseite mit diesem Unterreiter
    if (grp) { SW.saveSettings({ [SW.GROUPS[grp].key]: id }); id = grp; force = true; if (location.hash !== '#' + grp) history.replaceState(null, '', '#' + grp); }
    let page = SW.pages.find(p => p.id === id && (id === 'setup' || app.visible().includes(p)));
    if (!page) { page = app.visible()[0]; if (location.hash !== '#' + page.id) history.replaceState(null, '', '#' + page.id); } // ausgeblendete Seite → erste sichtbare
    if (page.id === current && !force) return;
    const prev = SW.pages.find(p => p.id === current);
    if (prev && prev.leave && prev.id !== page.id) prev.leave();
    const keepScroll = page.id === current;
    const y = keepScroll ? window.scrollY : 0;
    current = page.id; SW.saveSettings({ page: page.id });
    markNav();
    const onBtn = U.$(`.nav-btn[data-p="${page.id}"]`); if (onBtn && onBtn.scrollIntoView && !keepScroll) onBtn.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    document.title = `${page.label} · SwissWind24`;
    const my = ++rendering;
    const root = U.$('#page');
    const fresh = document.createElement('div'); fresh.className = 'page page-' + page.id;
    SW.api.collector = []; SW.api.preferCache = !force && !opts.network; SW.api.force = !!opts.force;
    const pending = []; const origFill = ui.fill;
    ui.fill = (card, loader) => { const pr = origFill(card, loader); pending.push(pr); return pr; }; // Ladevorgänge dieser Seite mitzählen
    try { await page.render(fresh); } catch (e) { console.error(e); fresh.innerHTML = ui.note('Seite konnte nicht aufgebaut werden: ' + U.esc(e.message), 'bad'); }
    ui.fill = origFill;
    root.replaceChildren(fresh);
    if (keepScroll) window.scrollTo(0, y); else window.scrollTo(0, 0);
    await Promise.allSettled(pending);
    SW.api.force = false;
    if (my !== rendering) return;
    lastMetas = SW.api.collector.slice();
    status();
    // Erster Aufbau zeigte gespeicherte Daten? Dann still im Hintergrund frisch laden.
    const ttl = C.cache.ttlMinutes * 60000;
    if (SW.api.preferCache && navigator.onLine !== false && lastMetas.some(m => Date.now() - m.fetchedAt > ttl)) {
      SW.api.preferCache = false;
      setTimeout(() => { if (my === rendering) app.show(page.id, true, { network: true }); }, 50);
    }
  };

  /* ---------- Status oben: offline, Datenalter ---------- */
  function status() {
    const el = U.$('#status');
    const offline = navigator.onLine === false;
    const oldest = lastMetas.length ? Math.min.apply(null, lastMetas.map(m => m.fetchedAt)) : null;
    const old = oldest && Date.now() - oldest > C.cache.staleWarnMinutes * 60000;
    const err = lastMetas.some(m => m.error);
    const failed = U.$$('#page .is-error').length;                      // Karten ganz ohne Daten
    el.className = 'status ' + (offline || err || failed ? 'bad' : old ? 'warn' : '');
    el.textContent = failed && !offline ? `${failed} ${failed === 1 ? 'Karte' : 'Karten'} ohne Daten` : offline ? `Offline · Stand ${oldest ? U.dateTime(oldest / 1000) : '–'}` : err ? `Fehler · zeige Stand ${U.dateTime(oldest / 1000)}`
      : oldest ? (old ? `Daten älter als 1 h · ${U.hhmm(oldest / 1000)}` : `Stand ${U.hhmm(oldest / 1000)}`) : '';
  }
  // Regelmässig prüfen, ob die sichtbare Seite veraltet ist (nie unsichtbare Seiten laden)
  function tick() {
    if (document.hidden || !current) return;
    const ttl = C.cache.ttlMinutes * 60000;
    if (lastMetas.some(m => Date.now() - m.fetchedAt > ttl) && navigator.onLine !== false && !U.$('.sheet-wrap')) app.show(current, true, { network: true });
    else status();
  }

  /* ---------- Sheets: Modell und Spot ---------- */
  function modelSheet() {
    const el = U.el(`<div class="model-list">${C.models.map(m => `<button type="button" class="model-row ${m.id === SW.settings.model ? 'on' : ''}" data-id="${m.id}">
        <b>${U.esc(m.label)}</b><span>${U.esc(m.info)} · ~${m.days < 2 ? Math.round(m.days * 24) + ' h' : m.days + ' Tage'}${m.has.p850 ? '' : ' · ohne 850 hPa'}${m.minutely15 ? ' · 15 min' : ''}</span></button>`).join('')}
      <p class="hint">Fehlt dem gewählten Modell eine Grösse oder ein Zeitraum, füllt ${U.esc(SW.api.modelInfo(C.fallbackModel).label)} die Lücke (bei ICON: ${U.esc(SW.api.modelInfo(C.fallbackModelAlt).label)}). Jede Karte zeigt, welches Modell wirklich verwendet wurde.</p></div>`);
    const sh = ui.sheet('Wettermodell', el);
    el.onclick = e => { const b = e.target.closest('.model-row'); if (!b) return; SW.saveSettings({ model: b.dataset.id }); app.refreshHeader(); sh.close(); ui.toast('Modell: ' + SW.api.modelInfo(b.dataset.id).label); app.show(current, true); };   // Setup-Seite zeigt das neue Modell
  }
  function modeSheet() {
    const el = U.el(`<div class="model-list">${Object.keys(SW.settings.modes).map(k => { const m = SW.settings.modes[k];
      return `<button type="button" class="model-row ${k === SW.settings.mode ? 'on' : ''}" data-id="${k}"><b>${U.esc(m.label)}</b><span>${m.pages.map(id => (SW.pages.find(p => p.id === id) || {}).label).filter(Boolean).join(' · ')}</span></button>`; }).join('')}
      <p class="hint">Welche Seiten und Karten ein Modus zeigt, stellst du unter Setup ein.</p></div>`);
    const sh = ui.sheet('Modus', el);
    el.onclick = e => { const b = e.target.closest('.model-row'); if (!b) return; SW.saveSettings({ mode: b.dataset.id }); sh.close(); app.applyMode(); ui.toast('Modus: ' + SW.mode().label); };
  }
  app.applyMode = function () { app.buildNav(); app.refreshHeader(); app.show(current, true); };
  function spotSheet() {
    const el = U.el('<div class="spot-sheet"></div>');
    let sh;
    el.appendChild(SW.searchBox(r => { SW.useSearchResult(r); app.refreshHeader(); sh.close(); app.show(current, true); }));
    el.insertAdjacentHTML('beforeend', `<h3 class="sub-h">Favoriten</h3><div class="model-list">${SW.settings.spots.map(s => `<button type="button" class="model-row ${s.id === SW.settings.spotId ? 'on' : ''}" data-id="${U.esc(s.id)}"><b>${U.esc(s.name)}</b><span>${(+s.lat).toFixed(3)}, ${(+s.lon).toFixed(3)}</span></button>`).join('')}</div>`);
    sh = ui.sheet('Spot wählen', el);
    el.addEventListener('click', e => { const b = e.target.closest('.model-row'); if (!b) return; SW.saveSettings({ spotId: b.dataset.id }); app.refreshHeader(); sh.close(); app.show(current, true); });
    setTimeout(() => { const i = el.querySelector('input'); if (i && window.matchMedia('(pointer:fine)').matches) i.focus(); }, 50);
  }

  /* ---------- Start ---------- */
  function start() {
    app.applyTheme();
    shell();
    app.refreshHeader();
    SW.cache.prune(C.cache.maxAgeDays * 86400000);
    SW.onSettings(p => { if (p.theme !== undefined && current) setTimeout(() => app.show(current, true), 0); });   // Lichtmodus gewechselt: Karten neu einfärben
    window.addEventListener('hashchange', () => { if (location.hash.startsWith('#profil=')) { SW.profile.checkHash(); return; } app.show(location.hash.slice(1)); });
    window.addEventListener('online', () => { ui.toast('Wieder online'); tick(); });
    window.addEventListener('offline', () => { ui.toast('Offline – zeige gespeicherte Daten', 'warn'); status(); });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });
    setInterval(tick, C.cache.refreshCheckSeconds * 1000);
    const hasProfile = location.hash.startsWith('#profil=');          // Profil-Link: erst Seite zeigen, dann Übernahme fragen
    const first = hasProfile ? 'heute' : (location.hash.slice(1) || SW.settings.page || 'heute');
    app.show(SW.pages.some(p => p.id === first) ? first : 'heute');
    if (hasProfile) setTimeout(() => SW.profile.checkHash(), 300);
    else if (!SW.userId && SW.users.list().length) setTimeout(() => SW.users.choose(true), 200);   // erster Start: wer nutzt die App?
    else if (!SW.users.introSeen()) setTimeout(() => SW.users.intro(), 400);                     // danach einmal die drei wichtigsten Hinweise
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {      // per Doppelklick (file://) kein Service Worker möglich
      navigator.serviceWorker.register('sw.js').then(reg => {
        reg.addEventListener('updatefound', () => {
          const w = reg.installing;
          w && w.addEventListener('statechange', () => { if (w.state === 'installed' && navigator.serviceWorker.controller) ui.toast('Neue Version geladen – beim nächsten Start aktiv'); });
        });
      }).catch(e => console.warn('Service Worker nicht registriert', e));
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
