"use client";
import { Container, Title, Box, Text, Stack, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconStarFilled } from "@tabler/icons-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import classes from "@/styles/home/reviewsSection.module.scss";
import platterLogo2 from "@/assets/platterLogo2.png";

const reviews = [
  {
    id: 1,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    name: "Name mid namee",
    role: "Buyer",
  },
  {
    id: 2,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    name: "Name mid namee",
    role: "Buyer",
  },
  {
    id: 3,
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    name: "Name mid namee",
    role: "Buyer",
  },
  {
    id: 4,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    name: "Name mid namee",
    role: "Buyer",
  },
  {
    id: 5,
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    name: "Name mid namee",
    role: "Buyer",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <Box className={classes.starContainer}>
      {Array.from({ length: 5 }, (_, index) => (
        <IconStarFilled
          key={index}
          size={24}
          className={classes.star}
          fill={index < rating ? "#FFC107" : "#E0E0E0"}
        />
      ))}
    </Box>
  );
};

export default function ReviewsSection() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <Box className={classes.reviewsSectionWrapper}>
      <Container size={"100%"} py={{ base: 60, md: 80 }} px={0}>
        <Title
          className={classes.reviewsTitle}
          order={1}
          ta="center"
          mb={{ base: 40, md: 60 }}
        >
          Reviews
        </Title>

        <Box className={classes.carouselWrapper}>
          <Carousel
            slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
            slideGap={{ base: "md", md: "lg" }}
            emblaOptions={{
              loop: true,
              dragFree: false,
              align: "center",
            }}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            withControls
            classNames={{
              root: classes.carouselRoot,
              controls: classes.carouselControls,
              control: classes.carouselControl,
              viewport: classes.carouselViewport,
            }}
          >
            {reviews.map((review) => (
              <Carousel.Slide key={review.id}>
                <Box className={classes.reviewCard}>
                  <Stack gap={16}>
                    <StarRating rating={review.rating} />

                    <Text className={classes.reviewText}>{review.review}</Text>

                    <Box>
                      <Text className={classes.reviewerName}>
                        {review.name}
                      </Text>
                      <Text className={classes.reviewerRole}>
                        {review.role}
                      </Text>
                    </Box>
                  </Stack>
                </Box>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>

        <Box className={classes.logoContainer}>
          <Image
            src={platterLogo2.src}
            alt="Plattar Logo"
            className={classes.reviewsLogo}
          />
        </Box>
      </Container>
    </Box>
  );
}
