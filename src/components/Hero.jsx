"use client";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Shape from "./Shape";

function Hero() {
  const imgRef = useRef(null);

  // Mouse ile img hareketi
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (e.clientX - centerX) * 0.03;
    const offsetY = (e.clientY - centerY) * 0.03;

    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <section
      id="anasayfa"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/hi.jpeg')`,
        backgroundPosition: "center right",
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-0 gap-10">
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left p-6 md:p-0">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ fontFamily: '"Poppins", sans-serif' }}
              className="text-5xl sm:text-6xl lg:text-6xl font-extrabold drop-shadow-lg"
            >
              Merhaba!
            </motion.h1>
            <Shape />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="text-amber-500 font-black text-4xl sm:text-5xl lg:text-8xl mt-6 drop-shadow-md"
          >
            Ben Piri
          </motion.h2>

          <motion.div
            ref={imgRef}
            style={{ x, y }}
            className="hidden md:flex w-full md:w-1/2 items-center justify-center relative"
          >
            <img
              src="vecteezy_3d-shapes-squiggles-grainy-texture_17416943.png"
              alt="floating"
              className="w-40 h-40 absolute -top-10 -left-20 pointer-events-none filter drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
