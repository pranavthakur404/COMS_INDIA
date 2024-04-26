import React from "react";
import Container from "../container/Container";
import SectionHeading from "../global/SectionHeading";

const ContactMail = () => {
  return (
    <div>
      <Container>
        <div className="w-full py-[5%] bg-[#fd5d5d] mt-[5%]">
          <div className="w-[70%] my-0 mx-auto text-center text-white">
            <p className="text-[28px]">Start a New Project</p>
            <p className="font-bold text-[30px]">LET'S GROW YOUR</p>
            <p className="font-bold text-[30px]"> CREATION, TOGETHER</p>
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="max-w-[500px] h-[50px] bg-white bg-opacity-50 flex my-0 mx-auto mt-5 justify-between rounded-lg"
            >
              <input
                type="text"
                className="bg-transparent py-2 px-2 outline-none w-full placeholder-gray-500"
                placeholder="Type Email"
              />
              <button className="bg-white py-2 px-7 font-[500] my-0 mx-auto text-black rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactMail;
