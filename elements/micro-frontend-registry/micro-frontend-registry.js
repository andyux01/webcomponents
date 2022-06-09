/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */

// very basic class for micro
const MicroFrontendKeys = ['endpoint', 'name', 'title', 'description', 'params', 'callback'];

// new micro
export class MicroFrontend {
  constructor() {
    // set defaults for each key expected
    MicroFrontendKeys.map((key) => key === 'params' ? this[key] = {} : this[key] = null);
  }
}

/**
 * `micro-frontend-registry`
 * `A singleton for registration and managing access to leverage microservices for web components`
 *
 * @demo demo/index.html
 * @element micro-frontend-registry
 */
class MicroFrontendRegistryEl extends HTMLElement {
  static get tag() {
    return "micro-frontend-registry";
  }

  constructor() {
    super();
    this.list = [];
    this.MicroFrontend = MicroFrontend;
  }

  /**
   * define a new micro frontend
   * 
   * @param {MicroFrontend} item - instanceof MicroFrontend
   * @returns {Boolean} status of definition being accepted
   */
  define(item) {
    if (!(item instanceof MicroFrontend)) {
      console.warn(
        "MicroFrontendRegistry: use class MicroFrontend instance but if keys match it will register still."
      );
      console.warn(item);
    }
    // validate item has all keys we care about
    if (MicroFrontendKeys.every(key => Object.keys(item).includes(key))) {
       // support for local resolution of vercel vs serve for things that are
       // built off of the main registry on localhost
      if (item.endpoint.startsWith('/api/')) {
        const base = window.location.origin.replace(/localhost:8(.*)/, "localhost:3000");
        item.endpoint = `${base}${item.endpoint}`;
        console.log(item.endpoint);
      }

      if (!this.get(item.name)) {
        console.log('push');
        this.list.push(item);
        return true;
      }
    }
    else {
      return false;
    }
  }

  /**
   * get the definition for a machine named micro
   * 
   * @param {String} name - machine name of the micro record requested
   * @returns {MicroFrontend} the micro in question
   */
  get(name) {
    if (name && this.list.length > 0) {
      const found = this.list.find((item) => item.name === name);
      if (found) {
        return found;
      }
    }
    return null;
  }

  /**
   * generate the call to the micro based on accepting name and params
   * 
   * @param {String} name - machine name for the micro to call
   * @param {Object} params - data to send to endpoint
   * @param {Object} caller - reference to DOM node that called this
   * @returns {Object} Response object from microservice, otherwise `null`
   */
  async call(name, params = {}, callback = null, caller = null) {
    const item = this.get(name);
    if (item) {
      const data = await fetch(item.endpoint,
        {
          method: 'POST',
          body: JSON.stringify(params)
        }
        ).then((d) => d.ok ? d.json() : null);
      // endpoints can require a callback be hit every time
      if (item.callback) {
        await item.callback(data, caller);
      }
      if (callback) {
        await callback(data, caller);
      }
      return data;
    }
    return null;
  }

  /**
   * generate the call to the micro as a URL
   * 
   * @param {String} name - machine name for the micro to call
   * @param {Object} params - data to send to endpoint
   * @returns {String} URL with parameters for a GET
   */
  url(name, params = {}) {
    const item = this.get(name);
    return new URL(item.endpoint).toString() + `?${new URLSearchParams(params).toString()}`;
  }
}
customElements.define(MicroFrontendRegistryEl.tag, MicroFrontendRegistryEl);

// register globally so we can make sure there is only one
window.MicroFrontendRegistry = window.MicroFrontendRegistry || {};
window.MicroFrontendRegistry.requestAvailability = () => {
  if (!window.MicroFrontendRegistry.instance) {
    window.MicroFrontendRegistry.instance = document.createElement(MicroFrontendRegistryEl.tag);
    document.body.appendChild(window.MicroFrontendRegistry.instance);
  }
  return window.MicroFrontendRegistry.instance;
};
// most common way to access registry
export const MicroFrontendRegistry = window.MicroFrontendRegistry.requestAvailability();