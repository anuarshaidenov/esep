import { evaluate } from "mathjs";

export const calculate = (input: string) => {
  try {
    return evaluate(input).toString();
  } catch {
    return parseInt(input).toString();
  }
};
