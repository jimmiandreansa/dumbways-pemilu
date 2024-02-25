import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { DataPaslon } from "../data";

const Carousel: React.FC = () => {
  return (
    <div className="content px-32 py-20">
      <p className="text-ijo-lumut font-black text-5xl text-center">
        INFO PASLON
      </p>
      <div className="flex mt-16 gap-10 items-center justify-center">
        <IoIosArrowDropleftCircle className="w-10 h-10 text-white cursor-pointer" />
        {DataPaslon.map((data, index) => (
          <div
            key={index}
            className="bg-white p-12 rounded-xl w-4/5 shadow-lg shadow-slate-400"
          >
            <div className="flex gap-8">
              <img className="w-56 h-[100%]" src={data.img} alt="Image" />
              <div>
                <p className="text-2xl font-bold">Nomor Urut : {data.noUrut}</p>
                <h1 className="text-[40px] font-bold text-paslon-pink-tua leading-10 uppercase">
                  {data.name}
                </h1>
                <div className="mt-5 text-[21px] leading-7">
                  <p>Visi & Misi :</p>
                  <ul className="list-disc ml-8">
                    <li>{data.visiMisi[0]}</li>
                    <li>{data.visiMisi[1]}</li>
                    <li>{data.visiMisi[2]}</li>
                  </ul>
                </div>
                <div className="mt-5 text-[21px] leading-7">
                  <p>Koalisi :</p>
                  <ul className="list-disc ml-8">
                    <li>{data.koalisi[0]}</li>
                    <li>{data.koalisi[1]}</li>
                    <li>{data.koalisi[2]}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        <IoIosArrowDroprightCircle className="w-10 h-10 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Carousel;
