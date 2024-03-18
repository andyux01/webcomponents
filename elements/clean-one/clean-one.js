/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit";
import { HAXCMSLitElementTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import { HAXCMSThemeParts } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js";
import { HAXCMSRememberRoute } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSRememberRoute.js";
import { QRCodeMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/QRCodeMixin.js";
import { EmailPageMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/EmailPageMixin.js";
import { HAXCMSMobileMenuMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSMobileMenu.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
import "@lrnwebcomponents/scroll-button/scroll-button.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-tags.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";
import "./lib/clean-one-search-box.js";
import { PrintBranchMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/PrintBranchMixin.js";
import { MicroFrontendRegistry } from "@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js";
import { PDFPageMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/PDFPageMixin.js";
import { DDDSuper } from "@lrnwebcomponents/d-d-d/d-d-d.js";

/**
 * `clean-one`
 * `Clean HAXcms theme, one.`
 *
 * @microcopy - language worth noting:
 *  - HAXcms - A headless content management system
 *  - HAXCMSTheme - A super class that provides correct baseline wiring to build a new theme
 *
 * @demo demo/index.html
 * @element clean-one
 */
class CleanOne extends PrintBranchMixin(
  PDFPageMixin(
    EmailPageMixin(
      QRCodeMixin(
        HAXCMSThemeParts(
          HAXCMSMobileMenuMixin(
            HAXCMSRememberRoute(DDDSuper(HAXCMSLitElementTheme)),
          ),
        ),
      ),
    ),
  ),
) {
  //styles function
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          width: 100%;
          margin: 0;
          display: flex;
          padding: 0;
          min-height: 100vh;
          flex-direction: column;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          --ddd-theme-body-font-size: var(--ddd-font-size-xxs);
          background: white;
          --simple-tooltip-background: var(--ddd-theme-default-info);
          --simple-tooltip-text-color: var(--ddd-theme-default-infoLight);
          --simple-tooltip-opacity: 1;
          --simple-tooltip-delay-in: 0;
          --simple-tooltip-border-radius: 0;
        }
        site-git-corner {
          --site-git-corner-background: black;
        }

        :host([hidden]) {
          display: none;
        }
        [hidden] {
          display: none;
        }
        site-menu-button:not(:defined) {
          display: none;
        }
        .btn-container {
          z-index: 2;
          height: 50px;
          padding: 6px;
        }
        .btn-container .btn {
          padding: 8px 4px;
        }
        site-menu {
          height: var(--clean-one-site-menu-height, calc(100vh - 60px));
          --site-menu-active-color: var(
            --haxcms-user-styles-color-theme-color-3
          );
          --site-menu-item-active-item-color: var(
            --simple-colors-default-theme-light-blue-1,
            rgba(100, 100, 255, 0.1)
          );
          --haxcms-tooltip-color: var(--ddd-theme-default-infoLight);
          --haxcms-tooltip-background-color: var(--ddd-theme-default-info);
          --map-menu-item-a-active-background-color: var(
            --simple-colors-default-theme-grey-1,
            rgba(200, 200, 200, 0.1)
          );
          font-family: var(--ddd-font-navigation);
          --site-menu-font-size: var(--ddd-font-size-xs);
        }
        scroll-button {
          --scroll-button-color: var(--haxcms-user-styles-color-theme-color-1);
          --scroll-button-background-color: var(
            --haxcms-user-styles-color-theme-color-2
          );
          --scroll-button-tooltip-background-color: var(
            --haxcms-user-styles-color-theme-color-1
          );
          --scroll-button-tooltip-color: var(
            --haxcms-user-styles-color-theme-color-2
          );
        }
        simple-icon-button,
        simple-icon-button-lite,
        site-rss-button,
        site-print-button,
        site-git-corner {
          color: var(--site-print-button-color, black);
          --site-git-corner-background: var(
            --haxcms-user-styles-color-theme-color-1
          );
          --site-git-corner-color: var(
            --haxcms-user-styles-color-theme-color-2
          );
          --simple-icon-fill-color: var(
            --haxcms-user-styles-color-theme-color-1
          );
          --haxcms-tooltip-color: var(--ddd-theme-default-infoLight);
          --haxcms-tooltip-background-color: var(--ddd-theme-default-info);
        }
        .pdf-page-btn,
        .print-branch-btn {
          padding: 8px 4px;
          display: inline-flex;
        }
        site-breadcrumb {
          --site-breadcrumb-margin: var(--ddd-spacing-2) 0 var(--ddd-spacing-7);
        }
        site-menu-button {
          --site-menu-button-icon-fill-color: var(
            --haxcms-user-styles-color-theme-color-1
          );
          --site-menu-button-link-decoration: none;
          --site-menu-button-button-hover-color: var(
            --ddd-theme-default-info,
            #383f45
          );
          --haxcms-tooltip-color: var(--ddd-theme-default-infoLight);
          --haxcms-tooltip-background-color: var(--ddd-theme-default-info);
          --site-menu-button-button-hover-background-color: var(
            --ddd-theme-default-limestoneLight
          );
        }
        scroll-button,
        site-breadcrumb {
          color: var(--haxcms-user-styles-color-theme-color-1);
          --site-breadcrumb-color: var(
            --haxcms-user-styles-color-theme-color-1
          );
        }

        * {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
          -webkit-tap-highlight-color: transparent;
          -webkit-text-size-adjust: none;
          -webkit-touch-callout: none;
          -webkit-font-smoothing: antialiased;
        }
        /* links */

        :host([menu-open]) .menu-outline {
          left: 0;
        }
        .menu-outline {
          position: absolute;
          top: 0;
          left: -300px;
          bottom: 0;
          z-index: 1;
          overflow-y: hidden;
          width: 300px;
          color: black;
          background: var(--ddd-theme-default-shrineMaxLight);
          border-right: var(--ddd-border-xs);
          transition: left 0.3s ease;
        }
        /* content */
        .main-section h1 {
          font-size: 2em;
        }
        :host([edit-mode]) .main-section {
          outline: 1px solid grey;
          outline-offset: 20px;
        }
        .main-content h1,
        .main-content h2,
        .main-content h3,
        .main-content h4,
        .main-content h5,
        .main-content h6 {
          margin-top: 1.275em;
          margin-bottom: 0.85em;
          font-weight: 700;
        }
        .main-content h1,
        .main-content h2,
        .main-content h3,
        .main-content h4,
        .main-content h5 {
          page-break-after: avoid;
        }
        :host([responsive-size="xs"][menu-open]) .pull-right {
          display: none;
        }
        .pull-right {
          top: 0px;
          right: 16px;
          position: fixed;
        }
        :host([is-logged-in]) .pull-right {
          margin-top: 48px;
        }
        #emailbtnwrapper {
          display: inline-flex;
        }
        .main-content ::slotted(*) {
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          font-size: inherit;
        }
        @media (prefers-reduced-motion: reduce) {
          #site-search-input,
          .site-body,
          .navigation,
          .menu-outline {
            transition: none !important;
          }
        }

        :host([menu-open]) .site-body {
          left: 300px;
        }
        .site-body {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          min-width: 375px;
          overflow-y: auto;
          transition: left 0.3s ease;
        }

        :host([responsive-size="xs"]) .page-inner,
        :host([responsive-size="sm"]) .page-inner,
        :host([responsive-size="md"]) .page-inner,
        :host([responsive-size="lg"]) .page-inner {
          padding: 48px 16px;
        }
        :host([responsive-size="sm"]) .site-inner {
          padding: 0 24px;
        }

        :host([responsive-size="xs"]) .page-inner {
          overflow-x: auto;
        }
        @media screen and (max-width: 640px) {
          site-breadcrumb {
            display: none;
          }
          .site-header {
            padding: 0px;
          }
          .header {
            height: 0px;
          }
          .main-content site-active-title h1 {
            height: 48px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            font-size: var(--ddd-font-size-xs);
          }
        }
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        .main-content h2 {
          font-size: 1.75em;
        }
        .main-content h3 {
          font-size: 1.5em;
        }
        .main-content h4 {
          font-size: 1.25em;
        }
        .main-content h5 {
          font-size: 1em;
        }
        .main-content h6 {
          font-size: 1em;
          color: #777;
        }
        .main-content h1,
        .main-content h2,
        .main-content h3,
        .main-content h4,
        .main-content h5,
        .main-content h6 {
          margin-top: 1.275em;
          margin-bottom: 0.85em;
          font-weight: 700;
        }

        .main-content h1,
        .main-content h2,
        .main-content h3,
        .main-content h4,
        .main-content h5 {
          page-break-after: avoid;
        }
        .main-content h2,
        .main-content h3,
        .main-content h4,
        .main-content h5,
        .main-content p {
          orphans: 3;
          widows: 3;
        }
        .main-content blockquote,
        .main-content dl,
        .main-content ol,
        .main-content p,
        .main-content table,
        .main-content ul {
          margin-top: 0;
          margin-bottom: 0.85em;
        }
        .main-content ol,
        .main-content ul {
          padding: 0;
          margin: 0;
          margin-bottom: 0.85em;
          padding-left: 2em;
        }
        .main-content h2,
        .main-content h3,
        .main-content h4,
        .main-content h5,
        .main-content p {
          orphans: 3;
          widows: 3;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        header,
        hgroup,
        main,
        nav,
        section,
        summary {
          display: block;
        }
        footer {
          display: flex;
        }
        .site-header {
          overflow: visible;
          z-index: 2;
          background: transparent;
          position: fixed;
          display: block;
          padding: 0 16px;
        }
        @media (max-width: 1200px) {
          .site-header {
            height: 50px;
            position: fixed;
            width: 100vw;
            background-color: white;
          }
        }
        @media (max-width: 900px) {
          footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
          }
          :host([menu-open]) footer {
            left: 300px;
          }
        }

        @media (max-width: 700px) {
          .link-actions {
            display: none;
          }
        }
        @media (max-width: 1240px) {
          .site-body .body-inner {
            position: static;
            min-height: calc(100% - 98px);
          }
        }
        @media (max-width: 1240px) {
          .site-body {
            padding-bottom: 20px;
          }
        }
        .site-body .site-inner {
          position: relative;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          overflow-y: auto;
        }
        .page-wrapper {
          position: relative;
          outline: 0;
        }
        .page-inner {
          position: relative;
          max-width: 840px;
          margin: 0 auto;
          min-height: 90vh;
          padding: 20px 15px 40px 15px;
        }
        .main-section {
          display: block;
          word-wrap: break-word;
          color: var(--haxcms-user-styles-color-theme-color-color);
          line-height: 1.7;
          text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
        }
        /* Navigation arrows */
        site-menu-button {
          --site-menu-button-icon-width: 64px;
          --site-menu-button-icon-height: 64px;
        }
        :host([menu-open]) site-menu-button[type="prev"] {
          left: 300px;
        }
        site-menu-button[type="prev"] {
          left: 0;
        }
        site-menu-button[type="next"] {
          right: 0;
        }
        .main-content site-active-title h1 {
          margin: 0 0 var(--ddd-spacing-4) 0;
        }
        .navigation {
          position: fixed;
          top: 40vh;
          bottom: 20vh;
          margin: 0 20px;
          max-width: 150px;
          min-width: 90px;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
          font-size: 40px;
          color: #ccc;
          text-align: center;
        }
        @media screen and (max-width: 600px) {
          .page-wrapper {
            width: 100vw;
          }
          #slot ::slotted(iframe) {
            width: auto;
          }
          #slot ::slotted(h1),
          #slot ::slotted(h2),
          #slot ::slotted(h3) {
            font-size: 1.5em !important;
          }
          #slot ::slotted(h4),
          #slot ::slotted(h5),
          #slot ::slotted(h6) {
            font-size: 1.2em !important;
          }
          #slot ::slotted(replace-tag) {
            overflow: hidden;
          }
        }
        @media (max-width: 1240px) {
          .navigation {
            position: static;
            margin: 0 auto;
            display: inline-flex;
          }
        }
        /* color,font,size switchers */

        .site-header .font-settings .font-enlarge {
          line-height: 30px;
          font-size: 1.4em;
        }
        .site-header .font-settings .font-reduce {
          line-height: 30px;
          font-size: 1em;
        }
        .site-header .font-settings .font-reduce {
          line-height: 30px;
          font-size: 1em;
        }

        .site-body {
          overflow-y: scroll;
          color: var(--haxcms-user-styles-color-theme-color-color);
          background: var(--haxcms-user-styles-color-theme-color-background);
        }
        :host([color-theme="1"]) .site-header {
          color: #afa790;
          background: transparent;
        }
        :host([color-theme="1"]) .site-header .btn {
          color: black;
        }
        :host([color-theme="1"]) .site-header .btn:hover,
        :host([color-theme="1"]) .site-header .btn:focus,
        :host([color-theme="1"]) .site-header .btn:active {
          color: #704214;
          background: none;
        }
        :host([color-theme="0"]) site-menu {
          --map-menu-item-a-active-background-color: #4152a945;
        }
        :host([color-theme="1"]) site-menu {
          --map-menu-item-a-active-color: white;
          --map-menu-item-a-active-background-color: #70421445;
          --site-menu-item-active-item-color: #70421410;
          --map-menu-expanded-color-depth-1: rgba(200, 150, 100, 0.1);
          --map-menu-expanded-color-depth-2: rgba(200, 150, 100, 0.15);
          --map-menu-expanded-color-depth-3: rgba(200, 150, 100, 0.2);
          --map-menu-expanded-color-depth-4: rgba(200, 150, 100, 0.25);
        }
        :host([color-theme="2"]) site-menu {
          --map-menu-item-a-active-color: white;
          --map-menu-item-a-active-background-color: rgba(0, 0, 250, 0.1);
          --site-menu-item-active-item-color: rgba(0, 0, 250, 0.1);
          --map-menu-expanded-color-depth-1: rgba(0, 0, 100, 0.15);
          --map-menu-expanded-color-depth-2: rgba(0, 0, 100, 0.2);
          --map-menu-expanded-color-depth-3: rgba(0, 0, 100, 0.25);
          --map-menu-expanded-color-depth-4: rgba(0, 0, 100, 0.3);
        }
        :host([color-theme="1"]) site-active-title {
          color: #704214;
        }
        :host([color-theme="2"]) .site-header {
          color: #7e888b;
          background: transparent;
        }
        :host([color-theme="2"]) .site-header .btn {
          color: white;
        }
        :host([color-theme="2"]) .site-header .btn:hover,
        :host([color-theme="2"]) .site-header .btn:focus,
        :host([color-theme="2"]) .site-header .btn:active {
          color: #fffff5;
          background: none;
        }
        :host([color-theme="2"]) site-active-title {
          color: #cfd4e3;
        }
        :host([color-theme="1"]) .site-body .navigation {
          color: #afa790;
        }
        :host([color-theme="1"]) .site-body .navigation:hover,
        :host([color-theme="1"]) .site-body .navigation:focus,
        :host([color-theme="1"]) .site-body .navigation:active {
          color: #eee8e0;
        }
        :host([color-theme="2"]) .site-body .navigation {
          color: #383f52;
        }
        :host([color-theme="2"]) .site-body .navigation:hover,
        :host([color-theme="2"]) .site-body .navigation:focus,
        :host([color-theme="2"]) .site-body .navigation:active {
          color: #fffff5;
        }
        :host([color-theme="2"]) #site-search-input {
          color: #fffff5;
          background-color: #383f52;
        }

        /*
           * Theme 1
           */
        :host([color-theme="1"]) .menu-outline {
          color: #afa790;
          background: #111111;
          border-right: 1px solid rgba(0, 0, 0, 0.07);
        }
        :host([color-theme="1"]) .menu-outline ul.summary li.divider {
          background: #7e888b;
          box-shadow: none;
        }
        :host([color-theme="1"]) .menu-outline ul.summary li.done > a {
          color: #877f6a;
        }
        :host([color-theme="1"]) .menu-outline ul.summary li a,
        :host([color-theme="1"]) .menu-outline ul.summary li span {
          color: #877f6a;
          background: transparent;
          font-weight: normal;
        }
        :host([color-theme="1"]) .menu-outline ul.summary li.active > a,
        :host([color-theme="1"]) .menu-outline ul.summary li a:hover,
        :host([color-theme="1"]) .menu-outline ul.summary li a:focus,
        :host([color-theme="1"]) .menu-outline ul.summary li a:active {
          color: #704214;
          background: transparent;
          font-weight: normal;
        }
        :host([color-theme="1"]) #site-search-input {
          color: #afa790;
          background-color: #111111;
        }
        /*
           * Theme 2
           */
        :host([color-theme="2"]) .menu-outline {
          color: #bcc1d2;
          background: #2d3143;
          border-right: none;
        }
        :host([color-theme="2"]) .menu-outline ul.summary li.divider {
          background: #272a3a;
          box-shadow: none;
        }
        :host([color-theme="2"]) .menu-outline ul.summary li.done > a {
          color: #62687f;
        }
        :host([color-theme="2"]) .menu-outline ul.summary li a,
        :host([color-theme="2"]) .menu-outline ul.summary li span {
          color: #c1c6d7;
          background: transparent;
          font-weight: 600;
        }
        :host([color-theme="2"]) .menu-outline ul.summary li.active > a,
        :host([color-theme="2"]) .menu-outline ul.summary li a:hover,
        :host([color-theme="2"]) .menu-outline ul.summary li a:focus,
        :host([color-theme="2"]) .menu-outline ul.summary li a:active {
          color: #f4f4f5;
          background: #252737;
          font-weight: 600;
        }
        button,
        select {
          text-transform: none;
        }
        button,
        input {
          line-height: normal;
        }
        button,
        input,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          margin: 0;
        }
        scroll-button {
          position: absolute;
          bottom: 0;
          right: 16px;
        }
        #site-search-input {
          padding: 6px;
          background: 0 0;
          transition: top 0.5s ease;
          background: #fff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
          border-top: 1px solid rgba(0, 0, 0, 0.07);
          margin-bottom: 10px;
          margin-top: -1px;
        }
        site-search {
          height: auto;
          width: auto;
          font-size: inherit;
        }
        :host([color-theme="0"]) #site-search-input {
          color: #252737;
        }
        :host([color-theme="0"]) site-search {
          color: #252737;
          --site-search-result-background-color: transparent;
          --site-search-result-background-color-hover: #f5f5f5;
          --site-search-link-color-hover: #252737;
          --site-search-link-text-color: #252737;
          --site-search-link-color: #252737;
          --site-search-result-color: #252737;
        }
        :host([color-theme="1"]) site-search {
          color: #704214;
          --site-search-result-background-color: transparent;
          --site-search-result-background-color-hover: transparent;
          --site-search-link-color-hover: #704214;
          --site-search-link-text-color: #704214;
          --site-search-link-color: #704214;
          --site-search-result-color: #704214;
        }
        :host([color-theme="2"]) site-search {
          color: var(--simple-colors-default-theme-light-blue-1, #cfd4e3);
          --site-search-result-background-color: transparent;
          --site-search-result-background-color-hover: transparent;
          --site-search-link-color-hover: var(
            --simple-colors-default-theme-light-blue-1,
            #cfd4e3
          );
          --site-search-link-text-color: var(
            --simple-colors-default-theme-light-blue-1,
            #cfd4e3
          );
          --site-search-link-color: var(
            --simple-colors-default-theme-light-blue-1,
            #cfd4e3
          );
          --site-search-result-color: var(
            --simple-colors-default-theme-light-blue-1,
            #cfd4e3
          );
        }
      `,
    ];
  }

  // render function
  render() {
    return html`
      <div class="site">
        <div class="menu-outline">
          <div id="site-search-input" role="search" part="search-btn">
            <clean-one-search-box
              @input-changed="${this.searchChanged}"
              value="${this.searchTerm}"
            ></clean-one-search-box>
          </div>
          ${this.HAXCMSMobileMenu()}
        </div>
        <div id="body" class="site-body" part="site-body">
          <div id="haxcms-theme-top"></div>
          <div class="site-inner">
            <header class="site-header">
              <div class="btn-container">
                <div class="pull-left">
                  ${this.HAXCMSMobileMenuButton()}
                  ${MicroFrontendRegistry.has("@haxcms/siteToHtml")
                    ? this.PrintBranchButton("bottom")
                    : html`
                        <site-print-button
                          class="btn js-toolbar-action"
                          part="print-btn"
                        ></site-print-button>
                      `}
                  ${MicroFrontendRegistry.has("@core/htmlToPdf")
                    ? this.PDFPageButton("bottom")
                    : ``}
                </div>
                <div class="pull-right">
                  ${this.EmailPageButton()} ${this.QRCodeButton()}
                  <site-rss-button
                    type="rss"
                    class="btn js-toolbar-action"
                    part="rss-btn"
                  ></site-rss-button>
                  <site-git-corner
                    size="small"
                    part="git-corner-btn"
                  ></site-git-corner>
                </div>
              </div>
            </header>
            <main class="page-wrapper" role="main">
              <article class="main-content page-inner">
                <site-breadcrumb
                  part="page-breadcrumb ${this.editMode
                    ? `edit-mode-active`
                    : ``}"
                  ?hidden="${this.searchTerm != "" ? true : false}"
                ></site-breadcrumb>
                <site-active-title
                  part="page-title"
                  ?hidden="${this.searchTerm != "" ? true : false}"
                ></site-active-title>
                <site-active-tags
                  part="page-tags"
                  auto-accent-color
                  ?hidden="${this.searchTerm != "" ? true : false}"
                ></site-active-tags>
                <div class="normal main-section">
                  <site-search
                    hide-input
                    part="search-btn"
                    search="${this.searchTerm}"
                    ?hidden="${this.searchTerm != "" ? false : true}"
                  ></site-search>
                  <section
                    id="contentcontainer"
                    ?hidden="${this.searchTerm != "" ? true : false}"
                  >
                    <div id="slot">
                      <slot></slot>
                    </div>
                  </section>
                </div>
              </article>
            </main>
          </div>
          <footer>
            <!-- These two buttons allow you to go left and right through the pages in the manifest -->
            <site-menu-button
              type="prev"
              position="right"
              class="navigation"
            ></site-menu-button>
            <site-menu-button
              type="next"
              position="left"
              class="navigation"
            ></site-menu-button>
          </footer>
        </div>
        <scroll-button
          .part="${this.editMode ? `edit-mode-active` : ``}"
        ></scroll-button>
      </div>
    `;
  }

  searchChanged(e) {
    if (e.detail.value) {
      // prettier-ignore
      import(
         "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"
       ).then(() => {
        if (store.getInternalRoute() !== 'search') {
          window.history.replaceState({}, null, "x/search");
        }
         this.searchTerm = e.detail.value;
       });
    } else {
      this.searchTerm = "";
    }
  }
  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,
      searchTerm: {
        type: String,
      },
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "clean-one";
  }
  /**
   * Add elements to cheat on initial paint here
   */
  constructor() {
    super();
    this.searchTerm = "";
    this.HAXCMSThemeSettings.autoScroll = true;
    // prettier-ignore
    import(
       "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js"
     );
    // prettier-ignore
    import(
       "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js"
     );
    // prettier-ignore
    import(
       "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js"
     );
    // prettier-ignore
    import(
       "@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-git-corner.js"
     );
    this.__disposer = this.__disposer ? this.__disposer : [];
    autorun((reaction) => {
      this.activeManifestIndex = toJS(store.activeManifestIndex);
      this.searchTerm = "";
      this.__disposer.push(reaction);
    });
  }

  /**
   * life cycle, element is afixed to the DOM
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // only way to hit this
    document.body.style.overflow = "hidden";
    this.HAXCMSThemeSettings.scrollTarget =
      this.shadowRoot.querySelector("#body");
    window.AbsolutePositionStateManager.requestAvailability().scrollTarget =
      this.HAXCMSThemeSettings.scrollTarget;

    // hook up the scroll target
    this.shadowRoot.querySelector("scroll-button").target =
      this.shadowRoot.querySelector("#haxcms-theme-top");

    const params = new URLSearchParams(store.currentRouterLocation.search);
    // if we have a search param already, set it to the field on open
    if (store.getInternalRoute() === "search" && params.get("search")) {
      import(
        "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"
      ).then(() => {
        this.searchTerm = params.get("search");
        this.shadowRoot.querySelector("clean-one-search-box").focus();
        // stall to allow value to be set
        setTimeout(() => {
          this.shadowRoot.querySelector("clean-one-search-box").select();
        }, 0);
      });
    }
  }
  /**
   * life cycle, element is removed from the DOM
   */
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
  /**
   * Previous page to hook into when prev is hit
   */
  prevPage(e) {
    super.prevPage(e);
  }
  /**
   * Next page to hook into when next is hit
   */
  nextPage(e) {
    super.nextPage(e);
  }
}
customElements.define(CleanOne.tag, CleanOne);
export { CleanOne };
