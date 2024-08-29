import asciichart from "asciichart";

export function plotPoints(numbers: number[]): Array<number> {
  const frequency = new Array(101).fill(0);
  numbers.forEach((num) => {
    if (num >= 0 && num <= 100) {
      frequency[num] += 1;
    }
  });
  return frequency;
}

export async function plotGraphDistribution(numbersArray: number[]) {
  try {
    console.log(asciichart.plot(plotPoints(numbersArray as number[])));
  } catch (error) {
    console.error(error);
  }
}
