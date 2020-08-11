import firebase from "firebase";

const firebaseApp = {
  apiKey: "AIzaSyDogsfVJbN-1x7AF81O1iq8FOpQ0bhJFAI",
  authDomain: "clone-app-445d0.firebaseapp.com",
  databaseURL: "https://clone-app-445d0.firebaseio.com",
  projectId: "clone-app-445d0",
  storageBucket: "clone-app-445d0.appspot.com",
  messagingSenderId: "664215578922",
  appId: "1:664215578922:web:750e16a7154ba81157d653",
};

const db = firebaseApp.firestore()

export default db
