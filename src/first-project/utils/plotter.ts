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

export default async function plotGraphDistribution(temperature: number) {
  if (temperature <= 2 && temperature >= 0) {
    try {
      const randomNumbers = await generateRandomNumbersArray(10, temperature);
      console.log(asciichart.plot(plotPoints(randomNumbers as number[])));
    } catch (error) {
      console.error(error);
    }
  } else {
    throw new Error("temperature can only be a number between 0 and 2");
  }
}
