import React from "react";
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` : "";

const OtherVehiclesAdminEmail = ({
  name,
  businessName,
  email,
  phone,
  vehicleType,
  serviceType,
  location,
  address,
  numVehicles,
}) => {
  const accentColor = "#00c3ff";

  return (
    <Html>
      <Head />
      <Preview>New Other Vehicles Service Request Submission</Preview>
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
          <Heading style={{ ...heading, color: accentColor }}>New Service Request - Other Vehicles</Heading>
          <Text style={paragraph}>Dear Admin,</Text>
          <Text style={paragraph}>A new service request has been submitted for other vehicles. Here are the details:</Text>
          <Section style={bookingDetails}>
            <Text style={detailText}>
              <strong>Contact Person:</strong> {name}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detailText}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={detailText}>
              <strong>Vehicle Type:</strong> {vehicleType}
            </Text>
            <Text style={detailText}>
              <strong>Service Type:</strong> {serviceType}
            </Text>
            <Text style={detailText}>
              <strong>Location:</strong> {location}
            </Text>
            {location === "Your Place" && (
              <Text style={detailText}>
                <strong>Address:</strong> {address}
              </Text>
            )}
            <Text style={detailText}>
              <strong>Number of Vehicles:</strong> {numVehicles}
            </Text>
          </Section>
          <Text style={paragraph}>Please review this request and coordinate with the client if necessary.</Text>
          <Text style={footer}>This is an automated email. Please do not reply directly to this message.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default OtherVehiclesAdminEmail;

// Styles
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
