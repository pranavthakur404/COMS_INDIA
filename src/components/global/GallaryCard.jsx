import React from "react";

const GallaryCard = ({ img, name }) => {
  return (
    <div className="w-full my-0 mx-auto cursor-grab gallarymainBox relative shadow-lg rounded-xl">
      <img src={img} className="w-full h-[100%] object-cover" alt="" />
      <span className="bg-[rgba(0,0,0,0.5)] inset-0 overlay absolute"></span>
      <div className="w-[80%] left-2 content rounded-md absolute bottom-2 bg-white py-3 font-bold p-2">
        {name}
      </div>
    </div>
  );
};

export default GallaryCard;
