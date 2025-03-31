"use client";

import { processInput } from "@/lib/esep/plugins";
import React from "react";

export const Editor = () => {
  const [input, setInput] = React.useState("");
  const [results, setResults] = React.useState("");

  React.useEffect(() => {
    setResults(processInput(input).join("\n"));
  }, [input]);

  return (
    <div className="grid grid-cols-6 h-full w-full">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-full col-span-4 outline-none resize-none"
      />
      <div className="h-full px-4 col-span-1 overflow-y-scroll">
        <pre>{results}</pre>
      </div>
    </div>
  );
};
