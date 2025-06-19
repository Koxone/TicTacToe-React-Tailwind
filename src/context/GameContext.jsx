import { createContext, useContext, useState, useEffect } from "react";

export const GameContext = createContext();

export default function GameProvider({ children }) {
  // Initial State
  const [currentUserTurn, setCurrentUserTurn] = useState("O");
  const [initialState, setInitialState] = useState("O");

  // User Selections
  const [userSelection, setUserSelection] = useState("O");
  const [modeSelection, setModeSelection] = useState(null);

  // In Game Behavior
  const [currentTurnNumber, setCurrentTurnNumber] = useState(null);
  const [playerTurn, setPlayerTurn] = useState(null);

  // In Game Results
  const [restartGame, setRestartGame] = useState(false);
  const [winerFound, setWinerFound] = useState(false);
  const [lose, setLose] = useState(false);
  const [tied, setTied] = useState(false);

  // Winning Combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    const storedUserSelection = localStorage.getItem("userSelection"); //
    const storedModeSelection = localStorage.getItem("modeSelection"); //
    const storedCurrentTurnNumber = localStorage.getItem("currentTurnNumber");
    const storedCurrentUserTurn = localStorage.getItem("currentUserTurn");
    const storedInitialState = localStorage.getItem("initialState");
    const storedPlayerturn = localStorage.getItem("playerTurn");

    if (storedUserSelection) {
      setUserSelection(storedUserSelection);
    } else {
      setUserSelection("O");
    }

    if (storedUserSelection) setUserSelection(storedUserSelection);
    if (storedModeSelection) setModeSelection(storedModeSelection);
    if (storedCurrentTurnNumber) setCurrentTurnNumber(storedCurrentTurnNumber);
    if (storedCurrentUserTurn) setCurrentUserTurn(storedCurrentUserTurn);
    if (storedInitialState) setInitialState(storedInitialState);
    if (storedPlayerturn) setPlayerTurn(JSON.parse(storedPlayerturn));
  }, []);

  useEffect(() => {
    if (userSelection) {
      const calculatedPlayerTurn = {
        p1: userSelection,
        p2: userSelection === "O" ? "X" : "O",
      };
      setPlayerTurn(calculatedPlayerTurn);
      localStorage.setItem("playerTurn", JSON.stringify(calculatedPlayerTurn));
    }
  }, [userSelection]);

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
    winerFound,
    setWinerFound,
    lose,
    setLose,
    tied,
    setTied,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useGameContext = () => useContext(GameContext);
