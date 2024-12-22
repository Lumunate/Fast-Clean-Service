import { SubscriptionPackageRepository } from "../repositories/subscription-package";
import { subscriptionPackageValidation } from "../types/subscripton-package";

class SubscriptionPackageService {
  private repository: SubscriptionPackageRepository;

  constructor() {
    this.repository = new SubscriptionPackageRepository();
  }

  async getAllPackages() {
    return await this.repository.findAll();
  }

  async getPackageById(id: string) {
    return await this.repository.findById(id);
  }

  async createPackage(data: any) {
    const validatedData = subscriptionPackageValidation.parse(data);
    return await this.repository.create(validatedData);
  }

  async createManyPackages(data: any[]) {
    const validatedData = data.map((pkg) => subscriptionPackageValidation.parse(pkg));
    return await this.repository.createMany(validatedData);
  }

  async updatePackage(id: string, data: any) {
    const validatedData = subscriptionPackageValidation.parse(data);
    return await this.repository.update(id, validatedData);
  }

  async updatePartialPackage(id: string, data: any) {
    const validatedData = subscriptionPackageValidation.partial().parse(data);
    return await this.repository.updatePartial(id, validatedData);
  }

  async deletePackage(id: string) {
    return await this.repository.delete(id);
  }
}

const subscriptionPackageService = new SubscriptionPackageService();
export default subscriptionPackageService;
