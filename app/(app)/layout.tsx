import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppLayout = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      {props.children}
    </ThemeProvider>
  );
};

export default AppLayout;
