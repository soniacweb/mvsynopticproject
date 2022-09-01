import {
  TABLES_LIST_REQUEST,
  TABLES_LIST_SUCCESS,
  TABLES_LIST_FAIL,
} from "../constants/tableConstants";
import axios from "axios";

export const fetchAllTables = () => async (dispatch) => {
  try {
    dispatch({ type: TABLES_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:8080/api/tables");
    console.log(data);
    dispatch({
      type: TABLES_LIST_SUCCESS,
      payload: data,
    });
  } catch (er) {
    dispatch({
      type: TABLES_LIST_FAIL,
      payload:
        er.response && er.response.data.message
          ? er.response.data.message
          : er.message,
    });
  }
};
