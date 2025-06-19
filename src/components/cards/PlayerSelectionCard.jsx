import React, { useState, useEffect } from "react";
import Slider from "../buttons/Slider";
import { useGameContext } from "../../context/GameContext";

function PlayerSelectionCard() {
  const { userSelection, initialState } = useGameContext();
  return (
    <div className="w-full  sm:w-[460px] h-52 bg-semi-dark-navy rounded-2xl p-6 gap-6 flex flex-col shadow-[0_6px_0_var(--slate-900)]">
      <p className="uppercase font-bold text-base text-silver text-center">
        pick player 1 mark
      </p>
      <div className="flex justify-between  items-center bg-dark-navy-playercard w-full sm:max-w-[412px] h-[72px] rounded-xl py-5 px-14 sm:px-[91px] relative">
        <Slider />
        <div
          className={`
     w-[132px] sm:w-[198px] h-[54px] bg-silver rounded-xl z-0 absolute top-1/2 -translate-y-1/2 transition-all bg- duration-300 ease-in-out
    left-3 sm:left-2
    ${
      userSelection === "X"
        ? "translate-x-0"
        : "translate-x-[125px] sm:translate-x-[195px]"
    }
  `}
        />
      </div>
    </div>
  );
}

export default PlayerSelectionCard;
