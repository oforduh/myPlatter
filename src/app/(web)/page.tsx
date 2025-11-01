"use client";
import { Box, Container } from "@mantine/core";
import classes from "@/styles/home/heroSection.module.scss";
import HeroSection from "../views/Home/heroSection";
import FeatureSection from "../views/Home/featureSection";
import AboutSection from "../views/Home/aboutSection";
import ReviewsSection from "../views/Home/reviewsSection";
import ComingSoon from "../views/Home/comingSoon";
import NewsletterSection from "../views/Home/NewsletterSection";

export default function Home() {
  return (
    <Box>
      <Container
        size={"100%"}
        className={classes.heroSection}
        bg={"var(--brand-bg)"}
        m={0}
        p={0}
      >
        <Container m={0} p={0} size={"var(--max-width)"} mx="auto">
          <HeroSection />
        </Container>
      </Container>

      <Container
        size={"100%"}
        style={{
          backgroundColor: "white",
        }}
        m={0}
        p={0}
      >
        <Container m={0} p={0} size={"var(--max-width)"} mx="auto">
          <ComingSoon />
        </Container>
      </Container>

      <Container size={"100%"} bg={"var(--brand-bg)"} m={0} p={0}>
        <Container m={0} p={0} size={"var(--max-width)"} mx="auto">
          <FeatureSection />
        </Container>
      </Container>

      <Container
        size={"100%"}
        style={{
          backgroundColor: "white",
        }}
        m={0}
        p={0}
      >
        <Container m={0} p={0} size={"var(--max-width)"} mx="auto">
          <AboutSection />
        </Container>
      </Container>

      <Container size={"100%"} bg={"var(--brand-bg)"} m={0} p={0}>
        <Container m={0} p={0} size={"var(--max-width)"} mx="auto">
          <ReviewsSection />
        </Container>
      </Container>

      <Container size={"100%"} bg={"var(--brand-light-peach)"} m={0} p={0}>
        <Container m={0} p={0} size={"var(--max-width)"} mx="auto">
          <NewsletterSection />
        </Container>
      </Container>
    </Box>
  );
}
