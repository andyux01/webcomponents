!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SecureRequest={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function i(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=n(e);if(t){var u=n(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return i(this,r)}}window.SecureRequest=window.SecureRequest||{},window.SecureRequest.xhr={setCookies:function(e,t){this._eraseCookie("securerequest-endpoint"),this._eraseCookie("securerequest-csrftoken"),this._createCookie("securerequest-endpoint",e,30,e),this._createCookie("securerequest-csrftoken",t,30,e)},generateUrl:function(e){var t=this.getEndPoint(),r=this.getCsrfToken();return t&&r?t+e+"?token="+r:null},getEndPoint:function(){return this._readCookie("securerequest-endpoint")},getCsrfToken:function(){return this._readCookie("securerequest-csrftoken")},_createCookie:function(e,t,r,n){var o="";if(r){var i=new Date;i.setTime(i.getTime()+24*r*60*60*1e3),o="; expires="+i.toUTCString()}document.cookie=e+"="+t+o+"; path="+n},_readCookie:function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null},_eraseCookie:function(e){this._createCookie(e,"",-1)}},e.SecureRequestXhr=function(e){return function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(f,e);var n,i,c,s=u(f);function f(){return t(this,f),s.apply(this,arguments)}return n=f,(i=[{key:"setCookies",value:function(e,t){this._eraseCookie("securerequest-endpoint"),this._eraseCookie("securerequest-csrftoken"),this._createCookie("securerequest-endpoint",e,30,e),this._createCookie("securerequest-csrftoken",t,30,e)}},{key:"generateUrl",value:function(e){var t=this.getEndPoint(),r=this.getCsrfToken();return t&&r?t+e+"?token="+r:null}},{key:"getEndPoint",value:function(){return this._readCookie("securerequest-endpoint")}},{key:"getCsrfToken",value:function(){return this._readCookie("securerequest-csrftoken")}},{key:"_createCookie",value:function(e,t,r,n){var o="";if(r){var i=new Date;i.setTime(i.getTime()+24*r*60*60*1e3),o="; expires="+i.toUTCString()}document.cookie=e+"="+t+o+"; path="+n}},{key:"_readCookie",value:function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}},{key:"_eraseCookie",value:function(e){this._createCookie(e,"",-1)}}])&&r(n.prototype,i),c&&r(n,c),Object.defineProperty(n,"prototype",{writable:!1}),f}(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
