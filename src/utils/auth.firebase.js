import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwCTSgJaQrFxRp9ZQdFcG_-phyQabWhEw",
  authDomain: "movie-ea3fc.firebaseapp.com",
  projectId: "movie-ea3fc",
  storageBucket: "movie-ea3fc.appspot.com",
  messagingSenderId: "557016290426",
  appId: "1:557016290426:web:600754d7efccaccfcf17c3",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };

// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: "AIzaSyCwh0uAiDzhVcUiR-eU9uYVDyvrXca5nH4",
//   authDomain: "muvi-62bbf.firebaseapp.com",
//   projectId: "muvi-62bbf",
//   storageBucket: "muvi-62bbf.appspot.com",
//   messagingSenderId: "858081043157",
//   appId: "1:858081043157:web:5eaeb38c656e174088785c",
// };
// firebase.initializeApp(firebaseConfig);
// export default firebase;
