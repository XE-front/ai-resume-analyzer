# AI Resume Analyzer

AI Resume Analyzer is a full-stack web application that analyzes resumes using AI and provides users with actionable feedback, score trends, and a history dashboard.

## 🚀 Overview

This project combines a Laravel backend with a React/Inertia frontend to deliver:
- secure file uploads
- AI-powered resume scoring
- history tracking of uploads
- score trend visualization
- authenticated user experience

## 🧩 Tech Stack

- **Backend:** Laravel 13
- **Frontend:** React 19 + Inertia.js
- **Styling:** Tailwind CSS
- **AI:** OpenRouter API
- **Database:** MySQL
- **Charts:** Recharts
- **Authentication:** Laravel Fortify

## ✅ Key Features

- Resume upload with server-side validation
- AI resume analysis and JSON validation
- Resume history page with KPIs
- Line chart for score trends
- Authenticated user sessions
- Responsive modern UI

## 🔧 Requirements

- PHP 8.3+
- Composer
- Node.js 20+
- MySQL
- Git
  
<img width="1919" height="923" alt="Screenshot 2026-04-20 161833" src="https://github.com/user-attachments/assets/03ec68bc-7dda-460f-841b-33a765c8d7bb" />
<img width="1919" height="917" alt="Screenshot 2026-04-20 162519" src="https://github.com/user-attachments/assets/d0110592-beb6-40ab-b964-7bcca5f439cf" />
<img width="1917" height="915" alt="Screenshot 2026-04-20 162558" src="https://github.com/user-attachments/assets/6c2d71a4-59df-47af-bcf6-3e8aa40d7b2b" />
<img width="1919" height="920" alt="Screenshot 2026-04-20 162619" src="https://github.com/user-attachments/assets/8219e40e-4e8c-4737-b75d-e1a5c9fec997" />

## 📦 Installation

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run build
php artisan migrate




