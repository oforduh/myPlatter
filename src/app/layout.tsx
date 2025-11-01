"use client";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@/styles/globals.scss";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair-display",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

import { useNetwork } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import { notifications } from "@mantine/notifications";
import notificationComponent from "@/helper/notification";
import { Notifications } from "@mantine/notifications";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { online } = useNetwork();

  // Keep track of the user internet connection
  const wasOffline = useRef(false);

  useEffect(() => {
    if (!online) {
      notificationComponent.handleInfo("Offline", "Check Network Connection");
      wasOffline.current = true;
    } else if (wasOffline.current) {
      notifications.clean();
      setTimeout(() => {
        notificationComponent.success(
          "Online",
          "Your network connection has been restored"
        );
      }, 2000);
      wasOffline.current = false;
    }
  }, [online]);

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${dm_sans.className} ${playfair_display.variable}`}>
        <MantineProvider>
          <Notifications position="top-right" zIndex={1000} />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
