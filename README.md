# AI-Powered Finance Management Platform

Next.js application for intelligent financial tracking with budget analytics, AI receipt scanning, and real-time insights.

![App Banner](public/Hero5.png)

## ✨ Key Features

- **AI-Powered Insights**
  - Receipt scanning using Google Gemini API
  - Automated transaction categorization
  - Smart budget predictions

- **Financial Tracking**
  - Real-time expense monitoring
  - Multi-account support
  - Custom budget limits per category
  - Historical spending analysis

- **Security & Reliability**
  - Clerk authentication with JWT tokens
  - Role-based access control (RBAC)
  - Rate-limited APIs via ArcJet
  - Background processing with Inngest

- **User Experience**
  - Interactive dashboard with charts/graphs
  - Shadcn UI component library
  - Responsive mobile-first design
  - Server-side rendering with Next.js

## 🛠 Tech Stack

**Core Framework**  
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)

**Database**  
![Prisma](https://img.shields.io/badge/Prisma-ORM-%232D3748?logo=prisma)

**Styling**  
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-%2338B2AC?logo=tailwind-css)

**UI Components**  
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-0.5-%230F172A)

**AI Services**  
![Gemini](https://img.shields.io/badge/Google_Gemini-API-%23EA4335)

**Infrastructure**  
![Inngest](https://img.shields.io/badge/Inngest-2.0-%23000?logo=inn)  
![ArcJet](https://img.shields.io/badge/ArcJet-Rate_Limiting-%234F46E5)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ & PostgreSQL 15+
- Clerk account (for authentication)
- Google Gemini API key
- Resend API key (for email)

### Initial Setup
1. Clone repository:
```bash
git clone https://github.com/your-repo/ai-finance-platform.git
cd ai-finance-platform
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
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
