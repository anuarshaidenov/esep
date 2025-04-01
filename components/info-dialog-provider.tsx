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
          <div className="prose prose-sm dark:prose-invert prose-code:bg-muted-foreground prose-code:text-muted prose-code:p-0.5 prose-code:rounded-lg overflow-scroll max-h-[50vh]">
            <h4>🧮 Basic Calculations</h4>
            <p>
              <code>1 + 1</code> → <strong>2</strong>
            </p>
            <p>
              <code>5 * (2 + 3)</code> → <strong>25</strong>
            </p>

            <h4>📦 Variables</h4>
            <p>
              <code>salary = 650000</code>
            </p>
            <p>
              <code>savings = salary * 0.1</code>
            </p>
            <p>
              <code>savings + 5000</code> → <strong>70000</strong>
            </p>

            <h4>📊 Percentages</h4>
            <p>
              <code>200 - 25%</code> → <strong>150</strong>
            </p>
            <p>
              <code>100 + 10%</code> → <strong>110</strong>
            </p>

            <h4>📐 Parentheses & Precedence</h4>
            <p>
              <code>(1 + 2) * 3</code> → <strong>9</strong>
            </p>
            <p>
              <code>2 + 3 * 4</code> → <strong>14</strong>
            </p>

            <h4>💡 Tips</h4>
            <ul>
              <li>Define variables and reuse them in your expressions.</li>
              <li>
                Supports standard math operators: <code>+, -, *, /, ^</code>
              </li>
              <li>Use parentheses to control evaluation order.</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </InfoDialogContext.Provider>
  );
};
