import { useState } from "react";
import Logo from "../assets/images/logo-image.png";
import { Link } from "react-router-dom";
import ModalLogin from "../components/ModalLogin";
import ModalRegister from "./ModalRegister";

const Navbar: React.FC = () => {
  const [userLogin, setUserLogin] = useState<boolean>(false);

  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);

  const loginAsUser = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setUserLogin(!userLogin);
    setLoginOpen(false);
  };

  const handleRegister = (): void => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const handleLogin = (): void => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <nav className="flex justify-between bg-black h-16 items-center px-32 z-10 fixed top-0 right-0 left-0">
      <div className="flex items-center">
        <div className="h-[41px] w-[41px]">
          <img className="items-center" src={Logo} alt="Logo Image" />
        </div>
        <div>
          <Link to="/" className="text-white font-bold ml-4 text-2xl">
            PEMILU PRESIDEN DUMBWAYS.ID
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="flex text-white text-xl items-center">
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
        {userLogin === false ? (
          <div className="flex items-center">
            <button
              className="bg-white text-xl font-bold px-7 py-1 rounded-md ml-5 hover:bg-gray-200 transition-all"
              onClick={() => setLoginOpen(true)}
            >
              LOGIN
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <p className="bg-white text-xl font-bold h-11 w-11 flex justify-center items-center rounded-full ml-5">
              J
            </p>
          </div>
        )}
      </div>
      <ModalLogin loginOpen={loginOpen} onClose={() => setLoginOpen(false)}>
        <div>
          <h1 className="text-center font-black text-ijo-lumut text-4xl mb-4">
            LOGIN
          </h1>
          <form className="w-full" action="">
            <label className="block text-lg font-bold leading-6 text-gray-600">
              Username
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-2 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <label className="mt-4 block text-lg font-bold leading-6 text-gray-600">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              className="mt-2 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <button
              className="flex mr-auto bg-tombol-suaramu px-32 py-2 mt-8 rounded-lg text-white text-center font-semibold text-xl hover:bg-[#4f4808] hover:shadow-md transition-all"
              onClick={loginAsUser}
            >
              SUBMIT
            </button>
            <div className="flex italic gap-1 justify-center mt-2">
              <p className="">Belum memiliki akun ?</p>
              <p
                className="text-blue-500 underline cursor-pointer"
                onClick={handleRegister}
              >
                Register
              </p>
            </div>
          </form>
        </div>
      </ModalLogin>
      <ModalRegister
        registerOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
      >
        <div>
          <h1 className="text-center font-black text-ijo-lumut text-4xl mb-4">
            REGISTER
          </h1>
          <form className="w-full" action="">
            <label className="block text-lg font-bold leading-6 text-gray-600">
              Fullname
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <label className="mt-2 block text-lg font-bold leading-6 text-gray-600">
              Alamat
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <label className="mt-2 block text-lg font-bold leading-6 text-gray-600">
              Jenis Kelamin
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <label className="mt-2 block text-lg font-bold leading-6 text-gray-600">
              Username
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <label className="mt-2 block text-lg font-bold leading-6 text-gray-600">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <button className="flex mr-auto bg-tombol-suaramu px-32 py-2 mt-6 rounded-lg text-white text-center font-semibold text-xl hover:bg-[#4f4808] hover:shadow-md transition-all">
              SUBMIT
            </button>
            <div className="flex italic gap-1 justify-center mt-2">
              <p className="">Telah memiliki akun ?</p>
              <p
                className="text-blue-500 underline cursor-pointer"
                onClick={handleLogin}
              >
                Login
              </p>
            </div>
          </form>
        </div>
      </ModalRegister>
    </nav>
  );
};

export default Navbar;
