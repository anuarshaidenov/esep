"use client";

import { processInput } from "@/lib/esep/plugins";
import React from "react";
import { toast } from "sonner";

export const Editor = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState<string[]>([]);

  React.useEffect(() => {
    setOutput(processInput(input));
  }, [input]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard", {
      icon: "✅",
    });
  };

  return (
    <div className="grid grid-cols-6 h-full w-full">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-full col-span-4 outline-none resize-none"
        placeholder="Start calculating..."
      />
      <div className="h-full px-4 col-span-1 flex flex-col items-end">
        {output.map((item, index) => (
          <button
            key={index}
            className="hover:bg-green-600 hover:text-black text-green-600 rounded-2xl px-2 transition-colors duration-300 inline-block"
            onClick={() => copyToClipboard(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
