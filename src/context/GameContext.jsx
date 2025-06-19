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
  const [winnerFound, setWinnerFound] = useState(false);
  const [lose, setLose] = useState(false);
  const [tied, setTied] = useState(false);
  const [winnerData, setWinnerData] = useState(null);
  const [p1Score, setP1Score] = useState(() => {
    const stored = localStorage.getItem("p1Score");
    return stored ? Number(stored) : 0;
  });
  const [p2Score, setP2Score] = useState(() => {
    const stored = localStorage.getItem("p2Score");
    return stored ? Number(stored) : 0;
  });

  // Load from localStorage on mount
  useEffect(() => {
    const storedUserSelection = localStorage.getItem("userSelection");
    const storedModeSelection = localStorage.getItem("modeSelection");
    const storedCurrentTurnNumber = localStorage.getItem("currentTurnNumber");
    const storedCurrentUserTurn = localStorage.getItem("currentUserTurn");
    const storedInitialState = localStorage.getItem("initialState");
    const storedPlayerturn = localStorage.getItem("playerTurn");
    const storedWinnerFound = localStorage.getItem("winnerFound");
    const storedWinnerData = localStorage.getItem("winnerData");
    const storedLose = localStorage.getItem("lose");
    const storedTied = localStorage.getItem("tied");

    if (storedUserSelection) setUserSelection(storedUserSelection);
    if (storedModeSelection) setModeSelection(storedModeSelection);
    if (storedCurrentTurnNumber)
      setCurrentTurnNumber(Number(storedCurrentTurnNumber));
    if (storedCurrentUserTurn) setCurrentUserTurn(storedCurrentUserTurn);
    if (storedInitialState) setInitialState(storedInitialState);
    if (storedPlayerturn) setPlayerTurn(JSON.parse(storedPlayerturn));
    if (storedWinnerFound) setWinnerFound(JSON.parse(storedWinnerFound));
    if (storedWinnerData) setWinnerData(JSON.parse(storedWinnerData));
    if (storedLose) setLose(JSON.parse(storedLose));
    if (storedTied) setTied(JSON.parse(storedTied));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("userSelection", userSelection);
  }, [userSelection]);

  useEffect(() => {
    localStorage.setItem("modeSelection", modeSelection);
  }, [modeSelection]);

  useEffect(() => {
    localStorage.setItem("currentTurnNumber", currentTurnNumber);
  }, [currentTurnNumber]);

  useEffect(() => {
    localStorage.setItem("currentUserTurn", currentUserTurn);
  }, [currentUserTurn]);

  useEffect(() => {
    localStorage.setItem("initialState", initialState);
  }, [initialState]);

  useEffect(() => {
    if (playerTurn) {
      localStorage.setItem("playerTurn", JSON.stringify(playerTurn));
    }
  }, [playerTurn]);

  useEffect(() => {
    localStorage.setItem("winnerFound", JSON.stringify(winnerFound));
  }, [winnerFound]);

  useEffect(() => {
    if (winnerData) {
      localStorage.setItem("winnerData", JSON.stringify(winnerData));
    }
  }, [winnerData]);

  useEffect(() => {
    localStorage.setItem("p1Score", p1Score);
  }, [p1Score]);

  useEffect(() => {
    localStorage.setItem("p2Score", p2Score);
  }, [p2Score]);

  useEffect(() => {
    localStorage.setItem("lose", JSON.stringify(lose));
  }, [lose]);

  useEffect(() => {
    localStorage.setItem("tied", JSON.stringify(tied));
  }, [tied]);

  // Player turn auto-calc
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
    winnerFound,
    setWinnerFound,
    lose,
    setLose,
    tied,
    setTied,
    winnerData,
    setWinnerData,
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
    p1Score,
    setP1Score,
    p2Score,
    setP2Score,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useGameContext = () => useContext(GameContext);
