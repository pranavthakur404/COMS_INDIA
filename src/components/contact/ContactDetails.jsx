import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="w-full md:flex md:justify-between md:items-center mt-[50px]">
      {/* left */}
      <div className="w-full md:w-[40%]">
        <h2 className="text-[28px] font-bold">Get In Touch</h2>
        <p className="text-[15px] mt-3 font-[600]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad
          minim veniam
        </p>
      </div>
      {/* right */}
      <div className="w-full md:w-[60%] mt-10 md:mt-0 flex justify-center gap-10 contact-details-box-container">
        {/* box */}
        <div className="text-center border-2 box border-gray-200 w-[40%] py-5 rounded-md shadow-lg relative px-2">
          <span className="block md:p-4 p-5 rounded-full border border-red-600 absolute top-[-20px] bg-white left-[-25px]">
            <FaMapMarkerAlt className="text-red-600 text-[18px] lg:text-[25px]" />
          </span>
          <h4 className="text-[20px] font-[500]">Address</h4>
          <p className="text-gray-500 mt-2">
            Logix Techno Park <br /> Sector-127, Noida, Uttar <br />
            Pradesh-India
          </p>
        </div>
        <div className="text-center border-2 box border-gray-200 w-[40%] py-5 rounded-md shadow-lg relative px-2">
          <span className="block p-4 lg:p-5 rounded-full border border-red-600 absolute top-[-20px] bg-white left-[-25px]">
            <FaPhoneAlt className="text-red-600 text-[18px] lg:text-[25px]" />
          </span>
          <h4 className="text-[20px] font-[500]">Contact Details</h4>
          <p className="text-gray-500 mt-2">Info@comsindia.in</p>
          <p className="text-gray-500">0120 - 4377246</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
