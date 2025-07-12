import React from "react";

function GoalCard({ goal }) {
  return (
    <div
      className="relative w-full h-72 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center
                 transform transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-glow cursor-pointer"
    >
      <img
        src={goal.poster}
        alt={goal.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(255, 255, 0, 0.5); /* Sarımsı parlama */
        }
      `}</style>
    </div>
  );
}

export default GoalCard;
