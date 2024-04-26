import React from "react";

const SectionHeading = ({ title }) => {
  return (
    <div>
      <h1 className="text-[30px] font-[500]">{title}</h1>
      <div className="w-[100px] h-[10px] mt-2 mb-[3%] bg-[#fd5d5d]"></div>
    </div>
  );
};

export default SectionHeading;
