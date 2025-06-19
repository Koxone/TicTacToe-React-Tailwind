import { useGameContext } from "../../context/GameContext";

function CancelButton() {
  const { restartGame, tied, setRestartGame, setTied, resetAction } =
    useGameContext();

  const clickHandler = () => {
    setRestartGame(false);
    setTied(false);
  };

  const buttonTextHandler = restartGame ? "no, cancel" : tied ? "quit" : "";

  const buttonOnClick = restartGame
    ? clickHandler
    : tied
    ? resetAction
    : () => {};

  return (
    <div>
      <button
        onClick={buttonOnClick}
        className="flex uppercase items-center justify-center w-[120px] max-w-[139px] h-[52px] bg-silver text-dark-navy font-semibold text-sm tracking-[0.88px] whitespace-nowrap 
      rounded-lg hover:bg-slate-200 cursor-pointer shadow-[0_6px_0_var(--slate-600)] active:shadow-[0_4px_0_var(--slate-900)] focus:outline-none focus:ring-2 focus:ring-silver/50 focus:ring-offset-2 focus:ring-offset-dark-navy"
      >
        {buttonTextHandler}
      </button>
    </div>
  );
}

export default CancelButton;
