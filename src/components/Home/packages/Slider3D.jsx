// components/Slider3D.js
"use client";
import React, {useState} from "react";
import Image from "next/image";
import {Slider, SliderContainer, SliderItem} from "../../mui/HomePkgs";
import PackageModal from "./PackageModal";
import {Typography} from "@mui/material";

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

export default function Slider3D() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpen = (pkg) => {
    setModalData(pkg);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <SliderContainer>
        <Slider>
          {cleanPkgs.map((pkg, index) => (
            <SliderItem
              key={index}
              onClick={() => handleOpen(pkg)}
              sx={{
                "--position": index + 1,
                "--quantity": cleanPkgs.length,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "50%",
                  border: "2px sloid black",
                }}
              >
                <Image
                  src={pkg.img}
                  alt={`Package ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">
                  {pkg.type.one} {pkg.type.two}
                </Typography>
                <Typography variant="subtitle1">€{pkg.price.one}</Typography>
                <Typography variant="body2">
                  Duur: {pkg.price.duur} min
                </Typography>
              </div>
            </SliderItem>
          ))}
        </Slider>
      </SliderContainer>

      {modalData && (
        <PackageModal
          open={open}
          handleClose={handleClose}
          imageSrc={modalData.img}
          title={`${modalData.type.one} ${modalData.type.two}`}
          pros={modalData.pros}
          cons={modalData.cons}
          extras={modalData.extras}
        />
      )}
    </div>
  );
}