import SectionHeading from "../global/SectionHeading";
import Container from "../container/Container";
import CountUp from "react-countup";
import counterBg from "../../assets/home/countbg.png";

const Counter = () => {
  return (
    <div className="w-full mt-[50px]">
      <Container>
        <SectionHeading title="We Love What We Do"></SectionHeading>
        <div
          className="w-full text-center py-[5%] px-5"
          style={{
            backgroundImage: `url(${counterBg})`, // Set background image using inline style
            backgroundSize: "cover", // Adjust background size as needed
            backgroundPosition: "center", // Adjust background position as needed
          }}
        >
          <div className="sm:w-[60%] my-0 mx-auto text-white">
            <h3 className="sm:text-[21px] font-[500]">
              "Empowering Properties, Elevating Potential: <br /> Where
              Knowledge Builds Advantage."
            </h3>
            <p className="text-[14px] my-5">
              As the leading provider of Property Management Services, we very
              well understand the importance of managing the property. It is the
              ability to transfer the knowledge which will help the property to
              develop and maintain genuine competitive advantage.
            </p>
            {/* counter box */}
            <div className="sm:flex flex-wrap lg:flex-nowrap justify-between mt-10">
              <div className="text-center mb-5 w-[70%] my-0 mx-auto sm:w-[45%] bg-white text-black py-2 lg:w-[32%] border relative">
                <span></span>
                <CountUp
                  start={0}
                  end={280}
                  suffix="+"
                  className="text-[20px] sm:text-[40px]"
                />
                <h3 className="text-[14px] sm:text-[22px] font-[400]">
                  Projects
                </h3>
              </div>
              <div className="text-center mb-5 w-[70%] my-0 mx-auto sm:w-[45%] bg-white text-black py-2 lg:w-[32%] border relative">
                <span></span>
                <CountUp
                  start={0}
                  end={280}
                  className="text-[20px] sm:text-[40px]"
                  suffix="+"
                />
                <h3 className="text-[14px] sm:text-[22px] font-[400]">
                  USER'S COMMENTS
                </h3>
              </div>
              <div className="text-center mb-5 w-[70%] my-0 mx-auto sm:w-[45%] bg-white text-black py-2 lg:w-[32%] border relative">
                <span></span>
                <CountUp
                  start={0}
                  end={280}
                  className="text-[20px] sm:text-[40px]"
                  suffix="+"
                />
                <h3 className="text-[14px] sm:text-[20px] font-[400]">
                  HAPPY CLIENTS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Counter;
