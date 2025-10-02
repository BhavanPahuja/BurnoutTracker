# Burnout Tracker

A Next.js application for tracking and monitoring work-related burnout using the validated Burnout Assessment Tool (BAT).

## Phase 1 Features

- **User Authentication**: Secure sign-up and login using Supabase Auth
- **BAT Questionnaire**: Complete 23-question burnout assessment
- **Dashboard**: View your latest results and assessment history
- **Secure Data Storage**: Row Level Security (RLS) ensures data privacy

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (Radix UI + Tailwind)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Form Validation**: Zod
- **Form Handling**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project

### Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up your Supabase project:

   - Create a new project at [supabase.com](https://supabase.com)
   - Run the migrations in the `supabase/migrations` folder in your Supabase SQL editor:
     - `001_initial_schema.sql`
     - `002_rls_policies.sql`

3. Configure environment variables:

```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── src/
│   ├── app/                      # Next.js app router pages
│   │   ├── auth/                 # Authentication pages
│   │   ├── dashboard/            # Dashboard page
│   │   ├── questionnaire/        # BAT questionnaire page
│   │   └── layout.tsx            # Root layout
│   ├── components/               # React components
│   │   ├── auth-wizard/          # Authentication components
│   │   ├── dashboard/            # Dashboard components
│   │   ├── questionnaire/        # Questionnaire components
│   │   └── ui/                   # Reusable UI components
│   ├── lib/                      # Utility functions
│   │   ├── supabase/             # Supabase clients
│   │   ├── bat-questions.ts      # BAT questionnaire data
│   │   └── utils.ts              # Helper functions
│   ├── services/                 # Business logic layer
│   │   ├── auth.service.ts       # Authentication services
│   │   └── bat.service.ts        # BAT-related services
│   └── types/                    # TypeScript type definitions
│       ├── database.type.ts      # Database schema types
│       └── bat.type.ts           # BAT-related types
├── supabase/
│   └── migrations/               # Database migrations
└── public/                       # Static assets
```

## Database Schema

### Tables

#### `profiles`
- Stores user profile information
- Links to Supabase Auth users
- Fields: id, user_id, full_name, created_at, updated_at

#### `bat_responses`
- Stores BAT questionnaire responses and scores
- Fields: id, user_id, exhaustion_score, mental_distance_score, cognitive_impairment_score, total_score, responses (JSONB), created_at, updated_at

### Row Level Security (RLS)

All tables have RLS enabled with policies that ensure:
- Users can only read their own data
- Users can only insert/update/delete their own data

## Future Enhancements (Not Yet Implemented)

The codebase is designed to support these features in future phases:

- Daily/weekly check-ins for mood and energy tracking
- Advanced analytics with graphs and trend analysis
- AI-powered insights and predictive modeling
- Wearable device integrations (heart rate, sleep data)
- Email and push notifications
- Community features and therapist dashboards
- GraphQL API with Genql for type-safe queries

## Development Guidelines

### Code Style

- Use functional components (not classes)
- Prefer function keyword for pure functions
- Use TypeScript interfaces over types where possible
- Follow naming conventions:
  - Booleans: `isLoading`, `hasError`, `shouldUpdate`
  - Files: `kebab-case.tsx`
  - Components: `PascalCase`

### File Structure

- Components: exported function → subcomponents → helpers → types
- Use early returns for error handling
- Minimize `use client` directives
- Prefer Server Components when possible

### Accessibility

- All interactive elements have proper ARIA labels
- Keyboard navigation supported
- WCAG color contrast standards maintained

## License

MIT
