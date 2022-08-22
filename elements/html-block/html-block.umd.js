!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).HtmlBlock={})}(this,(function(t){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return c=i()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},c.apply(null,arguments)}function u(t){var e="function"==typeof Map?new Map:void 0;return u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return c(t,arguments,r(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o(i,t)},u(t)}function l(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}
/**
   * Copyright 2019 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */
var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(h,t);var c,u,s,a,f,p=(c=h,u=i(),function(){var t,e=r(c);if(u){var n=r(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function h(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(t=p.call(this)).tag=h.tag,t}return s=h,f=[{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Html block",description:"A basic HTML block that provides HAXschema wiring",icon:"hax:html-code",color:"red",groups:["Block"],handles:[{type:"html",content:"slot"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{slot:"",title:"HTML",description:"HTML code you want to present in content",inputMethod:"code-editor"}],advanced:[]}}}},{key:"tag",get:function(){return"html-block"}},{key:"observedAttributes",get:function(){return["allowscript"]}}],(a=[{key:"html",get:function(){return"\n<style>\n\n        </style>\n<slot></slot>"}},{key:"connectedCallback",value:function(){this.allowscript=!1,this.__ignoreChange=!1,this.style.display="block",this.__observer=new MutationObserver(this.render.bind(this)),this.__observer.observe(this,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}},{key:"render",value:function(){this.__ignoreChange?this.__ignoreChange=!1:null!=this.allowscript&&this.allowscript&&"undefined"!==e(this.allowscript)||this.__sanitizeHTML()}},{key:"allowscript",get:function(){return this.getAttribute("allowscript")},set:function(t){t?this.setAttribute("allowscript","allowscript"):this.removeAttribute("allowscript")}},{key:"attributeChangedCallback",value:function(t,n,r){"allowscript"===t&&(null!=r&&r&&"undefined"!==e(r)?this.__rawHTML&&(this.__ignoreChange=!0,this.innerHTML=this.__rawHTML):this.__sanitizeHTML())}},{key:"__sanitizeHTML",value:function(){this.__pen||(this.__pen=document.createElement("div")),this.__pen.innerHTML=this.innerHTML,this.__rawHTML=this.__pen.cloneNode(!0).innerHTML,"function"==typeof this.innerHTML&&(this.innerHTML=this.innerHTML.replace(/<script[\s\S]*?>/gi,"&lt;script&gt;"),this.innerHTML=this.innerHTML.replace(/<\/script>/gi,"&lt;/script&gt;"))}}])&&n(s.prototype,a),f&&n(s,f),Object.defineProperty(s,"prototype",{writable:!1}),h}(u(HTMLElement));window.customElements.define(s.tag,s),t.HtmlBlock=s,Object.defineProperty(t,"__esModule",{value:!0})}));
