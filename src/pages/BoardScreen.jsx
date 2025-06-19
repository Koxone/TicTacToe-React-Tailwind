import BoardHeader from "../components/header/BoardHeader";
import Board from "../components/containers/Board";
import ScoreCard from "../components/cards/ScoreCard";
import { useGameContext } from "../context/GameContext";
import RestartTied from "../components/feedback/RestartTied";
import Options from "../components/feedback/Options";

function BoardScreen() {
  const { userSelection, playerTurn } = useGameContext();

  if (!playerTurn) return null;

  const mode = userSelection === "O" ? "P1" : "P2";

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
          />
          <ScoreCard title="TIES" color="silver" />
          <ScoreCard
            title={`O (${playerTurn.p1 === "O" ? "P1" : "P2"})`}
            color="light-yellow"
          />
        </div>
      </div>
    </div>
  );
}

export default BoardScreen;
