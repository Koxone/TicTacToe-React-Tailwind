import React, { useState } from "react";
import BoardCard from "../cards/BoardCard";
import { useGameContext } from "../../context/GameContext";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const { currentUserTurn, setCurrentUserTurn } = useGameContext();

  const handleMove = (index) => {
    if (board[index] !== null) return;

    const updatedBoard = [...board];
    updatedBoard[index] = currentUserTurn;
    setBoard(updatedBoard);

    setCurrentUserTurn(currentUserTurn === "O" ? "X" : "O");
  };

  return (
    <div className="w-[328px] h-[328px] sm:w-[460px] sm:h-[461px] flex flex-wrap gap-4 items-center justify-center">
      {board.map((value, index) => (
        <BoardCard
          key={index}
          value={value}
          onClick={() => handleMove(index)}
        />
      ))}
    </div>
  );
}

export default Board;
