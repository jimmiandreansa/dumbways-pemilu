import { useState } from "react";
import Logo from "../assets/images/logo-image.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavbarUser: React.FC = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="flex justify-between bg-black h-16 items-center px-4 sm:px-20 md:px-32 z-10 fixed top-0 right-0 left-0">
      <div className="flex items-center">
        <div className="h-[38px] w-[38px] sm:h-[41px] sm:w-[41px]">
          <img className="items-center" src={Logo} alt="Logo Image" />
        </div>
        <div>
          <Link
            to="/"
            className="text-white font-bold ml-2 text-lg sm:ml-4 sm:text-2xl"
          >
            PEMILU PRESIDEN DUMBWAYS.ID
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="hidden text-white text-xl items-center lg:flex">
          <Link
            className="m-5 hover:text-paslon-kuning transition-all"
            to="/list-partai"
          >
            Partai
          </Link>
          <p>|</p>
          <Link
            className="m-5 hover:text-paslon-kuning transition-all"
            to="/list-paslon"
          >
            Paslon
          </Link>
          <p>|</p>
          <Link
            className="m-5 hover:text-paslon-kuning transition-all"
            to="/vote"
          >
            Voting
          </Link>
        </div>
        <div className="flex items-center">
          <p className="bg-white text-xl font-bold h-11 w-11 flex justify-center items-center rounded-full ml-5">
            J
          </p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="sm:hidden">
        <div
          className="cursor-pointer text-white text-2xl my-2 p-2 rounded-full hover:bg-slate-800 transition-all z-10"
          onClick={() => setToggle(!toggle)}
        >
          <FaBars />
        </div>
        {toggle ? (
          <div className="fixed top-0 inset-0 font-normal flex justify-center items-start mt-20">
            <div
              className="text-sm text-gray-700 bg-white rounded-lg shadow px-6 pt-4 pb-5 transition-all w-full mx-4 flex flex-col gap-2"
              aria-labelledby="dropdownLargeButton"
            >
              <Link
                to="/list-partai"
                className="bg-slate-100 rounded-md block px-4 py-2 hover:bg-gray-200"
              >
                Partai
              </Link>
              <Link
                to="/list-paslon"
                className="bg-slate-100 rounded-md block px-4 py-2 hover:bg-gray-200"
              >
                Paslon
              </Link>
              <Link
                to="/vote"
                className="bg-slate-100 rounded-md block px-4 py-2 hover:bg-gray-200"
              >
                Voting
              </Link>
              <hr className="mt-2" />
              <div className="bg-paslon-kuning-tua rounded-md w-fit mx-auto text-white mt-3 block px-6 py-2 hover:bg-slate-500 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white">
                Login
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* Mobile View End */}
    </nav>
  );
};

export default NavbarUser;
