import React from "react";
import ContactMain from "./ContactMain";
import {HomePkgBox, HomePkgsInBox} from "../../components/mui/HomePkgs";
import Questions from "../../components/FAQ/Questions";
import RadialCircle from "../../components/Decorative/RadialCircle";
import { DecorativeBackgroundImage } from "../../components/Decorative/Decorative.style";

export default function Page() {
    return (
        <>
            <HomePkgBox
                sx={{
                    paddingTop: "12rem",
                    '@media (max-width: 600px)': {
                        paddingTop: "2rem",
                    },
                }}
            >
                <ContactMain />
                <RadialCircle bottom={"-90rem"} right={"0"} />
                <RadialCircle top={"0"} right={"0"} sx={{ width: "10rem !important", height: "10rem !important" }} />
                <DecorativeBackgroundImage top={"25rem"} right={"0"} width="90rem" height="50rem" />
                <HomePkgsInBox sx={{ margin: "0 auto", padding: "2rem 0 2rem 2rem" }}>
                    <RadialCircle top={"-20rem"} left={"15rem"}/>
                    <Questions />
                </HomePkgsInBox>
            </HomePkgBox>
        </>
    );
}
