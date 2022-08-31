import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Container } from "@mui/material";

import "./App.css";
import Navbar from "./components/Navbar.js";
import Table from "./components/Table";

import Register from "./components/Forms/Registration/Register";
import Login from "./components/Forms/Login/Login";
import FoodMenu from "./components/FoodMenu";
import DrinksMenu from "./components/DrinksMenu";
import Home from "./components/Home";
import YourOrder from "./components/YourOrder";
import FoodSingle from "./components/FoodSingle";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    // <Container maxWidth="lg">
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/mainmenu/:id" element={<FoodSingle />} />
        <Route path="/drinksmenu" element={<DrinksMenu />} />
        <Route path="/yourorder" element={<YourOrder />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    // </Container>
  );
}

export default App;
