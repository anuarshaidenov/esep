"use client";

import React from "react";

type FooterboxProviderProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const FooterBoxContext = React.createContext<FooterboxProviderProps>({
  text: "",
  setText: () => {},
});

export const useFooterBoxContext = () => React.useContext(FooterBoxContext);

export function FooterBoxProvider(props: { children: React.ReactNode }) {
  const [text, setText] = React.useState("");

  return (
    <FooterBoxContext.Provider value={{ text, setText }}>
      {props.children}
    </FooterBoxContext.Provider>
  );
}
