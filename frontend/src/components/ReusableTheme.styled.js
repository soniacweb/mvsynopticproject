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
  color: white;
  text-align: center;
  padding: 1rem;
  margin: 4rem auto;
  font-size: 4rem;
  background-color: ${darkBlueBackground};
  white-space: nowrap;
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
  margin: 0 auto;
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
