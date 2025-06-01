import {IUserInfo} from "../types/user";
import userRepository from "../repositories/user";
import bcrypt from "bcryptjs";
import sendEmail from "./sendEmail";
import EmailVerificationEmail from "../templates/email-verification";
import { UserInfo } from "../models/User";

class UserService {
  async createUser(data: Partial<IUserInfo>): Promise<IUserInfo> {
    if (!(await this.isUserExists(data.email))) {
      throw new Error("User already exists");
    }

    const verificationToken = this.generateRandomHex();
    // append verification details
    data.emailVerified = false;
    data.emailVerificationToken = verificationToken;

    // generate hashed password
    data.password = await this.generatePasswordHash(data.password);
    // create user
    const user = await userRepository.create(data);

    // send verification email
    await this.sendMagicLink(user);

    return user;
  }

  async generatePasswordHash(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  async getUser(id: string): Promise<IUserInfo | null> {
    return await userRepository.findById(id);
  }

  async getAllUsers(): Promise<IUserInfo[]> {
    return await userRepository.findAll();
  }

  async updateUser(id: string, data: Partial<IUserInfo>): Promise<IUserInfo | null> {
    return await userRepository.update(id, data);
  }

  async deleteUser(id: string): Promise<IUserInfo | null> {
    return await userRepository.delete(id);
  }

  async isUserExists(email: string): Promise<boolean> {
    return !!UserInfo.find({ email });
  }

  generateRandomHex(): string {
    return Math.floor(Math.random() * 0xffffffff)
      .toString(16)
      .padStart(8, "0");
  }

  generateMagicLink(user: IUserInfo): string {
    if (!user.emailVerificationToken) {
      throw new Error("User does not have an email verification token");
    }

    return `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${user.emailVerificationToken}`;
  }

  async sendMagicLink(user: IUserInfo): Promise<void> {
    console.log(user);
    await sendEmail(
      {
        to: user.email,
        from: "fizoneechan@gmail.com",
        subject: "Email Verification Link",
      },
      EmailVerificationEmail,
      {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        verificationLink: this.generateMagicLink(user),
      }
    );
  }

  async authenticateEmail(token: string): Promise<void> {
    const user = await userRepository.findByEmailVerificationToken(token);
    
    if (!user) {
      throw new Error("Invalid or expired verification token");
    }
    
    // Update user's verification status
    await userRepository.update(user._id.toString(), {
      emailVerified: true,
      emailVerificationToken: null // Clear the token after verification
    });
  }
}

const userService = new UserService();
export default userService;
