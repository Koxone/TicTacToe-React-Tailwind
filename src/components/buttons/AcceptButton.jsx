import { useNavigate, useNavigation } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";

function AcceptButton() {
  const navigate = useNavigate();

  const {
    restartGame,
    tied,
    resetAction,
    newRoundAction,
    winnerFound,
    setWinnerFound,
    tiedAction,
    tiedScore,
    setTiedScore,
  } = useGameContext();

  const buttonText = restartGame
    ? "yes, restart"
    : tied || winnerFound
    ? "next round"
    : "";

  const buttonOnClick = () => {
    if (restartGame) {
      resetAction();
      navigate("/");
    } else if (tied) {
      setTiedScore((prev) => prev + 1);
      localStorage.setItem("tiedScore", tiedScore);
      newRoundAction();
    } else if (winnerFound) {
      newRoundAction();
    }
  };

  return (
    <div>
      <button
        onClick={buttonOnClick}
        className="flex uppercase items-center justify-center w-[120px] h-[52px] bg-light-yellow text-dark-navy font-semibold text-sm tracking-[0.88px] 
        rounded-lg hover:bg-[var(--color-light-yellow-hover)] cursor-pointer shadow-[0_6px_0_var(--color-light-yellow-shadow)]"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default AcceptButton;
