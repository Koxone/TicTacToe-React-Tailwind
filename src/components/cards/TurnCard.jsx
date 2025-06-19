import { useGameContext } from "../../context/GameContext";

function TurnCard() {
  const { currentUserTurn } = useGameContext();

  return (
    <div
      className="flex items-center justify-between w-24 h-10 sm:w-[140px] sm:h-[52px] 
    py-2.5 px-4 sm:py-3 sm:px-[30px] bg-semi-dark-navy rounded-[10px] 
    shadow-[0_6px_0_var(--slate-900)]"
    >
      <img
        className="w-4 h-4 sm:w-5 sm:h-5"
        src={`/src/assets/icon-${
          currentUserTurn === "X" ? "x" : "o"
        }-solid-grey.svg`}
        alt="icon"
      />
      <p className="text-silver font-bold">TURN</p>
    </div>
  );
}

export default TurnCard;
