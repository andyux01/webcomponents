!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).AccentCard={},n.lit,n.simpleColors_js,n.IntersectionObserverMixin_js)}(this,(function(n,e,t,r){"use strict";function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},d(n)}function l(n,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},l(n,e)}function p(n,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function s(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=d(n);if(e){var o=d(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p(this,t)}}function g(n,e){for(;!Object.prototype.hasOwnProperty.call(n,e)&&null!==(n=d(n)););return n}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(n,e,t){var r=g(n,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?n:t):o.value}},u.apply(this,arguments)}function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function h(n){return function(n){if(Array.isArray(n))return b(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return b(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var m,v,y=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&l(n,e)}(p,n);var t,r,o,c=s(p);function p(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(n=c.call(this)).accentBackground=!1,n.accentHeading=!1,n.flat=!1,n.horizontal=!1,n.imageAlign=null,n.imageSrc=null,n.imageValign=null,n.noBorder=!1,n.ready=!1,n}return t=p,o=[{key:"tag",get:function(){return"accent-card"}},{key:"styles",get:function(){return[].concat(h(u(d(p),"styles",this)),[e.css(v||(v=f(['\n        :host {\n          display: block;\n          border-radius: 2px;\n          margin: 0 0 15px;\n          box-shadow: var(\n            --accent-card-box-shadow,\n            0 2px 2px 0 rgba(0, 0, 0, 0.14),\n            0 1px 5px 0 rgba(0, 0, 0, 0.12),\n            0 3px 1px -2px rgba(0, 0, 0, 0.2)\n          );\n          color: var(\n            --accent-card-color,\n            var(--simple-colors-default-theme-grey-9, #222)\n          );\n          background-color: var(\n            --accent-card-background-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n        :host([dark]) {\n          color: var(\n            --accent-card-color,\n            var(--simple-colors-default-theme-grey-12, #fff)\n          );\n        }\n        :host([accent-background]) {\n          background-color: var(\n            --accent-card-background-color,\n            var(--simple-colors-default-theme-accent-1, #fff)\n          );\n        }\n        article {\n          position: relative;\n          width: 100%;\n          box-sizing: border-box;\n        }\n        article,\n        .body {\n          display: flex;\n          flex: 1 1 auto;\n          flex-direction: column;\n        }\n        :host([horizontal]) article {\n          display: flex;\n          justify-content: space-between;\n          align-items: stretch;\n          flex-direction: row;\n        }\n        :host([flat]) {\n          box-shadow: none;\n        }\n        :host([flat]:not([accent-background])) {\n          border-width: 1px;\n          border-style: solid;\n          border-color: var(--accent-card-footer-border-color);\n        }\n        :host([dark][flat]:not([accent-background])) {\n          border-color: var(\n            --accent-card-footer-border-color,\n            var(--simple-colors-default-theme-grey-6, #666)\n          );\n        }\n        :host(:not([horizontal]):not([no-border])) article {\n          border-top-width: 4px;\n          border-top-style: solid;\n          border-top-color: var(\n            --accent-card-border-color,\n            var(--simple-colors-default-theme-accent-6, #ddd)\n          );\n        }\n        :host([horizontal]:not([no-border])) article {\n          border-left-width: 4px;\n          border-left-style: solid;\n          border-left-color: var(\n            --accent-card-border-color,\n            var(--simple-colors-default-theme-accent-6, #ddd)\n          );\n        }\n        :host([dark]:not([horizontal]):not([no-border])) article {\n          border-top-color: var(\n            --accent-card-border-color,\n            var(--simple-colors-default-theme-accent-7, #fff)\n          );\n        }\n        :host([dark][horizontal]:not([no-border])) article {\n          border-left-color: var(\n            --accent-card-border-color,\n            var(--simple-colors-default-theme-accent-7, #fff)\n          );\n        }\n        .image-outer {\n          box-sizing: border-box;\n          position: relative;\n          overflow: visible;\n        }\n        :host([horizontal]) .image-outer {\n          height: auto;\n          width: var(--accent-card-image-width, 30%);\n          flex: 0 0 auto;\n        }\n        :host(:not([horizontal])) .image-outer {\n          height: auto;\n          width: 100%;\n          min-height: var(--accent-card-heading-min-height);\n        }\n        .image {\n          height: 100%;\n          width: 100%;\n          background-size: cover;\n          background-position-x: var(--accent-card-image-x, center);\n          background-position-y: var(--accent-card-image-y, center);\n        }\n        :host([image-align="left"]) .image {\n          background-position-x: left;\n        }\n        :host([image-align="center"]) .image {\n          background-position-x: center;\n        }\n        :host([image-align="right"]) .image {\n          background-position-x: right;\n        }\n        :host([image-valign="top"]) .image {\n          background-position-y: top;\n        }\n        :host([image-valign="center"]) .image {\n          background-position-y: center;\n        }\n        :host([image-valign="bottom"]) .image {\n          background-position-y: bottom;\n        }\n        :host(:not([horizontal])) .image {\n          height: 0;\n          padding-top: var(--accent-card-image-height, 10%);\n        }\n        #imagecorner {\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          padding-top: var(--accent-card-image-padding-top, 0);\n          padding-bottom: var(\n            --accent-card-image-padding-bottom,\n            var(--accent-card-padding, 20px)\n          );\n          padding-left: var(\n            --accent-card-image-padding-left,\n            var(--accent-card-padding, 20px)\n          );\n          padding-right: var(\n            --accent-card-image-padding-right,\n            var(--accent-card-padding, 20px)\n          );\n        }\n        ::slotted([slot="image-corner"]) {\n          text-align: right;\n          color: var(\n            --accent-card-background-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n        .body {\n          flex-grow: 1;\n          overflow: visible;\n        }\n        #heading {\n          flex: 0 0 auto;\n          display: flex;\n          justify-content: space-between;\n          align-items: var(--accent-card-heading-align, unset);\n          padding-left: var(\n            --accent-card-heading-padding-left,\n            var(--accent-card-padding, 20px)\n          );\n          padding-right: var(\n            --accent-card-heading-padding-right,\n            var(--accent-card-padding, 20px)\n          );\n          padding-bottom: var(--accent-card-heading-padding-bottom, 0px);\n          margin: 0;\n        }\n        ::slotted(*[slot="heading"]) {\n          font-size: 26px;\n          font-weight: bold;\n          padding-top: var(\n            --accent-card-heading-padding-top,\n            var(--accent-card-padding, 20px)\n          );\n        }\n        #heading div {\n          flex: 0 0 auto;\n        }\n        #heading [data-layout-slotname="heading"] {\n          margin: 0;\n          flex: 1 1 auto;\n        }\n        :host([accent-heading][accent-color]) #heading ::slotted(*) {\n          color: var(\n            --accent-card-heading-color,\n            var(--simple-colors-default-theme-accent-7, #000) !important\n          );\n        }\n        #subheading {\n          flex: 0 0 auto;\n          font-size: 90%;\n          font-style: italic;\n          padding-top: var(--accent-card-subheading-padding-top, unset);\n          padding-left: var(\n            --accent-card-subheading-padding-left,\n            var(--accent-card-padding, 20px)\n          );\n          padding-right: var(\n            --accent-card-subheading-padding-right,\n            var(--accent-card-padding, 20px)\n          );\n          padding-bottom: var(--accent-card-subheading-padding-bottom, unset);\n        }\n        #content {\n          font-size: 100%;\n          padding-top: var(\n            --accent-card-content-padding-top,\n            var(--accent-card-padding, 20px)\n          );\n          padding-left: var(\n            --accent-card-content-padding-left,\n            var(--accent-card-padding, 20px)\n          );\n          padding-right: var(\n            --accent-card-content-padding-right,\n            var(--accent-card-padding, 20px)\n          );\n          padding-bottom: var(\n            --accent-card-content-padding-bottom,\n            var(--accent-card-padding, 20px)\n          );\n          flex: 1 1 auto;\n        }\n        ::slotted(*[slot]:first-of-type) {\n          margin-top: 0;\n          margin-block-start: 0;\n        }\n        ::slotted(*[slot]:last-of-type) {\n          margin-bottom: 0;\n          margin-block-end: 0;\n        }\n        #footer {\n          flex: 0 0 auto;\n          border-top-width: 1px;\n          border-top-style: solid;\n          border-top-color: var(\n            --accent-card-footer-border-color,\n            var(--simple-colors-default-theme-grey-3, #ddd)\n          );\n          padding-top: var(--accent-card-footer-padding-top, unset);\n          padding-left: var(\n            --accent-card-footer-padding-left,\n            var(--accent-card-padding, 20px)\n          );\n          padding-right: var(\n            --accent-card-footer-padding-right,\n            var(--accent-card-padding, 20px)\n          );\n          padding-bottom: var(--accent-card-footer-padding-bottom, unset);\n        }\n        :host([dark]) #footer {\n          border-top-color: var(\n            --accent-card-footer-border-color,\n            var(--simple-colors-default-theme-grey-6, #666)\n          );\n        }\n        :host([ready]) [data-layout-slotname] {\n          transition: var(\n            --hax-layout-container-transition,\n            0.5s width ease-in-out,\n            0.5s padding ease-in-out,\n            0.5s margin ease-in-out\n          );\n        }\n      '])))])}},{key:"haxProperties",get:function(){return{type:"grid",canScale:!0,canPosition:!0,canEditSource:!0,contentEditable:!0,gizmo:{title:"Accent Card",description:"A card with optional accent styling.",icon:"chrome-reader-mode",color:"light-blue",groups:["Media","Content","Image","Presentation"],handles:[{type:"media",url:"source"},{type:"image"},{type:"text",url:"source"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{configure:[{slot:"heading",title:"Heading",description:"A heading for card.",inputMethod:"textfield",slotWrapper:"h1",allowedSlotWrappers:["span","div","p","h1","h2","h3","h4","h5","h6"],excludedSlotWrappers:["pre"]},{slot:"subheading",title:"Subheading",description:"An optional subheading for card.",inputMethod:"textfield",slotWrapper:"p",allowedSlotWrappers:["div","p"]},{slot:"content",title:"Content",description:"Content for card.",inputMethod:"textfield",slotWrapper:"p"},{slot:"footer",title:"Footer",description:"An optional footer for card.",inputMethod:"textfield",slotWrapper:"p",allowedSlotWrappers:["div","p"]},{property:"imageSrc",title:"Image",description:"Optional image",inputMethod:"haxupload",icon:"editor:insert-photo"},{property:"imageAlign",title:"imageAlign",description:"Image Horizontal Alignment",inputMethod:"select",options:{left:"left",center:"center",right:"right"}},{property:"imageValign",title:"imageValign",description:"Image Vertical Alignment",inputMethod:"select",options:{top:"top",center:"center",bottom:"bottom"}},{property:"accentColor",title:"Accent Color",description:"An optional accent color.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Enable Dark Theme",inputMethod:"boolean",icon:"icons:invert-colors"},{property:"horizontal",title:"Horizontal",description:"Horizontal orientation?",inputMethod:"boolean"},{property:"accentHeading",title:"Heading Accent",description:"Apply accent color to heading?",inputMethod:"boolean"},{property:"accentBackground",title:"Background Accent",description:"Apply accent color to card background?",inputMethod:"boolean"},{property:"noBorder",title:"No Border Accent",description:"Remove border accent?",inputMethod:"boolean"},{property:"flat",title:"Flat",description:"Remove box shadow?",inputMethod:"boolean"}],advanced:[{slot:"corner",title:"Corner",description:"Content for card corner.",inputMethod:"textfield",slotWrapper:"div",allowedSlotWrappers:["div","p"]}]},demoSchema:[{tag:"accent-card",properties:{style:"maxWidth:600px;width:100%;",accentColor:"cyan",dark:!0,imageSrc:"http://placekitten.com/200/600"},content:'<div slot="heading">Card Heading</div>\n<p slot="content">This is the body of the card.</p>'}],saveOptions:{unsetAttributes:["colors","element-visible"]}}}},{key:"properties",get:function(){return a(a({},u(d(p),"properties",this)||{}),{},{accentBackground:{type:Boolean,attribute:"accent-background",reflect:!0},accentHeading:{type:Boolean,attribute:"accent-heading",reflect:!0},flat:{type:Boolean,reflect:!0},horizontal:{type:Boolean,reflect:!0},imageAlign:{type:String,attribute:"image-align",reflect:!0},imageSrc:{type:String,attribute:"image-src"},imageValign:{type:String,attribute:"image-valign",reflect:!0},noBorder:{type:Boolean,attribute:"no-border",reflect:!0},ready:{type:Boolean,reflect:!0}})}}],(r=[{key:"render",value:function(){return e.html(m||(m=f(['\n      <article id="card">\n        <div\n          class="image-outer"\n          ?hidden="','"\n        >\n          <div\n            class="image"\n            .style="','"\n          ></div>\n          <div id="imagecorner"><slot name="image-corner"></slot></div>\n        </div>\n        <div class="body">\n          <div id="heading">\n            <div>\n              <slot name="heading"></slot>\n            </div>\n            <div data-label="Corner">\n              <slot name="corner"></slot>\n            </div>\n          </div>\n          <div id="subheading">\n            <slot name="subheading"></slot>\n          </div>\n          <div id="content">\n            <slot name="content"></slot>\n          </div>\n          <div id="footer">\n            <slot name="footer"></slot>\n          </div>\n        </div>\n      </article>\n    '])),!this.elementVisible||!this.imageSrc,this.elementVisible&&this.imageSrc?"background-image: url(".concat(this.imageSrc,");"):"")}},{key:"firstUpdated",value:function(n){var e=this;u(d(p.prototype),"firstUpdated",this)&&u(d(p.prototype),"firstUpdated",this).call(this,n),setTimeout((function(){e.ready=!0}),100)}}])&&i(t.prototype,r),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),p}(r.IntersectionObserverMixin(t.SimpleColors));window.customElements.define(y.tag,y),n.AccentCard=y,Object.defineProperty(n,"__esModule",{value:!0})}));
