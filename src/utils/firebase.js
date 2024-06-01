// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDemh_qy48cVlozPgCJk0n_7tIjjh2LWOM",
  authDomain: "netflixgpt-812e3.firebaseapp.com",
  projectId: "netflixgpt-812e3",
  storageBucket: "netflixgpt-812e3.appspot.com",
  messagingSenderId: "237839139379",
  appId: "1:237839139379:web:21efbcc8760985c5b89946",
  measurementId: "G-2K8JBJ8XFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
