!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TheyLive={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y,b,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(d,e);var n,i,l,s=f(d);function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),s.call(this)}return n=d,l=[{key:"styles",get:function(){return[t.css(b||(b=p(["\n        :host {\n          display: inline-block;\n        }\n        .truth {\n          font-size: 5.5vw;\n          word-break: break-all;\n          line-height: 5.5vw;\n          position: absolute;\n          margin: 0 auto;\n          text-align: center;\n          display: flex;\n          visibility: hidden;\n          opacity: 0;\n          transition: 0.3s all linear;\n          z-index: 2;\n          text-align: center;\n        }\n        :host(:focus),\n        :host(:hover) {\n          background-color: grey;\n        }\n        :host(:focus) .content ::slotted(*),\n        :host(:hover) .content ::slotted(*) {\n          visibility: hidden;\n        }\n        :host(:focus) .truth,\n        :host(:hover) .truth {\n          visibility: visible;\n          opacity: 1;\n        }\n      "])))]}},{key:"properties",get:function(){return r(r({},a(c(d),"properties",this)),{},{truth:{type:String}})}},{key:"tag",get:function(){return"they-live"}}],(i=[{key:"render",value:function(){return t.html(y||(y=p(['\n\n<div class="content">\n  <div class="truth">',"</div>\n  <slot></slot>\n</div>"])),this.truth)}},{key:"connectedCallback",value:function(){a(c(d.prototype),"connectedCallback",this).call(this)}},{key:"disconnectedCallback",value:function(){a(c(d.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(e){this.setAttribute("tabindex","0"),e.forEach((function(e,t){}))}},{key:"updated",value:function(e){e.forEach((function(e,t){}))}}])&&o(n.prototype,i),l&&o(n,l),Object.defineProperty(n,"prototype",{writable:!1}),d}(t.LitElement);customElements.define("they-live",d),e.TheyLive=d,Object.defineProperty(e,"__esModule",{value:!0})}));
