"use client";

import {
  Box,
  Drawer,
  Flex,
  ScrollArea,
  Text,
  UnstyledButton,
} from "@mantine/core";
import classes from "@/styles/components/header.module.scss";
import platterLogo from "@/assets/platterLogo.png";
import { usePathname } from "next/navigation";

import {
  IconHome,
  IconInfoCircle,
  IconArticle,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface MobileHeaderProps {
  drawerOpened: boolean;
  closeDrawer: () => void;
  toggleLinks: () => void;
  linksOpened: boolean;
}

const MobileHeader = ({ drawerOpened, closeDrawer }: MobileHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { icon: IconHome, title: "Home", href: "/" },
    { icon: IconInfoCircle, title: "About", href: "/about" },
    { icon: IconArticle, title: "Blog", href: "/blog" },
    { icon: IconCalendarEvent, title: "Platter Fest", href: "/platter-fest" },
  ];

  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="60%"
      p={0}
      className={classes.parentContainer}
      classNames={{
        header: classes.mantineHeaderDrawer,
        content: classes.contentContainer,
        body: classes.contentBody,
      }}
      title={
        <Flex
          align="center"
          gap="30px"
          style={{
            // border: "1px solid white",
            paddingLeft: "12px",
          }}
        >
          <Image
            src={platterLogo}
            alt="PlatterLogo"
            className={classes.platterLogoStyling}
          />
        </Flex>
      }
      closeButtonProps={{
        style: {
          height: "40px",
          width: "40px",
          color: "#E41B17",
          background: "rgba(0, 0, 0, 0.1)",
        },
      }}
      hiddenFrom="sm"
      zIndex={1000}
    >
      <ScrollArea w="100%" mt={10} p={0}>
        <Flex
          w="100%"
          direction="column"
          align="start"
          justify="space-between"
          className={classes.flexContainerScrollArea}
          p={0}
        >
          <Box w="100%" mb={20} p={0}>
            {navItems.map((item) => (
              <UnstyledButton
                key={item.title}
                className={classes.link}
                onClick={() => {
                  closeDrawer();
                  router.push(item.href);
                }}
              >
                <Flex
                  data-active={pathname === item.href}
                  align="center"
                  gap="md"
                  p="xs"
                  className={classes.navBarFlexLink}
                  // style={{ border: "2px solid red" }}
                >
                  <item.icon
                    size={24}
                    color={pathname === item.href ? "#E41B17" : "#4a4a4a"}
                    stroke={1.5}
                  />
                  <Text
                    size="sm"
                    fw={500}
                    c={pathname === item.href ? "#E41B17" : "#4a4a4a"}
                  >
                    {item.title}
                  </Text>
                </Flex>
              </UnstyledButton>
            ))}
          </Box>
        </Flex>
      </ScrollArea>
    </Drawer>
  );
};

export default MobileHeader;
