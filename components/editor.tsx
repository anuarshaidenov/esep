"use client";

import { processInput } from "@/lib/esep";
import React from "react";
import { useFooterBoxContext } from "./footer-box-provider";
import { formatNumber } from "@/lib/utils";

export const Editor = () => {
  const [input, setInput] = React.useState("");
  const { setText } = useFooterBoxContext();
  const edtorRef = React.useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setText("Copied to clipboard");
  };

  const setTotalGlobally = () => {
    setText(
      "Total: " +
        formatNumber(
          processInput(input).reduce(
            (total, item) =>
              isNaN(parseInt(item)) ? total : total + parseInt(item),
            0
          )
        )
    );
  };

  React.useEffect(() => {
    setText(
      "Total: " +
        formatNumber(
          processInput(input).reduce(
            (total, item) =>
              isNaN(parseInt(item)) ? total : total + parseInt(item),
            0
          )
        )
    );
  }, [input, setText]);

  React.useEffect(() => {
    edtorRef.current?.focus();
  }, []);

  return (
    <div className="grid grid-cols-6 h-full w-full overflow-scroll">
      <textarea
        ref={edtorRef}
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
              onMouseLeave={() => setTotalGlobally()}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
