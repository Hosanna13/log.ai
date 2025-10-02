# log.ai

A reflection journal with AI-powered connection discovery. Write your thoughts, and let AI find patterns across your past reflections to help you see how your ideas connect and evolve over time.

## 🎯 What It Does

- **Capture Reflections**: Write daily notes, learning reflections, or journal entries with editable titles (Notion-style)
- **AI Analysis**: Automatically find connections between your current reflection and past entries using semantic similarity
- **Pattern Recognition**: Discover recurring themes, topics, and thought patterns across your writing over time
- **Smart Insights**: Get AI-generated summaries that highlight how your current thoughts relate to previous reflections

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS (utility-first styling)

**Backend:**
- Next.js API Routes (serverless functions)
- OpenAI GPT-4-mini (text analysis & insights)
- OpenAI Embeddings API (semantic search)

**Data & Storage:**
- Firebase/Supabase (cloud database - planned)
- Vector storage for embeddings
- PostgreSQL (planned for production)

## 🎓 Learning Goals

This project is designed to learn:

1. **Full-Stack Development**
   - Next.js App Router and file-based routing
   - Client vs server components
   - API route creation and serverless functions

2. **AI Integration**
   - Working with OpenAI's API (completions & embeddings)
   - Understanding vector embeddings and semantic search
   - Implementing cosine similarity for finding related content
   - Prompt engineering for meaningful AI responses

3. **Modern React Patterns**
   - useState and useEffect hooks
   - TypeScript type safety
   - Component composition and reusability

4. **UI/UX Design**
   - Tailwind CSS utility classes
   - Responsive layouts with CSS Grid/Flexbox
   - Interactive editable content (contentEditable)

5. **Data Management**
   - CRUD operations (Create, Read, Update, Delete)
   - Local storage → Cloud database migration
   - Handling asynchronous data operations

## 📋 Current Status

**✅ Completed:**
- Home page with navigation
- Reflection input page with editable titles
- Basic routing structure
- Navigation component
- Mock AI response simulation

**🚧 In Progress:**
- Data persistence (localStorage)
- Dashboard grid display
- OpenAI API integration

**📅 Planned:**
- Embedding generation for reflections
- Similarity search implementation
- Cloud database migration (Firebase/Supabase)
- AI-generated connection insights
- Historical pattern analysis

## 🏗️ Project Structure
log.ai/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Welcome/home page
│   │   ├── reflections/
│   │   │   ├── layout.tsx           # Shared layout with nav
│   │   │   ├── page.tsx             # Dashboard (grid view)
│   │   │   ├── new/
│   │   │   │   └── page.tsx         # Create new reflection
│   │   │   └── [id]/
│   │   │       └── page.tsx         # View/edit specific reflection
│   │   └── api/
│   │       ├── embeddings/
│   │       │   └── route.ts         # Generate embeddings
│   │       └── analyze/
│   │           └── route.ts         # Find similar reflections
│   ├── components/                   # Reusable UI components
│   │   └── ReflectionNav.tsx
│   └── lib/                         # Utilities and types
│       ├── storage.ts               # Data persistence layer
│       └── types.ts                 # TypeScript interfaces
└── public/                          # Static assets
