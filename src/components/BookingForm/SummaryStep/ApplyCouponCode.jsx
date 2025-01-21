"use client";

import { useState } from "react";
import { useCoupons } from "../../../hooks/useCoupons";
import { Box } from "@mui/material";
import { CustomFormTextField } from "../../mui/NewFormPkgs";
import { NextPrevButton } from "../../mui/BookingFormPackages";

export default function CouponApplier({ basePrice, onDiscount }) {
  const { applyCoupon, loading, error } = useCoupons();
  const [code, setCode] = useState("");
  const [discountInfo, setDiscountInfo] = useState(null);

  const handleApplyCoupon = async () => {
    const result = await applyCoupon(code, basePrice);
    if (result.success) {
      setDiscountInfo({
        originalPrice: result.originalPrice,
        discountAmount: result.discountAmount,
        finalPrice: result.finalPrice,
      });
      onDiscount(result.finalPrice);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        <CustomFormTextField
          label="Apply Code"
          name="couponCode"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
          sx={{
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        />
        <NextPrevButton sx={{ padding: "1.6rem 2.2rem", width: "200px" }} onClick={handleApplyCoupon} disabled={loading || code}>
          {loading ? "Applying..." : "Apply Coupon"}
        </NextPrevButton>

        {error && <p>Error: {error}</p>}

        {discountInfo && (
          <div>
            <p>Original Price: ${discountInfo.originalPrice?.toFixed(2)}</p>
            <p>Discount Amount: ${discountInfo.discountAmount?.toFixed(2)}</p>
            <p>Final Price: ${discountInfo.finalPrice?.toFixed(2)}</p>
          </div>
        )}
      </Box>
    </Box>
  );
}
