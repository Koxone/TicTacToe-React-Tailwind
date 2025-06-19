import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../components/logos/MainLogo";
import MainButton from "../components/buttons/MainButton";
import PlayerSelectionCard from "../components/cards/PlayerSelectionCard";
import { useGameContext } from "../context/GameContext";

function HomeScreen() {
  const { userSelection } = useGameContext();
  const { modeSelection, setModeSelection } = useGameContext();

  const navigate = useNavigate();

  const handleStartGame = (mode) => {
    setModeSelection(mode);
    localStorage.setItem("modeSelection", mode);
    console.log("Mode Selected:", mode);
    console.log("Not Selected User:", userSelection);
    navigate("/board");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen max-w-[327px] max-h-[429px] sm:max-w-[460px] sm:max-h-[471px] gap-8">
      <MainLogo />
      <PlayerSelectionCard />
      <div className="flex flex-col gap-4 w-full">
        <MainButton
          color="yellow"
          shadow="yellow"
          text="NEW GAME (VS CPU)"
          hover="yellow"
          onClick={() => handleStartGame("cpu")}
        />
        <MainButton
          color="blue"
          shadow="blue"
          text="NEW GAME (VS PLAYER)"
          hover="blue"
          onClick={() => handleStartGame("player")}
        />
      </div>
    </div>
  );
}

export default HomeScreen;
