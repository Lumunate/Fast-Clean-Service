import { NextResponse } from "next/server";
import { makeOAuthClient } from "../../../../../lib/googleapis";
import googleTokensRepository from "../../../../../repositories/google-tokens";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return Response.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const oauth2Client = makeOAuthClient();
    const { tokens } = await oauth2Client.getToken({ code, redirect_uri: process.env.REDIRECT_URL! });

    await googleTokensRepository.storeTokens("fast-clean-service-website", {
      access_token: tokens.access_token!,
      refresh_token: tokens.refresh_token!,
      scope: tokens.scope!,
      expiry_date: tokens.expiry_date!,
    });

    // Set credentials for immediate use
    oauth2Client.setCredentials(tokens);

    return NextResponse.json("ok");
  } catch (error) {
    console.error("Error in callback:", error);
    return Response.json({ error: "Failed to process callback" }, { status: 500 });
  }
}
