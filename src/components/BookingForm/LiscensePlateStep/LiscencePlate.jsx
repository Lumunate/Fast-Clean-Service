import { Box, Input, Checkbox, FormControlLabel } from "@mui/material";
import Image from "next/image";
import React from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import {
    LisencePlateContainer,
    LisencePlateImg,
    LisencePlateInput,
    StyledCheckbox,
} from "../../mui/BookingFormPackages";
import {useTranslations} from "next-intl";

const LiscencePlate = () => {
    const t = useTranslations('booking');
    const form = useMultiStepForm();

    return (
        <Box>
            <LisencePlateContainer>
                <Box className="border" />

                <LisencePlateImg>
                    <Image width={120} height={-1} alt="logo" src="/eu_flag.jpg" />
                </LisencePlateImg>
                <LisencePlateInput>
                    <Input
                        sx={{}}
                        placeholder="AA-1234"
                        value={form.formData.licensePlate}
                        onChange={(e) => {
                            const upperCaseValue = e.target.value.toUpperCase();
                            form.updateFormData({ licensePlate: upperCaseValue });
                        }}
                        disabled={form.formData.proceedWithoutLicensePlate || false}
                    />
                </LisencePlateInput>
            </LisencePlateContainer>
            <FormControlLabel
                control={
                    <StyledCheckbox
                        checked={form.formData.proceedWithoutLicensePlate || false}
                        onChange={(e) => {
                            form.updateFormData({
                                proceedWithoutLicensePlate: e.target.checked,
                                licensePlate: "",
                            });
                        }}
                    />
                }
                label={t("steps.1.option")}
                sx={{ marginTop: 2 }}
            />
        </Box>
    );
};

export default LiscencePlate;
