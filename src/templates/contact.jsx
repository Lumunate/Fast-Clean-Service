import React from "react";
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` : "";

const ContactConfirmationEmail = ({ name, email, message }) => {
  const accentColor = "#00c3ff";
  const actionColor = "#0070f3";

  return (
    <Html>
      <Head />
      <Preview>Thank you for reaching out to Fast Clean Service!</Preview>
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
          <Heading style={{ ...heading, color: accentColor }}>Contact Confirmation</Heading>
          <Text style={paragraph}>Hello {name},</Text>
          <Text style={paragraph}>
            Thank you for getting in touch with Fast Clean Service! We have received your message and will get back to you as soon
            as possible.
          </Text>
          <Section style={contactDetails}>
            <Text style={subheading}>Message Summary</Text>
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
          <Text style={paragraph}>
            We appreciate your patience and will respond shortly. In the meantime, feel free to browse our website or check out
            our services.
          </Text>
          <Text style={footer}>This is an automated confirmation. Please do not reply to this email.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactConfirmationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
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
  padding: "20px 20px 48px",
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

const contactDetails = {
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "24px",
  border: "1px solid #e1e8ed",
};

const subheading = {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "26px",
  marginBottom: "8px",
  color: "#00c3ff",
  textAlign: "center",
};

const detailText = {
  fontSize: "16px",
  margin: "0 0 10px 0",
  color: "#333",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "32px",
  textAlign: "center",
};
