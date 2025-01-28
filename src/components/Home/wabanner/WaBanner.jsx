import Image from "next/image";
import styleHome from "../../../app/[locale]/Home.module.css";
import { Box, Button, Typography } from "@mui/material";
import { HomePkgsBox, HomeBlueBtn } from "../../mui/HomePkgs";
import Link from "next/link";

export default function WaBanner() {
  const phoneNumber = "1234567890";
  const message = "Hello, I would like to inquire about your services";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <HomePkgsBox sx={{ padding: "0 3rem" }}>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "100%" }}
        >
          <HomeBlueBtn sx={{ padding: "4rem" }}>
            Boek uw Service via WhatsApp
          </HomeBlueBtn>
        </Link>
      </HomePkgsBox>
    </>
  );
}
