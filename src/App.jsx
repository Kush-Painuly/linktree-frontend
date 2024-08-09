import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/components/Login";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
