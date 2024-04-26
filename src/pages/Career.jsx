import Banner from "../components/global/Banner";
import Card from "../components/carrer/Card";
import Container from "../components/container/Container";

const Career = () => {
  const data = [
    {
      id: 1,
      title: "Assitance manager purchase",
      img: "https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.jpg?s=612x612&w=0&k=20&c=pRFt-m6Af60XAp2saRz4LtFjB6qBfRFki3Tf3c-4xtw=",
    },
    {
      id: 2,
      title: "Assitance manager purchase",
      img: "https://t3.ftcdn.net/jpg/03/28/82/42/360_F_328824244_h8ln41Hd3sh985TASxWVMmZ2w5LYSYvz.jpg",
    },
    {
      id: 3,
      title: "Assitance manager purchase",
      img: "https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.jpg?s=612x612&w=0&k=20&c=pRFt-m6Af60XAp2saRz4LtFjB6qBfRFki3Tf3c-4xtw=",
    },
    {
      id: 4,
      title: "Assitance manager purchase",
      img: "https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-640x427.jpg",
    },
    {
      id: 5,
      title: "Assitance manager purchase",
      img: "https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.jpg?s=612x612&w=0&k=20&c=pRFt-m6Af60XAp2saRz4LtFjB6qBfRFki3Tf3c-4xtw=",
    },
    {
      id: 6,
      title: "Assitance manager purchase",
      img: "https://t3.ftcdn.net/jpg/03/28/82/42/360_F_328824244_h8ln41Hd3sh985TASxWVMmZ2w5LYSYvz.jpg",
    },
    {
      id: 7,
      title: "Assitance manager purchase",
      img: "https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.jpg?s=612x612&w=0&k=20&c=pRFt-m6Af60XAp2saRz4LtFjB6qBfRFki3Tf3c-4xtw=",
    },
    {
      id: 8,
      title: "Assitance manager purchase",
      img: "https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-640x427.jpg",
    },
  ];
  return (
    <div className="w-full">
      <Banner bannerText="Career" />
      <Container>
        <div className="carrer-main-section py-[10%]">
          {data.map((list) => {
            return <Card key={list.id} {...list} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Career;
