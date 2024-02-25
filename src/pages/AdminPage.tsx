import React from "react";
import { DataAdminDashboard } from "../data";
import { DataVoters } from "../data";

const AdminPage: React.FC = () => {
  return (
    <>
      <div className="px-32 pt-32 pb-20">
        <h1 className="text-center font-black text-ijo-lumut text-5xl mb-12">
          DASHBOARD
        </h1>
        <div className="flex gap-4">
          {DataAdminDashboard.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-6">
              <div
                className={`w-16 h-16 ${data.bgColorPrimary} text-3xl font-black ${data.textColor} rounded-full border-[7px] ${data.borderColor} flex justify-center items-center`}
              >
                {data.noUrut}
              </div>
              <div
                className={`${data.bgColorPrimary} px-4 py-6 rounded-2xl ${data.boxShadow}`}
              >
                <img src={data.img} alt="Foto Paslon" />
                <h1
                  className={`font-black text-[38px] text-outline uppercase ${data.textColor}`}
                >
                  {data.name}
                </h1>
                <p
                  className={`text-xl font-bold text-outline-2 ${data.textColor}`}
                >
                  Akumulasi : {data.accumulate}%
                </p>
                <p
                  className={`text-xl font-bold text-outline-2 ${data.textColor}`}
                >
                  Jumlah Vote : {data.voters} Voters
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="content px-32 pt-32 pb-20">
        <h1 className="text-center font-black text-ijo-lumut text-5xl mb-12">
          LIST VOTER
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
            <thead className="text-black bg-[#E5E5E5] border-b border-[#c6c6c6]">
              <tr>
                <th scope="col" className="px-6 py-3 bg-[#d6d6d6]">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 bg-[#d6d6d6]">
                  Alamat
                </th>
                <th scope="col" className="px-6 py-3">
                  Jenis Kelamin
                </th>
                <th scope="col" className="px-6 py-3 bg-[#d6d6d6]">
                  Paslon
                </th>
              </tr>
            </thead>
            {DataVoters.map((data, index) => (
              <tbody key={index}>
                <tr className="bg-[#f0f0f0] border-b border-[#c6c6c6]">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap bg-[#E5E5E5]"
                  >
                    {data.number}
                  </th>
                  <td className="px-6 py-4 text-black">{data.name}</td>
                  <td className="px-6 py-4 text-black bg-[#E5E5E5]">
                    {data.address}
                  </td>
                  <td className="px-6 py-4 text-black">{data.gender}</td>
                  <td className="px-6 py-4 text-blue-700 bg-[#E5E5E5]">
                    {data.paslon}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <h1 className="text-3xl font-bold my-12">
          TOTAL SUARA TERKUMPUL : 100 Voters
        </h1>
      </div>
    </>
  );
};

export default AdminPage;
