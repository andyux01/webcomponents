/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/responsive-utility/responsive-utility.js";
import "../../rich-text-editor.js";
import "../rich-text-editor-styles.js";
import "../buttons/rich-text-editor-button.js";
import "../buttons/rich-text-editor-more-button.js";
import "../buttons/rich-text-editor-heading-picker.js";
import "../buttons/rich-text-editor-symbol-picker.js";
import "../buttons/rich-text-editor-link.js";
import "../buttons/rich-text-editor-button-styles.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-icons/editor-icons.js";
import "@polymer/iron-icons/image-icons.js";
import "@lrnwebcomponents/md-extra-icons/md-extra-icons.js";
/**
 * `rich-text-editor-toolbar`
 * `a basic toolbar for the rich text editor`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html demo
 * @demo demo/config.html custom configuration
 */
class RichTextEditorToolbar extends PolymerElement {
  // render function for styles
  static get stickyTemplate() {
    return html`
      <style>
        :host([sticky]) {
          position: sticky;
          top: 0;
        }
      </style>
    `;
  }

  // render function for styles
  static get styleTemplate() {
    return html`
      <style include="rich-text-editor-styles"></style>
      <style include="rich-text-editor-button-styles">
        :host([hidden]) {
          display: none;
        }
        :host #toolbar {
          display: flex;
          opacity: 1;
          margin: 0;
          align-items: stretch;
          flex-wrap: wrap;
          justify-content: flex-start;
          background-color: var(--rich-text-editor-bg);
          border: var(--rich-text-editor-border);
          font-size: 12px;
          transition: all 0.5s;
          @apply --rich-text-editor-toolbar;
        }
        :host #toolbar[aria-hidden] {
          visibility: hidden;
          opacity: 0;
          height: 0;
        }
        :host #toolbar .group {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-evenly;
          align-items: stretch;
          padding: 0 3px;
          @apply --rich-text-editor-toolbar-group;
        }
        :host #toolbar .group:not(:last-of-type) {
          margin-right: 3px;
          border-right: var(--rich-text-editor-border);
          @apply --rich-text-editor-toolbar-divider;
        }
        :host #toolbar .button {
          display: flex;
          flex: 0 0 auto;
          align-items: stretch;
        }
        :host #toolbar #morebutton {
          flex: 1 0 auto;
          justify-content: flex-end;
        }
        /* hide the more button if all the buttons are displayed */
        :host([responsive-size="xs"]) #morebutton[collapse-max="xs"],
        :host([responsive-size="sm"]) #morebutton[collapse-max*="s"],
        :host([responsive-size="md"]) #morebutton:not([collapse-max*="l"]),
        :host([responsive-size="lg"]) #morebutton:not([collapse-max="xl"]),
        :host([responsive-size="xl"]) #morebutton,
        /* hide the buttons if they should be collaped until */
        :host([responsive-size="xs"]) #toolbar[collapsed] *[collapsed-until*="m"],
        :host([responsive-size="xs"]) #toolbar[collapsed] *[collapsed-until*="l"],
        :host([responsive-size="sm"]) #toolbar[collapsed] *[collapsed-until="md"],
        :host([responsive-size="sm"]) #toolbar[collapsed] *[collapsed-until*="l"],
        :host([responsive-size="md"]) #toolbar[collapsed] *[collapsed-until*="l"],
        :host([responsive-size="lg"]) #toolbar[collapsed] *[collapsed-until="xl"] {
          display: none;
        }
      </style>
    `;
  }

  // render function for toolbar
  static get toolbarTemplate() {
    return html`
      <div
        id="toolbar"
        aria-live="polite"
        aria-hidden$="[[!controls]]"
        collapsed$="[[collapsed]]"
      >
        <rich-text-editor-more-button
          id="morebutton"
          class="button"
          controls="toolbar"
          icon$="[[moreIcon]]"
          label$="[[moreLabel]]"
          show-text-label$="[[moreShowTextLabel]]"
          label-toggled$="[[moreLabelToggled]]"
          toggled$="[[!collapsed]]"
          on-tap="_toggleMore"
        >
        </rich-text-editor-more-button>
      </div>
    `;
  }

  // render function for template
  static get template() {
    return html`
      ${this.styleTemplate} ${this.stickyTemplate} ${this.toolbarTemplate}
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * The editor buttons, as determined by `config`.
       */
      buttons: {
        name: "buttons",
        type: Array,
        computed: "_getButtons(config)"
      },
      /**
       * The editable content, if edits are canceled.
       */
      canceled: {
        name: "canceled",
        type: Object,
        value: true
      },
      /**
       * Is the toolbar collapsed?
       */
      collapsed: {
        name: "collapsed",
        type: Boolean,
        value: true
      },
      /**
       * Custom configuration of toolbar groups and buttons.
       * (See default value for example using default configuration.)
       */
      config: {
        name: "config",
        type: Object,
        value: [
          {
            label: "History",
            type: "button-group",
            buttons: [
              {
                command: "undo",
                icon: "undo",
                label: "Undo",
                type: "rich-text-editor-button"
              },
              {
                command: "redo",
                icon: "redo",
                label: "Redo",
                type: "rich-text-editor-button"
              }
            ]
          },
          {
            label: "Basic Inline Operations",
            type: "button-group",
            buttons: [
              {
                label: "Heading",
                type: "rich-text-editor-heading-picker"
              },
              {
                command: "bold",
                icon: "editor:format-bold",
                label: "Bold",
                toggles: true,
                type: "rich-text-editor-button"
              },
              {
                command: "italic",
                icon: "editor:format-italic",
                label: "Italics",
                toggles: true,
                type: "rich-text-editor-button"
              },
              {
                command: "removeFormat",
                icon: "editor:format-clear",
                label: "Erase Format",
                type: "rich-text-editor-button"
              }
            ]
          },
          {
            label: "Links",
            type: "button-group",
            buttons: [
              {
                command: "link",
                icon: "link",
                label: "Link",
                prompt: "href",
                toggledCommand: "unlink",
                toggledIcon: "mdextra:unlink",
                toggledLabel: "Unink",
                toggles: true,
                type: "rich-text-editor-link"
              }
            ]
          },
          {
            label: "Clipboard Operations",
            type: "button-group",
            buttons: [
              {
                command: "cut",
                icon: "content-cut",
                label: "Cut",
                type: "rich-text-editor-button"
              },
              {
                command: "copy",
                icon: "content-copy",
                label: "Copy",
                type: "rich-text-editor-button"
              },
              {
                command: "paste",
                icon: "content-paste",
                label: "Paste",
                type: "rich-text-editor-button"
              }
            ]
          },
          {
            collapsedUntil: "md",
            label: "Subscript and Superscript",
            type: "button-group",
            buttons: [
              {
                command: "subscript",
                icon: "mdextra:subscript",
                label: "Subscript",
                toggles: true,
                type: "rich-text-editor-button"
              },
              {
                command: "superscript",
                icon: "mdextra:superscript",
                label: "Superscript",
                toggles: true,
                type: "rich-text-editor-button"
              }
            ]
          },
          {
            collapsedUntil: "sm",
            icon: "editor:functions",
            label: "Insert Symbol",
            symbolTypes: ["symbols"],
            type: "rich-text-editor-symbol-picker"
          },
          {
            collapsedUntil: "sm",
            label: "Lists and Indents",
            type: "button-group",
            buttons: [
              {
                command: "insertOrderedList",
                icon: "editor:format-list-numbered",
                label: "Ordered List",
                toggles: true,
                type: "rich-text-editor-button"
              },
              {
                command: "insertUnorderedList",
                icon: "editor:format-list-bulleted",
                label: "Unordered List",
                toggles: true,
                type: "rich-text-editor-button"
              },
              {
                collapsedUntil: "lg",
                command: "formatBlock",
                commandVal: "blockquote",
                label: "Blockquote",
                icon: "editor:format-quote",
                type: "rich-text-editor-button"
              },
              {
                label: "Increase Indent",
                icon: "editor:format-indent-increase",
                event: "text-indent",
                command: "indent",
                type: "rich-text-editor-button"
              },
              {
                label: "Decrease Indent",
                icon: "editor:format-indent-decrease",
                event: "text-outdent",
                command: "outdent",
                type: "rich-text-editor-button"
              }
            ]
          }
        ]
      },
      /**
       * The `id` of the `rich-text-editor` that the toolbar controls.
       */
      controls: {
        name: "controls",
        type: String,
        value: null
      },
      /**
       * All `rich-text-editor` elements that use this toolbar
       */
      editableElements: {
        name: "editableElements",
        type: Array,
        value: []
      },
      /**
       * The `rich-text-editor` element that uis currently in `contenteditable` mode
       */
      editableElement: {
        name: "editableElement",
        type: Object,
        value: null
      },
      /**
       * The icon for the more button.
       */
      moreIcon: {
        name: "moreIcon",
        type: String,
        value: "more-vert"
      },
      /**
       * The label for the more button.
       */
      moreLabel: {
        name: "moreLabel",
        type: String,
        value: "More Buttons"
      },
      /**
       * The label for the more button when toggled.
       */
      moreLabelToggled: {
        name: "moreLabelToggled",
        type: String,
        value: "Fewer Buttons"
      },
      /**
       * The show text label for more button.
       */
      moreShowTextLabel: {
        name: "moreShowTextLabel",
        type: Boolean,
        value: false
      },
      /**
       * The the size of the editor.
       */
      responsiveSize: {
        name: "responsiveSize",
        type: String,
        value: "xs",
        reflectToAttribute: true
      },
      /**
       * The current text selection.
       */
      savedSelection: {
        name: "savedSelection",
        type: Object,
        value: null
      },
      /**
       * The current text selection, which is actually a range.
       */
      selection: {
        name: "selection",
        type: Object,
        value: null,
        observer: "_selectionChange"
      },
      /**
       * Should the toolbar stick to the top so that it is always visible?
       */
      sticky: {
        name: "sticky",
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: "_stickyChanged"
      }
    };
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "rich-text-editor-toolbar";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    let root = this;
    window.ResponsiveUtility.requestAvailability();
    window.dispatchEvent(
      new CustomEvent("responsive-element", {
        detail: {
          element: root,
          attribute: "responsive-size",
          relativeToParent: true
        }
      })
    );
  }

  /**
   * life cycle, element is disconnected
   */
  disconnectedCallback() {
    //unbind the the toolbar to the rich-text-editor-selection
    root.dispatchEvent(
      new CustomEvent("deselect-rich-text-editor-toolbar", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: root
      })
    );
  }

  /**
   * adds an editable region to the list of editableElements
   *
   * @param {object} an HTML object that can be edited
   */
  addEditableRegion(editableElement) {
    let root = this,
      /*todo*/
      observer = new MutationObserver(e => {
        root.getUpdatedSelection();
      });
    editableElement.addEventListener("keydown", e => {
      root.editTarget(editableElement);
    });
    editableElement.addEventListener("mousedown", e => {
      root.editTarget(editableElement);
    });
    editableElement.addEventListener("blur", e => {
      if (
        e.relatedTarget === null ||
        !e.relatedTarget.startsWith === "rich-text-editor"
      )
        root.editTarget(null);
      root.getUpdatedSelection();
    });
    editableElement.addEventListener("mouseout", e => {
      root.getUpdatedSelection();
    });
    observer.observe(editableElement, {
      attributes: false,
      childList: true,
      subtree: true,
      characterData: false
    });
    root.push("editableElements", [editableElement, observer]);
  }

  /**
   * cancels edits to the active editableElement
   */
  cancel() {
    this.editableElement.innerHTML = this.canceled;
    this.editTarget(null);
  }
  /**
   * makes a editableElement editable
   *
   * @param {object} an HTML object that can be edited
   */
  editTarget(editableElement) {
    let root = this,
      sel = window.getSelection();
    if (
      editableElement &&
      (editableElement.getAttribute("id") === undefined ||
        editableElement.getAttribute("id") === null)
    )
      editableElement.setAttribute("id", root._generateUUID());

    if (root.editableElement !== editableElement) {
      //save changes to previous editableElement
      if (root.editableElement !== null) {
        root.editableElement.contentEditable = false;
        root.editableElement = null;
      }
      //bind the the toolbar to the rich-text-editor-selection
      root.dispatchEvent(
        new CustomEvent("select-rich-text-editor-toolbar", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: root
        })
      );
      root.editableElement = editableElement;
      if (editableElement) {
        editableElement.parentNode.insertBefore(root, editableElement);
        root.canceled = editableElement.innerHTML;
        root.editableElement.contentEditable = true;
        root.controls = editableElement.getAttribute("id");
      } else {
        root.controls = null;
      }
    }
  }

  /**
   * Gets the updated selection.
   */
  _selectionChange() {
    let root = this;
    root.buttons.forEach(button => {
      button.selection = null;
      button.selection = root.selection;
    });
  }

  /**
   * adds an editable region to the list of editableElements
   *
   * @param {object} an HTML object that can be edited
   */
  makeEditableRegion(editableElement) {
    let root = this,
      content = document.createElement("rich-text-editor");
    editableElement.parentNode.insertBefore(content, editableElement);
    content.appendChild(editableElement);
    root.addEditableRegion(content);
  }

  /**
   * removes an editable region to the list of editableElements
   *
   * @param {object} an HTML object that can be edited
   */
  removeEditableRegion(editableElement) {
    let root = this;
    for (let i = 0; i < this.editableElements.length; i++) {
      let item = this.editableElements[i];
      if (item[0] === editableElement) {
        item[0].removeEventListener("click", e => {
          root.editTarget(editableElement);
        });
        editableElement.removeEventListener("blur", e => {
          if (
            e.relatedTarget === null ||
            !e.relatedTarget.startsWith === "rich-text-editor"
          )
            root.editTarget(null);
          root.getUpdatedSelection();
        });
        editableElement.removeEventListener("mouseout", e => {
          root.getUpdatedSelection();
        });
        item[1].disconnect();
        this.set("editableElements", this.editableElements.splice(i, 1));
      }
    }
  }

  /**
   * Adds a button to the toolbar
   *
   * @param {object} the child object in the config object
   * @param {object} the parent object in the config object
   */
  _addButton(child, parent) {
    let root = this,
      button = document.createElement(child.type);
    for (var key in child) {
      button[key] = child[key];
    }
    button.setAttribute("class", "button");
    button.addEventListener("deselect", e => {
      root._getRange().collapse(false);
    });
    parent.appendChild(button);
    return button;
  }

  /**
   * Generate a UUID
   */
  _generateUUID() {
    return "rte-" + "ss-s-s-s-sss".replace(/s/g, this._uuidPart);
  }
  /**
   * Gets the groups array for the dom-repeat.
   *
   * @param {object} the toolbar buttons config object
   * @param {array} an array the buttons grouped by size
   */
  _getButtons(config) {
    let root = this,
      toolbar = root.$.toolbar,
      more = this.$.morebutton,
      max = 0,
      sizes = ["xs", "sm", "md", "lg", "xl"],
      temp = [];
    toolbar.innerHTML = "";
    config.forEach(item => {
      if (item.type === "button-group") {
        let group = document.createElement("div");
        group.setAttribute("class", "group");
        if (item.collapsedUntil !== undefined && item.collapsedUntil !== null)
          group.setAttribute("collapsed-until", item.collapsedUntil);
        max = Math.max(max, sizes.indexOf(item.collapsedUntil));
        item.buttons.forEach(button => {
          max = Math.max(max, sizes.indexOf(button.collapsedUntil));
          temp.push(root._addButton(button, group));
        });
        toolbar.appendChild(group);
      } else {
        max = Math.max(max, sizes.indexOf(item.collapsedUntil));
        temp.push(root._addButton(item, toolbar));
      }
      toolbar.appendChild(more);
      more.collapseMax = sizes[max];
    });
    return temp;
  }

  /**
   * updates breadcrumb sticky
   */
  _stickyChanged(newVal, oldVal) {
    if (this.__breadcrumbs) this.__breadcrumbs.sticky = this.sticky;
  }

  /**
   * Toggles collapsed mode when `rich-text-editor-more-button` is tapped
   * @param {object} e the `rich-text-editor-more-button` tap event
   * @returns {void}
   */
  _toggleMore(e) {
    this.collapsed = !this.collapsed;
  }

  /**
   * Generates part of a UUID
   * @returns {string} a unique hexadecimal number
   */
  _uuidPart() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}

export { RichTextEditorToolbar };

window.customElements.define(RichTextEditorToolbar.tag, RichTextEditorToolbar);
