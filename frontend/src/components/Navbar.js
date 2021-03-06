import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // MemoryRouter,
  // Route,
  // Routes,
  Link,
  // matchPath,
  // useLocation,
} from "react-router-dom";
// import { StaticRouter } from "react-router-dom/server";

import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import { logout } from "../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin); // bringing in redux state from login page
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    console.log("hello from logout handler");
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Button color="inherit" to="/foodmenu" component={Link}>
            Food Menu
          </Button>

          <Button color="inherit" to="/drinksmenu" component={Link}>
            Drinks Menu
          </Button>

          {userInfo ? null : (
            <>
              <Button color="inherit" to="/register" component={Link}>
                Register
              </Button>{" "}
              <Button color="inherit" to="/login" component={Link}>
                Login
              </Button>
            </>
          )}

          <Button color="inherit" onClick={logoutHandler}>
            Logout
          </Button>

          {/* <Button color="inherit" to="/login" component={Link}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
