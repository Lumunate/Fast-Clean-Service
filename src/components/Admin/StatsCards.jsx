import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {ButtonLearnMore, StyledCard, StyledPattern} from '../mui/AdminPkgs';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const CardOffer = ({ title, subtitle, backgroundColor, path, t }) => {
    return (
        <StyledCard sx={{ background: backgroundColor, padding: '20px', height: 'auto', maxHeight: "300px", position: 'relative' }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h5" sx={{ color: 'black', fontWeight: 700 }}>
                    {title}
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {subtitle}
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <ButtonLearnMore><Link href={path}>{t("3")}</Link></ButtonLearnMore>
                </Box>
            </Box>
            <StyledPattern />
        </StyledCard>
    );
};

const StatsCards = ({ bookingLenght }) => {
    const [otherVehicles, setOtherVehicles] = useState(0);
    const [fleetcare, setFleetcare] = useState(0);

     const t = useTranslations("admin_dashboard.dashboard")

    const getSetFleetcare = async () => {
        try {
            const response = await fetch(`/api/fleetcare-pro`);
            const data = await response.json();
            setFleetcare(data.data.length);
        } catch (error) {
            console.error(error);
        }
    };
    const getSetOtherVehicles = async () => {
        try {
            const response = await fetch(`/api/other-vehicles`);
            const data = await response.json();
            setOtherVehicles(data.data.length); // or adjust if the structure differs
        } catch (error) {
            console.error("Failed to fetch other vehicles:", error);
        }
    };


    useEffect(() => {
        getSetFleetcare();
        getSetOtherVehicles();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title={t("0")}
                    subtitle={bookingLenght || 0}
                    backgroundColor="#FEF4C3"
                    path="/admin/booking"
                    t={t}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title={t("1")}
                    subtitle={fleetcare || 0}
                    backgroundColor="#E3D0FF"
                    path="/admin/fleetpro"
                    t={t}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title={t("2")}
                    subtitle={otherVehicles || 0} // ← dynamic value here
                    backgroundColor="#C6F7E2"
                    path="/admin/othervehicles"
                    t={t}
                />
            </Grid>
        </Grid>
    );
};

export default StatsCards;
