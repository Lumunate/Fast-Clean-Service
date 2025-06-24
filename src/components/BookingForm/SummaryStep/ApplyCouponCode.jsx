'use client';

import { useState } from 'react';
import { useCoupons } from '../../../hooks/useCoupons';
import { Box } from '@mui/material';
import { CustomFormTextField } from '../../mui/NewFormPkgs';
import { NextPrevButton } from '../../mui/BookingFormPackages';
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import {useLocale, useTranslations} from "next-intl";

export default function CouponApplier({ basePrice }) {
  const { applyCoupon, loading, error } = useCoupons();
    const t = useTranslations('booking');
  const [code, setCode] = useState("");
  const [discountInfo, setDiscountInfo] = useState(null);
  const locale = useLocale()

  const form = useMultiStepForm();

  const handleApplyCoupon = async () => {
    const result = await applyCoupon(code, basePrice);
    if (result.success) {
      setDiscountInfo({
        originalPrice: form.price,
        discountAmount: result.discount,
        finalPrice: form.price * ((100 - result.discount) / 100),
      });

      form.updateFormData({ discount: result.discount });
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
        "@media (max-width: 600px)": {
          marginTop: "-2rem",
          marginBottom: "3rem",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <CustomFormTextField
          label={t("steps.8.apply_coupon")}
          name="couponCode"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
          sx={{
            borderRadius: "8px",
          }}
        />
        <NextPrevButton
          sx={{
            padding: "1.6rem 2.2rem",
            width: locale === "en" ? "217px":"270px",
            top: "1rem",
            "@media (max-width: 600px)": {
              top: "1.5rem",
              fontSize: "1.2rem",
              width: "140px",
              height: "auto",
              padding: "1.6rem 0.8rem",
            },
          }}
          onClick={handleApplyCoupon}
          disabled={loading || !code}
        >
          {loading ? "Applying..." : t("steps.8.button")}
        </NextPrevButton>
      </Box>
      {discountInfo && (
        <div>
          <p>{t("steps.8.other.0")} ${discountInfo.originalPrice?.toFixed(2)}</p>
          <p>{t("steps.8.other.1")} {discountInfo.discountAmount?.toFixed(2)}%</p>
          <p>{t("steps.8.other.2")} ${discountInfo.finalPrice?.toFixed(2)}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </Box>
  );
}
