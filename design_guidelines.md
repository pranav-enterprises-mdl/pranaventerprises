# Pranav Enterprises Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from professional service businesses and creative portfolios. Inspired by modern printing service platforms (Vistaprint, MOO) combined with creative agency aesthetics that emphasize visual craft and quality work.

## Core Design Principles
1. **Visual Proof First**: Lead with stunning examples of printing work to immediately demonstrate capability
2. **Trust Through Professionalism**: Clean, organized layouts that convey reliability and precision
3. **Accessibility & Clarity**: Easy navigation to services and contact information
4. **Local Pride**: Emphasize Mudhol, Karnataka presence and personalized service

---

## Typography System

**Primary Font**: Inter or Poppins (Google Fonts)
- Headings: 700 weight
- Subheadings: 600 weight  
- Body: 400 weight
- Accents: 500 weight

**Type Scale**:
- Hero Headline: 4xl to 6xl (responsive)
- Section Headlines: 3xl to 4xl
- Subsection Titles: 2xl
- Card Titles: xl
- Body Text: base to lg
- Small Text/Labels: sm

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 8, 12, 16, 20, and 24
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Element spacing: gap-4, gap-8, gap-12
- Container max-width: max-w-7xl with px-4 to px-8

**Grid Strategy**:
- Services: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Portfolio Gallery: 3-4 column masonry-style grid
- Testimonials: 2-column grid
- Single column for hero and contact sections

---

## Page Structure & Components

### 1. Navigation Header
Sticky header with:
- Logo (left-aligned)
- Navigation links: Home, Services, Portfolio, About, Contact
- Primary CTA button: "Get a Quote"
- Mobile hamburger menu
- Height: h-16 to h-20

### 2. Hero Section (90vh minimum)
Full-width immersive hero with:
- Large hero image showcasing high-quality print work (business cards, banners, or printing press)
- Centered content overlay with frosted glass/blur backdrop (backdrop-blur-md)
- Main headline: "Creativity and Precision Under One Roof"
- Subheadline: Emphasizing offset, digital, and flex printing capabilities
- Two CTAs: Primary "Request Quote" and secondary "View Portfolio" buttons with blurred backgrounds
- Location badge: "Serving Mudhol, Karnataka"

### 3. Services Showcase Section
3-column grid layout featuring:
- **Offset Printing** card with icon, title, description, and sample work thumbnail
- **Digital Printing** card with same structure
- **Flex Printing** card with same structure
- Each card includes: Large icon at top, service name (xl font), 2-3 line description, "Learn More" link
- Cards with subtle shadows and hover lift effect
- Grid spacing: gap-8

### 4. Portfolio Gallery Section
Masonry-style grid (3-4 columns) displaying:
- High-quality images of completed projects
- Category filters above grid: All, Business Cards, Banners, Brochures, Packaging, Signage
- Each image in card format with subtle border
- Hover overlay showing project type/name
- "View All Work" CTA button at bottom

### 5. Why Choose Us Section
2-column layout (image + content):
- Left: Image of printing facility or team at work
- Right: Bulleted list of differentiators:
  - "All Services Under One Roof"
  - "Latest Printing Technology"
  - "Fast Turnaround Times"
  - "Competitive Pricing"
  - "Quality Guaranteed"
- Each point with check icon and 1-2 line description

### 6. Testimonials Section
2-column card grid:
- Customer photo (small circular)
- Quote text
- Customer name and business
- Star rating (5 stars)
- Cards with background variation for visual interest

### 7. CTA Section
Full-width section with:
- Centered headline: "Ready to Bring Your Vision to Print?"
- Subtext about consultation process
- Large primary CTA button
- Secondary text with phone number

### 8. Contact Section
2-column split:
- Left: Contact form (Name, Email, Phone, Service Interest dropdown, Message textarea, Submit button)
- Right: Business information card containing:
  - Address: Mudhol, Karnataka with icon
  - Phone number with click-to-call
  - Email with icon
  - Business hours
  - Small embedded map placeholder or location icon

### 9. Footer
Multi-column footer layout:
- Column 1: Brand name + tagline
- Column 2: Quick Links (Services, Portfolio, About, Contact)
- Column 3: Services list
- Column 4: Contact info + social media icons
- Bottom bar: Copyright, "Designed by" credit, Privacy/Terms links

---

## Component Specifications

**Buttons**:
- Primary: Large (px-8 py-3), rounded-lg, bold text
- Secondary: Same size, outlined variant
- All buttons on images: backdrop-blur-md background

**Cards**:
- Rounded corners: rounded-xl
- Shadow: shadow-md with hover:shadow-xl transition
- Border: Subtle border on some cards for definition

**Form Inputs**:
- Height: h-12
- Padding: px-4
- Rounded: rounded-lg
- Border: Visible border with focus state enhancement

**Icons**: Heroicons library via CDN (outline style for general use, solid for emphasis)

---

## Images Section

**Required Images**:

1. **Hero Image**: High-resolution image of professional printing equipment in action OR showcase of diverse printed materials (business cards, brochures, banners arranged attractively). Should convey quality and professionalism. Full-width, high-impact composition.

2. **Service Images** (3): 
   - Offset printing machine or offset printed materials
   - Digital printer or digitally printed samples
   - Flex banner printing or large format prints

3. **Portfolio Images** (9-12): Diverse samples including business cards, wedding invitations, banners, brochures, packaging, signage, letterheads - showing range and quality

4. **About/Facility Image**: Interior of printing facility or team working with printing equipment

5. **Customer Testimonial Photos**: 4-6 professional headshots or business owner photos

All images should be high-quality, well-lit, and professionally composed to showcase printing quality and business professionalism.

---

## Responsive Behavior

- Mobile: Single column, stacked sections, hamburger navigation
- Tablet: 2-column grids, adjusted spacing
- Desktop: Full multi-column layouts, maximum visual impact
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)