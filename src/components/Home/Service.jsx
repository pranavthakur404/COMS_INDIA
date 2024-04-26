import Container from "../container/Container";
import React from "react";
import person from "../../assets/home/person.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 0,
    image: person,
    title: "Security",
  },
  {
    id: 1,
    image: person,
    title: "Housekeeping",
  },
  {
    id: 3,
    image: person,
    title: "Security",
  },
  {
    id: 4,
    image: person,
    title: "Security",
  },
  {
    id: 5,
    image: person,
    title: "Security",
  },
  {
    id: 6,
    image: person,
    title: "Security",
  },
];

const Service = () => {
  return (
    <div className="mt-[50px]">
      <Container>
        <div>
          <h1 className="text-[30px] font-[500]">
            We Provide Best Consultancy
          </h1>
          <div className="w-[100px] h-[10px] mt-2 mb-[3%] bg-[#fd5d5d]"></div>
        </div>
        <div className="w-full">
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {data &&
              data.map((list) => {
                return (
                  <SwiperSlide>
                    <div className="w-full p-1 border-2 border-[#fd5d5d]">
                      <img src={person} alt="" />
                      <div className="px-3">
                        <h4 className="sm:text-[24px] my-2 ">{list.title}</h4>
                        <button className="text-[18px] flex items-center gap-2 mb-3 text-red-500">
                          know more <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Service;
