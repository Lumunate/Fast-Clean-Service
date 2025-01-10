// src/components/CouponManager.js
"use client";

import { useState, useEffect } from "react";
import { useCoupons } from "../../../hooks/useCoupons";

export default function CouponManager() {
  const { getCoupons, createCoupon, loading, error } = useCoupons();
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const loadCoupons = async () => {
      const data = await getCoupons();
      setCoupons(data);
    };

    loadCoupons();
  }, []);

  const handleCreateCoupon = async () => {
    const newCoupon = await createCoupon({
      code: "SUMMER25",
      discountPercentage: 25,
      validFrom: new Date(),
      validUntil: new Date("2025-12-31"),
      maxUses: 100,
    });

    if (newCoupon) {
      setCoupons((prev) => [...prev, newCoupon]);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <button onClick={handleCreateCoupon}>Create Coupon</button>

      <ul>
        {coupons.map((coupon) => (
          <li key={coupon._id}>
            {coupon.code} - {coupon.discountPercentage}% off
          </li>
        ))}
      </ul>
    </div>
  );
}
