export const calculateTotalResults = (input: number[]) => {
  let total = 0;
  for (const item of input) {
    if (isNaN(item)) continue;
    total += item;
  }
  return total;
};
