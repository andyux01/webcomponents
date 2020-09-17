!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).DragNDrop={})}(this,function(t){"use strict";function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t,e,r){return(s=l()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&u(i,r.prototype),i}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return s(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,t)})(t)}function d(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(r):i.value}})(t,e,r||t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(s,c(HTMLElement));var e,n,i=(e=s,n=l(),function(){var t,r=a(e);if(n){var i=a(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return d(this,t)});function s(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this)).__dragging={},t.tag=s.tag;var r=s.properties;for(var n in r)r.hasOwnProperty(n)&&(t.hasAttribute(n)?t[n]=t.getAttribute(n):(t.setAttribute(n,r[n].value),t[n]=r[n].value));return t.template=document.createElement("template"),t.attachShadow({mode:"open"}),e||t.render(),t}return r(s,[{key:"html",get:function(){return'\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([editing]) .items ::slotted(.hold) {\n  border: solid 5px #ccc;\n}\n\n:host([editing]) .items ::slotted([data-droppable]) {\n  margin: 10px;\n  border: solid 3px salmon;\n  background: white;\n}\n\n:host([editing]) .items ::slotted(.hovered) {\n  background: #f4f4f4;\n  border-style: dashed;\n}\n        </style>\n<div class="items">\n  <slot></slot>\n</div>'}}],[{key:"properties",get:function(){return o(o({},f(a(s),"properties",this)),{},{editing:{name:"editing",type:Boolean}})}},{key:"tag",get:function(){return"drag-n-drop"}}]),r(s,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"_copyAttribute",value:function(t,e){var r,n=this.shadowRoot.querySelectorAll(e),i=this.getAttribute(t),o=null==i?"removeAttribute":"setAttribute",a=g(n);try{for(a.s();!(r=a.n()).done;){r.value[o](t,i)}}catch(t){a.e(t)}finally{a.f()}}},{key:"_setProperty",value:function(t){var e=t.name,r=t.value;this[e]=r}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"attributeChangedCallback",value:function(t,e,r){if("editing"===t){var n=this.querySelectorAll("[data-draggable]"),i=this.querySelectorAll("[data-droppable]");if(r){var o,a=g(i);try{for(a.s();!(o=a.n()).done;){var u=o.value;u.setAttribute("droppable","true"),u.addEventListener("dragover",this.dragOver.bind(this)),u.addEventListener("dragenter",this.dragEnter.bind(this)),u.addEventListener("dragleave",this.dragLeave.bind(this)),u.addEventListener("drop",this.dragDrop.bind(this))}}catch(t){a.e(t)}finally{a.f()}var l,s=g(n);try{for(s.s();!(l=s.n()).done;){var c=l.value;c.setAttribute("draggable","true"),c.addEventListener("dragstart",this.dragStart.bind(this)),c.addEventListener("dragend",this.dragEnd.bind(this))}}catch(t){s.e(t)}finally{s.f()}}else{var d,f=g(i);try{for(f.s();!(d=f.n()).done;){var p=d.value;p.removeAttribute("droppable"),p.removeEventListener("dragover",this.dragOver.bind(this)),p.removeEventListener("dragenter",this.dragEnter.bind(this)),p.removeEventListener("dragleave",this.dragLeave.bind(this)),p.removeEventListener("drop",this.dragDrop.bind(this))}}catch(t){f.e(t)}finally{f.f()}var h,v=g(n);try{for(v.s();!(h=v.n()).done;){var y=h.value;y.removeAttribute("draggable"),y.removeEventListener("dragstart",this.dragStart.bind(this)),y.removeEventListener("dragend",this.dragEnd.bind(this))}}catch(t){v.e(t)}finally{v.f()}}}}},{key:"dragStart",value:function(t){var e=this;this.__dragging=t.target,this.__dragging.className+=" hold",setTimeout(function(){return e.__dragging.className="invisible"},0),t.stopPropagation(),t.stopImmediatePropagation()}},{key:"dragEnd",value:function(t){this.__dragging.className="fill"}},{key:"dragOver",value:function(t){t.preventDefault()}},{key:"dragEnter",value:function(t){t.preventDefault(),t.target.className+=" hovered"}},{key:"dragLeave",value:function(t){t.target.className="empty"}},{key:"dragDrop",value:function(t){t.target.className="empty",t.target.appendChild(this.__dragging)}},{key:"editing",get:function(){this.getAttribute("editing")},set:function(t){t?this.setAttribute("editing",t):this.removeAttribute("editing")}}],[{key:"observedAttributes",get:function(){return["editing"]}}]),s}();window.customElements.define(h.tag,h),t.DragNDrop=h,Object.defineProperty(t,"__esModule",{value:!0})});
