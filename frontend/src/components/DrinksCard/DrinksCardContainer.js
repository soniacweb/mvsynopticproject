import React from "react";
// import { Grid } from "@mui/material";
import { DrinksContainer } from "./DrinksCard.styles";

const DrinksCard = ({ children }) => {
  return <DrinksContainer>{children}</DrinksContainer>;
};

export default DrinksCard;
