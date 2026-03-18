# Anthony Sifuna Portfolio - Specification

## 1. Project Overview

- **Project Name**: Anthony Sifuna Portfolio
- **Type**: Single-page React portfolio website
- **Core Functionality**: Personal portfolio showcasing skills, bio, contact info, and professional links for a Software Engineering student
- **Target Users**: Recruiters, potential employers, collaborators, and tech enthusiasts

---

## 2. UI/UX Specification

### Layout Structure

- **Header**: Fixed navigation with name and nav links
- **Hero Section**: Full viewport intro with name, profession, and tagline
- **About Section**: Bio and personal details
- **Skills Section**: Specializations displayed as cards/tags
- **Contact Section**: Email, phone, and social links
- **Footer**: Copyright and quick links

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background Primary | Deep Charcoal | #0d1117 |
| Background Secondary | Slate | #161b22 |
| Accent Primary | Electric Cyan | #00d4ff |
| Accent Secondary | Neon Purple | #a855f7 |
| Text Primary | Off White | #e6edf3 |
| Text Secondary | Muted Gray | #8b949e |
| Border | Dark Border | #30363d |

#### Typography

- **Headings**: "Syne", sans-serif (bold, distinctive)
- **Body**: "DM Sans", sans-serif (clean, readable)
- **Code/Tech**: "JetBrains Mono", monospace

#### Font Sizes

- Hero Name: 4rem (desktop), 2.5rem (mobile)
- Section Titles: 2.5rem
- Body: 1rem
- Small: 0.875rem

#### Spacing System

- Section padding: 6rem vertical
- Container max-width: 1200px
- Card padding: 2rem
- Gap between elements: 1.5rem

#### Visual Effects

- Glassmorphism cards with backdrop-blur
- Gradient borders on hover
- Subtle glow effects on accent elements
- Smooth scroll behavior
- Fade-in animations on scroll
- Floating particles background in hero

### Components

1. **Navbar**
   - Logo/Name on left
   - Nav links: About, Skills, Contact
   - Transparent background, blur on scroll

2. **Hero**
   - Animated typing effect for profession
   - Floating code symbols background
   - CTA button to scroll to contact

3. **About Card**
   - Profile section with bio
   - Location with icon
   - Quick stats (student, developer)

4. **Skills Cards**
   - Grid of 3 cards: Cybersecurity, AI/ML, Cloud Computing
   - Icon, title, brief description
   - Hover: lift + glow effect

5. **Contact Section**
   - Email card with copy functionality
   - Phone card
   - Social links (GitHub, LinkedIn, Portfolio)
   - Each with hover animation

6. **Footer**
   - Simple copyright
   - Back to top button

---

## 3. Functionality Specification

### Core Features

- Smooth scroll navigation
- Scroll-triggered fade-in animations
- Copy email to clipboard
- Hover interactions on all interactive elements
- Responsive design across all breakpoints

### User Interactions

- Click nav links → smooth scroll to section
- Click email → copy to clipboard with toast feedback
- Hover cards → elevation + glow effect
- Click social icons → open links in new tab

### Animations

- Hero: Floating particles, typing effect
- Sections: Fade-up on scroll into view
- Buttons: Scale + glow on hover
- Cards: TranslateY + shadow on hover

---

## 4. Acceptance Criteria

- [ ] Page loads without errors
- [ ] All sections visible: Hero, About, Skills, Contact, Footer
- [ ] Navigation scrolls to correct sections
- [ ] Email copy works and shows feedback
- [ ] All social links are clickable
- [ ] Responsive on mobile, tablet, desktop
- [ ] Animations play smoothly
- [ ] Colors match specification exactly
- [ ] Fonts load correctly (Syne, DM Sans, JetBrains Mono)
