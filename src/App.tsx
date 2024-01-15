//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Items from "./pages/Items";
import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<Pokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
