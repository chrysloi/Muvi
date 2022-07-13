import {
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "..";

const initialState = {
  authToken: null,
  // login: false,
  // failed: false,
  // logged_in: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case USER_LOGIN:
    //   return {
    //     ...state,
    //     user_data: payload,
    //     login: true,
    //     failed: false,
    //   };

    // case USER_LOGIN_FAILED:
    //   return {
    //     ...state,
    //     user_data: payload,
    //     login: false,
    //     failed: true,
    //   };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        // logged_in: true,
        authToken: payload,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        // logged_in: false,
        authToken: null,
      };

    default:
      return state;
  }
};
