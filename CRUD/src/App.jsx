import React from "react";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/create.jsx";
import Update from "./components/Update.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
