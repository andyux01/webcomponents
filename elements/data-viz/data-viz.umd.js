!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/chartist-render/chartist-render.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/chartist-render/chartist-render.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).DataViz={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p,d;window.DataViz=window.DataViz||{},window.DataViz.requestAvailability=function(){return window.DataViz.instance||(window.DataViz.instance=document.createElement("data-viz"),document.body.appendChild(window.DataViz.instance)),window.DataViz.instance};var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(h,e);var a,s,b,y=u(h);function h(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),y.call(this)}return a=h,b=[{key:"styles",get:function(){return[t.css(d||(d=f(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n      "])))]}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},l(i(h),"properties",this))}},{key:"tag",get:function(){return"data-viz"}}],(s=[{key:"render",value:function(){return t.html(p||(p=f(['\n\n<chartist-render\nid="barchart"\ntype="bar"\nscale="ct-major-twelfth"\nchart-title="Quiz Distribution"\nchart-desc="A bar graph of quizzes completed by student"\n>\n</chartist-render>'])))}},{key:"connectedCallback",value:function(){l(i(h.prototype),"connectedCallback",this).call(this),window.addEventListener("pouch-db-show-data",this.showDataFunction.bind(this))}},{key:"showDataFunction",value:function(e){var t=e.detail,n={labels:t.labels,series:t.series};this.shadowRoot.querySelector("#barchart").data=n}},{key:"disconnectedCallback",value:function(){window.removeEventListener("pouch-db-show-data",this.showDataFunction.bind(this)),l(i(h.prototype),"disconnectedCallback",this).call(this)}},{key:"hideDataViz",value:function(e){}},{key:"showDataViz",value:function(e){}}])&&r(a.prototype,s),b&&r(a,b),Object.defineProperty(a,"prototype",{writable:!1}),h}(t.LitElement);window.customElements.define(b.tag,b),e.DataViz=b,Object.defineProperty(e,"__esModule",{value:!0})}));
