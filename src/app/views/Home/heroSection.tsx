import { IconBell, IconSearch } from "@tabler/icons-react";
import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Title,
  Image,
} from "@mantine/core";
import classes from "@/styles/home/heroSection.module.scss";
import heroImage from "@/assets/heroImage.jpg";

export default function HeroSection() {
  return (
    <Container size={"100%"} mx={17.5} py={{ base: 50 }} px={0}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify="space-between"
        gap={{ base: 40, md: 0 }}
        pt={{ base: 20, md: 60 }}
        pb={{ base: 20, md: 60 }}
      >
        {/* Hero Text Content */}
        <Stack w={{ base: "100%", md: "40%" }} mt={{ base: 40 }}>
          <Title className={classes.heroTitle}>
            Watch, Discover, <br />
            & Order Local <br />
            Meals.
          </Title>

          <Text className={classes.heroText}>
            Connect with your favorite vendors and home chefs through engaging
            food videos
          </Text>

          <Button
            color="red"
            size="lg"
            radius="md"
            className={classes.ctaButton}
            mt={20}
            styles={{
              root: {
                cursor: "pointer",
                backgroundColor: "#e60023",
                "&:hover": {
                  backgroundColor: "#c23636",
                },
              },
            }}
          >
            Get started
          </Button>
        </Stack>

        {/* Hero Image */}
        <Box
          className={classes.heroImageContainer}
          px={{ base: 50 }}
          w={{ base: "100%", md: "60%" }}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={heroImage.src}
            alt="Plattar App Screenshots"
            className={classes.heroImage}
          />
        </Box>
      </Flex>
    </Container>
  );
}
