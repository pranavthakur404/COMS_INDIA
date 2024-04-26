import React from "react";
import SectionHeading from "../global/SectionHeading";
import Container from "../container/Container";
import bgImage from "../../assets/home/testmonials.jpg";
import person from "../../assets/home/testimonialsPerson.jpg";
import { FaQuoteRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Tesimonials = () => {
  return (
    <div className="w-full mt-[50px]">
      <Container>
        <div className="w-full">
          <SectionHeading title="Testimonials" />
        </div>
        <div className="w-full border-2 border-gray-300 lg:flex p-5">
          <div className="w-[100%] lg:w-[50%] flex justify-start items-center relative">
            {/* red background */}
            <div className="w-[70%] h-[50%] sm:h-[80%] bg-[#fd5d5d] z-[1] left-[70px]  sm:left-[-10px] absolute"></div>
            <img
              src={bgImage}
              className="w-[100%] sm:w-[90%] lg:h-[100%] object-cover static sm:ml-10 z-[2]"
              alt=""
            />
          </div>
          <div className="w-[100%] mt-5 lg:w-[50%] sm:mt-10 lg:mt-0 sm:p-2 md:p-5">
            <div>
              <h3 className="text-[25px] font-bold">Our Happy clients</h3>
              <p className="text-[14px] sm:text-[16px] py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <p className="text-[14px] sm:text-[16px] py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="w-full mt-6 ">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="w-full p-3 sm:p-5 bg-[#fd5d5d] rounded-xl shadow">
                    <div className="flex justify-between items-center px-3">
                      <img
                        src={person}
                        className="w-[100px] rounded-[100%] gap-2 sm:px-3"
                        alt="Name"
                      />
                      <FaQuoteRight className="text-[35px]" />
                    </div>
                    <div className="py-5">
                      <p className="text-white text-[13px] sm:text-[16px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, bu
                      </p>
                      <p className="mt-3 text-white text-[14px]">
                        <span className="font-bold">P.Rajendra Prasad</span>
                        <span className="ml-3">Customer</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full p-3 sm:p-5 bg-[#fd5d5d] rounded-xl shadow">
                    <div className="flex justify-between items-center gap-2 sm:px-3">
                      <img
                        src={person}
                        className="w-[100px] rounded-[100%]"
                        alt="Name"
                      />
                      <FaQuoteRight className="text-[35px]" />
                    </div>
                    <div className="py-5">
                      <p className="text-white text-[13px] sm:text-[16px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, bu
                      </p>
                      <p className="mt-3 text-white text-[14px]">
                        <span className="font-bold">P.Rajendra Prasad</span>
                        <span className="ml-3">Customer</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tesimonials;
