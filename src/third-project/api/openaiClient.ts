import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getNumberAndDescription(): Promise<string[] | void> {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 2,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content:
          "Choose a random page number from a book with 200 pages and very shortly describe what might be on that page. Return just the page number separated from the page's content by a new line.",
      },
    ],
  });

  const numberAndDescription = completion.choices[0].message?.content;
  return numberAndDescription?.split("\n");
}

async function generateRandomNumber(
  num: string,
  desc: string
): Promise<string | undefined> {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 2,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Mutiply ${num.trim()} by the number of words in ${desc} and return the result mod 100`,
      },
    ],
  });

  const randomNumber = completion.choices[0].message?.content;
  return randomNumber as string;
}

async function final() {
  const [num, description] = (await getNumberAndDescription()) as string[];
  const result = await generateRandomNumber(num, description);
  return result;
}

final();

// export const generateRandomNumbersArray = async (
//   count: number
// ): Promise<number[]> => {
//   const randomNumbers: number[] = [];
//   try {
//     // Generates an array of 'count' random numbers between 0 and 100 generated from summaries
//     for (let i = 0; i < count; i++) {
//       try {
//         const randomNumber = await getNumberAndDescription();
//         randomNumbers.push(randomNumber as number);
//       } catch (error) {
//         console.error(error);
//         randomNumbers.push(NaN);
//       }
//     }
//     console.log(randomNumbers);
//     return randomNumbers;
//   } catch (error) {
//     console.error(error);
//   }
//   return randomNumbers;
// };
