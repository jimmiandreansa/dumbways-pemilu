import React from 'react'
import "../index.css";
import Background from "../assets/images/rectangle.png";
import Branding from "../assets/images/brandred.png";
import KotakSuara from "../assets/images/kotak-suara.png";
import InfoCard from '../components/NewsCard';

const HomePage : React.FC = () => {
  return (
    <main>
      {/* Header Content */}
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
        <InfoCard />
      </div>

      {/* Bottom Content */}
      <div className="py-28 flex justify-center text-center font-bold text-4xl">
        <h1>
          PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK <br /> YANG JELAS
          PASTIKAN MEREKA TIDAK MEMILIKI VISI <br /> MISI UNTUK MELEGALKAN SLOT
        </h1>
      </div>
    </main>
  )
}

export default HomePage