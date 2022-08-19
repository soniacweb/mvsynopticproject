import {
  DRINKSMENU_LIST_REQUEST,
  DRINKSMENU_LIST_SUCCESS,
  DRINKSMENU_LIST_FAIL,
  DRINKSMENU_DETAILS_REQUEST,
  DRINKSMENU_DETAILS_SUCCESS,
  DRINKSMENU_DETAILS_FAIL,
} from "../constants/drinksMenuConstants";

import axios from "axios";

export const listDrinksMenu = () => async (dispatch) => {
  try {
    dispatch({ type: DRINKSMENU_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:8080/api/drinksmenu");
    // console.log(data);
    dispatch({
      type: DRINKSMENU_LIST_SUCCESS,
      payload: data,
    });
  } catch (er) {
    dispatch({
      type: DRINKSMENU_LIST_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};

export const listDrinksDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DRINKSMENU_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:8080/api/drinksmenu/${id}`
    );
    dispatch({
      type: DRINKSMENU_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (er) {
    dispatch({
      type: DRINKSMENU_DETAILS_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};
