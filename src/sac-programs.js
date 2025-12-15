/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./sac-program-card.js";

/**
 * `sac-programs`
 * Programs page
 * 
 * @element sac-programs
 */
export class SACPrograms extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-programs";
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .page-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: var(--ddd-spacing-6) var(--ddd-spacing-4);
      }
      .page-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }
      .page-title {
        font-size: var(--ddd-font-size-4xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-3);
      }
      .page-subtitle {
        font-size: var(--ddd-font-size-l);
        color: var(--ddd-theme-default-coalGrey);
        line-height: 1.6;
      }
      .programs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--ddd-spacing-5);
      }
      @media (max-width: 768px) {
        .page-title {
          font-size: var(--ddd-font-size-2xl);
        }
        .programs-grid {
          grid-template-columns: 1fr;
        }
      }
    `];
  }

  render() {
    return html`
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Our Programs</h1>
          <p class="page-subtitle">
            Summit Athletics Collective offers four comprehensive youth sports programs
            designed to develop skills, build character, and foster a love of athletics.
          </p>
        </div>
        
        <div class="programs-grid">
          <sac-program-card
            title="Hockey"
            ageRange="6-18"
            season="Fall/Winter/Spring"
            description="Our hockey program offers skill development, competitive play, and team building for all levels. From learn-to-skate to travel teams, we provide comprehensive training in a supportive environment.">
          </sac-program-card>
          
          <sac-program-card
            title="Soccer"
            ageRange="6-18"
            season="Spring/Fall"
            description="Develop fundamental soccer skills including dribbling, passing, shooting, and teamwork. Our program emphasizes both technical skills and game strategy, with opportunities for recreational and competitive play.">
          </sac-program-card>
          
          <sac-program-card
            title="Basketball"
            ageRange="6-18"
            season="Winter/Spring"
            description="Learn basketball fundamentals from experienced coaches. Focus on skill development, teamwork, and sportsmanship. Multiple age divisions ensure age-appropriate instruction and competition.">
          </sac-program-card>
          
          <sac-program-card
            title="Lacrosse"
            ageRange="8-18"
            season="Spring/Summer"
            description="Fast-paced lacrosse program teaching stick skills, field awareness, and team strategy. Both boys' and girls' divisions available with opportunities for tournament play and skill clinics.">
          </sac-program-card>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(SACPrograms.tag, SACPrograms);
