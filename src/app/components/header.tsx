"use client";

import {
  IconChevronDown,
  IconPhone,
  IconQuestionMark,
} from "@tabler/icons-react";
import {
  Box,
  Burger,
  Container,
  Flex,
  Group,
  Image,
  Menu,
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
              { href: "/plattar-fest", label: "Plattar Fest" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classes.navLink}
              >
                {link.label}
              </Link>
            ))}
            {/* Help Dropdown */}
            <Menu shadow="md" width={200} trigger="hover">
              <Menu.Target>
                <Link
                  href="#"
                  className={classes.navLink}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Help <IconChevronDown size={16} style={{ marginLeft: 5 }} />
                </Link>
              </Menu.Target>

              <Menu.Dropdown
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <Menu.Item
                  component={Link}
                  href="/contact-us"
                  className={classes.menuItemLink}
                  leftSection={<IconPhone size={16} />}
                >
                  Contact Us
                </Menu.Item>
                <Menu.Item
                  component={Link}
                  href="/faqs"
                  className={classes.menuItemLink}
                  leftSection={<IconQuestionMark size={16} />}
                >
                  FAQs
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
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
