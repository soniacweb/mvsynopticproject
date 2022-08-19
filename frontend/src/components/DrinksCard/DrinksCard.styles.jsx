import { CardMedia, Grid, IconButton, Card, styled } from "@mui/material";

export const DrinksContainer = styled(Grid)`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;
export const CardImage = styled(CardMedia)`
  width: 50px;
  height: 50px;
`;

export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const DrinksCard = styled(Card)`
  /* display: flex;
  justify-content: space-around; */
  margin: 20px;
  height: 750px;
  width: 350px;
  /* border: 1px solid black; */
  border-radius: 0%;
`;
