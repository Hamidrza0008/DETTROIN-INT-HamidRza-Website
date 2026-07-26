# Krishna International School — Premium Website Redesign

A modern, responsive redesign of [kisaligarh.com](https://kisaligarh.com/), built for the Full Stack Developer internship assessment. The goal wasn't to copy the existing site — it was to rethink its UI/UX, responsiveness, navigation, accessibility, animation and performance from the ground up while keeping the school's identity and essential content intact.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer&logoColor=white)

---

## Candidate Details

| | |
|---|---|
| **Full Name** | Hamid Rza |
| **Intern ID** | _[Add your Intern ID here]_ |
| **Email Address** | hamidrza0008@gmail.com |
| **GitHub Username** | _[Add your GitHub username here]_ |
| **Selected Website** | [kisaligarh.com](https://kisaligarh.com/) |
| **Live Demo** | [dettroin-int-hamid-rza-website.vercel.app](https://dettroin-int-hamid-rza-website.vercel.app/) |

---

## Technologies Used

- **Framework**: Next.js 16 (App Router, JavaScript)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (scroll-linked progress, spring physics, stagger reveals)
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Inter (body) via `next/font`
- **Image Optimization**: `next/image` with `sharp`
- **Deployment**: Vercel

---

## Key Improvements Made

**Design & Branding**
- Full visual redesign around a premium navy (`#0F172A`) / gold (`#C9A227`) / blue (`#2563EB`) palette with editorial typography (Playfair Display + Inter), replacing the original site's dated look — while keeping the school's real logo, name, and identity untouched.
- Every section (Hero, About, Why Choose Us, Academics, Gallery, Testimonials, Admissions, Contact) was hand-designed with its own distinct layout — image-background cards, a scroll-driven zigzag timeline, a masonry gallery, quote cards — so no two sections feel repetitive.

**Navigation & UX**
- Floating glassmorphic navbar with scroll-spy active-link highlighting (auto-updates as you scroll past each section) and a smooth-scrolling anchor system.
- Fully custom mobile navigation drawer with backdrop blur and staggered link reveal.
- A custom interactive "string" divider between sections that responds to cursor movement with spring-physics vibration, for a distinct, premium micro-interaction.

**Responsiveness**
- Built desktop-first, then systematically adapted for tablet and mobile — including layout order changes (e.g., image-before-text on mobile), collapsing multi-column grids, and a dedicated mobile stepper for the admissions timeline.

**Animations**
- Scroll-triggered reveal animations throughout (Framer Motion `whileInView`), plus scroll-progress-linked timelines in the Academics and Admissions sections that visually "fill in" as the user scrolls.
- Full `prefers-reduced-motion` support — all continuous/looping animations and CSS transitions are disabled or simplified for users with that OS preference.

**Performance**
- Compressed and resized all images (source assets were 7–9MB phone photos/exports) down to ~0.2–0.4MB each using `sharp`, cutting total image weight from ~124MB to ~3MB with no visible quality loss.
- Code-split every below-the-fold section via `next/dynamic` to shrink the initial JS bundle.
- Throttled all pointer-driven animations to one update per animation frame.
- Custom themed `loading.js` instead of a generic spinner.

**Content Accuracy**
- Pulled real contact details (address, phone numbers, email) directly from the live site rather than inventing placeholder data, and embedded an actual Google Maps location for the campus.

**Accessibility**
- Semantic section structure, descriptive `alt` text on content images, keyboard-navigable menus, and reduced-motion support as noted above.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

```bash
npm run build   # production build
npm run start   # run the production build
```
