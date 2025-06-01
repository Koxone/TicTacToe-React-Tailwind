import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../components/logos/MainLogo";
import MainButton from "../components/buttons/MainButton";
import PlayerSelectionCard from "../components/cards/PlayerSelectionCard";

function HomeScreen() {
  const [userSelection, setUserSelection] = useState("O");
  const navigate = useNavigate();
  const goToBoard = () => {
    navigate("/board", {
      state: { userSelection },
    });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen max-w-[327px] max-h-[429px] sm:max-w-[460px] sm:max-h-[471px] gap-8">
      <MainLogo />
      <PlayerSelectionCard userSelection={userSelection} setUserSelection={setUserSelection} />
      <div className="flex flex-col gap-4 w-full">
        <MainButton color="yellow" shadow="yellow" text="NEW GAME (VS CPU)" hover="yellow" onClick={goToBoard} />
        <MainButton color="blue" shadow="blue" text="NEW GAME (VS PLAYER)" hover="blue" onClick={goToBoard} />
      </div>
    </div>
  );
}

export default HomeScreen;
