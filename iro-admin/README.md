# Ocattery Admin Panel

Admin dashboard for managing cat adoptions, announcements, and events for the Ocattery rescue organization.

## Features

- Cat Management (Add, Edit, Delete)
- Status tracking (Ready to Adopt, In Rehabilitation, Ongoing Care, Adopted)
- Search and filter functionality
- Dashboard statistics
- Simple authentication (mock - needs backend integration)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The admin panel will run on `http://localhost:5173`

### Build

```bash
npm run build
```

## Current Status

This is a frontend-only implementation with:
- Mock authentication (any email/password will work)
- Local state management (data resets on refresh)
- No backend/database integration

## Next Steps

To make this production-ready, you'll need to:

1. Set up a backend (Node.js/Express, Firebase, Supabase, etc.)
2. Add real authentication
3. Connect to a database for persistent storage
4. Add API endpoints for CRUD operations
5. Implement image upload functionality
6. Add announcements and events management

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router DOM
- Lucide React (icons)
