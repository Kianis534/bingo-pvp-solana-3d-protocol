"use client";

import { create } from "zustand";

interface GlobalState {
  isSoundEnabled: boolean;
  isMuted: boolean;
  activeSection: string;
  toggleSound: () => void;
  toggleMute: () => void;
  setActiveSection: (section: string) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  isSoundEnabled: false,
  isMuted: false,
  activeSection: "hero",
  toggleSound: () => set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  setActiveSection: (section) => set({ activeSection: section }),
}));
