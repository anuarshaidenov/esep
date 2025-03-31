import { Header } from "@/components/header";
import { InfoDialogProvider } from "@/components/info-dialog-provider";
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
      <InfoDialogProvider>
        <Header />
        {props.children}
      </InfoDialogProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
