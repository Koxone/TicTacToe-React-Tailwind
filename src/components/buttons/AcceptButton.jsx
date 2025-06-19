import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";

function AcceptButton({ text = "" }) {
  const navigate = useNavigate();
  const {
    userSelection,
    setUserSelection,
    setModeSelection,
    setCurrentTurnNumber,
    setCurrentUserTurn,
    initialState,
    setInitialState,
    setPlayerTurn,
    restartGame,
    setRestartGame,
    winnerFound,
    setWinnerFound,
    setLose,
    tied,
    setTied,
    setP1Score,
    setP2Score,
  } = useGameContext();

  const restartGameAction = () => {
    const defaultSelection = "O";
    const calculatedPlayerTurn = {
      p1: defaultSelection,
      p2: defaultSelection === "O" ? "X" : "O",
    };

    // Reiniciar el contexto
    setUserSelection(defaultSelection);
    setModeSelection(null);
    setCurrentTurnNumber(null);
    setCurrentUserTurn(defaultSelection);
    setInitialState(defaultSelection);
    setPlayerTurn(calculatedPlayerTurn); // 👈 vuelve a setearlo
    setRestartGame(false);
    setWinnerFound(false);
    setLose(false);
    setTied(false);

    // Limpiar localStorage
    localStorage.clear();

    // Ir a pantalla principal
    navigate("/");
  };

  const tiedGameAction = () => {
    setCurrentTurnNumber(null);
    setCurrentUserTurn("O");
    setPlayerTurn(null);
    setRestartGame(false);
    setWinnerFound(false);
    setLose(false);
    setTied(false);
  };

  const newRoundAction = () => {
    const defaultTurn = initialState;

    setCurrentUserTurn(defaultTurn);
    setCurrentTurnNumber(null);
    setWinnerFound(false);
    setLose(false);
    setTied(false);
  };

  const handler = () => {};

  const action = () => {
    if (restartGame) {
      restartGameAction();
      localStorage.clear();
      setP1Score(0);
      setP2Score(0);
      console.log("Restart Button User Selection:", userSelection);
    } else if (tied) {
      tiedGameAction();
    } else if (winnerFound) {
      newRoundAction();
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
