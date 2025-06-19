import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";

function AcceptButton({ text = "" }) {
  const navigate = useNavigate();
  const {
    userSelection,
    setUserSelection,
    modeSelection,
    setModeSelection,
    currentTurnNumber,
    setCurrentTurnNumber,
    currentUserTurn,
    setCurrentUserTurn,
    initialState,
    setInitialState,
    playerTurn,
    setPlayerTurn,
    restartGame,
    setRestartGame,
    win,
    setWin,
    lose,
    setLose,
    tied,
    setTied,
  } = useGameContext();

  const restartGameAction = () => {
    setUserSelection("O");
    setModeSelection(null);
    setCurrentTurnNumber(null);
    setCurrentUserTurn("O");
    setInitialState("O");
    setPlayerTurn(null);
    setRestartGame(false);
    setWin(false);
    setLose(false);
    setTied(false);
    navigate("/");
  };

  const tiedGameAction = () => {
    setCurrentTurnNumber(null);
    setCurrentUserTurn("O");
    setPlayerTurn(null);
    setRestartGame(false);
    setWin(false);
    setLose(false);
    setTied(false);
  };

  const action = () => {
    if (restartGame) {
      restartGameAction();
    } else if (tied) {
      tiedGameAction();
    }
  };
  return (
    <div>
      <button
        onClick={action}
        className="flex uppercase items-center justify-center w-[120px] h-[52px] bg-light-yellow text-dark-navy font-semibold text-sm tracking-[0.88px] 
      rounded-lg hover:bg-slate-200 cursor-pointer shadow-[0_6px_0_var(--color-light-yellow-shadow)]"
      >
        {text}
      </button>
    </div>
  );
}

export default AcceptButton;
