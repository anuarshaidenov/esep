export const calculateTotalResults = (input: string[]) => {
  let total = 0;
  for (const item of input) {
    const num = parseFloat(item);
    total += isNaN(num) ? 0 : num;
  }
  return total;
};
