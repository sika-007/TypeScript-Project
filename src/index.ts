import { generateRandomNumbersArray as tempBasedGenerator } from "./first-project/api/openaiClient.js";
import { generateRandomNumbersArray as SummaryBasedGenerator } from "./improvements/api/openaiClient.js";
import { generateRandomNumbersArray as multipleBasedGenerator } from "./third-project/api/openaiClient.js";
import { plotGraphDistribution } from "./utils/plotter.js";

async function main() {
  // const firstArray: number[] = await tempBasedGenerator(20, 2);
  // plotGraphDistribution(firstArray);
  // console.log("The temperature based generation");

  // const secondArray = await SummaryBasedGenerator(7);
  // plotGraphDistribution(secondArray);
  // console.log("The summary based generation");

  const thirdArray = await multipleBasedGenerator(20);
  plotGraphDistribution(thirdArray);
  console.log("The multiple based generation");
}

main();
