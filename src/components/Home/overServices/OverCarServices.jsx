import {
    CarServicesContainer,
    ServiceItemBox,
    ServiceItemContainer,
    ServiceItemDescription,
    ServiceItemHeading,
    ServiceItemIcon,
    ServiceItemIconContainer,
  } from "./ServiceOverviewPckgs";
  
  import PaintRoll from "../../../../public/servicesicons/paint-roll.svg";
  import TickBox from "../../../../public/servicesicons/tick-box.svg";
  import Shield from "../../../../public/servicesicons/shield.svg";
  
  const servicesData = [
    {
      img: TickBox,
      title: "Steam Cleaning Interior & Exterior",
      description:
        "Provide a deeply cleaned car with our  environmentally friendly steam cleaning techniques.",
        description2:
        "Book Now and give your car the fresh start it deserves",
    },
    {
      img: Shield,
      title: "Steam Cleaning Interior & Exterior",
      description:
        "Protect your car's paint and make it shine again with our professional wax and coating treatments.",
        description2:
        "Plan Your Detailing and keep your car looking new for longer",
    },
    {
      img: PaintRoll,
      title: "Polishing and Headlight Restoration",
      description: "Remove scratches and regain the brightness of your headlights for a brighter shine result.",
      description2:
      "Request a Quote for your polishing job.",
    },
  ];
  
  export default function OverCarServices() {
    return (
      <CarServicesContainer>
        {servicesData.map(({ img, title, description,description2 }, index) => (
          <CarServiceItem key={index} icon={img} title={title} description={description} description2={description2}/>
        ))}
      </CarServicesContainer>
    );
  }
  
  const CarServiceItem = ({ icon, title, description,description2 }) => {
    return (
      <ServiceItemContainer>
        <ServiceItemBox>
          <ServiceItemIconContainer>
            <ServiceItemIcon src={icon} alt={title} width={88} height={88} sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" }, }} />
          </ServiceItemIconContainer>
  
          <ServiceItemHeading variant={"h4"}>{title}</ServiceItemHeading>
  
          <ServiceItemDescription variant={"p"}>{description}</ServiceItemDescription>
          <ServiceItemDescription variant={"p"}>{description2}</ServiceItemDescription>
        </ServiceItemBox>
      </ServiceItemContainer>
    );
  };
  