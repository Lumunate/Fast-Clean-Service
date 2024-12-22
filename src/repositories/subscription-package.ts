import { SubscriptionPackage } from '../models/SubscriptionPackage';

export class SubscriptionPackageRepository {
  async findAll() {
    return await SubscriptionPackage.find();
  }

  async findById(id: string) {
    return await SubscriptionPackage.findOne({ id });
  }

  async create(data: any) {
    const subscriptionPackage = new SubscriptionPackage(data);
    return await subscriptionPackage.save();
  }

  async createMany(data: any[]) {
    return await SubscriptionPackage.insertMany(data);
  }

  async update(id: string, data: any) {
    return await SubscriptionPackage.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async updatePartial(id: string, data: any) {
    return await SubscriptionPackage.findOneAndUpdate(
      { id },
      { $set: data },
      { new: true }
    );
  }

  async delete(id: string) {
    return await SubscriptionPackage.findOneAndDelete({ id });
  }
}
