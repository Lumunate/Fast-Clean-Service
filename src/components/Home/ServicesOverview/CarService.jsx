'use client';
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
import {useTranslations} from "next-intl";

export default function CarService() {
  const t = useTranslations('home.packages_section');

  const servicesData = [
    {
      img: MapIcon,
      title: t("packages.0.title"),
      anchor: "anywhere-auto-care",
      description:
          t("packages.0.description")
    },
    {
      img: UnionIcon,
      title: t("packages.1.title"),
      anchor: "fleet-care-pro",
      description:
          t("packages.1.description")
    },
    {
      img: ClipBoardPlusIcon,
      anchor: "subscriptions",
      title: t("packages.2.title"),
      description: t("packages.2.description"),
    },
    {
      img: CarCheckIcon,
      title: t("packages.3.title"),
      anchor: "long-term-vehicle-care",
      description: t("packages.3.description"),
    },
  ];

  return (
    <CarServicesContainer>
      {servicesData.map(({ img, title, description, anchor }, index) => (
        <CarServiceItem key={index} anchor={anchor} icon={img} title={title} description={description} />
      ))}
    </CarServicesContainer>
  );
}

const CarServiceItem = ({ icon, title, description, anchor }) => {
  const handleClick = () => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ServiceItemContainer onClick={handleClick}>
      <ServiceItemBox>
        <ServiceItemIconContainer>
          <ServiceItemIcon
            src={icon}
            alt={title}
            width={65}
            height={65}
            sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
          />
        </ServiceItemIconContainer>

        <ServiceItemHeading variant={"h4"}>{title}</ServiceItemHeading>

        <ServiceItemDescription variant={"p"}>{description}</ServiceItemDescription>
      </ServiceItemBox>
    </ServiceItemContainer>
  );
};
