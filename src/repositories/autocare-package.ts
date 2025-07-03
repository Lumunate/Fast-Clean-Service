import { AutocareService, ServiceOptions } from "../models/Autocare-Package";

export class AutocareServiceRepository {
  async findAll() {
    const services = await AutocareService.find();
    console.log("services from repo: ", services);
    const options = await ServiceOptions.find();
    return { packages: services[0], options };
  }

  async findById(id: string) {
    return await AutocareService.findOne({ 'standard.id': id })
      || await AutocareService.findOne({ 'deluxe.id': id })
      || await AutocareService.findOne({ 'premium.id': id });
  }

  async create(data: any) {
    const carService = new AutocareService(data.packages);
    const options = new ServiceOptions(data.options);
    await carService.save();
    await options.save();
    return { packages: carService, options };
  }

  async update(id: string, data: any) {
    const updatePath = data.id.split("-")[1];

    const existingDoc = await AutocareService.findOne({
      [`${updatePath}.id`]: data.id
    });
    
    // Then attempt the update
    const result = await AutocareService.findOneAndUpdate(
      { [`${updatePath}.id`]: data.id },
      {
        $set: {
          [`${updatePath}.$[elem]`]: data,
        },
      },
      {
        arrayFilters: [{ "elem.id": data.id }],
        new: true,
      }
    );

    return result;
  }

  async updatePartial(id: string, data: any) {
    return await this.update(id, data);
  }

  async delete(id: string) {
    return await AutocareService.findOneAndDelete({
      $or: [
        { 'standard.id': id },
        { 'deluxe.id': id },
        { 'premium.id': id }
      ]
    });
  }
}