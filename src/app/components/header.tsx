"use client";

import { IconChevronDown } from "@tabler/icons-react";
import {
  Box,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Image,
} from "@mantine/core";
import classes from "@/styles/components/header.module.scss";
import { useDisclosure } from "@mantine/hooks";
import MobileHeader from "./mobileHeader";
import Link from "next/link";
import platterLogo from "@/assets/platterLogo.png";

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box className={classes.headerWrapper}>
      <Container size="xl" className={classes.header} mx="auto">
        <Flex
          justify="space-between"
          h="100%"
          align="center"
          w="100%"
          mx="auto"
        >
          {/* Logo Section with Border */}
          <Flex align="center" gap={0}>
            <Image
              src={platterLogo.src}
              alt="PlattarLogo"
              className={classes.platterLogoStyling}
            />
          </Flex>

          {/* Navigation Links */}
          <Group gap={40} visibleFrom="sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/plattar-fest", label: "Platter Fest" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classes.navLink}
              >
                {link.label}
              </Link>
            ))}
            {/* Help Button */}
            <Button
              className={classes.helpButton}
              rightSection={<IconChevronDown size={16} />}
              visibleFrom="sm"
              radius="md"
              size="md"
              styles={{
                root: {
                  backgroundColor: "#e60023",
                  "&:hover": {
                    backgroundColor: "#c23636",
                  },
                },
              }}
            >
              Help
            </Button>
          </Group>

          <Burger
            hiddenFrom="sm"
            opened={drawerOpened}
            onClick={toggleDrawer}
            color="#E41B17"
          />
        </Flex>
      </Container>
      {drawerOpened && (
        <MobileHeader
          drawerOpened={drawerOpened}
          closeDrawer={closeDrawer}
          toggleLinks={() => {}}
          linksOpened={false}
        />
      )}
    </Box>
  );
}
