import { createContext, useContext, useEffect } from "react";
import { useGameContext } from "./GameContext";
import checkWinner from "../utils/checkWinner";

export const VsCpuContext = createContext();

export default function VsCpuContextProvider({ children }) {
  const {
    board,
    setBoard,
    currentTurnNumber,
    setCurrentTurnNumber,
    currentUserTurn,
    setCurrentUserTurn,
    initialState,
    playerTurn,
    winnerFound,
    setWinnerFound,
    setWinnerData,
    updateScore,
  } = useGameContext();

  const handleMoveCpu = (index) => {
    if (board[index].value !== null || winnerFound) return;

    const updatedBoard = [...board];
    updatedBoard[index] = { value: currentUserTurn, player: "P1" };
    setBoard(updatedBoard);

    const result = checkWinner(updatedBoard);

    if (result) {
      setWinnerFound(true);
      setWinnerData(result);
      updateScore(result.player);
      return;
    }

    const cpuSymbol = playerTurn.p2;

    setTimeout(() => {
      const availableIndexes = updatedBoard
        .map((cell, i) => (cell.value === null ? i : null))
        .filter((i) => i !== null);

      const randomIndex =
        availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

      updatedBoard[randomIndex] = { value: cpuSymbol, player: "P2" };
      setBoard([...updatedBoard]);

      const cpuResult = checkWinner(updatedBoard);
      if (cpuResult) {
        setWinnerFound(true);
        setWinnerData(cpuResult);
        updateScore(cpuResult.player);
      } else {
        setCurrentUserTurn(playerTurn.p1);
      }
    }, 500);
  };

  useEffect(() => {
    if (
      playerTurn &&
      playerTurn.p1 === "X" &&
      playerTurn.p2 === "O" &&
      currentTurnNumber === 0 &&
      initialState === "O"
    ) {
      setTimeout(() => {
        const availableIndexes = board
          .map((cell, i) => (cell.value === null ? i : null))
          .filter((i) => i !== null);

        const randomIndex =
          availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

        const updatedBoard = [...board];
        updatedBoard[randomIndex] = { value: "O", player: "P2" };
        setBoard(updatedBoard);
        setCurrentUserTurn("X");
        setCurrentTurnNumber(1);
      }, 500);
    }
  }, [playerTurn, board, currentTurnNumber, initialState]);

  const value = {
    handleMoveCpu,
  };

  return (
    <VsCpuContext.Provider value={value}>{children}</VsCpuContext.Provider>
  );
}

export const useVsCpuContext = () => useContext(VsCpuContext);
