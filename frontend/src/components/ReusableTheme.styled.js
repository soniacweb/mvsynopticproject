import {
  Box,
  Typography,
  ImageList,
  Button,
  Container,
  styled,
  Card,
  TextField,
  Alert,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
// import { createGlobalStyle } from "styled-components";

const theme = createTheme();

//fonts
const orangeFont = "#ff9f1c";
const whiteFont = "#fdfffc";

// backgrounds
const blueBackground = "#2ec4b6";
const darkBlueBackground = "#011627";
const whiteBackground = "#fdfffc";

// export const DynamicContainer = createGlobalStyle`
//   body {
//     background-color: ${(props) =>
//       props.darkBlueBackground
//         ? `${darkBlueBackground}`
//         : `${whiteBackground}`};
//   }
// `;

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

export const FooterStyle = styled("footer")`
  position: bottom;
  width: 100%;
  /* bottom: 0;
  left: 0; */
  background-color: ${orangeFont};
  color: ${whiteFont};

  /* ${({ theme }) => theme.breakpoints.down("md")} {
    height: 100px;
  } */
`;

// Table

export const TableContainer = styled(Box)`
  display: flex;
`;

// Contact Form

export const YellowButton = styled(Button)`
  background-color: ${orangeFont};
`;

export const BlueContainer = styled(Container)`
  /* background-color: ${darkBlueBackground}; */
  /* color: ${whiteFont}; */
`;

export const BlueCard = styled(Card)`
  /* background-color: ${darkBlueBackground}; */
`;

export const WhiteTextField = styled(TextField)`
  /* background-color: ${whiteFont}; */
`;

export const ContactUsTitle = styled(Typography)`
  /* color: ${whiteFont}; */
  font-weight: 500;
`;

export const ContactUsSubtitle = styled(Typography)`
  /* color: ${whiteFont}; */
  font-weight: 500;
`;

// Alert

export const AlertStyled = styled(Alert)`
  margin-bottom: 10px;
`;

// Category Buttons

export const CatButtonStyled = styled(Button)`
  background-color: ${blueBackground};
  border-radius: 0%;
  text-decoration: none;
  color: white;
  font-weight: 400;
`;

// menu container

export const MenuContainer = styled(Box)`
  padding: 20px;
  /* display: flex; */
`;
