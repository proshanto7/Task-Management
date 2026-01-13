import { useState } from "react";
import Header from "../component/header/Header";
import { sendPasswordResetEmail } from "firebase/auth";
import { MdErrorOutline } from "react-icons/md";
import { auth } from "../Firebase.config";
import toast from "react-hot-toast";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [errorEmail, setErrorEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorEmail("Email is required");
    } else if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success(" Please Cheeck Your Email");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          // ..
        });
    }
  };

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-120 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h1 className="text-slate-900 text-center text-3xl font-semibold">
                Reset your password
              </h1>
              <form className="mt-12 space-y-6" onSubmit={handleSubmite}>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    email address
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="text"
                      required=""
                      onChange={handleChange}
                      className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                      placeholder="Enter email address"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4.5 h-4.5 absolute right-4"
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
                    {errorEmail && (
                      <p className="text-red-600 text-sm flex items-center mt-1">
                        <MdErrorOutline className="mr-1" />
                        {errorEmail}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4"></div>
                <div className="mt-12!">
                  <input
                    type="submit"
                    value="Reset password"
                    className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
