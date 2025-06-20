import BoardHeader from "../components/header/BoardHeader";
import Board from "../components/containers/Board";
import ScoreCard from "../components/cards/ScoreCard";
import { useGameContext } from "../context/GameContext";
import RestartTied from "../components/feedback/RestartTied";
import Options from "../components/feedback/Options";

function BoardScreen() {
  const { playerTurn, p1Score, p2Score, tiesScore } = useGameContext();

  if (!playerTurn) return null;

  return (
    <div
      className="BoardScreen flex flex-col items-center justify-center w-screen min-h-screen pt-6 pl-6 pr-6 pb-[127px]
      sm:pt-0 sm:pl-0 sm:pr-0 sm:pb-[0px] gap-16 sm:gap-8 relative"
    >
      <RestartTied />
      <Options />
      <BoardHeader />
      <div className="flex flex-col gap-6">
        <Board />
        <div className="flex justify-between w-full">
          <ScoreCard
            title={`X (${playerTurn.p1 === "X" ? "P1" : "P2"})`}
            color="light-blue"
            score={playerTurn.p1 === "X" ? p1Score : p2Score}
          />

          <ScoreCard title="TIES" color="silver" score={0} />
          <ScoreCard
            title={`O (${playerTurn.p1 === "O" ? "P1" : "P2"})`}
            color="light-yellow"
            score={playerTurn.p1 === "O" ? p1Score : p2Score}
          />
        </div>
      </div>
    </div>
  );
}

export default BoardScreen;
