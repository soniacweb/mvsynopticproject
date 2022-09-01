import {
  TABLES_LIST_REQUEST,
  TABLES_LIST_SUCCESS,
  TABLES_LIST_FAIL,
} from "../constants/tableConstants";

// getting tables
export const tableReducer = (state = { tables: [] }, action) => {
  switch (action.type) {
    case TABLES_LIST_REQUEST:
      return { loading: true, tables: [] };
    case TABLES_LIST_SUCCESS:
      return { loading: false, tables: action.payload };
    case TABLES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
