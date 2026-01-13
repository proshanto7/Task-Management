import natureImg from "../../assets/nature.jpg";
import { useSelector } from "react-redux";
function Hero() {
  const user = useSelector((state) => state.user.value);



  return (
    <section>
      <div className="max-w-full mx-auto">
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl font-bold capitalize text-red-500">
          {" "}
          {user ? `Hello ${user.displayName}` : ""}
        </h1>
        <img src={natureImg} alt="img" className="max-w-full" />
      </div>
    </section>
  );
}
 
export default Hero;
