import { create, all, ConfigOptions, Unit } from "mathjs";

const config: ConfigOptions = { number: "number", precision: 14 };
const math = create(all, config);

const scope: Record<string, number> = {};

export const evaluate = (input: string) => {
  try {
    const result: string | Unit | number = math.evaluate(input, scope);
    if (result instanceof Unit) {
      return result.value;
    }

    return result;
  } catch {
    return input;
  }
};

export const resetScope = () => {
  Object.keys(scope).forEach((key) => delete scope[key]);
};
