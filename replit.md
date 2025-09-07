# Overview

This is a beauty salon website called "Elegance" built with React and Express. The application serves as a professional salon booking platform featuring service listings, an image gallery, contact forms, and an about page. The frontend showcases various beauty services like hair styling, makeup artistry, facial treatments, nail care, eyebrow shaping, and bridal packages with a modern, elegant design using shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing with a simple layout structure
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management with React hooks for local state
- **Form Handling**: React Hook Form with Zod validation (configured but not yet implemented)

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Architecture Pattern**: RESTful API design with modular route handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage class)
- **Development Setup**: Vite integration for hot reloading in development mode
- **Error Handling**: Centralized error middleware with structured error responses

## Data Storage
- **Database**: Configured for PostgreSQL using Drizzle ORM with Neon serverless database
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Storage**: In-memory storage implementation for development
- **Schema Definition**: User model with username/password fields using UUID primary keys

## Design System
- **Component Library**: Comprehensive shadcn/ui components including forms, dialogs, navigation, and data display
- **Typography**: Google Fonts integration (Inter, Playfair Display) with custom font variables
- **Color Scheme**: Neutral-based palette with CSS custom properties for theming
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

# External Dependencies

## Frontend Dependencies
- **UI Framework**: React 18 with TypeScript support
- **Component Library**: Radix UI primitives (@radix-ui/*) for accessible components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **State Management**: TanStack React Query for server state
- **Form Management**: React Hook Form with Hookform Resolvers
- **Validation**: Zod schema validation
- **Utilities**: clsx and tailwind-merge for conditional styling
- **Icons**: Lucide React for consistent iconography

## Backend Dependencies  
- **Runtime**: Node.js with Express.js framework
- **Database**: Neon serverless PostgreSQL with Drizzle ORM
- **Development**: tsx for TypeScript execution and esbuild for production builds
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Utilities**: nanoid for ID generation, date-fns for date manipulation

## Development Tools
- **Build Tool**: Vite with React plugin and runtime error overlay
- **Type Checking**: TypeScript with strict configuration
- **Database Tools**: Drizzle Kit for schema management and migrations
- **Replit Integration**: Custom Vite plugins for Replit development environment