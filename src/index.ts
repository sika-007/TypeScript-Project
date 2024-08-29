import { generateRandomNumbersArray as tempBasedGenerator } from "./first-project/api/openaiClient.js";
// import { generateRandomNumbersArray as SummaryBasedGenerator } from "./improvements/api/openaiClient.js";
// import { generateRandomNumbersArray as multipleBasedGenerator } from "./third-project/api/openaiClient.js";
import { plotGraphDistribution, plotPoints } from "./utils/plotter.js";

async function main() {
  const firstArray: number[] = await tempBasedGenerator(20, 2);
  plotGraphDistribution(firstArray);
  console.log("The temperature based generation");

  const frequency = plotPoints(firstArray);
  const firstArrObject = frequency.map((elem, index) => ({
    value: index,
    frequency: elem,
  }));

  firstArrObject.sort((a, b) => b.frequency - a.frequency);

  console.log(
    `The top three values generated were:\n${firstArrObject[0].value} appearing ${firstArrObject[0].frequency} times\n${firstArrObject[1].value} appearing ${firstArrObject[1].frequency} times\nand ${firstArrObject[2].value} appearing ${firstArrObject[2].frequency} times`
  );

  // const secondArray = await SummaryBasedGenerator(7);
  // plotGraphDistribution(secondArray);
  // console.log("The summary based generation");

  // const thirdArray = await multipleBasedGenerator(20);
  // plotGraphDistribution(thirdArray);
  // console.log("The multiple based generation");
}

main();
