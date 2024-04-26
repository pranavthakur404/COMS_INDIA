import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/container/Container";
import MobileNav from "./MobileNav";
import Overlay from "./Overlay";
import { GiHamburgerMenu } from "react-icons/gi";
import Navlinks from "./Navlinks";

const Header = () => {
  // state for handle state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-stone-100">
        <Container>
          <div className="h-[70px] flex items-center justify-between">
            <div>
              <h1 className="text-[30px] font-bold">COMS</h1>
            </div>
            <Navlinks />
            <span className="block lg:hidden">
              <GiHamburgerMenu
                className="text-[30px] hover:text-[#ef4444] transition-colors cursor-pointer"
                onClick={() => {
                  setIsMobileNavOpen(true);
                }}
              />
            </span>
          </div>
          <div className="text-center"></div>
        </Container>
      </div>
      {isMobileNavOpen && <Overlay />}
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
    </>
  );
};

export default Header;
