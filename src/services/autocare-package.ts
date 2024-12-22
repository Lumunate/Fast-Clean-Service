import { AutocareServiceRepository } from "../repositories/autocare-package";
import { carServiceValidation, packageValidation, serviceOptionsValidation } from "../types/autocare-package";

class AutocareServiceService {
  private repository: AutocareServiceRepository;

  constructor() {
    this.repository = new AutocareServiceRepository();
  }

  async getAllServices() {
    return await this.repository.findAll();
  }

  async getServiceById(id: string) {
    return await this.repository.findById(id);
  }

  async createService(data: any) {
    const validatedPackages = carServiceValidation.parse(data.packages);
    const validatedOptions = serviceOptionsValidation.parse(data.options);

    return await this.repository.create({
      packages: validatedPackages,
      options: validatedOptions,
    });
  }

  async updateService(id: string, data: any) {
    const validatedData = packageValidation.parse(data);
    return await this.repository.update(id, validatedData);
  }

  async updatePartialService(id: string, data: any) {
    // For partial updates, we'll validate only the fields that are present
    const validatedData = carServiceValidation.partial().parse(data);
    return await this.repository.updatePartial(id, validatedData);
  }

  async deleteService(id: string) {
    return await this.repository.delete(id);
  }
}

const autocarService = new AutocareServiceService();
export default autocarService;
