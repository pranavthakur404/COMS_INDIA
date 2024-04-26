import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full md:max-w-[1180px]  lg:max-w-[1250px] px-5 my-0 mx-auto">
      {children}
    </div>
  );
};

export default Container;
