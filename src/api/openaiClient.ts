import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getRandomNumber = async (temperature?: number) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content:
            "Reply with a random valid stringified number from 0 to 100.",
        },
      ],
      temperature,
      max_tokens: 20,
    });

    return 10;
    console.log(completion.choices[0].message);
  } catch (error) {
    console.error(error);
  }
};

export const generateRandomNumbersArray = async (
  count: number
): Promise<Number[] | void> => {
  try {
    // Generates an array of 'count' random numbers between 0 and 100
    const randomNumbers: number[] = [];
    const randomNumber = await getRandomNumber();
    for (let i = 0; i < count; i++) {
      randomNumbers.push(randomNumber as number);
    }
    return randomNumbers;
  } catch (error) {
    console.error(error);
  }
};
