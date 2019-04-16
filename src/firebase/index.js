import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
const config = {
  apiKey: process.env.STORAGE_API_KEY,
  authDomain: "authors-heaven-aquaman.firebaseapp.com",
  databaseURL: "https://authors-heaven-aquaman.firebaseio.com",
  projectId: "authors-heaven-aquaman",
  storageBucket: "authors-heaven-aquaman.appspot.com",
  messagingSenderId: "971325279668",
};

firebase.initializeApp(config);
const storage = firebase.storage();
export { storage, firebase as default };
