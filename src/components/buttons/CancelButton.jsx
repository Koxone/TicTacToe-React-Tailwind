import React from "react";

function CancelButton({ text = "" }) {
  return (
    <div>
      <button
        className="flex uppercase items-center justify-center w-[120px] max-w-[139px] h-[52px] bg-silver text-dark-navy font-semibold text-sm tracking-[0.88px] whitespace-nowrap 
      rounded-lg hover:bg-slate-200 cursor-pointer shadow-[0_6px_0_var(--slate-600)] active:shadow-[0_4px_0_var(--slate-900)] focus:outline-none focus:ring-2 focus:ring-silver/50 focus:ring-offset-2 focus:ring-offset-dark-navy"
      >
        {text}
      </button>
    </div>
  );
}

export default CancelButton;
