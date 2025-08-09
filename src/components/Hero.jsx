"use client";
import React from "react";

function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden" // h-screen ile tam ekran yüksekliği, overflow-hidden ile taşmaları engelle
      style={{
        backgroundImage: `url('assets/hi.jpeg')`,
        backgroundPosition: "center right",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/30 to-transparent z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-0 gap-10">
        <div className="w-full md:w-1/2 text-white text-center md:text-left p-6 md:p-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg animate-fade-in-up">
            Merhaba! <br /> Ben <span className="text-orange-400">Piri</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl drop-shadow-md animate-fade-in-up animation-delay-300">
            Yakında sizlerleyim! <br />
            Sürdürülebilir bir dünya için birlikte öğrenmeye hazır mısınız?
          </p>
        </div>

        <div className="hidden md:block w-full md:w-1/2"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}

export default Hero;
