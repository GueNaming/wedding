# Wedding Invitation Website - Technical Specification

## 1. Project Overview

### Purpose
A one-time, mobile-first wedding invitation website for the wedding of 장규남 and 손은주.

### Key Requirements
- Single-page application (SPA)
- Mobile-optimized design
- No subdomain needed
- Customizable layout and theme
- Guest message functionality

## 2. Technical Architecture

### Frontend Stack
- **Build Tool**: Vite (fast, modern, zero-config)
- **Language**: Vanilla JavaScript (ES6+)
- **Styling**: Modern CSS with CSS Custom Properties
- **Deployment**: Static hosting (Option B - likely Vercel or Netlify)

### Data Management
- **Guest Messages**: Simple form with localStorage or backend API
- **Content**: Static configuration file for easy updates

## 3. Feature Specifications

### 3.1 Intro Section
- Full-screen landing page
- Couple names: 장규남 & 손은주
- Elegant typography and animations
- Scroll indicator

### 3.2 Couple Information Section
**Groom Side:**
- Name: 장규남
- Father: 아무개1
- Mother: 아무개2

**Bride Side:**
- Name: 손은주
- Father: 아무개1
- Mother: 아무개2

### 3.3 Photo Gallery
- Sample wedding photos from Naver
- Responsive grid layout
- Lightbox/modal view for full-size images
- Smooth transitions and lazy loading

### 3.4 Event Details
- **Date**: 2026년 4월 18일 (토요일)
- **Time**: 오전 11시 30분
- **Venue**: 송파문정 더컨밴션 아모르홀
- Countdown timer to wedding day

### 3.5 Location & Maps
**Map Integration:**
- Tmap link
- Kakao Map link
- Naver Map link

**Address:**
- 송파문정 더컨밴션 아모르홀
- Full address with postal code
- Transportation information

### 3.6 Congratulatory Messages
**Form Fields:**
- Name (required)
- Message (required, textarea)
- Submit button

**Features:**
- Form validation
- Success/error feedback
- Message display (optional: show recent messages)

### 3.7 Theme Customization
**Customizable Elements:**
- Color scheme (primary, secondary, accent colors)
- Font family
- Section backgrounds
- Animation preferences

**Implementation:**
- CSS custom properties
- Configuration file (config.js or JSON)
- Easy-to-modify structure

## 4. Design Requirements

### 4.1 Visual Design
- **Style**: Modern, elegant, romantic
- **Color Palette**: Soft pastels with vibrant accents
- **Typography**: Premium fonts (Google Fonts: Noto Sans KR, Nanum Myeongjo)
- **Animations**: Smooth fade-ins, parallax effects, micro-interactions

### 4.2 Mobile-First Approach
- Responsive breakpoints:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- Touch-friendly UI elements
- Optimized images for mobile

### 4.3 Performance
- Lazy loading for images
- Optimized asset sizes
- Fast initial load time (<3s)
- Smooth 60fps animations

## 5. Data Structure

### 5.1 Configuration File (config.js)
```javascript
{
  wedding: {
    groom: {
      name: "장규남",
      father: "아무개1",
      mother: "아무개2"
    },
    bride: {
      name: "손은주",
      father: "아무개1",
      mother: "아무개2"
    },
    date: "2026-04-18T11:30:00+09:00",
    venue: {
      name: "송파문정 더컨밴션 아모르홀",
      address: "...",
      coordinates: { lat: ..., lng: ... }
    }
  },
  theme: {
    colors: { ... },
    fonts: { ... }
  }
}
```

### 5.2 Message Data Structure
```javascript
{
  id: "unique-id",
  name: "Guest Name",
  message: "Congratulatory message",
  timestamp: "2026-02-07T22:00:00Z"
}
```

## 6. Deployment Strategy

### Option B: Modern Static Hosting
**Recommended Platforms:**
1. **Vercel** (Recommended)
   - Zero-config deployment
   - Automatic HTTPS
   - Global CDN
   - Free tier available

2. **Netlify**
   - Easy deployment
   - Form handling built-in
   - Free tier available

3. **GitHub Pages**
   - Free hosting
   - Custom domain support

### Deployment Steps
1. Build production bundle: `npm run build`
2. Deploy `dist` folder to chosen platform
3. Configure custom domain (optional)
4. Set up analytics (optional)

## 7. Development Workflow

### Phase 1: Setup (Current)
- Initialize Vite project
- Set up project structure
- Install dependencies

### Phase 2: Core Development
- Implement design system
- Build all sections
- Add interactivity

### Phase 3: Content Integration
- Add wedding photos
- Configure wedding details
- Test message functionality

### Phase 4: Testing & Optimization
- Mobile testing
- Performance optimization
- Cross-browser testing

### Phase 5: Deployment
- Build production bundle
- Deploy to hosting platform
- Final testing

## 8. Browser & Device Support

### Target Browsers
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+
- Desktop Chrome, Firefox, Safari, Edge (latest 2 versions)

### Testing Devices
- iPhone (various sizes)
- Android phones (various sizes)
- iPad
- Desktop browsers

## 9. Future Enhancements (Optional)
- RSVP functionality
- Photo upload by guests
- Live streaming integration
- Guestbook with photo attachments
- Multi-language support (Korean/English)

## 10. Security & Privacy
- No sensitive data collection
- Basic form validation
- Optional: Simple spam protection for messages
- HTTPS enforced in production
