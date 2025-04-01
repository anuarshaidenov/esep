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
            <DialogTitle>Usage</DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert prose-code:bg-muted-foreground prose-code:p-0.5 prose-code:rounded-lg">
            <h4>Simple calculations</h4>
            <p>
              <code>1 + 1 = 2</code>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </InfoDialogContext.Provider>
  );
};
