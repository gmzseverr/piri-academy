// src/components/ComingSoon.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const ComingSoon = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mockupRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pngShapes = [
    "/shape0.png",
    "/shape1.png",
    "/shape2.png",
    "/shape3.png",
    "/shape4.png",
    "/shape5.png",
    "/shape6.png",
  ];

  const [shapes, setShapes] = useState(
    pngShapes.map((src) => ({
      src,
      x: Math.random() * window.innerWidth * 0.8,
      y: Math.random() * window.innerHeight * 0.8,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      rotate: Math.random() * 360,
      dRotate: (Math.random() - 0.5) * 2,
      size: 100 + Math.random() * 100,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShapes((prev) =>
        prev.map((s) => {
          let newX = s.x + s.dx;
          let newY = s.y + s.dy;
          let newRotate = s.rotate + s.dRotate;

          if (newX < 0 || newX > window.innerWidth - s.size) s.dx *= -1;
          if (newY < 0 || newY > window.innerHeight - s.size) s.dy *= -1;

          return { ...s, x: newX, y: newY, rotate: newRotate };
        })
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // GSAP mockup ufak hareket
  useEffect(() => {
    if (mockupRef.current) {
      gsap.to(mockupRef.current, {
        y: -10,
        x: 10,
        rotation: 2,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden flex items-center justify-center p-4 font-sans">
      {/* PNG Shapes */}
      {shapes.map((s, index) => (
        <motion.img
          key={index}
          src={s.src}
          alt={`Shape ${index}`}
          className={`absolute pointer-events-none opacity-80 ${
            index === 2 ? "drop-shadow-sm" : ""
          }`}
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            top: s.y + mousePosition.y * 0.02,
            left: s.x + mousePosition.x * 0.02,
            rotate: `${s.rotate}deg`,
            zIndex: 1,
          }}
          animate={{ rotate: s.rotate }}
          transition={{ duration: 0.1 }}
        />
      ))}

      {/* İçerik */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl gap-10">
        {/* Sol: Yazı */}
        <div
          style={{ fontFamily: '"Poppins", sans-serif' }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-5xl font-bold md:text-7xl text-amber-400 drop-shadow-lg mb-6">
            Çok Yakında Sizlerleyiz!
          </h1>
          <p className=" text-shadow-green-900 text-lg md:text-xl">
            Yepyeni deneyimler ve sürprizlerle karşınızdayız.
            <br /> Takipte kalın!
          </p>
        </div>

        {/* Sağ: Mockup */}
        <div className="md:w-1/2 flex justify-center">
          <img
            ref={mockupRef}
            src="/mockup.png"
            alt="Mockup"
            className="w-80 md:w-96 drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
