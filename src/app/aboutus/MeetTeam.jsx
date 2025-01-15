import React from "react";
import {Card, CardContent, CardMedia, Container, Grid, Typography,} from "@mui/material";
import styles from "./MeetTeam.module.css";

const teamMembers = [
  {
    name: "John Doe",
    title: "CEO",
    imgSrc: "/people1.jpg",
  },
  {
    name: "Jane Smith",
    title: "Manager",
    imgSrc: "/people2.jpg",
  },
  {
    name: "Alice Johnson",
    title: "Developer",
    imgSrc: "/people3.avif",
  },
];

export default function MeetTeam() {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" marginTop="2rem">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.card}>
              <CardMedia
                component="img"
                image={member.imgSrc}
                alt={member.name}
                className={styles.cardImage}
              />
              <CardContent className={styles.cardContent}>
                <Typography variant="h5" className={styles.cardName}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" className={styles.cardTitle}>
                  {member.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
