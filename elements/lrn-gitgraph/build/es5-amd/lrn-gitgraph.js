define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnGitgraph = void 0;
  function _templateObject_fc0f7ab0d6f311e88b216d4ec66b33b8() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_fc0f7ab0d6f311e88b216d4ec66b33b8 = function() {
      return data;
    };
    return data;
  }
  var LrnGitgraph = (function(_PolymerElement) {
    babelHelpers.inherits(LrnGitgraph, _PolymerElement);
    function LrnGitgraph() {
      babelHelpers.classCallCheck(this, LrnGitgraph);
      return babelHelpers.possibleConstructorReturn(
        this,
        (LrnGitgraph.__proto__ || Object.getPrototypeOf(LrnGitgraph)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      LrnGitgraph,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnGitgraph.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnGitgraph.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnGitgraph.haxProperties,
              LrnGitgraph.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_fc0f7ab0d6f311e88b216d4ec66b33b8()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrn gitgraph",
                description: "Automated conversion of lrn-gitgraph/",
                icon: "icons:android",
                color: "green",
                groups: ["Gitgraph"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrn-gitgraph";
          }
        }
      ]
    );
    return LrnGitgraph;
  })(_polymerElement.PolymerElement);
  _exports.LrnGitgraph = LrnGitgraph;
  window.customElements.define(LrnGitgraph.tag, LrnGitgraph);
});
