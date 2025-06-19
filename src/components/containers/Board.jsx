import React, { useEffect, useState } from "react";
import BoardCard from "../cards/BoardCard";
import { useGameContext } from "../../context/GameContext";
import checkWinner from "../../utils/checkWinner";

function Board() {
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => ({ value: null, player: null }))
  );

  const {
    currentUserTurn,
    setCurrentUserTurn,
    playerTurn,
    setWinnerFound,
    setWinnerData,
    winnerFound,
    p1Score,
    p2Score,
    setP1Score,
    setP2Score,
  } = useGameContext();

  useEffect(() => {
    if (!winnerFound && board.some((cell) => cell.value !== null)) {
      setBoard(
        Array.from({ length: 9 }, () => ({ value: null, player: null }))
      );
    }
  }, [winnerFound]);

  const handleMove = (index) => {
    if (board[index].value !== null) return;

    const player = currentUserTurn === playerTurn.p1 ? "P1" : "P2";

    const updatedBoard = [...board];
    updatedBoard[index] = { value: currentUserTurn, player };

    setBoard(updatedBoard);
    setCurrentUserTurn(currentUserTurn === "O" ? "X" : "O");

    const result = checkWinner(updatedBoard);
    if (result) {
      setWinnerFound(true);
      setWinnerData(result);

      if (result.player === "P1") {
        setP1Score(p1Score + 1);
        localStorage.setItem("p1Score", p1Score + 1);
      } else {
        setP2Score(p2Score + 1);
        localStorage.setItem("p2Score", p2Score + 1);
      }
    }
  };

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
