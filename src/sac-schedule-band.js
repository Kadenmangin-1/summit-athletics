/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-schedule-band`
 * Upcoming events band for homepage
 * 
 * @element sac-schedule-band
 */
export class SACScheduleBand extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-schedule-band";
  }

  constructor() {
    super();
    this.events = [];
    this.loading = true;
    this.loadUpcomingEvents();
  }

  static get properties() {
    return {
      ...super.properties,
      events: { type: Array },
      loading: { type: Boolean }
    };
  }

  async loadUpcomingEvents() {
    try {
      const response = await fetch('/api/schedule');
      const data = await response.json();
      
      // Flatten all events and get next 3
      const allEvents = [];
      data.sports.forEach(sport => {
        sport.divisions.forEach(division => {
          division.events.forEach(event => {
            allEvents.push({
              ...event,
              sport: sport.name,
              division: division.name
            });
          });
        });
      });
      
      // Sort by date and take first 3
      allEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
      this.events = allEvents.slice(0, 3);
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
        background-color: var(--ddd-theme-default-limestoneLight);
        padding: var(--ddd-spacing-6) var(--ddd-spacing-4);
      }
      .band-container {
        max-width: 1400px;
        margin: 0 auto;
      }
      .band-title {
        font-size: var(--ddd-font-size-2xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        text-align: center;
        margin-bottom: var(--ddd-spacing-4);
      }
      .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--ddd-spacing-4);
      }
      .event-item {
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        box-shadow: var(--ddd-boxShadow-sm);
        transition: all 0.3s ease;
      }
      .event-item:hover {
        box-shadow: var(--ddd-boxShadow-md);
        transform: translateY(-2px);
      }
      .event-date {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-coalGrey);
        margin-bottom: var(--ddd-spacing-2);
      }
      .event-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-2);
      }
      .event-details {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-coalGrey);
      }
    `];
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric'
    });
  }

  render() {
    if (this.loading) {
      return html`
        <div class="band-container">
          <h2 class="band-title">Loading upcoming events...</h2>
        </div>
      `;
    }

    return html`
      <div class="band-container">
        <h2 class="band-title">Upcoming Events</h2>
        <div class="events-grid">
          ${this.events.map(event => html`
            <div class="event-item">
              <div class="event-date">${this.formatDate(event.date)} at ${event.time}</div>
              <div class="event-title">
                ${event.sport} - ${event.division}
              </div>
              <div class="event-details">
                ${event.type === 'game' ? `vs. ${event.opponent}` : 'Practice'}<br>
                ${event.location}
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(SACScheduleBand.tag, SACScheduleBand);
