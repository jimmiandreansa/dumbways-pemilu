import Logo from "../assets/images/logo-image.png";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-black pt-12 pb-16 px-32 flex gap-8 items-center">
        <img className="h-28" src={Logo} alt="Logo Image" />
        <div>
          <h1 className="text-white text-2xl font-bold">DUMBWAYS.ID</h1>
          <p className="text-white text-base font-extralight leading-5">
            Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota <br /> Tangerang
            Selatan, Banten 15413
          </p>
        </div>
      </div>
      <hr className="border-1" />
      <div className="bg-black py-8">
        <p className="text-white text-center text-xl">
          Komisi Pemilihan Umum DumbWays.ID | Jimmi Andreansa 2023
        </p>
      </div>
    </>
  );
};

export default Footer;
