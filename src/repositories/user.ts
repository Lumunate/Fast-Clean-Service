import { ObjectId } from "mongoose";
import {UserInfo} from "../models/User";
import {IUserInfo} from "../types/user";

class UserRepository extends UserInfo {
  async create(data: Partial<IUserInfo>): Promise<IUserInfo> {
    const user = new UserInfo(data);
    return await user.save();
  }

  async findById(id: string): Promise<IUserInfo | null> {
    return UserInfo.findById(id);
  }

  async findAll(): Promise<IUserInfo[]> {
    return UserInfo.find();
  }

  async update(id: string, userData: Partial<IUserInfo>): Promise<IUserInfo | null> {
    return UserInfo.findByIdAndUpdate(id, userData);
  }

  async delete(id: string): Promise<IUserInfo | null> {
    return UserInfo.findByIdAndDelete(id);
  }

  async findByEmailVerificationToken(token: string): Promise<IUserInfo & {_id: ObjectId} | null> {
    return UserInfo.findOne({emailVerificationToken: token});
  }
}

const userRepository = new UserRepository();
export default userRepository;
