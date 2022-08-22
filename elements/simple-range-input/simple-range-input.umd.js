!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleRangeInput={},e.lit,e.simpleColors_js)}(this,(function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function u(e,n){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},u(e,n)}function l(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=o(e);if(n){var i=o(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return l(this,t)}}function c(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=c(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(arguments.length<3?e:t):i.value}},d.apply(this,arguments)}function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var f,h,v=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&u(e,n)}(c,e);var t,r,p,l=s(c);function c(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(e=l.call(this)).dragging=!1,e.label="Range input",e.min=0,e.max=100,e.step=1,e.value=0,e.immediateValue=0,e.disabled=!1,e.addEventListener("mousedown",(function(){e.dragging=!0})),e.addEventListener("mouseup",(function(){e.dragging=!1,e.value=e.immediateValue})),e.addEventListener("keydown",(function(){e.dragging=!0,setTimeout((function(){e.value=e.immediateValue}),0)})),e.addEventListener("keyup",(function(){e.dragging=!1,e.value=e.immediateValue})),e}return t=c,p=[{key:"properties",get:function(){return i(i({},d(o(c),"properties",this)),{},{dragging:{type:Boolean,reflect:!0},immediateValue:{type:Number,attribute:"immediate-value"},value:{type:Number,reflect:!0},min:{type:Number},step:{type:Number},max:{type:Number},label:{type:String},disabled:{type:Boolean,reflect:!0}})}},{key:"tag",get:function(){return"simple-range-input"}},{key:"styles",get:function(){return[].concat(m(d(o(c),"styles",this)),[n.css(h||(h=g(['\n        :host {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          min-height: var(--simple-range-input-track-height, 10px);\n          height: var(--simple-range-input-pin-height, 20px);\n        }\n        :host([disabled]) {\n          pointer-events: none;\n        }\n        input[type="range"] {\n          -webkit-appearance: none;\n          margin: 0;\n          padding: 0;\n          width: 100%;\n        }\n        input[type="range"]:focus {\n          outline: none;\n        }\n        input[type="range"]::-webkit-slider-runnable-track {\n          width: 100%;\n          height: var(--simple-range-input-track-height, 10px);\n          cursor: pointer;\n          box-shadow: var(\n            --simple-range-input-box-shadow,\n            0px 0px 0px #000000,\n            0px 0px 0px #0d0d0d\n          );\n          background: var(\n            --simple-range-input-bg,\n            var(--simple-colors-default-theme-accent-2, black)\n          );\n          border-radius: var(--simple-range-input-track-border-radius, 2px);\n          border: var(--simple-range-input-border, 0px solid #000000);\n        }\n        input[type="range"]::-webkit-slider-thumb {\n          box-shadow: var(\n            --simple-range-input-box-shadow,\n            0px 0px 0px #000000,\n            0px 0px 0px #0d0d0d\n          );\n          border: var(--simple-range-input-border, 0px solid #000000);\n          height: var(--simple-range-input-pin-height, 20px);\n          width: var(\n            --simple-range-input-pin-width,\n            var(--simple-range-input-pin-height, 20px)\n          );\n          border-radius: var(--simple-range-input-border-radius, 50%);\n          background: var(\n            --simple-range-input-color,\n            var(--simple-colors-default-theme-accent-8, grey)\n          );\n          cursor: pointer;\n          margin: calc(\n              0.5 *\n                (\n                  var(--simple-range-input-track-height, 10px) -\n                    var(--simple-range-input-pin-height, 20px)\n                )\n            )\n            0;\n          -webkit-appearance: none;\n        }\n        input[type="range"]:focus::-webkit-slider-runnable-track {\n          background: var(\n            --simple-range-input-bg,\n            var(--simple-colors-default-theme-accent-2, black)\n          );\n        }\n        input[type="range"]::-moz-range-track {\n          width: 100%;\n          height: var(--simple-range-input-track-height, 10px);\n          cursor: pointer;\n          box-shadow: var(\n            --simple-range-input-box-shadow,\n            0px 0px 0px #000000,\n            0px 0px 0px #0d0d0d\n          );\n          background: var(\n            --simple-range-input-bg,\n            var(--simple-colors-default-theme-accent-2, black)\n          );\n          border-radius: var(--simple-range-input-track-border-radius, 2px);\n          border: var(--simple-range-input-border, 0px solid #000000);\n        }\n        input[type="range"]::-moz-range-thumb {\n          box-shadow: var(\n            --simple-range-input-box-shadow,\n            0px 0px 0px #000000,\n            0px 0px 0px #0d0d0d\n          );\n          border: var(--simple-range-input-border, 0px solid #000000);\n          height: var(--simple-range-input-pin-height, 20px);\n          width: var(\n            --simple-range-input-pin-width,\n            var(--simple-range-input-pin-height, 20px)\n          );\n          border-radius: var(--simple-range-input-border-radius, 50%);\n          background: var(\n            --simple-range-input-color,\n            var(--simple-colors-default-theme-accent-8, grey)\n          );\n          cursor: pointer;\n          margin: calc(\n              0.5 *\n                (\n                  var(--simple-range-input-track-height, 10px) -\n                    var(--simple-range-input-pin-height, 20px)\n                )\n            )\n            0;\n        }\n        input[type="range"]::-ms-track {\n          width: 100%;\n          height: var(--simple-range-input-track-height, 10px);\n          cursor: pointer;\n          background: transparent;\n          border-color: transparent;\n          border-width: var(--simple-range-input-pin-height, 20px) 0;\n          color: transparent;\n        }\n        input[type="range"]::-ms-fill-lower {\n          background: var(\n            --simple-range-input-bg,\n            var(--simple-colors-default-theme-accent-2, black)\n          );\n          border: var(--simple-range-input-border, 0px solid #000000);\n          border-radius: var(--simple-range-input-track-border-radius, 2px);\n          box-shadow: var(\n            --simple-range-input-box-shadow,\n            0px 0px 0px #000000,\n            0px 0px 0px #0d0d0d\n          );\n        }\n        input[type="range"]::-ms-fill-upper {\n          background: var(\n            --simple-range-input-bg,\n            var(--simple-colors-default-theme-accent-2, black)\n          );\n          border: var(--simple-range-input-border, 0px solid #000000);\n          border-radius: var(--simple-range-input-track-border-radius, 2px);\n          box-shadow: var(\n            --simple-range-input-box-shadow,\n            0px 0px 0px #000000,\n            0px 0px 0px #0d0d0d\n          );\n        }\n        input[type="range"]::-ms-thumb {\n          box-shadow: var(\n            --simple-range-input-box-shadow,\n            0px 0px 0px #000000,\n            0px 0px 0px #0d0d0d\n          );\n          border: var(--simple-range-input-border, 0px solid #000000);\n          height: var(--simple-range-input-pin-height, 20px);\n          width: var(\n            --simple-range-input-pin-width,\n            var(--simple-range-input-pin-height, 20px)\n          );\n          border-radius: var(--simple-range-input-border-radius, 50%);\n          background: var(\n            --simple-range-input-color,\n            var(--simple-colors-default-theme-accent-8, grey)\n          );\n          cursor: pointer;\n          margin: calc(\n              0.5 *\n                (\n                  var(--simple-range-input-track-height, 10px) -\n                    var(--simple-range-input-pin-height, 20px)\n                )\n            )\n            0;\n        }\n        input[type="range"]:focus::-ms-fill-lower {\n          background: var(\n            --simple-range-input-bg,\n            var(--simple-colors-default-theme-accent-2, black)\n          );\n        }\n        input[type="range"]:focus::-ms-fill-upper {\n          background: var(\n            --simple-range-input-bg,\n            var(--simple-colors-default-theme-accent-2, black)\n          );\n        }\n        #label {\n          position: absolute;\n          left: -10000px;\n          top: auto;\n          width: 1px;\n          height: 1px;\n          overflow: hidden;\n        }\n      '])))])}}],(r=[{key:"render",value:function(){return n.html(f||(f=g(['<input\n        @input="','"\n        @changed="','"\n        ?disabled="','"\n        type="range"\n        min="','"\n        step="','"\n        max="','"\n        value="','"\n        aria-labelledby="label"\n        title="','"\n      /><label id="label">',"</label>"])),this._inputChanged,this._valueChanged,this.disabled,this.min,this.step,this.max,this.value,this.label,this.label)}},{key:"_inputChanged",value:function(e){this.immediateValue=e.target.value}},{key:"_valueChanged",value:function(e){this.value=e.target.value}},{key:"firstUpdated",value:function(){var e=this;d(o(c.prototype),"firstUpdated",this).call(this),setTimeout((function(){e.__ready=!0}),0)}},{key:"updated",value:function(e){var n=this;d(o(c.prototype),"updated",this)&&d(o(c.prototype),"updated",this).call(this,e),this.shadowRoot&&this.__ready&&e.forEach((function(e,t){"immediateValue"===t&&(n.dragging?n.dispatchEvent(new CustomEvent("immediate-value-changed",{detail:{value:n.immediateValue}})):n.value=n.immediateValue),"value"===t&&n.dispatchEvent(new CustomEvent("value-changed",{detail:{value:n.value}}))}))}}])&&a(t.prototype,r),p&&a(t,p),Object.defineProperty(t,"prototype",{writable:!1}),c}(t.SimpleColors);customElements.define(v.tag,v),e.SimpleRangeInput=v,Object.defineProperty(e,"__esModule",{value:!0})}));
