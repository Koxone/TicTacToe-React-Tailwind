import { createContext, useContext, useState, useEffect } from "react";

export const GameContext = createContext();

export default function GameProvider({ children }) {
  const [userSelection, setUserSelection] = useState("O");
  const [modeSelection, setModeSelection] = useState(null);
  const [currentTurnNumber, setCurrentTurnNumber] = useState(null);
  const [playerTurn, setPlayerTurn] = useState(null);
  const [currentUserTurn, setCurrentUserTurn] = useState("O");
  const [initialState, setInitialState] = useState("O");

  useEffect(() => {
    const storedUserSelection = localStorage.getItem("userSelection");
    const storedModeSelection = localStorage.getItem("modeSelection");
    const storedCurrentTurnNumber = localStorage.getItem("currentTurnNumber");
    const storedCurrentUserTurn = localStorage.getItem("currentUserTurn");
    const storedInitialState = localStorage.getItem("initialState");
    const storedPlayerturn = localStorage.getItem("playerTurn");

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
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useGameContext = () => useContext(GameContext);
