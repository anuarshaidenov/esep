import { create, all, ConfigOptions, Unit, UnitDefinition } from "mathjs";

const config: ConfigOptions = { number: "number", precision: 14 };
const math = create(all, config);
math.createUnit("k", { definition: "1000", override: true } as UnitDefinition);

const scope: Record<string, number> = {};

const operatorAliases: Record<string, string> = {
  plus: "+",
  and: "+",
  with: "+",
  minus: "-",
  subtract: "-",
  without: "-",
  times: "*",
  "multiplied by": "*",
  mul: "*",
  divide: "/",
  "divided by": "/",
  of: "*",
  "to the power": "^",
};

function replaceOperatorWords(input: string): string {
  for (const [word, symbol] of Object.entries(operatorAliases)) {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    input = input.replace(regex, symbol);
  }
  console.log(input);
  return input;
}

export const evaluate = (input: string) => {
  try {
    input = replaceOperatorWords(input);
    input = input.replace(/(\d+(\.\d+)?)k\b/gi, "$1 k");
    const result: string | Unit | number = math.evaluate(input, scope);
    if (result instanceof Unit) {
      return result.value;
    }

    if (typeof result === "number" || typeof result === "string") {
      return result;
    }

    return "\n";
  } catch {
    return "\n";
  }
};

export const resetScope = () => {
  Object.keys(scope).forEach((key) => delete scope[key]);
};
