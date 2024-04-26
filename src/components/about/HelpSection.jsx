import React from "react";
import customerCareImage from "../../assets/About/customerCare.jpg";
import Container from "../container/Container";

const HelpSection = () => {
  return (
    <div className="w-full bg-gray-100">
      <Container>
        <div className="w-full sm:flex sm:justify-between px-3 py-5">
          {/* left */}
          <div className="sm:w-[60%] p-2 sm:p-5">
            <h2 className="text-[18px] sm:text-[25px] font-[700]">
              PLEASE SEND US YOUR QUESTIONS AND WE CAN HELPYOU BETTER
            </h2>
            <button className="bg-[#fd5d5d] text-white py-2 px-12 mt-5 rounded-tl-lg rounded-tr-md rounded-br-2xl">
              {" "}
              Call Now
            </button>
          </div>
          {/* right */}
          <div className="w-[100%] sm:w-[30%] flex justify-center items-center mt-10 sm:mt-0">
            <img
              src={customerCareImage}
              className="w-[100%] mr-[5%] object-cover"
              alt="Customer Care..."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HelpSection;
