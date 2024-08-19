import asciichart from "asciichart";
import { generateRandomNumbersArray } from "../api/openaiClient.js";

export function plotPoints(numbers: number[]): Array<number> {
  const frequency = new Array(101).fill(0);
  numbers.forEach((num) => {
    if (num >= 0 && num <= 100) {
      frequency[num] += 1;
    }
  });
  return frequency;
}

export default async function plotGraphDistribution() {
  try {
    const randomNumbers = await generateRandomNumbersArray(10);
    console.log(asciichart.plot(plotPoints(randomNumbers as number[])));
  } catch (error) {
    console.error(error);
  }
}
