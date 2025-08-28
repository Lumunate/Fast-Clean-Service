import {OAuth2Client} from "google-auth-library";
import {GoogleToken, IGoogleToken} from "../models/GoogleToken";
import { makeOAuthClient } from "../lib/googleapis";

class GoogleTokensRepository {
  private oauth2Client: OAuth2Client;

  constructor(oauth2Client: OAuth2Client) {
    this.oauth2Client = oauth2Client;
  }

  async storeTokens(
    userId: string,
    tokens: {
      access_token: string;
      refresh_token?: string;
      scope: string;
      token_type?: string;
      expiry_date: number;
    }
  ): Promise<IGoogleToken> {
    try {
      // Fetch existing token to preserve refresh_token if missing
      const existing = await GoogleToken.findOne({ userId });
      const refresh_token = tokens.refresh_token || existing?.refresh_token;
      if (!refresh_token) throw new Error("No refresh_token available to store");
      // Update or create token document
      return await GoogleToken.findOneAndUpdate(
        { userId },
        {
          access_token: tokens.access_token,
          refresh_token,
          scope: tokens.scope,
          token_type: tokens.token_type || "Bearer",
          expiry_date: tokens.expiry_date,
        },
        {
          new: true,
          upsert: true,
        }
      );
    } catch (error) {
      console.error("Error storing tokens:", error);
      throw error;
    }
  }

  async getTokens(userId: string): Promise<IGoogleToken | null> {
    try {
      const token = await GoogleToken.findOne({ userId });

      if (!token) {
        return null;
      }

      // If token is expired, refresh it
      if (token.isExpired()) {
        const newTokens = await this.refreshTokens(token.refresh_token);
        return this.storeTokens(userId, {
          access_token: newTokens.access_token!,
          refresh_token: token.refresh_token,
          scope: newTokens.scope!,
          token_type: newTokens.token_type,
          expiry_date: newTokens.expiry_date!,
        });
      }

      return token;
    } catch (error) {
      console.error("Error getting tokens:", error);
      throw error;
    }
  }

  private async refreshTokens(refresh_token: string) {
    try {
      this.oauth2Client.setCredentials({
        refresh_token,
      });

      const { credentials } = await this.oauth2Client.refreshAccessToken();
      return credentials;
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw error;
    }
  }

  async deleteTokens(userId: string): Promise<boolean> {
    try {
      const result = await GoogleToken.deleteOne({ userId });
      return result.deletedCount > 0;
    } catch (error) {
      console.error("Error deleting tokens:", error);
      throw error;
    }
  }
}

const googleTokensRepository = new GoogleTokensRepository(makeOAuthClient());
export default googleTokensRepository;
