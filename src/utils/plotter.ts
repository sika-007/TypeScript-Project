import asciichart from "asciichart";

const randomArray = [
  27, 63, 88, 14, 45, 79, 50, 6, 92, 31, 22, 73, 11, 94, 36, 57, 8, 69, 40, 17,
  81, 53, 99, 25, 60, 90, 48, 12, 84, 33, 70, 20, 91, 54, 7, 66, 39, 96, 29, 19,
  86, 43, 5, 68, 76, 15, 98, 35, 59, 3, 32, 78, 24, 95, 13, 87, 28, 64, 46, 1,
  74, 52, 41, 10, 85, 23, 80, 56, 2, 61, 18, 67, 47, 9, 97, 38, 21, 75, 30, 65,
  44, 4, 99, 62, 16, 83, 26, 71, 34, 55, 77, 42, 93, 49, 58, 72, 0, 89, 35, 42,
];

export function plotDistribution(numbers: number[]): Array<number> {
  const frequency = new Array(numbers.length).fill(0);
  numbers.forEach((num) => {
    if (num >= 0 && num <= 100) {
      frequency[num] += 1;
    }
  });

  console.log(frequency);
  return frequency;
}

console.log(asciichart.plot(plotDistribution(randomArray)));
