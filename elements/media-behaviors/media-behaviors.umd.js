!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e=e||self).MediaBehaviors={})}(this,function(e){"use strict";function o(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,o){return(i=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function r(e,o){return!o||"object"!=typeof o&&"function"!=typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function n(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var i,n=t(e);if(o){var u=t(this).constructor;i=Reflect.construct(n,arguments,u)}else i=n.apply(this,arguments);return r(this,i)}}window.MediaBehaviors=window.MediaBehaviors||{},window.MediaBehaviors.Video={_sourceIsIframe:function(e){return"local"!=this.getVideoType(e)},cleanVideoSource:function(e,o){if("local"!=o&&"string"==typeof e){var t=e.split("?"),i="";if(e=t[0],2==t.length){var r=t[1].split("&"),n=r[0].split("="),u=Array.isArray(r.shift())?r.shift().join(""):r.shift();if("v"==n[0]){var f=void 0!==u&&""!==u?"?"+u:"";i=n[1]+f}}if(-1==e.indexOf("player.vimeo.com")&&-1!=e.indexOf("vimeo.com"))return-1!=e.indexOf("/videos/")&&(e=e.replace("/videos/","/")),e.replace("vimeo.com/","player.vimeo.com/video/");if(-1!=e.indexOf("youtube.com/watch"))return e.replace("youtube.com/watch","youtube.com/embed/")+i;if(-1!=e.indexOf("youtube-no-cookie.com/"))return e.replace("youtube-no-cookie.com/","youtube.com/")+i;if(-1!=e.indexOf("youtu.be"))return e.replace("youtu.be/","www.youtube.com/embed/")+i;if(-1!=e.indexOf("sketchfab.com")&&-1==e.indexOf("/embed"))return e+"/embed";if(-1!=e.indexOf("dailymotion.com")&&-1==e.indexOf("/embed"))return e.replace("/video/","/embed/video/")}return e},getVideoType:function(e){var o=["aac","flac","mov","mp3","mp4","oga","ogg","ogv","wav","webm"],t=!1;if(-1!=e.indexOf("vimeo"))return"vimeo";if(-1!=e.indexOf("youtube")||-1!=e.indexOf("youtu.be"))return"youtube";if(-1!=e.indexOf("sketchfab.com"))return"sketchfab";if(-1!=e.indexOf("dailymotion.com"))return"dailymotion";for(var i=0;i<o.length;i++)!t&&e.toLowerCase().indexOf("."+o[i])>-1&&(t=!0);return t?"local":"external"}};e.MediaBehaviorsVideo=function(e){return function(t){!function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&i(e,o)}(a,e);var r,u,f,c=n(a);function a(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,a),c.apply(this,arguments)}return r=a,(u=[{key:"_sourceIsIframe",value:function(e){return"local"!=this.getVideoType(e)}},{key:"cleanVideoSource",value:function(e,o){if("local"!=o){var t=e.split("?"),i="";if(e=t[0],2==t.length){var r=t[1].split("&"),n=r[0].split("="),u=Array.isArray(r.shift())?r.shift().join(""):r.shift();if("v"==n[0]){var f=void 0!==u&&""!==u?"?"+u:"";i=n[1]+f}}if(-1==e.indexOf("player.vimeo.com")&&-1!=e.indexOf("vimeo.com"))return-1!=e.indexOf("/videos/")&&(e=e.replace("/videos/","/")),e.replace("vimeo.com/","player.vimeo.com/video/");if(-1!=e.indexOf("youtube.com/watch"))return e.replace("youtube.com/watch","youtube.com/embed/")+i;if(-1!=e.indexOf("youtube-no-cookie.com/"))return e.replace("youtube-no-cookie.com/","youtube.com/")+i;if(-1!=e.indexOf("youtu.be"))return e.replace("youtu.be/","www.youtube.com/embed/")+i;if(-1!=e.indexOf("sketchfab.com")&&-1==e.indexOf("/embed"))return e+"/embed";if(-1!=e.indexOf("dailymotion.com")&&-1==e.indexOf("/embed"))return e.replace("/video/","/embed/video/")}return e}},{key:"getVideoType",value:function(e){var o=["aac","flac","mov","mp3","mp4","oga","ogg","ogv","wav","webm"],t=!1;if(-1!=e.indexOf("vimeo"))return"vimeo";if(-1!=e.indexOf("youtube")||-1!=e.indexOf("youtu.be"))return"youtube";if(-1!=e.indexOf("sketchfab.com"))return"sketchfab";if(-1!=e.indexOf("dailymotion.com"))return"dailymotion";for(var i=0;i<o.length;i++)!t&&e.toLowerCase().indexOf("."+o[i])>-1&&(t=!0);return t?"local":"external"}}])&&o(r.prototype,u),f&&o(r,f),a}()},Object.defineProperty(e,"__esModule",{value:!0})});
