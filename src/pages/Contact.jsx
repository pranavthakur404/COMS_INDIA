import Banner from "../components/global/Banner.jsx";
import Container from "../components/container/Container.jsx";
import ContactDetails from "../components/contact/ContactDetails.jsx";
import BottomSection from "../components/contact/BottomSection.jsx";
const Contact = () => {
  return (
    <div className="w-full">
      <Banner bannerText={"Contact Us"} />
      {/* contact section */}
      <Container>
        <ContactDetails />
        <BottomSection />
      </Container>
    </div>
  );
};

export default Contact;
