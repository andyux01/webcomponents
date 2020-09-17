!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@polymer/paper-progress/paper-progress.js"),require("@lrnwebcomponents/simple-fields/lib/simple-fields-field.js"),require("@material/mwc-button/mwc-button.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@polymer/paper-progress/paper-progress.js","@lrnwebcomponents/simple-fields/lib/simple-fields-field.js","@material/mwc-button/mwc-button.js"],n):n((e=e||self).SimpleLogin={},e.litElement_js,e.simpleColors_js)}(this,function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(n){i(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p(this,t)}}function d(e,n,t){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=l(e)););return e}(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function g(){var e=f(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#loginform {\n  width: var(--login-form-width, 450px);\n  height: var(--login-form-height, auto);\n  --simple-camera-snap-color: var(--login-form-color, #36bed4);\n  --simple-camera-snap-error: var(--login-form-error, red);\n  --simple-camera-snap-width: var(--login-form-image-width, 200px);\n  --simple-camera-snap-height: var(--login-form-image-height, 200px);\n  --simple-camera-snap-background: var(--login-form-background, white);\n  --simple-camera-snap-border-radius: var(--login-form-image-bnorder-radius,100%);\n  box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),\n  0 4px 22px 3px rgba(0, 0, 0, 0.12),\n  0 6px 7px -4px rgba(0, 0, 0, 0.4);\n}\n\n#loginformcontent {\n  padding: var(--login-form-padding, 48px);\n}\n\n#loginformcontent>* {\n  margin-top: var(--login-form-margin-top, var(--login-form-margin, 8px));\n  margin-bottom: var(--login-form-margin-bottom, var(--login-form-margin, 8px));\n}\n\n#loginbtn,\n#buttons ::slotted(mwc-button) {\n  width: var(--login-btn-width, auto);\n  margin: var(--login-btn-margin, 24px auto 0);\n  display: var(--login-btn-display, inline-flex);\n}\n\n#loginbtn[disabled] {\n  background-color: var(--login-btn-disabled-background-color, var(--simple-colors-default-theme-accent-12, #000000));\n}\n\nh1 {\n  margin: 0;\n}\n\nh2 {\n  margin: 0;\n}\n\npaper-progress {\n  width: 100%;\n}\n\n::slotted(simple-login-avatar) {\n  margin: 0 auto;\n}\n\n#errormsg {\n  margin-top: 16px;\n  color: var(--login-error-label-color, var(--error-color));\n}\n      "]);return g=function(){return e},e}function m(){var e=f(['\n\n<div id="loginform">\n  <paper-progress ?disabled="','" indeterminate></paper-progress>\n  <div id="loginformcontent">\n    <h1>',"</h1>\n    <h2>",'</h2>\n    <div id="errormsg">','</div>\n    <slot></slot>\n    <simple-fields-field\n      id="userinput"\n      value="','"\n      @value-changed="','"\n      type="text"\n      ?disabled="','"\n      label="','"\n      required\n      error-message="','"\n    ></simple-fields-field>\n    <simple-fields-field\n      id="passinput"\n      required\n      value="','"\n      @value-changed="','"\n      ?disabled="','"\n      type="password"\n      label="','"\n      error-message="','"\n    ></simple-fields-field>\n    <mwc-button @click="','" ?disabled="','"\n    id="loginbtn" raised>','\n    </mwc-button>\n    <span id="buttons"><slot name="buttons"></slot></span>\n  </div>\n</div>']);return m=function(){return e},e}var b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(i,t.SimpleColors);var r=c(i);function i(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(e=r.call(this)).password="",e.username="",e.loading=!1,e.userInputLabel="User name",e.userInputErrMsg="User name required",e.passwordInputLabel="Password",e.passwordInputErrMsg="Password required",e.loginBtnText="Login",e}return o(i,[{key:"render",value:function(){return n.html(m(),!this.loading,this.title,this.subtitle,this.errorMsg,this.username,this._usernameChanged,this.loading,this.userInputLabel,this.userInputErrMsg,this.password,this._passwordChanged,this.loading,this.passwordInputLabel,this.passwordInputErrMsg,this._login,this.loading,this.loginBtnText)}}],[{key:"styles",get:function(){return[n.css(g())]}},{key:"properties",get:function(){return a(a({},d(l(i),"properties",this)),{},{title:String,subtitle:String,errorMsg:String,username:{type:String},password:{type:String},loading:{type:Boolean},userInputLabel:{type:String,attribute:"user-input-label"},userInputErrMsg:{type:String},passwordInputLabel:{type:String,attribute:"password-input-label"},passwordInputErrMsg:{type:String},loginBtnText:{type:String,attribute:"login-btn-text"}})}},{key:"tag",get:function(){return"simple-login"}}]),o(i,[{key:"updated",value:function(e){var n=this;d(l(i.prototype),"updated",this).call(this),e.forEach(function(e,t){["username","password"].includes(t)&&n.dispatchEvent(new CustomEvent("".concat(t,"-changed"),{detail:{value:n[t]}}))})}},{key:"firstUpdated",value:function(){var e=this;setTimeout(function(){e.shadowRoot.querySelector("#loginform").addEventListener("keypress",e._keyPressLogin.bind(e))},0)}},{key:"_keyPressLogin",value:function(e){if(13==e.keyCode)return this._login(),!1}},{key:"_passwordChanged",value:function(e){this.password=e.detail.value}},{key:"_usernameChanged",value:function(e){this.username=e.detail.value}},{key:"_login",value:function(){this.shadowRoot.querySelector("#userinput").validate()&&this.shadowRoot.querySelector("#passinput").validate()&&this.dispatchEvent(new CustomEvent("simple-login-login",{cancelable:!0,bubbles:!0,composed:!0,detail:{u:this.shadowRoot.querySelector("#userinput").value,p:this.shadowRoot.querySelector("#passinput").value}}))}}]),i}();window.customElements.define(b.tag,b),e.SimpleLogin=b,Object.defineProperty(e,"__esModule",{value:!0})});
