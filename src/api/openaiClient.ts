import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateRandomNumber = async (temperature?: number) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: "Reply with a random valid number from 0 to 99.",
        },
      ],
      temperature,
      max_tokens: 20,
    });

    const result: string | undefined =
      completion.choices[0].message.content?.toString();
    return parseInt(result as string);
  } catch (error) {
    console.error(error);
  }
};

export const generateRandomNumbersArray = async (
  count: number,
  temperature?: number
): Promise<Number[] | void> => {
  try {
    // Generates an array of 'count' random numbers between 0 and 100
    const randomNumbers: number[] = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = await generateRandomNumber(temperature); // Pass the temperature (between 0 and 2) into the generateRandomNumber function here. This will determine the degree of randomness of the results you get
      randomNumbers.push(randomNumber as number);
    }
    console.log(randomNumbers);
    return randomNumbers;
  } catch (error) {
    console.error(error);
  }
};
