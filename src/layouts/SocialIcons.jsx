import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-between">
      <a href="#" className="hover:text-[#ef4444]">
        <RiInstagramFill className="text-[30px]" />
      </a>
      <a
        href="#"
        className="hover:text-[#ef4444] cursor-pointer duration-500 transition-colors	"
      >
        <FaTwitter className="text-[30px]" />
      </a>
      <a
        href="#"
        className="hover:text-[#ef4444] cursor-pointer duration-500 transition-colors	"
      >
        <FaFacebook className="text-[30px]" />
      </a>
      <a
        href="#"
        className="hover:text-[#ef4444] cursor-pointer duration-500 transition-colors	"
      >
        <FaYoutube className="text-[30px]" />
      </a>
    </div>
  );
};

export default SocialIcons;
