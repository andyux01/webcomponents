!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/exif-data/exif-data.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/exif-data/exif-data.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ImageInspector={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=o(e);if(t){var s=o(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return r(this,n)}}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=c(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},a.apply(this,arguments)}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u,p,f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(d,e);var r,c,f,m=s(d);function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=m.call(this)).noLeft=!1,e.degrees=0,e.src="",e}return r=d,f=[{key:"styles",get:function(){return[t.css(p||(p=l(["\n        :host {\n          display: block;\n          overflow: hidden;\n          background-color: var(--image-inspector-background-color, #fdfdfd);\n        }\n\n        simple-icon-button {\n          display: inline-flex;\n          --simple-icon-width: 36px;\n          --simple-icon-height: 36px;\n          margin: 0 8px;\n          background-color: var(--image-inspector-background-color, #fdfdfd);\n          transition: 0.2s all ease-in-out;\n        }\n        simple-icon-button:hover,\n        simple-icon-button:focus,\n        simple-icon-button:active {\n          background-color: var(\n            --image-inspector-background-color-active,\n            #eeeeee\n          );\n        }\n\n        .top-rotated {\n          top: 150px;\n          pointer-events: none; /** disable pointer events when rotated bc of HTML canvas issue */\n        }\n        .showData {\n          display: block;\n          z-index: 2;\n        }\n        exif-data {\n          margin: 0 auto;\n          justify-content: space-evenly;\n          position: absolute;\n          display: none;\n          margin: 0;\n          padding: 0;\n        }\n        exif-data img {\n          margin: 0;\n          opacity: 0;\n          padding: 0;\n          height: 500px;\n          pointer-events: none;\n        }\n        .wrap {\n          border-bottom: 1px solid black;\n          justify-content: center;\n          display: flex;\n        }\n      "])))]}},{key:"tag",get:function(){return"image-inspector"}},{key:"properties",get:function(){return{noLeft:{type:Boolean,attribute:"no-left"},degrees:{type:Number,reflect:!0},src:{type:String},hoverClass:{type:String,attribute:"hover-class"}}}}],(c=[{key:"render",value:function(){return t.html(u||(u=l(['\n      <div class="wrap">\n        <simple-icon-button\n          title="Zoom in"\n          icon="zoom-in"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Zoom out"\n          icon="zoom-out"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Rotate right"\n          icon="image:rotate-right"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Rotate left"\n          icon="image:rotate-left"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Mirror image"\n          icon="image:flip"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Open in new window"\n          icon="launch"\n          href="','"\n          target="_blank"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="EXIF Data"\n          icon="image:camera-roll"\n          @click="','"\n        ></simple-icon-button>\n        <slot name="toolbar"></slot>\n      </div>\n      <exif-data\n        id="exif"\n        @click=','\n        no-events\n        ?no-left="','"\n        ><img src="','" />\n      </exif-data>\n      <img-pan-zoom id="img" src="','"></img-pan-zoom>\n      <slot></slot>\n    '])),this.zoomIn,this.zoomOut,this.rotateRight,this.rotateLeft,this.mirrorImage,this.src,this.exifDataEvent,this.hideData,this.noLeft,this.src,this.src)}},{key:"exifDataEvent",value:function(e){this.shadowRoot.querySelector("#exif").classList.contains("showData")?this.shadowRoot.querySelector("#exif").classList.remove("showData"):(this.shadowRoot.querySelector("#exif").classList.add("showData"),this.shadowRoot.querySelector("#exif").updateExif(!0))}},{key:"hideData",value:function(e){this.shadowRoot.querySelector("#exif").classList.remove("showData")}},{key:"firstUpdated",value:function(e){a(o(d.prototype),"firstUpdated",this)&&a(o(d.prototype),"firstUpdated",this).call(this,e),this.__img=this.shadowRoot.querySelector("#img"),this.shadowRoot.querySelector("#exif").alignTarget=this.__img,this.shadowRoot.querySelector("#exif").alignTargetTop="0px",this.shadowRoot.querySelector("#exif").updateExif()}},{key:"rotateRight",value:function(){this.degrees+=90,this.__img.style.transform="rotate("+this.degrees+"deg)",this.__img.classList.contains("top-rotated")?this.__img.classList.remove("top-rotated"):this.__img.classList.add("top-rotated")}},{key:"rotateLeft",value:function(){this.degrees+=-90,this.__img.style.transform="rotate("+this.degrees+"deg)",this.__img.classList.contains("top-rotated")?this.__img.classList.remove("top-rotated"):this.__img.classList.add("top-rotated")}},{key:"mirrorImage",value:function(){"scaleX(1)"===this.__img.style.transform?this.__img.style.transform="scaleX(-1)":this.__img.style.transform="scaleX(1)"}},{key:"zoomIn",value:function(){this.__img.zoomIn()}},{key:"zoomOut",value:function(){this.__img.zoomOut()}}])&&n(r.prototype,c),f&&n(r,f),Object.defineProperty(r,"prototype",{writable:!1}),d}(t.LitElement);window.customElements.define(f.tag,f),e.ImageInspector=f,Object.defineProperty(e,"__esModule",{value:!0})}));
