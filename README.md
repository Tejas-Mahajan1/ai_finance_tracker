# 🚀 AI-Powered Finance Management Platform [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Next.js 14** application providing intelligent financial management with AI-powered insights, multi-account tracking, and real-time analytics.

![Platform Dashboard](Hero5.png)

## 📖 Table of Contents
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

![App Banner](public/Hero5.png)

## ✨ Key Features

- **🤖 AI Financial Insights**
  - ✨ Receipt scanning with Google Gemini Vision API
  - 🏷️ Automatic transaction categorization using ML models
  - 📈 Predictive budget forecasting
  - 🔍 Natural language query support

- **💸 Financial Management**
  - 📊 Real-time dashboard with interactive charts
  - 🏦 Multi-account aggregation & reconciliation
  - 🎯 Customizable budget categories and limits
  - 🔎 Advanced transaction search/filter
  - 📆 Recurring expense detection
  - ⏱️ Instant spending notifications

- **🔒 Enterprise Security**
  - 🔑 Clerk authentication with JWT & MFA
  - 🛡️ Role-based access control (RBAC)
  - ⏲️ API rate limiting via ArcJet
  - 🔄 Background processing with Inngest
  - 📧 Secure notifications via Resend
  - 🔐 End-to-end data encryption

- **🎨 Premium UX**
  - 📱 Mobile-first responsive design
  - 🌓 Dark/light theme support
  - ⚡ Instant search with debounced queries
  - 📥 Bulk transaction imports (CSV/Excel)
  - 🎛️ Customizable dashboard widgets
  - 🔊 Sonner toast notifications

## 🛠 Tech Stack

**Core Framework**
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)](https://nextjs.org)
[![React 18](https://img.shields.io/badge/React-18.0-%2361DAFB?logo=react)](https://react.dev)

**Database**
[![Prisma](https://img.shields.io/badge/Prisma-ORM-%232D3748?logo=prisma)](https://prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.0-%234169E1?logo=postgresql)](https://postgresql.org)

**Security**
[![Clerk](https://img.shields.io/badge/Clerk-Auth-%23000000)](https://clerk.com)
[![ArcJet](https://img.shields.io/badge/ArcJet-Rate_Limiting-%234F46E5)](https://arcjet.com)

**UI Components**
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-%2338B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-0.5-%230F172A)](https://ui.shadcn.com)

**AI Services**
[![Gemini](https://img.shields.io/badge/Google_Gemini-API-%23EA4335)](https://ai.google.dev)
[![Resend](https://img.shields.io/badge/Resend-Email-%23000000)](https://resend.com)

**Infrastructure**
[![Inngest](https://img.shields.io/badge/Inngest-2.0-%23000)](https://inngest.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-%23000000)](https://vercel.com)

## 🚀 Getting Started

### Prerequisites
- [Node.js 18+](https://nodejs.org) & [npm 9+](https://npmjs.com)
- [PostgreSQL 15+](https://www.postgresql.org/download/)
- [Clerk](https://clerk.com) account for authentication
- [Google Gemini](https://ai.google.dev) API key
- [Resend](https://resend.com) API key for email

### Initial Setup
```bash
# Clone repository
git clone https://github.com/your-repo/ai-finance-platform.git
cd ai-finance-platform

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
```

### Configure Environment
Edit `.env.local` with your credentials:
```ini
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/ai_finance?schema=public"
DIRECT_URL="postgresql://user:pass@localhost:5432/ai_finance"

# AI Services
GEMINI_API_KEY=your_google_ai_key

# Email
RESEND_API_KEY=your_resend_key

# Security
ARCJET_KEY=your_arcjet_key
```

### Database Setup
```bash
# Run migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# Seed sample data (optional)
npm run seed
```

4. Database setup:
```bash
npx prisma migrate dev --name init
```

5. Seed initial data (optional):
```bash
npm run seed
```

6. Start development server:
```bash
npm run dev
```

## 🔑 Environment Variables

| Variable                          | Description                     |
|-----------------------------------|---------------------------------|
| `DATABASE_URL`                    | PostgreSQL connection string    |
| `DIRECT_URL`                      | Direct DB connection            |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk frontend key             |
| `CLERK_SECRET_KEY`                | Clerk backend secret            |
| `GEMINI_API_KEY`                  | Google AI API credentials       |
| `RESEND_API_KEY`                  | Email service API key           |
| `ARCJET_KEY`                      | Rate limiting service key       |

## 🏃♂️ Running the App

Development mode:
```bash
npm run dev
```

Production build:
```bash
npm run build && npm start
```

## 🗂 Project Structure

```
ai-finance-platform/
├── app/               # Next.js app router routes
│   ├── (auth)/        # Authentication pages
│   ├── (main)/        # Authenticated user routes
│   ├── api/           # API endpoints
│   └── lib/           # Shared utilities
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Server-side libraries
├── prisma/            # Database schema & migrations
├── public/            # Static assets
└── actions/           # Server actions
```

## 📄 License
MIT License - see [LICENSE](LICENSE) for details

## 🤝 Contributing
Contributions welcome! Please follow:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
