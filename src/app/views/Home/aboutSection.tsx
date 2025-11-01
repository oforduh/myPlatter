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
import classes from "@/styles/home/aboutSection.module.scss";
import aboutImage from "@/assets/aboutPlatter.jpg";

export default function AboutSection() {
  return (
    <Container size={"100%"} py={{ base: 30, md: 100 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 40, md: 80 }}
        justify="flex-end"
        // align="center"
      >
        {/* Left Side - Decorative Image with Food Icons */}
        <Box className={classes.imageContainer} display={{ base: "none", md: "block" }}>
          <Image
            src={aboutImage.src}
            alt="About Plattar - Delicious Food Selection"
            className={classes.decorativeImage}
          />
        </Box>

        {/* Right Side - Text Content */}
        <Stack className={classes.contentContainer} gap={50} mt={{ base: 10 }}>
          <Title className={classes.aboutTitle} order={1}>
            About Plattar
          </Title>
          <Text
            fz={{ base: 14, md: 16 }}
            c={"var( --text-color-dark)"}
            className={classes.aboutText}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ac minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ac minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>
          <Button className={classes.ctaButton} size="lg" radius="md" mt={20}>
            Become a Vendor Today
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
