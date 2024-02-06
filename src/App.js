import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import CreateFamily from "./components/create-family";
import Family from "./components/family";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/create" element={<CreateFamily />} />
        <Route path="/family" element={<Family />} />
      </Routes>
    </div>
  );
};

export default App;
