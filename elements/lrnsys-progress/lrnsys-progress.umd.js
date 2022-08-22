!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-progress/simple-progress.js"),require("@lrnwebcomponents/circle-progress/circle-progress.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@polymer/paper-styles/paper-styles.js"),require("@polymer/paper-spinner/paper-spinner.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-progress/simple-progress.js","@lrnwebcomponents/circle-progress/circle-progress.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@polymer/paper-styles/paper-styles.js","@polymer/paper-spinner/paper-spinner.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LrnsysProgress={},e.polymerElement_js)}(this,(function(e,t){"use strict";function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=r(e);if(t){var n=r(this).constructor;s=Reflect.construct(i,arguments,n)}else s=i.apply(this,arguments);return u(this,s)}}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,s){var i=d(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(arguments.length<3?e:s):n.value}},h.apply(this,arguments)}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v,f,y=function(e){o(l,e);var n=p(l);function l(){var e;return i(this,l),(e=n.call(this)).completeSound=new URL("./lib/assets/complete.mp3","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("lrnsys-progress.umd.js",document.baseURI).href).href,e.finishedSound=new URL("./lib/assets/finished.mp3","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("lrnsys-progress.umd.js",document.baseURI).href).href,setTimeout((function(){e.addEventListener("click",e.tapEventOn.bind(c(e))),e.addEventListener("mouseover",e.focusOn.bind(c(e))),e.addEventListener("mouseout",e.focusOff.bind(c(e))),e.addEventListener("focused-changed",e.focusEvent.bind(c(e)))}),0),e}return a(l,[{key:"ready",value:function(){h(r(l.prototype),"ready",this).call(this),this._bubbleProgress={25:!1,50:!1,75:!1}}},{key:"_testValueComplete",value:function(e,t){e>=this.max&&"available"==this.status?this.status="complete":e/this.max>=.75&&!this._bubbleProgress[75]?(this.dispatchEvent(new CustomEvent("node-percent-milestone",{bubbles:!0,cancelable:!0,composed:!0,detail:{percentage:75}})),this._bubbleProgress[75]=!0):e/this.max>=.5&&!this._bubbleProgress[50]?(this.dispatchEvent(new CustomEvent("node-percent-milestone",{bubbles:!0,cancelable:!0,composed:!0,detail:{percentage:50}})),this._bubbleProgress[50]=!0):e/this.max>=.25&&!this._bubbleProgress[25]&&(this.dispatchEvent(new CustomEvent("node-percent-milestone",{bubbles:!0,cancelable:!0,composed:!0,detail:{percentage:25}})),this._bubbleProgress[25]=!0)}},{key:"focusEvent",value:function(e){this.disabled||"loading"==this.status||(this.focusState?(this.shadowRoot.querySelector("#icon").icon=this.icon,this.shadowRoot.querySelector("#icon").classList.add("activeIcon")):("complete"!=this.status&&"finished"!=this.status||(this.shadowRoot.querySelector("#icon").icon=this.activeIcon),this.shadowRoot.querySelector("#icon").classList.remove("activeIcon")),this.focusState=!this.focusState)}},{key:"focusOn",value:function(e){this.disabled||"loading"==this.status||(this.shadowRoot.querySelector("#icon").icon=this.icon,this.shadowRoot.querySelector("#icon").classList.add("activeIcon"))}},{key:"focusOff",value:function(e){this.disabled||"loading"==this.status||("complete"!=this.status&&"finished"!=this.status||(this.shadowRoot.querySelector("#icon").icon=this.activeIcon),this.shadowRoot.querySelector("#icon").classList.remove("activeIcon"))}},{key:"tapEventOn",value:function(e){var t=e.target;this.dispatchEvent(new CustomEvent("node-is-active",{bubbles:!0,cancelable:!0,composed:!0,detail:{target:t}}))}},{key:"_getActiveIcon",value:function(e,t,i){if("undefined"!==s(e)&&this.shadowRoot){var n=e;return"loading"==i?(n=this.loadingIcon,this.shadowRoot.querySelector("#icon").classList.add("transition")):"finished"==i?n=this.finishedIcon:"complete"==i&&"undefined"!==s(t)?(this.playSound&&!this.__chimed&&this._playSound(),n=t):this.shadowRoot.querySelector("#icon").classList.remove("transition"),n}return!1}},{key:"_playSound",value:function(){"complete"==this.status?(window.audio=new Audio(this.completeSound),this.__chimed=!0):"finished"==this.status?(window.audio=new Audio(this.finishedSound),this.__finishchimed=!0):window.audio=new Audio,window.audio.play()}},{key:"_loadingStatus",value:function(e){return"loading"==e}},{key:"_finishedStatus",value:function(e){return"finished"==e&&(this.playFinishSound&&!this.__finishchimed&&this._playSound(),!0)}},{key:"_statusChange",value:function(e,t){"undefined"!==s(t)&&e!==t&&this.dispatchEvent(new CustomEvent("node-status-change",{bubbles:!0,cancelable:!0,composed:!0,detail:{status:e}}))}},{key:"_disableStatus",value:function(e){return"disabled"==e}}],[{key:"template",get:function(){return t.html(v||(v=m(['\n      <custom-style>\n        <style is="custom-style" include="paper-material-styles">\n          :host {\n            display: block;\n            transition: box-shadow\n                var(--lrnsys-progress-circle-transition, 0.5s) linear,\n              color var(--lrnsys-progress-circle-transition, 0.5s) ease-in-out,\n              background-color var(--lrnsys-progress-circle-transition, 0.5s)\n                ease-in-out;\n          }\n          :host([status="complete"]) .circle-wrapper {\n            box-shadow: 0px 0px 0px 0.16px\n              var(--lrnsys-progress-complete-color, var(--paper-green-900));\n          }\n          :host([status="disabled"]) .circle-wrapper {\n            box-shadow: none;\n          }\n          :host([status="available"]) .circle-wrapper {\n            box-shadow: none;\n          }\n          :host([active]) .circle-wrapper {\n            box-shadow: 0px 0px 0px 0.16px var(--google-grey-500, #555555);\n          }\n          .circle-wrapper {\n            border-radius: 100%;\n          }\n          .button {\n            margin: 0;\n            padding: 0;\n            display: flex;\n            min-width: 40px;\n            border-radius: 100%;\n          }\n          button {\n            width: var(--lrnsys-progress-circle-size, 40px);\n            height: var(--lrnsys-progress-circle-size, 40px);\n          }\n          circle-progress {\n            margin: 0;\n            --circle-progress-width: var(--lrnsys-progress-circle-size, 40px);\n            --circle-progress-height: var(--lrnsys-progress-circle-size, 40px);\n            --circle-progress-stroke-color: var(\n              --lrnsys-progress-color,\n              var(--paper-green-500)\n            );\n            --circle-progress-bg-stroke-color: var(\n              --lrnsys-progress-container-color,\n              var(--google-grey-300)\n            );\n            --circle-progress-transition: 0.5s;\n            --circle-progress-stroke-linecap: square;\n            transition: color 0.5s ease-in-out,\n              background-color 0.5s ease-in-out;\n          }\n          paper-spinner {\n            display: block;\n            font-size: 16px;\n            width: var(--lrnsys-progress-spinner-size, 32px);\n            height: var(--lrnsys-progress-spinner-size, 32px);\n            position: absolute;\n            z-index: 1;\n            margin: 4px;\n            padding: 0;\n            visibility: visible;\n            opacity: 1;\n            transition: visibility 0.4s, opacity 0.4s ease;\n          }\n          paper-spinner.multi {\n            --paper-spinner-layer-1-color: var(--paper-purple-500);\n            --paper-spinner-layer-2-color: var(--paper-cyan-500);\n            --paper-spinner-layer-3-color: var(--paper-blue-grey-500);\n            --paper-spinner-layer-4-color: var(--paper-amber-500);\n          }\n          .transition {\n            opacity: 0.4;\n            width: calc(var(--lrnsys-progress-icon-size, 24px) - 8px);\n            height: calc(var(--lrnsys-progress-icon-size, 24px) - 8px);\n          }\n          simple-icon {\n            visibility: visible;\n            opacity: 1;\n            transition: width 0.1s linear, height 0.1s linear,\n              visibility 0.4s ease, opacity 0.4s ease;\n            --simple-icon-width: var(--lrnsys-progress-icon-size, 24px);\n            --simple-icon-height: var(--lrnsys-progress-icon-size, 24px);\n          }\n          .disabled {\n            background-color: var(\n              --lrnsys-progress-disabled-color,\n              var(--google-grey-500)\n            );\n            color: white;\n          }\n          .loading {\n            background-color: white;\n            color: black;\n          }\n          .finished simple-icon:not(.activeIcon) {\n            --simple-icon-width: calc(\n              var(--lrnsys-progress-icon-size, 24px) - 8px\n            );\n            --simple-icon-height: calc(\n              var(--lrnsys-progress-icon-size, 24px) - 8px\n            );\n          }\n          .available {\n            background-color: var(\n              --lrnsys-progress-active-color,\n              var(--google-grey-300)\n            );\n            color: var(\n              --lrnsys-progress-active-text-color,\n              var(--google-grey-500)\n            );\n          }\n          .activeIcon {\n            color: black;\n          }\n          .complete .activeIcon {\n            color: white;\n          }\n          :host([active]) .complete .activeIcon,\n          :host([active]) .finished .activeIcon {\n            color: black;\n          }\n          .complete,\n          .finished {\n            background-color: var(\n              --lrnsys-progress-container-color,\n              var(--paper-green-500)\n            );\n            color: white;\n          }\n          :host([active]) circle-progress {\n            background-color: white;\n            color: black;\n          }\n          .listview-title {\n            font-size: 16px;\n            padding: 0;\n            margin: 0;\n          }\n          .description-content {\n            font-size: 8px;\n            font-style: italic;\n          }\n          .circle-wrapper {\n            display: inline-block;\n          }\n          .listview {\n            height: 32px;\n            padding: 4px 0;\n            margin: 0;\n            vertical-align: top;\n          }\n          .link {\n            height: 40px;\n            width: 100%;\n          }\n          :host([list-view]) .button {\n            margin: 0;\n            padding: 0;\n            display: block;\n            min-width: 40px;\n            border-radius: 0;\n          }\n        </style>\n      </custom-style>\n      <simple-tooltip\n        hidden$="[[!toolTip]]"\n        for="button"\n        position="bottom"\n        offset="8"\n        animation-delay="0"\n      >\n        [[label]]\n      </simple-tooltip>\n      <button\n        id="button"\n        class="button"\n        disabled$="[[disabled]]"\n        title="[[label]]"\n      >\n        <span class="circle-wrapper">\n          <paper-spinner\n            active$="[[loading]]"\n            hidden$="[[!loading]]"\n            class="multi"\n            alt$="Loading content for [[label]]"\n          ></paper-spinner>\n          <circle-progress\n            class$="[[status]]"\n            value="[[value]]"\n            max="[[max]]"\n            stroke-width="[[strokeWidth]]"\n            angle="180"\n          >\n            <simple-icon\n              id="icon"\n              icon="[[activeIcon]]"\n              hidden$="[[!activeIcon]]"\n            ></simple-icon>\n            <slot name="image"></slot>\n          </circle-progress>\n        </span>\n        <span hidden$="[[!listView]]" id="listview" class="listview">\n          <h3 class="listview-title">[[label]]</h3>\n          <div class="description-content">\n            <slot name="description"></slot> <slot></slot>\n          </div>\n        </span>\n      </button>\n    '])))}},{key:"tag",get:function(){return"lrnsys-progress-circle"}},{key:"properties",get:function(){return{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0,observer:"_testValueComplete"},toolTip:{type:Boolean,value:!0,reflectToAttribute:!0},listView:{type:Boolean,value:!0,reflectToAttribute:!0},icon:{type:String,value:"icons:description",reflectToAttribute:!0},iconComplete:{type:String,value:"icons:description",reflectToAttribute:!0},loadingIcon:{type:String,value:"hourglass-full",reflectToAttribute:!0},finishedIcon:{type:String,value:"thumb-up",reflectToAttribute:!0},activeIcon:{type:String,notify:!0,computed:"_getActiveIcon(icon, iconComplete, status)"},step:{type:Number,value:0,reflectToAttribute:!0},active:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},status:{type:String,value:"available",reflectToAttribute:!0,notify:!0,observer:"_statusChange"},disabled:{type:Boolean,computed:"_disableStatus(status)"},loading:{type:Boolean,computed:"_loadingStatus(status)"},finished:{type:Boolean,computed:"_finishedStatus(status)"},max:{type:String,reflectToAttribute:!0},__chimed:{type:Boolean,value:!1},__finishchimed:{type:Boolean,value:!1},url:{type:String,value:"#",reflectToAttribute:!0},dataUrl:{type:String,value:!1,reflectToAttribute:!0},strokeWidth:{type:Number,value:4},focusState:{type:Boolean,value:!1},playSound:{type:Boolean,value:!1,reflectToAttribute:!0},playFinishSound:{type:Boolean,value:!1,reflectToAttribute:!0},completeSound:{type:String,reflectToAttribute:!0},finishedSound:{type:String,reflectToAttribute:!0},_bubbleProgress:{type:Object,value:{25:!1,50:!1,75:!1}}}}}]),l}(t.PolymerElement);window.customElements.define(y.tag,y);var b=function(e){o(l,e);var n=p(l);function l(){var e;return i(this,l),(e=n.call(this)).completeSound=new URL("./lib/assets/complete.mp3","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("lrnsys-progress.umd.js",document.baseURI).href).href,e.finishedSound=new URL("./lib/assets/finished.mp3","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("lrnsys-progress.umd.js",document.baseURI).href).href,e}return a(l,[{key:"connectedCallback",value:function(){h(r(l.prototype),"connectedCallback",this).call(this),this.addEventListener("node-is-active",this._bubbleUpChangeActive.bind(this)),this.addEventListener("node-status-change",this._statusChanged.bind(this))}},{key:"disconnectedCallback",value:function(){this.removeEventListener("node-is-active",this._bubbleUpChangeActive.bind(this)),this.removeEventListener("node-status-change",this._statusChanged.bind(this)),h(r(l.prototype),"disconnectedCallback",this).call(this)}},{key:"_getStrokeWidth",value:function(e){var t=4;return"tiny"==e?t=3:"small"==e?t=4:"medium"==e?t=5:"large"==e?t=6:"x-large"==e?t=7:"epic"==e&&(t=8),t}},{key:"_reportState",value:function(e,t){null!=e&&this.items.length>0&&this.dispatchEvent(new CustomEvent("progress-state-change",{bubbles:!0,cancelable:!0,composed:!0,detail:{state:this.state,active:this.items[this.active]}}))}},{key:"_itemsChanged",value:function(e,t){var i=this;"undefined"!==s(t)&&"undefined"!==s(e)&&e.length!=t.length&&"undefined"===s(this._responseList[this.active])&&(e[this.active].metadata.status="loading",this.set("items."+this.active+".metadata.status","loading"),this.notifyPath("items."+this.active+".metadata.status"),"undefined"===s(e[this.active].dataUrl)||this.disableAjaxCalls?setTimeout((function(){e[i.active].metadata.status="available",i.set("items."+i.active+".metadata.status","available"),i.notifyPath("items."+i.active+".metadata.status"),i._responseList[i.active]={},i.activeNodeResponse=i._responseList[i.active]}),1200):(this.shadowRoot.querySelector("#ajax").url=e[this.active].dataUrl,this.shadowRoot.querySelector("#ajax").generateRequest()))}},{key:"_isActive",value:function(e,t){return e===t}},{key:"_activeResponseChanged",value:function(e){this.dispatchEvent(new CustomEvent("progress-response-loaded",{bubbles:!0,cancelable:!0,composed:!0,detail:{response:e}}))}},{key:"_bubbleUpChangeActive",value:function(e){this.active=e.detail.target.step,this.dispatchEvent(new CustomEvent("json-outline-schema-active-item-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this.items[this.active]}))}},{key:"_manifestChanged",value:function(e,t){e&&(this.set("items",e.items),this.notifyPath("items.*"))}},{key:"_activeChanged",value:function(e,t){var i=this;this.state="active item is "+this.active,this.items.forEach((function(e,t,n){"disabled"==i.items[t].metadata.status?0!=t&&i.progressiveUnlock&&"complete"==i.items[t-1].metadata.status&&(i.items[t].metadata.status="loading",i.set("items."+t+".metadata.status","loading"),i.notifyPath("items."+t+".metadata.status")):i.items[t].metadata.value>=i.items[t].metadata.max&&t==i.items.length-1?(i.items[t].metadata.status="finished",i.set("items."+t+".metadata.status","finished"),i.notifyPath("items."+t+".metadata.status")):i.items[t].metadata.value>=i.items[t].metadata.max?(i.items[t].metadata.status="complete",i.set("items."+t+".metadata.status","complete"),i.notifyPath("items."+t+".metadata.status")):t==i.active?"undefined"===s(i._responseList[t])?(i.items[t].metadata.status="loading",i.set("items."+t+".metadata.status","loading"),i.notifyPath("items."+t+".metadata.status")):(i.activeNodeResponse=i._responseList[t],i.items[t].metadata.status="available",i.set("items."+t+".metadata.status","available"),i.notifyPath("items."+t+".metadata.status")):(i.items[t].metadata.status="available",i.set("items."+t+".metadata.status","available"),i.notifyPath("items."+t+".metadata.status"))}))}},{key:"_statusChanged",value:function(e){var t=this;"loading"==e.target.status?"undefined"===s(this.items[this.active].metadata.dataUrl)||this.disableAjaxCalls?setTimeout((function(){t.items[t.active].metadata.status="available",t.set("items."+t.active+".metadata.status","available"),t.notifyPath("items."+t.active+".metadata.status"),t._responseList[t.active]={},t.activeNodeResponse=t._responseList[t.active]}),1500):(this.shadowRoot.querySelector("#ajax").url=this.items[this.active].metadata.dataUrl,this.shadowRoot.querySelector("#ajax").generateRequest()):"complete"==e.target.status&&this.items.length===this.active+1&&setTimeout((function(){t.items[t.active].metadata.status="finished",t.set("items."+t.active+".metadata.status","finished"),t.notifyPath("items."+t.active+".metadata.status")}),100)}},{key:"handleNodeResponse",value:function(e){var t=this,i=e.detail;s(i.response)===s(null)?setTimeout((function(){t.items[t.active].metadata.status="available",t.set("items."+t.active+".metadata.status","available"),t.notifyPath("items."+t.active+".metadata.status"),t._responseList[t.active]=i.response,t.activeNodeResponse=t._responseList[t.active]}),1500):(this.items[this.active].metadata.status="available",this.set("items."+this.active+".metadata.status","available"),this.notifyPath("items."+this.active+".metadata.status"),this._responseList[this.active]=i.response,this.activeNodeResponse=this._responseList[this.active])}},{key:"_handleNodeError",value:function(e,t){"undefined"!==s(t)&&null!=e&&0!=e.length&&(this._responseList[this.active]=e,this.activeNodeResponse=this._responseList[this.active],this.items[this.active].metadata.status="available",this.set("items."+this.active+".metadata.status","available"),this.notifyPath("items."+this.active+".metadata.status"),this.dispatchEvent(new CustomEvent("node-load-failed",{bubbles:!0,cancelable:!0,composed:!0,detail:this.items[this.active]})))}},{key:"_overallPercentageCompute",value:function(e,t){return"undefined"!==s(e)&&this.shadowRoot?(this.shadowRoot.querySelector("#progress").classList.add("transiting"),t/(e.length-1)*100):0}},{key:"changePercentage",value:function(e,t){var i=0;(i="add"==t?this.items[this.active].metadata.value+e:"subtract"==t?this.items[this.active].metadata.value-e:e)>=this.items[this.active].metadata.max?(this.items.length==this.active+1?(this.state="finished",this.items[this.active].metadata.status="finished",this.set("items."+this.active+".metadata.status","finished"),this.notifyPath("items."+this.active+".metadata.status"),this.items[this.active].metadata.value=this.items[this.active].metadata.max,this.set("items."+this.active+".metadata.value",this.items[this.active].metadata.max),this.notifyPath("items."+this.active+".metadata.value")):(this.items[this.active].metadata.value=this.items[this.active].metadata.max,this.set("items."+this.active+".metadata.value",this.items[this.active].metadata.max),this.notifyPath("items."+this.active+".metadata.value")),this.items.length>this.active+1&&((this.progressiveUnlock&&"complete"==this.items[this.active].metadata.status&&"disabled"==this.items[this.active+1].metadata.status||"undefined"===s(this._responseList[this.active+1]))&&(this.items[this.active+1].metadata.status="loading",this.set("items."+(this.active+1)+".metadata.status","loading"),this.notifyPath("items."+(this.active+1)+".metadata.status")),this.state="active item is "+(this.active+1),this.active=this.active+1)):(this.items[this.active].metadata.value=i,this.set("items."+this.active+".metadata.value",i),this.notifyPath("items."+this.active+".metadata.value"))}},{key:"updateItems",value:function(e,t){var s=!1;"push"==e?(this.push("items",t),s=!0):"pop"==e?s=this.pop("items"):"splice"==e&&(this.splice("items",this.items.length,0,t),s=!0);var i=this.active;return this.set("active",0),this.set("active",i),this.notifyPath("active"),s}}],[{key:"template",get:function(){return t.html(f||(f=m(['\n      <style include="paper-material-styles">\n        :host {\n          display: block;\n          margin-top: 24px;\n        }\n        :host([size="tiny"]) {\n          font-size: 12.8px;\n        }\n        :host([size="small"]) {\n          font-size: 19.2px;\n        }\n        :host([size="medium"]) {\n          font-size: 25.6px;\n        }\n        :host([size="large"]) {\n          font-size: 44.8px;\n        }\n        :host([size="x-large"]) {\n          font-size: 64px;\n        }\n        :host([size="epic"]) {\n          font-size: 96px;\n        }\n        #circle-container {\n          display: flex;\n          justify-content: space-between;\n          margin: -24px 0 0 0;\n          padding: 0;\n          list-style: none;\n        }\n        .progress-title {\n          position: absolute !important;\n          clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n          clip: rect(1px, 1px, 1px, 1px);\n          overflow: hidden;\n          height: 1px;\n        }\n        simple-progress {\n          height: 8px;\n          --simple-progress-transition-duration: 0.5s;\n          --simple-progress-transition-timing-function: ease;\n          --simple-progress-transition-delay: 0.4s;\n          width: 100%;\n        }\n        /* required to get the box shadow above the progress bar */\n        .circle-node {\n          z-index: 1;\n        }\n        ul#circle-container li.circle-node {\n          list-style-type: none;\n        }\n\n        :host([vertical]) {\n          width: max-content;\n        }\n        :host([vertical]) #circle-container {\n          display: block;\n        }\n        :host([vertical]) simple-progress {\n          display: none !important;\n        }\n        :host([vertical]) lrnsys-progress-circle {\n          margin: 16px 0;\n          padding: 0;\n          width: 100%;\n        }\n\n        lrnsys-progress-circle {\n          width: 40px;\n          height: 40px;\n          --lrnsys-progress-circle-size: 40px;\n          --lrnsys-progress-spinner-size: 32px;\n          --lrnsys-progress-icon-size: 24px;\n          --paper-spinner-stroke-width: 1.2px;\n        }\n      </style>\n\n      <iron-ajax\n        id="ajax"\n        url="[[activeNodeURL]]"\n        handle-as="json"\n        last-error="{{nodeDataError}}"\n        on-response="handleNodeResponse"\n      ></iron-ajax>\n      <h3 class="progress-title">[[title]]</h3>\n      <simple-progress\n        id="progress"\n        value="[[overallPercentage]]"\n      ></simple-progress>\n      <ul id="circle-container">\n        <template is="dom-repeat" items="[[items]]" as="item">\n          <li class="circle-node">\n            <lrnsys-progress-circle\n              play-finish-sound="[[soundFinish]]"\n              play-sound="[[sound]]"\n              complete-sound="[[completeSound]]"\n              finished-sound="[[finishedSound]]"\n              active="[[_isActive(index, active)]]"\n              step="[[index]]"\n              label="[[item.title]]"\n              icon="[[item.metadata.icon]]"\n              icon-complete="[[item.metadata.iconComplete]]"\n              data-url="[[item.metadata.dataUrl]]"\n              url="[[item.slug]]"\n              status="[[item.metadata.status]]"\n              value="[[item.metadata.value]]"\n              max="[[item.metadata.max]]"\n              stroke-width="[[strokeWidth]]"\n              tool-tip="[[!vertical]]"\n              list-view="[[vertical]]"\n              class$="[[size]]"\n            >\n              <span slot="description">[[item.description]]</span>\n            </lrnsys-progress-circle>\n          </li>\n        </template>\n      </ul>\n    '])))}},{key:"tag",get:function(){return"lrnsys-progress"}},{key:"properties",get:function(){return{disableAjaxCalls:{type:Boolean,value:!1,reflectToAttribute:!0},items:{type:Array,value:[],notify:!0,observer:"_itemsChanged"},sound:{type:Boolean,value:!1,reflectToAttribute:!0},soundFinish:{type:Boolean,value:!1,reflectToAttribute:!0},completeSound:{type:String,reflectToAttribute:!0},finishedSound:{type:String,reflectToAttribute:!0},title:{type:String,value:"Steps to completion",reflectToAttribute:!0},keyItems:{type:Array,value:[],notify:!0},active:{type:Number,value:0,notify:!0,reflectToAttribute:!0,observer:"_activeChanged"},progressiveUnlock:{type:Boolean,value:!0,reflectToAttribute:!0,notify:!0},state:{type:String,value:null,reflectToAttribute:!0,observer:"_reportState"},overallPercentage:{type:Number,computed:"_overallPercentageCompute(items, active)",reflectToAttribute:!0},_responseList:{type:Array,value:[]},activeNodeResponse:{type:String,value:"",observer:"_activeResponseChanged"},manifest:{type:Object,value:{},notify:!0,observer:"_manifestChanged"},nodeDataError:{type:Object,value:[],observer:"_handleNodeError"},vertical:{type:Boolean,value:!1},size:{type:String,value:"medium",notify:!0,reflectToAttribute:!0},strokeWidth:{type:Number,computed:"_getStrokeWidth(size)"}}}}]),l}(t.PolymerElement);window.customElements.define(b.tag,b),e.LrnsysProgress=b,Object.defineProperty(e,"__esModule",{value:!0})}));
