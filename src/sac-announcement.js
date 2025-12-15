/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-announcement`
 * Announcement banner
 * 
 * @element sac-announcement
 */
export class SACAnnouncement extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-announcement";
  }

  constructor() {
    super();
    this.message = "";
    this.type = "info";
  }

  static get properties() {
    return {
      ...super.properties,
      message: { type: String },
      type: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .announcement {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-medium);
        margin-bottom: var(--ddd-spacing-4);
      }
      .announcement.info {
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
      }
      .announcement.warning {
        background-color: var(--ddd-theme-default-original87Pink);
        color: var(--ddd-theme-default-potentialMidnight);
      }
    `];
  }

  render() {
    return html`
      <div class="announcement ${this.type}">
        ${this.message}
      </div>
    `;
  }
}

globalThis.customElements.define(SACAnnouncement.tag, SACAnnouncement);
