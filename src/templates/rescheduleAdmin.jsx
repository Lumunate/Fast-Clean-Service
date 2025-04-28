import React from "react";
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

const RescheduledBookingAdminEmail = ({ userName, userEmail, packageName, oldDate, oldTime, newDate, newTime, location }) => {
  const accentColor = "#00c3ff";

  return (
    <Html>
      <Head />
      <Preview>Booking Reschedule Notification for {userName}</Preview>
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
          <Heading style={{ ...heading, color: accentColor }}>Booking Rescheduled</Heading>
          <Text style={paragraph}>Dear Admin,</Text>
          <Text style={paragraph}>
            <strong>{userName}</strong> (<a href={`mailto:${userEmail}`}>{userEmail}</a>) has rescheduled their booking. Below are
            the details for reference:
          </Text>

          <Section style={bookingDetailsContainer}>
            <Heading as="h2" style={{ ...subheading, color: accentColor }}>
              Old Booking Details
            </Heading>
            <Section style={bookingDetails}>
              <Text style={detailText}>
                <strong>Package:</strong> {packageName}
              </Text>
              <Text style={detailText}>
                <strong>Date:</strong> {oldDate}
              </Text>
              <Text style={detailText}>
                <strong>Time:</strong> {oldTime}
              </Text>
              <Text style={detailText}>
                <strong>Location:</strong> {location}
              </Text>
            </Section>

            <Heading as="h2" style={{ ...subheading, color: accentColor }}>
              New Booking Details
            </Heading>
            <Section style={bookingDetails}>
              <Text style={detailText}>
                <strong>Package:</strong> {packageName}
              </Text>
              <Text style={detailText}>
                <strong>Date:</strong> {newDate}
              </Text>
              <Text style={detailText}>
                <strong>Time:</strong> {newTime}
              </Text>
              <Text style={detailText}>
                <strong>Location:</strong> {location}
              </Text>
            </Section>
          </Section>

          <Text style={paragraph}>Please ensure all necessary arrangements are updated for the new schedule.</Text>
          <Text style={footer}>This is an automated email. Please do not reply directly to this message.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default RescheduledBookingAdminEmail;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const imgSection = {
  marginTop: 32,
};

const img = {
  margin: "0 auto",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 20px 48px",
  marginBottom: "64px",
  borderRadius: "8px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
};

const heading = {
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "20px",
};

const subheading = {
  fontSize: "20px",
  fontWeight: "600",
  margin: "10px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#555",
  marginBottom: "20px",
};

const bookingDetailsContainer = {
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  padding: "24px",
  marginBottom: "24px",
};

const bookingDetails = {
  backgroundColor: "transparent",
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
