import Image from "next/image";
import {Box, Typography} from "@mui/material";
import {
    HomePkgBox,
    HomePkgsBox,
    HomePkgsInBox,
    PkgDetailsSection,
    PkgExtrasSection,
    PkgImgCtr,
} from "../../mui/HomePkgs";

const cleanPkgs = [
  {
    img: "/1.png",
    type: {
      one: "Standard",
      two: "Exterieur",
    },
    price: {
      one: "74,95",
      duur: "45",
    },
    pros: [
      "✔️Exterieur wassen",
      "✔️Ramen en spiegels reinigen",
      "✔️Spray wax aanbrengen",
      "✔️Velgen",
    ],
    cons: [
      "❌ Banden zwarten",
      "❌ Dorpels en deurranden",
      "❌ Ramen ceramische bescherming aanbrengen",
      "❌ Kunststofdelen voeden",
      "❌ Tankklep reinigen",
    ],
    extras: {
      exterior: [
        "Motorkap reiniging  (Optie: + € 50,-)",
        "Polijsten koplampen  (Optie: + € 50,-)",
        "Polijsten chromendelen  (Optie: + € 90,-)",
      ],
      detailing: [
        "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
        "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
        "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
        "Lakverzegeling  (Optie: op aanvraag)",
        "Glascoating  (Optie: op aanvraag)",
      ],
    },
  },
  {
    img: "/2.png",
    type: {
      one: "Standard",
      two: "Interieur",
    },
    price: {
      one: "89,95",
      duur: "45",
    },
    pros: [
      "✔️Dashboard en vakjes afnemen",
      "✔️Dorpels en deurranden",
      "✔️Matten uitstomen",
      "✔️Ramen en spiegels reinigen",
      "✔️Stoomreiniging interieur globaal",
    ],
    cons: [
      "❌ Detailing",
      "❌ Kunststofdelen poetsen",
      "❌ Leerbehandeling",
      "❌ Matten stripe",
      "❌ Stoomreiniging intensief interieur",
    ],
    extras: {
      interior: [
        "Leerbehandeling  (Optie: + € 50.-)",
        "Vlekken verwijderen bekleding / Diepte reiniging  (Optie: + € 80,-)",
        "Honden haren verwijderen (Optie; + €40,-)",
        "Ozonbehandeling (Optie: + € 95,-)",
        "Schimmel behandeling  (Optie: + € 105,-)",
        "Vlekken in het plafond  (Optie: + € 75,-)",
        "Geur behandeling  (Optie: + € 85,-)",
      ],
      exterior: [
        "Motorkap reiniging  (Optie: + € 50,-)",
        "Polijsten koplampen  (Optie: + € 50,-)",
        "Polijsten chromendelen  (Optie: + € 90,-)",
      ],
      detailing: [
        "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
        "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
        "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
        "Lakverzegeling  (Optie: op aanvraag)",
        "Glascoating  (Optie: op aanvraag)",
      ],
    },
  },
  {
    img: "/3.png",
    type: {
      one: "Standard",
      two: "Combi",
    },
    price: {
      one: "139,95",
      duur: "90",
    },
    pros: [
      "✔️ In het ‘Standard Combi Pakket’ krijg je alle vinkjes van het ‘Standard Interieur en Exterieur Pakket’ gecombineerd in één pakket!",
    ],
    extras: {
      interior: [
        "Leerbehandeling (Optie: + € 50,-)",
        "Vlekken verwijderen bekleding / diepe reiniging (Optie: + € 80,-)",
        "Honden haren verwijderen (Optie; + €50,-)",
        "Ozonbehandeling (Optie: + € 95,-)",
        "Schimmel behandeling meerdere plekken (Optie: + € 105,-)",
        "Vlekken in het plafond (Optie: + € 75,-)",
        "Geurbehandeling (Optie: + € 85,-)",
      ],
      exterior: [
        "Motorkap reiniging  (Optie: + € 50,-)",
        "Polijsten koplampen (Optie: + € 50,-)",
        "Polijsten chromendelen (Optie: + € 90,-)",
      ],
      detailing: [
        "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
        "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
        "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
        "Lakverzegeling  (Optie: op aanvraag)",
        "Glascoating  (Optie: op aanvraag)",
        "Glascoating (Optie: op aanvraag)",
      ],
    },
  },
  {
    img: "/4.jpg",
    type: {
      one: "Deluxe",
      two: "Exterieur",
    },
    price: {
      one: "89,95",
      duur: "60",
    },
    pros: [
      "✔️Exterieur wassen",
      "✔️Ramen en spiegels reinigen",
      "✔️Spray wax aanbrengen",
      "✔️Velgen",

      "✔️Banden zwarten",
      "✔️Dorpels en deurranden",
      "✔️Ramen ceramische bescherming aanbrengen",
      "✔️Kunststofdelen voeden",
      "✔️Tankklep reinigen",
    ],
    extras: {
      exterior: [
        "Motorkap reiniging  (Optie: + € 50,-)",
        "Polijsten koplampen (Optie: + € 50,-)",
        "Polijsten chromendelen (Optie: + € 90,-)",
      ],
      detailing: [
        "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
        "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
        "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
        "Lakverzegeling  (Optie: op aanvraag)",
        "Glascoating  (Optie: op aanvraag)",
      ],
    },
  },
  {
    img: "/5.jpg",
    type: {
      one: "Deluxe",
      two: "Interieur",
    },
    price: {
      one: "149,95",
      duur: "90",
    },
    pros: [
      "✔️ In het ‘Deluxe Combi Pakket’ krijg je alle vinkjes van het ‘Deluxe Interieur en Exterieur Pakket’ gecombineerd in één pakket!",
    ],
    extras: {
      interior: [
        "Honden haren verwijderen (Optie; + €50,-)",
        "Ozonbehandeling (Optie: + € 95,-)",
        "Schimmel behandeling  (Optie: + € 105,-)",
        "Vlekken in het plafond  (Optie: + € 75,-)",
        "Geur behandeling  (Optie: + € 85,-)",
      ],
      exterior: [
        "Motorkap reiniging  (Optie: + € 50,-)",
        "Polijsten koplampen (Optie: + € 50,-)",
        "Polijsten chromendelen (Optie: + € 90,-)",
      ],
      detailing: [
        "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
        "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
        "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
        "Lakverzegeling  (Optie: op aanvraag)",
        "Glascoating  (Optie: op aanvraag)",
      ],
    },
  },
  {
    img: "/6.png",
    type: {
      one: "Deluxe",
      two: "Combi",
    },
    price: {
      one: "189,95",
      duur: "90/150",
    },
    pros: [
      "✔️Dashboard en vakjes afnemen",
      "✔️Dorpels en deurranden",
      "✔️Matten uitstomen",
      "✔️Ramen en spiegels reinigen",
      "✔️Vlekken verwijderen / Dieptereiniging",
      "✔️Detailing",
      "✔️Kunststofdelen poetsen",
      "✔️Leerbehandeling",
      "✔️Matten stripe",
      "✔️Stoomreiniging intensief interieur",
    ],
    extras: {
      interior: [
        "Honden haren verwijderen (Optie; + €50,-)",
        "Ozonbehandeling (Optie: + € 95,-)",
        "Schimmel behandeling meerdere plekken (Optie: + € 105,-)",
        "Vlekken in het plafond (Optie: + € 75,-)",
        "Geurbehandeling (Optie: + € 85,-)",
      ],
      exterior: [
        "Motorkap reiniging  (Optie: + € 50,-)",
        "Polijsten koplampen (Optie: + € 50,-)",
        "Polijsten chromendelen (Optie: + € 90,-)",
      ],
      detailing: [
        "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
        "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
        "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
        "Lakverzegeling  (Optie: op aanvraag)",
        "Glascoating  (Optie: op aanvraag)",
      ],
    },
  },
];

export default function Packages() {
  return (
    <>
      <HomePkgsBox>
        <HomePkgsInBox>
          {cleanPkgs.map((pkg, index) => (
            <HomePkgBox key={index}>
              <PkgImgCtr>
                <Image src={pkg?.img} alt="hmm" height={400} width={400} />
              </PkgImgCtr>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    backgroundColor: "rgb(50,116,199)",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                  }}
                >
                  <Typography>{pkg?.type?.one}</Typography>
                  <Typography sx={{ fontSize: "1.2rem !important" }}>
                    {pkg?.type?.two}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "4rem !important" }}>
                    $ {pkg?.price?.one}
                  </Typography>
                  <Typography sx={{ fontSize: "1.2rem !important" }}>
                    Duur +/- {pkg?.price?.duur} min
                  </Typography>
                </Box>
                <PkgDetailsSection pros={pkg?.pros} cons={pkg?.cons} />
              </Box>
              <PkgExtrasSection
                interior={pkg?.extras?.interior}
                exterior={pkg?.extras?.exterior}
                detailing={pkg?.extras?.detailing}
              />
            </HomePkgBox>
          ))}
        </HomePkgsInBox>
      </HomePkgsBox>
    </>
  );
}