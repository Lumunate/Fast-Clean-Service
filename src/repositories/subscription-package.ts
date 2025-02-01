import { SubscriptionPackage } from '../models/SubscriptionPackage';

export class SubscriptionPackageRepository {
  async findAll() {
    return SubscriptionPackage.find();
  }

  async findById(id: string) {
    return SubscriptionPackage.findOne({id});
  }

  async create(data: any) {
    const subscriptionPackage = new SubscriptionPackage(data);
    return await subscriptionPackage.save();
  }

  async createMany(data: any[]) {
    return await SubscriptionPackage.insertMany(data);
  }

  async update(id: string, data: any) {
    return SubscriptionPackage.findOneAndUpdate({_id: id}, data, {new: true});
  }

  async updatePartial(id: string, data: any) {
    return SubscriptionPackage.findOneAndUpdate(
        {id},
        {$set: data},
        {new: true}
    );
  }

  async delete(id: string) {
    return SubscriptionPackage.findOneAndDelete({id});
  }
}
