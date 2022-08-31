import React, { useState } from "react";
import FormContainer from "./Forms/FormContainer";
import {
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
  Typography,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { createOrderAfterTableSelection } from "../actions/orderActions";
import { useNavigate } from "react-router-dom";
import HeroImage from "./LazyHero/HeroImage";
import { TableContainer } from "./ReusableTheme.styled";

const Table = () => {
  const [seatNumber, setSeatNumber] = useState(2);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.userLogin.userInfo._id);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createOrderAfterTableSelection(userId, seatNumber));
    // redirect to menu
    navigate("/foodmenu", { replace: true }); // redirecting to home
  };

  return (
    <>
      <HeroImage
        src={
          "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2958&q=80"
        }
        heading={"Seats?"}
      />
      <TableContainer>
        <FormContainer>
          <Typography>Hey there! How many seats do you need?</Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Seats
              </InputLabel>
              <NativeSelect
                // defaultValue={30}
                inputProps={{
                  name: "Let us know!",
                  id: "uncontrolled-native",
                }}
                onChange={(e) => setSeatNumber(e.target.value)}
              >
                {[2, 3, 4, 5, 6, 7].map((option) => {
                  return (
                    <option value={option}>
                      {option < 7 ? option : `${option}+`}
                    </option>
                  );
                })}
              </NativeSelect>
            </FormControl>
          </Box>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={submitHandler}
          >
            Next
          </Button>
        </FormContainer>
      </TableContainer>
    </>
  );
};

export default Table;
