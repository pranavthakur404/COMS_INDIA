import bgImage from "../../assets/Banner/banner.jpg";

const Banner = ({ bannerText }) => {
  return (
    <div
      className="w-full flex justify-center items-center relative px-2 py-[8%]"
      style={{
        backgroundImage: `url(${bgImage})`, // Set background image using inline style
        backgroundSize: "cover", // Adjust background size as needed
        backgroundPosition: "center", // Adjust background position as needed
      }}
    >
      <span className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></span>
      <div className="py-[2%] px-[7%] bg-white static z-[1] text-[30px] text-red-700 font-bold">
        {bannerText}
      </div>
    </div>
  );
};

export default Banner;
