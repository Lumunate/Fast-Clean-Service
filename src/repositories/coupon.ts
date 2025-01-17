import { Coupon, ICoupon } from "../models/Coupon";

export class CouponRepository {
  async create(couponData: Partial<ICoupon>): Promise<ICoupon> {
    const coupon = new Coupon(couponData);
    return await coupon.save();
  }

  async findById(id: string): Promise<ICoupon | null> {
    return await Coupon.findById(id);
  }

  async findByCode(code: string): Promise<ICoupon | null> {
    return await Coupon.findOne({ code: code.toUpperCase() });
  }

  async findAll(filter: object = {}): Promise<ICoupon[]> {
    return await Coupon.find(filter);
  }

  async update(id: string, couponData: Partial<ICoupon>): Promise<ICoupon | null> {
    return await Coupon.findByIdAndUpdate(
      id,
      { $set: couponData },
      { new: true, runValidators: true }
    );
  }

  async delete(id: string): Promise<ICoupon | null> {
    return await Coupon.findByIdAndDelete(id);
  }

  async incrementUses(id: string): Promise<ICoupon | null> {
    return await Coupon.findByIdAndUpdate(
      id,
      { $inc: { currentUses: 1 } },
      { new: true }
    );
  }
}