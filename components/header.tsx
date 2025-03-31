import React from "react";
import { ModeToggle } from "./mode-toggle";
import Logo from "./ui/logo";

export const Header = () => {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <Logo className="h-8" />
        <ModeToggle />
      </div>
    </header>
  );
};
