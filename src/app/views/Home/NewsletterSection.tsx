import {
  Box,
  Container,
  Flex,
  Stack,
  Title,
  Text,
  TextInput,
  Button,
  Image,
  Group,
} from "@mantine/core";
import classes from "@/styles/home/newsletterSection.module.scss";
import fastShippingImage from "@/assets/fast-shipping.png";

export default function NewsletterSection() {
  return (
    <Container size={"100%"} py={{ base: 60, md: 100 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 40, md: 80 }}
        justify="space-between"
        align="center"
        className={classes.newsletterContainer}
        p={0}
      >
        {/* Left Side - Newsletter Subscription */}
        <Stack
          className={classes.newsletterContent}
          gap={20}
          w={{ base: "100%", md: "50%" }}
        >
          <Title className={classes.newsletterTitle} order={1}>
            Get Special Offers <br /> & Food Updates
          </Title>
          <Text className={classes.newsletterDescription}>
            Subscribe to our newsletter for new vendors, discounts, and foodie
            events
          </Text>
          <Group className={classes.subscribeForm}>
            <TextInput
              placeholder="Enter your email address"
              radius="md"
              size="lg"
              className={classes.emailInput}
            />
            <Button className={classes.subscribeButton} size="lg" radius="md">
              Subscribe
            </Button>
          </Group>
        </Stack>

        {/* Right Side - Become a Rider */}
        <Box className={classes.riderContainer} w={{ base: "100%", md: "50%" }}>
          <Stack className={classes.riderContent} gap={20} align="center">
            <Flex
              justify="space-between"
              align="flex-start"
              w="100%"
              gap={{ base: 20, md: 40 }}
            >
              <Title className={classes.riderTitle} order={2} ta="left">
                Want to earn <br /> while
                <br /> delivering <br /> meals?
              </Title>
              <Image
                src={fastShippingImage.src}
                alt="Fast Shipping"
                className={classes.riderImage}
              />
            </Flex>
            <Button
              className={classes.riderButton}
              size="lg"
              radius="md"
              mx="auto"
              mt={{ base: 20 }}
              w={250}
            >
              Become a Rider
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
}
