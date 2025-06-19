import { createContext, useContext, useState, useEffect } from "react";

export const GameContext = createContext();

export default function GameProvider({ children }) {
  // Initial States
  const [currentUserTurn, setCurrentUserTurn] = useState("O");
  const [initialState, setInitialState] = useState("O");

  // User Selections
  const [userSelection, setUserSelection] = useState("O");
  const [modeSelection, setModeSelection] = useState(null);

  // Game Progress
  const [currentTurnNumber, setCurrentTurnNumber] = useState(null);
  const [playerTurn, setPlayerTurn] = useState(null);

  // Game Results
  const [restartGame, setRestartGame] = useState(false);
  const [winnerFound, setWinnerFound] = useState(false);
  const [lose, setLose] = useState(false);
  const [tied, setTied] = useState(false);
  const [winnerData, setWinnerData] = useState(null);
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);

  // Load state from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("gameState");
    if (!stored) return;

    const parsed = JSON.parse(stored);
    if (parsed.userSelection) setUserSelection(parsed.userSelection);
    if (parsed.modeSelection) setModeSelection(parsed.modeSelection);
    if (parsed.currentTurnNumber != null)
      setCurrentTurnNumber(parsed.currentTurnNumber);
    if (parsed.currentUserTurn) setCurrentUserTurn(parsed.currentUserTurn);
    if (parsed.initialState) setInitialState(parsed.initialState);
    if (parsed.winnerFound != null) setWinnerFound(parsed.winnerFound);
    if (parsed.winnerData) setWinnerData(parsed.winnerData);
    if (parsed.lose != null) setLose(parsed.lose);
    if (parsed.tied != null) setTied(parsed.tied);
    if (parsed.p1Score != null) setP1Score(parsed.p1Score);
    if (parsed.p2Score != null) setP2Score(parsed.p2Score);
  }, []);

  // Save state to localStorage on change
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

  // Auto-calculate player turn based on user selection
  useEffect(() => {
    if (userSelection) {
      const calculatedPlayerTurn = {
        p1: userSelection,
        p2: userSelection === "O" ? "X" : "O",
      };
      setPlayerTurn(calculatedPlayerTurn);
    }
  }, [userSelection]);

  // Reset full game and return to home
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

  // Reset only for a new round
  const newRoundAction = () => {
    setCurrentUserTurn(initialState);
    setCurrentTurnNumber(0);
    setRestartGame(false);
    setWinnerFound(false);
    setLose(false);
    setTied(false);
    setWinnerData(null);
  };

  // Context value
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
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useGameContext = () => useContext(GameContext);
