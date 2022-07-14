import React from "react";
import { Typography } from "@mui/material";

const FilterComp = ({ data, type }) => {
  return (
    <>
      <Typography>{type}</Typography>
      {data
        .filter((dish) => dish.type === type)
        .map((item) => {
          return (
            <>
              <img
                key={item.dishName}
                src={item.image}
                srcSet={item.image}
                alt={item.dishName}
                loading="lazy"
                style={{
                  display: "block",
                  //   width: "%",
                }}
              />
              <Typography>{item.dishName}</Typography>
            </>
          );
        })}
    </>
  );
};

export default FilterComp;
