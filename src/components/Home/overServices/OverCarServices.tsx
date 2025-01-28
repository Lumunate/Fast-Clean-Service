import React from 'react';
import {
  CarServicesContainer,
  ServiceItemBox,
  ServiceItemContainer,
  ServiceItemDescription,
  ServiceItemHeading,
  ServiceItemIcon,
  ServiceItemIconContainer,
} from './ServiceOverviewPckgs';

import PaintRoll from '../../../../public/servicesicons/paint-roll.svg';
import PaintRollWhite from '../../../../public/servicesicons/paint-roll-white.svg';
import TickBox from '../../../../public/servicesicons/tick-box.svg';
import TickBoxWhite from '../../../../public/servicesicons/tick-box-white.svg';
import Shield from '../../../../public/servicesicons/shield.svg';
import ShieldWhite from '../../../../public/servicesicons/shield-white.svg';
import { useTheme } from '../../../contexts/themeContext';

interface ServiceData {
  img: string;
  imgDark: string;
  title: string;
  description: string;
  description2: string;
}

const servicesData: ServiceData[] = [
  {
    img: TickBox,
    imgDark: TickBoxWhite,
    title: "Steam Cleaning Interior & Exterior",
    description: "Provide a deeply cleaned car with our environmentally friendly steam cleaning techniques.",
    description2: "Book Now and give your car the fresh start it deserves",
  },
  {
    img: Shield,
    imgDark: ShieldWhite,
    title: "Steam Cleaning Interior & Exterior",
    description: "Protect your car's paint and make it shine again with our professional wax and coating treatments.",
    description2: "Plan Your Detailing and keep your car looking new for longer",
  },
  {
    img: PaintRoll,
    imgDark: PaintRollWhite,
    title: "Polishing and Headlight Restoration",
    description: "Remove scratches and regain the brightness of your headlights for a brighter shine result.",
    description2: "Request a Quote for your polishing job.",
  },
];

const OverCarServices: React.FC = () => {
  const { theme } = useTheme();
  return (
    <CarServicesContainer>
      {servicesData.map(({ img, imgDark, title, description, description2 }, index) => (
        <CarServiceItem
          key={index}
          icon={theme.palette.mode === 'dark' ? imgDark : img}
          title={title}
          description={description}
          description2={description2}
        />
      ))}
    </CarServicesContainer>
  );
};

interface CarServiceItemProps {
  icon: string;
  title: string;
  description: string;
  description2: string;
}

const CarServiceItem: React.FC<CarServiceItemProps> = ({ icon, title, description, description2 }) => {
  return (
    <ServiceItemContainer>
      <ServiceItemBox>
        <ServiceItemIconContainer>
          <ServiceItemIcon
            src={icon}
            alt={title}
            width={88}
            height={88}
            sx={{
              '@media (max-width: 600px)': {
                transform: 'scale(0.6)',
              },
            }}
          />
        </ServiceItemIconContainer>

        <ServiceItemHeading variant={'h4'}>{title}</ServiceItemHeading>

        <ServiceItemDescription variant={'p'}>{description}</ServiceItemDescription>
        <ServiceItemDescription variant={'p'}>{description2}</ServiceItemDescription>
      </ServiceItemBox>
    </ServiceItemContainer>
  );
};

export default OverCarServices;
