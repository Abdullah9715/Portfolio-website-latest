// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF5RrgUUVSlZ64p8YZZtcS5DvtqMUB5oE",
  authDomain: "latest-porfolio-website.firebaseapp.com",
  projectId: "latest-porfolio-website",
  storageBucket: "latest-porfolio-website.appspot.com",
  messagingSenderId: "29409499763",
  appId: "1:29409499763:web:cb54a915f28208ddece806",
  measurementId: "G-SSV6BBNE57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);