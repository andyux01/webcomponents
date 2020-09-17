!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/elements/dom-repeat.js"),require("@polymer/iron-meta/iron-meta.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/marked-element/marked-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/elements/dom-repeat.js","@polymer/iron-meta/iron-meta.js","@polymer/iron-icon/iron-icon.js","@polymer/marked-element/marked-element.js"],e):e((n=n||self).IconsetDemo={},n.polymerElement_js,null,n.ironMeta_js)}(this,function(n,e,t,o){"use strict";function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach(function(e){c(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n,e){return(u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function a(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function f(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var t,o=p(n);if(e){var i=p(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return a(this,t)}}function y(n,e,t){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,e,t){var o=function(n,e){for(;!Object.prototype.hasOwnProperty.call(n,e)&&null!==(n=p(n)););return n}(n,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(t):i.value}})(n,e,t||n)}function d(){var n,e,t=(n=['\n<style>\n:host {\n  display: block;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  margin-bottom: 40px;\n  padding: 20px 40px;\n}\n\n:host .iconset:not(:first-of-type) {\n  border-top: 1px solid #ddd;\n}\n\n:host ul {\n  list-style-type: none;\n  padding: 0;\n}\n\n:host li {\n  display: inline-block;\n  width: 160px;\n  margin: 16px 8px;\n  text-align: center;\n  font-size: 10px;\n}\n\n:host iron-icon {\n  font-size: 14px;\n  color: rgb(97,97,97);\n  display: inline-block;\n}\n\n:host .iconset:nth-of-type(9n+2) iron-icon {\n  color: #BE3300;\n}\n\n:host .iconset:nth-of-type(9n+3) iron-icon {\n  color: #0000B5;\n}\n\n:host .iconset:nth-of-type(9n+4) iron-icon {\n  color: #750075;\n}\n\n:host .iconset:nth-of-type(9n+5) iron-icon {\n  color: #AA5D00;\n}\n\n:host .iconset:nth-of-type(9n+6) iron-icon {\n  color: #DB0A5B;\n}\n\n:host .iconset:nth-of-type(9n+7) iron-icon {\n  color: #005500;\n}\n\n:host .iconset:nth-of-type(9n+8) iron-icon {\n  color: #CF000F;\n}\n\n:host .iconset:nth-of-type(9n) iron-icon {\n  color: #005f8b;\n}\n        </style>\n<template is="dom-repeat" items="[[__iconList]]" as="iconset">\n  <div class="iconset">\n      <p><strong>[[iconset.name]]</strong></p>\n      <ul>\n          <template is="dom-repeat" items="[[iconset.icons]]" as="icon">\n              <li>\n              <div id="icon">\n                  <iron-icon icon$="[[icon]]"></iron-icon>\n                  <div id="icon-text">[[icon]]</div>\n              </div>\n              </li>\n          </template>\n      </ul>\n  </div>\n</template>'],(e=['\n<style>\n:host {\n  display: block;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  margin-bottom: 40px;\n  padding: 20px 40px;\n}\n\n:host .iconset:not(:first-of-type) {\n  border-top: 1px solid #ddd;\n}\n\n:host ul {\n  list-style-type: none;\n  padding: 0;\n}\n\n:host li {\n  display: inline-block;\n  width: 160px;\n  margin: 16px 8px;\n  text-align: center;\n  font-size: 10px;\n}\n\n:host iron-icon {\n  font-size: 14px;\n  color: rgb(97,97,97);\n  display: inline-block;\n}\n\n:host .iconset:nth-of-type(9n+2) iron-icon {\n  color: #BE3300;\n}\n\n:host .iconset:nth-of-type(9n+3) iron-icon {\n  color: #0000B5;\n}\n\n:host .iconset:nth-of-type(9n+4) iron-icon {\n  color: #750075;\n}\n\n:host .iconset:nth-of-type(9n+5) iron-icon {\n  color: #AA5D00;\n}\n\n:host .iconset:nth-of-type(9n+6) iron-icon {\n  color: #DB0A5B;\n}\n\n:host .iconset:nth-of-type(9n+7) iron-icon {\n  color: #005500;\n}\n\n:host .iconset:nth-of-type(9n+8) iron-icon {\n  color: #CF000F;\n}\n\n:host .iconset:nth-of-type(9n) iron-icon {\n  color: #005f8b;\n}\n        </style>\n<template is="dom-repeat" items="[[__iconList]]" as="iconset">\n  <div class="iconset">\n      <p><strong>[[iconset.name]]</strong></p>\n      <ul>\n          <template is="dom-repeat" items="[[iconset.icons]]" as="icon">\n              <li>\n              <div id="icon">\n                  <iron-icon icon\\$="[[icon]]"></iron-icon>\n                  <div id="icon-text">[[icon]]</div>\n              </div>\n              </li>\n          </template>\n      </ul>\n  </div>\n</template>'])||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return d=function(){return t},t}var m=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}(m,e.PolymerElement);var t,c,s,a=f(m);function m(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),a.apply(this,arguments)}return t=m,s=[{key:"template",get:function(){return e.html(d())}},{key:"properties",get:function(){return l(l({},y(p(m),"properties",this)),{},{__iconList:{name:"__iconList",type:Array,value:[]},includeSets:{name:"includeSets",type:String,value:null},excludeSets:{name:"excludeSets",type:String,value:null}})}},{key:"tag",get:function(){return"iconset-demo"}}],(c=[{key:"connectedCallback",value:function(){y(p(m.prototype),"connectedCallback",this).call(this);var n=new o.IronMeta({type:"iconset"}),e=[],t=this;if("undefined"!==i(n)&&n.list&&n.list.length){var r=0;n.list.forEach(function(n){var o=n.name;t._hideIconset(o)||(e.push({name:o,icons:[]}),n.getIconNames().forEach(function(n){e[r].icons.push(n)}),r++)})}this.set("__iconList",[]),this.set("__iconList",e)}},{key:"_hideIconset",value:function(n){var e=null!==this.includeSets?this.includeSets.split(/ /):[],t=0===e.length||e.includes(n),o=null!==this.excludeSets?this.excludeSets.split(/ /):[],i=o.length.length>0&&o.includes(n);return!t||i}}])&&r(t.prototype,c),s&&r(t,s),m}();window.customElements.define(m.tag,m),n.IconsetDemo=m,Object.defineProperty(n,"__esModule",{value:!0})});
