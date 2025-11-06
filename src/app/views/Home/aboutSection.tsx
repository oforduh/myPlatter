import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Title,
  Button,
  Image,
} from "@mantine/core";
import { IconVideo, IconBowl, IconChefHat } from "@tabler/icons-react";
import classes from "@/styles/home/aboutSection.module.scss";
import aboutImage from "@/assets/aboutPlatter.jpg";

export default function AboutSection() {
  return (
    <Container size={"100%"} py={{ base: 30, md: 100 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 40, md: 150 }}
        justify="flex-end"
        // align="center"
      >
        {/* Left Side - Decorative Image with Food Icons */}
        <Box
          className={classes.imageContainer}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={aboutImage.src}
            alt="About Plattar - Delicious Food Selection"
            className={classes.decorativeImage}
          />
        </Box>

        {/* Right Side - Text Content */}
        <Stack className={classes.contentContainer} gap={25} mt={{ base: 10 }}>
          <Title className={classes.aboutTitle} order={1}>
            About Plattar
          </Title>
          <Text
            fz={{ base: 14, md: 16 }}
            c={"var( --text-color-dark)"}
            className={classes.aboutText}
          >
            Plattar is a food-tech platform enabling independent chefs and small
            food vendors to monetize their cooking through short-form video.
          </Text>
          <Stack gap="sm" w={"100%"}>
            <Flex align="flex-start" gap="xs">
              <IconVideo size={20} color="var(--brand-red)" />
              <Text fz={{ base: 14, md: 16 }} c={"var( --text-color-dark)"}>
                Videos replace static menus.
              </Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconBowl size={20} color="var(--brand-red)" />
              <Text fz={{ base: 14, md: 16 }} c={"var( --text-color-dark)"}>
                Authentic meals replace mass-produced fast food.
              </Text>
            </Flex>
            <Flex align="center" gap="xs">
              <IconChefHat size={20} color="var(--brand-red)" />
              <Text fz={{ base: 14, md: 16 }} c={"var( --text-color-dark)"}>
                Local chefs get visibility and income opportunities.
              </Text>
            </Flex>
          </Stack>
          <Text
            fz={{ base: 14, md: 16 }}
            c={"var( --text-color-dark)"}
            className={classes.aboutText}
          >
            {" "}
            Plattar gives chefs and users a marketplace, audience, and the tools
            to scale from home kitchen to thriving food brand.
          </Text>
          <Button className={classes.ctaButton} size="lg" radius="md" mt={20}>
            Become a Vendor Today
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
