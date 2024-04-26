import React from "react";
import VideoComponent from "../components/Home/VideoComponent";
import LearnMore from "../components/global/LearnMore";
import person from "../assets/home/person.jpg";
import Service from "../components/Home/Service";
import Counter from "../components/Home/Counter";
import OutClient from "../components/Home/OutClient";
import ContactMail from "../components/Home/ContactMail";
import Tesimonials from "../components/Home/Tesimonials";

const Home = () => {
  return (
    <div>
      <VideoComponent />
      <div className="my-[50px]">
        <LearnMore title={"Learn More About Us"} img={person}>
          <div>
            <p className=" text-gray-500 text-[17px] md:text-[18px]">
              As the leading provider of Property Management Services, we very
              well understand the importance of managing the property. It is the
              ability to transfer the knowledge which will help the property to
              develop and maintain genuine competitive advantage.
            </p>
            <br />
            <p className="text-gray-500 text-[17px] md:text-[18px]">
              Our systems, processes and technology are unrivaled in the
              industry; we believe that it is our people and our constant
              ability to retain our talent pool that sets us apart from our
              competitors. Our commitment towards training and education ensures
              that our values and ethics permeate all levels of the firm. In
              emerging markets, there is no substitute for experience; over the
              past 10 years we have become the premier provider of quality real
              estate services to our clients
            </p>
            <div className="flex justify-end">
              <button
                className="bg-[#fd5d5d] px-10 py-2 text-[18px] text-white block mt-5"
                style={{
                  borderTopLeftRadius: "10px", // Adjust the value as needed
                  borderTopRightRadius: "10px", // Adjust the value as needed
                  borderBottomLeftRadius: "10px", // Adjust the value as needed
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </LearnMore>
        <Service />
        <Counter />
        <Tesimonials />
        <OutClient />
        <ContactMail />
      </div>
    </div>
  );
};

export default Home;
