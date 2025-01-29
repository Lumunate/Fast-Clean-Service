"use client";
import React from 'react';
import {
    Container,
    Box,
    Typography,
    Link,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import HeadingLinesAnimation from "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";

export default function PrivacyPolicyPage() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg" sx={{ py: 4, mt: 12, mb: 5 }}>
            <Box>
                {/* Main Heading with animated lines */}
                <Box display="flex" justifyContent="center" alignItems="center">
                    <HeadingLinesAnimation
                        sx={{
                            fontSize: isSmallScreen ? "3rem" : "5.6rem",
                            fontWeight: 700
                        }}
                    >
                        Privacy Policy
                    </HeadingLinesAnimation>
                </Box>

                {/* “Last updated” text */}
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography
                        component="p"
                        paragraph
                        sx={{
                            fontWeight: "500",
                            mt: 3,
                            fontSize: isSmallScreen ? "1.3rem" : "1.6rem"
                        }}
                    >
                        Last updated: January 25, 2025
                    </Typography>
                </Box>

                {/* Intro paragraphs */}
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    This Privacy Policy describes Our policies and procedures on the collection,
                    use and disclosure of Your information when You use the Service and tells You
                    about Your privacy rights and how the law protects You.
                </Typography>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    We use Your Personal data to provide and improve the Service. By using the
                    Service, You agree to the collection and use of information in accordance with
                    this Privacy Policy. This Privacy Policy has been created with the help of the{' '}
                    <Link
                        href="https://www.privacypolicies.com/privacy-policy-generator/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy Generator
                    </Link>
                    .
                </Typography>

                {/* H2 (with fontWeight: 600) */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        mt: 4,
                        fontWeight: 600
                    }}
                >
                    Interpretation and Definitions
                </Typography>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    Interpretation
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    The words of which the initial letter is capitalized have meanings defined under
                    the following conditions. The following definitions shall have the same meaning
                    regardless of whether they appear in singular or in plural.
                </Typography>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    Definitions
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    For the purposes of this Privacy Policy:
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Account</strong> means a unique account created for You
                                    to access our Service or parts of our Service.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Affiliate</strong> means an entity that controls, is
                                    controlled by or is under common control with a party, where
                                    &quot;control&quot; means ownership of 50% or more of the shares,
                                    equity interest or other securities entitled to vote for election
                                    of directors or other managing authority.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Company</strong> (referred to as either &quot;the
                                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this
                                    Agreement) refers to Fast Clean Service, Omweg 38, 1566 HP
                                    Assendelft.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Cookies</strong> are small files that are placed on
                                    Your computer, mobile device or any other device by a website,
                                    containing the details of Your browsing history on that website
                                    among its many uses.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Country</strong> refers to: Netherlands
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Device</strong> means any device that can access the
                                    Service such as a computer, a cellphone or a digital tablet.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Personal Data</strong> is any information that relates
                                    to an identified or identifiable individual.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Service</strong> refers to the Website.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Service Provider</strong> means any natural or legal
                                    person who processes the data on behalf of the Company. It
                                    refers to third-party companies or individuals employed by the
                                    Company to facilitate the Service, to provide the Service on
                                    behalf of the Company, to perform services related to the
                                    Service or to assist the Company in analyzing how the Service is
                                    used.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Usage Data</strong> refers to data collected
                                    automatically, either generated by the use of the Service or
                                    from the Service infrastructure itself (for example, the
                                    duration of a page visit).
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Website</strong> refers to Fast Clean Service,
                                    accessible from{' '}
                                    <Link
                                        href="https://fast-clean-service.onrender.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://fast-clean-service.onrender.com/
                                    </Link>
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>You</strong> means the individual accessing or using
                                    the Service, or the company, or other legal entity on behalf of
                                    which such individual is accessing or using the Service, as
                                    applicable.
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>

                {/* H2 (with fontWeight: 600) */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        mt: 4,
                        fontWeight: 600
                    }}
                >
                    Collecting and Using Your Personal Data
                </Typography>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    Types of Data Collected
                </Typography>

                {/* H4 */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    Personal Data
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    While using Our Service, We may ask You to provide Us with certain personally
                    identifiable information that can be used to contact or identify You. Personally
                    identifiable information may include, but is not limited to:
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Email address
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    First name and last name
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Phone number
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Address, State, Province, ZIP/Postal code, City
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Usage Data
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>

                {/* H4 */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem", mt: 2 }}
                >
                    Usage Data
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Usage Data is collected automatically when using the Service.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Usage Data may include information such as Your Device&#39;s Internet Protocol
                    address (e.g. IP address), browser type, browser version, the pages of our
                    Service that You visit, the time and date of Your visit, the time spent on those
                    pages, unique device identifiers and other diagnostic data.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    When You access the Service by or through a mobile device, We may collect
                    certain information automatically, including, but not limited to, the type of
                    mobile device You use, Your mobile device unique ID, the IP address of Your
                    mobile device, Your mobile operating system, the type of mobile Internet browser
                    You use, unique device identifiers and other diagnostic data.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    We may also collect information that Your browser sends whenever You visit our
                    Service or when You access the Service by or through a mobile device.
                </Typography>

                {/* H4 */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    Tracking Technologies and Cookies
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    We use Cookies and similar tracking technologies to track the activity on Our
                    Service and store certain information. Tracking technologies used are beacons,
                    tags, and scripts to collect and track information and to improve and analyze
                    Our Service. The technologies We use may include:
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Cookies or Browser Cookies.</strong> A cookie is a small
                                    file placed on Your Device. You can instruct Your browser to
                                    refuse all Cookies or to indicate when a Cookie is being sent.
                                    However, if You do not accept Cookies, You may not be able to
                                    use some parts of our Service. Unless you have adjusted Your
                                    browser setting so that it will refuse Cookies, our Service may
                                    use Cookies.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>Web Beacons.</strong> Certain sections of our Service
                                    and our emails may contain small electronic files known as web
                                    beacons (also referred to as clear gifs, pixel tags, and
                                    single-pixel gifs) that permit the Company, for example, to
                                    count users who have visited those pages or opened an email and
                                    for other related website statistics (for example, recording
                                    the popularity of a certain section and verifying system and
                                    server integrity).
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent
                    Cookies remain on Your personal computer or mobile device when You go offline,
                    while Session Cookies are deleted as soon as You close Your web browser. Learn
                    more about cookies on the{' '}
                    <Link
                        href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policies website
                    </Link>{' '}
                    article.
                </Typography>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    We use both Session and Persistent Cookies for the purposes set out below:
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <>
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        <strong>Necessary / Essential Cookies</strong>
                                    </Typography>
                                </>
                            }
                            secondary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem" }}
                                >
                                    Type: Session Cookies
                                    <br />
                                    Administered by: Us
                                    <br />
                                    Purpose: These Cookies are essential to provide You with
                                    services available through the Website and to enable You to use
                                    some of its features. They help to authenticate users and
                                    prevent fraudulent use of user accounts. Without these Cookies,
                                    the services that You have asked for cannot be provided, and We
                                    only use these Cookies to provide You with those services.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <>
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                                    </Typography>
                                </>
                            }
                            secondary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem" }}
                                >
                                    Type: Persistent Cookies
                                    <br />
                                    Administered by: Us
                                    <br />
                                    Purpose: These Cookies identify if users have accepted the use
                                    of cookies on the Website.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <>
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        <strong>Functionality Cookies</strong>
                                    </Typography>
                                </>
                            }
                            secondary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem" }}
                                >
                                    Type: Persistent Cookies
                                    <br />
                                    Administered by: Us
                                    <br />
                                    Purpose: These Cookies allow us to remember choices You make
                                    when You use the Website, such as remembering your login details
                                    or language preference. The purpose of these Cookies is to
                                    provide You with a more personal experience and to avoid You
                                    having to re-enter your preferences every time You use the
                                    Website.
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    For more information about the cookies we use and your choices regarding cookies,
                    please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                </Typography>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        mt: 4,
                        fontWeight: 500
                    }}
                >
                    Use of Your Personal Data
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    The Company may use Personal Data for the following purposes:
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>To provide and maintain our Service</strong>, including
                                    to monitor the usage of our Service.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>To manage Your Account:</strong> to manage Your
                                    registration as a user of the Service. The Personal Data You
                                    provide can give You access to different functionalities of the
                                    Service that are available to You as a registered user.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>For the performance of a contract:</strong> the
                                    development, compliance and undertaking of the purchase contract
                                    for the products, items or services You have purchased or of any
                                    other contract with Us through the Service.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>To contact You:</strong> To contact You by email,
                                    telephone calls, SMS, or other equivalent forms of electronic
                                    communication, such as a mobile application&#39;s push
                                    notifications regarding updates or informative communications
                                    related to the functionalities, products or contracted services,
                                    including the security updates, when necessary or reasonable for
                                    their implementation.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>To provide You</strong> with news, special offers and
                                    general information about other goods, services and events which
                                    we offer that are similar to those that you have already
                                    purchased or enquired about unless You have opted not to receive
                                    such information.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>To manage Your requests:</strong> To attend and manage
                                    Your requests to Us.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>For business transfers:</strong> We may use Your
                                    information to evaluate or conduct a merger, divestiture,
                                    restructuring, reorganization, dissolution, or other sale or
                                    transfer of some or all of Our assets, whether as a going concern
                                    or as part of bankruptcy, liquidation, or similar proceeding, in
                                    which Personal Data held by Us about our Service users is among
                                    the assets transferred.
                                </Typography>
                            }
                        />
                    </ListItem>

                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>For other purposes</strong>: We may use Your information
                                    for other purposes, such as data analysis, identifying usage
                                    trends, determining the effectiveness of our promotional
                                    campaigns and to evaluate and improve our Service, products,
                                    services, marketing and your experience.
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    We may share Your personal information in the following situations:
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>With Service Providers:</strong> We may share Your
                                    personal information with Service Providers to monitor and
                                    analyze the use of our Service, to contact You.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>For business transfers:</strong> We may share or
                                    transfer Your personal information in connection with, or during
                                    negotiations of, any merger, sale of Company assets, financing,
                                    or acquisition of all or a portion of Our business to another
                                    company.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>With Affiliates:</strong> We may share Your information
                                    with Our affiliates, in which case we will require those
                                    affiliates to honor this Privacy Policy. Affiliates include Our
                                    parent company and any other subsidiaries, joint venture
                                    partners or other companies that We control or that are under
                                    common control with Us.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>With business partners:</strong> We may share Your
                                    information with Our business partners to offer You certain
                                    products, services or promotions.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>With other users:</strong> when You share personal
                                    information or otherwise interact in the public areas with other
                                    users, such information may be viewed by all users and may be
                                    publicly distributed outside.
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    <strong>With Your consent:</strong> We may disclose Your
                                    personal information for any other purpose with Your consent.
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        mt: 4,
                        fontWeight: 500
                    }}
                >
                    Retention of Your Personal Data
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    The Company will retain Your Personal Data only for as long as is necessary for
                    the purposes set out in this Privacy Policy. We will retain and use Your
                    Personal Data to the extent necessary to comply with our legal obligations (for
                    example, if we are required to retain your data to comply with applicable laws),
                    resolve disputes, and enforce our legal agreements and policies.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    The Company will also retain Usage Data for internal analysis purposes. Usage
                    Data is generally retained for a shorter period of time, except when this data
                    is used to strengthen the security or to improve the functionality of Our
                    Service, or We are legally obligated to retain this data for longer time
                    periods.
                </Typography>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    Transfer of Your Personal Data
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Your information, including Personal Data, is processed at the Company&#39;s
                    operating offices and in any other places where the parties involved in the
                    processing are located. It means that this information may be transferred to —
                    and maintained on — computers located outside of Your state, province, country
                    or other governmental jurisdiction where the data protection laws may differ
                    than those from Your jurisdiction.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Your consent to this Privacy Policy followed by Your submission of such
                    information represents Your agreement to that transfer.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    The Company will take all steps reasonably necessary to ensure that Your data is
                    treated securely and in accordance with this Privacy Policy and no transfer of
                    Your Personal Data will take place to an organization or a country unless there
                    are adequate controls in place including the security of Your data and other
                    personal information.
                </Typography>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    Delete Your Personal Data
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    You have the right to delete or request that We assist in deleting the Personal
                    Data that We have collected about You.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Our Service may give You the ability to delete certain information about You
                    from within the Service.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    You may update, amend, or delete Your information at any time by signing in to
                    Your Account, if you have one, and visiting the account settings section that
                    allows you to manage Your personal information. You may also contact Us to
                    request access to, correct, or delete any personal information that You have
                    provided to Us.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Please note, however, that We may need to retain certain information when we
                    have a legal obligation or lawful basis to do so.
                </Typography>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    Disclosure of Your Personal Data
                </Typography>

                {/* H4 */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    Business Transactions
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    If the Company is involved in a merger, acquisition or asset sale, Your Personal
                    Data may be transferred. We will provide notice before Your Personal Data is
                    transferred and becomes subject to a different Privacy Policy.
                </Typography>

                {/* H4 */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    Law enforcement
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Under certain circumstances, the Company may be required to disclose Your
                    Personal Data if required to do so by law or in response to valid requests by
                    public authorities (e.g. a court or a government agency).
                </Typography>

                {/* H4 */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    Other legal requirements
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    The Company may disclose Your Personal Data in the good faith belief that such
                    action is necessary to:
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Comply with a legal obligation
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Protect and defend the rights or property of the Company
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Prevent or investigate possible wrongdoing in connection with
                                    the Service
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Protect the personal safety of Users of the Service or the
                                    public
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    Protect against legal liability
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>

                {/* H3 (with fontWeight: 500) */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        mt: 4,
                        fontWeight: 500
                    }}
                >
                    Security of Your Personal Data
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    The security of Your Personal Data is important to Us, but remember that no
                    method of transmission over the Internet, or method of electronic storage is
                    100% secure. While We strive to use commercially acceptable means to protect
                    Your Personal Data, We cannot guarantee its absolute security.
                </Typography>

                {/* H2 (with fontWeight: 600) */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        fontWeight: 600
                    }}
                >
                    Children&#39;s Privacy
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Our Service does not address anyone under the age of 13. We do not knowingly
                    collect personally identifiable information from anyone under the age of 13. If
                    You are a parent or guardian and You are aware that Your child has provided Us
                    with Personal Data, please contact Us. If We become aware that We have collected
                    Personal Data from anyone under the age of 13 without verification of parental
                    consent, We take steps to remove that information from Our servers.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    If We need to rely on consent as a legal basis for processing Your information
                    and Your country requires consent from a parent, We may require Your parent&#39;s
                    consent before We collect and use that information.
                </Typography>

                {/* H2 (with fontWeight: 600) */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        fontWeight: 600
                    }}
                >
                    Links to Other Websites
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    Our Service may contain links to other websites that are not operated by Us. If
                    You click on a third party link, You will be directed to that third party&#39;s
                    site. We strongly advise You to review the Privacy Policy of every site You
                    visit.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    We have no control over and assume no responsibility for the content, privacy
                    policies or practices of any third party sites or services.
                </Typography>

                {/* H2 (with fontWeight: 600) */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        fontWeight: 600
                    }}
                >
                    Changes to this Privacy Policy
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    We may update Our Privacy Policy from time to time. We will notify You of any
                    changes by posting the new Privacy Policy on this page.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    We will let You know via email and/or a prominent notice on Our Service, prior
                    to the change becoming effective and update the &quot;Last updated&quot; date
                    at the top of this Privacy Policy.
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    You are advised to review this Privacy Policy periodically for any changes.
                    Changes to this Privacy Policy are effective when they are posted on this page.
                </Typography>

                {/* H2 (with fontWeight: 600) */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        fontWeight: 600
                    }}
                >
                    Contact Us
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    If you have any questions about this Privacy Policy, You can contact us:
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    By email: info@fastcleanservice.nl
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText
                            primary={
                                <Typography
                                    component="span"
                                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                >
                                    By visiting this page on our website:{' '}
                                    <Link
                                        href="https://fast-clean-service.onrender.com/contact"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://fast-clean-service.onrender.com/contact
                                    </Link>
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
}
