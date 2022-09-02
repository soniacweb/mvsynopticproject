import React from "react";
import ModalItem from "../Modal";
import { Box, ImageList } from "@mui/material";
import { MenuContainer } from "../ReusableTheme.styled";

const FilterComp = ({ data }) => {
  return (
    <MenuContainer>
      <Box>
        <h1>Main Menu</h1>
        <ImageList
          variant="woven"
          // cols={{ xs: 1, sm: 1, md: 2, lg: 3 }}
          gap={7}
          cols={3}
        >
          {data &&
            data.map((item, i) => {
              return <ModalItem item={item} />;
            })}
        </ImageList>
      </Box>
    </MenuContainer>
  );
};

export default FilterComp;
