import React, { useState, useEffect } from "react";
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
import { fetchAllTables } from "../actions/tablesActions";

const Table = () => {
  const [tableId, setTableId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.userLogin.userInfo._id);
  const [tablesList, setTablesList] = useState([]);

  const tableList = useSelector((state) => state.tables);
  const { loading, error, tables } = tableList;

  useEffect(() => {
    dispatch(fetchAllTables());
  }, [dispatch]);

  useEffect(() => {
    setTablesList(tables);
  }, [tables]);

  console.log("tables list", tablesList);
  console.log("tableId", tableId);

  // console.log("tables list id", tablesList[0]._id);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createOrderAfterTableSelection(userId, tableId));
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
          <Typography>
            Hey there! How many seats do you need? Select our funky tables from
            the options below!
          </Typography>
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
                onChange={(e) => setTableId(e.target.value)}
              >
                {tablesList.map((option) => {
                  return (
                    <option value={option._id}>
                      {option.spaces < 7
                        ? `${option.name} - ${option.spaces}`
                        : `${option.name} - ${option.spaces}+`}
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
