import React from "react";
import { dataPaslon } from "../data";
import Carousel from "../components/Carousel";
import ModalVote from "../components/ModalVote";
import { DataChooseVoter } from "../data";

interface DataPaslon {
  nomorUrut: number;
  name: string;
  percent: number;
  bgColorPrimary: string;
  bgColorSecondary: string;
  boxShadow: string;
}

const VotePage: React.FC = () => {
  const [pilih, setPilih] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  const pilihSekarang = () => {
    setPilih(!pilih);
    setOpen(false);
  };

  return (
    <>
      <div className="px-32 pt-32 pb-20">
        <h1 className="text-center font-black text-ijo-lumut text-5xl">
          INFO PEMILU TERUPDATE
        </h1>
        <div className="flex gap-10 mx-5 mt-16">
          <div className="w-96">
            <p className="text-center text-[40px] font-black">Hasil :</p>
          </div>
          <div className="flex-auto flex flex-col gap-4">
            {dataPaslon.map((data: DataPaslon, index: number) => (
              <div
                key={index}
                className={`flex ${data.bgColorPrimary} rounded-xl ${data.boxShadow}`}
              >
                <div
                  className={`flex flex-col ${data.bgColorSecondary} my-3 ml-4 text-center rounded-lg text-white px-3 py-2 border-[3px] border-white`}
                >
                  <p className="font-medium">
                    No. <br /> Paslon
                  </p>
                  <p className="font-bold text-[32px]">{data.nomorUrut}</p>
                </div>
                <div
                  className={`flex flex-col ml-7 text-${data.bgColorSecondary} justify-center`}
                >
                  <p className="font-black text-[38px] text-outline uppercase">
                    {data.name}
                  </p>
                  <p className="text-4xl font-bold text-outline-2">
                    {data.percent}%
                  </p>
                </div>
              </div>
            ))}
            {pilih === false ? (
              <button
                className="flex ml-2 mr-auto bg-tombol-suaramu px-14 py-3 mt-14 rounded-lg text-white text-center font-semibold text-3xl"
                onClick={() => setOpen(true)}
              >
                MASUKKAN SUARAMU
              </button>
            ) : (
              <p className="uppercase text-text-merah text-4xl font-bold mt-14">
                Anda sudah memilih !!!!
              </p>
            )}
            <ModalVote open={open} onClose={() => setOpen(false)}>
              <div>
                <h1 className="text-center font-black text-ijo-lumut text-4xl mb-3">
                  MASUKAN PILIHAN MU
                </h1>
                <div className="flex gap-4">
                  {DataChooseVoter.map((data, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-6 shadow-lg rounded-2xl"
                    >
                      <div
                        className={`${data.bgColorPrimary} px-4 pt-6 rounded-2xl relative w-full h-full`}
                      >
                        <div
                          className={`absolute right-0 top-0 border-white w-20 h-20 ${data.bgColorSecondary} text-3xl font-bold text-white rounded-full border-[3px] flex justify-center items-center`}
                        >
                          {data.noUrut}
                        </div>
                        <img
                          className="w-full h-3/6 object-cover rounded-xl"
                          src={data.img}
                          alt="Foto Paslon"
                        />
                        <h1 className="font-bold text-2xl text-outline uppercase mt-3 text-paslon-kuning-tua">
                          {data.name}
                        </h1>
                        <p className="text-lg">{data.motto}</p>
                        <p className="text-lg font-bold">Partai Pengusung :</p>
                        <ul className="list-disc ml-8 leading-5">
                          <li>{data.partaiPengusung[0]}</li>
                          <li>{data.partaiPengusung[1]}</li>
                          <li>{data.partaiPengusung[2]}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-4 gap-8 mx-4">
                  <button className="flex justify-center items-center bg-transparent py-2 rounded-xl text-tombol-suaramu text-center font-bold text-2xl w-full border-tombol-suaramu border-4">
                    RESET
                  </button>
                  <button
                    className="flex justify-center items-center bg-tombol-suaramu py-2 rounded-xl text-white text-center font-semibold text-2xl w-full"
                    onClick={pilihSekarang}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </ModalVote>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="py-28 flex justify-center text-center font-bold text-4xl">
        <h1 className="uppercase text-text-merah">
          Pilih berdasarkan gacha tidak usah serius <br /> yang penting tidak
          melegalkan slot
        </h1>
      </div>
    </>
  );
};

export default VotePage;
