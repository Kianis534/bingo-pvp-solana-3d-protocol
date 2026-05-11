export const siteContent = {
  hero: {
    title: "Bingo PVP",
    tagline: "Enter the Cyber Bingo Arena",
    description: "Bingo PVP is a high-speed, competitive, mobile-first Bingo game where luck meets skill in a futuristic cyber-retro arena.",
    cta: [
      { label: "Explore Game", href: "#overview" },
      { label: "View Smart Contract", href: "#contract" },
      { label: "View Hybrid Ledger", href: "#ledger" }
    ]
  },
  overview: {
    title: "Project Overview",
    description: "Bingo PVP transforms the traditional Bingo experience into a fast-paced digital competition. Set in a Cyber-Retro Sci-Fi digital arena, players act as Data Athletes, competing in high-stakes matches that demand speed, focus, and tactical awareness.",
    details: [
      "Smart contract integration with Solana",
      "Decentralized token economy",                          
      "Web3 economy with Solana integration",
      "Mobile-first competitive platform",
      "Built with Godot Engine 4.6.2",
      "Traditional Bingo transformed into digital sport",
      "Real-time PVP and AI modes"
    ]
  },
  philosophy: {
    title: "Arena Philosophy",
    subtitle: "Player as Data Athlete",
    description: "In the Bingo PVP arena, you are not just a spectator. You are a Data Athlete. Speed, focus, and tactical awareness are your primary tools. Every match is a high-stakes digital battle designed to push your limits.",
    features: [
      { title: "Speed", description: "React instantly to drawn numbers." },
      { title: "Focus", description: "Maintain absolute board awareness." },
      { title: "Tactics", description: "Prioritize lines and manage timers." }
    ]
  },
  howToPlay: {
    title: "How to Play and Win",
    steps: [
      { title: "The Grid", description: "Each player receives a procedurally generated 5x5 grid with 25 unique numbers (1-25)." },
      { title: "Number Draw", description: "Numbers are drawn one by one. In PVP, this is synchronized via an authoritative server." },
      { title: "Marking", description: "Mark numbers as they appear. Speed is critical to stay ahead of your opponent." },
      { title: "Winning", description: "Complete 5 lines (Horizontal, Vertical, or Diagonal) to secure victory in the arena." }
    ]
  },
  mechanics: {
    title: "Core Gameplay Mechanics",
    items: [
      { title: "Dynamic 5x5 Grid", description: "Compact, fast, and competitive board arrangement." },
      { title: "Procedural Generation", description: "Every match features a unique board layout for maximum fairness." },
      { title: "Real-Time Validation", description: "Instant scanning for completed lines using high-performance algorithms." },
      { title: "Animated Strike-Throughs", description: "Visual confirmation of completed lines with glowing neon effects." },
      { title: "Turn Timer", description: "Intense pressure system to maintain match rhythm." },
      { title: "Auto-Mark System", description: "Ensures match flow even during player inactivity." }
    ]
  },
  gameModes: [
    {
      id: "pvp",
      title: "Competitive Online PVP",
      description: "Compete against real opponents globally for BPT rewards. Synchronized via authoritative servers.",
      features: ["Global Matchmaking", "Server-side Draws", "BPT Stakes", "Real-time Polling"]
    },
    {
      id: "ai",
      title: "AI Practice Mode",
      description: "Improve your skills against modular AI bots of varying difficulty levels.",
      features: ["3 Difficulty Levels", "Human-like Behavior", "Offline Support", "Skill Building"]
    },
    {
      id: "local",
      title: "Local Offline PVP",
      description: "Play with a friend on the same device with split-screen or face-to-face UI.",
      features: ["Shared Device", "Inverted UI", "No Internet Needed", "Social Fun"]
    }
  ],
  aiBots: [
    {
      level: "Easy Bot",
      delay: "1.5s – 3.0s",
      behavior: "Beginner friendly, frequent scanning errors, slow reaction.",
      glow: "cyan"
    },
    {
      level: "Medium Bot",
      delay: "0.5s – 1.5s",
      behavior: "Balanced difficulty, strategic focus, realistic challenge.",
      glow: "blue"
    },
    {
      level: "Hard Bot",
      delay: "0.2s – 0.5s",
      behavior: "Near-instant marking, perfect awareness, elite challenge.",
      glow: "magenta"
    }
  ],
  networking: {
    title: "Matchmaking & Networking",
    details: [
      { title: "REST API", description: "Custom API for matchmaking, status, and synchronization." },
      { title: "1s Polling", description: "Client polls server every second for marking progress and draws." },
      { title: "Authoritative Logic", description: "Server controls win validation and anti-cheat checks." },
      { title: "Curtain Transition", description: "Immersive transitions during opponent search." }
    ]
  },
  social: {
    title: "Social Ecosystem",
    description: "Build your player network, chat in real-time, and manage transmissions.",
    features: [
      { title: "Social Drawer", description: "Manage friends, requests, and blocklists in one place." },
      { title: "Transmissions", description: "Sci-fi styled friend request system." },
      { title: "Radial Quick-Chat", description: "Send tactical messages in 0.5s without losing focus." },
      { title: "Rich Text Console", description: "Expressive communication with BBCode and emojis." }
    ]
  },
  trading: {
    title: "P2P Trading & Transaction Hub",
    description: "Secure, atomic, and instant token movement between Data Athletes.",
    details: [
      { title: "Atomic Updates", description: "Balance changes happen simultaneously to prevent errors." },
      { title: "BPTHub", description: "Central ledger for match wins, trades, and external movements." },
      { title: "Real-time Validation", description: "RegEx and balance checks ensure secure transfers." }
    ]
  },
  bpthub: {
    title: "BPTHub / Wallet",
    token: "BPT (Bingo Player Token)",
    uses: ["Entry Fees", "Match Rewards", "Social Trading", "Staking"],
    features: ["Deposit Address Generation", "Clipboard Copy", "Withdrawal Validation", "Transaction History"]
  },
  visualIdentity: {
    title: "Visual Identity & Themes",
    style: "Cyber-Retro Sci-Fi",
    elements: ["Neon Colors", "Holographic Panels", "High Contrast", "Translucent UI"],
    shaders: [
      { name: "Sci-Fi Background", description: "Pulsing digital grid and data nodes." },
      { name: "Erosion Transition", description: "Digital disintegration effect between screens." },
      { name: "Title Effect", description: "Chromatic aberration and digital distortion." }
    ]
  },
  audioHaptics: {
    title: "Audio, Haptics & Settings",
    channels: ["Master", "Music", "SFX"],
    features: [
      { title: "Haptic Engine", description: "Tactile feedback for wins, chat, and critical timers." },
      { title: "Synth-Wave", description: "High-energy retro-futuristic soundtrack." },
      { title: "Audio Mixer", description: "Precise control over your arena experience." }
    ]
  },
  smartContract: {
    title: "Smart Contract Overview",
    platform: "Solana (Anchor v0.30.0)",
    mission: "Solving the Trust Gap with hardcoded economic rules and on-chain transparency.",
    keyPoints: [
      "Programmable Economy",
      "Self-Regulating Monetary System",
      "Oracle Model for Game Backend",
      "Decentralized Transparency"
    ]
  },
  architecture: {
    title: "Smart Contract Architecture",
    components: [
      { title: "PDAs", description: "Program Derived Addresses for secure, trustless vaulting." },
      { title: "Metaplex", description: "On-chain token metadata (Name, Symbol, URI)." },
      { title: "Global Config", description: "Centralized settings and security controls." },
      { title: "Central Pool", description: "The main vault for rewards and liquidity." }
    ]
  },
  tokenomics: {
    title: "Tokenomics",
    dailyMint: "86,400 second cycle",
    distribution: { players: "90%", development: "10%" },
    halving: "5% Threshold Logic",
    halvingDescription: "Daily rate cuts in half every time supply reaches a new 5% increment of max supply."
  },
  security: {
    title: "Smart Contract Security",
    layers: [
      { title: "Authorized Control", description: "Server signature required for rewards." },
      { title: "Tiered Withdrawals", description: "Immediate for small, 24h lock for large amounts." },
      { title: "20% Velocity Limit", description: "Daily withdrawal cap to prevent treasury drain." },
      { title: "Emergency Freeze", description: "Admin kill-switch for minting and transfers." }
    ]
  },
  api: [
    { name: "initialize", auth: "Admin", purpose: "One-time setup of token and pools." },
    { name: "daily_mint", auth: "Anyone", purpose: "Trigger 24-hour reward generation." },
    { name: "immediate_withdrawal", auth: "Server", purpose: "Send small rewards instantly." },
    { name: "request_locked_withdrawal", auth: "Server", purpose: "Initiate 24h lock for large rewards." },
    { name: "execute_withdrawal", auth: "Anyone", purpose: "Finalize locked reward after timer." },
    { name: "toggle_freeze", auth: "Admin", purpose: "Pause/unpause the entire ecosystem." }
  ],
  specs: {
    blockchain: "Solana",
    framework: "Anchor v0.30.0",
    programId: "AC8qx9XeZdhVxJac8k5RpZ1mVvCHtsnY59MsaauLewh9",
    decimals: 9,
    seeds: ["global_config", "central_pool", "development_pool", "withdrawal_request"]
  },
  hybridLedger: {
    title: "Hybrid Ledger Strategy",
    vault: "On-Chain (Solana Central Pool)",
    ledger: "Off-Chain (High-speed Database)",
    advantages: [
      "Zero gas fees during gameplay",
      "Instant finality (<100ms)",
      "Mobile-native UX",
      "Scalable micro-transactions"
    ]
  },
  economicFlow: [
    { step: "Depositing", description: "Wallet to Central Pool -> Verified -> Database Credit." },
    { step: "Playing", description: "Entry fee/reward update on Database (Instant, No Gas)." },
    { step: "Trading", description: "Atomic update between players on Database (Instant, Free)." },
    { step: "Withdrawing", description: "Database Debit -> Server Call -> Contract Release -> Wallet." }
  ],
  hybridSecurity: {
    title: "Hybrid Model Security",
    roles: [
      { role: "Server", responsibility: "Auditor - verifies match results and anti-cheat." },
      { role: "Solana", responsibility: "Custodian - holds real funds with withdrawal limits." },
      { role: "Admin", responsibility: "Supervisor - can freeze contract if DB is compromised." }
    ]
  },
  advantages: {
    title: "Competitive Advantages",
    points: [
      "Innovation in Safety (Velocity Limit)",
      "Solana Optimized (PDA-based vaulting)",
      "Production-Grade Architecture",
      "Full Transparency (On-chain logic)"
    ]
  },
  journey: {
    title: "The Player Journey",
    steps: ["Profile Login", "BPT Wallet", "Matchmaking", "Competitive Play", "Win Rewards", "Trade/Withdraw"]
  }
};
