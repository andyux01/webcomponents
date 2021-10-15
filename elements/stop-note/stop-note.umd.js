!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/utils/lib/remoteLinkBehavior.js"),require("@lrnwebcomponents/simple-icon/lib/simple-iconset.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/utils/lib/remoteLinkBehavior.js","@lrnwebcomponents/simple-icon/lib/simple-iconset.js","@lrnwebcomponents/simple-icon/simple-icon.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).StopNote={},e.lit,e.remoteLinkBehavior_js,e.simpleIconset_js)}(this,(function(e,t,n,o){"use strict";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p(this,n)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h,g,y;o.SimpleIconsetStore.registerIconset("stopnoteicons","".concat(new URL("./","undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("stop-note.umd.js",document.baseURI).href).href,"lib/svgs/stopnoteicons/"));var m={"stopnoteicons:stop-icon":"Stop","stopnoteicons:warning-icon":"Warning","stopnoteicons:confirm-icon":"Confirmation","stopnoteicons:book-icon":"Notice"},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(p,e);var n,o,i,s=u(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=s.call(this)).url=null,e.title="",e.icon="stopnoteicons:stop-icon",e.ready=!1,e}return n=p,i=[{key:"styles",get:function(){return[t.css(y||(y=d(['\n        :host {\n          display: block;\n          width: auto;\n          --background-color: #f7f7f7;\n          --accent-color: #d32f2f;\n          margin-bottom: 20px;\n        }\n\n        simple-icon {\n          --simple-icon-height: 100px;\n          --simple-icon-width: 100px;\n        }\n\n        :host([icon="stopnoteicons:stop-icon"]) {\n          --accent-color: #d8261c;\n        }\n\n        :host([icon="stopnoteicons:warning-icon"]) {\n          --accent-color: #ffeb3b;\n        }\n\n        :host([icon="stopnoteicons:confirm-icon"]) {\n          --accent-color: #81c784;\n        }\n\n        :host([icon="stopnoteicons:book-icon"]) {\n          --accent-color: #21a3db;\n        }\n\n        .container {\n          display: flex;\n          width: auto;\n        }\n\n        .message_wrap {\n          border-right: 7px solid var(--accent-color);\n          padding: 10px 25px;\n          flex: 1 1 auto;\n          background-color: var(--background-color);\n        }\n\n        .main_message {\n          font-size: 32px;\n          margin-top: 10px;\n        }\n\n        .secondary_message {\n          margin-top: 5px;\n          font-size: 19.2px;\n          width: 100%;\n        }\n\n        .link a {\n          margin-top: 5px;\n          font-size: 19.2px;\n          float: left;\n          clear: left;\n          text-decoration: none;\n          color: #2196f3;\n        }\n\n        .link a:hover {\n          color: #1976d2;\n        }\n\n        .svg {\n          display: flex;\n          justify-content: center;\n        }\n\n        .svg_wrap {\n          background-color: var(--accent-color);\n          padding: 5px;\n          width: auto;\n        }\n      '])))]}},{key:"tag",get:function(){return"stop-note"}},{key:"properties",get:function(){return r(r({},f(a(p),"properties",this)||{}),{},{title:{type:String,reflect:!0},url:{type:String},icon:{type:String,reflect:!0},ready:{type:Boolean,reflect:!0}})}},{key:"haxProperties",get:function(){return{type:"grid",canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Stop Note",description:"A message to alert readers to specific directions.",icon:"icons:report",color:"orange",groups:["Education","Content"],handles:[{type:"text",title:"label"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"Enter title for stop-note.",inputMethod:"textfield",required:!0},{property:"url",title:"URL",description:"Enter an external url.",inputMethod:"haxupload",required:!0},{property:"icon",title:"Action Icon",description:"Icon used for stop-note",inputMethod:"select",options:m}],advanced:[]},saveOptions:{unsetAttributes:["colors"]},demoSchema:[{tag:"stop-note",properties:{title:"Hold up there"},content:'<p slot="message"><strong>Read these important things!</strong>\n</p>\n'},{tag:"stop-note",properties:{title:"Warning",icon:"stopnoteicons:warning-icon"},content:'<p slot="message">You can write any warning message you want here.</p>\n'}]}}}],(o=[{key:"render",value:function(){return t.html(h||(h=d(['\n      <div class="container">\n        <div class="svg_wrap">\n          <div class="svg">\n            <simple-icon icon="','" no-colorize></simple-icon>\n          </div>\n        </div>\n        <div class="message_wrap">\n          <div class="main_message" id="title">','</div>\n          <div class="secondary_message">\n            <slot name="message"></slot>\n          </div>\n          ',"\n        </div>\n      </div>\n    "])),this.icon,this.title,this.url?t.html(g||(g=d(['\n                <div class="link">\n                  <a href="','" id="link"> More Information &gt; </a>\n                </div>\n              '])),this.url):"")}},{key:"updated",value:function(e){var t=this;f(a(p.prototype),"updated",this)&&f(a(p.prototype),"updated",this).call(this,e),e.forEach((function(e,n){"url"==n&&(t.remoteLinkURL=t[n])}))}},{key:"firstUpdated",value:function(e){var t=this;f(a(p.prototype),"firstUpdated",this)&&f(a(p.prototype),"firstUpdated",this).call(this,e),setTimeout((function(){t.ready=!0}),100),this.remoteLinkTarget=this.shadowRoot.querySelector("#link")}},{key:"haxHooks",value:function(){return{editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged"}}},{key:"haxeditModeChanged",value:function(e){f(a(p.prototype),"haxeditModeChanged",this)&&f(a(p.prototype),"haxeditModeChanged",this).call(this,e),this._haxstate=e}},{key:"haxactiveElementChanged",value:function(e,t){f(a(p.prototype),"haxactiveElementChanged",this)&&f(a(p.prototype),"haxactiveElementChanged",this).call(this,e,t);var n=this.shadowRoot.querySelector("#title"),o=this.shadowRoot.querySelector(".svg_wrap");return t?(o.addEventListener("click",this.haxtoggleIcon.bind(this)),n.setAttribute("contenteditable",!0)):(o.removeEventListener("click",this.haxtoggleIcon.bind(this)),n.removeAttribute("contenteditable"),this.title=n.innerText),!1}},{key:"haxinlineContextMenu",value:function(e){e.ceButtons=[{icon:"image:style",callback:"haxtoggleIcon",label:"Toggle icon"}]}},{key:"haxtoggleIcon",value:function(e){var t=Object.keys(m),n=t[0];return t.lastIndexOf(this.icon)!=t.length-1&&(n=t[t.lastIndexOf(this.icon)+1]),this.icon=n,!0}}])&&c(n.prototype,o),i&&c(n,i),p}(n.remoteLinkBehavior(t.LitElement));window.customElements.define(b.tag,b),e.StopNote=b,Object.defineProperty(e,"__esModule",{value:!0})}));
