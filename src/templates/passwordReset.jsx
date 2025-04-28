import React from "react";
import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";
// const baseUrl = process.env.VERCEL_URL;
const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

const PasswordResetEmail = ({ name, resetLink }) => {
  const accentColor = "#00c3ff";

  return (
    <Html>
      <Head />
      <Preview>Password Reset Request</Preview>
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
          <Heading style={{ ...heading, color: accentColor }}>Password Reset Request</Heading>
          <Text style={paragraph}>Hello {name},</Text>
          <Text style={paragraph}>
            We received a request to reset your password. Click the button below to set a new password. If you didn’t make this
            request, you can ignore this email.
          </Text>
          <Section style={btnSection}>
            <Button px={20} py={12} style={btn} href={resetLink}>
              Reset Password
            </Button>
          </Section>
          <Text style={footer}>This is an automated email. Please do not reply directly to this message.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default PasswordResetEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const imgSection = {
  marginTop: 32,
};

const btnSection = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
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

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#555",
  marginBottom: "20px",
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
