!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],e):e((t=t||self).CountUpElement={},t.litElement_js,t.IntersectionObserverMixin_js)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=u(t);if(e){var r=u(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return c(this,n)}}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var d=function(){return(d=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},m=function(){function t(t,e,n){var i=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(e/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Math.round(i.frameVal*i.decimalMult)/i.decimalMult,i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,a,o,s=t<0?"-":"";if(e=Math.abs(t).toFixed(i.options.decimalPlaces),r=(n=(e+="").split("."))[0],a=n.length>1?i.options.decimal+n[1]:"",i.options.useGrouping){o="";for(var u=0,l=r.length;u<l;++u)0!==u&&u%3==0&&(o=i.options.separator+o),o=r[l-u-1]+o;r=o}return i.options.numerals&&i.options.numerals.length&&(r=r.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),a=a.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),s+i.options.prefix+r+a+i.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=d({},this.defaults,n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();function g(){var t=h(["\n:host {\n  display: inline-flex;\n  --count-up-color: #000000;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.wrapper {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n#counter {\n  color: var(--count-up-color);\n  font-weight: var(--count-up-number-font-weight);\n  font-size: var(--count-up-number-font-size);\n}\n      "]);return g=function(){return t},t}function y(){var t=h(['\n\n<div class="wrapper">\n  <slot name="prefix"></slot>\n  <div id="counter"></div>\n  <slot name="suffix"></slot>\n</div>']);return y=function(){return t},t}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(a,n.IntersectionObserverMixin(e.LitElement));var i=p(a);function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this)).start=0,t.end=100,t.duration=2.5,t.noeasing=!1,t.decimalplaces=0,t.separator=",",t.decimal=".",t.prefixtext=" ",t.suffixtext=" ",t}return r(a,[{key:"render",value:function(){return e.html(y())}}],[{key:"styles",get:function(){return[e.css(g())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Count up",description:"count up js wrapper with minimal styling",icon:"icons:android",color:"green",groups:["Up"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"start",description:"",inputMethod:"textfield"},{property:"end",description:"",inputMethod:"textfield"},{property:"duration",description:"",inputMethod:"textfield"},{property:"noeasing",description:"",inputMethod:"boolean"},{property:"decimalplaces",description:"",inputMethod:"textfield"},{property:"separator",description:"",inputMethod:"textfield"},{property:"decimal",description:"",inputMethod:"textfield"},{property:"prefix",description:"",inputMethod:"textfield"},{property:"suffix",description:"",inputMethod:"textfield"}],advanced:[]},saveOptions:{unsetAttributes:["element-visible"]}}}},{key:"properties",get:function(){return s(s({},f(u(a),"properties",this)),{},{start:{type:Number},end:{type:Number},duration:{type:Number},noeasing:{type:Boolean},decimalplaces:{type:Number},separator:{type:String},decimal:{type:String},prefixtext:{type:String},suffixtext:{type:String},thresholds:{type:Array},rootMargin:{type:String,attribute:"root-margin"},ratio:{type:Number,reflect:!0},elementVisible:{type:Boolean}})}},{key:"tag",get:function(){return"count-up"}}]),r(a,[{key:"firstUpdated",value:function(){var t={startVal:this.start,decimalPlaces:this.decimalplaces,duration:this.duration,useEasing:!this.noeasing,separator:this.separator,decimal:this.decimal,prefix:this.prefixtext,suffix:this.suffixtext};this._countUp=new m(this.shadowRoot.querySelector("#counter"),this.end,t)}},{key:"updated",value:function(t){var e=this;t.forEach(function(t,n){"elementVisible"==n&&e[n]&&e._countUp.start()})}}]),a}();customElements.define(b.tag,b),t.CountUp=m,t.CountUpElement=b,Object.defineProperty(t,"__esModule",{value:!0})});
