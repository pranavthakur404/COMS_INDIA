import Banner from "../components/global/Banner";
import Card from "../components/teams/Card";
import Container from "../components/container/Container";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Teams = () => {
  const data = [
    {
      id: 1,
      founderName: "Mr Sumit Sharma",
      designation: "Founder",
      imgUrl:
        "https://cactikariy.pe/wp-content/uploads/2022/05/single-team.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      founderName: "Mr Sumit Sharma",
      designation: "Founder",
      imgUrl:
        "https://cactikariy.pe/wp-content/uploads/2022/05/single-team.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 3,
      founderName: "Mr Sumit Sharma",
      designation: "Founder",
      imgUrl:
        "https://cactikariy.pe/wp-content/uploads/2022/05/single-team.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 4,
      founderName: "Mr Sumit Sharma",
      designation: "Founder",
      imgUrl:
        "https://cactikariy.pe/wp-content/uploads/2022/05/single-team.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 5,
      founderName: "Mr Sumit Sharma",
      designation: "Founder",
      imgUrl:
        "https://cactikariy.pe/wp-content/uploads/2022/05/single-team.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 6,
      founderName: "Mr Sumit Sharma",
      designation: "Founder",
      imgUrl:
        "https://cactikariy.pe/wp-content/uploads/2022/05/single-team.jpg",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  return (
    <div className="w-full">
      <Banner bannerText={"Teams"}></Banner>
      <Container>
        {/* <div className="w-full teams-main-section mt-[50px]">
          {data.map((list) => {
            return <Card key={list.id} {...list}></Card>;
          })}
        </div> */}
        <div className="py-[5%]">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {data.map((list) => {
                return <Card key={list.id} {...list}></Card>;
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Container>
    </div>
  );
};

export default Teams;
