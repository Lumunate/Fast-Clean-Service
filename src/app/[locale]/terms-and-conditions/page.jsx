"use client";
import React from 'react';
import { Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material';
import HeadingLinesAnimation from "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";

const TermsPage = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const termsData = {
        title: "Terms and Conditions",
        content: [
            {
                heading: "Definitions",
                text: [
                    "Assignment: Any assignment from the Client to the Contractor, including in any case the cleaning of one or more vehicles and/or vessels as agreed in an agreement to that effect. The Assignment qualifies as an agreement for services as referred to in Book 7:400 et seq. of the Dutch Civil Code.",
                    "Client: Where these general terms and conditions refer to the Client, this refers to the Business Client and the Private Client, unless stated otherwise.",
                    "Private Client: A natural person who issues the Assignment other than in the exercise of a profession or business.",
                    "Business Client: Client who issues the Assignment in the exercise of his profession or business.",
                    "Contractor: Fast Clean Service registered with the Chamber of Commerce under Chamber of Commerce number 70208085.",
                    "Altijd-Schoon Pakket: Assignment whereby the Contractor undertakes to the Client to clean one or more vehicles and/or vessels in return for payment during a specific term."
                ]
            },
            {
                heading: "Article 1: Applicability",
                text: [
                    "a. These general terms and conditions apply to all Assignments concluded between Client and Contractor. Deviation from these general terms and conditions is only possible if and to the extent that this has been agreed in writing between Client and Contractor. The deviation from these conditions only applies to the relevant Assignment, unless the deviation is confirmed in a subsequent Assignment.",
                    "b. If any provision of these general terms and conditions or of the Order is null and void or is annulled, these general terms and conditions or the Order will otherwise remain in force. The Client and Contractor will then replace the null and void/annulled provision with a provision that approximates the purport of the original provision as closely as possible.",
                    "c. Contractor is not bound by general terms and conditions of Client. The applicability of those general terms and conditions is expressly rejected by Contractor."
                ]
            },
            {
                heading: "Article 2: Time of cleaning",
                text: [
                    "The Client's vehicle or vessel will be cleaned on a pre-agreed day and time. A maximum of 90 minutes will be added to the agreed time as arrival time at the client's."
                ]
            },
            {
                heading: "Article 3: Duration",
                text: [
                    "a. The duration of the Assignment is bound to the completion of the agreed Assignment. If a single Assignment has been agreed, the Assignment ends immediately after the Assignment has been executed. If a Total-Clean Package has been purchased, the Assignment ends after the agreed term has expired.",
                    "b. The Assignment ends immediately upon the death of the Client."
                ]
            },
            {
                heading: "Article 4: Termination",
                text: [
                    "a. The Assignment may be terminated at any time and with immediate effect by either the Client or the Contractor.",
                    "b. If the Client terminates the Assignment within 24 hours before the start of the Assignment, the Contractor reserves the right to charge a reservation fee of 30 euros."
                ]
            },
            {
                heading: "Article 5: Cleaning",
                text: [
                    "a. The dirt that can be removed depends on the cleaning program chosen. Very stubborn dirt such as tar, fly rust and glue residue can only be removed to a limited extent. The client may not expect that damage to the vehicle or vessel, such as paint damage, will be removed with the present method. It is possible that existing damage to the vehicle or vessel will become more visible as a result of the thorough cleaning.",
                    "b. The Contractor shall determine the manner in which the Assignment is performed and shall perform the Assignment to the best of its ability and as a diligent professional. The Contractor cannot guarantee the achievement of any intended result.",
                    "c. The term of the scheduled appointment is a guideline and never applies as a fatal term for execution."
                ]
            },
            {
                heading: "Article 6: Instructions",
                text: [
                    "The Client must comply with the instructions of the Contractor, insofar as these could reasonably affect the correct execution of the Assignment. Actions by the Client that logically lead to a restriction of the Contractor's workspace may be the cause of a limited cleaning result and cannot form the basis for a complaint. This includes parking a vehicle to be cleaned in such a way that it is not fully accessible to the Contractor or leaving a large quantity of materials in the vehicle or vessel during interior cleaning."
                ]
            },
            {
                heading: "Article 7: Checking",
                text: [
                    "a. The Contractor shall check during and after execution of the Assignment whether any damage has occurred.",
                    "b. The Client is obliged to inform the Contractor of any hidden damage and defects that may be aggravated by the Contractor's cleaning method, for example if a decorative strip is loose or recently painted over paint damage.",
                    "c. The Client shall check both the interior and exterior of the vehicle or vessel for any form of damage immediately after completion of the Assignment. If the Client does not find any damage during this check or fails to check the vehicle or vessel for any form of damage, the Assignment shall be deemed to have been carried out properly and without causing any damage."
                ]
            },
            {
                heading: "Article 8: Complaints",
                text: [
                    "Complaints must be reported as soon as possible. Complaints regarding the result delivered by the cleaning of Contractor must be reported within 24 hours via our contact form on www.fastcleanservice.nl. This allows for a reasonable check to be made as to whether the execution of the assignment by Fast Clean Service is the cause of the complaint in question."
                ]
            },
            {
                heading: "Article 9: Liability",
                text: [
                    "a. The Contractor shall only be liable for damage that is beyond all doubt the result of incorrect performance of the service, and shall be limited to the amount paid out by the Contractor's liability insurer in the event in question.",
                    "b. It is possible that existing damage becomes more visible after cleaning the vehicle or vessel. The Contractor cannot be held liable for such damage becoming more visible.",
                    "c. The Contractor shall not be liable for indirect damage, including but not limited to consequential damage and loss of profit, regardless of the cause.",
                    "d. Valuables that are not part of the vehicle or vessel, including but not limited to child seats, receipts, coins, jewelry and glasses are the responsibility of the Client. The vehicle or vessel to be cleaned must be left empty by the Client. If valuables are left behind in the vehicle or vessel, the Contractor will do its best to move the valuables for the Client within the vehicle or vessel. The Contractor is not liable for damage to valuables that occurs during the cleaning of the vehicle or vessel."
                ]
            },
            {
                heading: "Article 10: Payment",
                text: [
                    "a. Private Clients must pay the costs for cleaning the vehicle or vessel prior to the execution of the Assignment by means of iDeal or cash, or immediately after the execution of the Assignment by means of cash payment.",
                    "b. Business Clients must pay the costs for cleaning the vehicle or vessel in cash, by iDeal or within 14 days after the invoice date.",
                    "c. The Client shall be in default without further notice of default if he does not pay on time. The Contractor reserves the right to charge statutory interest if the Client does not pay on time. The Contractor expressly reserves the right to hand over the entire claim to a bailiff without further notice if the Client does not pay on time."
                ]
            },
            {
                heading: "Article 11: Applicable law",
                text: [
                    "These general terms and conditions and the Assignment Agreement as well as disputes arising from or related to these general terms and conditions or the Assignment are exclusively governed by Dutch law and the Amsterdam District Court has jurisdiction."
                ]
            }
        ]
    };


    return (
        <Container maxWidth="lg" sx={{ mt: isSmallScreen ? 7 : 15, mb: 5, padding: isSmallScreen ? '3rem' : 0 }}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <HeadingLinesAnimation sx={{ fontSize: isSmallScreen ? "3rem" : "5.6rem", fontWeight: 700 }}>
                    {termsData.title}
                </HeadingLinesAnimation>
            </Box>
            {termsData.content.map((section, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: isSmallScreen ? "1.4rem" : "1.8rem",
                            fontWeight: 600,
                            mb: 1,
                        }}
                    >
                        {section.heading}
                    </Typography>
                    {section.text.map((paragraph, idx) => (
                        <Typography
                            key={idx}
                            variant="body1"
                            sx={{
                                fontSize: isSmallScreen ? "1rem" : "1.4rem",
                                fontWeight: 300,
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
                            {paragraph}
                        </Typography>
                    ))}
                </Box>
            ))}
        </Container>
    );
};

export default TermsPage;
