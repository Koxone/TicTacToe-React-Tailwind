import React from "react";

function RestartButton() {
  return (
    <div>
      <button
        className="flex items-center justify-center w-10 h-10 sm:w-[52px] 
        sm:h-[52px] bg-silver rounded-[5px] p-3 shadow-[0_6px_0_#6B7280] cursor-pointer hover:bg-[var(--color-silver-hover)] hover:shadow-[0_6px_0_#4B5563]"
      >
        <img className="" src="/src/assets/icon-restart.svg" alt="icon with an arrow to restart the game" />
      </button>
    </div>
  );
}

export default RestartButton;
