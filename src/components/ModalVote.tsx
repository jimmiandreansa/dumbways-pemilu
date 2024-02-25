import React from "react";
import { IoClose } from "react-icons/io5";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalVote: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center mt-16 transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w mx-32 ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          <IoClose className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalVote;
