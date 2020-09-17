!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/iron-icon/iron-icon.js"),require("@polymer/iron-icons/iron-icons.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@polymer/paper-button/paper-button.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/materializecss-styles/lib/colors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/iron-icon/iron-icon.js","@polymer/iron-icons/iron-icons.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@polymer/paper-button/paper-button.js","lit-element/lit-element.js","@lrnwebcomponents/materializecss-styles/lib/colors.js"],e):e((t=t||self).LrnButton={},null,null,null,null,t.litElement_js,t.colors_js)}(this,function(t,e,n,r,o,i,s){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function g(t,e,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function v(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function m(){var t=v(["\n:host {\n  display: block;\n  --lrnsys-button-height: 48px;\n}\n\n:host(.center) {\n  text-align: center;\n}\n\na {\n  text-decoration: none;\n  display: block;\n  color: #000000;\n}\n\npaper-button {\n  transition: .3s;\n  margin: 0;\n  max-width: 50%;\n  height: inherit;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: unset;\n}\n\npaper-button iron-icon {\n  height: var(--lrnsys-button-height);\n  margin: 0 12px;\n}\n\npaper-button div.inner {\n  height: var(--lrnsys-button-height);\n  line-height: var(--lrnsys-button-height);\n  padding: 0 12px;\n}\n\npaper-button span.label {\n  height: var(--lrnsys-button-height);\n  line-height: var(--lrnsys-button-height);\n}\n\n.no-margin {\n  margin: 0 !important;\n}\n\n.no-right-padding {\n  padding-right: 0 !important;\n}\n\n.no-left-padding {\n  padding-left: 0 !important;\n}\n\n.center {\n  text-align: center;\n  margin: 0 auto;\n}\n      "]);return m=function(){return t},t}function O(){var t=v(['\n        <span class="label">\n        ',"\n        </span>"]);return O=function(){return t},t}function j(){var t=v(['\n      <iron-icon icon="','" id="icon" class="','"></iron-icon>\n      ']);return j=function(){return t},t}function w(){var t=v(['\n\n<a tabindex="-1" id="lrnsys-button-link" href="','" data-prefetch-hover="','" target="','">\n<paper-button id="button" raised="','" class="'," "," ",'" ?disabled="','">\n    <div class="inner ','">\n      ',"\n      ",'\n      <slot></slot>\n    </div>\n  </paper-button>\n</a>\n<simple-tooltip for="lrnsys-button-link" animation-delay="0">',"</simple-tooltip>"]);return w=function(){return t},t}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(n,i.LitElement);var e=y(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=e.call(this)).href="#",t.label="",t.target="",t.disabled=!1,t.focusState=!1,setTimeout(function(){t.addEventListener("mousedown",t.tapEventOn),t.addEventListener("mouseover",t.tapEventOn),t.addEventListener("mouseout",t.tapEventOff),t.addEventListener("focusin",t.tapEventOn),t.addEventListener("focusout",t.tapEventOff)},0),t}return l(n,[{key:"render",value:function(){return i.html(w(),this.showHref,this.prefetch,this.target,this.raised,this.class,this.color,this.textColor,this.disabled,this.innerClass,this.icon?i.html(j(),this.icon,this.iconClass):"",this.label?i.html(O(),this.label):"",this.alt)}}],[{key:"styles",get:function(){return[i.css(m())]}},{key:"properties",get:function(){return p(p({},g(h(n),"properties",this)),{},{href:{type:String},showHref:{type:String,attribute:"show-href"},raised:{type:Boolean},label:{type:String},target:{type:String},icon:{type:String},hoverClass:{type:String,attribute:"hover-class"},iconClass:{type:String,attribute:"icon-class"},innerClass:{type:String,attribute:"inner-class"},color:{type:String},textColor:{type:String,attribute:"text-color"},prefetch:{type:String},alt:{type:String},disabled:{type:Boolean},focusState:{type:Boolean,attribute:"focus-state"}})}},{key:"tag",get:function(){return"lrn-button"}}]),l(n,[{key:"firstUpdated",value:function(){this.shadowRoot.querySelector("#button").addEventListener("focused-changed",this.focusToggle),this.disabled||(this.showHref=this.href)}},{key:"tapEventOn",value:function(t){var e=this;"undefined"===a(this.hoverClass)||this.disabled||this.hoverClass.split(" ").forEach(function(t,n){""!=t&&(e.shadowRoot.querySelector("#button").classList.add(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.add(t))})}},{key:"tapEventOff",value:function(t){var e=this;"undefined"===a(this.hoverClass)||this.disabled||this.hoverClass.split(" ").forEach(function(t,n){""!=t&&(e.shadowRoot.querySelector("#button").classList.remove(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.remove(t))})}},{key:"focusToggle",value:function(t){var e=this;(this.dispatchEvent(new CustomEvent("focus-changed",{bubbles:!0,composed:!0,detail:{focus:this.focusState}})),"undefined"===a(this.hoverClass)||this.disabled)||this.hoverClass.split(" ").forEach(function(t,n){""!=t&&(e.focusState?(e.shadowRoot.querySelector("#button").classList.add(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.add(t)):(e.shadowRoot.querySelector("#button").classList.remove(t),-1!=t.indexOf("-")&&e.shadowRoot.querySelector("#icon").classList.remove(t)))});this.focusState=!this.focusState}}]),n}();window.customElements.define(S.tag,S),t.LrnButton=S,Object.defineProperty(t,"__esModule",{value:!0})});
