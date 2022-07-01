// import { connect } from "../../utils/auth.firebase";
// const auth = connect.auth();
// const firestore = connect.firestore();
// export const authCreateUser = (data) => (dispatch) => {
//   try {
//     const { email, password, number, birthdate, gender } = data;
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         // ...
//         firestore
//           .collection("users")
//           .add({
//             number,
//             birthdate,
//             gender,
//             userId: user._id,
//           })
//           .then((docRef) => {
//             console.log("Document written with ID: ", docRef.id);
//             alert("New User added success");
//             dispatch({ type: "ADD NEW USER", payload: docRef });
//           })
//           .catch((error) => {
//             console.error("Error adding document: ", error);
//             alert(error.message);
//           });
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         alert(error.message);
//         console.log(errorMessage);
//         // ..
//       });
//   } catch (error) {
//     console.log(error.message);
//     alert(error.message);
//   }
// };
