# 🎰 Bingo PVP — Cyber Sci-Fi Competitive Web3 Arena

Bingo PVP is a premium, mobile-first competitive gaming platform that transforms traditional Bingo into a high-speed digital sport. Built for the Web3 era, it combines the security of the Solana blockchain with the performance of Godot Engine 4.6.2.

This repository contains the **Official Showcase Website**, built with a cutting-edge 3D scroll-based architecture to provide an immersive, cinematic reveal of the game's ecosystem.

---

## 🚀 Vision & Concept

Bingo PVP is not a passive luck-only game. It is a **Data Athlete** arena where speed, focus, and tactical awareness determine the victor. Players compete in real-time PVP matches for BPT (Bingo Player Tokens), secured by a sophisticated hybrid ledger system.

### Key Pillars:
- **Competitive Edge:** Real-time polling and authoritative server synchronization.
- **Web3 Integrity:** Solana Smart Contracts (Anchor v0.30.0) manage the treasury and tokenomics.
- **Performance:** Hybrid ledger strategy providing Web2 speeds with Web3 finality.
- **Aesthetic:** Cyber-Retro Sci-Fi visual identity with neon-drenched 3D interfaces.

---

## 🛠 Tech Stack (Website)

The showcase website is built using a modern, high-performance frontend stack:

### Core Framework
- **Next.js 15 (App Router):** The foundation for the multi-page static architecture.
- **TypeScript:** Ensuring type-safe development and robust code.

### 3D & Graphics
- **Three.js:** The underlying 3D engine.
- **@react-three/fiber:** React reconciler for Three.js.
- **@react-three/drei:** Essential helpers for 3D scenes (Text, Float, MeshDistortMaterial).
- **React Three Postprocessing:** Cinematic bloom and neon glow effects.

### Animation & Motion
- **Framer Motion:** High-performance component entry and UI animations.
- **GSAP (GreenSock):** Complex scroll-based 3D camera movements.
- **Lenis:** High-quality smooth scrolling synchronization.

### Audio & State
- **Howler.js:** Advanced 3D audio management and spatial effects.
- **Zustand:** Lightweight state management for global settings (Sound, UI).

### Styling
- **Tailwind CSS:** Utility-first styling with custom glassmorphism and neon gradients.
- **Lucide React:** Premium vector iconography.

---

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (Multi-page structure)
│   ├── overview/         # Project & Arena Philosophy
│   ├── contract/         # Smart Contract & API details
│   ├── bpthub/           # Wallet & Tokenomics
│   ├── ledger/           # Hybrid Strategy & Economic Flow
│   ├── security/         # Multi-layer Security Architecture
│   ├── specs/            # Technical Protocol Specifications
│   ├── gameplay/         # How to Play & Mechanics
│   ├── modes/            # PVP, AI, and Local modes
│   └── social/           # Ecosystem & Social Journey
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Visual-rich content sections
│   ├── three/            # 3D Scenes (BingoBoard3D, DataAthlete3D, etc.)
│   └── ui/               # Reusable Cyber-styled components (GlassCard, Button)
├── data/                 # Main content source (siteContent.ts)
├── hooks/                # Custom hooks (useLenis, useSound)
├── lib/                  # Utilities (cn helper)
└── store/                # Zustand global store
```

---

## 🎮 Key Website Features

1. **Interactive 3D Bingo Board:** A procedural 3D grid with real-time number generation in the background.
2. **Holographic Data Athlete:** A 3D character representation of the player concept.
3. **Multi-Page Cinematic Flow:** Each page features a unique 3D environment tied to the content.
4. **Arena Audio System:** Optional ambient soundtrack and tactical SFX managed via a global toggle.
5. **Hybrid Ledger Visualization:** Animated diagrams explaining the Web2-to-Web3 bridge.
6. **Smart Contract Terminal:** Technical specs and API instructions presented in a developer-friendly UI.

---

## 🛠 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build
Generate a production-ready build:
```bash
npm run build
```

---

## 🛡 Security & Smart Contract

The game's economic heart is a Solana program built with **Anchor v0.30.0**.

- **Program ID:** `AC8qx9XeZdhVxJac8k5RpZ1mVvCHtsnY59MsaauLewh9`
- **Security Layers:**
    - Authorized Server Control
    - Tiered Withdrawal System (24h Time Lock)
    - 20% Daily Velocity Limit
    - Emergency Admin Freeze

---

## 🌐 Deploying

This project is optimized for **Vercel**. Connect your repository to Vercel and it will automatically deploy using the Next.js build settings.
