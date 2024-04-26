import Banner from "../components/global/Banner";
import TopHeading from "../components/Complaience/TopHeading";
import Container from "../components/container/Container";
import ActionBox1 from "../components/Complaience/ActionBox1";
import ActionBox2 from "../components/Complaience/ActionBox2";

const Complaience = () => {
  return (
    <div className="w-full">
      <Banner bannerText={"Compliance"} />
      <Container>
        <TopHeading></TopHeading>
        <div className="w-full sm:w-[70%] my-0 mx-auto">
          <ActionBox1></ActionBox1>
          <ActionBox2></ActionBox2>
        </div>
      </Container>
    </div>
  );
};

export default Complaience;
