"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const cards = [
    {
      icon: "🌟",
      title: "Bilgi Dolu Maceralar",
      desc: "Sürdürülebilir Kalkınma Hedeflerine özel, heyecan verici hikayeler ve keşifler.",
      border: "border-orange-400",
      color: "text-orange-500",
    },
    {
      icon: "🎮",
      title: "Eğlenceli Oyunlar",
      desc: "Öğrenirken eğleneceğin interaktif oyunlar ve zeka geliştiren görevler.",
      border: "border-green-400",
      color: "text-green-500",
    },
    {
      icon: "🎬",
      title: "Canlı Videolar",
      desc: "Konuları daha iyi anlaman için renkli animasyonlar ve öğretici videolar.",
      border: "border-blue-400",
      color: "text-blue-500",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Ailece Keşfet",
      desc: "Birlikte öğrenebileceğiniz ve eğlenebileceğiniz aile dostu aktiviteler.",
      border: "border-pink-400",
      color: "text-pink-500",
    },
    {
      icon: "🌳",
      title: "Doğa Dostu Yaşam",
      desc: "Çevreye ve topluma duyarlı, sürdürülebilir yaşam becerileri kazan.",
      border: "border-lime-400",
      color: "text-lime-600",
    },
    {
      icon: "✨",
      title: "Ve Çok Daha Fazlası!",
      desc: "Piri'nin gizemli dünyasını keşfetmek için bizi takip et!",
      border: "border-purple-400",
      color: "text-purple-600",
    },
  ];

  return (
    <section
      id="hakkimizda"
      className="w-full px-3 py-12 md:py-24 bg-amber-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-6 md:p-12 mb-10 md:mb-16 max-w-4xl mx-auto text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 md:mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Piri'nin Harika Dünyası
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Piri olarak, geleceğin süper kahramanları olan çocuklarımıza,
            dünyamızı daha iyi bir yer yapmanın sırlarını eğlenceli ve
            interaktif maceralarla öğretiyoruz. Öğrenmek hiç bu kadar keyifli
            olmamıştı!
          </motion.p>
        </motion.div>

        <div className="text-center mb-8 md:mb-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-600 mb-6 md:mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Piri'de Neler Var? Keşfet!
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border-b-4 ${card.border}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`text-4xl sm:text-5xl ${card.color} mb-3 sm:mb-4`}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 + index * 0.2 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
                {card.title}
              </h3>
              <p className="text-sm sm:text-md text-gray-600 text-center">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
