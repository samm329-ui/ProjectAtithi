# Project Prompt Template

> **Instructions**: Fill in the `[PLACEHOLDER]` sections below to customize this prompt for your specific project needs. This template describes the current codebase state and allows you to specify what kind of site you want to build.

---

## 🎯 What I Want to Build

### Site Type & Purpose
```
[PLACEHOLDER: Describe the type of site you want to build]

Examples:
- E-commerce store for handmade jewelry
- Portfolio site for a photographer
- SaaS dashboard for project management
- Blog platform for tech writers
- Booking system for a salon
```

### Target Audience
```
[PLACEHOLDER: Who will use this site?]

Examples:
- Young professionals aged 25-40
- Small business owners
- Families with children
- Tech-savvy developers
- Luxury brand consumers
```

### Key Features Needed
```
[PLACEHOLDER: List the main features you need]

Examples:
- User authentication & profiles
- Payment processing
- Real-time notifications
- Search & filtering
- Admin dashboard
- Multi-language support
```

### Design Direction
```
[PLACEHOLDER: Describe the aesthetic you're going for]

Examples:
- Minimalist & clean with lots of whitespace
- Bold & colorful with playful animations
- Dark & luxurious with gold accents
- Professional & corporate with muted tones
- Retro/vintage with nostalgic elements
```

### Color Palette Preference
```
[PLACEHOLDER: Specify colors or mood]

Examples:
- Ocean blues and coral
- Monochrome with neon accents
- Earth tones (terracotta, sage, cream)
- Keep current saffron/mustard theme
- Pastel gradients
```

---

## 📦 Current Project State

### Project Name
**Atithi** — A premium restaurant website for highway hospitality

### Tech Stack
| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **React 18** | UI library |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **ShadCN/UI** | Radix-based component library |
| **Google Genkit** | AI integration (Gemini model) |
| **Firebase** | Backend services (configured) |

### Current Features Implemented
1. **Config-Driven Content System** — All site content managed via `src/app/config.ts`
2. **Menu Data System** — Product/menu items in `src/lib/menu.ts` with categories, pricing, ratings
3. **Shopping Cart** — Add to cart, quantity management, cart sheet (mobile & desktop)
4. **Product Catalog** — Filterable product section with search functionality
5. **Product Detail Dialogs** — Modal views for individual items with rating capability
6. **AI Recommendation Engine** — Genkit flow for personalized dish recommendations
7. **Review System** — Display reviews + write review functionality
8. **Responsive Design** — Mobile-first with distinct mobile/desktop experiences
9. **Loading Screen** — Branded loading experience
10. **Theme System** — Dark/light mode support with CSS variables
11. **Toast Notifications** — User feedback system

### UI Components Available (ShadCN)
```
accordion, alert, alert-dialog, avatar, badge, button, calendar, card, 
carousel, chart, checkbox, collapsible, dialog, dropdown-menu, form, 
input, label, menubar, popover, progress, radio-group, scroll-area, 
select, separator, sheet, skeleton, slider, switch, table, tabs, 
textarea, toast, toaster, tooltip
```

### Page Sections Currently Built
| Section | Description | File |
|---------|-------------|------|
| Hero | Full-screen animated background with parallax | `hero-section.tsx` |
| Menu | Category navigation | `menu-section.tsx` |
| Best Seller | Featured products carousel | `best-seller-section.tsx` |
| Products | Filterable product grid | `product-section.tsx` |
| Reviews | Customer testimonials carousel | `reviews-section.tsx` |
| Write Review | Review submission form | `write-review-section.tsx` |
| Contact | Contact information | `contact-section.tsx` |
| Recommendation | AI-powered recommendation form | `recommendation-section.tsx` |

### Design System
```css
/* Current Theme Colors */
--primary: Saffron (#FF9933)
--background-dark: Charcoal (#222222)
--background-light: Off-white (#FAFAFA)
--accent: Mustard Yellow (#FFDB58)

/* Typography */
--font-family: 'Poppins' (Google Fonts)
```

### Project Structure
```
src/
├── app/                    # Next.js pages & layouts
│   ├── config.ts          # 🔧 Central configuration
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles & CSS variables
├── components/
│   ├── sections/          # Page sections (hero, menu, products, etc.)
│   ├── ui/                # ShadCN components
│   └── [features].tsx     # Feature components (cart, header, etc.)
├── ai/
│   └── flows/             # Genkit AI flows
├── lib/
│   ├── menu.ts            # 📦 Menu/product data
│   └── utils.ts           # Utility functions
└── hooks/                 # Custom React hooks
```

---

## 🔄 Transformation Guidelines

### If Keeping Restaurant Theme
- Modify `src/app/config.ts` for branding (name, description, links)
- Update `src/lib/menu.ts` for your menu items
- Replace images in sections with your own
- Adjust color variables in `globals.css`

### If Changing to Different Industry
Specify in your request:
```
[PLACEHOLDER: What should replace each section?]

Current → New Mapping:
- Hero Section → [What should this become?]
- Menu Categories → [What replaces this? Products? Services? Portfolio?]
- Best Sellers → [Featured items? Testimonials? Case studies?]
- Products Grid → [Product catalog? Service list? Gallery?]
- Reviews → [Keep? Replace with team? Partners?]
- AI Recommendation → [Keep? Replace with quiz? Contact form?]
```

### Content to Provide
```
[PLACEHOLDER: What content do you have ready?]

□ Brand name & tagline
□ Logo files
□ Product/service list with descriptions
□ Pricing information
□ Contact information
□ Social media links
□ Customer testimonials
□ Team member info
□ Images/photos
□ Color palette
```

---

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Start AI development (Genkit)
npm run genkit:dev

# Build for production
npm run build

# Type checking
npm run typecheck

# Linting
npm run lint
```

**Dev Server**: http://localhost:9002

---

## 💡 Example Filled Prompt

Here's an example of how to fill this template:

```markdown
## 🎯 What I Want to Build

### Site Type & Purpose
A modern portfolio website for a freelance UI/UX designer showcasing 
case studies, design process, and available services.

### Target Audience
Startups, tech companies, and product managers looking to hire 
a senior designer for contract or full-time work.

### Key Features Needed
- Interactive case study presentations
- Service packages with pricing
- Contact form with availability calendar
- Downloadable resume/CV
- Dark mode toggle
- Smooth page transitions

### Design Direction
Minimal and sophisticated with bold typography. Should feel premium 
and creative without being too flashy. Focus on letting the work speak.

### Color Palette Preference
Monochrome base (black, white, grays) with a single accent color 
(electric blue #0066FF) for CTAs and highlights.

### Section Mapping
- Hero Section → About me intro with animated text
- Menu Categories → Service categories (UX Design, UI Design, Consulting)
- Best Sellers → Featured case studies carousel
- Products Grid → Full case study grid with filtering
- Reviews → Client testimonials
- AI Recommendation → Contact form with project type quiz
```

---

## 📝 Notes for AI Assistant

When modifying this project:
1. **Preserve the component architecture** — Keep the section-based structure
2. **Use the config pattern** — Centralize content in config files
3. **Maintain TypeScript types** — Update type definitions when changing data structures
4. **Keep responsive design** — Test both mobile and desktop layouts
5. **Leverage existing UI components** — Use ShadCN components from `src/components/ui/`
6. **Follow the established patterns** — Cart, dialogs, and state management patterns are already set up

