/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-header`
 * Navigation header with API-driven menu
 * 
 * @element sac-header
 */
export class SACHeader extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-header";
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.menuData = null;
    this.navItems = [];
    this.loading = true;
    this.loadMenu();
  }

  static get properties() {
    return {
      ...super.properties,
      currentRoute: { type: String },
      menuData: { type: Object },
      navItems: { type: Array },
      loading: { type: Boolean }
    };
  }

  async loadMenu() {
    try {
      const response = await fetch('/api/menu');
      const data = await response.json();
      this.menuData = data;
      // Extract top-level navigation items (indent 0)
      this.navItems = data.items.filter(item => item.indent === 0);
      this.loading = false;
    } catch (error) {
      console.error('Error loading menu:', error);
      // Fallback menu if API fails
      this.navItems = [
        { id: "home", location: "/", title: "Home" },
        { id: "programs", location: "/programs", title: "Programs" },
        { id: "schedule", location: "/schedule", title: "Schedule" },
        { id: "parent-info", location: "/parent-info", title: "Parent Info" }
      ];
      this.loading = false;
    }
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-white);
        box-shadow: var(--ddd-boxShadow-md);
      }
      .header-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-4);
        max-width: 1400px;
        margin: 0 auto;
        gap: var(--ddd-spacing-3);
      }
      .logo {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-3);
        flex-shrink: 0;
        cursor: pointer;
      }
      .logo-text {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-skyBlue);
      }
      .logo-tagline {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-regular);
      }
      nav {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-2);
        justify-content: flex-end;
        flex: 1;
        min-width: 0;
      }
      .nav-link {
        text-decoration: none;
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-sm);
        transition: all 0.3s ease;
        font-weight: var(--ddd-font-weight-medium);
        font-size: var(--ddd-font-size-s);
        white-space: nowrap;
        flex-shrink: 0;
      }
      .nav-link:hover {
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
        transform: translateY(-2px);
      }
      .nav-link.active {
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
      }

      @media (max-width: 768px) {
        .header-wrapper {
          justify-content: center;
          gap: var(--ddd-spacing-2);
        }
        .logo-text {
          font-size: var(--ddd-font-size-l);
        }
        nav {
          justify-content: center;
          width: 100%;
          margin-top: var(--ddd-spacing-2);
        }
        .nav-link {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
        }
      }

      @media (max-width: 480px) {
        .header-wrapper {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-2);
        }
        .logo-text {
          font-size: var(--ddd-font-size-m);
        }
        nav {
          gap: var(--ddd-spacing-1);
        }
        .nav-link {
          padding: var(--ddd-spacing-1);
          font-size: var(--ddd-font-size-xxs);
        }
      }
    `];
  }

  handleClick(e, path) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    if (this.loading) {
      return html`
        <div class="header-wrapper">
          <div class="logo">
            <div class="logo-text">Loading...</div>
          </div>
        </div>
      `;
    }

    return html`
      <div class="header-wrapper">
        <div class="logo" @click="${(e) => this.handleClick(e, '/')}">
          <div>
            <div class="logo-text">Summit Athletics</div>
            <div class="logo-tagline">Collective</div>
          </div>
        </div>
        <nav>
          ${this.navItems.map(item => html`
            <a 
              href="${item.location}"
              class="nav-link ${this.currentRoute === item.location ? 'active' : ''}"
              @click="${(e) => this.handleClick(e, item.location)}">
              ${item.title}
            </a>
          `)}
        </nav>
      </div>
    `;
  }
}

globalThis.customElements.define(SACHeader.tag, SACHeader);
