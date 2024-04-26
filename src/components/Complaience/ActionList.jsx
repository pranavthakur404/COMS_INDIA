import React from "react";

const ActionList = ({ file, title, index }) => {
  return (
    <div
      className={`w-full flex justify-between py-5 px-5 md:px-10 ${
        index !== 0 && "border-t-2 border-gray-400"
      }`}
    >
      <p className="text-[14px] md:text-[16px]">{title}</p>
      <button className="bg-[#fd5d5d] text-white py-1 px-5 rounded-sm">
        Action
      </button>
    </div>
  );
};

export default ActionList;
