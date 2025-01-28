import { Typography } from "@mui/material";
import { HomeBlueBanner, HomePkgBox, HomePkgsBox, HomePkgsInBox } from "../../mui/HomePkgs";

const Info: React.FC = () => {
  return (
    <>
      <HomePkgsBox>
        <HomePkgsInBox>
          <HomePkgBox>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              FOR ALL TYPE of VEHIC - Professional Cleaning on Location
            </Typography>
            <Typography>
              At Fast Clean Service we provide professional and thorough
              cleaning services for all types of vehicles and means of
              transport. Whether it is your car, truck, boat, caravan,
              motorbike, campervan, van, scooter, moped, e-bike or bike, we
              guarantee a result that will exceed your expectations.
            </Typography>
          </HomePkgBox>
          <HomePkgBox>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              WE AY TO YOUR TOU - Flexible Services
            </Typography>
            <Typography>
              Our mobile steam cleaning service comes to you, at the location
              and time that suits you best. Whether you are at home, at work, in
              the port or in any other location, we are here to be of service.
              Our flexible service is designed to meet your specific needs and
              provide you with the convenience and peace of mind you deserve.
            </Typography>
          </HomePkgBox>
          <HomePkgBox>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              ENVIRONMENTALLY FRIENDLY - Safe and Eco-Friendly Cleaning
            </Typography>
            <Typography>
              At Fast Clean Service, we understand the value of an
              environmentally friendly approach. That is why we use efficient,
              hygienic and environmentally friendly steam cleaning technology to
              clean your vehicle. Our services are fast, professional and
              without scratches or the use of harmful chemicals and cleaning
              agents.
            </Typography>
          </HomePkgBox>
        </HomePkgsInBox>
      </HomePkgsBox>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          Hoe werken wij
        </Typography>
        <Typography sx={{ fontSize: "2rem" }}>
          Dé schoonmaakservice voor uw voertuig die bij u op locatie komt.
        </Typography>
      </HomeBlueBanner>
    </>
  );
};

export default Info;
