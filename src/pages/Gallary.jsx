import Banner from "../components/global/Banner";
import Container from "../components/container/Container";
import img1 from "../assets/About/gallaryImg1.jpg";
import GallaryCard from "../components/global/GallaryCard";

const gallaryData = [
  {
    id: 1,
    name: "Mr Shubham verma",
    img: img1,
  },
  {
    id: 2,
    name: "Mr Shubham verma",
    img: img1,
  },
  {
    id: 3,
    name: "Mr Shubham verma",
    img: img1,
  },
  {
    id: 4,
    name: "Mr Shubham verma",
    img: img1,
  },
  {
    id: 5,
    name: "Mr Shubham verma",
    img: img1,
  },
  {
    id: 6,
    name: "Mr Shubham verma",
    img: img1,
  },
  {
    id: 7,
    name: "Mr Shubham verma",
    img: img1,
  },
  {
    id: 8,
    name: "Mr Shubham verma",
    img: img1,
  },
  {
    id: 9,
    name: "Mr Shubham verma",
    img: img1,
  },
];

const Gallary = () => {
  return (
    <div className="w-full">
      <Banner bannerText="Gallery" />
      <Container>
        <div className="w-full gallary-main-section py-[5%]">
          {gallaryData.map((data) => {
            return <GallaryCard key={data.id} {...data} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Gallary;
