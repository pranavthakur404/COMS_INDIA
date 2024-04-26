import Banner from "../components/global/Banner";
import Card from "../components/global/Card";
import Container from "../components/container/Container";

const Services = () => {
  const serviceSectionData = [
    {
      id: 1,
      title: "Security",
      img: "https://img.freepik.com/free-photo/professional-cleaning-service-person-using-vacuum-cleaner-office_23-2150520594.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713139200&semt=ais",
    },
    {
      id: 2,
      title: "HouseKeeping",
      img: "https://www.prolinerangehoods.com/blog/wp-content/uploads/2022/12/What-Is-Included-In-A-Professional-House-Cleaning-Checklist-Included.jpg",
    },
    {
      id: 3,
      title: "HouseKeeping",
      img: "https://www.prolinerangehoods.com/blog/wp-content/uploads/2022/12/What-Is-Included-In-A-Professional-House-Cleaning-Checklist-Included.jpg",
    },
    {
      id: 4,
      title: "HouseKeeping",
      img: "https://www.prolinerangehoods.com/blog/wp-content/uploads/2022/12/What-Is-Included-In-A-Professional-House-Cleaning-Checklist-Included.jpg",
    },
    {
      id: 5,
      title: "Security",
      img: "https://img.freepik.com/free-photo/professional-cleaning-service-person-using-vacuum-cleaner-office_23-2150520594.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713139200&semt=ais",
    },
    {
      id: 6,
      title: "HouseKeeping",
      img: "https://www.prolinerangehoods.com/blog/wp-content/uploads/2022/12/What-Is-Included-In-A-Professional-House-Cleaning-Checklist-Included.jpg",
    },
    {
      id: 7,
      title: "HouseKeeping",
      img: "https://www.prolinerangehoods.com/blog/wp-content/uploads/2022/12/What-Is-Included-In-A-Professional-House-Cleaning-Checklist-Included.jpg",
    },
    {
      id: 8,
      title: "HouseKeeping",
      img: "https://www.prolinerangehoods.com/blog/wp-content/uploads/2022/12/What-Is-Included-In-A-Professional-House-Cleaning-Checklist-Included.jpg",
    },
    {
      id: 9,
      title: "HouseKeeping",
      img: "https://www.prolinerangehoods.com/blog/wp-content/uploads/2022/12/What-Is-Included-In-A-Professional-House-Cleaning-Checklist-Included.jpg",
    },
  ];
  return (
    <div className="w-full">
      <Banner bannerText="Services" />
      <Container>
        <div className="w-full service-main-section py-[7%]">
          {serviceSectionData.map((data) => {
            return <Card key={data.id} {...data} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Services;
