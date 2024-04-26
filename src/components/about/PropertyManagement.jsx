import React from "react";
import { MdAddHomeWork } from "react-icons/md";

const PropertyManagement = ({ title, desc }) => {
  return (
    <div className="w-full flex justify-between gap-4 items-center mb-[10%]">
      <span>
        <MdAddHomeWork className="text-[#fd5d5d] text-[45px]" />
      </span>
      <div>
        <h3 className="font-bold text-[16px] sm:text-[18px]">{title}</h3>
        <p className="text-gray-500 mt-2 text-[14px]">{desc}</p>
      </div>
    </div>
  );
};

export default PropertyManagement;
