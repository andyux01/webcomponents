!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e=e||self).LrndesignAvatar={},e.litElement_js,e.simpleColors_js)}(this,function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t,r){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(){var e=p(['\n      <paper-avatar\n        label="','"\n        src="','"\n        ?two-chars="','"\n        style="background-color:',' !important;"\n        ?jdenticon="','"\n      ></paper-avatar>\n    ']);return y=function(){return e},e}function b(){var e=p(["\n        :host {\n          display: block;\n        }\n        paper-avatar {\n          color: var(--simple-colors-default-theme-grey-1);\n          --paper-avatar-width: var(--lrndesign-avatar-width, 40px);\n          --paper-avatar-height: var(--lrndesign-avatar-height, 40px);\n          --paper-avatar-text-color: var(--simple-colors-default-theme-grey-1);\n        }\n      "]);return b=function(){return e},e}var h=function(e){function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),e=u(this,a(n).call(this)),import("@lrnwebcomponents/paper-avatar/paper-avatar.js"),e.label="avatar",e.twoChars=!1,e.color="blue",e.jdenticon=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,r.SimpleColors),o(n,null,[{key:"styles",get:function(){return[].concat(f(s(a(n),"styles",this)),[t.css(b())])}}]),o(n,[{key:"render",value:function(){return t.html(y(),this.label,this.src,this.twoChars,this.hexColor,this.jdenticon)}},{key:"_getAccentColor",value:function(e){e=e.replace("-text",""),this.accentColor&&"grey"!==this.accentColor||!this.colors[e]||(this.accentColor=e)}},{key:"_getHexColor",value:function(e){var t=e.replace("-text",""),n=new r.SimpleColors;return n.colors[t]?n.colors[t][6]:"#000000"}},{key:"updated",value:function(e){var t=this;s(a(n.prototype),"updated",this)&&s(a(n.prototype),"updated",this).call(this,e),e.forEach(function(e,r){"color"==r&&t._getAccentColor(t[r]),"accentColor"==r&&(t.hexColor=t._getHexColor(t[r]))})}}],[{key:"tag",get:function(){return"lrndesign-avatar"}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},s(a(n),"properties",this),{hexColor:{type:String},label:{type:String},src:{type:String},twoChars:{type:Boolean,attribute:"two-chars"},color:{type:String,reflect:!0},jdenticon:{type:Boolean}})}}]),n}();window.customElements.define(h.tag,h),e.LrndesignAvatar=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-avatar.umd.js.map
