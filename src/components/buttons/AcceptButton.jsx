import React from "react";

function AcceptButton({ text = "" }) {
  return (
    <div>
      <button
        className="flex uppercase items-center justify-center w-[120px] h-[52px] bg-light-yellow text-dark-navy font-semibold text-sm tracking-[0.88px] 
      rounded-lg hover:bg-slate-200 cursor-pointer shadow-[0_6px_0_var(--color-light-yellow-shadow)]"
      >
        {text}
      </button>
    </div>
  );
}

export default AcceptButton;
