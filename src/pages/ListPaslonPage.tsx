import React from "react";
import Foto from "../assets/images/foto-paslon.png";
import ModalVote from "../components/ModalVote"

const ListPaslonPage: React.FC = () => {
  return (
    <div className="px-32 pt-32 h-[100vh]">
      <h1 className="text-center font-black text-ijo-lumut text-5xl mb-12">
        LIST PASLON
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          <thead className="text-black bg-[#E5E5E5] border-b border-[#c6c6c6]">
            <tr>
              <th scope="col" className="px-6 py-3 bg-[#d6d6d6]">
                No. Urut
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3 bg-[#d6d6d6]">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Visi & Misi
              </th>
              <th scope="col" className="px-6 py-3 bg-[#d6d6d6]">
                Koalisi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#f0f0f0] border-b border-[#c6c6c6]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap bg-[#E5E5E5]"
              >
                1
              </th>
              <td className="px-6 py-4 text-black">
                <img className="w-20 rounded-xl" src={Foto} alt="Foto Paslon" />
              </td>
              <td className="px-6 py-4 text-black bg-[#E5E5E5]">
                Cintara surya paloh
              </td>
              <td className="px-6 py-4 text-black">
                <ul className="list-disc">
                  <li>Memindahkan Indonesia ke Isekai.</li>
                  <li>Nonton anime 3x sehari.</li>
                  <li>Melakukan peresapan pada budaya jepang.</li>
                </ul>
              </td>
              <td className="px-6 py-4 text-black bg-[#E5E5E5]">
                <ul className="list-disc">
                  <li>Partai Persatuan Wiboo.</li>
                  <li>Partai Resbull.</li>
                  <li>Partai Black Magic.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalVote />
    </div>

  );
};

export default ListPaslonPage;
