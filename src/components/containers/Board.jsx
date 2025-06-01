import React, { useState } from "react";
import BoardCard from "../cards/BoardCard";

function Board({ currentTurn, onMove }) {
  return (
    <div className="w-[328px] h-[328px] sm:w-[460px] sm:h-[461px] flex flex-wrap gap-4 items-center justify-center">
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
      <BoardCard icon={currentTurn.toLowerCase()} onMove={onMove} />
    </div>
  );
}

export default Board;
