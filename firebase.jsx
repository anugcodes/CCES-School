import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export {app, auth};