import React from "react";
import Container from "../container/Container";
import teamMeeting from "../../assets/About/section1.jpg";

const AboutDetails = () => {
  return (
    <div className="w-full mt-[50px]">
      <Container>
        <div className="w-full  lg:flex p-5">
          <div className="w-[100%] lg:w-[50%] flex justify-start items-center relative">
            {/* red background */}
            <div className="w-[70%] h-[50%] sm:h-[80%] bg-[#fd5d5d] z-[1] left-[70px] sm:top-[90px] sm:left-[-10px] absolute"></div>
            <img
              src={teamMeeting}
              className="w-[100%] sm:w-[90%] lg:h-[100%] object-cover static sm:ml-10 z-[2]"
              alt=""
            />
          </div>
          <div className="w-[100%] mt-5 lg:w-[50%] sm:mt-10 lg:mt-0 sm:p-2 md:p-5">
            <div>
              <h3 className="text-[27px] font-bold text-red-500">
                About The Company
              </h3>
              <p className="text-[14px] sm:text-[16px] py-3">
                As the leading provider of Property Management Services, we very
                well understand the importance of managing the property. It is
                the ability to transfer the knowledge which will help the
                property to develop and maintain genuine competitive advantage.
              </p>
              <p className="text-[14px] sm:text-[16px] py-3">
                Our systems, processes and technology are unrivaled in the
                industry; we believe that it is our people and our constant
                ability to retain our talent pool that sets us apart from our
                competitors. Our commitment towards training and education
                ensures that our values and ethics permeate all levels of the
                firm. In emerging markets, there is no substitute for
                experience; over the past 10 years we have become the premier
                provider of quality real estate services to our clients
              </p>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="w-full sm:flex sm:justify-end">
          <div className="w-full sm:w-[70%] py-5 px-5 bg-[#fd5d5d] text-[14px] sm:text-[16px] text-white">
            COMS Group has proposed management team apexes by senior staff with
            the objective of building the foundations for growth whilst
            establishing Best Practice Systems and processes in all aspects of
            the Property Management Cycle right from transition phase. We have
            qualified engineers and domain experts who ensure that every minute
            component of the process of services are captured and
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutDetails;
