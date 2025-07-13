# AI-Powered Finance Management Platform

Next.js application for intelligent financial tracking with budget analytics, AI receipt scanning, and real-time insights.

![App Banner](public/banner.jpeg)

## ✨ Key Features

- **AI Receipt Scanning** - Gemini API powered document analysis
- **Budget Tracking** - Real-time expense categorization & monitoring
- **Financial Dashboard** - Interactive visualization of spending patterns
- **Secure Authentication** - Clerk integration with role-based access
- **Background Processing** - Inngest for async transaction operations
- **Rate Limited API** - ArcJet protection for critical endpoints

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
- Node.js 18+
- PostgreSQL
- Clerk account
- Gemini API key

### Installation
```bash
git clone https://github.com/your-repo/ai-finance-platform.git
cd ai-finance-platform
npm install
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

## 📄 License
MIT License - see [LICENSE](LICENSE) for details
