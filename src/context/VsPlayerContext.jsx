import { createContext, useContext } from "react";
import { useGameContext } from "./GameContext";
import checkWinner from "../utils/checkWinner";
export const VsPlayerContext = createContext();

export default function VsPlayerProvider({ children }) {
  const {
    currentUserTurn,
    setCurrentUserTurn,
    playerTurn,
    setWinnerFound,
    setWinnerData,
    updateScore,
    board,
    setBoard,
  } = useGameContext();

  // Handle a move on the board
  const handleMove = (index) => {
    if (board[index].value !== null) return;

    const player = currentUserTurn === playerTurn.p1 ? "P1" : "P2";

    const updatedBoard = [...board];
    updatedBoard[index] = { value: currentUserTurn, player: player };

    setBoard(updatedBoard);
    setCurrentUserTurn(currentUserTurn === "O" ? "X" : "O");

    const result = checkWinner(updatedBoard);
    if (result) {
      setWinnerFound(true);
      setWinnerData(result);
      updateScore(result.player);
    }
  };

  const value = {
    board,
    setBoard,
    handleMove,
  };

  return (
    <VsPlayerContext.Provider value={value}>
      {children}
    </VsPlayerContext.Provider>
  );
}

export const useVsPlayerContext = () => useContext(VsPlayerContext);
