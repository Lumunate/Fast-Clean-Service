import { oauth2Client } from "../../../../../lib/googleapis";
import googleTokensRepository from "../../../../../repositories/google-tokens";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return Response.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    // Get tokens from Google
    const { tokens } = await oauth2Client.getToken(code);

    // Store tokens in database
    await googleTokensRepository.storeTokens("fast-clean-service-website", {
      access_token: tokens.access_token!,
      refresh_token: tokens.refresh_token!,
      scope: tokens.scope!,
      expiry_date: tokens.expiry_date!,
    });

    // Set credentials for immediate use
    oauth2Client.setCredentials(tokens);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error in callback:", error);
    return Response.json({ error: "Failed to process callback" }, { status: 500 });
  }
}
