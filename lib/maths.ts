import { create, all, ConfigOptions, Unit } from "mathjs";

const config: ConfigOptions = { number: "number", precision: 14 };
const math = create(all, config);

export const evaluate = (input: string) => {
  try {
    const result: string | Unit | number = math.evaluate(input);
    if (result instanceof Unit) {
      return result.value;
    }

    return result;
  } catch {
    return input;
  }
};
