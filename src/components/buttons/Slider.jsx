import React from "react";

function Slider({ onSelect, userSelection }) {
  return (
    <div className="flex w-full relative">
      <div className="flex justify-between items-center w-full">
        <button onClick={() => onSelect("X")} className="z-10">
          <img 
            className="w-8 h-8 cursor-pointer" 
            src={`/src/assets/icon-x-${userSelection === "X" ? "solid-dark" : "solid"}-grey.svg`} 
            alt="icon X" 
          />
        </button>
        <button onClick={() => onSelect("O")} className="z-10">
          <img 
            className="w-8 h-8 cursor-pointer" 
            src={`/src/assets/icon-o-${userSelection === "O" ? "solid-dark" : "solid"}-grey.svg`} 
            alt="icon O" 
          />
        </button>
      </div>
    </div>
  );
}


export default Slider;
