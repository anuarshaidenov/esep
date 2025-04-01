"use client";

import { processInput } from "@/lib/esep/plugins";
import React from "react";
import { useFooterBoxContext } from "./footer-box-provider";
import { calculateTotalResults } from "@/lib/esep/calculateTotalResults";
import { formatNumber, unformatNumbers } from "@/lib/utils";

export const Editor = () => {
  const [input, setInput] = React.useState("");
  const { setText } = useFooterBoxContext();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setText("Copied to clipboard");
  };

  React.useEffect(() => {
    setText(
      "Total: " +
        formatNumber(
          calculateTotalResults(unformatNumbers(processInput(input)))
        )
    );
  }, [input, setText]);

  return (
    <div className="grid grid-cols-6 h-full w-full overflow-scroll">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-full col-span-4 outline-none resize-none"
        placeholder="Start calculating..."
      />
      <div className="h-full px-4 col-span-1 flex flex-col items-end">
        {processInput(input).map((item, index) => {
          if (item === "\n") return <br key={index} />;

          return (
            <button
              key={index}
              className="hover:bg-green-600 hover:text-black text-green-600 rounded-2xl px-2 transition-colors duration-300 inline-block"
              onClick={() => copyToClipboard(item)}
              onMouseEnter={() => setText("Click to copy")}
              onMouseLeave={() => setText("")}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
