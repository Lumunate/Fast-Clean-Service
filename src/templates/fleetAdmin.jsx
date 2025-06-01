import React from "react";
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` : "";


const accentColor = "#00c3ff";
const actionColor = "#0070f3";
const textColor = "#333";

const AdminFleetCareNotificationEmail = ({
  name,
  businessName,
  email,
  vehicleType,
  location,
  fleetSize,
  packageName = "FleetCare Pro",
}) => {


  return (
    <Html>
      <Head />
      <Preview>
        New FleetCare Booking: {businessName} ({packageName})
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
          <Heading style={{ ...heading, color: accentColor }}>New FleetCare Booking</Heading>
          <Text style={paragraph}>A new FleetCare booking has been made. Details are provided below:</Text>
          <Section style={bookingDetails}>
            <Heading as="h2" style={{ ...subheading, color: accentColor }}>
              {packageName}
            </Heading>
            <Text style={detailText}>
              <strong>Business Name:</strong> {businessName}
            </Text>
            <Text style={detailText}>
              <strong>Contact Person:</strong> {name}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detailText}>
              <strong>Type of Vehicle:</strong> {vehicleType}
            </Text>
            <Text style={detailText}>
              <strong>Address:</strong> {location}
            </Text>
            <Text style={detailText}>
              <strong>Fleet Size:</strong> {fleetSize}
            </Text>
          </Section>
          <Text style={paragraph}>Please contact the customer if further details are required or to confirm the booking.</Text>
          <Text style={footer}>This is an automated notification for Fast Clean Service administration.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminFleetCareNotificationEmail;

const main = {
  backgroundColor: "#f4f6f8",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  padding: "20px",
};

const imgSection = {
  marginTop: 32,
  textAlign: "center",
};

const img = {
  margin: "0 auto",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  marginBottom: "40px",
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

const subheading = {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "26px",
  color: accentColor,
  marginBottom: "12px",
  textAlign: "center",
};

const detailText = {
  fontSize: "16px",
  color: "#333",
  margin: "0 0 10px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "32px",
  textAlign: "center",
};
