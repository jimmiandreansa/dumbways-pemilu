import { useState } from "react";
import Logo from "../assets/images/logo-image.png";

const Navbar: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (): void => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-between bg-black h-16 items-center px-32 z-10 fixed top-0 right-0 left-0">
      <div className="flex items-center">
        <div className="h-[41px] w-[41px]">
          <img className="items-center" src={Logo} alt="Logo Image" />
        </div>
        <div>
          <h2 className="text-white font-bold ml-4 text-2xl">
            PEMILU PRESIDEN DUMBWAYS.ID
          </h2>
        </div>
      </div>
      <div className="flex">
        <div className="flex text-white text-xl items-center">
          <a className="m-5" href="/">
            Partai
          </a>
          <p>|</p>
          <a className="m-5" href="/">
            Paslon
          </a>
          <p>|</p>
          <a className="m-5" href="/">
            Voting
          </a>
        </div>
        {isLogin === false ? (
          <div className="flex items-center">
            <button
              className="bg-white text-xl font-bold px-7 py-1 rounded-md ml-5"
              onClick={handleLogin}
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
    </div>
  );
};

export default Navbar;
