"use client";
import React, { useEffect, useState } from "react";
import {
    CardBody,
    StyledCard,
} from "../mui/AdminPkgs";
import BookingsTable from "./BookingsTable";
import {useTranslations} from "next-intl";

const BookingsCard = () => {
    const t = useTranslations("customer_dashboard.sections.0");

    return (
        <StyledCard>
            <CardBody>
                <BookingsTable />
            </CardBody>
        </StyledCard>
    );
};

export default BookingsCard;