import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxral7nxHAs2xDnLms6zkHNHbbI1Yfepc",
  authDomain: "fir-949a8.firebaseapp.com",
  projectId: "fir-949a8",
  storageBucket: "fir-949a8.appspot.com",
  messagingSenderId: "729907682693",
  appId: "1:729907682693:web:f132519302da9feeebf8ec"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);