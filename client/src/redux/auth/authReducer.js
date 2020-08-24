import { UserActionTypes } from "./auth.types";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default userReducer;
