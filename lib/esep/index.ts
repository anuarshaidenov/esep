import { evaluate } from "@/lib/maths";

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

    results.push(result.toString());
  }

  return results;
}
