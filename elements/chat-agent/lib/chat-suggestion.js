/**
 * Copyright 2024 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */

import { ChatAgentModalStore } from "../chat-agent.js";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { html, css } from "lit";
import { autorun, toJS } from "mobx";

class ChatSuggestion extends DDD {
  static get tag() {
    return "chat-suggestion";
  }

  constructor() {
    super();

    this.chosenPrompt = false;
    this.disabled = false;
    this.promptType = "";
    this.suggestion = "";

    //! mobx
    this.messageIndex = null;
    this.userIndex = null;

    autorun(() => {
      this.messageIndex = toJS(ChatAgentModalStore.messageIndex);
      this.userIndex = toJS(ChatAgentModalStore.userIndex);
    });
  }

  // TODO make it so suggestions take up a whole row, make a bit smaller as well (shape size and font size)
  static get styles() {
    return [
      super.styles,
      css`
        /* https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd */

        :host {
          display: block;
        }

        .chat-suggestion-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: var(--ddd-theme-default-successLight);
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-xl);
          border-color: var(--ddd-theme-default-potentialMidnight);
          opacity: 1;
          cursor: pointer;
          box-shadow: var(--ddd-boxShadow-xl);
        }

        .suggestion-icon {
          width: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: var(--ddd-border-md);
          border-right-style: solid;
        }

        .circle-wrapper {
          background-color: white;
          border-radius: var(--ddd-radius-circle);
          padding: var(--ddd-spacing-2);
        }

        simple-icon-lite {
          --simple-icon-height: var(--ddd-icon-xs);
          --simple-icon-width: var(--ddd-icon-xs);
        }

        .suggestion-text {
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :host([disabled]) .chat-suggestion-wrapper {
          background-color: var(--ddd-theme-default-discoveryCoral);
          opacity: 0.6;
          cursor: default;
        }

        :host([chosen-prompt]) .chat-suggestion-wrapper {
          background-color: var(--ddd-theme-default-futureLime);
        }

        .chat-suggestion-wrapper:hover,
        .chat-suggestion-wrapper:focus {
          background-color: var(--ddd-theme-default-futureLime);
        }

        .chat-suggestion-wrapper:hover p,
        .chat-suggestion-wrapper:focus p {
          text-decoration: underline;
        }

        :host([disabled]) p {
          text-decoration: none;
        }

        p {
          color: var(--ddd-theme-default-potentialMidnight);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-4xs);
          width: 80%;
          text-align: center;
        }
      `,
    ];
  }

  // TODO fix corner clicking issue
  render() {
    return html`
      <div
        class="chat-suggestion-wrapper"
        @click=${this.handleSuggestion}
        @keypress=${this.handleSuggestion}
        tabindex="0"
      >
        <div class="suggestion-icon">
          <div class="circle-wrapper">
            <simple-icon-lite></simple-icon-lite>
          </div>
        </div>
        <div class="suggestion-text">
          <p class="chat-suggestion">${this.suggestion}</p>
        </div>
      </div>
    `;
  }

  /**
   * @description Event handler for the suggestion button
   */
  handleSuggestion() {
    if (!this.disabled) {
      ChatAgentModalStore.developerModeEnabled
        ? console.info(
            "HAX-DEV-MODE: Suggestion button pressed. Suggested prompt to send to Merlin: " +
              this.suggestion,
          )
        : null;

      ChatAgentModalStore.handleMessage(
        ChatAgentModalStore.userName,
        this.suggestion,
      );
    } else {
      ChatAgentModalStore.developerModeEnabled
        ? console.info(
            "HAX-DEV-MODE: Suggestion buttons disabled, ignoring request",
          )
        : null;
    }
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    let simpleIcon = this.shadowRoot.querySelector("simple-icon-lite");
    switch (this.promptType) {
      case "suggestion":
        simpleIcon.setAttribute("icon", "question-answer");
        simpleIcon.style.color =
          "var(--data-theme-primary, var(--ddd-primary-13))";
        break;
      case "network":
        simpleIcon.setAttribute(
          "icon",
          "device:signal-cellular-connected-no-internet-0-bar",
        );
        simpleIcon.style.color = "var(--ddd-theme-default-coalyGray)";
        break;
      case "help":
        simpleIcon.setAttribute("icon", "help-outline");
        simpleIcon.style.color = "var(--ddd-theme-default-original87Pink)";
        break;
      case "hax":
        simpleIcon.setAttribute("icon", "lrn:network");
        simpleIcon.style.color =
          "var(--data-theme-primary, var(--ddd-primary-13))";
        break;
      default:
        simpleIcon.setAttribute("icon", "lrn:info");
        simpleIcon.style.color = "var(--ddd-theme-default-skyBlue)";
        break;
    }
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }

    if (this.disabled) {
      this.shadowRoot
        .querySelector(".chat-suggestion-wrapper")
        .removeAttribute("tabindex");
    }
  }

  static get properties() {
    return {
      ...super.properties,
      chosenPrompt: {
        type: Boolean,
        attribute: "chosen-prompt",
      },
      disabled: { type: Boolean },
      promptType: {
        type: String,
        attribute: "prompt-type",
      },
      suggestion: { type: String },
    };
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(ChatSuggestion.tag, ChatSuggestion);
export { ChatSuggestion };