import React from "react";
import { Masonry } from "@mui/lab";
import { MenuContainer } from "./FoodCard.styles";

const FoodCard = ({ children }) => {
  return (
    <MenuContainer>
      <Masonry columns={4} spacing={2}>
        {children}
      </Masonry>
    </MenuContainer>
  );
};

export default FoodCard;
