import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, img, to }) => {
  return (
    <div className="w-full card-box overflow-hidden p-1 border-2 shadow-lg rounded-md  border-[#fd5d5d]">
      <div className="overflow-hidden">
        <img src={img} className="w-full card-img " alt="" />
      </div>
      <div className="px-3">
        <h4 className="sm:text-[20px] font-[600] my-2 ">{title}</h4>
        <NavLink>
          <button className="text-[18px] flex items-center gap-2 mb-3 text-red-500">
            know more <FaArrowRight />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
