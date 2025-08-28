import { OAuth2Client } from "google-auth-library";

// Factory to create a new OAuth2Client per request
export function makeOAuthClient() {
  return new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    process.env.REDIRECT_URL!
  );
}

// Generate the authorization URL
export function getAuthUrl() {
  const client = makeOAuthClient();
  return client.generateAuthUrl({
    access_type: "offline", // This will give us a refresh token
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/calendar.events",
    ],
  });
}

// Helper to get an authed client for a user
export async function getAuthedClient(getUserTokens: () => Promise<any>) {
  const client = makeOAuthClient();
  const tokens = await getUserTokens();
  if (!tokens?.access_token && !tokens?.refresh_token) {
    throw new Error("User not authorized with Google");
  }
  client.setCredentials(tokens);
  return client;
}
