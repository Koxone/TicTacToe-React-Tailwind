import React, { useState } from "react";

function BoardCard({ icon = "", onMove }) {
  const [visible, setVisible] = useState(false);
  const [placedIcon, setPlacedIcon] = useState(""); 

  const handleClick = () => {
    if (!visible) { 
      setVisible(true);
      setPlacedIcon(icon); 
      onMove(); 
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex-1 min-w-[90px] sm:min-w-[140px] aspect-square flex 
      items-center justify-center bg-semi-dark-navy shadow-[0_6px_0_var(--slate-900)] rounded-lg cursor-pointer"
    >
      <img
        className={`w-10 h-10 sm:w-16 sm:h-16 ${visible ? "visible" : "invisible"}`}
        src={`/src/assets/icon-${placedIcon}.svg`} 
        alt=""
      />
    </button>
  );
}

export default BoardCard;