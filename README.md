# Artistly.com – Frontend Project

A responsive web application for **Artistly.com**, a fictional performing artist booking platform.  
The app supports **Manager** and **Planner** roles with role-based routing and functionality.

---

## 🚀 Project Overview

**Artistly.com** allows:
- **Manager**: Onboard artists, manage submissions, and handle booking requests.
- **Planner**: Browse artists, filter listings, and raise booking/availability requests.

The app is frontend-only using mock JSON data (no backend).

---

## ⚙ Tech Stack

- **Next.js (v13+, App Router)** — React framework with SSR and routing.
- **React (functional components + hooks)** — UI composition and state.
- **Tailwind CSS** — Utility-first styling.
- **shadcn/ui** — Accessible, prebuilt UI components.
- **React Hook Form + Yup** — Form handling + validation.
- **Vercel** — Deployment.

---

## 📂 Folder Structure

src/
├── app/
│ ├── manager/
│ │ ├── dashboard/
│ │ ├── artists/
│ │ ├── onboarding/
│ │ └── requests/
│ ├── planner/
│ │ ├── dashboard/
│ │ ├── artists/
│ │ └── my-requests/
│ ├── signin/
│ └── layout.js
├── components/
│ ├── Navbar.js
│ ├── Footer.js
│ ├── Tables/
│ ├── Manager/
│ ├── Planner/
│ └── UI/
├── context/
│ └── UserContext.js
├── data/
│ └── artists.json
└── styles/


---

## 🧭 Role-Based Routing

### Manager
- `/manager/dashboard` — View submissions & requests
- `/manager/artists` — View onboarded artists
- `/manager/onboarding` — Onboard new artists
- `/manager/requests` — Manage planner requests

### Planner
- `/planner/dashboard` — Overview page
- `/planner/artists` — Browse and filter artists, ask for quote
- `/planner/my-requests` — View booking requests

---

## 🖥 Features

- **Role-based sign-in** with context
- **Manager**: Dashboard, onboarding form, artist & request management
- **Planner**: Browse artists, filter, raise/view requests
- **Reusable components**: Navbar, Footer, Tables
- **Responsive design** (mobile-first)
- **Mock data driven** (artists.json)

---

## 🌐 Deployment

✅ Hosted on Vercel (SEO-friendly, responsive)
## 🔗 Live Demo

[View Live on Vercel](https://artistly-app-puce.vercel.app)

---

## 💻 Getting Started

### 1️⃣ Clone the repo:
```bash
git clone https://github.com/your-username/artistly-frontend.git
cd artistly-frontend

npm install

npm run build
npm start


---

👉 **What’s next?**
✅ I can save this as a file (`README.md`) for download.  
✅ I can also help you update GitHub repo instructions or generate badges (build passing, license, etc).

Would you like me to save this as a downloadable file? 🚀
