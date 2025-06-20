import React, { useEffect } from "react";
import BoardCard from "../cards/BoardCard";
import { useGameContext } from "../../context/GameContext";
import { useVsCpuContext } from "../../context/VsCpuContext";
import { useVsPlayerContext } from "../../context/VsPlayerContext";

function Board() {
  // Game Context Values
  const { modeSelection, board } = useGameContext();

  const vsPlayer = useVsPlayerContext();
  const vsCpu = useVsCpuContext();

  const handleMove =
    modeSelection === "player" ? vsPlayer.handleMove : vsCpu.handleMoveCpu;

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
