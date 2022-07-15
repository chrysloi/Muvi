import { auth } from "../../utils/auth.firebase";
import {
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "..";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Initial = () => async (dispatch) => {
  // dispatch({ type: USER_LOGIN });
  const token = await AsyncStorage.getItem("userToken");
  console.log(token);
  if (token !== null) {
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: token,
    });
  }
  // AsyncStorage.getItem("userToken")
  //   .then((token) => {
  //     if (token) {
  //       dispatch({
  //         type: USER_LOGIN_SUCCESS,
  //         payload: token,
  //       });
  //     } else {
  //       dispatch({
  //         type: USER_LOGIN_FAILED,
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     dispatch({
  //       type: USER_LOGIN_FAILED,
  //     });
  //   });
};

export const AuthLogin = (uid) => async (dispatch) => {
  const token = uid;
  // console.log(token);
  await AsyncStorage.setItem("userToken", token);
  dispatch({
    type: USER_LOGIN_SUCCESS,
    // payload: token,
  });
};

export const AuthLogout = () => async (dispatch) => {
  await AsyncStorage.removeItem("userToken");
  dispatch({
    type: USER_LOGOUT_SUCCESS,
  });
};

// export const RegisterUser = (email, password) => async (dispatch) => {
//   auth
//     .signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       var user = userCredential.user;
//       dispatch({
//         type: "REGISTER_SUCCESS",
//         // payload: user,
//       });
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       dispatch({
//         type: "REGISTER_FAILURE",
//         payload: errorMessage,
//       });
//     });
// };

// export const UserStateChange = () => async (dispatch) => {
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       const { uid } = user;
//       dispatch({
//         type: USER_LOGIN_SUCCESS,
//         // payload: uid,
//       });
//     } else {
//       dispatch({ type: USER_LOGOUT_SUCCESS });
//     }
//   });
// };
