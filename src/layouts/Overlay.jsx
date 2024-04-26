import React from "react";
import { createPortal } from "react-dom";

const Overlay = () => {
  return createPortal(
    <div
      className={`w-[100%] h-[100vh] bg-[rgba(0,0,0,0.9)]  fixed inset top-0 left-0 z-[10]`}
    ></div>,
    document.getElementById("overlay")
  );
};

export default Overlay;
