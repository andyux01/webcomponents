!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],t):t((e=e||self).CodeSample={},e.polymerElement_js,e.HAXWiring_js)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(){var e,t,n=(e=["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var a=function(e){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c(this,o(a).apply(this,arguments))}var s,f,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,t.PolymerElement),s=a,p=[{key:"template",get:function(){return t.html(u())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Code sample",description:"A wrapper element for highlight.js",icon:"icons:android",color:"green",groups:["Sample"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[],advanced:[]}}}},{key:"properties",get:function(){return{}}},{key:"tag",get:function(){return"code-sample"}}],(f=[{key:"connectedCallback",value:function(){l(o(a.prototype),"connectedCallback",this).call(this),this.HAXWiring=new n.HAXWiring,this.HAXWiring.setup(a.haxProperties,a.tag,this)}}])&&r(s.prototype,f),p&&r(s,p),a}();window.customElements.define(a.tag,a),e.CodeSample=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=code-sample.umd.js.map
