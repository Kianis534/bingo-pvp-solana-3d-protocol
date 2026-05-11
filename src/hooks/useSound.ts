"use client";

import { useEffect, useRef } from "react";
import { Howl } from "howler";
import { useGlobalStore } from "@/store/useGlobalStore";

// Using high-quality royalty free sci-fi sound links
const SOUND_LINKS = {
  ambient: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
  hover: "https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3",
  click: "https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3",
  transition: "https://assets.mixkit.co/sfx/preview/mixkit-futuristic-robotic-movement-2439.mp3",
};

export const useSound = () => {
  const { isSoundEnabled, isMuted } = useGlobalStore();
  const sounds = useRef<{ [key: string]: Howl }>({});

  useEffect(() => {
    if (!isSoundEnabled) {
      if (sounds.current.ambient) sounds.current.ambient.stop();
      return;
    }

    sounds.current = {
      ambient: new Howl({
        src: [SOUND_LINKS.ambient],
        loop: true,
        volume: 0.2,
        autoplay: true,
        html5: true, // Use HTML5 Audio for long tracks
      }),
      hover: new Howl({ src: [SOUND_LINKS.hover], volume: 0.1 }),
      click: new Howl({ src: [SOUND_LINKS.click], volume: 0.2 }),
      transition: new Howl({ src: [SOUND_LINKS.transition], volume: 0.3 }),
    };

    return () => {
      Object.values(sounds.current).forEach((sound) => sound.unload());
    };
  }, [isSoundEnabled]);

  useEffect(() => {
    Object.values(sounds.current).forEach((sound) => {
      sound.mute(isMuted);
    });
  }, [isMuted]);

  const playSound = (name: keyof typeof SOUND_LINKS) => {
    if (isSoundEnabled && sounds.current[name]) {
      sounds.current[name].play();
    }
  };

  return { playSound };
};
