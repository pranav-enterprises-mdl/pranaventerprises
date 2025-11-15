# Pranav Enterprises - Printing Services Website

## Overview

Pranav Enterprises is a professional printing services website for a business based in Mudhol, Karnataka. The application showcases the company's offset, digital, and flex printing capabilities through a modern, responsive single-page application. The site features a portfolio gallery, service descriptions, testimonials, and a contact form for customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via CSS variables
- Design guidelines documented in `design_guidelines.md` following professional printing service aesthetics

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Local component state with React hooks for UI interactions
- Custom toast notification system for user feedback

**Styling Architecture**
- Tailwind CSS with custom configuration extending base theme
- CSS custom properties for dynamic theming (HSL color system)
- Responsive design with mobile-first approach
- Custom utility classes for elevation effects (`hover-elevate`, `active-elevate-2`)

### Backend Architecture

**Server Framework**
- Express.js running on Node.js with TypeScript
- ESM (ECMAScript Modules) for modern JavaScript module system
- Custom middleware for request logging and JSON parsing with raw body preservation

**API Design**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Error handling with appropriate HTTP status codes
- Two primary endpoints:
  - `POST /api/contact` - Submit contact form messages
  - `GET /api/contact-messages` - Retrieve all contact messages (admin view)

**Development vs Production**
- Development: Vite middleware integration for HMR and asset serving
- Production: Static file serving from `dist/public`
- Replit-specific plugins for development (cartographer, dev banner, runtime error overlay)

### Data Storage Solutions

**Current Implementation**
- In-memory storage using Map data structures (`MemStorage` class)
- UUID-based record identification using Node.js crypto module
- Interface-based storage abstraction (`IStorage`) for future database migration

**Database Schema (Drizzle ORM)**
- Configured for PostgreSQL via Neon serverless driver
- Two tables defined in `shared/schema.ts`:
  - `users` - User authentication (id, username, password)
  - `contact_messages` - Customer inquiries (id, name, email, phone, service, message, createdAt)
- Zod schema validation for type-safe data insertion
- Database migrations managed in `./migrations` directory

**Migration Path**
- Current: In-memory storage for development/demo
- Prepared: PostgreSQL schema ready for production deployment
- Connection string via `DATABASE_URL` environment variable

### External Dependencies

**Core Libraries**
- `@neondatabase/serverless` - PostgreSQL serverless driver for Neon
- `drizzle-orm` - Type-safe ORM with PostgreSQL dialect
- `drizzle-zod` - Schema validation integration
- `connect-pg-simple` - PostgreSQL session store (configured but not actively used)

**UI Framework Dependencies**
- `@radix-ui/*` - 25+ accessible component primitives (dialog, dropdown, select, etc.)
- `@tanstack/react-query` - Server state management
- `lucide-react` - Icon library
- `react-icons` - Additional icons (social media)
- `embla-carousel-react` - Carousel/slider functionality
- `date-fns` - Date formatting and manipulation
- `class-variance-authority` - CSS variant composition
- `clsx` + `tailwind-merge` - Conditional class name utilities

**Form Handling**
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolver integration
- Zod schemas for form validation

**Development Tools**
- `@replit/vite-plugin-*` - Replit-specific development enhancements
- `tsx` - TypeScript execution for development server
- `esbuild` - Fast bundling for production server build

**Asset Management**
- Static images stored in `attached_assets/generated_images/`
- Vite alias `@assets` for image imports
- Path aliases configured: `@/`, `@shared/`, `@assets/`

### Authentication & Authorization

**Current State**
- User schema defined but authentication not implemented
- Password storage prepared (would require bcrypt/argon2 hashing)
- No active session management or protected routes

**Design Decisions**
- Contact form is publicly accessible (no authentication required)
- Admin message viewing endpoint exists but lacks authorization
- Future implementation would likely use session-based auth with PostgreSQL session store