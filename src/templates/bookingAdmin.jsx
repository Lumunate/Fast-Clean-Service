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
        New booking notification: {packageName} for {userName}
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
          <Heading style={{ ...heading, color: accentColor }}>New Booking Notification</Heading>
          <Text style={paragraph}>A new booking has been made. Details are below:</Text>
          <Section style={bookingDetails}>
            <Heading as="h2" style={{ ...subheading, color: accentColor }}>
              {packageName}
            </Heading>
            <Text style={detailText}>
              <strong>Date:</strong> {date}
            </Text>
            <Text style={detailText}>
              <strong>Time:</strong> {time}
            </Text>
            <Text style={detailText}>
              <strong>Location:</strong> {location}
            </Text>
            <Text style={detailText}>
              <strong>Price:</strong> {price}
            </Text>
          </Section>
          <Section style={customerDetails}>
            <Heading as="h3" style={sectionTitle}>
              Customer Details
            </Heading>
            <Text style={detailText}>
              <strong>Name:</strong> {userName}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong> {userEmail}
            </Text>
          </Section>
          <Section style={actionSection}>
            <Button style={actionButton} href={`${process.env.NEXT_PUBLIC_BASE_URL}/admin/bookings`}>
              View Booking
            </Button>
            <Button style={actionButton} href={`mailto:${userEmail}?subject=Regarding your booking`}>
              Contact Customer
            </Button>
          </Section>
          <Text style={footer}>This is an automated notification for Fast Clean Service administration.</Text>
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
  backgroundColor: "#0070f3",
  borderRadius: "5px",
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
