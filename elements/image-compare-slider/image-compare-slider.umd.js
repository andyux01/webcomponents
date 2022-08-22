!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/a11y-compare-image/a11y-compare-image.js"),require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("@lrnwebcomponents/i18n-manager/lib/I18NMixin.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/a11y-compare-image/a11y-compare-image.js","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","@lrnwebcomponents/i18n-manager/lib/I18NMixin.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ImageCompareSlider={},null,e.lit,e.schemaBehaviors_js,e.IntersectionObserverMixin_js,e.I18NMixin_js,e.simpleColors_js)}(this,(function(e,t,n,r,o,i,c){"use strict";function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j,O,v,w,P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,r,o,i=d(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this)).opacity=!1,e.position=50,e.accentColor="blue",e.t={slideToCompareImages:"Slide to compare images"},e.registerLocalization({context:m(e),basePath:"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("image-compare-slider.umd.js",document.baseURI).href,locales:["es"]}),e}return t=c,o=[{key:"styles",get:function(){return[n.css(w||(w=g(["\n        :host {\n          display: inline-flex;\n        }\n        :host([hidden]) {\n          display: none !important;\n        }\n      "])))]}},{key:"tag",get:function(){return"image-compare-slider"}},{key:"properties",get:function(){return a(a({},h(u(c),"properties",this)),{},{bottomAlt:{type:String,attribute:"bottom-alt"},bottomDescriptionId:{type:String,attribute:"bottom-description-id"},bottomSrc:{type:String,attribute:"bottom-src"},opacity:{type:Boolean},position:{type:Number},title:{type:String},topAlt:{type:String,attribute:"top-alt"},topDescriptionId:{type:String,attribute:"top-description-id"},topSrc:{type:String,attribute:"top-src"}})}},{key:"haxProperties",get:function(){return new URL("./lib/image-compare-slider.haxProperties.json","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("image-compare-slider.umd.js",document.baseURI).href).href}}],(r=[{key:"render",value:function(){return n.html(j||(j=g(["",""])),this.elementVisible?n.html(O||(O=g(['\n          <a11y-compare-image\n            label="','"\n            accent-color="','"\n            ?dark="','"\n            ?opacity="','"\n            position="','"\n          >\n            <div slot="heading">\n              ','\n              <slot name="heading"></slot>\n            </div>\n            <div slot="description"><slot name="description"></slot></div>\n            <img\n              slot="bottom"\n              src="','"\n              alt="','"\n              aria-describedby="','"\n            />\n            <img\n              slot="top"\n              src="','"\n              alt="','"\n              aria-describedby="','"\n            />\n          </a11y-compare-image>\n        '])),this.t.slideToCompareImages,this.accentColor,this.dark,this.opacity,this.position,this.title?n.html(v||(v=g([" <h2>","</h2> "])),this.title):"",this.bottomSrc,this.bottomAlt,this.bottomDescriptionId||"description",this.topSrc,this.topAlt,this.topDescriptionId||"description"):"")}},{key:"updated",value:function(e){var t=this;h(u(c.prototype),"updated",this)&&h(u(c.prototype),"updated",this).call(this,e),e.forEach((function(e,n){"elementVisible"===n&&t[n]}))}}])&&l(t.prototype,r),o&&l(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(i.I18NMixin(o.IntersectionObserverMixin(r.SchemaBehaviors(c.SimpleColors))));window.customElements.define(P.tag,P),e.ImageCompareSlider=P,Object.defineProperty(e,"__esModule",{value:!0})}));
