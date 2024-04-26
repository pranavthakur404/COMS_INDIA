import Banner from "../components/global/Banner";
import AboutDetails from "../components/about/AboutDetails";
import Contact from "../components/about/Contact";
import ChooseUs from "../components/about/ChooseUs";
import HelpSection from "../components/about/HelpSection";
import GalarySection from "../components/about/GalarySection";

const About = () => {
  return (
    <div>
      <Banner bannerText={"About Us"} />
      <AboutDetails />
      <Contact />
      <ChooseUs />
      <HelpSection />
      <GalarySection />
    </div>
  );
};

export default About;
