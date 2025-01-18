// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Lp9JdRjGOuuSRXVxcAoe4Wexxn6ywJw",
  authDomain: "shiva2-32c05.firebaseapp.com",
  databaseURL: "https://shiva2-32c05-default-rtdb.firebaseio.com",
  projectId: "shiva2-32c05",
  storageBucket: "shiva2-32c05.firebasestorage.app",
  messagingSenderId: "462994023749",
  appId: "1:462994023749:web:f20b4a7bc20ac6ef4b4a2c",
  measurementId: "G-60BQX38QDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);