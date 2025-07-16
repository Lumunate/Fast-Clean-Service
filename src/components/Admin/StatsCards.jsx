import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {ButtonLearnMore, StyledCard, StyledPattern} from '../mui/AdminPkgs';
import Link from 'next/link';

const CardOffer = ({ title, subtitle, backgroundColor, path }) => {
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
                    <ButtonLearnMore><Link href={path}>Learn more</Link></ButtonLearnMore>
                </Box>
            </Box>
            <StyledPattern />
        </StyledCard>
    );
};

const StatsCards = ({ bookingLenght }) => {

    const [fleetcare, setFleetcare] = useState(0);

    const getSetFleetcare = async () => {
        try {
            const response = await fetch(`/api/fleetcare-pro`);
            const data = await response.json();
            setFleetcare(data.data.length);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getSetFleetcare();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title="Number of Bookings"
                    subtitle={bookingLenght || 0}
                    backgroundColor="#FEF4C3"
                    path="/admin/booking"
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title="FleetCare Pro Services"
                    subtitle={fleetcare || 0}
                    backgroundColor="#E3D0FF"
                    path="/admin/fleetpro"
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <CardOffer
                    title="Other Vehicle Services"
                    subtitle="85"
                    backgroundColor="#C6F7E2"
                    path="/admin/othervehicles"
                />
            </Grid>
        </Grid>
    );
};

export default StatsCards;
