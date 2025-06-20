import { createContext, useContext, useState, useEffect } from "react";

export const GameContext = createContext();

export default function GameProvider({ children }) {
  // Load from localStorage
  const getStoredValue = (key, defaultValue) => {
    const stored = localStorage.getItem("gameState");
    if (!stored) return defaultValue;
    try {
      const parsed = JSON.parse(stored);
      return parsed[key] !== undefined ? parsed[key] : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  // Initial States with stored values
  const [currentUserTurn, setCurrentUserTurn] = useState(() =>
    getStoredValue("currentUserTurn", "O")
  );
  const [initialState, setInitialState] = useState(() =>
    getStoredValue("initialState", "O")
  );
  const [userSelection, setUserSelection] = useState(() =>
    getStoredValue("userSelection", "O")
  );
  const [modeSelection, setModeSelection] = useState(() =>
    getStoredValue("modeSelection", null)
  );
  const [currentTurnNumber, setCurrentTurnNumber] = useState(() =>
    getStoredValue("currentTurnNumber", 0)
  );
  const [playerTurn, setPlayerTurn] = useState(null);
  const [restartGame, setRestartGame] = useState(false);
  const [winnerFound, setWinnerFound] = useState(() =>
    getStoredValue("winnerFound", false)
  );
  const [lose, setLose] = useState(() => getStoredValue("lose", false));
  const [tied, setTied] = useState(() => getStoredValue("tied", false));
  const [winnerData, setWinnerData] = useState(() =>
    getStoredValue("winnerData", null)
  );
  const [p1Score, setP1Score] = useState(() => getStoredValue("p1Score", 0));
  const [p2Score, setP2Score] = useState(() => getStoredValue("p2Score", 0));

  // Save to localStorage on changes
  useEffect(() => {
    localStorage.setItem(
      "gameState",
      JSON.stringify({
        userSelection,
        modeSelection,
        currentTurnNumber,
        currentUserTurn,
        initialState,
        winnerFound,
        winnerData,
        lose,
        tied,
        p1Score,
        p2Score,
      })
    );
  }, [
    userSelection,
    modeSelection,
    currentTurnNumber,
    currentUserTurn,
    initialState,
    winnerFound,
    winnerData,
    lose,
    tied,
    p1Score,
    p2Score,
  ]);

  // Calculate player turns based on selection
  useEffect(() => {
    if (userSelection) {
      const calculatedPlayerTurn = {
        p1: userSelection,
        p2: userSelection === "O" ? "X" : "O",
      };
      setPlayerTurn(calculatedPlayerTurn);
    }
  }, [userSelection]);

  // Reset the board when a winner has been found and the board is not empty
  useEffect(() => {
    if (!winnerFound && board.some((cell) => cell.value !== null)) {
      setBoard(
        Array.from({ length: 9 }, () => ({ value: null, player: null }))
      );
    }
  }, [winnerFound]);

  const resetAction = () => {
    const defaultSelection = "O";
    const calculatedPlayerTurn = {
      p1: defaultSelection,
      p2: defaultSelection === "O" ? "X" : "O",
    };

    setUserSelection(defaultSelection);
    setModeSelection("player");
    setCurrentTurnNumber(0);
    setCurrentUserTurn(defaultSelection);
    setInitialState(defaultSelection);
    setPlayerTurn(calculatedPlayerTurn);
    setRestartGame(false);
    setWinnerFound(false);
    setLose(false);
    setTied(false);
    setWinnerData(null);
    setP1Score(0);
    setP2Score(0);

    localStorage.removeItem("gameState");
  };

  const newRoundAction = () => {
    setCurrentUserTurn(initialState);
    setCurrentTurnNumber(0);
    setRestartGame(false);
    setWinnerFound(false);
    setLose(false);
    setTied(false);
    setWinnerData(null);
  };

  const updateScore = (player) => {
    if (player === "P1") {
      const updated = p1Score + 1;
      setP1Score(updated);
    } else if (player === "P2") {
      const updated = p2Score + 1;
      setP2Score(updated);
    }
  };

  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => ({ value: null, player: null }))
  );

  const value = {
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
    winnerFound,
    setWinnerFound,
    lose,
    setLose,
    tied,
    setTied,
    winnerData,
    setWinnerData,
    p1Score,
    setP1Score,
    p2Score,
    setP2Score,
    winningCombinations: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    resetAction,
    newRoundAction,
    updateScore,
    board,
    setBoard,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useGameContext = () => useContext(GameContext);
