import React from "react";
import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
// const baseUrl = process.env.VERCEL_URL;
const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

const AdminBookingNotificationEmail = ({ userName, userEmail, packageName, date, time, location, price }) => {
  const accentColor = "#333333";
  const actionColor = "#0070f3";

  return (
    <Html>
      <Head />
      <Preview>
        Melding nieuwe boeking: {packageName} voor {userName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={imgSection}>
            <Img
              src={`https://res.cloudinary.com/diiafjy31/image/upload/v1730861547/Final-05_vlcqut.svg`}
              width="200"
              height="90"
              alt="Fast Clean Service"
              style={img}
            />
          </Section>
          <Heading style={{ ...heading, color: "#00c3ff" }}>Melding Nieuwe Boeking</Heading>
          <Text style={paragraph}>Er is een nieuwe boeking gemaakt. Details staan hieronder</Text>
          <Section style={bookingDetails}>
            <Heading as="h2" style={{ ...subheading, color: "#00c3ff" }}>
              {packageName}
            </Heading>
            <Text style={detailText}>
              <strong>Datum:</strong> {date}
            </Text>
            <Text style={detailText}>
              <strong>Tijd:</strong> {time}
            </Text>
            <Text style={detailText}>
              <strong>Locatie:</strong> {location}
            </Text>
            <Text style={detailText}>
              <strong>Prijs:</strong> {price}
            </Text>
          </Section>
          <Section style={customerDetails}>
            <Heading as="h3" style={sectionTitle}>
              Klantgegevens
            </Heading>
            <Text style={detailText}>
              <strong>Naam:</strong> {userName}
            </Text>
            <Text style={detailText}>
              <strong>E-mailadres:</strong> {userEmail}
            </Text>
          </Section>
          <Section style={actionSection}>
            <Button style={actionButton} href={`${process.env.NEXT_PUBLIC_BASE_URL}/nl/admin/bookings`}>
              Boeking bekijken
            </Button>
            <Button style={actionButton} href={`mailto:${userEmail}?subject=Over uw boeking`}>
              Neem contact op met klant
            </Button>
          </Section>
          <Text style={footer}>Dit is een geautomatiseerde melding voor de administratie van Fast Clean Service.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminBookingNotificationEmail;

const main = {
  backgroundColor: "#f4f6f8",
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
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "20px",
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
  marginBottom: "20px",
  border: "1px solid #e1e8ed",
};

const customerDetails = {
  backgroundColor: "#f9fbfc",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "24px",
  border: "1px solid #e1e8ed",
};

const subheading = {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "26px",
  textAlign: "center",
};

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "26px",
  color: "#333",
  marginBottom: "8px",
};

const detailText = {
  fontSize: "16px",
  margin: "0 0 10px 0",
};

const actionSection = {
  textAlign: "center",
  marginTop: "20px",
};

const actionButton = {
  backgroundColor: "#00c3ff",
  borderRadius: "7px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  display: "inline-block",
  margin: "10px",
  padding: "10px 20px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "24px",
  textAlign: "center",
};
