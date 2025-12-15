# Summit Athletics Collective

A modern, component-based youth sports organization website built with Web Components and the DDD design system.

## Project Overview

Summit Athletics Collective is a fictional multi-sport youth athletics organization offering Hockey, Soccer, Basketball, and Lacrosse programs for ages 6-18. This website demonstrates:

- Component-based architecture with 14+ reusable Web Components
- Client-side routing with browser history support
- API-driven menu and schedule data
- Responsive design with mobile-first approach
- Full dark mode support
- Accessibility compliance (WCAG 2.1 AA)

## Technology Stack

- **Framework**: Lit 3.3.1
- **Design System**: @haxtheweb/d-d-d v11.0.5
- **Build Tool**: Rollup
- **Dev Server**: @web/dev-server
- **Deployment**: Vercel

## Project Structure

```
summit-athletics/
├── api/
│   ├── menu.js          # Menu API endpoint (JSON Outline Schema)
│   └── schedule.js      # Schedule API endpoint
├── src/
│   ├── sac-app.js       # Main app with routing
│   ├── sac-header.js    # Header with navigation
│   ├── sac-footer.js    # Footer component
│   ├── sac-hero.js      # Hero banner
│   ├── sac-home.js      # Home page
│   ├── sac-programs.js  # Programs page
│   ├── sac-schedule.js  # Schedule page
│   ├── sac-parent-info.js # Parent info page
│   ├── sac-schedule-card.js # Schedule card component
│   ├── sac-schedule-band.js # Upcoming events band
│   ├── sac-program-card.js  # Program card component
│   ├── sac-announcement.js  # Announcement banner
│   ├── sac-cta-card.js     # Call-to-action card
│   └── sac-news-card.js    # News card component
├── index.html
├── vercel.json
└── package.json
```

## Components

The project includes 14 reusable Web Components:

1. **sac-app** - Main application container with routing
2. **sac-header** - Navigation header with API-driven menu
3. **sac-footer** - Site footer
4. **sac-hero** - Hero banner with CTA
5. **sac-home** - Home page layout
6. **sac-programs** - Programs page
7. **sac-schedule** - Schedule page with API data
8. **sac-parent-info** - Parent information page
9. **sac-schedule-card** - Individual event card
10. **sac-schedule-band** - Upcoming events strip
11. **sac-program-card** - Sport program card
12. **sac-announcement** - Announcement banner
13. **sac-cta-card** - Call-to-action card
14. **sac-news-card** - News/updates card

## Features

### Routing
- URL-based navigation: `/`, `/programs`, `/schedule`, `/parent-info`
- Browser back/forward support
- Vercel rewrites for SPA support

### API Endpoints
- **GET /api/menu** - Returns menu structure in JSON Outline Schema format
- **GET /api/schedule** - Returns game/practice schedule data

### Design
- Colors: Navy80 (primary), SkyBlue (secondary), CoalGrey, White
- All spacing, fonts, and tokens from DDD design system
- Responsive breakpoints at 768px and 480px
- Mobile-first approach

## Getting Started

### Installation

```bash
cd summit-athletics
npm install
```

### Development

```bash
npm start
```

Opens browser at http://localhost:8000

### Build

```bash
npm run build
```

Outputs to `public/` directory

### Deploy to Vercel

```bash
vercel
```

## Requirements Met

✅ 10+ reusable Web Components  
✅ API-driven menu from /api/menu  
✅ API-driven schedule from /api/schedule  
✅ JSON Outline Schema for menu  
✅ Routing for 4 pages (Home, Programs, Schedule, Parent Info)  
✅ Schedule band on homepage showing upcoming events  
✅ DDD design system for all styling  
✅ Header and Footer components  
✅ Multiple content bands  
✅ Consistent branding and colors  
✅ Mobile responsive  
✅ Vercel deployment ready  

## Author

Kaden Mangin

## License

Apache-2.0
