!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/oer-schema/lib/oerschema.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/oer-schema/lib/oerschema.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).OerSchema={},e.lit,e.schemaBehaviors_js,e.oerschema_js)}(this,(function(e,t,r,n){"use strict";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=f(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},y.apply(this,arguments)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h,b,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(f,e);var r,o,a,l=p(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=l.call(this)).text="",e.oerProperty="name",e.typeof="Resource",e}return r=f,a=[{key:"styles",get:function(){return[t.css(b||(b=d(["\n        :host {\n          display: inline-block;\n        }\n      "])))]}},{key:"tag",get:function(){return"oer-schema"}},{key:"properties",get:function(){return i(i({},y(u(f),"properties",this)),{},{text:{type:String},oerProperty:{type:String,attribute:"oer-property"},typeof:{type:String},relatedResource:{type:String,attribute:"related-resource"}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Schema",description:"Schematized element area",icon:"hax:oerschema",color:"blue",groups:["Instructional"],handles:[{type:"inline",text:"text"}],meta:{author:"ELMS:LN",inlineOnly:!0}},settings:{configure:[{slot:"",title:"Text",inputMethod:"textfield",icon:"editor:title"},{property:"typeof",title:"Schema typeof",inputMethod:"select",allowNull:!0,options:(new n.OERSchema).types},{property:"oerProperty",title:"Schema property",description:"The OER Schema property this represents",inputMethod:"select",allowNull:!0,options:{name:"name",additionalType:"additionalType",description:"description",image:"image",mainEntityOfPage:"mainEntityOfPage",sameAs:"sameAs",uri:"uri"}},{property:"relatedResource",title:"Related resource",description:"A reference to the related Schema resource",inputMethod:"textfield",icon:"editor:title"}],advanced:[]},saveOptions:{unsetAttributes:["_oerlink"]}}}}],(o=[{key:"render",value:function(){return t.html(h||(h=d(['\n      <span property="oer:','">\n        <slot></slot> ',"\n      </span>\n    "])),this.oerProperty,this.text)}},{key:"updated",value:function(e){var t=this;y(u(f.prototype),"updated",this)&&y(u(f.prototype),"updated",this).call(this,e),e.forEach((function(e,r){"relatedResource"==r&&(t._OERLink=t._generateforComponentLink(t.relatedResource))}))}},{key:"_generateforComponentLink",value:function(e){if(document&&document.head){this._OERLink&&document.head.removeChild(this._OERLink);var t=document.createElement("link");return t.setAttribute("property","oer:forComponent"),t.setAttribute("content",this.relatedResource),document.head.appendChild(t),t}}}])&&c(r.prototype,o),a&&c(r,a),Object.defineProperty(r,"prototype",{writable:!1}),f}(r.SchemaBehaviors(t.LitElement));window.customElements.define(m.tag,m),e.OerSchemaElement=m,Object.defineProperty(e,"__esModule",{value:!0})}));
