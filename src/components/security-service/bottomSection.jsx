import Container from "../container/Container";
import img from "../../assets/About/section1.jpg";
import PropertyManagement from "../../components/about/PropertyManagement";

const propertyData = [
  {
    id: 1,
    title: "Timly Service",
    desc: "We provide best property management system",
  },
  {
    id: 2,
    title: "Qualified Staff",
    desc: "We provide best property management system",
  },
  {
    id: 3,
    title: "Trusted Company",
    desc: "We provide best property management system",
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "We provide best property management system",
  },
];

const BottomSection = () => {
  return (
    <div className="w-full mt-[50px]">
      <Container>
        <div className="w-full  sm:flex justify-between py-10">
          {/* left */}
          <div className="w-full sm:w-[45%]">
            <h3 className="text-[30px] font-[600]">
              We have everything you need
            </h3>
            <p className="text-[14px] my-5">
              Our systems, processes and technology are unrivaled in the
              industry; we believe that it is our people and our constant
              ability to retain our talent pool that sets us apart from our
              competitors. Our commitment towards training and education ensures
              that our values and ethics permeate all levels of the firm. In
              emerging markets, there is no substitute for experience.
            </p>
            <div className="relative">
              <img
                src={img}
                className="w-full static object z-[2]"
                alt="Teams"
              />

              <div className="w-[70%] h-[50%] sm:h-[50%]  z-[-1] bg-[#fd5d5d] right-[-10px] right-0 sm:right-[-50px] bottom-[-20px] absolute"></div>
            </div>
          </div>
          {/* right */}
          <div className="w-full mt-10 sm:mt-0 sm:w-[45%]">
            <div className="w-[100%] sm:w-[80%] border border-gray-200 p-5 lg:p-14 my-0 mx-auto">
              {propertyData.map((data) => {
                return <PropertyManagement key={data.id} {...data} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomSection;
