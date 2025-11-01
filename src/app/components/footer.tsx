import {
  Container,
  Text,
  Anchor,
  Group,
  Image,
  Flex,
  Divider,
} from "@mantine/core";
import classes from "@/styles/components/footer.module.scss";
import platterFooterLogo from "@/assets/platterFooterLogo.png"; // Make sure this path is correct
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandX,
} from "@tabler/icons-react"; // Assuming tabler icons or react-icons are installed

export default function Footer() {
  return (
    <Container
      size="100%"
      px={{ base: 20, md: 0 }}
      className={classes.footerContainer}
      // style={{ border: "2px solid red" }}
    >
      <Flex justify="space-between" align="flex-start" wrap="wrap" w="100%">
        {/* Left section */}
        <Flex direction="column" w={{ base: "100%", md: "40%" }}>
          <Image
            src={platterFooterLogo.src}
            alt="PlattarLogo"
            className={classes.platterLogoStyling}
          />

          <Text className={classes.footerSubtext} pl={{ base: 0, md: 5 }}>
            Watch, Discover & Order Meals With Ease
          </Text>

          <Group my="md" className={classes.socialIcons}>
            <Anchor href="#">
              <IconBrandFacebook size={22} color="#fff" />
            </Anchor>
            <Anchor href="#">
              <IconBrandInstagram size={22} color="#fff" />
            </Anchor>
            <Anchor href="#">
              <IconBrandX size={22} color="#fff" />
            </Anchor>
            <Anchor href="#">
              <IconBrandTiktok size={22} color="#fff" />
            </Anchor>
          </Group>
        </Flex>

        <Flex w={{ base: "100%", md: "60%" }} justify="flex-end" wrap="wrap">
          {/* Middle section */}
          <Flex direction="column" w={{ base: "100%", md: "33.3333%" }}>
            <Text className={classes.footerTitle}>Explore</Text>
            <Anchor href="#" className={classes.footerLink}>
              Blog
            </Anchor>
            <Anchor href="#" className={classes.footerLink}>
              FAQs
            </Anchor>
            <Anchor href="#" className={classes.footerLink}>
              Plattar Fest
            </Anchor>
          </Flex>

          {/* Company section */}
          <Flex direction="column" w={{ base: "100%", md: "33.3333%" }}>
            <Text className={classes.footerTitle}>Company</Text>
            <Anchor href="#" className={classes.footerLink}>
              Careers
            </Anchor>
            <Anchor href="#" className={classes.footerLink}>
              Contact Us
            </Anchor>
            <Anchor href="#" className={classes.footerLink}>
              Become a Rider
            </Anchor>
          </Flex>

          {/* Legal section */}
          <Flex direction="column" w={{ base: "100%", md: "33.3333%" }}>
            <Text className={classes.footerTitle}>Legal</Text>
            <Anchor href="#" className={classes.footerLink}>
              Terms of Use
            </Anchor>
            <Anchor href="#" className={classes.footerLink}>
              Privacy Policy
            </Anchor>
            <Anchor href="#" className={classes.footerLink}>
              Blog
            </Anchor>
          </Flex>
        </Flex>
      </Flex>

      <Divider my="md" />

      <Text ta="center" className={classes.footerCopy}>
        © {new Date().getFullYear()} All Rights Reserved
      </Text>
    </Container>
  );
}
