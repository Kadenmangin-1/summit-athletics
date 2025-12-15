/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-footer`
 * Site footer with links and information
 * 
 * @element sac-footer
 */
export class SACFooter extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-footer";
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-navy80);
        color: var(--ddd-theme-default-white);
        margin-top: var(--ddd-spacing-8);
      }
      .footer-wrapper {
        max-width: 1400px;
        margin: 0 auto;
        padding: var(--ddd-spacing-6) var(--ddd-spacing-4);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--ddd-spacing-6);
      }
      .footer-section {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }
      .footer-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-skyBlue);
        margin-bottom: var(--ddd-spacing-2);
      }
      .footer-link {
        color: var(--ddd-theme-default-white);
        text-decoration: none;
        font-size: var(--ddd-font-size-s);
        transition: color 0.3s ease;
      }
      .footer-link:hover {
        color: var(--ddd-theme-default-skyBlue);
      }
      .footer-text {
        font-size: var(--ddd-font-size-s);
        line-height: 1.6;
      }
      .footer-bottom {
        text-align: center;
        padding: var(--ddd-spacing-4);
        border-top: 1px solid var(--ddd-theme-default-coalGrey);
        font-size: var(--ddd-font-size-xs);
      }
      @media (max-width: 768px) {
        .footer-wrapper {
          grid-template-columns: 1fr;
          gap: var(--ddd-spacing-4);
        }
      }
    `];
  }

  render() {
    return html`
      <div class="footer-wrapper">
        <div class="footer-section">
          <div class="footer-title">Summit Athletics Collective</div>
          <div class="footer-text">
            Building champions through youth sports. 
            We offer Hockey, Soccer, Basketball, and Lacrosse programs 
            for athletes ages 6-18.
          </div>
        </div>
        
        <div class="footer-section">
          <div class="footer-title">Quick Links</div>
          <a href="/" class="footer-link">Home</a>
          <a href="/programs" class="footer-link">Programs</a>
          <a href="/schedule" class="footer-link">Schedule</a>
          <a href="/parent-info" class="footer-link">Parent Info</a>
        </div>
        
        <div class="footer-section">
          <div class="footer-title">Contact Us</div>
          <div class="footer-text">
            Email: info@summitathletics.org<br>
            Phone: (814) 555-PLAY<br>
            123 Sports Way<br>
            State College, PA 16801
          </div>
        </div>
        
        <div class="footer-section">
          <div class="footer-title">Follow Us</div>
          <div class="footer-text">
            Stay connected with Summit Athletics<br>
            for updates, photos, and news.
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        © 2025 Summit Athletics Collective. All rights reserved.
      </div>
    `;
  }
}

globalThis.customElements.define(SACFooter.tag, SACFooter);
