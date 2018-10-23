define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.GeneratorPolymerInitLrnElement = void 0;
  function _templateObject_a1ea1300d6ef11e895a7ebb830832ff4() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_a1ea1300d6ef11e895a7ebb830832ff4 = function() {
      return data;
    };
    return data;
  }
  var GeneratorPolymerInitLrnElement = (function(_PolymerElement) {
    babelHelpers.inherits(GeneratorPolymerInitLrnElement, _PolymerElement);
    function GeneratorPolymerInitLrnElement() {
      babelHelpers.classCallCheck(this, GeneratorPolymerInitLrnElement);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          GeneratorPolymerInitLrnElement.__proto__ ||
          Object.getPrototypeOf(GeneratorPolymerInitLrnElement)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      GeneratorPolymerInitLrnElement,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                GeneratorPolymerInitLrnElement.prototype.__proto__ ||
                  Object.getPrototypeOf(
                    GeneratorPolymerInitLrnElement.prototype
                  ),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              GeneratorPolymerInitLrnElement.haxProperties,
              GeneratorPolymerInitLrnElement.tag,
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
              _templateObject_a1ea1300d6ef11e895a7ebb830832ff4()
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
                title: "Generator polymer-init-lrn-element",
                description:
                  "Automated conversion of generator-polymer-init-lrn-element/",
                icon: "icons:android",
                color: "green",
                groups: ["Polymer"],
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
            return "generator-polymer-init-lrn-element";
          }
        }
      ]
    );
    return GeneratorPolymerInitLrnElement;
  })(_polymerElement.PolymerElement);
  _exports.GeneratorPolymerInitLrnElement = GeneratorPolymerInitLrnElement;
  window.customElements.define(
    GeneratorPolymerInitLrnElement.tag,
    GeneratorPolymerInitLrnElement
  );
});
