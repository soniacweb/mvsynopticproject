import React from "react";
import ModalItem from "../Modal";
import { Box, ImageList } from "@mui/material";

const FilterComp = ({ data }) => {
  return (
    <Box>
      <h1>Main Menu</h1>
      <ImageList
        maxWidth="lg"
        variant="masonry"
        cols={4}
        gap={10}
        sx={{ width: 1600, height: "100%", overflowY: "scroll" }}
      >
        {data &&
          data.map((item, i) => {
            return <ModalItem item={item} />;
          })}
      </ImageList>
    </Box>
  );
};

export default FilterComp;
