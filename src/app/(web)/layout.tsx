"use client";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import classes from "@/styles/appLayout.module.scss";

import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  Container,
} from "@mantine/core";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell header={{ height: 80 }} padding={0} layout="alt">
      <AppShellHeader bg={"var(--brand-bg)"} w={"100%"}>
        <Container size={"var(--max-width)"} mx="auto">
          <Header />
        </Container>
      </AppShellHeader>

      <AppShellMain p={0}>
        <Container size={"100%"} p={0} m={0}>
          {children}
        </Container>
      </AppShellMain>

      <Container size={"100%"} bg={"var(--brand-red)"} m={0} p={0}>
        <Container m={0} p={0} size={"var(--max-width)"} mx="auto">
          <Footer />
        </Container>
      </Container>
    </AppShell>
  );
}
