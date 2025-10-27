# BrightFuture Academy - School Website

A fully responsive, modern school website built with Next.js 13, TypeScript, Tailwind CSS, and Framer Motion animations.

## Features

- **Smooth Animations**: Powered by Framer Motion with scroll-triggered animations
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Modern UI**: Clean, professional design with blue, white, and yellow color palette
- **Interactive Components**: Hover effects, modal dialogs, and smooth transitions
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Project Structure

```
project/
├── app/
│   ├── globals.css          # Global styles with smooth scroll behavior
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page combining all sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section with animated gradient background
│   │   ├── About.tsx         # Mission, vision, values, and principal's message
│   │   ├── Courses.tsx       # Course offerings with modal details
│   │   ├── Admissions.tsx    # Admission process and registration form
│   │   ├── Gallery.tsx       # Image gallery with lightbox preview
│   │   └── Contact.tsx       # Contact form and embedded map
│   ├── ui/                   # Shadcn UI components
│   ├── AnimatedButton.tsx    # Reusable animated button component
│   ├── AnimatedCard.tsx      # Card component with hover animations
│   ├── Footer.tsx            # Footer with quick links and contact info
│   ├── Navbar.tsx            # Sticky navbar with smooth scroll navigation
│   └── SectionWrapper.tsx    # Wrapper for scroll-triggered animations
└── package.json
```

## Pages & Sections

### Home (Hero)
- Animated gradient background with floating elements
- School branding and tagline
- Call-to-action buttons
- Key statistics display
- Scroll indicator

### About
- Mission statement
- Vision statement
- Core values
- Principal's message
- Facility highlights

### Courses
- Six main course categories:
  - Language Arts
  - Science & Technology
  - Mathematics
  - Social Studies
  - Creative Arts
  - Music & Performing Arts
- Interactive course cards with truncated descriptions
- Modal dialog for full course details

### Admissions
- Four-step admission process timeline
- Visual step indicators
- Registration form modal with validation
- Key admission information

### Gallery
- Masonry-style image grid
- Hover zoom effects
- Lightbox image preview
- Real stock images from Pexels

### Contact
- Contact information cards
- Contact form with validation
- Google Maps embed
- Office hours and location details

## Key Technologies

- **Next.js 13**: App directory, Server Components
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Shadcn UI**: Pre-built accessible components
- **Lucide React**: Icon library

## Animation Features

- Fade-in on scroll
- Slide-up effects
- Scale and tilt on hover
- Smooth page transitions
- Blob animations in hero section
- Bouncing scroll indicator

## Color Palette

- Primary: Blue gradients (blue-600 to blue-800)
- Secondary: Yellow gradients (yellow-400 to yellow-500)
- Neutral: White, gray shades
- Backgrounds: Gradient combinations of blue, white, and yellow

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components are fully responsive with appropriate grid layouts and spacing adjustments.
