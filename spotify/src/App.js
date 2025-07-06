import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import Navbar from "./components/Navbar";
import Player from "./components/Player";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white pb-24">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
        <Player />
      </div>
    </Router>
  );
};

export default App;