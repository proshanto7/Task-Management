import { useDispatch } from "react-redux";
import Header from "../component/header/Header";
import Hero from "../component/hero/Hero";
import { auth } from "../Firebase.config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../redux/slices/userSlice";

function Home() {



  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user));
      }
    });
  }, []);



  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default Home;
