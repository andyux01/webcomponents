!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@polymer/polymer/lib/elements/dom-if.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@polymer/polymer/lib/elements/dom-if.js"],t):t((e=e||self).PdfBrowserViewer={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(){var e,t,n=(e=['\n      <style>\n        :host {\n          display: none;\n        }\n        :host([file]) {\n          display: inherit;\n        }\n      </style>\n\n      <template is="dom-if" if="[[card]]">\n        <paper-card heading="[[heading]]" elevation="[[elevation]]">\n          <div class="card-content">\n            <object\n              data="[[file]]"\n              type="application/pdf"\n              width="[[width]]"\n              height="[[height]]"\n            >\n              <p>\n                {{notSupportedMessage}}\n                <a href="[[file]]">{{notSupportedLinkMessage}}</a>\n              </p>\n            </object>\n          </div>\n          <div class="card-actions">\n            <paper-button on-click="_download">[[downloadLabel]]</paper-button>\n          </div>\n        </paper-card>\n      </template>\n\n      <template is="dom-if" if="[[!card]]">\n        <object\n          data="[[file]]"\n          type="application/pdf"\n          width="[[width]]"\n          height="[[height]]"\n        >\n          <p>\n            {{notSupportedMessage}}\n            <a href="[[file]]">{{notSupportedLinkMessage}}</a>\n          </p>\n        </object>\n      </template>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return a=function(){return n},n}var l=function(e){function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),e=i(this,r(l).call(this)),import("@polymer/paper-card/paper-card.js"),import("@polymer/paper-button/paper-button.js"),e}var p,u,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(l,t.PolymerElement),p=l,s=[{key:"template",get:function(){return t.html(a())}},{key:"tag",get:function(){return"pdf-browser-viewer"}},{key:"properties",get:function(){return{file:{type:String,value:void 0,reflectToAttribute:!0},notSupportedMessage:{type:String,value:"It appears your Web browser is not configured to display PDF files. No worries, just"},notSupportedLinkMessage:{type:String,value:"click here to download the PDF file."},height:{type:String,value:"400px"},width:{type:String,value:"100%"},card:{type:Boolean,value:!1},downloadLabel:{type:String,value:"Download"},elevation:{type:String,value:"1"}}}}],(u=[{key:"clear",value:function(){this.file=void 0}},{key:"_download",value:function(){window.location=this.file}}])&&n(p.prototype,u),s&&n(p,s),l}();window.customElements.define(l.tag,l),e.PdfBrowserViewer=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=pdf-browser-viewer.umd.js.map
