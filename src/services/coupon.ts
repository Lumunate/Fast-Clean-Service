import { ICoupon } from "../models/Coupon";
import { CouponRepository } from "../repositories/coupon";


 class CouponService {
  private repository: CouponRepository;

  constructor() {
    this.repository = new CouponRepository();
  }

  async createCoupon(couponData: Partial<ICoupon>): Promise<ICoupon> {
    // Validate dates
    if (couponData.validUntil && couponData.validFrom) {
      if (new Date(couponData.validUntil) <= new Date(couponData.validFrom)) {
        throw new Error('Valid until date must be after valid from date');
      }
    }

    return await this.repository.create(couponData);
  }

  async getCoupon(id: string): Promise<ICoupon> {
    const coupon = await this.repository.findById(id);
    if (!coupon) {
      throw new Error('Coupon not found');
    }
    return coupon;
  }

  async getAllCoupons(includeInactive: boolean = false): Promise<ICoupon[]> {
    const filter = includeInactive ? {} : { isActive: true };
    return await this.repository.findAll(filter);
  }

  async updateCoupon(id: string, couponData: Partial<ICoupon>): Promise<ICoupon> {
    const coupon = await this.repository.update(id, couponData);
    if (!coupon) {
      throw new Error('Coupon not found');
    }
    return coupon;
  }

  async deleteCoupon(id: string): Promise<ICoupon> {
    const coupon = await this.repository.delete(id);
    if (!coupon) {
      throw new Error('Coupon not found');
    }
    return coupon;
  }

  async validateCoupon(code: string): Promise<{
    valid: boolean;
    discount?: number;
    message?: string;
  }> {
    const coupon = await this.repository.findByCode(code);
    
    if (!coupon) {
      return { valid: false, message: 'Coupon not found' };
    }

    if (!coupon.isActive) {
      return { valid: false, message: 'Coupon is inactive' };
    }

    const now = new Date();
    if (now < coupon.validFrom) {
      return { valid: false, message: 'Coupon is not yet valid' };
    }

    if (now > coupon.validUntil) {
      return { valid: false, message: 'Coupon has expired' };
    }

    if (coupon.currentUses >= coupon.maxUses) {
      return { valid: false, message: 'Coupon usage limit reached' };
    }

    return {
      valid: true,
      discount: coupon.discountPercentage
    };
  }

  async applyCoupon(code: string): Promise<{
    success: boolean;
    discount?: number;
    message?: string;
  }> {
    const validation = await this.validateCoupon(code);
    
    if (!validation.valid) {
      return {
        success: false,
        message: validation.message
      };
    }

    const coupon = await this.repository.findByCode(code);
    if (coupon) {
      await this.repository.incrementUses(coupon.id);
      return {
        success: true,
        discount: coupon.discountPercentage
      };
    }

    return {
      success: false,
      message: 'Error applying coupon'
    };
  }
}

const couponService = new CouponService();
export default couponService;