import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { NewsDetail } from "../data";

const DetailPage: React.FC = () => {
  return (
    <div className="content px-32">
      {NewsDetail.map((data, index) => (
        <div key={index} className="bg-white px-10 py-24 relative">
          <Link to="/" className="flex items-center gap-3 absolute top-24">
            <FaArrowLeft className="w-4 h-4" />
            <p className="hover:underline">Beranda</p>
          </Link>
          <h2 className="text-center text-xl">BERITA HARI INI</h2>
          <h1 className="text-ijo-lumut text-4xl font-bold uppercase text-center mt-14">
            {data.title}
          </h1>
          <p className="text-center text-xl font-medium">{data.author}</p>
          <p className="text-center text-xl font-medium">{data.date}</p>
          <img className="mt-10" src={data.img} alt="News Image" />
          <p className="mt-14 font-medium text-lg text-justify">
            {data.content1}
          </p>
          <p className="mt-8 font-medium text-lg text-justify">
            {data.content2}
          </p>
          <p className="mt-8 font-medium text-lg text-justify">
            {data.content3}
          </p>
          <p className="mt-8 font-medium text-lg text-justify">
            {data.content4}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
