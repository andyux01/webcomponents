!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/utils/lib/remoteLinkBehavior.js"),require("@lrnwebcomponents/utils/lib/activeStateBehavior.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/utils/lib/remoteLinkBehavior.js","@lrnwebcomponents/utils/lib/activeStateBehavior.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleCta={},e.lit,e.remoteLinkBehavior_js,e.activeStateBehavior_js,e.simpleColors_js)}(this,(function(e,t,n,r,o){"use strict";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function p(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g,v,k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(c,e);var n,r,o,i=f(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this)).link="#",e.title=null,e.accentColor="green",e.querySelector("a")&&(e.link=e.querySelector("a").getAttribute("href"),e.title=e.querySelector("a").innerText,e.innerHTML=null),e}return n=c,o=[{key:"styles",get:function(){return[].concat(b(h(s(c),"styles",this)),[t.css(v||(v=y(["\n:host {\n  display: inline-block;\n  --simple-cta-color: var(--simple-colors-default-theme-accent-1,white);\n  --simple-cta-outline: var(--simple-colors-default-theme-accent-12,black);\n  --simple-cta-bg-color-is-user-selected: var(--simple-colors-default-theme-accent-10, darkgreen);\n  --simple-cta-bg-color: var(--simple-colors-default-theme-accent-7, green);\n  margin: 60px 0 0;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([contenteditable]) a {\n  pointer-events: none;\n}\n\n:host([is-user-selected]) a {\n  background-color: var(--simple-cta-bg-color-is-user-selected);\n  outline: 1px solid var(--simple-cta-outline);\n}\n\na {\n  display: block;\n  color: var(--simple-cta-color);\n  background-color: var(--simple-cta-bg-color);\n  transition: background .3s linear,border .3s linear,border-radius .3s linear,box-shadow .3s linear;\n  text-decoration: none;\n  font-size: 1em;\n  text-transform: uppercase;\n  border-radius: 100px 100px 100px 100px;\n  box-shadow: 0 6px 26px 0 rgba(0,0,0,.16);\n  padding: 16px 40px;\n  font-family: Sans-serif;\n  font-weight: 500;\n}\n\na span {\n  display: flex;\n  justify-content: center;\n}\n      "])))])}},{key:"haxProperties",get:function(){return{type:"element",canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Call to action",description:"A simple button with a link to take action.",icon:"image:crop-16-9",color:"orange",groups:["Marketing","Content"],handles:[{type:"link",source:"link",title:"title"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"Enter title for stop-note.",inputMethod:"textfield",required:!0},{property:"link",title:"Link",description:"Enter a link to any resource",inputMethod:"haxupload",required:!0},{property:"accentColor",title:"Accent Color",description:"An optional accent color.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Enable Dark Theme",inputMethod:"boolean",icon:"icons:invert-colors"}],advanced:[]},demoSchema:[{tag:"simple-cta",properties:{title:"Click to learn more",link:"https://haxtheweb.org/"},content:""}]}}},{key:"properties",get:function(){return a(a({},h(s(c),"properties",this)),{},{link:{type:String},title:{type:String},editMode:{type:Boolean}})}},{key:"tag",get:function(){return"simple-cta"}}],(r=[{key:"render",value:function(){return t.html(g||(g=y(['\n\n<a href="','" role="button" part="simple-cta-link" @click="','" ?contenteditable="','">\n    <span><span id="title">',"</span><slot></slot></span>\n</a>"])),this.link,this._clickCard,this.editMode,this.title)}},{key:"haxHooks",value:function(){return{editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged"}}},{key:"haxeditModeChanged",value:function(e){this.editMode=e}},{key:"_clickCard",value:function(e){this.editMode&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())}},{key:"haxactiveElementChanged",value:function(e,t){return this.alignState(),this.editMode=t,!1}},{key:"alignState",value:function(){this.title=this.shadowRoot.querySelector("#title").innerText}},{key:"firstUpdated",value:function(e){h(s(c.prototype),"firstUpdated",this)&&h(s(c.prototype),"firstUpdated",this).call(this,e),this.remoteLinkTarget=this.shadowRoot.querySelector("a")}},{key:"updated",value:function(e){var t=this;h(s(c.prototype),"updated",this)&&h(s(c.prototype),"updated",this).call(this,e),e.forEach((function(e,n){"link"==n&&(t.remoteLinkURL=t[n])}))}}])&&l(n.prototype,r),o&&l(n,o),Object.defineProperty(n,"prototype",{writable:!1}),c}(r.activeStateBehavior(n.remoteLinkBehavior(o.SimpleColors)));customElements.define(k.tag,k),e.SimpleCta=k,Object.defineProperty(e,"__esModule",{value:!0})}));
