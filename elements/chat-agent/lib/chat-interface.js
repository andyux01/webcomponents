/**
 * Copyright 2024 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { ChatAgentModalStore } from "../chat-agent.js";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { html, css } from "lit";
import { autorun, toJS, } from "mobx";

class ChatInterface extends DDD {

  static get tag() {
    return "chat-interface";
  }

  constructor() {
    super();
    this.chatLog = [];
    this.isFullView = null;
    this.isInterfaceHidden = null;
    this.hasEditorUI = null;
    
    autorun(() => {
      this.chatLog = toJS(ChatAgentModalStore.chatLog);
      this.isFullView = toJS(ChatAgentModalStore.isFullView);
      this.isInterfaceHidden = toJS(ChatAgentModalStore.isInterfaceHidden);
      
      // TODO will change, brute forcing for now
      const tempSiteGrabber = document.querySelector("#site");
      this.isFullView ? tempSiteGrabber.style.width = "75%" : tempSiteGrabber.style.width = "100%";
      
      if (document.querySelector('haxcms-site-editor-ui')) {
        this.hasEditorUI = true;
      } else {
        this.hasEditorUI = false; 
      }
      console.log(hasEditorUI);
    })
  }

  // TODO transition changing between standard and full view
  // TODO webkit-scrollbar-thumb (google how to make scrollbar round for examples)
  static get styles() {
    return [
      super.styles,
      css`
        /* https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd */
        
        :host {
          display: block;
          z-index: 999999;
          width: 100%;
        }

        .chat-interface-wrapper {
          background-color: transparent;
        }

        :host([is-full-view]) .chat-interface-wrapper {
          background-color: var(--ddd-theme-default-potentialMidnight);
          padding: var(--ddd-spacing-3);
          height: 100vh;
        }

        :host([is-full-view]) .chat-wrapper {
          margin: var(--ddd-spacing-6) var(--ddd-spacing-0) var(--ddd-spacing-6) var(--ddd-spacing-0);
        }

        /* TODO full view stuff works on 1 very specific screen resolution :( */
        /* Same as above but more margin when editor is open. */
        :host([is-full-view][has-editor-ui]) .chat-wrapper {
          margin-top: var(--ddd-spacing-18);
        }

        :host([is-full-view]) .chat-messages {
          max-height: 76.5vh;
          min-height: 76.5vh;
          height: 76.5vh;
        }

        :host([is-interface-hidden]) .chat-interface-wrapper {
          display: none;
        }

        .chat-wrapper {
          background-color: var(--data-theme-primary, var(--ddd-primary-1));
          padding: var(--ddd-spacing-0) var(--ddd-spacing-2) var(--ddd-spacing-2) var(--ddd-spacing-2);
          border-radius: var(--ddd-radius-sm);
          box-shadow: var(--ddd-boxShadow-xl);
        }

        :host([enableDeveloperPanel]), .chat-wrapper {
          padding-top: var(--ddd-spacing-1);
        }

        .chat-container {
          width: 100%;
          height: 100%;
          background-color: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-sm);
        }

        .chat-messages {
          max-height: 300px;
          overflow-x: hidden;
          overflow-y: auto;
          scrollbar-width: thin;
        }
      `
    ];
  }

  // TODO page scrolls down when new message is mapped
  render() {
    return html`
      <div class="chat-interface-wrapper">
        <div class="chat-wrapper">
          ${ChatAgentModalStore.developerModeEnabled ? html`
            <chat-developer-panel></chat-developer-panel>
          ` : ''}
          <div class="main-wrapper">
            <chat-control-bar></chat-control-bar>
            <div class="chat-container">
              <div class="chat-messages">
                  ${this.chatLog.map((message) => html`
                    <chat-message message="${message.message}" ?sent-prompt="${message.author === ChatAgentModalStore.userName}" ?suggested-prompts="${ChatAgentModalStore.currentSuggestions.length > 0}"></chat-message>
                  `)}
              </div>
              <chat-input placeholder="${ChatAgentModalStore.promptPlaceholder}"></chat-input>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      ...super.properties,
      chatLog: {
        type: Array,
      },
      hasEditorUI: {
        type: Boolean,
        attribute: "has-editor-ui",
        reflect: true,
      },
      isFullView: {
        type: Boolean,
        attribute: "is-full-view",
        reflect: true,
      },
      isInterfaceHidden: {
        type: Boolean,
        attribute: "is-interface-hidden",
        reflect: true,
      },
    };
  }
}

globalThis.customElements.define(ChatInterface.tag, ChatInterface);
export { ChatInterface };