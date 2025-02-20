import { OAuth2Client } from "google-auth-library";

export const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URL
);

// 2. Generate the authorization URL
export function getAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: "offline", // This will give us a refresh token
    scope: ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/calendar.events"],
  });
}

// 3. Handle the callback and get tokens
export async function getTokens(code: string) {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  return tokens;
}
