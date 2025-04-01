import { evaluate } from "@/lib/maths";
import { formatNumber } from "../utils";

export function processInput(input: string): string[] {
  const lines = input.split("\n");
  const results: string[] = [];

  for (const line of lines) {
    if (line.trim() === "") {
      results.push("\n");
      continue;
    }

    let result: string | null | number = null;
    result = evaluate(line);

    if (typeof result === "number") {
      result = formatNumber(result);
    }

    results.push(result.toString());
  }

  return results;
}
