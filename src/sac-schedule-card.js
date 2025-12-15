/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-schedule-card`
 * Individual schedule event card
 * 
 * @element sac-schedule-card
 */
export class SACScheduleCard extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-schedule-card";
  }

  constructor() {
    super();
    this.type = "game";
    this.date = "";
    this.time = "";
    this.location = "";
    this.opponent = "";
    this.sport = "";
    this.division = "";
    this.homeAway = "home";
    this.notes = "";
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String },
      date: { type: String },
      time: { type: String },
      location: { type: String },
      opponent: { type: String },
      sport: { type: String },
      division: { type: String },
      homeAway: { type: String },
      notes: { type: String }
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
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--ddd-spacing-3);
        padding-bottom: var(--ddd-spacing-2);
        border-bottom: var(--ddd-border-sm);
      }
      .card-type {
        display: inline-block;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
      }
      .card-type.game {
        background-color: var(--ddd-theme-default-skyBlue);
        color: var(--ddd-theme-default-navy80);
      }
      .card-type.practice {
        background-color: var(--ddd-theme-default-coalGrey);
        color: var(--ddd-theme-default-white);
      }
      .card-sport {
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-medium);
        color: var(--ddd-theme-default-potentialMidnight);
      }
      .card-body {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }
      .card-row {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
      }
      .card-label {
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        font-size: var(--ddd-font-size-s);
        min-width: 80px;
      }
      .card-value {
        color: var(--ddd-theme-default-coalGrey);
        font-size: var(--ddd-font-size-s);
      }
      .card-opponent {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-potentialMidnight);
        margin-top: var(--ddd-spacing-2);
      }
      .card-notes {
        margin-top: var(--ddd-spacing-2);
        padding-top: var(--ddd-spacing-2);
        border-top: var(--ddd-border-sm);
        font-size: var(--ddd-font-size-xs);
        font-style: italic;
        color: var(--ddd-theme-default-coalGrey);
      }
    `];
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  }

  render() {
    return html`
      <div class="card">
        <div class="card-header">
          <span class="card-type ${this.type}">${this.type}</span>
          <span class="card-sport">${this.sport} - ${this.division}</span>
        </div>
        
        <div class="card-body">
          <div class="card-row">
            <span class="card-label">Date:</span>
            <span class="card-value">${this.formatDate(this.date)}</span>
          </div>
          
          <div class="card-row">
            <span class="card-label">Time:</span>
            <span class="card-value">${this.time}</span>
          </div>
          
          <div class="card-row">
            <span class="card-label">Location:</span>
            <span class="card-value">${this.location}</span>
          </div>
          
          ${this.opponent ? html`
            <div class="card-opponent">
              vs. ${this.opponent} ${this.homeAway === 'home' ? '(Home)' : '(Away)'}
            </div>
          ` : ''}
          
          ${this.notes ? html`
            <div class="card-notes">${this.notes}</div>
          ` : ''}
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(SACScheduleCard.tag, SACScheduleCard);
