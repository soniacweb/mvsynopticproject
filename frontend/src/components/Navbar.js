import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  LinkedButtons,
  LinkedTypography,
  ImgLogo,
} from "./ReusableTheme.styled";
import { logout } from "../actions/userActions";
// const Navbar = () => {

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" style={{ background: "#011627" }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* {userInfo.name !== undefined && <Box>{`Hey, ${userInfo.name}!`}</Box>} */}
//           {userInfo ? (
//             <>
//               <Button color="inherit" onClick={logoutHandler}>
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" to="/register" component={Link}>
//                 Register
//               </Button>{" "}
//               <Button color="inherit" to="/login" component={Link}>
//                 Login
//               </Button>
//             </>
//           )}

//           <Button color="inherit" to="/foodmenu" component={Link}>
//             Food Menu
//           </Button>

//           <Button color="inherit" to="/drinksmenu" component={Link}>
//             Drinks Menu
//           </Button>
//           <Box sx={{ flexGrow: 1, justifyContent: "end", textAlign: "right" }}>
//             <Button color="inherit" to="/yourorder" component={Link}>
//               Your Order
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navbar;

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin); // bringing in redux state from login page
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    console.log("hello from logout handler");
    dispatch(logout());
    navigate("/", { replace: true }); // redirecting to home
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ background: "#ff9f1c" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Dropdown mobile  */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {userInfo ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <LinkedTypography textAlign="center" onClick={logoutHandler}>
                    Logout
                  </LinkedTypography>
                </MenuItem>
              ) : (
                <>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <LinkedTypography
                      color="inherit"
                      textAlign="center"
                      to="/register"
                      component={Link}
                    >
                      Register
                    </LinkedTypography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <LinkedTypography
                      color="inherit"
                      textAlign="center"
                      to="/login"
                      component={Link}
                    >
                      Login
                    </LinkedTypography>
                  </MenuItem>
                </>
              )}

              <MenuItem onClick={handleCloseNavMenu}>
                <LinkedTypography
                  textAlign="center"
                  to="/foodmenu"
                  component={Link}
                >
                  Food Menu
                </LinkedTypography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <LinkedTypography
                  textAlign="center"
                  to="/drinksmenu"
                  component={Link}
                >
                  Drinks Menu
                </LinkedTypography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography to="/" component={Link}>
            <ImgLogo src={"https://i.imgur.com/SxgcaNr.png"} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {userInfo ? (
              <LinkedButtons
                textAlign="center"
                onClick={logoutHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Logout
              </LinkedButtons>
            ) : (
              <>
                <LinkedButtons
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={handleCloseNavMenu}
                  textAlign="center"
                  to="/register"
                  component={Link}
                >
                  Register
                </LinkedButtons>
                <LinkedButtons
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={handleCloseNavMenu}
                  textAlign="center"
                  to="/login"
                  component={Link}
                >
                  Login
                </LinkedButtons>
              </>
            )}
            <>
              <LinkedButtons
                onClick={handleCloseNavMenu}
                textAlign="center"
                to="/foodmenu"
                component={Link}
              >
                Food Menu
              </LinkedButtons>
              <LinkedButtons
                onClick={handleCloseNavMenu}
                textAlign="center"
                to="/drinksmenu"
                component={Link}
              >
                Drinks Menu
              </LinkedButtons>
            </>
          </Box>
          <LinkedButtons to="/yourorder" component={Link} sx={{ flexGrow: 0 }}>
            Your Order
          </LinkedButtons>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
