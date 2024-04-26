import React from "react";

const Card = ({ img, content }) => {
  return (
    <div className="p-5 border border-gray-300 rounded-lg shadow-lg mb-10">
      <img src={img} className="w-[100px]" alt="Logo" />
      <p className="mt-5 text-[16px]">{content}</p>
    </div>
  );
};

export default Card;
