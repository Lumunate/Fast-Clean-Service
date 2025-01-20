"use client";
import React, { useEffect, useState } from "react";
import {Box, Grid, Typography, Container} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ServiceHeading } from "../../components/Home/ServicesOverview/ServiceColumnGroup";
import { DecorativeBackgroundImage } from "../../components/Decorative/Decorative.style";
import RadialCircle from "../../components/Decorative/RadialCircle";
import Image from "next/image";
import {
  ServiceTitle,
    ServiceSubtitle,
    ServiceCard,
    ServiceIcon,
} from "../fleet/FleetMain";
import {
  SubsciptionsContainer,
  StyledCard,
  StyledImageContainer,
  GradientBox,
  StyledPriceContainer,
  StyledOptionsList,
  ImageWrapper,
} from "./Subscribe.style";
import { useSubscriptionPackages } from "../../hooks/useSubscriptionPackages";
import { useTheme } from "@mui/material/styles";


const colors = ["#5DFA48", "#005BAC", "#BA8B1D"];
const gradients = [
  { top: "#5DFA48", bottom: "#38E274" },
  { top: "#40A7FF", bottom: "#1C79CC" },
  { top: "#F2DB01", bottom: "#D6AB01" },
];

const PackageCard = ({ pkg, index, highlightColor }) => {
  const [duration, setDuration] = useState(false);
  const [frequency, setFrequency] = useState(false);
  const [additional, setAdditional] = useState(false);
  const { theme } = useTheme();

  return (
    <StyledCard>
      <Box sx={{ position: "relative", width: "100%", height: "260px" }}>
        <ImageWrapper>
          <Image
            src={`/bookingFormIcons/sub${index + 1}.png`}
            alt={`${pkg.name} image`}
            width={480}
            height={325}
            objectFit="cover"
          />
        </ImageWrapper>
        <StyledImageContainer highlightColor={highlightColor} />
      </Box>

      <GradientBox gradient={gradients[index]}>{pkg.name}</GradientBox>

      <StyledPriceContainer highlightColor={highlightColor}>
        <Typography sx={{ color: theme.palette.mode === "dark" ? "#C1C1C1" : "#525252", fontSize: "1.2rem", fontWeight: "400" }}>
          FROM
        </Typography>
        <Typography sx={{ fontSize: "3.8rem", fontWeight: "600", color: highlightColor }}>{pkg.price}</Typography>
        <Typography sx={{ color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252", fontSize: "1.6rem", fontWeight: "600" }}>
          {pkg.duration}
        </Typography>
      </StyledPriceContainer>

      <StyledOptionsList>
        {pkg.packages.map((item) => (
          <Box key={item}>
            <Image src="/bookingFormIcons/Checkmark.png" alt="Checkmark" width={20} height={20} />
            <Typography sx={{ color: theme.palette.mode === "dark" ? "#C1C1C1" : "#525252" }}>{item}</Typography>
          </Box>
        ))}
      </StyledOptionsList>

      {pkg.durationOptions && (
        <Box sx={{ borderTop: "1px solid #e0e0e0", marginTop: "2.1rem", paddingTop: "1rem" }}>
          <Typography
            onClick={() => setDuration(!duration)}
            sx={{ fontSize: "1.6rem", fontWeight: "600", cursor: "pointer", textAlign: "center" }}
          >
            Duration options
            <FontAwesomeIcon icon={duration ? faChevronUp : faChevronDown} style={{ marginLeft: "0.5rem" }} />
          </Typography>
          {duration && (
            <Box>
              {pkg.durationOptions.map((option) => (
                <Box key={option.duration} sx={{ display: "flex", justifyContent: "space-between", paddingTop: "1rem" }}>
                  <Typography sx={{ fontWeight: "600" }}>{option.duration}</Typography>
                  <Typography sx={{ color: "#78D53F", fontWeight: "bold" }}>
                    {option.additionalCost === 0 ? "" : `+ €${option.additionalCost}`}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      )}

      {pkg.cleaningFrequencyOptions && (
        <Box sx={{ borderTop: "1px solid #e0e0e0", marginTop: "2.1rem", paddingTop: "1rem" }}>
          <Typography
            onClick={() => setFrequency(!frequency)}
            sx={{ fontSize: "1.6rem", fontWeight: "600", cursor: "pointer", textAlign: "center" }}
          >
            Cleaning Frequency
            <FontAwesomeIcon icon={frequency ? faChevronUp : faChevronDown} style={{ marginLeft: "0.5rem" }} />
          </Typography>
          {frequency && (
            <Box>
              {pkg.cleaningFrequencyOptions.map((option) => (
                <Box key={option.frequency} sx={{ display: "flex", justifyContent: "space-between", paddingTop: "1rem" }}>
                  <Typography sx={{ fontWeight: "600" }}>{option.frequency}</Typography>
                  <Typography sx={{ color: "#78D53F", fontWeight: "bold" }}>
                    {option.additionalCost === 0 ? "" : `+ €${option.additionalCost}`}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      )}

      {pkg.additionalOptions.length > 0 ? (
        <Box sx={{ borderTop: "1px solid #e0e0e0", marginTop: "2.1rem", paddingTop: "1rem" }}>
          <Typography
            onClick={() => setAdditional(!additional)}
            sx={{ fontSize: "1.6rem", fontWeight: "600", cursor: "pointer", textAlign: "center" }}
          >
            Additional Options
            <FontAwesomeIcon icon={additional ? faChevronUp : faChevronDown} style={{ marginLeft: "0.5rem" }} />
          </Typography>
          {additional && (
            <Box>
              {pkg.additionalOptions.map((option) => (
                <Box key={option.option} sx={{ display: "flex", justifyContent: "space-between", paddingTop: "1rem" }}>
                  <Typography sx={{ fontWeight: "600" }}>{option.option}</Typography>
                  <Typography sx={{ color: "#78D53F", fontWeight: "bold" }}>
                    {option.additionalCost === 0 ? "" : `+ €${option.additionalCost}`}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ) : (
        <Box sx={{ borderTop: "1px solid #e0e0e0", marginTop: "2.1rem", paddingTop: "1rem", paddingBottom: "3.9rem" }}>
          <Typography sx={{ fontSize: "1.6rem", fontWeight: "600", cursor: "pointer", textAlign: "center" }}>
            Additional Options
            <FontAwesomeIcon icon={additional ? faChevronUp : faChevronDown} style={{ marginLeft: "0.5rem" }} />
          </Typography>
        </Box>
      )}
    </StyledCard>
  );
};

const Page = () => {
  const { packages, loading, error, fetchPackages } = useSubscriptionPackages();
  const theme = useTheme();

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  if (error) {
    return (
        <Box sx={{ marginTop: "15rem" }}>
          <ServiceHeading sx={{ fontSize: "5.6rem", marginBottom: "3rem" }}>SUBSCRIPTIONS</ServiceHeading>
          <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
          >
            <DecorativeBackgroundImage
                top={"30%"}
                right={"0"}
                width="90rem"
                height="85rem"
                sx={{ zIndex: "1" }}
            />
            <RadialCircle
                top={"20rem"}
                right={"20rem"}
                sx={{
                  width: "10rem !important",
                  height: "10rem !important",
                  zIndex: "1",
                }}
            />
            <Box sx={{ maxWidth: "1110px", mb: 10 }}>
              <Box sx={{ mb: 8 }}>
                <ServiceSubtitle>
                  Subscription Plans – Worry-Free Maintenance for your Vehicle
                </ServiceSubtitle>
                <Typography
                    sx={{
                      textAlign: "center",
                      maxWidth: "1110px",
                      margin: "0 auto",
                      fontWeight: "300",
                      color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                      fontSize: "1.8rem",
                      lineHeight: 1.6,
                    }}
                >
                  With our Fast Clean Service Subscription Plans we offer a
                  flexible and economical way to always keep your vehicle in top
                  condition. Choose from several options tailored to your needs
                  and driving style, with regular maintenance and exclusive
                  benefits.
                </Typography>
              </Box>

              <Box sx={{ mb: 8, alignItems: "center", display: "flex", flexDirection: "column" }}>
                <Typography
                    variant="h3"
                    sx={{
                      textAlign: "center",
                      color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                      fontSize: "3.2rem",
                      mb: 2,
                    }}
                >
                  What do we offer:
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                  <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                      <ServiceCard>
                        <ServiceIcon>
                          <img src="/s1.png" alt="Expert Care" />
                        </ServiceIcon>
                        <Typography
                            sx={{
                              color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                              mb: 0.6,
                              fontWeight: "400",
                              fontSize: "1.8rem",
                            }}
                        >
                          Expert Care
                        </Typography>
                        <Typography
                            sx={{
                              color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                              fontSize: "1.4rem",
                              fontWeight: "300",
                            }}
                        >
                          Periodic cleaning and maintenance of both interior and exterior.
                          Better rates for returning customers.
                        </Typography>
                      </ServiceCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                      <ServiceCard>
                        <ServiceIcon>
                          <img src="/s2.png" alt="Flexibility" />
                        </ServiceIcon>
                        <Typography
                            sx={{
                              color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                              mb: 0.6,
                              fontWeight: "400",
                              fontSize: "1.8rem",
                            }}
                        >
                          Flexibility
                        </Typography>
                        <Typography
                            sx={{
                              color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                              fontSize: "1.4rem",
                              fontWeight: "300",
                            }}
                        >
                          Flexibility in choosing the desired frequency (monthly, quarterly, etc.).
                        </Typography>
                      </ServiceCard>
                    </Grid>
                  </Grid>
                </Box>
              </Box>


              <Typography
                  sx={{
                    textAlign: "center",
                    color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                    fontSize: "1.8rem",
                    maxWidth: "750px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    fontWeight: "300",
                  }}
              >
                Choose one of our subscription options and enjoy convenience and
                quality, without a hassle!
              </Typography>
            </Box>
          </Container>
        </Box>
    );
  }


  if (!packages) {
    return null;
  }

  return (
    <Box sx={{ marginTop: "15rem" }}>
      <ServiceHeading sx={{ fontSize: "5.6rem" }}>SUBSCRIPTIONS</ServiceHeading>
      <Container sx={{ padding: "8rem", marginTop: "6rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ maxWidth: "1110px", mb: 10 }}>
          <Box sx={{ mb: 8 }}>
            <ServiceSubtitle>
              Subscription Plans – Worry-Free Maintenance for your Vehicle
            </ServiceSubtitle>
            <Typography sx={{
              textAlign: 'center',
              maxWidth: '1110px',
              margin: '0 auto',
              fontWeight: "300",
              color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
              fontSize: '1.8rem',
              lineHeight: 1.6
            }}>
              With our Fast Clean Service Subscription Plans we offer a flexible and economical
              way to always keep your vehicle in top condition. Choose from several options tailored to your needs and driving style, with regular maintenance and exclusive benefits
            </Typography>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{
              textAlign: 'center',
              color: theme.palette.mode === "dark" ? "#fff" : '#232E4A',
              fontSize: '3.2rem',
              mb: 2
            }}>
              What do we offer:
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <ServiceCard>
                  <ServiceIcon>
                    <img src="/s1.png" alt="Expert Care"/>
                  </ServiceIcon>
                  <Typography sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : '#232E4A',
                    mb: 0.6,
                    fontWeight: '400',
                    fontSize: "1.8rem",
                  }}>
                    Expert Care
                  </Typography>
                  <Typography sx={{ color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000", fontSize: "1.4rem", fontWeight: "300" }}>
                    Periodic cleaning and maintenance of both interior and exterior Better rates for returning customers
                  </Typography>
                </ServiceCard>
              </Grid>

              <Grid item xs={12} md={4}>
                <ServiceCard>
                  <ServiceIcon>
                    <img src="/s2.png" alt="Flexibility"/>
                  </ServiceIcon>
                  <Typography sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : '#232E4A',
                    mb: 0.6,
                    fontWeight: '400',
                    fontSize: "1.8rem",
                  }}>
                    Flexibility
                  </Typography>
                  <Typography sx={{ color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000", fontSize: "1.4rem", fontWeight: "300" }}>
                    Flexibility in choosing the desired frequency (monthly, quarterly, etc.)
                  </Typography>
                </ServiceCard>
              </Grid>
            </Grid>
          </Box>

          <Typography sx={{
            textAlign: 'center',
            color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
            fontSize: '1.8rem',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: "300",
          }}>
            Choose one of our subscription options and enjoy convenience and quality, without a hassle!
          </Typography>
        </Box>
      </Container>
      <SubsciptionsContainer>
        {packages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} index={index} highlightColor={colors[index % 3]} />
        ))}

        <DecorativeBackgroundImage top={"60%"} right={"0"} width="90rem" height="65rem" />
        <RadialCircle top={"20rem"} right={"20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
        <RadialCircle top={"90%"} left={"20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
      </SubsciptionsContainer>
    </Box>
  );
};

export default Page;
