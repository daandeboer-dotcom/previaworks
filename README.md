# Previa Works – Website (Next.js 14 + Tailwind)

Productieklare basis voor www.previaworks.nl

## 🚀 Snel starten (lokaal)
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 🔗 Deploy naar Vercel
1. Maak een GitHub-repo en push deze code:
   ```bash
   git init
   git add .
   git commit -m "init Previa Works"
   git branch -M main
   git remote add origin https://github.com/<jouw-account>/previaworks.git
   git push -u origin main
   ```
2. Ga naar Vercel → **Add New Project** → selecteer deze repo → **Deploy**.
3. Koppel het domein **www.previaworks.nl** via *Project → Settings → Domains*.

## 🧩 Stack
- Next.js 14 (App Router)
- Tailwind CSS
- framer-motion, lucide-react

## 📨 E-mail / formulieren
De form demo is client-side. Voor echte verzending kun je later een API-route toevoegen:
- `/app/api/contact/route.js` (POST) die via Resend/Mailgun e-mails stuurt.

## 🔐 Volgende stappen (optioneel)
- Auth.js + RBAC voor klant- en werknemersportal
- Sanity als headless CMS
- Sentry voor logging
- Plausible voor analytics (EU)
