// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbPA0uArId2H_-mhgncPfNXYVgG-Y8mOY",
  authDomain: "sport-green.firebaseapp.com",
  projectId: "sport-green",
  storageBucket: "sport-green.appspot.com",
  messagingSenderId: "715542513721",
  appId: "1:715542513721:web:4086b97b20e05eff7c25e8",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
