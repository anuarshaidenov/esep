import React from "react";
import { ModeToggle } from "./mode-toggle";
import Logo from "./ui/logo";
import Link from "next/link";
// import { InfoDialogButton } from "./info-dialog-button";

export const Header = () => {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Logo className="h-5" />
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          {/* <InfoDialogButton /> */}
        </div>
      </div>
    </header>
  );
};
