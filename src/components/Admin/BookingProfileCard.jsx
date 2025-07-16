import React from "react";
import {
  CardAvatar,
  CardInfo,
  CardInformationContent,
  CardInformationLabel,
  CardInformationWrapper,
  InfoHeading,
  InfoSubHeading,
  ProfileCard,
} from "../mui/AdminPkgs";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

const BookingProfileCard = ({ handleOpenModal, booking }) => {
  const address = booking.street + ", " + booking.city + ", " + booking.zipCode;
  const t = useTranslations("admin_dashboard.booking_profile_card")

  return (
    <ProfileCard
      onClick={() => handleOpenModal(booking)}
      sx={{
        marginX: "10px",
        marginY: "5px",
        height: "280px",
        position: "relative",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#fff",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
        },
        "@media (max-width: 600px)": { width: "100%" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "primary.accent",
          width: "100%",
          height: "5.5rem",
        }}
      />
      <CardAvatar>{booking.firstName[0] + booking.surname[0]}</CardAvatar>
      <InfoHeading>{`${booking.firstName} ${booking.surname}`}</InfoHeading>
      <InfoSubHeading>{booking.serviceName}</InfoSubHeading>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          margin: "1rem 0",
        }}
      />
      <CardInfo
        sx={{
          padding: "0 0.5rem",
          maxWidth: "30rem",
          margin: "0 auto",
        }}
      >
        <CardInformationWrapper>
          <CardInformationLabel>{t("0")}</CardInformationLabel>
          <CardInformationContent>{booking.phoneNumber}</CardInformationContent>
        </CardInformationWrapper>
        <CardInformationWrapper>
          <CardInformationLabel>{t("1")}</CardInformationLabel>
          <CardInformationContent>
            {booking.packageType + " - " + booking.packageName}
          </CardInformationContent>
        </CardInformationWrapper>
        <CardInformationWrapper>
          <CardInformationLabel>{t("2")}</CardInformationLabel>
          <CardInformationContent>{booking.companyName}</CardInformationContent>
        </CardInformationWrapper>
        <CardInformationWrapper>
          <CardInformationLabel>{t("3")}</CardInformationLabel>
          <CardInformationContent>{`${address.slice(0, 23)}${
            address.length > 23 ? "..." : ""
          }`}</CardInformationContent>
        </CardInformationWrapper>
        <CardInformationWrapper>
          <CardInformationLabel>{t("4")}</CardInformationLabel>
          <CardInformationContent>
            {new Date(booking.lockTime.start).toLocaleString("en-GB", {
              year: "numeric",
              month: "short",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </CardInformationContent>
        </CardInformationWrapper>
      </CardInfo>
    </ProfileCard>
  );
};

export default BookingProfileCard;
