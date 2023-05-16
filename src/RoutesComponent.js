import React from "react";
import Home from "./Components/Pages/Home";
import BoardGamesPage from "./Components/Pages/BoardGamesPage";
import GiftCardPage from "./Components/Pages/GiftCardPage";
import ContactPage from "./Components/Pages/ContactPage";
import { Route, Routes } from "react-router-dom";

const RoutesComponent = () => {

  console.log("RoutesComponent");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boardgames" element={<BoardGamesPage />} />
      <Route path="/giftcards" element={<GiftCardPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default RoutesComponent;
