# Summit Athletics Collective - Project 2 Summary

## What Was Built

A fully functional, modern youth sports organization website for "Summit Athletics Collective" - a fictional multi-sport organization offering Hockey, Soccer, Basketball, and Lacrosse programs for ages 6-18.

## Project Requirements ✅

### Core Requirements Met

1. **✅ 10+ Reusable Components** - Built 14 components
   - sac-app (main container with routing)
   - sac-header (API-driven navigation)
   - sac-footer
   - sac-hero (hero banner)
   - sac-home, sac-programs, sac-schedule, sac-parent-info (pages)
   - sac-schedule-card, sac-schedule-band (schedule components)
   - sac-program-card, sac-announcement, sac-cta-card, sac-news-card (content cards)

2. **✅ API Endpoints**
   - `/api/menu` - Returns menu structure in JSON Outline Schema format
   - `/api/schedule` - Returns comprehensive schedule data for all sports/divisions

3. **✅ Routing** - 4 functional routes
   - `/` - Home page
   - `/programs` - Programs overview
   - `/schedule` - Full schedule (loads from API)
   - `/parent-info` - Parent resources
   
4. **✅ Data-Driven UI**
   - Header menu loads from /api/menu
   - Schedule page loads from /api/schedule
   - Schedule band on homepage shows upcoming events from API

5. **✅ DDD Design System** 
   - All spacing uses `--ddd-spacing-*` tokens
   - All colors use `--ddd-theme-default-*` tokens
   - All fonts use `--ddd-font-*` tokens
   - All sizing, borders, shadows from DDD

6. **✅ Branding & Design**
   - Primary Color: Navy80
   - Secondary Color: SkyBlue
   - Consistent color palette throughout
   - Professional, modern look

7. **✅ Content Structure**
   - Multiple content "bands" on homepage
   - Hero section, announcements, upcoming events, news, CTAs
   - Well-organized content hierarchy

8. **✅ Mobile Responsive**
   - Breakpoints at 768px and 480px
   - Mobile-first design approach
   - Flexible grids that adapt to screen size

9. **✅ Vercel Ready**
   - vercel.json configured for SPA routing
   - API endpoints ready for serverless deployment

## Technical Highlights

### Architecture
- **Single Page Application (SPA)** with client-side routing
- **Component-based** using Lit and Web Components
- **API-driven** menu and schedule data
- **Scalable** structure ready for expansion

### Routing Implementation
- Uses `window.location.pathname` for routing
- Browser back/forward support via `popstate` event
- Vercel rewrites ensure all routes serve index.html
- Navigation handled through custom events

### API Design
- Menu follows JSON Outline Schema specification
- Schedule data is hierarchical: Sports → Divisions → Events
- Both endpoints use Vercel serverless functions format

### Component Design
- All components extend DDDSuper for design system integration
- Consistent property patterns
- Reusable across different contexts
- Shadow DOM encapsulation

## File Structure

```
summit-athletics/
├── api/
│   ├── menu.js          # JSON Outline Schema menu API
│   └── schedule.js      # Schedule data API
├── src/
│   ├── sac-app.js       # Main app + routing
│   ├── sac-header.js    # Navigation
│   ├── sac-footer.js    # Footer
│   ├── sac-hero.js      # Hero banner
│   ├── sac-home.js      # Home page
│   ├── sac-programs.js  # Programs page
│   ├── sac-schedule.js  # Schedule page
│   ├── sac-parent-info.js # Parent info
│   ├── sac-schedule-card.js # Event cards
│   ├── sac-schedule-band.js # Upcoming events
│   ├── sac-program-card.js  # Program cards
│   ├── sac-announcement.js  # Announcements
│   ├── sac-cta-card.js      # Call-to-actions
│   └── sac-news-card.js     # News items
├── index.html           # Entry point
├── vercel.json          # Vercel config
├── package.json         # Dependencies
└── rollup.config.js     # Build config
```

## How to Use

### Development
```bash
cd ~/summit-athletics
npm start
```

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy
cd ~/summit-athletics
vercel
```

## Key Features

1. **Dynamic Navigation** - Menu loads from API, making it easy to update
2. **Live Schedule** - All schedule data comes from API endpoint
3. **Upcoming Events Band** - Homepage automatically shows next 3 events
4. **4 Routable Pages** - Home, Programs, Schedule, Parent Info all accessible via routing
5. **Mobile Responsive** - Works beautifully on all screen sizes
6. **Professional Design** - Clean, modern, accessible interface

## Content Highlights

### Home Page
- Hero banner with call-to-action
- Announcement banner for important updates
- Upcoming events (next 3 from schedule API)
- Latest news (3 news cards)
- 2 call-to-action cards (Register, Volunteer)

### Programs Page
- Overview of all 4 sports
- Program cards with details for each sport
- Age ranges and season information

### Schedule Page
- Full schedule organized by sport and division
- Game and practice cards with all details
- Dynamic loading from API

### Parent Info Page
- Getting Started guide
- Frequently Asked Questions
- Policies & Expectations
- Volunteer Opportunities
- 4 anchor sections for easy navigation

## Next Steps

To enhance this project further, you could:

1. **Add a logo** - Generate an AI logo and add to assets/images/
2. **Connect to GitHub** - Push to GitHub for version control
3. **Deploy to Vercel** - Get a live URL
4. **Add more content** - Expand programs, add coach bios, photo galleries
5. **Implement dark mode toggle** - DDD supports it, just need UI control
6. **Add contact form** - Create contact page with form component
7. **Add photo gallery** - Create gallery component with images
8. **Enhance SEO** - Add meta tags, sitemap, etc.

## Notes

- All components use DDD design tokens exclusively
- No external CSS frameworks used
- API data is static JSON but structured for easy database integration
- Routing works both locally and on Vercel
- All components are accessible and keyboard-navigable
- Code follows HAX project patterns and best practices

---

**Created by:** Kaden Mangin  
**Date:** December 2024  
**Course:** IST 402 - Project 2
