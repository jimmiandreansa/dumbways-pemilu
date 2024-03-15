import React, { ChangeEvent, FormEvent } from "react";
import Logo from "../assets/images/logo-image.png";
import { Link, useNavigate } from "react-router-dom";
import { IRegister } from "../Interfaces/Auth_Interface";

export default function Register() {
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = React.useState<IRegister>({
    fullname: "",
    address: "",
    gender: "",
    password: "",
    username: "",
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formRegister),
      };

      await fetch("http://localhost:5000/api/v1/register", config);

      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%]">
        <p className="text-center italic text-ijo-lumut">
          Pemilu Presiden 2024
        </p>
        <div className="flex gap-4 items-center justify-center">
          <img className="w-14 " src={Logo} alt="Logo Image" />
          <p className="text-5xl">
            <span className="font-bold">DumbWays</span>.id
          </p>
        </div>
        <h1 className="text-center font-semibold text-ijo-lumut text-3xl mt-6">
          Register
        </h1>
        <p className="text-center mt-4 mb-4">
          Do you have an account?{" "}
          <Link className="text-ijo-lumut underline" to="/login">
            Login
          </Link>
        </p>
        <form className="px-20 mx-auto">
          <div className="mb-2">
            <label
              htmlFor="username"
              className="font-semibold mb-1 text-ijo-lumut"
            >
              Fullname
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              name="fullname"
              id="fullname"
              className="border border-slate-500 rounded w-full py-1 px-2"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="font-semibold mb-1 text-ijo-lumut"
            >
              Alamat
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              name="address"
              id="address"
              className="border border-slate-500 rounded w-full py-1 px-2"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="font-semibold mb-1 text-ijo-lumut"
            >
              Jenis Kelamin
            </label>
            <select
              onChange={handleOnChange}
              name="gender"
              id="gender"
              className="border border-slate-500 rounded w-full py-1 px-2"
            >
              <option value=""></option>
              <option value="Laki-laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="font-semibold mb-1 text-ijo-lumut"
            >
              Username
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              name="username"
              id="username"
              className="border border-slate-500 rounded w-full py-1 px-2"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="status"
              className="font-semibold mb-1 text-ijo-lumut"
            >
              Password
            </label>
            <input
              onChange={handleOnChange}
              type="password"
              name="password"
              id="password"
              className="border border-slate-500 rounded w-full py-1 px-2"
            />
          </div>
          <button
            onClick={handleRegister}
            type="submit"
            className="w-full py-1 text-lg bg-ijo-lumut text-white rounded mt-5 hover:bg-[#4f4808] transition-all"
          >
            Register
          </button>
        </form>
      </div>
      <div className="relative w-full">
        <img
          className="w-full h-screen object-cover"
          src="https://img.freepik.com/free-photo/copy-space-blank-commercial-advertisement_53876-121262.jpg?t=st=1709261585~exp=1709265185~hmac=a1e31ea69ba5e2376c5576389bb89a1f5098c59a554ea8f6973fd609185727b4&w=740"
          alt=""
        />
        <div className="bg-gradient-to-t from-black to-transparent w-full h-full absolute left-0 bottom-0"></div>
      </div>
    </div>
  );
}
