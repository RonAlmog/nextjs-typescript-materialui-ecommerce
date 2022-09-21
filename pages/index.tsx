import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import { getFeaturedEvents } from "../data/dummy-data";
import EventLIst from "../components/events/event-list";

const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <div>
          <EventLIst items={featuredEvents}></EventLIst>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
