import { UserActionTypes } from "./auth.types";
import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: UserActionTypes.FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/payment", token);

  dispatch({ type: UserActionTypes.FETCH_USER, payload: res.data });
};
