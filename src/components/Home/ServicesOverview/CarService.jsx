import {
  CarServicesContainer,
  ServiceItemBox,
  ServiceItemContainer,
  ServiceItemDescription,
  ServiceItemHeading,
  ServiceItemIcon,
  ServiceItemIconContainer,
} from "../../mui/ServiceOverviewPckgs";

import CarCheckIcon from "../../../../public/servicesicons/CarCheck.svg";
import ClipBoardPlusIcon from "../../../../public/servicesicons/ClipBoardPlus.svg";
import MapIcon from "../../../../public/servicesicons/Map.svg";
import UnionIcon from "../../../../public/servicesicons/Union.svg";

const servicesData = [
  {
    img: MapIcon,
    title: "Anywhere Auto-Care",
    description:
      "We bring the latest steam cleaning technology to your location, ensuring your vehicles are professionally cleaned and ready to go!",
  },
  {
    img: UnionIcon,
    title: "FleetCare Pro",
    description:
      "Tailored cleaning solutions for businesses with multiple vehicles. We ensure your fleet stays spotless and road-ready.",
  },
  {
    img: ClipBoardPlusIcon,
    title: "Subscriptions",
    description: "Hassle-free car care with regular service packages. Enjoy consistent maintenance at discounted rates.",
  },
  {
    img: CarCheckIcon,
    title: "Long term Vehicle Care",
    description: "Long-term vehicle maintenance plans to ensure your car remains in peak condition with additional care options.",
  },
];

export default function CarService() {
  return (
    <CarServicesContainer>
      {servicesData.map(({ img, title, description }, index) => (
        <CarServiceItem key={index} icon={img} title={title} description={description} />
      ))}
    </CarServicesContainer>
  );
}

const CarServiceItem = ({ icon, title, description }) => {
  return (
    <ServiceItemContainer>
      <ServiceItemBox>
        <ServiceItemIconContainer>
          <ServiceItemIcon src={icon} alt={title} width={50} height={50} sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" }, }} />
        </ServiceItemIconContainer>

        <ServiceItemHeading variant={"h4"}>{title}</ServiceItemHeading>

        <ServiceItemDescription variant={"p"}>{description}</ServiceItemDescription>
      </ServiceItemBox>
    </ServiceItemContainer>
  );
};
