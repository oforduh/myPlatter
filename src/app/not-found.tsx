"use client";

import { Button, Container, Flex, Text } from "@mantine/core";
import Image from "next/image";
import classes from "@/styles/404.module.scss";
import errorpage404 from "@/assets/404.png";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();
  return (
    <Container
      size={"100%"}
      style={{
        display: "grid",
        placeItems: "center",
      }}
      h={"100vh"}
    >
      <Flex
        mt={-50}
        direction={"column"}
        align={"center"}
        justify={"center"}
        // style={{ border: "2px solid blue" }}
      >
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Image
            src={errorpage404}
            alt="internal_server_error"
            className={classes.errorBoundaryImage}
          />
          <Text fz={{ base: 12, md: 16 }} style={{ color: "black" }}>
            The page does not exist. please do not panic. click on the button to
            navigate to the homepage
          </Text>
          <Button
            fz={{ base: 12, md: 16 }}
            mt={10}
            bg={"var(--brand-red"}
            onClick={() => {
              router.push("/");
            }}
          >
            Back to Home
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
