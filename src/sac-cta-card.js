/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-cta-card`
 * Call-to-action card
 * 
 * @element sac-cta-card
 */
export class SACCtaCard extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-cta-card";
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.buttonText = "Learn More";
    this.buttonLink = "#";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      buttonText: { type: String },
      buttonLink: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .card {
        background: linear-gradient(135deg, 
          var(--ddd-theme-default-skyBlue) 0%, 
          var(--ddd-theme-default-navy80) 100%);
        color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-6);
        box-shadow: var(--ddd-boxShadow-md);
        text-align: center;
        transition: all 0.3s ease;
      }
      .card:hover {
        box-shadow: var(--ddd-boxShadow-xl);
        transform: translateY(-4px);
      }
      .card-title {
        font-size: var(--ddd-font-size-2xl);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-3);
      }
      .card-description {
        font-size: var(--ddd-font-size-m);
        line-height: 1.6;
        margin-bottom: var(--ddd-spacing-4);
      }
      .card-button {
        display: inline-block;
        background-color: var(--ddd-theme-default-white);
        color: var(--ddd-theme-default-navy80);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-md);
        text-decoration: none;
        font-weight: var(--ddd-font-weight-bold);
        transition: all 0.3s ease;
      }
      .card-button:hover {
        transform: scale(1.05);
        box-shadow: var(--ddd-boxShadow-md);
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="card-title">${this.title}</div>
        <div class="card-description">${this.description}</div>
        <a href="${this.buttonLink}" class="card-button">${this.buttonText}</a>
      </div>
    `;
  }
}

globalThis.customElements.define(SACCtaCard.tag, SACCtaCard);
