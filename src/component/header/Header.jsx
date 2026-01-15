import { useSelector } from "react-redux";
import { Link } from "react-router";
import Profile from "../profile/Profile";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { RiCloseCircleLine, RiMenu3Line } from "react-icons/ri";
import Container from "../common/Container";

function Header() {
  const user = useSelector((state) => state.user.value);
  const [profileShow, setProfileShow] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className=" shadow-md py-4  bg-white min-h-17.5 relative z-50 ">
      <Container>
        <div className="flex ">
          <div className="flex flex-wrap items-center justify-between gap-5 w-full">
            <Link
              to="/"
              className="max-sm:hidden text-2xl font-semibold capitalize font-serif"
            >
              Proshanto
            </Link>
            <Link
              to="/"
              className="hidden max-sm:block text-3xl font-bold capitalize font-serif "
            >
              Proshanto
            </Link>
            <div
              id="collapseMenu"
              className="max-lg:hidden lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
            >
              <ul className="lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-75 max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block">
                  <a href="javascript:void(0)">
                    <img
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      className="w-36"
                    />
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                  >
                    Home
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/todolist"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Todo List
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/todo"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    TO-DO
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Blog
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    About
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/contact"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Contact
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <button className="sm:hidden block px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">
                    <Link to="/signin">Login</Link>
                  </button>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <button className="sm:hidden block  px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">
                    <Link to="/singup">Sign up</Link>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex max-lg:ml-auto space-x-4">
              <button className="hidden sm:block px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">
                <Link to="/signin">Login</Link>
              </button>
              <button className="hidden sm:block  px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">
                <Link to="/singup">Sign up</Link>
              </button>

              {user && (
                <button onClick={() => setProfileShow(!profileShow)}>
                  <Link>
                    <CgProfile className="text-3xl cursor-pointer " />
                  </Link>
                </button>
              )}

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden cursor-pointer"
              >
                {mobileMenu ? (
                  <RiCloseCircleLine className="text-3xl" />
                ) : (
                  <RiMenu3Line className="text-3xl" />
                )}
              </button>
            </div>
          </div>

          {profileShow && <Profile />}

          {mobileMenu ? (
            <div className="absolute z-999 w-full top-17  right-0 duration-300 block lg:hidden">
              <ul className="bg-white w-full ">
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                  >
                    Home
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/todolist"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Todo List
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/todo"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    TO-DO
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Blog
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    About
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/contact"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Contact
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <button className="sm:hidden block px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">
                    <Link to="/signin">Login</Link>
                  </button>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <button className="sm:hidden block  px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">
                    <Link to="/singup">Sign up</Link>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="absolute z-999 w-full top-17 right-300 duration-300 block lg:hidden">
              <ul className="bg-white w-full ">
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                  >
                    Home
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/todolist"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Todo List
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/todo"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    TO-DO
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Blog
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    About
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/contact"
                    className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]"
                  >
                    Contact
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <button className="sm:hidden block px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">
                    <Link to="/signin">Login</Link>
                  </button>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                  <button className="sm:hidden block  px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">
                    <Link to="/singup">Sign up</Link>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}

export default Header;
