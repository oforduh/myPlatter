import { Box, Stack, Title, Text, Image, Group } from "@mantine/core";
import classes from "@/styles/home/comingSoon.module.scss";
import appStore from "@/assets/AppStore.png";
import googlePlay from "@/assets/GooglePlay.png";

export default function ComingSoon() {
  return (
    <Box className={classes.comingSoonContainer}>
      <Title className={classes.comingSoonTitle}>COMING SOON!!!</Title>

      <Stack align="center" mb="xl">
        <Text className={classes.downloadText}>
          Download the mobile app now.
        </Text>
        <Text className={classes.orderText}>
          Order anything and track it in real time with the plattar app. fffff
        </Text>
      </Stack>

      <Group mb={{ base: 20 }}>
        <Image
          src={appStore.src}
          alt="Download on the App Store"
          className={classes.appImage}
        />
        <Image
          src={googlePlay.src}
          alt="Get it on Google Play"
          className={classes.appImage}
        />
      </Group>
    </Box>
  );
}
