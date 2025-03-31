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
        <div className="h-screen flex flex-col">
          <Header />
          <main className="flex-1">{props.children}</main>
        </div>
      </InfoDialogProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
