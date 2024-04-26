import SectionHeading from "../../components/global/SectionHeading";
import Container from "../container/Container";
import img1 from "../../assets/About/gallaryImg1.jpg";
import img2 from "../../assets/About/gallaryImg2.jpg";
import img3 from "../../assets/About/gallaryImg3.jpg";
import { NavLink } from "react-router-dom";

const GalarySection = () => {
  return (
    <Container>
      <div className="w-full mt-[50px] flex items-center justify-between">
        <SectionHeading title={"Gallary"} />
        <NavLink to="/gallary">
          <button className="bg-[#fd5d5d] text-white py-2 px-12 rounded-tl-lg rounded-tr-md rounded-br-2xl">
            View All
          </button>
        </NavLink>
      </div>
      <div className="w-full sm:flex sm:justify-between mt-10">
        <div className="w-[90%] my-0 mx-auto sm:w-[33.33%] cursor-grab gallarymainBox relative">
          <img src={img1} className="w-full h-[100%] object-cover" alt="" />
          <span className="bg-[rgba(0,0,0,0.5)] inset-0 overlay absolute"></span>
          <div className="w-[80%] left-2 content rounded-md absolute bottom-2 bg-white py-3 font-bold p-2">
            Mr Shubham Verma
          </div>
        </div>
        <div className="w-[90%] my-0 mx-auto sm:w-[33.33%] gallarymainBox cursor-grab relative">
          <img src={img2} className="w-full h-[100%] object-cover" alt="" />
          <span className="bg-[rgba(0,0,0,0.5)] inset-0 overlay absolute"></span>
          <div className="w-[80%] left-2 content rounded-md absolute bottom-2 bg-white py-3 font-bold p-2">
            Ms Neha Verma
          </div>
        </div>
        <div className="w-[90%] my-0 mx-auto sm:w-[33.33%] gallarymainBox cursor-grab relative">
          <img src={img3} className="w-full h-[100%] object-cover" alt="" />
          <span className="bg-[rgba(0,0,0,0.5)] inset-0 overlay absolute"></span>
          <div className="w-[80%] left-2 content rounded-md absolute bottom-2 bg-white py-3 font-bold p-2">
            Mr Rohit Negi
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GalarySection;
