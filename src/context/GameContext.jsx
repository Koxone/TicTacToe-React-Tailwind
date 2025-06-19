import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
export const GameContext = createContext();

// Componente proveedor
export default function GameProvider({ children }) {
  const [userSelection, setUserSelection] = useState("O");
  const [modeSelection, setModeSelection] = useState(null);
  const [currentTurnNumber, setCurrentTurnNumber] = useState(null);
  const [currentUserTurn, setCurrentUserTurn] = useState("O");
  const [initialState, setInitialState] = useState("O");

  useEffect(() => {
    const storedUserSelection = localStorage.getItem("userSelection");
    const storedModeSelection = localStorage.getItem("modeSelection");
    const storedCurrentTurnNumber = localStorage.getItem("currentTurnNumber");
    const storedCurrentUserTurn = localStorage.getItem("currentUserTurn");
    const storedInitialState = localStorage.getItem("initialState");

    if (storedUserSelection) setUserSelection(storedUserSelection);
    if (storedModeSelection) setModeSelection(storedModeSelection);
    if (storedCurrentTurnNumber) setCurrentTurnNumber(storedCurrentTurnNumber);
    if (storedCurrentUserTurn) setCurrentUserTurn(storedCurrentUserTurn);
    if (storedInitialState) setInitialState(storedInitialState);
  }, []);

  const value = {
    userSelection,
    setUserSelection,
    modeSelection,
    setModeSelection,
    currentTurnNumber,
    setCurrentTurnNumber,
    currentUserTurn,
    setCurrentUserTurn,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

// Hook personalizado para consumir el contexto
export const useGameContext = () => useContext(GameContext);
