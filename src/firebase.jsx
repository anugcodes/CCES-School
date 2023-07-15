// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCowxYoCwy9KbvDapahl_gbMB9JLkEE5TY",
  authDomain: "nude-b281b.firebaseapp.com",
  projectId: "nude-b281b",
  storageBucket: "nude-b281b.appspot.com",
  messagingSenderId: "270334300572",
  appId: "1:270334300572:web:25e4dc2c5f1ab44f0bf859",
  measurementId: "G-QPC4NG7SFL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);