import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GameProvider from "./context/GameContext.jsx";
import VsPlayerProvider from "./context/VsPlayerContext.jsx";
import VsCpuContextProvider from "./context/VsCpuContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <VsPlayerProvider>
        <VsCpuContextProvider>
          <App />
        </VsCpuContextProvider>
      </VsPlayerProvider>
    </GameProvider>
  </StrictMode>
);
