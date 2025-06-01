import React from "react";

function ScoreCard({ title = "", score = 0, color = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center bg-${color} min-w-24 min-h-16 sm:min-w-[140px] sm:min-h-[72px] rounded-lg shadow-md`}>
      <p className="font-semibold text-sm tracking-[0.88px] text-dark-navy">{title}</p>
      <strong className="font-bold text-[20px] sm:text-2xl">{score}</strong>
    </div>
  );
}

export default ScoreCard;
