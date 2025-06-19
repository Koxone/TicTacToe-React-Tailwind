import { useGameContext } from "../../context/GameContext";

function Slider() {
  const { userSelection, setUserSelection, initialState } = useGameContext();

  const selected = userSelection || initialState;

  const handleClick = (value) => {
    setUserSelection(value);
    // localStorage.setItem("userSelection", value);
  };

  return (
    <div className="flex w-full relative">
      <div className="flex justify-between items-center w-full">
        <button onClick={() => handleClick("X")} id="X" className="z-10">
          <img
            className="w-8 h-8 cursor-pointer"
            src={`/src/assets/icon-x-${
              selected === "X" ? "solid-dark" : "solid"
            }-grey.svg`}
            alt="icon X"
          />
        </button>

        <button onClick={() => handleClick("O")} id="O" className="z-10">
          <img
            className="w-8 h-8 cursor-pointer"
            src={`/src/assets/icon-o-${
              selected === "O" ? "solid-dark" : "solid"
            }-grey.svg`}
            alt="icon O"
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
