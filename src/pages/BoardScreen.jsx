import React from "react";
import BoardHeader from "../components/header/BoardHeader";
import Board from "../components/containers/Board";
import ScoreCard from "../components/cards/ScoreCard";

function BoardScreen() {
  return (
    <div className="BoardScreen flex flex-col items-center justify-center w-screen min-h-screen pt-6 pl-6 pr-6 pb-[127px] sm:pt-0 sm:pl-0 sm:pr-0 sm:pb-[0px] gap-16 sm:gap-8 relative">
      <BoardHeader />
      <div className="flex flex-col gap-6">
        <div className="">
          <Board />
        </div>
        <div className="flex justify-between w-full">
          <ScoreCard title="X (P2)" color="light-blue" />
          <ScoreCard title="TIES" color="silver" />
          <ScoreCard title="O (P1)" color="light-yellow" />
        </div>
      </div>
    </div>
  );
}

export default BoardScreen;
