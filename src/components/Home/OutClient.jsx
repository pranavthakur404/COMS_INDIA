import React from "react";
import Container from "../container/Container";
import SectionHeading from "../global/SectionHeading";
import bgImage from "../../assets/home/handshake.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../../assets/home/logo.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OutClient = () => {
  return (
    <div className="mt-[50px]">
      <Container>
        <SectionHeading title={"Our Clients"} />
        <div
          className="w-full py-10 h-[300px] relative"
          style={{
            backgroundImage: `url(${bgImage})`, // Set background image using inline style
            backgroundSize: "cover", // Adjust background size as needed
            backgroundPosition: "center", // Adjust background position as needed
          }}
        >
          <span className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></span>
          <div className="w-[90%] bg- py-3 px-3 bg-white and bg-opacity-50 text-white my-0 mx-auto absolute left-[5%] bottom-[-20px]">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full">
                  <img
                    src={logo}
                    className="block my-0 w-[150px] mx-auto"
                    alt={"logo"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    src={logo}
                    className="block my-0 w-[150px] mx-auto"
                    alt={"logo"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    src={logo}
                    className="block my-0 w-[150px] mx-auto"
                    alt={"logo"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    src={logo}
                    className="block my-0 w-[150px] mx-auto"
                    alt={"logo"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    src={logo}
                    className="block my-0 w-[150px] mx-auto"
                    alt={"logo"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    src={logo}
                    className="block my-0 w-[150px] mx-auto"
                    alt={"logo"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    src={logo}
                    className="block my-0 w-[150px] mx-auto"
                    alt={"logo"}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OutClient;
