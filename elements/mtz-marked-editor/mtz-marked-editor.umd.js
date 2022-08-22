!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js"),require("@polymer/iron-form-element-behavior/iron-form-element-behavior.js"),require("@polymer/iron-validatable-behavior/iron-validatable-behavior.js"),require("@polymer/polymer/lib/legacy/class.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js","@polymer/iron-form-element-behavior/iron-form-element-behavior.js","@polymer/iron-validatable-behavior/iron-validatable-behavior.js","@polymer/polymer/lib/legacy/class.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).MtzMarkedEditor={},e.polymerElement_js,e.flattenedNodesObserver_js,e.ironFormElementBehavior_js,e.ironValidatableBehavior_js,e.class_js)}(this,(function(e,t,r,o,n,i){"use strict";function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f(e);if(t){var n=f(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return b(this,r)}}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var o=h(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}},v.apply(this,arguments)}var m,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var o,n,i,l=d(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=l.call(this)).addEventListener("register-control",e.__bindControlToEditor.bind(y(e))),e}return o=u,n=[{key:"connectedCallback",value:function(){v(f(u.prototype),"connectedCallback",this).call(this),this.__textarea=this.queryDistributedElements('[slot="textarea"]')[0]}},{key:"queryDistributedElements",value:function(e){for(var t,o=r.FlattenedNodesObserver.getFlattenedNodes(this),n=[],i=0,l=o.length;i<l&&(t=o[i]);i++)t.nodeType===Node.ELEMENT_NODE&&_(t,e)&&n.push(t);return n}},{key:"disconnectedCallback",value:function(){this.removeEventListener("register-control",this.__bindControlToEditor),v(f(u.prototype),"disconnectedCallback",this).call(this)}},{key:"getTextarea",value:function(){return this.__textarea}},{key:"getLines",value:function(){return this.getContent().split(/(?=\n|\r\n)$/gm)}},{key:"getContent",value:function(){return"undefined"!==c(this.getTextarea())?this.getTextarea().value:""}},{key:"setContent",value:function(e){this.getTextarea().value=e}},{key:"getSelection",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getTextarea(),t=e.selectionStart,r=e.selectionEnd;return{start:t,end:r,length:r-t,text:e.value.substring(t,r)}}},{key:"setSelection",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.getTextarea();r.selectionStart=e,r.selectionEnd=t}},{key:"replaceSelection",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getTextarea(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.getSelection(),o=t.value;t.value="".concat(o.substr(0,r.start)).concat(e).concat(o.substr(r.end,o.length))}},{key:"__bindControlToEditor",value:function(e){e.stopPropagation(),e.target.__editor=this}}],i=[{key:"template",get:function(){return t.html(m||(e=['\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <slot name="controls"></slot> <slot name="textarea"></slot>\n      <slot name="footer"></slot>\n    '],r||(r=e.slice(0)),m=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))));var e,r}},{key:"tag",get:function(){return"mtz-marked-editor"}},{key:"properties",get:function(){return a(a({},v(f(u),"properties",this)),{},{autofocus:Boolean,readonly:Boolean,textareaSelector:{type:String,value:"textarea"},__textarea:Object})}}],n&&s(o.prototype,n),i&&s(o,i),Object.defineProperty(o,"prototype",{writable:!1}),u}(i.mixinBehaviors([o.IronFormElementBehavior,n.IronValidatableBehavior],t.PolymerElement));window.customElements.define(g.tag,g);var j=Element.prototype,O=j.matches||j.matchesSelector||j.mozMatchesSelector||j.msMatchesSelector||j.oMatchesSelector||j.webkitMatchesSelector,_=function(e,t){return O.call(e,t)};e.MtzMarkedEditor=g,e.matchesSelector=_,Object.defineProperty(e,"__esModule",{value:!0})}));
