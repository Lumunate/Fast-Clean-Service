import React from "react";
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` : "";

const AdminContactNotificationEmail = ({ name, email, message }) => {
  const accentColor = "#00c3ff";
  const actionColor = "#0070f3";
  const textColor = "#333";

  return (
    <Html>
      <Head />
      <Preview>New Contact Us Submission from {name}</Preview>
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
          <Heading style={{ ...heading, color: accentColor }}>New Contact Us Submission</Heading>
          <Text style={paragraph}>You have received a new message from the &quot;Contact Us&quot; form on the website.</Text>
          <Section style={contactDetails}>
            <Text style={subheading}>Contact Inquiry Details</Text>
            <Text style={detailText}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detailText}>
              <strong>Your Message:</strong> {message}
            </Text>
          </Section>
          <Section style={actionSection}>
            <Text style={paragraph}>You can reply directly to this email or use the contact email provided above.</Text>
          </Section>
          <Text style={footer}>
            This notification is generated automatically by Fast Clean Service. Please do not reply to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminContactNotificationEmail;

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


const actionSection = {
  textAlign: "center",
  marginTop: "20px",
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

const contactDetails = {
  backgroundColor: "#f9fbfc",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
  border: "1px solid #e1e8ed",
};

const messageSection = {
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
  color: "#0070f3",
  marginBottom: "8px",
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
