import React from "react";

const Card = ({ img, title, to }) => {
  return (
    <div className="w-full p-3 px-4 border bg-red-50	rounded-lg border-gray-300 pb-10 shadow-lg mb-[5%]">
      <div className="mt-[-30px]">
        <img src={img} className="w-full h-[200px] object-cover" alt="" />
      </div>
      <div>
        <h4 className="font-[600] text-[17px] my-5">{title}</h4>
        <button className="bg-[#fd5d5d] text-white py-2 px-12 rounded-tl-lg rounded-tr-md rounded-br-2xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Card;
