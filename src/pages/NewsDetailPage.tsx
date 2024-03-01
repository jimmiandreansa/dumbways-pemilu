import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { InterfaceArticleDetail } from "../Interfaces/interfaceArticleDetail";
import DataArticleDetail from "../Mocks/dataArticleDetail.json";

const DetailPage: React.FC = () => {
  return (
    <div className="content px-32">
      {DataArticleDetail.map((data: InterfaceArticleDetail, index: number) => (
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
          <img className="mt-10 w-full" src={data.image} alt="News Image" />
          <div className="mt-10">
            {data.paragraph.map((item, index) => {
              return (
                <p
                  key={index}
                  className="mt-4 font-medium text-lg text-justify"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
