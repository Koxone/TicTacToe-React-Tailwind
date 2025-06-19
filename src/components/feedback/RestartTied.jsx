import CancelButton from "../buttons/CancelButton";
import AcceptButton from "../buttons/AcceptButton";
import { useGameContext } from "../../context/GameContext";

function RestartTied() {
  const {
    restartGame,
    setRestartGame,
    tied,
    setTied,
    resetAction,
    newRoundAction,
  } = useGameContext();

  const title = restartGame ? "restart game?" : tied ? "round tied" : "";

  if (!tied && !restartGame) return;
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

        <div className="flex gap-4 uppercase">
          <CancelButton />
          <AcceptButton />
        </div>
      </div>
    </div>
  );
}

export default RestartTied;
