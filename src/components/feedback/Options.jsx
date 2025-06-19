import CancelButton from "../buttons/CancelButton";
import AcceptButton from "../buttons/AcceptButton";
import { useGameContext } from "../../context/GameContext";
import { useEffect } from "react";
import confetti from "canvas-confetti";

function Options() {
  const { winnerFound, winnerData, lose } = useGameContext();

  useEffect(() => {
    if (winnerFound) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#00eaff", "#fffb00", "#ffffff"],
      });
    }
  }, [winnerFound]);

  const handleContent = () => {
    if (winnerFound) {
      const playerNumber = winnerData?.player?.substring(1);
      return {
        title: `player ${playerNumber} WINS!`,
        text1: "QUIT",
        text2: "NEXT ROUND",
      };
    }
  };

  const content = handleContent();

  if (!winnerFound && !lose) return null;
  return (
    <div
      className="Options absolute flex flex-col items-center justify-center 
    bg-black/50 w-screen min-h-screen z-40 gap-6"
    >
      <div className="flex flex-col items-center justify-center gap-6 bg-semi-dark-navy w-full h-[228px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-sm sm:text-[16px] text-silver font-bold uppercase">
            {content.title}
          </h2>
          <div className="flex items-center gap-2">
            <img
              className="w-[30px]"
              src={`/assets/icon-${winnerData?.symbol}.svg`}
              alt=""
            />
            <strong
              className={`font-bold text-2xl sm:text-[40px] text-light-${
                winnerData?.symbol === "X" ? "blue" : "yellow"
              } uppercase`}
            >
              {` ${winnerData?.player} takes the round`}
            </strong>
          </div>
        </div>

        <div className="flex gap-4">
          <CancelButton text={content.text1} />
          <AcceptButton text={content.text2} />
        </div>
      </div>
    </div>
  );
}

export default Options;
