!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LrndesignAbbreviation={},null,e.lit,e.schemaBehaviors_js)}(this,(function(e,t,n,r){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y,h,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(s,e);var t,r,o,a=u(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),e=a.call(this),setTimeout((function(){}),0),e}return t=s,o=[{key:"styles",get:function(){return[n.css(h||(h=d(["\n        :host {\n          display: inline-block;\n        }\n        abbr {\n          transition: 0.6s all ease;\n          padding: 2px 4px;\n          font-style: italic;\n          background-color: var(--abbreviation-bg, #f9f9f9);\n          text-underline-position: under;\n          text-decoration: underline double;\n          cursor: help;\n          outline: var(--abbreviation-selection, #ffff33);\n        }\n        abbr:focus,\n        abbr:active,\n        abbr:hover {\n          text-decoration: none;\n          background-color: var(--abbreviation-selection, #ffff33);\n        }\n        abbr::-moz-selection,\n        abbr::selection {\n          text-decoration: none;\n          background-color: var(--abbreviation-selection, #ffff33);\n        }\n        simple-tooltip {\n          --simple-tooltip-background: #000000;\n          --simple-tooltip-opacity: 1;\n          --simple-tooltip-text-color: #ffffff;\n          --simple-tooltip-delay-in: 0;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrndesign-abbreviation"}},{key:"properties",get:function(){return i(i({},b(l(s),"properties",this)),{},{abbr:{type:String},phrase:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Abbreviation",description:"Simple abbreviation with tooltip of full word",icon:"editor:title",color:"grey",groups:["Instructional","Term"],handles:[{type:"inline",text:"text"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"abbr",title:"Abbreviation",description:"Abbreviation word",inputMethod:"textfield",icon:"editor:title"},{property:"phrase",title:"Phrase",description:"The phrase / original words",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}}],(r=[{key:"render",value:function(){return n.html(y||(y=d(['\n      <abbr tabindex="0" title="','" id="abbr">','</abbr>\n      <simple-tooltip for="abbr" position="top" offset="2" animation-delay="300"\n        >',"</simple-tooltip\n      >\n    "])),this.phrase,this.abbr,this.phrase)}}])&&c(t.prototype,r),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.SchemaBehaviors(n.LitElement));window.customElements.define(v.tag,v),e.LrndesignAbbreviation=v,Object.defineProperty(e,"__esModule",{value:!0})}));
