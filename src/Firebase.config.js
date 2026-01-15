// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyCYb7Fs8luqpirATvr8xiszFzhz2LkoJIg",
  authDomain: "task-management-734f3.firebaseapp.com",
  databaseURL: "https://task-management-734f3-default-rtdb.firebaseio.com",
  projectId: "task-management-734f3",
  storageBucket: "task-management-734f3.firebasestorage.app",
  messagingSenderId: "511805479694",
  appId: "1:511805479694:web:8796eaadab5f5c1da1955f"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const appSingUp = initializeApp(firebaseConfig, "secondary");

  export default firebaseConfig;

export const auth = getAuth(app);

