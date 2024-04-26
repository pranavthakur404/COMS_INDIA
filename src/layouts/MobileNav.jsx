import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const MobileNav = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  const [serviceChild, setServiceChild] = useState(false);

  return createPortal(
    <div
      className={`w-[300px] max-w-[100%] h-[100vh] fixed ${
        isMobileNavOpen ? "left-0" : "left-[-300px]"
      }  top-0  z-[12] bg-white overflow-y-auto duration-500`}
    >
      <div className="w-full p-2 flex justify-between items-center  font-bolder">
        <h1 className="text-[30px] font-bold">COMS</h1>
        <AiOutlineClose
          className="text-[18px] cursor-pointer"
          onClick={() => {
            setIsMobileNavOpen(false);
          }}
        />
      </div>
      <div className="py-2 px-2">
        <nav>
          <ul className="flex flex-col ">
            <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
              <NavLink
                to="/about"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
              >
                About
              </NavLink>
            </li>
            <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] .mobile-menu-link relative font-medium">
              <NavLink
                to="/services"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
                className="flex items-center justify-between"
              >
                Services <FaAngleDown className="cursor-pointer" />
              </NavLink>
              <span
                className="trigger block absolute w-full h-[38px] top-0"
                onClick={() => {
                  setServiceChild((prevState) => {
                    return !prevState;
                  });
                }}
              ></span>
              <div
                className={`w-full p-3 mobile-menu-item z-10 top-10  shadow-xl rounded-lg ${
                  serviceChild && "active"
                }`}
              >
                <ul>
                  <li className="my-2">
                    <NavLink className="text-black hover:text-white text-[14px]">
                      Link1
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink className="text-black hover:text-white text-[14px]">
                      Link2
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink className="text-black hover:text-white text-[14px]">
                      Link3
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li className="my-2">
                    <NavLink className="text-black hover:text-white text-[14px]">
                      Link1
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink className="text-black hover:text-white text-[14px]">
                      Link2
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink className="text-black hover:text-white text-[14px]">
                      Link3
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
              <NavLink
                to="/projects"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
              >
                Projects
              </NavLink>
            </li>
            <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
              <NavLink
                to="/complaience"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
              >
                Complaince
              </NavLink>
            </li>
            <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
              <NavLink
                to="/teams"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
              >
                Core Team
              </NavLink>
            </li>
            <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
              <NavLink
                to="/career"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
              >
                Career
              </NavLink>
            </li>
            <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
              <NavLink
                to="/contact"
                onClick={() => {
                  setIsMobileNavOpen(false);
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>,
    document.getElementById("mobileOverlay")
  );
};

export default MobileNav;
