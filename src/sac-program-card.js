/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-program-card`
 * Program overview card
 * 
 * @element sac-program-card
 */
export class SACProgramCard extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-program-card";
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.ageRange = "";
    this.season = "";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      ageRange: { type: String },
      season: { type: String }
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
        padding: var(--ddd-spacing-5);
        box-shadow: var(--ddd-boxShadow-sm);
        transition: all 0.3s ease;
        height: 100%;
      }
      .card:hover {
        box-shadow: var(--ddd-boxShadow-lg);
        transform: translateY(-4px);
      }
      .card-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-3);
      }
      .card-info {
        display: flex;
        gap: var(--ddd-spacing-3);
        margin-bottom: var(--ddd-spacing-3);
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-coalGrey);
      }
      .card-description {
        font-size: var(--ddd-font-size-s);
        line-height: 1.6;
        color: var(--ddd-theme-default-coalGrey);
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="card-title">${this.title}</div>
        <div class="card-info">
          <span><strong>Ages:</strong> ${this.ageRange}</span>
          <span><strong>Season:</strong> ${this.season}</span>
        </div>
        <div class="card-description">${this.description}</div>
      </div>
    `;
  }
}

globalThis.customElements.define(SACProgramCard.tag, SACProgramCard);
