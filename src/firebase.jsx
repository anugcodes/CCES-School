// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7zS2m0FFgu4E0gF1Ay4e2BxftFv-QaSg",
  authDomain: "nudetrial.firebaseapp.com",
  databaseURL: "https://nudetrial-default-rtdb.firebaseio.com",
  projectId: "nudetrial",
  storageBucket: "nudetrial.appspot.com",
  messagingSenderId: "923262999717",
  appId: "1:923262999717:web:726405e6da8afd2479c14c",
  measurementId: "G-DP087Y0GS0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);