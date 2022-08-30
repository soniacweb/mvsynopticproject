import {
  FOODMENU_LIST_REQUEST,
  FOODMENU_LIST_SUCCESS,
  FOODMENU_LIST_FAIL,
  FOODMENU_DETAILS_REQUEST,
  FOODMENU_DETAILS_SUCCESS,
  FOODMENU_DETAILS_FAIL,
} from "../constants/foodMenuConstants";

import axios from "axios";

export const listFoodMenu = () => async (dispatch) => {
  try {
    dispatch({ type: FOODMENU_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:8080/api/mainmenu");
    // console.log(data);
    dispatch({
      type: FOODMENU_LIST_SUCCESS,
      payload: data,
    });
  } catch (er) {
    dispatch({
      type: FOODMENU_LIST_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};

export const listFoodDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: FOODMENU_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:8080/api/mainmenu/${id}`
    );
    dispatch({
      type: FOODMENU_DETAILS_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (er) {
    dispatch({
      type: FOODMENU_DETAILS_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};
