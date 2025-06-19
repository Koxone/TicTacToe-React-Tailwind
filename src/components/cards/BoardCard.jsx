import React, { useState } from "react";
import { useGameContext } from "../../context/GameContext";
import SpotlightWrapper from "../test/SpotlightWrapper";

function BoardCard({ value, onClick }) {
  return (
    <SpotlightWrapper>
      <button
        onClick={onClick}
        className="flex-1 min-w-[90px] sm:min-w-[140px] aspect-square flex 
      items-center justify-center bg-semi-dark-navy shadow-[0_6px_0_var(--slate-900)] rounded-lg cursor-pointer"
      >
        {value && (
          <img
            className="w-10 h-10 sm:w-16 sm:h-16"
            src={`/src/assets/icon-${value}.svg`}
            alt={`icon ${value}`}
          />
        )}
      </button>
    </SpotlightWrapper>
  );
}

export default BoardCard;
