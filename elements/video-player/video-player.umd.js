!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/media-behaviors/media-behaviors.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("@lrnwebcomponents/a11y-media-player/a11y-media-player.js"),require("@lrnwebcomponents/i18n-manager/lib/I18NMixin.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/media-behaviors/media-behaviors.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","@lrnwebcomponents/a11y-media-player/a11y-media-player.js","@lrnwebcomponents/i18n-manager/lib/I18NMixin.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VideoPlayer={},e.lit,e.simpleColors_js,e.schemaBehaviors_js,e.mediaBehaviors_js,e.IntersectionObserverMixin_js,null,e.I18NMixin_js)}(this,(function(e,t,r,i,o,n,a,s){"use strict";function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return b(this,r)}}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var i=g(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},v.apply(this,arguments)}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var O,S,M,j,D,x,P,I,C,R,_,E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var r,i,o,n=m(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=n.call(this)).crossorigin="anonymous",e.dark=!1,e.darkTranscript=!1,e.disableInteractive=!1,e.hideTimestamps=!1,e.hideTranscript=!1,e.hideYoutubeLink=!1,e.lang="en",e.learningMode=!1,e.linkable=!1,e.preload="metadata",e.sources=[],e.stickyCorner="top-right",e.tracks=[],e.setSourceData(),e.observer.observe(y(e),{childList:!0,subtree:!1}),e.t=e.t||{},e.t=l(l({},e.t),{},{embeddedMedia:"embedded media"}),e.registerLocalization({context:y(e),localesPath:new URL("./locales","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("video-player.umd.js",document.baseURI).href).href,locales:["es"]}),e}return r=a,o=[{key:"styles",get:function(){return[].concat(w(v(h(a),"styles",this)),[t.css(_||(_=k(["\n:host {\n  display: block;\n  margin: 0 0 15px;\n  line-height: 16px !important;\n  font-size: 16px !important;\n}\n\n.video-caption {\n  font-style: italic;\n  margin: 0;\n  padding: 8px;\n}\n      "])))])}},{key:"haxProperties",get:function(){return{canScale:{min:25,step:12.5},canPosition:!0,canEditSource:!0,gizmo:{title:"Video player",description:"This can present video in a highly accessible manner regardless of source.",icon:"av:play-circle-filled",color:"red",groups:["Video","Media"],handles:[{type:"video",type_exclusive:!0,source:"source",title:"caption",caption:"caption",description:"caption",color:"primaryColor"}],meta:{author:"LRNWebComponents"}},settings:{configure:[{property:"source",title:"Source",description:"The URL for this media.",inputMethod:"haxupload",noCamera:!0,noVoiceRecord:!0,validationType:"url"},{property:"track",title:"Closed captions",description:"The URL for the captions file.",inputMethod:"haxupload",noCamera:!0,noVoiceRecord:!0,validationType:"url"},{property:"thumbnailSrc",title:"Thumbnail image",description:"Optional. The URL for a thumbnail/poster image.",inputMethod:"haxupload",noVoiceRecord:!0,validationType:"url"},{property:"mediaTitle",title:"Title",description:"Simple title for under video",inputMethod:"textfield",validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color for the player.",inputMethod:"colorpicker"},{attribute:"dark",title:"Dark theme",description:"Enable dark theme for the player.",inputMethod:"boolean"}],advanced:[{property:"crossorigin",title:"Crossorigin",description:"Indicates whether to use CORS.",inputMethod:"select",options:{"":"",anonymous:"anonymous","use-credentials":"use-credentials"}},{property:"learningMode",title:"Enable learning mode",description:"Disables fast forward and rewind.",inputMethod:"boolean"},{property:"darkTranscript",title:"Dark theme for transcript",description:"Enable dark theme for the transcript.",inputMethod:"boolean"},{property:"disableInteractive",title:"Disable Interactive",description:"Disable interactive mode that makes transcript clickable.",inputMethod:"boolean"},{property:"height",title:"Height",inputMethod:"textfield",required:!1,validationType:"text"},{property:"hideTimestamps",title:"Hide timestamps",description:"Hide the time stamps on the transcript.",inputMethod:"boolean"},{property:"hideTranscript",title:"Hide Transcript",description:"Hide transcript by default.",inputMethod:"boolean"},{property:"lang",title:"Language",description:"Language of the media.",inputMethod:"textfield",validationType:"text"},{property:"linkable",title:"Include a share link?",description:"Provides a link to share the video.",inputMethod:"boolean"},{property:"hideYoutubeLink",title:"Remove open on YouTube button",description:"Removes the button for opening the video on YouTube.",inputMethod:"boolean"},{property:"preload",title:"Preload source(s).",description:"How the sources should be preloaded, i.e. auto, metadata (default), or none.",inputMethod:"select",options:{preload:"Preload all media",metadata:"Preload media metadata only",none:"Don't preload anything"}},{property:"stickyCorner",title:"Sticky Corner",description:"Set the corner where a video plays when scrolled out of range, or choose none to disable sticky video.",inputMethod:"select",options:{none:"none","top-left":"top-left","top-right":"top-right","bottom-left":"bottom-left","bottom-right":"bottom-right"}},{property:"sources",title:"Other sources",description:"List of other sources",inputMethod:"array",properties:[{property:"src",title:"Source",description:"The URL for this source.",inputMethod:"haxupload",required:!0,noCamera:!0,noVoiceRecord:!0,validationType:"url"},{property:"type",title:"Type",description:"Media type data",inputMethod:"select",options:{"audio/aac":"acc audio","audio/flac":"flac audio","audio/mp3":"mp3 audio","video/mp4":"mp4 video","video/mov":"mov video","audio/ogg":"ogg audio","video/ogg":"ogg video","audio/wav":"wav audio","audio/webm":"webm audio","video/webm":"webm video"}}]},{property:"tracks",title:"Track list",description:"Tracks of different languages of closed captions",inputMethod:"array",properties:[{property:"kind",title:"Kind",description:"Kind of track",inputMethod:"select",options:{subtitles:"subtitles"}},{property:"label",title:"Label",description:'The human-readable name for this track, eg. "English Subtitles"',inputMethod:"textfield"},{property:"src",title:"Source",description:"The source for the captions file.",inputMethod:"haxupload",required:!1,noCamera:!0,noVoiceRecord:!0,validationType:"url"},{property:"srclang",title:'Two letter, language code, eg. \'en\' for English, "de" for German, "es" for Spanish, etc.',description:"Label",inputMethod:"textfield"}]},{property:"width",title:"width",inputMethod:"textfield",required:!1,validationType:"text"}]},saveOptions:{unsetAttributes:["__utils","__stand-alone","colors"]},demoSchema:[{tag:"video-player",properties:{style:"width: 100%; margin: 0px auto; display: block;",accentColor:"orange",dark:!0,crossorigin:"anonymous",lang:"en",mediaTitle:"Why do I need to go anywhere?",preload:"metadata",source:"https://www.youtube.com/watch?v=LrS7dqokTLE",stickyCorner:"top-right",track:"https://haxtheweb.org/files/HAXshort.vtt",youtubeId:"LrS7dqokTLE?undefined",sourceType:"youtube"},content:'    <track src="https://haxtheweb.org/files/HAXshort.vtt" kind="subtitles" label="English" slot="track">\n\n'}]}}},{key:"properties",get:function(){return l(l({},v(h(a),"properties",this)),{},{accentColor:{type:String,attribute:"accent-color",reflect:!0},crossorigin:{type:String,attribute:"crossorigin",reflect:!0},dark:{type:Boolean,attribute:"dark",reflect:!0},darkTranscript:{type:Boolean},disableInteractive:{type:Boolean},height:{type:String},hideTimestamps:{type:Boolean,attribute:"hide-timestamps"},hideTranscript:{type:Boolean,attribute:"hide-transcript"},id:{type:String,attribute:"id",reflect:!0},learningMode:{type:Boolean,attribute:"learning-mode"},lang:{type:String},linkable:{type:Boolean},mediaTitle:{type:String,attribute:"media-title",reflect:!0},hideYoutubeLink:{type:Boolean,attribute:"hide-youtube-link"},preload:{type:String},source:{type:String,attribute:"source",reflect:!0},sources:{type:Array},stickyCorner:{type:String,attribute:"sticky-corner",reflect:!0},track:{type:String},tracks:{type:Array},thumbnailSrc:{type:String,attribute:"thumbnail-src",reflect:!0},width:{type:String}})}},{key:"tag",get:function(){return"video-player"}}],(i=[{key:"render",value:function(){return t.html(O||(O=k(["\n\n",""])),this.elementVisible?t.html(S||(S=k(["",""])),this.isA11yMedia?t.html(I||(I=k(['\n      <a11y-media-player\n        accent-color="','"\n        ?audio-only="','"\n        ?dark="','"\n        ?dark-transcript="','"\n        ?disable-interactive="','"\n        ?hide-timestamps="','"\n        ?hide-transcript="','"\n        ?hide-youtube-link="','"\n        id="','"\n        lang="','"\n        ?learning-mode="','"\n        ?linkable="','"\n        preload="','"\n        media-title="','"\n        .sources="','"\n        ?stand-alone="','"\n        sticky-corner="','"\n        .thumbnail-src="','"\n        .tracks="','"\n        .crossorigin="','"\n        .width="','"\n        .height="','"\n        .youtubeId="','"\n        >\n      </a11y-media-player><slot hidden></slot>'])),this.accentColor,this.audioOnly,this.dark,this.darkTranscript,this.disableInteractive,this.hideTimestamps,this.hideTranscript,this.hideYoutubeLink,this.playerId,this.lang||"en",this.learningMode,this.linkable,this.preload||"metadata",this.mediaTitle||"",this.sourceProperties,this.standAlone,this.stickyCorner||"top-right",this.thumbnailSrc,this.trackProperties,this.crossorigin||"anonymous",this.width,this.height,this.youtubeId||void 0):t.html(M||(M=k(['\n      <div class="responsive-video-container" .lang="','">\n        ',"\n        ",'\n      </div>\n      <div id="videocaption" class="video-caption">\n        <p>\n          ','\n          <span class="media-type print-only">(',')</span>\n        </p>\n        <slot name="caption"></slot>\n      </div><slot hidden></slot>'])),this.lang||void 0,this.sandboxed?t.html(j||(j=k([""]))):t.html(D||(D=k(['\n          <webview\n            resource="','-video"\n            .src="','"\n            .width="','"\n            .height="','"\n            frameborder="0">\n          </webview>'])),this.schemaResourceID,this.sourceData&&this.sourceData[0]&&this.sourceData[0].src||void 0,this.width||void 0,this.height||void 0),this.sandboxed||!this.iframed?t.html(x||(x=k([""]))):t.html(P||(P=k(['\n          <iframe\n            loading="lazy"\n            resource="','-video"\n            .src="','"\n            width="','"\n            height="','"\n            frameborder="0"\n            webkitallowfullscreen=""\n            mozallowfullscreen=""\n            allowfullscreen=""\n          ></iframe>\n        '])),this.schemaResourceID,this.sourceData&&this.sourceData[0]&&this.sourceData[0].src||void 0,this.width,this.height),this.mediaTitle,this.t.embeddedMedia)):"")}},{key:"disconnectedCallback",value:function(){this.observer&&this.observer.disconnect&&this.observer.disconnect(),v(h(a.prototype),"disconnectedCallback",this).call(this)}},{key:"html5",get:function(){return t.html(C||(C=k(["\n      ","\n      ","\n    "])),this.sourceData.filter((function(e){return"youtube"!==e.type})).map((function(e){t.html(R||(R=k(['\n            <source\n              .src="','"\n              .type="','"\n            />\n          '])),e.src||void 0,e.type||void 0)})),this.trackData.map((function(e){'<track\n          .src="'.concat(e.src||void 0,'"\n          .kind="').concat(e.kind||void 0,'"\n          .label="').concat(e.label||void 0,'"\n          .srclang="').concat(e.lang||void 0,'"\n        />')})))}},{key:"iframed",get:function(){return!(!(this.sourceData&&this.sourceData.length>0&&void 0!==this.sourceData[0]&&window.MediaBehaviors.Video._sourceIsIframe(this.sourceData[0].src))||this.sandboxed)}},{key:"isA11yMedia",get:function(){return!this.sandboxed&&("youtube"==this.sourceType||"local"==this.sourceType||this.sourceData.length<1)}},{key:"observer",get:function(){var e=this;return new MutationObserver((function(){return e.setSourceData()}))}},{key:"sandboxed",get:function(){return!!(this.sourceData&&this.sourceData.length>0&&void 0!==u(this.sourceData[0])&&window.MediaBehaviors.Video._sourceIsIframe(this.sourceData[0].src)&&"function"==typeof document.createElement("webview").reload)}},{key:"sourceProperties",get:function(){var e=this,t="string"==typeof this.sources?JSON.parse(this.sources):this.sources.slice();return this.source&&t.unshift({src:this.source}),t&&t.length>0&&t.forEach((function(t){t.type=t.type||e._computeMediaType(t.src),t.src=e._computeSRC(t.src,t.type)})),t}},{key:"trackProperties",get:function(){var e=this,t="string"==typeof this.tracks?JSON.parse(this.tracks):this.tracks.slice();return this.track&&t.unshift({src:this.track}),t&&t.length>0&&t.forEach((function(t){t.srclang=t.srclang||e.lang,t.kind=t.kind||"subtitles",t.label=t.label||t.kind||t.lang})),t}},{key:"sourceData",get:function(){var e=this,t=this.sourceProperties.slice();return this.querySelectorAll("video source, audio source, iframe").forEach((function(t){e.sources.filter((function(e){return e.src===t.src})).length<1&&e.sources.unshift({src:t.src,type:t.type||e._computeMediaType(t.src)})})),t}},{key:"audioOnly",get:function(){return this.sourceData.filter((function(e){return e.type.indexOf("audio")>-1})).length>1}},{key:"standAlone",get:function(){return void 0===this.trackData||null===this.trackData||this.trackData.length<1}},{key:"sourceType",get:function(){return this.sourceData&&this.sourceData.length>0&&void 0!==this.sourceData[0]&&"undefined"!==u(this.sourceData[0].src)?window.MediaBehaviors.Video.getVideoType(this.sourceData[0].src):null}},{key:"trackData",get:function(){var e=this,t="string"==typeof this.tracks?JSON.parse(this.tracks).slice():this.tracks.slice();return this.querySelectorAll("video track, audio track").forEach((function(t){if(e.tracks.filter((function(e){return e.src===t.src})).length<1){var r={src:t.src};t.lang&&(r.lang=t.lang),t.srclang&&(r.srclang=t.srclang),t.label&&(r.label=t.label),t.kind&&(r.kind=t.kind),e.tracks.unshift(r)}t.remove()})),void 0!==this.track&&null!==this.track&&""!==this.track&&t.push({src:this.track,srclang:this.lang,label:"en"===this.lang?"English":this.lang,kind:"subtitles"}),t}},{key:"youtubeId",get:function(){if(this.sourceData&&this.sourceData[0]&&"youtube"===this.sourceType)return this._computeSRC(this.sourceData[0].src).replace(/.*\/embed\//,"")}},{key:"playerId",get:function(){return"".concat(this.id||this.schemaResourceID,"-media")}},{key:"_computeMediaType",value:function(e){var t="",r=function(r,i){i.forEach((function(i){""===t&&void 0!==u(e)&&null!==e&&e.toLowerCase().indexOf("."+i)>-1&&(t=r+"/"+i)}))};return r("audio",["aac","flac","mp3","oga","wav"]),r("video",["mov","mp4","ogv","webm"]),t}},{key:"_computeSRC",value:function(e,t){return null!==e&&void 0!==u(e)&&(t=t||window.MediaBehaviors.Video.getVideoType(e),e=window.MediaBehaviors.Video.cleanVideoSource(e,t),"vimeo"==t?(this.vimeoTitle?e+="?title=1":e+="?title=0",this.vimeoByline?e+="&byline=1":e+="&byline=0",this.vimeoPortrait?e+="&portrait=1":e+="&portrait=0"):"dailymotion"==t&&(e+="&ui-start-screen-info=false",e+="&ui-logo=false",e+="&sharing-enable=false",e+="&endscreen-enable=false")),e}},{key:"haxHooks",value:function(){return{postProcessNodeToContent:"haxpostProcessNodeToContent"}}},{key:"haxpostProcessNodeToContent",value:function(e){return e=(e=e.replace(' sources="[]",',"")).replace(' tracks="[]",',"")}},{key:"setSourceData",value:function(){var e=this.source;this.source="",this.source=e}}])&&d(r.prototype,i),o&&d(r,o),Object.defineProperty(r,"prototype",{writable:!1}),a}(n.IntersectionObserverMixin(o.MediaBehaviorsVideo(i.SchemaBehaviors(s.I18NMixin(r.SimpleColors)))));window.customElements.define(E.tag,E),e.VideoPlayer=E,Object.defineProperty(e,"__esModule",{value:!0})}));
