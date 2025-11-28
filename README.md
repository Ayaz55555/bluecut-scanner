# BlueCut Scanner

A lightweight, Base-aligned utility app built by **Ayaz**.
Fast, minimal, mobile-first — with clean UI and smooth wallet connectivity.

## ✨ Features
- ⚡ WalletConnect (Reown) integration
- 🌙 Light/Dark/Auto theme
- 🗓 Daily Check-in (local streak tracker)
- 🎖 Badge Explorer pages
- 📱 Fully mobile-optimized UI
- 🔧 Simple, clean components inspired by Base ecosystem design

## 🚀Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Reown AppKit + Wagmi + Viem
- TanStack React Query

## 📦 Install
```bash
npm install
npm run dev
```

## 🔐 Environment

Create `.env.local`:

```
NEXT_PUBLIC_WC_ID=your_walletconnect_project_id
NEXT_PUBLIC_BASE_RPC=https://mainnet.base.org
NEXT_PUBLIC_APP_URL=https://bluecut-scanner.vercel.app
```

## 🏗 Build
```bash
npm run build
npm start
```

## 🔗 Deploy (Vercel Recommended)

Connect repo → Vercel → Add env vars → Deploy.

## 📸 Logo

Located in `/public/logo.svg`.

## 📄 License

MIT
