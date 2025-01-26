import Image from "next/image";
import Footer from "../../components/Home/footer/Footer";
import {Box, Typography} from "@mui/material";
import {HomeBlueBanner} from "../../components/mui/HomePkgs";
import {
  AboutContainer,
  AboutImgContainer,
  AboutItem,
  AboutItemDetail,
  AboutItemHeading,
  AboutItemSection,
} from "../../components/mui/AboutPkgs";
import {ServicesItemHeading} from "../../components/mui/ServicesPkgs";
import Autos from "../../components/Services/Auto";
import Campers from "../../components/Services/Camper";
import Scooters from "../../components/Services/Scooter";

export default function Services() {
  return (
    <>
      <HomeBlueBanner>
        <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
          Our Services
        </Typography>
      </HomeBlueBanner>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AboutContainer>
          <AboutItem>
            <AboutItemHeading>
              REINIGING EXTERIEUR EN INTERIEUR
            </AboutItemHeading>
            <AboutItemSection>
              <ServicesItemHeading>Voertuigen algemeen</ServicesItemHeading>
              <AboutItemDetail>
                Laat uw voertuig door ons op professionele, efficiënte,
                doelgerichte en duurzame wijze wassen. Met behulp van onze
                stoomtechnieken komen we in uw voertuig ook op de plekken waar u
                zelf niet bij kunt komen Met gespecialiseerde apparatuur! Dat is
                waar wij voor staan. Uw schone voertuig is ons visitekaartje!
              </AboutItemDetail>
            </AboutItemSection>
            <AboutItemSection>
              {/* <ServicesItemHeading>OPTIES</ServicesItemHeading> */}
              <AboutItemDetail>
                Een gemiddelde wasbeurt bij de wasstraat kost ongeveer 220 liter
                drinkwater per auto. Met stomen verbruiken we gemiddeld per auto
                3 liter drinkwater. Dit is een zeer milieuvriendelijke oplossing
                om waterverspilling tegen te gaan. Het handmatig wassen met
                stoom zorgt er tevens voor dat geen enkele plek wordt
                overgeslagen. De stoomreiniger haalt een temperatuur van tot wel
                180 °C en is zeer efficiënt om bacteriën en hardnekkig vuil
                tegen te gaan.
              </AboutItemDetail>
            </AboutItemSection>
            <AboutItemSection>
              {/* <AboutItemHeading>
                GUARANTEED RESULT WITH FAST CLEAN SERVICE
              </AboutItemHeading> */}
              <AboutItemDetail>
                Chemicaliën komen er niet aan te pas en bacteriën worden
                verwijderd en daarmee ook vieze geuren. Zowel uw interieur als
                exterieur kan door ons geheel worden gereinigd. Het interieur
                hoeft niet te drogen en kan meteen in gebruik worden genomen.
              </AboutItemDetail>
            </AboutItemSection>
            {/* <Box
              sx={{
                alignSelf: "flex-start",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <HomeBlueBtn sx={{ mb: 0 }}>Look at the possiblities</HomeBlueBtn>
              <HomeBlueBtn>Contact Us</HomeBlueBtn>
            </Box> */}
          </AboutItem>

          <AboutItem>
            <AboutImgContainer>
              <Image src="/services.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer>
            {/* <AboutImgContainer>
              <Image src="/g2.jpg" alt="img" height={500} width={500} />
            </AboutImgContainer> */}
          </AboutItem>
        </AboutContainer>
      </Box>
      <Autos />
      <Campers />
      <Scooters />
      <Footer />
    </>
  );
}
