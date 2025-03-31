import { calculate } from "./calculate";

const plugins: ((input: string) => string | null)[] = [calculate];

export function processInput(input: string): string[] {
  const lines = input.split("\n");
  const results: string[] = [];

  for (const line of lines) {
    if (line.trim() === "") {
      results.push("\n");
      continue;
    }

    let result: string | null = null;

    for (const plugin of plugins) {
      result = plugin(line);
      if (result) break;
    }

    results.push(result!);
  }

  return results;
}
