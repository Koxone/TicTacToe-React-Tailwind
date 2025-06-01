import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import BoardScreen from "./pages/BoardScreen";
import Options from "./components/feedback/Options";
import RestartTied from "./components/feedback/RestartTied";

function App() {
  return (
    <>
      <div className="App flex flex-col items-center justify-center min-h-screen w-screen">
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/board" element={<BoardScreen />} />
          </Routes>
        </Router>
        {/* <HomeScreen /> */}
        {/* <Options text1="quit" text2="next round" color="yellow" title="oh no, you lost..." subtitle="takes the round" /> */}
        {/* <RestartTied text1="no, cancel" text2="yes, restart" color="yellow" title="restart game?" /> */}
        {/* <BoardScreen /> */}
      </div>
    </>
  );
}

export default App;
