import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("ru-RU").format(num);
};

export const unformatNumber = (formattedNum: string): number => {
  return parseFloat(formattedNum.replace(/\s/g, ""));
};

export const unformatNumbers = (input: string[]): number[] => {
  return input.map((item) => unformatNumber(item));
};

export const formatNaN = (num: number) => {
  if (isNaN(num)) {
    return 0;
  }

  return num;
};
