import React from "react";
import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : "";

const BookingConfirmationEmail = ({ name, packageName, date, time, location, price }) => {
  const accentColor = "#00c3ff";
  const textColor = "#333";

  return (
    <Html>
      <Head />
      <Preview>Your booking for Fast Clean Service - {packageName} has been confirmed!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={imgSection}>
            <Img src={`https://res.cloudinary.com/diiafjy31/image/upload/v1730861547/Final-05_vlcqut.svg`} width="200" height="90" alt="Fast Clean Service" style={img} />
          </Section>
          <Heading style={{ ...heading, color: accentColor }}>Booking Confirmation</Heading>
          <Text style={paragraph}>Dear {name},</Text>
          <Text style={paragraph}>Thank you for booking with Fast Clean Service. Your booking details are as follows:</Text>
          <Section style={bookingDetails}>
            <Heading as="h2" style={{ ...subheading, color: accentColor }}>
              {packageName}
            </Heading>
            <Text style={{ ...detailText, color: textColor }}>
              <strong>Date:</strong> {date}
            </Text>
            <Text style={{ ...detailText, color: textColor }}>
              <strong>Time:</strong> {time}
            </Text>
            <Text style={{ ...detailText, color: textColor }}>
              <strong>Location:</strong> {location}
            </Text>
            <Text style={{ ...detailText, color: textColor }}>
              <strong>Price:</strong> {price}
            </Text>
          </Section>
          <Text style={paragraph}>If you have any questions or need to make changes, please contact us.</Text>
          <Text
              style={{
                ...paragraph,
                fontSize: "14px",
                color: "#aa0000",
                textAlign: "center",
                marginTop: "10px",
              }}
          >
            Please note: appointments where we come to your location are approximate and may vary by up to 60–120 minutes.
          </Text>
          <Button px={20} py={12} style={btn} href={process.env.NEXT_PUBLIC_BASE_URL}>
            View Booking Details
          </Button>
          <Text style={paragraph}>
            By booking with us, you agree to our{" "}
            <a
                href={`${baseUrl}/terms-and-conditions`}
                style={{
                  color: accentColor,
                  textDecoration: "underline",
                }}
            >
              Terms & Conditions
            </a>.
          </Text>
          <Text style={footer}>This is an automated email. Please do not reply directly to this message.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default BookingConfirmationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "20px",
};

const imgSection = {
  marginTop: 32,
  marginBottom: 10,
  textAlign: "center",
};

const img = {
  margin: "0 auto",
  borderRadius: "5px",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  marginBottom: "40px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const heading = {
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#555",
  marginBottom: "20px",
};

const bookingDetails = {
  backgroundColor: "#f9fbfc",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "24px",
  border: "1px solid #e1e8ed",
};

const subheading = {
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "26px",
  marginBottom: "12px",
  textAlign: "center",
};

const detailText = {
  fontSize: "16px",
  margin: "0 0 10px 0",
};

const btn = {
  backgroundColor: "#00c3ff",
  borderRadius: "7px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "80%",
  margin: "20px auto 0",
  padding: "14px 0",
  letterSpacing: "0.5px",
  boxShadow: "0 3px 8px rgba(0, 195, 255, 0.3)",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "32px",
  textAlign: "center",
  padding: "20px",
};
