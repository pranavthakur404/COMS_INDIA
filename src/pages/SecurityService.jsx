import Banner from "../components/global/Banner";
import LearnMore from "../components/global/LearnMore";
import { FaCheckCircle } from "react-icons/fa";
import BottomSection from "../components/security-service/bottomSection";

const SecurityService = () => {
  return (
    <div>
      <Banner bannerText="Security Service" />
      <div className="mt-[10%]">
        <LearnMore
          title=""
          img="https://xpressguards.com/wp-content/uploads/2023/03/Security-Guard-Employment-Opportunities.jpg"
        >
          <div className="w-full">
            <p className="font-bold mb-5">
              Ensure Safety & Security of Entire facility 24 X 7
            </p>
            <ul className="leading-10">
              <li className="flex gap-5 items-center">
                <FaCheckCircle className="text-[#fd5d5d]" />
                <span className="text-gray-500">Physical Security.</span>
              </li>
              <li className="flex gap-5 items-center">
                <FaCheckCircle className="text-[#fd5d5d]" />
                <span className="text-gray-500">Patrolling of Facility</span>
              </li>
              <li className="flex gap-5 items-center">
                <FaCheckCircle className="text-[#fd5d5d]" />
                <span className="text-gray-500">
                  Securing all Entry & Exits of the facility
                </span>
              </li>
              <li className="flex gap-5 items-center">
                <FaCheckCircle className="text-[#fd5d5d]" />
                <span className="text-gray-500">
                  Frisking of employees/visitors.
                </span>
              </li>
              <li className="flex gap-5 items-center">
                <FaCheckCircle className="text-[#fd5d5d]" />
                <span className="text-gray-500">Physical Security</span>
              </li>
              <li className="flex gap-5 items-center">
                <FaCheckCircle className="text-[#fd5d5d]" />
                <span className="text-gray-500">Patrolling of Facility</span>
              </li>
              <li className="flex gap-5 items-center">
                <FaCheckCircle className="text-[#fd5d5d]" />
                <span className="text-gray-500">
                  Securing all Entry & Exits of the facility.
                </span>
              </li>
              <li className="flex gap-5 items-center">
                <FaCheckCircle className="text-[#fd5d5d]" />
                <span className="text-gray-500">
                  Frisking of employees/visitors
                </span>
              </li>
            </ul>
            <button className="bg-[#fd5d5d] text-white py-2 px-12 mt-5 rounded-tl-lg rounded-tr-md rounded-bl-2xl">
              Call Now
            </button>
          </div>
        </LearnMore>
      </div>
      <BottomSection />
    </div>
  );
};

export default SecurityService;
