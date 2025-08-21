# XACAI - AI Business Solutions Platform

## Overview

XACAI is a modern full-stack web application built to provide AI consulting and implementation services. The platform features a marketing website with service showcases, client testimonials, pricing information, and a contact form for lead generation. Built with React, TypeScript, Express, and PostgreSQL, it follows a clean architecture pattern with shared schemas and type safety throughout the stack.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with React 18 and TypeScript, utilizing a component-based architecture with the following key decisions:

**Routing**: Uses Wouter for lightweight client-side routing instead of React Router, providing a smaller bundle size while maintaining all necessary routing features.

**UI Framework**: Implements shadcn/ui components built on top of Radix UI primitives and Tailwind CSS, providing accessible, customizable components with consistent design patterns.

**State Management**: Uses TanStack Query (React Query) for server state management, eliminating the need for complex state management libraries while providing caching, synchronization, and error handling.

**Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes with a cohesive design system based on neutral colors and primary brand colors.

**Form Handling**: React Hook Form with Zod validation for type-safe form handling and validation, reducing boilerplate while ensuring data integrity.

### Backend Architecture
The server-side follows a RESTful API pattern with Express.js and TypeScript:

**API Structure**: Clean separation between routes, storage, and business logic with a simple storage interface pattern that can be easily swapped between implementations.

**Data Validation**: Uses Zod schemas shared between client and server for consistent validation and type safety across the entire stack.

**Error Handling**: Centralized error handling middleware with proper HTTP status codes and user-friendly error messages.

**Development Setup**: Integrated Vite development server with HMR for the frontend while serving API routes from Express, providing a seamless full-stack development experience.

### Data Storage Solutions
**Database**: PostgreSQL with Drizzle ORM for type-safe database operations and migrations.

**Schema Design**: Clean separation of concerns with user authentication tables and contact form submissions, designed for scalability and future feature additions.

**Connection Management**: Uses Neon Database serverless PostgreSQL for production deployment with connection pooling and automatic scaling.

**Storage Pattern**: Implements a storage interface pattern allowing for easy testing with in-memory storage and production database swapping without changing business logic.

### Authentication and Authorization
Currently implements a basic user schema structure ready for future authentication implementation, with password hashing and user management foundations already in place.

### External Dependencies

**Database**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL hosting with automatic scaling and connection management.

**UI Components**: Radix UI primitives for accessible, unstyled components that serve as the foundation for the design system.

**Form Validation**: Zod for runtime type validation and schema definition, ensuring data integrity across the stack.

**Email/Contact**: Ready for integration with email services for contact form submissions and lead management.

**Analytics**: Prepared for integration with analytics platforms for tracking user engagement and conversion metrics.

**Payment Processing**: Architecture supports future integration with payment processors for subscription management.