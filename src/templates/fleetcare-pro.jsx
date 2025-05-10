import React from "react";
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` : "";

const FleetCareConfirmationEmail = ({
  name,
  businessName,
  email,
  vehicleType,
  location,
  fleetSize,
  packageName = "FleetCare Pro",
}) => {
  const accentColor = "#00c3ff";

  return (
    <Html>
      <Head />
      <Preview>Your FleetCare Pro booking with Fast Clean Service has been confirmed!</Preview>
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
          <Heading style={{ ...heading, color: accentColor }}>Booking Confirmation</Heading>
          <Text style={paragraph}>Hello {name},</Text>
          <Text style={paragraph}>
            Thank you for choosing Fast Clean Service for your fleet care needs. Here are the details of your booking:
          </Text>
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
          <Text style={paragraph}>
            Our team will be in touch shortly to discuss further details. If you have any questions, feel free to reach out.
          </Text>
          <Text style={footer}>This is an automated message. Please do not reply to this email.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default FleetCareConfirmationEmail;

const main = {
  backgroundColor: "#f6f9fc",
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
  marginBottom: "20px",
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
  color: "#333",
  margin: "0 0 10px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "32px",
  textAlign: "center",
};
