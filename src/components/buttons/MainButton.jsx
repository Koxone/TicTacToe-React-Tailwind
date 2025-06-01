import React from "react";
import "../../../src/index.css";

function MainButton({ text = "", color = "", shadow = "", hover = "" }) {
  return (
    <div className="relative w-full h-12">
      <button
        className={`rounded-2xl p-3 w-full bg-light-${color} 
        shadow-[0_6px_0_var(--color-light-${shadow}-shadow)] hover:bg-light-${hover}-hover font-[Outfit] font-bold text-dark-navy cursor-pointer`}
      >
        {text}
      </button>
    </div>
  );
}

export default MainButton;
