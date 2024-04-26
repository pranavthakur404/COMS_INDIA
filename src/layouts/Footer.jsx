import React from "react";
import Container from "../components/container/Container";
import SocialIcons from "./SocialIcons";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black py-10 mt-10 text-white">
        <Container>
          <div>
            {/* logo */}
            <div className="w-full">
              <h1 className="font-bold text-white text-[30px] mb-3">COMS</h1>
              {/* four Container */}
              <div className="sm:flex sm:flex-wrap lg:flex justify-between">
                <div className="sm:w-[50%] mb-5 md:mb-10 lg:w-[35%]">
                  <p className="text-[21px]">
                    Online Drafting-Notarising-Registration of Documents & Legal
                    Advice at one Platfor
                  </p>
                  <div className="w-[50%] my-5">
                    <SocialIcons />
                  </div>
                  <button
                    className="bg-[#fd5d5d] px-10 py-2 text-[20px] my-5"
                    style={{
                      borderTopLeftRadius: "10px", // Adjust the value as needed
                      borderTopRightRadius: "10px", // Adjust the value as needed
                      borderBottomRightRadius: "10px", // Adjust the value as needed
                    }}
                  >
                    Call Now
                  </button>
                </div>
                <div className="sm:w-[50%] mb-5 lg:w-[18%]">
                  <h3 className="text-[20px] mb-3">Quick Links</h3>
                  <p className="mb-2">
                    <a
                      href="#"
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      s
                    >
                      <MdKeyboardDoubleArrowRight /> Blog
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> FAQs
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> Payment
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> Shipment
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight />
                      Where is my order ?
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> Return Policy
                    </a>
                  </p>
                </div>
                <div className="sm:w-[50%] mb-5 lg:w-[18%]">
                  <h3 className="text-[20px] mb-3">Services</h3>
                  <p className="mb-2">
                    <a
                      href="#"
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      s
                    >
                      <MdKeyboardDoubleArrowRight /> House
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> Security
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight />
                      Fleet Management
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> Driver Services
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> STP & WTP
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight />
                      Waste Management
                    </a>
                  </p>
                </div>
                <div className="sm:w-[50%] mb-5 lg:w-[18%]">
                  <h3 className="text-[20px] mb-3">Services</h3>
                  <p className="mb-2">
                    <a
                      href="#"
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      s
                    >
                      <MdKeyboardDoubleArrowRight /> House
                    </a>
                  </p>
                  <p className="mb-2">
                    <NavLink
                      to="/security-service"
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                    >
                      <MdKeyboardDoubleArrowRight /> Security
                    </NavLink>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight />
                      Fleet Management
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> Driver Services
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight /> STP & WTP
                    </a>
                  </p>
                  <p className="mb-2">
                    <a
                      className="text-slate-200 flex items-center gap-2 hover:text-[#fd5d5d] cursor-pointer duration-500 transition-[margin] hover:ml-2"
                      href="#"
                    >
                      <MdKeyboardDoubleArrowRight />
                      Waste Management
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{
          background: "linear-gradient(to right, #ef4444, black)",
          padding: "20px 0px",
        }}
      >
        <Container>
          <p className=" text-white">&copy; coms.in All rights reserved.</p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
