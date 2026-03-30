Wise Dashboard UI — Design Engineer Project
A pixel-close recreation of the Wise dashboard, built from scratch as a design engineering exercise. The goal was to move beyond static mockups and implement a real, interactive UI using a production-ready component architecture — the same stack used in modern product teams.
Live demo → your-vercel-url.vercel.app (replace with your Vercel link)
Show Image (add a screenshot)

What this project demonstrates

Translating a complex, real-world product UI into clean, maintainable component code
Setting up and customising a design system using shadcn/ui and Tailwind CSS 4
Implementing semantic colour tokens for both light and dark mode
Structuring a Next.js App Router project the way a product team would
Thinking in components — knowing what to make reusable vs what to keep local


Stack

Next.js 16 — App Router
shadcn/ui — Radix-based accessible components
Tailwind CSS 4 — utility-first styling
TypeScript


Getting started
bashnpm install
npm run dev
Open http://localhost:3000 in your browser.

Project structure
src/
├── app/
│   ├── layout.tsx          # Root layout: sidebar, header, fonts
│   ├── page.tsx            # Dashboard: balance, currency cards, transactions
│   └── globals.css         # Design tokens — colours, radius, dark mode
│
├── components/
│   ├── app-header.tsx      # Top bar: logo, earn button, user menu
│   ├── app-sidebar.tsx     # Left nav with expandable Payments submenu
│   └── ui/                 # shadcn primitives: button, card, badge, avatar…
│
├── hooks/
│   └── use-mobile.ts       # Responsive sidebar behaviour
│
└── lib/
    └── utils.ts            # cn() helper

Design decisions
Tokens over hardcoded values — all colours live as CSS variables in globals.css. Tailwind and shadcn read them via @theme, which means switching the entire theme is a one-file change.
Semantic naming — variables like --primary, --muted, --sidebar-accent describe intent, not appearance. This makes dark mode straightforward and keeps components decoupled from specific colour values.
shadcn as a starting point, not a constraint — component variants and base styles are edited directly (that's the point of shadcn). The UI primitives in src/components/ui/ are owned code, not a locked library.

Key files to look at
WhatWhereColour tokens, dark mode, radiussrc/app/globals.cssDashboard layout and contentsrc/app/page.tsxSidebar navigationsrc/components/app-sidebar.tsxHeadersrc/components/app-header.tsxButton variantssrc/components/ui/button.tsxCard stylessrc/components/ui/card.tsx

About
Built by Annika Bergkvist — design engineer based in Sweden, working at the intersection of product design and frontend development.
LinkedIn · GitHub
