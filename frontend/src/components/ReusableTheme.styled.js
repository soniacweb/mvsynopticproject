import { Box, Typography, ImageList, Button, styled } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

//fonts
const orangeFont = "#ff9f1c";
const whiteFont = "#fdfffc";

// backgrounds
const blueBackground = "#2ec4b6";
const darkBlueBackground = "#011627";

export const TextContainer = styled(Box)`
  width: 80%;
  margin: 4rem auto;
  font-size: 4rem;
  background-color: ${darkBlueBackground};
  white-space: nowrap;
`;

export const Text = styled(Typography)`
  font-size: 3rem;
  text-align: center;
  padding: 1rem;
  color: white;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 1rem;
  }
`;

export const OrangeSpan = styled(Box)`
  color: ${orangeFont};
  font-weight: 700;
`;

export const Heading = styled(Typography)`
  color: ${whiteFont};
  background-color: ${blueBackground};
  /* font-size: 5rem; */
  transform: rotate(345deg);
  margin-bottom: 323px;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 3rem;
`;

export const ImageListContainer = styled(ImageList)`
  margin: 20px auto;
`;

// Navbar

export const LinkedButtons = styled(Button)`
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  font-size: 20px;
`;

export const LinkedTypography = styled(Typography)`
  font-weight: 700;
  font-size: 20px;
`;

export const ImgLogo = styled("img")`
  width: 80px;
  margin: 5px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

// Table

export const TableContainer = styled(Box)`
  display: flex;
`;
