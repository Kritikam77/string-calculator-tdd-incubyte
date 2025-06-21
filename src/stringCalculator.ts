function parseNumbers(input: string): number[] {
  let numbersSection = input;
  let delimiterPattern = getDelimiterPattern(input);

  // remove delimiter declaration if present
  if (input.startsWith("//")) {
    const parts = input.split("\n");
    numbersSection = parts.slice(1).join("\n");
  }

  const numbers = numbersSection
    .split(delimiterPattern)
    .map((num) => parseInt(num));

  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  return numbers;
}

function getDelimiterPattern(input: string): RegExp {
  if (input.startsWith("//")) {
    const delimiterLine = input.split("\n")[0];
    const customDelimiter = delimiterLine.substring(2);
    return new RegExp(`[${escapeRegExp(customDelimiter)}\n]`);
  }
  return /[,\n]/;
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function add(numbers: string): number {
  if (numbers === "") return 0;

  const nums = parseNumbers(numbers);
  return nums.reduce((sum, curr) => sum + curr, 0);
}
