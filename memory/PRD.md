# PRD — Aira Mae Cybersecurity Portfolio

## Original Problem Statement
Modern, minimalist, highly interactive personal portfolio for Aira Mae (Cybersecurity Analyst | Cybersecurity Consultant | Web Developer). Dark cybersecurity theme with blue/purple/cyan neon accents, glassmorphism, subtle cat paw branding, full-screen video hero (uploaded SOC cat video + abstract cyber elements), About Me with real photo + dev skill cards, Experience from CV, categorized Security Tools & Technologies grid, Development Stack, Projects, Contact (LinkedIn/email/phone + working form), Footer with paw detail. Responsive, smooth animations throughout.

## User Personas
- Tech recruiters / SOC managers evaluating Aira's security experience
- Consulting clients assessing framework expertise (NIST, ISO 27001)
- Web agency founders reviewing development skills

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (scroll reveals) + lenis (momentum scrolling); single-page with section anchors
- Backend: FastAPI, `/api/contact` POST (stores messages) + GET (list)
- DB: MongoDB via MONGO_URL, collection `contact_messages`
- Assets: local in /app/frontend/public/assets (aira-photo.png, cat-photo.png, hero-soc-cat.mp4)

## Implemented (2026-08-29)
- Kinetic video hero: SOC cat video bg, particle-network canvas, cyber grid, masked line-by-line headline reveal, parallax fade, CTAs, SOC Guardian status badge with paw
- Slow editorial skills marquee with paw separators
- About: real professional photo in glass scan-line frame, CV summary, 6 dev skill cards, 8 certification chips, education/location
- Experience: alternating animated timeline with all 5 CV roles (InfoTrust, Cyberhealth, Ultimum, Integrity Cyber Consulting, DICT NSOC) with responsibilities + tool chips
- Security Tools & Technologies: 9 categories exactly per spec (SIEM, EDR/XDR, SOAR, Ticketing, Threat Intel, Network, Firewall, AV, eDiscovery/GRC)
- Development Stack: 6 animated cards with proficiency bars
- Projects: 4 representative skill-based cards with images, tech chips, detail modal
- Contact: clickable LinkedIn/email/phone cards + working form (MongoDB persistence, sonner toasts)
- Footer with paw signature; Lenis smooth scrolling; mobile nav menu
- data-testids on all interactive elements

## Backlog
- P0: none blocking
- P1: Admin inbox page to read contact messages; real email delivery (Resend)
- P2: Blog/writing section; downloadable CV button; real project case studies replacing representative cards
- Next tasks: user reviews design, provides real project details, decide on email delivery
