import { Footer } from "@/components/footer";
import { FooterBoxProvider } from "@/components/footer-box-provider";
import { Header } from "@/components/header";
import { InfoDialogProvider } from "@/components/info-dialog-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Esep - Smart Calculator",
  description:
    "Esep is a powerful and user-friendly calculator app for everyday calculations.",
  openGraph: {
    title: "Esep - Smart Calculator",
    description:
      "A modern and efficient calculator app designed for seamless number crunching.",
    type: "website",
  },
};

const AppLayout = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <InfoDialogProvider>
        <FooterBoxProvider>
          <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-1">{props.children}</main>
            <Footer />
          </div>
        </FooterBoxProvider>
      </InfoDialogProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
