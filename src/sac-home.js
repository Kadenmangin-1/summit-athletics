/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./sac-hero.js";
import "./sac-schedule-band.js";
import "./sac-announcement.js";
import "./sac-news-card.js";
import "./sac-cta-card.js";

/**
 * `sac-home`
 * Home page layout
 * 
 * @element sac-home
 */
export class SACHome extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-home";
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
        padding: var(--ddd-spacing-4);
      }
      .section {
        margin-bottom: var(--ddd-spacing-8);
      }
      .section-title {
        font-size: var(--ddd-font-size-2xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-4);
        text-align: center;
      }
      .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-6);
      }
      .cta-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--ddd-spacing-4);
      }
    `];
  }

  render() {
    return html`
      <sac-hero></sac-hero>
      
      <div class="page-container">
        <div class="section">
          <sac-announcement 
            message="⚡ Spring Registration Now Open! Sign up for our 2025 spring season today."
            type="info">
          </sac-announcement>
        </div>
        
        <sac-schedule-band></sac-schedule-band>
        
        <div class="section">
          <h2 class="section-title">Latest News</h2>
          <div class="news-grid">
            <sac-news-card
              title="U14 Hockey Team Wins Championship"
              date="December 10, 2024"
              preview="Our U14 Bantam hockey team brought home the championship trophy after an incredible season. Congratulations to players and coaches!">
            </sac-news-card>
            
            <sac-news-card
              title="New Soccer Fields Opening in Spring"
              date="December 5, 2024"
              preview="We're excited to announce two new state-of-the-art turf fields will be ready for spring season. More practice and game time for all!">
            </sac-news-card>
            
            <sac-news-card
              title="Coach Appreciation Night Success"
              date="November 28, 2024"
              preview="Thank you to everyone who attended our annual Coach Appreciation Night. We celebrated the dedication of our amazing volunteer coaches.">
            </sac-news-card>
          </div>
        </div>
        
        <div class="section">
          <div class="cta-grid">
            <sac-cta-card
              title="Join Us Today"
              description="Register your athlete for one of our four sports programs. Build skills, make friends, and have fun!"
              buttonText="Register Now"
              buttonLink="/programs">
            </sac-cta-card>
            
            <sac-cta-card
              title="Volunteer With Us"
              description="We need coaches, team managers, and volunteers. Help make a difference in youth sports!"
              buttonText="Get Involved"
              buttonLink="/parent-info#volunteer">
            </sac-cta-card>
          </div>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(SACHome.tag, SACHome);
