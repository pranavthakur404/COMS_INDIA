import React, { useState } from "react";

const Card = ({ imgUrl, founderName, about, designation }) => {
  const [isHovered, setIsHovered] = useState(false);
  //   group-hover:flex group-hover:justify-evenly group-hover:items-center
  return (
    <div className="w-full p-2 rounded-xl overflow-hidden teams-card-main-box relative group hover:bg-gray-100 hover:shadow-lg">
      <div className="w-full teams-top-content  text-center overflow-hidden ">
        <span>
          <img
            src={imgUrl}
            className="rounded-full w-[220px] h-[220px] group-hover:w-[110px] group-hover:h-[110px] my-0 mx-auto teams-founder-image"
            alt={founderName}
          />
        </span>
        <span>
          <h4 className="my-2 font-[500]">{designation}</h4>
          <p className="my-2 font-[500]">{founderName}</p>
        </span>
      </div>
      <div className="text-center p-0 teams-content h-[0px] overflow-hidden transition-all  ease-in-out group-hover:p-2 group-hover:h-[100%]">
        <p className="text-[14px] font-[500]">{about}</p>
      </div>
    </div>
  );
};

export default Card;
