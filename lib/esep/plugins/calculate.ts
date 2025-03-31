import { formatNaN, formatNumber } from "@/lib/utils";
import { evaluate } from "mathjs";

export const calculate = (input: string) => {
  try {
    return formatNumber(formatNaN(evaluate(input)));
  } catch {
    return formatNumber(formatNaN(parseInt(input)));
  }
};
