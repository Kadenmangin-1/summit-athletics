/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./sac-schedule-card.js";

/**
 * `sac-schedule`
 * Schedule page displaying all events
 * 
 * @element sac-schedule
 */
export class SACSchedule extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-schedule";
  }

  constructor() {
    super();
    this.scheduleData = null;
    this.loading = true;
    this.loadSchedule();
  }

  static get properties() {
    return {
      ...super.properties,
      scheduleData: { type: Object },
      loading: { type: Boolean }
    };
  }

  async loadSchedule() {
    try {
      const response = await fetch('/api/schedule');
      const data = await response.json();
      this.scheduleData = data;
      this.loading = false;
    } catch (error) {
      console.error('Error loading schedule:', error);
      this.loading = false;
    }
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
        margin-bottom: var(--ddd-spacing-6);
      }
      .page-title {
        font-size: var(--ddd-font-size-4xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-3);
      }
      .sport-section {
        margin-bottom: var(--ddd-spacing-8);
      }
      .sport-title {
        font-size: var(--ddd-font-size-2xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-4);
        padding-bottom: var(--ddd-spacing-2);
        border-bottom: 3px solid var(--ddd-theme-default-skyBlue);
      }
      .division-section {
        margin-bottom: var(--ddd-spacing-6);
      }
      .division-title {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-coalGrey);
        margin-bottom: var(--ddd-spacing-3);
      }
      .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: var(--ddd-spacing-4);
        margin-bottom: var(--ddd-spacing-4);
      }
      @media (max-width: 768px) {
        .page-title {
          font-size: var(--ddd-font-size-2xl);
        }
        .events-grid {
          grid-template-columns: 1fr;
        }
      }
    `];
  }

  render() {
    if (this.loading) {
      return html`
        <div class="page-container">
          <div class="page-header">
            <h1 class="page-title">Loading schedule...</h1>
          </div>
        </div>
      `;
    }

    if (!this.scheduleData) {
      return html`
        <div class="page-container">
          <div class="page-header">
            <h1 class="page-title">Schedule unavailable</h1>
          </div>
        </div>
      `;
    }

    return html`
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Game & Practice Schedule</h1>
        </div>
        
        ${this.scheduleData.sports.map(sport => html`
          <div class="sport-section">
            <h2 class="sport-title">${sport.name}</h2>
            
            ${sport.divisions.map(division => html`
              <div class="division-section">
                <h3 class="division-title">${division.name} (Ages ${division.ageRange})</h3>
                
                <div class="events-grid">
                  ${division.events.map(event => html`
                    <sac-schedule-card
                      type="${event.type}"
                      date="${event.date}"
                      time="${event.time}"
                      location="${event.location}"
                      opponent="${event.opponent || ''}"
                      sport="${sport.name}"
                      division="${division.name}"
                      homeAway="${event.homeAway || ''}"
                      notes="${event.notes || ''}">
                    </sac-schedule-card>
                  `)}
                </div>
              </div>
            `)}
          </div>
        `)}
      </div>
    `;
  }
}

globalThis.customElements.define(SACSchedule.tag, SACSchedule);
