import React from "react";
import CancelButton from "../buttons/CancelButton";
import AcceptButton from "../buttons/AcceptButton";
import { useGameContext } from "../../context/GameContext";

function RestartTied() {
  const { restartGame, setRestartGame, tied, setTied } = useGameContext();

  if (!restartGame && !tied) return null;

  const title = restartGame ? "RESTART GAME?" : tied ? "ROUND TIED" : "";
  const text1 = restartGame ? "NO, CANCEL" : tied ? "QUIT" : "";
  const text2 = restartGame ? "YES, RESTART" : tied ? "NEXT ROUND" : "";
  return (
    <div
      onClick={() => setRestartGame(false)}
      className="Options flex absolute  flex-col items-center justify-center 
    bg-black/50 w-screen min-h-screen z-40 gap-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center justify-center gap-6 bg-semi-dark-navy w-full h-[228px]"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-[40px] text-silver font-bold uppercase">
            {title}
          </h2>
        </div>

        <div className="flex gap-4">
          <CancelButton text={text1} />
          <AcceptButton text={text2} />
        </div>
      </div>
    </div>
  );
}

export default RestartTied;
