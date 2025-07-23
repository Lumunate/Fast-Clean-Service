import React, { useState } from "react";

import { CustomFormDateField, CustomFormTextField } from "../../mui/NewFormPkgs";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { ModalButton, ModalCard, StyledCard } from "../../mui/AdminPkgs";
import { useCoupons } from "../../../hooks/useCoupons";
import dayjs from "dayjs";

const NewCouponModal = ({ openModal, setOpenModal, setCoupons, t }) => {
  const { createCoupon } = useCoupons();

  const [formData, setFormData] = useState({
    code: "",
    discountPercentage: "",
    validFrom: dayjs(),
    validUntil: dayjs(),
    maxUses: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateCoupon = async (e) => {
    e.preventDefault();
    const newCoupon = await createCoupon({
      code: formData.code,
      discountPercentage: parseInt(formData.discountPercentage),
      validFrom: formData.validFrom.toISOString(),
      validUntil: formData.validUntil.toISOString(),
      maxUses: parseInt(formData.maxUses),
    });

    if (newCoupon) {
      setCoupons((prev) => [...prev, newCoupon]);
    }

    setOpenModal(false);
    setFormData({
      code: "",
      discountPercentage: 0,
      validFrom: dayjs(),
      validUntil: dayjs(),
      maxUses: 0,
    });
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="add-service-modal"
      aria-describedby="form-to-add-service"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ModalCard
          sx={{
            padding: "20px",
            position: "relative",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <IconButton onClick={() => setOpenModal(false)} sx={{ position: "absolute", top: "10px", right: "10px" }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" sx={{ fontSize: "1.4rem", marginBottom: "20px" }}>
            {t("10")}
          </Typography>
          <StyledCard sx={{ backgroundColor: "#f0f0f0", backdropFilter: "blur(10px)" }}>
            <form onSubmit={handleCreateCoupon}>
              <CustomFormTextField
                label={t("11")}
                name="code"
                value={formData.code}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
              <CustomFormTextField
                label={t("12")}
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
              <CustomFormDateField
                label={t("13")}
                name="validFrom"
                value={formData.validFrom}
                onChange={(d) => {
                  formData.validFrom = d;
                }}
                fullWidth
                sx={{
                  marginTop: "1.3rem",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              />
              <CustomFormDateField
                label={t("14")}
                name="validUntil"
                value={formData.validUntil}
                onChange={(d) => {
                  formData.validUntil = d;
                }}
                fullWidth
                sx={{
                  marginTop: "1.3rem",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              />
              <CustomFormTextField
                label={t("15")}
                name="maxUses"
                value={formData.maxUses}
                onChange={handleFormChange}
                fullWidth
              />
              <ModalButton type="submit" sx={{ fontSize: "1.4rem", width: "max-content", margin: "20px auto" }}>
                {t("16")}
              </ModalButton>
            </form>
          </StyledCard>
        </ModalCard>
      </Box>
    </Modal>
  );
};

export default NewCouponModal;
