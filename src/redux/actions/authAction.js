import auth from "firebase/auth";
import actions from "./actions";
import firebase from "../../utils/auth.firebase";

export const loginUser = (email, password) => async (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      dispatch(actions(LOGIN_SUCCESS, user));
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(actions(LOGIN_FAILURE, errorCode + errorMessage));
    });
};

export const RegisterUser = (email, password) => async (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      dispatch(actions(REGISTER_SUCCESS, user));
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(actions(REGISTER_FAILURE, errorMessage));
    });
};

export const UserStateChange = () => async (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      dispatch(actions(USER_HAS_LOGINED_IN_SUCCESS, user));
    } else {
      dispatch(actions(USER_HAS_LOGINED_OUT_SUCCESS));
    }
  });
};
