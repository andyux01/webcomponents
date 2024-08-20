// this helps with resizing on learning management systems
// like cantvas and h4p
import "@haxtheweb/es-global-bridge/es-global-bridge.js";
import { store } from "@haxtheweb/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun } from "mobx";

export const LTIResizingMixin = function (SuperClass) {
  return class extends SuperClass {
    constructor() {
      super();
      // load resizer via es global bridge
      const h5pResizer = new URL(
        "../../../../h5p-element/lib/h5p-resizer.js",
        import.meta.url,
      ).href;
      globalThis.ESGlobalBridge.requestAvailability().load(
        "h5p-resizer",
        h5pResizer,
      );
      autorun(() => {
        // on content change, meaning it loaded, fire a resize statement
        if (store.activeItemContent || store.appReady) {
          setTimeout(() => {
            var height = globalThis.document.body.scrollHeight + 50;
            // Resize the window via canvas API so we don't have 2 scroll bars.
            parent.postMessage(
              `{"subject":"lti.frameResize", "height":${height}}`,
              "*",
            );
            parent.postMessage('{"subject":"lti.scrollToTop"}', "*");
            // give content a chance to self resize if loading nested materials
            setTimeout(() => {
              var height = globalThis.document.body.scrollHeight + 50;
              // Resize the window via canvas API so we don't have 2 scroll bars.
              parent.postMessage(
                `{"subject":"lti.frameResize", "height":${height}}`,
                "*",
              );
              parent.postMessage('{"subject":"lti.scrollToTop"}', "*");
            }, 1000);
          }, 100);
        }
      });
    }
  };
};