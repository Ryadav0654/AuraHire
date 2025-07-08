import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("OPENAI_API_KEY is not set");
  process.exit(1);
}

const client = new OpenAI({
  apiKey,
});

const main = async () => {
  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: "Write a one-sentence bedtime story about a unicorn.",
  });

  console.log(response);
  console.log(response.output[0]);
};

main();
