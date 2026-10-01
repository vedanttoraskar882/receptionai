# ReceptionAI - Frontend Landing Page

Modern, responsive frontend-only landing page for **ReceptionAI**, the UK-based AI Micro-Workflow Automation Platform designed for healthcare and hospitality SMEs.

## Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS**
- **Lucide React Icons**
- **Browser localStorage** for persistent "Request a Pilot" form submissions

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production (Vercel / Netlify)
```bash
npm run build
```

---

## Features & Requirements Complied

- **Frontend-Only**: No backend, database, authentication, user accounts, or external APIs.
- **Critical Favicon Requirement**: Blank favicon (`data:,`) with no icon images or default Vite favicons.
- **Sections**:
  1. **Home**: Hero section, value proposition, dashboard-style AI micro-workflow visual, floating cards, subtle animations.
  2. **About**: Frontline reality, Problem vs. ReceptionAI comparison, "Built for Real Front-Desk Environments", founder block (Sarita Kumari Chaudhary), and UK Target Market area.
  3. **Platform**: 6 primary product modules + Advanced Intelligence Layer cards.
  4. **How It Works**: Visually connected 6-step operational process.
  5. **Market Pricing**:
     - Starter: **£79 / month**
     - Professional: **£149 / month** (Popular)
     - Multi-Site: **£299 / month**
     - Onboarding & Configuration: **£199** one-off
     - Voice & Kiosk Channel Add-On: **£39 / month**
     - Pilot Traction Evidence (18 UK SMEs, 6-8 weeks, 34% call reduction, 5.2h saved/week, 78% satisfaction, mandatory disclaimer note)
  6. **FAQ**: 10 accordion questions and answers verbatim from the requirements.
  7. **Footer**: Premium dark footer, brand tagline, platform links, UK location, and copyright.
- **Request a Pilot Modal**:
  - Validates Full Name, Phone Number, Email Address, Organisation Name.
  - Appends to `receptionAI_pilot_submissions` in `localStorage` without overwriting prior submissions.
  - Saves ISO timestamps.
  - Displays confirmation and clears fields upon submission.
