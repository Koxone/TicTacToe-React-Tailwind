import React from "react";

function Slider() {
  return (
    <div className="flex w-full relative">
      <div className="flex justify-between items-center w-full">
        <img className="w-8 h-8 z-10 cursor-pointer" src="/src/assets/icon-x-solid-grey.svg " alt="icon" />
        <img className="w-8 h-8 z-10 cursor-pointer" src="/src/assets/icon-o-solid-dark-grey.svg " alt="icon" />
      </div>
    </div>
  );
}

export default Slider;
