!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/simple-popover/simple-popover.js"),require("@lrnwebcomponents/lrndesign-imagemap/lib/lrndesign-imagemap-hotspot.js"),require("@lrnwebcomponents/relative-heading/relative-heading.js"),require("lit")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-popover/simple-popover.js","@lrnwebcomponents/lrndesign-imagemap/lib/lrndesign-imagemap-hotspot.js","@lrnwebcomponents/relative-heading/relative-heading.js","lit"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).LrndesignImagemap={},null,null,null,t.lit)}(this,(function(t,e,n,o,i){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function a(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return a(this,n)}}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=c(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},u.apply(this,arguments)}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var h,f,v,g,y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(c,t);var e,n,o,a=p(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),a.call(this)}return e=c,n=[{key:"render",value:function(){return i.html(h||(h=d(['\n      <figure id="figure">\n        <figcaption>\n          <relative-heading\n            disable-link\n            id="heading"\n            parent="','"\n          >\n            ','\n          </relative-heading>\n          <div id="desc"><slot name="desc"></slot></div>\n          <slot name="source" hidden></slot>\n          <div id="buttons"></div>\n        </figcaption>\n        <slot id="svg" name="svg"></slot>\n        <simple-popover\n          auto\n          ?hidden="','"\n          position="','"\n          .for="','"\n        >\n          <relative-heading\n            disable-link\n            class="sub-heading"\n            parent="heading"\n            id="subheading-','"\n          >\n            <h2>','</h2>\n          </relative-heading>\n          <slot id="details" name="details"></slot>\n        </simple-popover>\n      </figure>\n      <slot></slot>\n    '])),this.parent||this.subtopicOf,this.label?i.html(f||(f=d([" <h1>","</h1> "])),this.label):i.html(v||(v=d([' <slot name="heading"></slot> ']))),!this.__activeHotspot,this.__activeHotspot?this.__activeHotspot.position:"bottom",this.__activeHotspot?this.__activeHotspot.id:void 0,this.__activeHotspot?this.__activeHotspot.id:void 0,this.__activeHotspot?this.__activeHotspot.label:"")}},{key:"firstUpdated",value:function(t){u(s(c.prototype),"firstUpdated",this)&&u(s(c.prototype),"firstUpdated",this).call(this,t),console.log(this.querySelector("[slot=src]")?this.querySelector("[slot=src]"):this.src),this._fetchSvg(this.querySelector("[slot=src]")?this.querySelector("[slot=src]"):this.src)}},{key:"_fetchSvg",value:function(t){var e=this;fetch(t).then((function(t){return t.text()})).then((function(t){return e._getSVGHandler(t)}))}},{key:"_getSVGHandler",value:function(t){var e=this,n=document.createElement("div"),o=[];n.innerHTML=t;var i=n.querySelector("svg");i.slot="svg",this.prepend(i),console.log(this.childNodes),i.setAttribute("aria-labelledBy",this._getInfoNode(i,"title")),i.setAttribute("aria-describedBy",this._getInfoNode(i)),this.hotspotDetails=[],this.querySelectorAll("lrndesign-imagemap-hotspot").forEach((function(t){var n={id:t.hotspotId,print:t,hotspot:i.querySelector("#".concat(t.hotspotId)),label:t.label,position:t.position||"bottom",details:document.createElement("div")};n.hotspot.classList.add("hotspot"),n.hotspot.setAttribute("role","button"),n.hotspot.setAttribute("controls","figure"),n.hotspot.addEventListener("click",(function(t){return e.openHotspot(n)})),t.childNodes.forEach((function(t){n.details.appendChild(t.cloneNode(!0))})),n.details.slot="details",e.append(n.details),e.hotspotDetails.push(n),o.push(t.hotspotId)})),this.hotspotDetails.forEach((function(e){e.print.loadSvg(t,o)}))}},{key:"_getInfoNode",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc",n="title"===e?"heading":e,o=t.querySelector(e),i=this.shadowRoot.querySelector("#".concat(n));return o||(o=document.createElement(e),t.prepend(o),i&&""!=i.innerHTML&&(o.innerHTML,i.html)),this._getId(o)}},{key:"_getId",value:function(t){var e=t?t.getAttribute("id"):void 0;return e||(e="ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1)),t.setAttribute("id",e)),e}},{key:"openHotspot",value:function(t){var e=this;this.__activeHotspot=void 0,this.hotspotDetails.forEach((function(n){n.id===t.id?(n.hotspot.classList.add("selected"),n.details.style.display="block",e.__activeHotspot=n):(n.hotspot.classList.remove("selected"),n.details.style.display="none")}))}},{key:"closeHotspot",value:function(){this.resetHotspots(),this.__activeHotspot.focus()}},{key:"resetHotspots",value:function(){for(var t=this.querySelectorAll('.hotspot[role="button"]'),e=0;e<t.length;e++)t[e].classList.remove("selected")}}],o=[{key:"styles",get:function(){return[i.css(g||(g=d(['\n        :host {\n          display: block;\n        }\n        :host #buttons {\n          position: absolute;\n          left: -999999px;\n          top: 0;\n          overflow: hidden;\n          opacity: 0;\n        }\n\n        simple-popover {\n          max-width: var(--lrndesign-imagemap-popover-maxWidth, 525px);\n          max-height: var(--lrndesign-imagemap-popover-maxHeight, 300px);\n        }\n        simple-popover[for=""] {\n          display: none;\n        }\n        simple-popover .sub-heading > *:first-child {\n          margin: 0 0 10px;\n        }\n\n        @media print {\n          #svg,\n          simple-popover {\n            display: none;\n          }\n        }\n      '])))]}},{key:"tag",get:function(){return"lrndesign-imagemap"}},{key:"properties",get:function(){return{label:{type:String},src:{type:String},hotspotDetails:{type:Array,attribute:"hotspot-details"},subtopicOf:{type:String,reflect:!0,attribute:"subtopic-of"},parent:{type:String,reflect:!0,attribute:"parent"},__activeHotspot:{type:Object}}}}],n&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),c}(i.LitElement);window.customElements.define(y.tag,y),t.LrndesignImagemap=y,Object.defineProperty(t,"__esModule",{value:!0})}));
