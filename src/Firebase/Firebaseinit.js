// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1pzCJsZpGmVwl51eIeY1aJfaFCAVcp58",
  authDomain: "simple2-abd3e.firebaseapp.com",
  projectId: "simple2-abd3e",
  storageBucket: "simple2-abd3e.firebasestorage.app",
  messagingSenderId: "93073317420",
  appId: "1:93073317420:web:6771c3178cac99c5e33b89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth