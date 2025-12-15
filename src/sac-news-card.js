/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-news-card`
 * News/updates card
 * 
 * @element sac-news-card
 */
export class SACNewsCard extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-news-card";
  }

  constructor() {
    super();
    this.title = "";
    this.date = "";
    this.preview = "";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      date: { type: String },
      preview: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .card {
        background-color: var(--ddd-theme-default-white);
        border: var(--ddd-border-sm);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        box-shadow: var(--ddd-boxShadow-sm);
        transition: all 0.3s ease;
      }
      .card:hover {
        box-shadow: var(--ddd-boxShadow-md);
        transform: translateY(-2px);
      }
      .card-date {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-coalGrey);
        margin-bottom: var(--ddd-spacing-2);
      }
      .card-title {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-2);
      }
      .card-preview {
        font-size: var(--ddd-font-size-s);
        line-height: 1.6;
        color: var(--ddd-theme-default-coalGrey);
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="card-date">${this.date}</div>
        <div class="card-title">${this.title}</div>
        <div class="card-preview">${this.preview}</div>
      </div>
    `;
  }
}

globalThis.customElements.define(SACNewsCard.tag, SACNewsCard);
