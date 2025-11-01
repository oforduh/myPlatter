import { Box, Container, Flex, Text, Image } from "@mantine/core";
import classes from "@/styles/home/featureSection.module.scss";
import feature1 from "@/assets/feature1.jpg";
import feature2 from "@/assets/feature2.jpg";
import feature3 from "@/assets/feature3.jpg";

const features = [
  {
    image: feature1,
    title: "Discover meals you love",
    alt: "Delicious meals including salmon, asparagus, and caprese salad",
  },
  {
    image: feature2,
    title: "One click away from a perfect meal",
    alt: "Variety of meals with burger, pasta, and salads on a wooden table",
  },
  {
    image: feature3,
    title: "Order directly from the vendor",
    alt: "Fresh food display counter with vendors serving customers",
  },
];

export default function FeatureSection() {
  return (
    <Container size={"100%"} py={{ base: 30, md: 80 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 20, md: 40 }}
        justify="center"
        align="stretch"
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            className={classes.featureCard}
            style={{
              flex: 1,
              maxWidth: "420px",
            }}
          >
            <Box className={classes.imageWrapper}>
              <Image
                src={feature.image.src}
                alt={feature.alt}
                className={classes.featureImage}
                h={280}
                fit="cover"
              />
            </Box>
            <Text
              className={classes.featureTitle}
              ta="center"
              mt={24}
              fw={500}
              size="lg"
            >
              {feature.title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}
