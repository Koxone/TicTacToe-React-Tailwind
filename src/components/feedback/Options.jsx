import React from "react";
import CancelButton from "../buttons/CancelButton";
import AcceptButton from "../buttons/AcceptButton";

function Options({ text1 = "", text2 = "", title = "", subtitle = "", color = "", icon = "" }) {
  return (
    <div
      className="Options absolute flex flex-col items-center justify-center 
    bg-black/50 w-screen min-h-screen z-40 gap-6"
    >
      <div className="flex flex-col items-center justify-center gap-6 bg-semi-dark-navy w-full h-[228px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-sm sm:text-[16px] text-silver font-bold uppercase">{title}</h2>
          <div className="flex items-center gap-2">
            <img className="w-[30px]" src="/src/assets/icon-o.svg" alt="" />
            <strong className={`font-bold text-2xl sm:text-[40px] text-light-${color} uppercase`}>{subtitle}</strong>
          </div>
        </div>

        <div className="flex gap-4">
          <CancelButton text={`${text1}`} />
          <AcceptButton text={`${text2}`} />
        </div>
      </div>
    </div>
  );
}

export default Options;
