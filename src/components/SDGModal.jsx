"use client";
import React from "react";

function SDGModal({ goal, onClose }) {
  if (!goal) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gradient-to-br from-amber-300 to-cyan-100 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-xl shadow-2xl max-w-4xl md:max-w-5xl w-full h-[85vh] md:h-[75vh] overflow-hidden flex flex-col justify-end animate-scale-in" // Modal boyutları, justified-end
        style={{ backgroundImage: `url(${goal.wallpaper})` }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 text-3xl md:text-4xl font-bold leading-none z-30 drop-shadow-lg"
          aria-label="Kapat"
        >
          &times;
        </button>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

        <div className="relative z-20 p-6 md:p-8 text-white">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight drop-shadow-lg">
            {goal.title}
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-95 drop-shadow-md">
            {goal.description}
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg transform hover:scale-105"
          >
            Piri'nin Hedefi Anlaşıldı!
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>,
    document.body
  );
}

export default SDGModal;
