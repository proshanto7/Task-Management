import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import firebaseConfig from "./Firebase.config.js";
import { Toaster } from "react-hot-toast";
import { store } from "./redux/app/store.js";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </>
);
