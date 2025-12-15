/**
 * Copyright 2025 Kaden Mangin
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `sac-parent-info`
 * Parent information page
 * 
 * @element sac-parent-info
 */
export class SACParentInfo extends DDDSuper(LitElement) {

  static get tag() {
    return "sac-parent-info";
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .page-container {
        max-width: 1200px;
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
      .section {
        margin-bottom: var(--ddd-spacing-8);
        padding: var(--ddd-spacing-5);
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        box-shadow: var(--ddd-boxShadow-sm);
      }
      .section-title {
        font-size: var(--ddd-font-size-2xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-bottom: var(--ddd-spacing-4);
        border-bottom: 2px solid var(--ddd-theme-default-skyBlue);
        padding-bottom: var(--ddd-spacing-2);
      }
      .section-content {
        font-size: var(--ddd-font-size-s);
        line-height: 1.8;
        color: var(--ddd-theme-default-coalGrey);
      }
      .section-content h4 {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy80);
        margin-top: var(--ddd-spacing-3);
        margin-bottom: var(--ddd-spacing-2);
      }
      .section-content ul {
        margin-left: var(--ddd-spacing-5);
        margin-bottom: var(--ddd-spacing-3);
      }
      .section-content li {
        margin-bottom: var(--ddd-spacing-2);
      }
      @media (max-width: 768px) {
        .page-title {
          font-size: var(--ddd-font-size-2xl);
        }
      }
    `];
  }

  render() {
    return html`
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Parent Information</h1>
        </div>
        
        <div class="section" id="getting-started">
          <h2 class="section-title">Getting Started</h2>
          <div class="section-content">
            <p>
              Welcome to Summit Athletics Collective! We're excited to have your family join 
              our community. Here's what you need to know to get started:
            </p>
            
            <h4>Registration Process</h4>
            <ul>
              <li>Visit our Programs page to choose your sport</li>
              <li>Complete the online registration form</li>
              <li>Submit required documentation (birth certificate, medical forms)</li>
              <li>Pay registration fees (scholarships available)</li>
              <li>Attend mandatory parent orientation</li>
            </ul>
            
            <h4>What to Expect</h4>
            <p>
              Your athlete will be placed on a team based on age and skill level. 
              Coaches will contact you before the season begins with practice schedules 
              and team information. All athletes receive a uniform and access to our 
              training facilities.
            </p>
          </div>
        </div>
        
        <div class="section" id="faqs">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <div class="section-content">
            <h4>What equipment does my child need?</h4>
            <p>
              Equipment requirements vary by sport. We provide uniforms, but athletes 
              need their own protective gear and sport-specific equipment. Detailed 
              equipment lists are provided upon registration.
            </p>
            
            <h4>How long is the season?</h4>
            <p>
              Seasons typically run 10-12 weeks, with practices 2-3 times per week 
              and games on weekends. Specific schedules vary by sport and age group.
            </p>
            
            <h4>Are there tryouts?</h4>
            <p>
              Most programs are recreational and open to all skill levels. Select 
              travel teams may have tryouts. Contact us for specific program details.
            </p>
            
            <h4>What about bad weather?</h4>
            <p>
              Weather cancellations are posted on our website and sent via email. 
              For outdoor sports, we follow local school district closures.
            </p>
          </div>
        </div>
        
        <div class="section" id="policies">
          <h2 class="section-title">Policies & Expectations</h2>
          <div class="section-content">
            <h4>Code of Conduct</h4>
            <p>
              Summit Athletics Collective is committed to providing a positive, safe, 
              and inclusive environment for all participants. We expect:
            </p>
            <ul>
              <li>Respect for coaches, officials, opponents, and teammates</li>
              <li>Good sportsmanship at all times</li>
              <li>Commitment to attendance and effort</li>
              <li>Zero tolerance for bullying or harassment</li>
            </ul>
            
            <h4>Safety First</h4>
            <p>
              All coaches are background-checked and certified. We maintain current 
              emergency action plans for all facilities. Parents must complete medical 
              forms and provide emergency contacts.
            </p>
            
            <h4>Communication</h4>
            <p>
              Stay informed through our weekly email newsletter, website updates, and 
              team communications. Contact your coach first with team-specific questions.
            </p>
          </div>
        </div>
        
        <div class="section" id="volunteer">
          <h2 class="section-title">Volunteer Opportunities</h2>
          <div class="section-content">
            <p>
              Summit Athletics relies on parent volunteers to provide quality programs. 
              There are many ways to get involved:
            </p>
            
            <h4>Coaching</h4>
            <p>
              No experience necessary! We provide training and certification. Lead a 
              team and make a lasting impact on young athletes.
            </p>
            
            <h4>Team Manager</h4>
            <p>
              Assist coaches with communications, scheduling, and logistics. Perfect 
              for organized parents who want to help without coaching.
            </p>
            
            <h4>Event Support</h4>
            <p>
              Help with tournaments, fundraisers, and special events. Flexible time 
              commitment with immediate impact.
            </p>
            
            <h4>Board of Directors</h4>
            <p>
              Join our leadership team and help shape the future of Summit Athletics. 
              Board positions available annually.
            </p>
            
            <p>
              Interested? Contact us at volunteers@summitathletics.org or complete 
              our volunteer interest form on the website.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(SACParentInfo.tag, SACParentInfo);
