import React from "react";
import { Link } from "react-router-dom";
import { InterfaceArticle } from "../Interfaces/interfaceArticle";
import DataArticle from "../Mocks/dataArticle.json";

const NewsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 py-24 px-32">
      {DataArticle.map((data: InterfaceArticle, index: number) =>
        data.isHeadline ? (
          <Link
            to="/news-detail"
            key={index}
            className="col-span-2 relative border-4 border-white hover:border-slate-200 hover:shadow-lg"
          >
            <img
              className="w-full h-96 object-cover"
              src={data.image}
              alt="Background"
            />
            <div className="bg-gradient-to-t from-black to-transparent w-full h-full absolute left-0 bottom-0"></div>
            <div>
              <div className="absolute bottom-24 left-4 red-background text-white rounded-xl px-5 py-2 font-semibold text-xl cursor-default">
                {data.date}
              </div>
              <div className="absolute bottom-4 left-4 pr-8 w-full">
                <h1 className="text-white text-3xl font-bold truncate hover:underline">
                  {data.title}
                </h1>
                <Link
                  to="/"
                  className="text-white text-2xl font-light hover:text-slate-200"
                >
                  {data.author}
                </Link>
              </div>
            </div>
          </Link>
        ) : (
          <Link
            to="/news-detail"
            key={index}
            className="bg-white w-full h-96 border-4 border-white hover:border-slate-200 hover:shadow-lg relative"
          >
            <img
              className="h-1/2 w-full object-cover"
              src={data.image}
              alt="Background"
            />
            <div className="p-3">
              <div className="red-background text-white rounded-lg px-2 py-1 font-semibold text-lg w-fit cursor-default">
                {data.date}
              </div>
              <h1 className="mt-2 text-black text-2xl font-bold line-clamp-3 leading-7 hover:underline">
                {data.title}
              </h1>
            </div>
            <Link
              to="/"
              className="absolute bottom-3 left-3 text-slate-700 text-xl hover:text-slate-900"
            >
              {data.author}
            </Link>
          </Link>
        )
      )}
    </div>
  );
};

export default NewsCard;
