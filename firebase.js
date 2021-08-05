import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAijrJPSTdy3V5murk6kzyLcDCVuyR0YqM",
  authDomain: "fb-nextjs-292f6.firebaseapp.com",
  projectId: "fb-nextjs-292f6",
  storageBucket: "fb-nextjs-292f6.appspot.com",
  messagingSenderId: "71724164569",
  appId: "1:71724164569:web:656aee87ec1ea28d1525c8",
  measurementId: "G-HHNTL9YL5E",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
