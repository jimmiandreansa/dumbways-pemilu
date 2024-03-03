import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DataCarousel from "../Mocks/dataCarousel.json";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "../index.css";

type propTypes = {
  className: string;
  onClick: () => void;
}

function NextArrow(props: propTypes) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaAngleRight style={{ color: "white", fontSize: "40px" }} />
    </div>
  );
}

function PrevArrow(props: propTypes) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaAngleLeft style={{ color: "white", fontSize: "40px" }} />
    </div>
  );
}

const Carousel = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow className={""} onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
    prevArrow: <PrevArrow className={""} onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
  };

  return (
    <div className="content px-48 py-20">
      <h1 className="text-center font-black text-ijo-lumut text-5xl mb-12">
        INFO PASLON
      </h1>
      <Slider {...settings}>
        {DataCarousel.map((data, index) => (
          <div key={index} className="bg-white rounded-xl p-12">
            <div className="flex flex-row gap-12 w-fit">
              <img
                className="h-88 w-64 object-cover rounded-lg"
                src={data.image}
                alt=""
              />
              <div>
                <p className="text-2xl font-bold text-black">
                  Nomor Urut : {data.noUrut}
                </p>
                <h1 className="text-[40px] font-bold text-paslon-pink-tua leading-10 uppercase">
                  {data.name}
                </h1>
                <div className="mt-5 text-[21px] leading-7 text-black">
                  <p>Visi & Misi :</p>
                  <ul className="list-disc ml-8">
                    {data.visiMisi.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 text-[21px] leading-7 text-black">
                  <p>Koalisi :</p>
                  <ul className="list-disc ml-8">
                    {data.koalisi.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
