import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getSummaries(): Promise<(string | never)[]> {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content:
          "Generate two five-sentence summaries on two random topics. Return the summaries as plain text.",
      },
    ],
  });

  const summaries = completion.choices[0].message?.content;
  return summaries ? summaries?.split("\n\n") : [];
}

async function getRandomNumberFromSummaries(
  summaries: string[]
): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Here are two summaries: \n\n1. ${summaries[0]} \n\n2. ${summaries[1]} \n\n Now count the number of words in each summary, take the result of the first summary count mod 10. Do this for the second summary too. Please return just the two digits as a two digit number between 0 and 100. Don't return any other text. Just the numbers`,
      },
    ],
  });

  const randomNumber = completion.choices[0].message?.content;
  return randomNumber || "00";
}

async function generateRandomNumber() {
  try {
    // Step 1: Get two summaries on random topics
    const summaries = await getSummaries();

    // Step 2: Use the summaries to generate a random two-digit number
    const randomNumber = await getRandomNumberFromSummaries(summaries);
    return parseInt(randomNumber);
  } catch (error) {
    console.error("Error generating random number:", error);
    return "00"; // Fallback number in case of error
  }
}

export const generateRandomNumbersArray = async (
  count: number
): Promise<Number[] | void> => {
  try {
    // Generates an array of 'count' random numbers between 0 and 100 generated from summaries
    const randomNumbers: number[] = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = await generateRandomNumber();
      randomNumbers.push(randomNumber as number);
    }
    console.log(randomNumbers);
    return randomNumbers;
  } catch (error) {
    console.error(error);
  }
};
