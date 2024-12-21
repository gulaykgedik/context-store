import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sepet" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
