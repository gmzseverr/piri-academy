"use client";
import { motion } from "framer-motion";

function PiriShape({ letter }) {
  // Harfe göre doğru görseli seçelim
  const images = {
    P: "/pshape.png",
    I: "/ishape.png",
    R: "/rshape.png",
  };

  return (
    <motion.img
      src={images[letter]}
      alt={`${letter} shape`}
      className="w-14 h-14 object-contain drop-shadow-lg"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    />
  );
}

export default PiriShape;
