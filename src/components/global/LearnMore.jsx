import Container from "../container/Container";

const LearnMore = ({ title, img, children }) => {
  return (
    <Container>
      {title && (
        <div>
          <h1 className="text-[30px] font-[500]">{title}</h1>
          <div className="w-[100px] h-[10px] mt-2 mb-[8%] bg-[#fd5d5d]"></div>
        </div>
      )}

      <div className="w-full border-2 border-gray-300 lg:flex p-5">
        <div className="w-[100%] lg:w-[50%] flex justify-start items-center relative">
          {/* red background */}
          <div className="w-[70%] h-[50%] sm:h-[110%] bg-[#fd5d5d] z-[1] top-[-20px] left-[70px] sm:top-[-50px] sm:left-[100px] absolute"></div>
          <img
            src={img}
            className="w-[80%] lg:h-[125%] object-cover static z-[2] sm:mb-20"
            alt=""
          />
        </div>
        <div className="w-[100%] lg:w-[50%] mt-10 lg:mt-0 p-2 md:p-5">
          {children}
        </div>
      </div>
    </Container>
  );
};

export default LearnMore;
