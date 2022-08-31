import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";

import { ImageListContainer } from "../ReusableTheme.styled";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <Container maxWidth="lg">
      <ImageListContainer
        my={{ xs: 5, sm: 10 }}
        // sx={{ width: 1200, height: 650 }}
        variant="quilted"
        cols={6}
        rowHeight={181}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageListContainer>
    </Container>
  );
}

const itemData = [
  {
    img: "https://i.imgur.com/wPHtMn8.jpg",
    title: "Pizza",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.imgur.com/xIRB1ER.jpg",
    title: "Meat Balls",
  },
  {
    img: "https://i.imgur.com/94Ymwvf.jpg",
    title: "Coffee",
  },
  {
    img: "https://i.imgur.com/jk5vvnp.jpg",
    title: "Pancakes",
    cols: 2,
  },
  {
    img: "https://i.imgur.com/xsToX4Y.jpg",
    title: "Dessert",
    cols: 2,
  },
  {
    img: "https://i.imgur.com/I0PMIEw.jpg",
    title: "Oreo Milkshake",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.imgur.com/BP7P3b5.jpg",
    title: "Milkshake",
  },
  {
    img: "https://i.imgur.com/NZbYr75.jpg",
    title: "Table Order",
  },
  {
    img: "https://i.imgur.com/KZz1LZO.jpg",
    title: "Waffles",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.imgur.com/8vLM0WR.jpg",
    title: "Ingredients",
  },
  {
    img: "https://i.imgur.com/NJTAw7r.jpg",
    title: "Donuts",
  },
  {
    img: "https://i.imgur.com/sL1EkeA.jpg",
    title: "French Toast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.imgur.com/aKpEO8q.jpg",
    title: "Coffee Making",
  },
  {
    img: "https://i.imgur.com/1Opnafv.jpg",
    title: "Toffee Dessert",
  },
  {
    img: "https://i.imgur.com/vhL1pMV.jpg",
    title: "Customers",
    cols: 2,
  },
];
