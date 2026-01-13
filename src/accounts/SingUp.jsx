import { useState } from "react";
import Header from "../component/header/Header";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase.config";
import { Link, useNavigate } from "react-router";

function SingUp() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);

  // const [errorUserName, setErrorUserName] = useState("");
  // const [errorEmail, setErrorEmail] = useState("");
  // const [errorPassword, setErrorPassword] = useState("");

  // erro tests
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
  });

  // onChange function
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  // submit function

  // const HandleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!userDetails.userName) {
  //     setErrorUserName("User Name is required");
  //   }
  //   if (!userDetails.email) {
  //     setErrorEmail("Email is required");
  //   }
  //   if (!userDetails.password) {
  //     setErrorPassword("Password is required");
  //   } else {
  //     console.log(userDetails);
  //   }
  // };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.userName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "User Name is required",
      }));
    }
    if (!userDetails.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: " Email is required",
      }));
    }
    if (!userDetails.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    } else if (
      userDetails.userName &&
      userDetails.email &&
      userDetails.password
    ) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)
      ) {
        createUserWithEmailAndPassword(
          auth,
          userDetails.email,
          userDetails.password
        )
          .then((userCredential) => {
            updateProfile(auth.currentUser, {
              displayName: userDetails.userName,
            }).then(() => {
              sendEmailVerification(auth.currentUser).then(() => {
                // Email verification sent!

                const user = userCredential.user;
                toast.success(" Successfully Signed Up!");
                setUserDetails({ userName: "", email: "", password: "" });
                navigate("/signin");
              });
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email format",
        }));
        toast.error("This didn't work.");
      }
    }
  };

  return (
    <>
      <Header />

      <section className="bg-white">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
          <div className="max-md:order-1 h-screen min-h-full">
            <img
              src="https://readymadeui.com/image-3.webp"
              className="w-full h-full object-cover"
              alt="login-image"
            />
          </div>
          <form onSubmit={HandleSubmit} className="max-w-xl w-full p-6 mx-auto">
            <div className="mb-12">
              <h1 className="text-slate-900 text-4xl font-bold">Sign up</h1>
              <p className="text-slate-600 text-sm mt-6">
                Already have an account?
                <Link
                  to="/signin"
                  className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap"
                >
                  Log In
                </Link>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <label
                  className={`text-sm font-medium block mb-2 ${
                    errors.userName ? "text-red-600" : "text-slate-900"
                  }`}
                >
                  User Name
                </label>
                <div className="relative flex items-center">
                  <input
                    name="userName"
                    onChange={handleChange}
                    type="text"
                    required=""
                    className="w-full text-sm text-slate-900 border-b  focus:border-blue-600 pr-8 px-2 py-3 outline-none"
                    placeholder="User Name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={10} cy={7} r={6} data-original="#000000" />
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <div className="mt-1.5">
                  {errors.userName && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <MdErrorOutline className="mr-1" />
                      {errors.userName}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  className={`text-sm font-medium block mb-2 ${
                    errors.email ? "text-red-600" : "text-slate-900"
                  }`}
                >
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    onChange={handleChange}
                    type="text"
                    required=""
                    className="w-full text-sm text-slate-900 border-b  focus:border-blue-600 pr-8 px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4.5 h-4.5 absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000" />
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit={10}
                        strokeWidth={40}
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      />
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      />
                    </g>
                  </svg>
                </div>
                <div className="mt-1.5">
                  {errors.email && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <MdErrorOutline className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  className={`text-sm font-medium block mb-2 ${
                    errors.password ? "text-red-600" : "text-slate-900"
                  }`}
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    onChange={handleChange}
                    type={showpass ? "text" : "password"}
                    required=""
                    className="w-full text-sm text-slate-900 border-b  focus:border-blue-600 pr-8 px-2 py-3 outline-none"
                    placeholder="Enter password"
                  />

                  {showpass ? (
                    <FaRegEye
                      onClick={() => setShowpass(!showpass)}
                      className="w-4.5 h-4.5 absolute right-2 cursor-pointer text-[#bbbbbb]"
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() => setShowpass(!showpass)}
                      className="w-4.5 h-4.5 absolute right-2 cursor-pointer text-[#bbbbbb]"
                    />
                  )}
                </div>
                <div className="mt-1.5">
                  {errors.password && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <MdErrorOutline className="mr-1" />
                      {errors.password}
                    </p>
                  )}{" "}
                </div>
              </div>
            </div>
            <div className="mt-12">
              <input
                type="submit"
                value="Sing in"
                className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="my-4 flex items-center gap-4">
              <hr className="w-full border-slate-300" />
              <p className="text-sm text-slate-900 text-center">or</p>
              <hr className="w-full border-slate-300" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-4 py-2 px-4 text-[15px] font-medium tracking-wide text-slate-900 border border-slate-300 rounded-md bg-transparent hover:bg-slate-50 focus:outline-none cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                className="inline"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
              Continue with google
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default SingUp;
