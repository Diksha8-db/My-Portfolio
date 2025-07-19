import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import HeroSection from "../Hero/HeroSection";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const COLORS = [
  "rgba(19,255,170,0.7)",
  "rgba(206,132,207,0.7)",
  "rgba(221,51,92,0.7)",
];

function MovingStars() {
  const starsRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (starsRef.current) {
      starsRef.current.rotation.x = elapsedTime * 0.01;
      starsRef.current.rotation.y = elapsedTime * 0.01;
    }
  });

  return <Stars ref={starsRef} radius={50} count={2000} factor={4} fade />;
}

function Home() {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    const controls = animate(color, COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => controls.stop();
  }, []);

  const background = useMotionTemplate`
    radial-gradient(circle farthest-side at 50% 140%, ${color} 0%, ${color} 40%, transparent 60%)
  `;

  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-purple-300 dark:bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <MovingStars />
        </Canvas>
      </div>
      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          background: `radial-gradient(circle farthest-side at 50% 140%, ${color.get()} 0%, ${color.get()} 40%, transparent 60%)`,
          filter: "blur(100px)",
          opacity: 0.8,
        }}
      />
      <motion.div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: background, 
          mixBlendMode: "screen",
        }}
      />
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
    </motion.section>
  );
}

export default Home;
