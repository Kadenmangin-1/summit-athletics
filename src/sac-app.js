/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./sac-header.js";
import "./sac-home.js";
import "./sac-programs.js";
import "./sac-schedule.js";
import "./sac-parent-info.js";
import "./sac-footer.js";

/**
 * `sac-app`
 * Main application container with routing for Summit Athletics Collective
 * 
 * @element sac-app
 */
export class SACApp extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-app";
  }

  constructor() {
    super();
    this.route = window.location.pathname || "/";
    this.initRouting();
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--ddd-theme-default-white);
      }
      .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .content {
        flex: 1;
      }
    `];
  }

  initRouting() {
    // Handle initial page load
    this.route = window.location.pathname;
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.route = window.location.pathname;
    });
  }

  handleNavigation(e) {
    if (e.detail && e.detail.path) {
      this.route = e.detail.path;
      window.history.pushState({}, "", e.detail.path);
    }
  }

  renderPage() {
    switch(this.route) {
      case '/programs':
        return html`<sac-programs></sac-programs>`;
      case '/schedule':
        return html`<sac-schedule></sac-schedule>`;
      case '/parent-info':
        return html`<sac-parent-info></sac-parent-info>`;
      default:
        return html`<sac-home></sac-home>`;
    }
  }

  render() {
    return html`
      <div class="app-container">
        <sac-header 
          .currentRoute="${this.route}"
          @navigate="${this.handleNavigation}">
        </sac-header>
        <div class="content">
          ${this.renderPage()}
        </div>
        <sac-footer></sac-footer>
      </div>
    `;
  }
}

globalThis.customElements.define(SACApp.tag, SACApp);
