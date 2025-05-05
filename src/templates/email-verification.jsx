import React from "react";
import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` : "";

const EmailVerificationEmail = ({ name, email, verificationLink }) => {
  const accentColor = "#00c3ff";

  return (
    <Html>
      <Head />
      <Preview>Verify your Fast Clean Service account!</Preview>
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
          <Heading style={{ ...heading, color: accentColor }}>Verify Your Email</Heading>
          <Text style={paragraph}>Hello {name},</Text>
          <Text style={paragraph}>
            Thank you for registering with Fast Clean Service! Please confirm your email address to complete your account setup.
          </Text>
          <Section style={userDetails}>
            <Text style={detailText}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong> {email}
            </Text>
          </Section>
          <Text style={paragraph}>If you did not register for an account, please ignore this email.</Text>
          <Section style={btnSection}>
            <Button px={20} py={12} style={btn} href={verificationLink}>
              Verify Account
            </Button>
          </Section>
          <Text style={footer}>This is an automated email. Please do not reply directly to this message.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailVerificationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  padding: "20px",
};


const btnSection = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
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

const userDetails = {
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

const btn = {
  backgroundColor: "#00c3ff",
  borderRadius: "7px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "14px 28px",
  marginTop: "20px",
  boxShadow: "0 3px 8px rgba(0, 195, 255, 0.3)",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "32px",
  textAlign: "center",
};
