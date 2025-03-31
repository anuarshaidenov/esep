"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type InfoDialogContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InfoDialogContext = React.createContext<InfoDialogContextType>({
  open: false,
  setOpen: () => {},
});

export const useInfoDialog = () => React.useContext(InfoDialogContext);

export const InfoDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <InfoDialogContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Commands</DialogTitle>
          </DialogHeader>
          <div></div>
        </DialogContent>
      </Dialog>
    </InfoDialogContext.Provider>
  );
};
