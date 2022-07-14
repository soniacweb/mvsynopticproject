import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Container } from "@mui/material";

import "./App.css";
import Navbar from "./components/Navbar.js";
import Register from "./components/Forms/Registration/Register";
import Login from "./components/Forms/Login/Login";
import FoodMenu from "./components/FoodMenu";
import DrinksMenu from "./components/DrinksMenu";

function App() {
  return (
    // <Container maxWidth="lg">
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/drinksmenu" element={<DrinksMenu />} />
      </Routes>
    </BrowserRouter>
    // </Container>
  );
}

export default App;
