import React from "react";
import "../../../src/index.css";
import { useGameContext } from "../../context/GameContext";

function MainButton({
  text = "",
  color = "",
  shadow = "",
  hover = "",
  onClick,
}) {
  const { modeSelection, setModeSelection } = useGameContext();

  return (
    <div className="relative w-full h-12">
      <button
        onClick={onClick}
        className={`rounded-2xl p-3 w-full bg-light-${color} shadow-[0_6px_0_var(--color-light-${shadow}-shadow)] hover:bg-light-${hover}-hover 
        font-[Outfit] font-bold text-dark-navy cursor-pointer`}
      >
        {text}
      </button>
    </div>
  );
}

export default MainButton;
