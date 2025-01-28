import Image from "next/image";
import styleHome from "../../../app/[locale]/Home.module.css";
import { Box, Button, Typography } from "@mui/material";
import {
  HomePkgsBox,
  HomePkgsInBox,
  HomePkgBox,
  HomeBlueBanner,
  HomeBlueBtn,
  HomeBlueLink,
} from "../../mui/HomePkgs";
import Link from "next/link";

export default function VideoSection() {
  return (
    <>
      <HomePkgsBox>
        <Box
          sx={{ display: "flex", flexDirection: "column", maxwidth: "1300px" }}
        >
          <HomeBlueBtn>Maak direct een afspraak</HomeBlueBtn>
          <HomePkgsInBox>
            <HomePkgBox sx={{ flexBasis: "calc(50% - 2.2rem)" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#0c7fcf",
                }}
              >
                WIJ ZIJN ERVAREN PROFESSIONALS - Mobiele Stoomreiniging op Maat
              </Typography>
              <Typography sx={{ color: "rgb(133, 134, 140)" }}>
                Fast Clean Service is uw betrouwbare partner voor professionele
                en grondige stoomreiniging van uw voertuig op locatie. Onze
                ervaren professionals komen met ons eigen materiaal naar u toe,
                op de door u gewenste locatie en tijdstip. Wij begrijpen dat uw
                voertuig belangrijk is voor u en daarom zorgen wij ervoor dat
                het wordt behandeld met de grootste zorg en aandacht voor
                detail.
                <br style={{ marginBottom: "1rem" }} /> MODERNE BENODIGDHEDEN –
                Efficiënte en Milieuvriendelijke Reiniging{" "}
                <br style={{ marginBottom: "1rem" }} /> Onze medewerkers zijn
                ervaren professionals die rijden in bestelbussen, uitgerust met
                de modernste benodigdheden voor efficiënte en grondige
                stoomreiniging van uw voertuig. Wij maken gebruik van
                geavanceerde technologieën voor het reinigen van zowel het
                interieur als het exterieur van uw voertuig. Onze technieken op
                het gebied van stoomreiniging zorgen voor uitstekende resultaten
                zonder het gebruik van schadelijke chemicaliën en
                schoonmaakmiddelen.
              </Typography>
            </HomePkgBox>
            <HomePkgBox sx={{ flexBasis: "calc(50% - 2.2rem)" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#0c7fcf",
                }}
              >
                TIJDSBESPARING - Mobiele Stoomreiniging op Maat
              </Typography>
              <Typography sx={{ color: "rgb(133, 134, 140)" }}>
                Bij FastCleanService.nl geloven we in het bieden van de hoogste
                kwaliteit mobiele stoomreiniging, zonder dat het ten koste gaat
                van uw kostbare tijd. Wij komen naar u toe, op de locatie en het
                tijdstip dat u het beste uitkomt. Of het nu bij u thuis, uw
                bedrijf, in de haven of op een andere locatie is die u vooraf
                heeft aangegeven, onze ervaren professionals staan klaar om u te
                helpen.
                <br style={{ marginBottom: "1rem" }} /> GEMAK – Geavanceerde
                Online Agendaplanning <br style={{ marginBottom: "1rem" }} />{" "}
                Onze medewerkers zijn Bij FastCleanService.nl zijn we trots op
                ons geavanceerde online boekingssysteem, waarmee u eenvoudig de
                gewenste locatie en het tijdstip van uw voorkeur kunt aangeven.
                Hierdoor bespaart u kostbare tijd en kunt u snel en efficiënt uw
                afspraak inplannen. Indien we uw wagenpark schoonmaken, maken we
                samen met u een planning om dit op een zo efficiënt mogelijke
                wijze te doen, zodat u zich kunt focussen op uw eigen
                werkzaamheden.
              </Typography>
              <HomeBlueBtn sx={{ flexGrow: 0 }}>
                Bekijk de mogelijkheden
              </HomeBlueBtn>
            </HomePkgBox>
          </HomePkgsInBox>
          <HomePkgsInBox sx={{ m: "5rem 0" }}>
            <HomePkgBox>
              <Link href="/">
                <HomeBlueLink>
                  Geen voorrijkosten in Amsterdam en directe omgeving
                </HomeBlueLink>
              </Link>
            </HomePkgBox>
            <HomePkgBox>
              <Link href="/">
                <HomeBlueLink>7 dagen per week geopend</HomeBlueLink>
              </Link>
            </HomePkgBox>
            <HomePkgBox>
              <Link href="/">
                <HomeBlueLink>Maak eenvoudig online een afspraak</HomeBlueLink>
              </Link>
            </HomePkgBox>
          </HomePkgsInBox>
        </Box>
      </HomePkgsBox>
    </>
  );
}
