define(["react","antd","react-dom"],function(t,e,r){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/jedi/",r(r.s=29)}([function(e,r){e.exports=t},function(t,r){t.exports=e},function(t,e,r){"use strict";var n;r.d(e,"a",function(){return u}),function(t){t.RequireJS="requirejs",t.SystemJS="SystemJS"}(n||(n={}));var o=function t(e){return e&&t(e.default)||e},i=function(){return function(t){return t}},u=function(t){switch(t||("function"==typeof requirejs?t=n.RequireJS:window.System&&"function"==typeof window.System.import&&(t=n.SystemJS)),t){case n.RequireJS:return define("react-hot-loader",function(){return{hot:i}}),{load:function(t){return new Promise(function(e,r){return requirejs(t,function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e(r.map(o))},r)})}};case n.SystemJS:return window.System.register("react-hot-loader",[],function(t){return t({default:{hot:i},hot:i}),{}}),{load:function(t){return Promise.all(t.map(function(t){return window.System.import(t).then(o)}))}};default:throw new ReferenceError("No compatible loader found, you should use requirejs or SystemJS")}}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,r){t.exports=r(20)},function(t,e,r){"use strict";(function(t){r.d(e,"a",function(){return T});var n=r(4),o=r.n(n),i=r(8),u=r.n(i),c=r(9),a=r.n(c),f=r(10),s=r.n(f),l=r(11),p=r.n(l),h=r(12),y=r.n(h),d=r(13),m=r.n(d),v=r(14),g=r.n(v),w=r(15),b=r.n(w),x=r(3),S=r.n(x),j=r(16),E=r.n(j),O=r(0),L=r.n(O),_=r(2),T=function(e){function r(){var t,e;p()(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e=m()(this,(t=g()(r)).call.apply(t,[this].concat(o))),E()(S()(S()(e)),"state",{}),e}var n;return b()(r,e),y()(r,[{key:"componentDidMount",value:(n=s()(o.a.mark(function e(){var r,n,i,c,f,s,l,p,h,y,d,m,v;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.props,n=r.appName,i=r.loaderType,c=r.version,f=Object(_.a)(i),s=n,n.startsWith("/")||(s=t.env.CDN_APP_PREFIX||"//1stg.github.io/modules/@1stg/jedi-",n.includes("/")?(l=n.split("/"),p=a()(l),h=p[0],y=p.slice(1),s+=h,c&&(s+="/"+c),s+="/"+y.join("/")):(s+=n,c&&(s+="/"+c),s+="/index"),s+=".js"),e.next=6,f.load([s]);case 6:d=e.sent,m=u()(d,1),v=m[0],this.setState({App:v});case 10:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var t=this.props.loading,e=this.state.App;if(!e)return t||"loading...";var r=this.props.props;return L.a.createElement(e,r)}}]),r}(L.a.PureComponent)}).call(this,r(19))},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,r){var n=r(6),o=r(22),i=r(7);t.exports=function(t,e){return n(t)||o(t,e)||i()}},function(t,e,r){var n=r(6),o=r(23),i=r(7);t.exports=function(t){return n(t)||o(t)||i()}},function(t,e){function r(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var u=t.apply(e,n);function c(t){r(u,o,i,c,a,"next",t)}function a(t){r(u,o,i,c,a,"throw",t)}c(void 0)})}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){var n=r(24),o=r(3);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e,r){var n=r(25);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e){t.exports=r},,function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var a,f=[],s=!1,l=-1;function p(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&h())}function h(){if(!s){var t=c(p);s=!0;for(var e=f.length;e;){for(a=f,f=[];++l<e;)a&&a[l].run();l=-1,e=f.length}a=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];f.push(new y(t,e)),1!==f.length||s||c(h)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(21),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag",f="object"==typeof t,s=e.regeneratorRuntime;if(s)f&&(t.exports=s);else{(s=e.regeneratorRuntime=f?t.exports:{}).wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",d={},m={};m[u]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==n&&o.call(g,u)&&(m=g);var w=E.prototype=S.prototype=Object.create(m);j.prototype=w.constructor=E,E.constructor=j,E[a]=j.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(w),t},s.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[c]=function(){return this},s.AsyncIterator=L,s.async=function(t,e,r,n){var o=new L(b(t,e,r,n));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(w),w[a]="Generator",w[u]=function(){return this},w.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=k,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],c=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var a=o.call(u,"catchLoc"),f=o.call(u,"finallyLoc");if(a&&f){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof S?e:S,i=Object.create(o.prototype),u=new R(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var c=_(u,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var a=x(t,e,r);if("normal"===a.type){if(n=r.done?y:p,a.arg===d)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n=y,r.method="throw",r.arg=a.arg)}}}(t,r,u),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function S(){}function j(){}function E(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,u){var c=x(t[r],t,n);if("throw"!==c.type){var a=c.arg,f=a.value;return f&&"object"==typeof f&&o.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(f).then(function(t){a.value=t,i(a)},function(t){return e("throw",t,i,u)})}u(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function k(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e){t.exports=function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?t.exports=n=function(t){return r(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},n(e)}t.exports=n},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},,,,function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(2),r(1)),i=r(0),u=r.n(i),c=r(17);r.n(c).a.render(u.a.createElement(n.a,{appName:"app",loading:u.a.createElement(o.Card,{loading:!0})}),document.getElementById("app"))}])});