import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import BoardScreen from "./pages/BoardScreen";

function App() {
  return (
    <>
      <div className="App  flex flex-col items-center justify-center min-h-screen w-screen">
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/board" element={<BoardScreen />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
