
import Header from "../component/header/Header";
import Hero from "../component/hero/Hero";
import { auth } from "../Firebase.config";
import { useSelector } from "react-redux";


function Home() {
  const user = useSelector((state) => state.user.value);
 
  const userData = auth
  console.log(userData);
  console.log(user);
 

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default Home;
