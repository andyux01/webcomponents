!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e=e||self).MomentElement={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o,i,a=r(e);if(t){var c=r(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return o=this,!(i=n)||"object"!=typeof i&&"function"!=typeof i?u(o):i}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function l(){var e,t,n=(e=[" "," "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(f,t.LitElement);var n=a(f);function f(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=n.call(this)).datetime=new Date,e.inputFormat="",e.outputFormat="",e.from="",e.to="";var t=e.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("moment-element.umd.js",document.baseURI).href)),o="".concat(t,"lib/moment/moment.js");return window.addEventListener("es-bridge-moment-loaded",e._momentLoaded.bind(u(e))),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("moment",o),e}return o(f,[{key:"render",value:function(){return t.html(l(),this.output)}},{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}}],[{key:"tag",get:function(){return"moment-element"}},{key:"properties",get:function(){return{datetime:{type:String},inputFormat:{type:String,attribute:"input-format"},outputFormat:{type:String,attribute:"output-format"},from:{type:String},to:{type:String},output:{type:String},libraryLoaded:{type:Boolean}}}}]),o(f,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){if(["output"].includes(n)){var o="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(o,{detail:{value:t[n]}}))}["datetime","inputFormat","outputFormat","from","to","libraryLoaded"].includes(n)&&(t.output=t._computeOutput(t.datetime,t.inputFormat,t.outputFormat,t.from,t.to,t.libraryLoaded))})}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-moment-loaded",this._momentLoaded.bind(this)),c(r(f.prototype),"disconnectedCallback",this).call(this)}},{key:"_momentLoaded",value:function(){this.libraryLoaded=!0}},{key:"_computeOutput",value:function(e,t,n,o,r,i){if(i){var u=t?moment(e,t):moment(e);return n?u=u.format(n):o?u="now"===o?u.fromNow():u.from(moment(o)):r&&(u="now"===r?u.toNow():u.to(moment(r))),u}}}]),f}();window.customElements.define(f.tag,f),e.MomentElement=f,Object.defineProperty(e,"__esModule",{value:!0})});
