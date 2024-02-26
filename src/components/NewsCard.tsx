import React from "react";
import { infoCards, HeadlineCard } from "../data";
import { Link } from "react-router-dom";

interface NewsCard {
  img: string;
  date: string;
  title: string;
  author: string;
}

const NewsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 py-24 px-32">
      {HeadlineCard.map((item: NewsCard, index: number) => (
        <Link
          to="/news-detail"
          key={index}
          className="col-span-2 relative bg-gradient-to-b from-gray-500 to-black hover:shadow-lg"
        >
          <img
            className="mix-blend-overlay w-full h-96"
            src={item.img}
            alt="Background"
          />
          <div>
            <div className="absolute bottom-24 left-4 red-background text-white rounded-xl px-5 py-2 font-semibold text-xl">
              {item.date}
            </div>
            <div className="absolute bottom-4 left-4">
              <h1 className="text-white text-3xl font-bold">{item.title}</h1>
              <p className="text-white text-2xl font-light">{item.author}</p>
            </div>
          </div>
        </Link>
      ))}
      {infoCards.map((item: NewsCard, index: number) => {
        return (
          <Link
            to="/news-detail"
            key={index}
            className="bg-white relative w-full h-96 hover:shadow-lg"
          >
            <img src={item.img} alt="Background" />
            <div>
              <div className="absolute bottom-32 left-4 red-background text-white rounded-xl px-2 py-2 font-semibold text-xl">
                {item.date}
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p className="text-2xl">{item.author}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsCard;
