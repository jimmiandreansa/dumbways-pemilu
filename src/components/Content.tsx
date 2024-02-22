import "../index.css";
import Background from "../assets/images/rectangle.png";
import Branding from "../assets/images/brandred.png";
import KotakSuara from "../assets/images/kotak-suara.png";
import BackgroundImg from "../assets/images/background.png";

const Content: React.FC = () => {
  return (
    <>
      <div className="content pt-28">
        <div className="mx-32 relative">
          <img src={Background} alt="Background" />
          <div className="absolute top-0 left-0">
            <img className="h-56" src={Branding} alt="Branding" />
          </div>
          <div className="absolute top-0 right-24">
            <img className="w-64" src={KotakSuara} alt="Kotak Suara" />
          </div>
          <div className="absolute left-6 bottom-10">
            <h1 className="text-white font-bold text-6xl">SELAMAT DATANG</h1>
            <p className="text-white font-bold text-2xl">
              PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR <br /> DIPILIH MELALUI
              SEBUAH ARTI NAMA
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-24 px-32">
          <div className="col-span-2 relative bg-gradient-to-b from-gray-500 to-black">
            <img
              className="mix-blend-overlay w-full h-96"
              src={BackgroundImg}
              alt="Background"
            />
            <div className="">
              <div className="absolute bottom-24 left-4 red-background text-white rounded-xl px-5 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-white text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-white text-2xl font-light">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full h-96">
            <img src={BackgroundImg} alt="Background" />
            <div className="">
              <div className="absolute bottom-32 left-4 red-background text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full h-96">
            <img src={BackgroundImg} alt="Background" />
            <div className="">
              <div className="absolute bottom-32 left-4 red-background text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full h-96">
            <img src={BackgroundImg} alt="Background" />
            <div className="">
              <div className="absolute bottom-32 left-4 red-background text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full h-96">
            <img src={BackgroundImg} alt="Background" />
            <div className="">
              <div className="absolute bottom-32 left-4 red-background text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-28 flex justify-center text-center font-bold text-4xl">
        <h1>
          PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK <br /> YANG JELAS
          PASTIKAN MEREKA TIDAK MEMILIKI VISI <br /> MISI UNTUK MELEGALKAN SLOT
        </h1>
      </div>
    </>
  );
};

export default Content;
