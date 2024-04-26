import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Navlinks = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-baseline space-x-4">
        <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="text-black maga-menu-nav hover:bg-[#ef4444] relative transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
          <NavLink to="/services" className="flex gap-1 items-center">
            Services <FaAngleDown />
          </NavLink>
          <div className="w-[180px] mega-menu-item p-3 absolute z-10 top-10 flex justify-between gap-5 bg-white shadow-xl rounded-lg">
            <ul>
              <li className="my-2">
                <NavLink className="text-black text-[14px]">Link1</NavLink>
              </li>
              <li className="my-2">
                <NavLink className="text-black text-[14px]">Link 2</NavLink>
              </li>
              <li className="my-2">
                <NavLink className="text-black text-[14px]">Link3</NavLink>
              </li>
            </ul>
            <ul>
              <li className="my-2">
                <NavLink className="text-black text-[14px]">Link1</NavLink>
              </li>
              <li className="my-2">
                <NavLink className="text-black text-[14px]">Link 2</NavLink>
              </li>
              <li className="my-2">
                <NavLink className="text-black text-[14px]">Link3</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
          <NavLink to="/complaience">Complaince</NavLink>
        </li>
        <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
          <NavLink to="/teams">Core Team</NavLink>
        </li>
        <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
          <NavLink to="/career">Career</NavLink>
        </li>
        <li className="text-black hover:bg-[#ef4444] transition-colors hover:text-white px-3 duration-500 py-2 rounded-md text-[16px] font-medium">
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
