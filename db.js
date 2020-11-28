import firebase from "firebase";
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyAh3GyE9q5OHNpxgOI2Hl_jSno2udIkUvE",
  authDomain: "booksanta-d64c8.firebaseapp.com",
  databaseURL: "https://booksanta-d64c8.firebaseio.com",
  projectId: "booksanta-d64c8",
  storageBucket: "booksanta-d64c8.appspot.com",
  messagingSenderId: "963851779419",
  appId: "1:963851779419:web:8854488a28865ce1c66e7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()