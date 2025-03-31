"use client";

import React from "react";
import { useFooterBoxContext } from "./footer-box-provider";

export const Footer = () => {
  const { text } = useFooterBoxContext();

  return (
    <footer className="p-4 text-center text-muted-foreground">{text}</footer>
  );
};
