import Image from "next/image";
import {List, Typography} from "@mui/material";
import {HomeBlueBtn, HomeCollageCtr, HomeListItem, HomePkgBox, HomePkgsBox, HomePkgsInBox,} from "../../mui/HomePkgs";

const Collage: React.FC = () => {
  return (
    <>
      <HomePkgsBox>
        <HomePkgsInBox>
          <HomeCollageCtr>
            <Image src="/g1.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g2.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g3.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g4.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g5.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g6.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g7.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g8.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g9.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
          <HomeCollageCtr>
            <Image src="/g10.jpg" alt="img" width={300} height={300} />
          </HomeCollageCtr>
        </HomePkgsInBox>
      </HomePkgsBox>
      <HomePkgsBox>
        <HomePkgsInBox>
          <HomePkgBox sx={{ flexBasis: "calc(50% - 2rem)" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#0c7fcf",
              }}
            >
              MILIEUVRIENDELIJK
            </Typography>
            <List>
              <HomeListItem>
                <Typography sx={{ color: "rgb(133, 134, 140)" }}>
                  Een gemiddelde wasbeurt in de wasstraat kost ca 220 liter
                  drinkwater. Wij verbruiken gemiddeld 3 liter water per auto,
                  met uitstekend resultaat.
                </Typography>
              </HomeListItem>
              <HomeListItem>
                <Typography sx={{ color: "rgb(133, 134, 140)" }}>
                  Gebruik van chemicaliën is door onze techniek overbodig.
                </Typography>
              </HomeListItem>
              <HomeListItem>
                <Typography sx={{ color: "rgb(133, 134, 140)" }}>
                  Geen reparaties achteraf om de krassen te laten repareren
                  waarvoor milieubelastende materialen nodig zijn (lak,
                  spuiten).
                </Typography>
              </HomeListItem>
              <HomeListItem>
                <Typography sx={{ color: "rgb(133, 134, 140)" }}>
                  Geen lange wachtrijen bij de wasstraat.{" "}
                </Typography>
              </HomeListItem>
            </List>
          </HomePkgBox>
          <HomePkgBox sx={{ flexBasis: "calc(50% - 2rem)" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#0c7fcf",
              }}
            >
              HYGIËNISCH VOOR HET INTERIEUR
            </Typography>
            <List>
              <HomeListItem>
                <Typography sx={{ color: "rgb(133, 134, 140)" }}>
                  Bij Fast Clean Service wordt uw auto handmatig gereinigd met
                  stoom tot wel 180°C. Het hardnekkigste vuil wordt zelfs op de
                  moeilijkst bereikbare plekken verwijderd.
                </Typography>
              </HomeListItem>
              <HomeListItem>
                <Typography sx={{ color: "rgb(133, 134, 140)" }}>
                  Bacteriën overleven dit niet, waardoor geuren worden
                  geneutraliseerd en uw voertuig wordt gedesinfecteerd. U rijdt
                  weer rond in een schoon, heerlijk geurend vervoermiddel.
                </Typography>
              </HomeListItem>
            </List>
            <HomeBlueBtn sx={{ flexGrow: 0 }}>
              Maak direct een afspraak{" "}
            </HomeBlueBtn>
          </HomePkgBox>
        </HomePkgsInBox>
      </HomePkgsBox>
    </>
  );
}
export default Collage;