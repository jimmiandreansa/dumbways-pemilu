import React from "react";
import Foto from "../assets/images/foto-paslon.png";

const AddPaslonPage: React.FC = () => {
  return (
    <div className="px-32 pt-32 mb-28">
      <h1 className="text-center font-black text-ijo-lumut text-5xl mb-12">
        ADD PASLON
      </h1>
      <div className="flex justify-center gap-12 px-16">
        <img className="w-72 h-full" src={Foto} alt="Foto Paslon" />
        <form className="w-full" action="">
          <label className="block text-lg font-bold leading-6 text-gray-600">
            Nama
          </label>
          <input
            type="text"
            className="mt-2 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <label className="mt-4 block text-lg font-bold leading-6 text-gray-600">
            Nomor Urut
          </label>
          <input
            type="text"
            className="mt-2 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <label className="mt-4 block text-lg font-bold leading-6 text-gray-600">
            Visi Misi
          </label>
          <textarea
            rows="6"
            className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500"
          ></textarea>
          <button className="flex mr-auto bg-tombol-suaramu px-32 py-2 mt-8 rounded-lg text-white text-center font-semibold text-2xl">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPaslonPage;
