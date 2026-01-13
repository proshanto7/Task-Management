import { useState } from "react";
import Header from "../component/header/Header";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router";

function ForgotPassword() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();

    dispatch(addUser(name));
    setName("");
    navigate("/")

  };

  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-120 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h1 className="text-slate-900 text-center text-3xl font-semibold capitalize">
                set user name
              </h1>
              <form className="mt-12 space-y-6" onSubmit={handleSubmite}>
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    User Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      required=""
                      value={name}
                      onChange={handleChange}
                      className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                      placeholder="Enter Your Name"
                    />
                  <FaRegUser  className="w-4.5 h-4.5 absolute right-4 text-[#bbbbbb]" />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4"></div>
                <div className="mt-12!">
                  <input
                    type="submit"
                    value="add name"
                    onClick={handleSubmite}
                    className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer capitalize"
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
