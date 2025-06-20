import React, { useEffect } from "react";
import BoardCard from "../cards/BoardCard";
import { useGameContext } from "../../context/GameContext";
import { useVsCpuContext } from "../../context/VsCpuContext";
import { useVsPlayerContext } from "../../context/VsPlayerContext";

function Board() {
  // Game Context Values
  const { winnerFound, modeSelection, board, setBoard } = useGameContext();

  const vsPlayer = useVsPlayerContext();
  const vsCpu = useVsCpuContext();

  const handleMove =
    modeSelection === "player" ? vsPlayer.handleMove : vsCpu.handleMoveCpu;

  // Reset the board when a winner has been found and the board is not empty
  useEffect(() => {
    if (!winnerFound && board.some((cell) => cell.value !== null)) {
      setBoard(
        Array.from({ length: 9 }, () => ({ value: null, player: null }))
      );
    }
  }, [winnerFound]);

  return (
    <div className="w-[328px] h-[328px] sm:w-[460px] sm:h-[461px] flex flex-wrap gap-4 items-center justify-center">
      {board.map((value, index) => (
        <BoardCard
          key={index}
          value={value.value}
          onClick={() => handleMove(index)}
        />
      ))}
    </div>
  );
}

export default Board;
