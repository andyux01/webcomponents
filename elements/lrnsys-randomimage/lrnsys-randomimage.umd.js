!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/random-image/random-image.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/random-image/random-image.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LrnsysRandomimage={},e.polymerElement_js)}(this,(function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}var a,f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(s,e);var o,u,f,l=c(s);function s(){return n(this,s),l.apply(this,arguments)}return o=s,f=[{key:"template",get:function(){return t.html(a||(e=['\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <div id="list">\n        <random-image images-list$="{{images}}"></random-image>\n      </div>\n      <button raised on-click="reload">Reload</button>\n    '],n||(n=e.slice(0)),a=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"tag",get:function(){return"lrnsys-randomimage"}},{key:"properties",get:function(){return{images:{type:Object,notify:!0,value:function(){return[]}}}}}],(u=[{key:"reload",value:function(e){this.shadowRoot.querySelector("#list").innerHTML=this.shadowRoot.querySelector("#list").innerHTML}}])&&r(o.prototype,u),f&&r(o,f),Object.defineProperty(o,"prototype",{writable:!1}),s}(t.PolymerElement);window.customElements.define(f.tag,f),e.LrnsysRandomimage=f,Object.defineProperty(e,"__esModule",{value:!0})}));
