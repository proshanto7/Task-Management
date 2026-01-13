// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpey8HszjY3Od7bnR5-WyqczwVMV4vT8g",
  authDomain: "todolist-8f905.firebaseapp.com",
  databaseURL: "https://todolist-8f905-default-rtdb.firebaseio.com",
  projectId: "todolist-8f905",
  storageBucket: "todolist-8f905.firebasestorage.app",
  messagingSenderId: "611616415954",
  appId: "1:611616415954:web:921a981d6b2953229b0d0b"
};


const firebaseConfigsingup = {
  apiKey: "AIzaSyCYb7Fs8luqpirATvr8xiszFzhz2LkoJIg",
  authDomain: "task-management-734f3.firebaseapp.com",
  projectId: "task-management-734f3",
  storageBucket: "task-management-734f3.firebasestorage.app",
  messagingSenderId: "511805479694",
  appId: "1:511805479694:web:8796eaadab5f5c1da1955f"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const appSingUp = initializeApp(firebaseConfigsingup, "secondary");

  export default firebaseConfig;

export const auth = getAuth(appSingUp);
