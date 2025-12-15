/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-hero`
 * Hero banner with CTA
 * 
 * @element sac-hero
 */
export class SACHero extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-hero";
  }

  constructor() {
    super();
    this.title = "Summit Athletics Collective";
    this.subtitle = "Building Champions Through Youth Sports";
    this.ctaText = "Get Started";
    this.ctaLink = "/programs";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
      ctaText: { type: String },
      ctaLink: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .hero-wrapper {
        background: linear-gradient(135deg, 
          var(--ddd-theme-default-navy80) 0%, 
          var(--ddd-theme-default-potentialMidnight) 100%);
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-10) var(--ddd-spacing-4);
        text-align: center;
      }
      .hero-content {
        max-width: 900px;
        margin: 0 auto;
      }
      .hero-title {
        font-size: var(--ddd-font-size-4xl);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-4);
        color: var(--ddd-theme-default-skyBlue);
      }
      .hero-subtitle {
        font-size: var(--ddd-font-size-xl);
        margin-bottom: var(--ddd-spacing-6);
        line-height: 1.5;
      }
      .hero-cta {
        display: inline-block;
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-md);
        text-decoration: none;
        font-weight: var(--ddd-font-weight-bold);
        font-size: var(--ddd-font-size-m);
        transition: all 0.3s ease;
        box-shadow: var(--ddd-boxShadow-lg);
      }
      .hero-cta:hover {
        transform: translateY(-3px);
        box-shadow: var(--ddd-boxShadow-xl);
      }
      @media (max-width: 768px) {
        .hero-wrapper {
          padding: var(--ddd-spacing-6) var(--ddd-spacing-3);
        }
        .hero-title {
          font-size: var(--ddd-font-size-2xl);
        }
        .hero-subtitle {
          font-size: var(--ddd-font-size-l);
        }
      }
    `];
  }

  render() {
    return html`
      <div class="hero-wrapper">
        <div class="hero-content">
          <h1 class="hero-title">${this.title}</h1>
          <p class="hero-subtitle">${this.subtitle}</p>
          <a href="${this.ctaLink}" class="hero-cta">${this.ctaText}</a>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(SACHero.tag, SACHero);
