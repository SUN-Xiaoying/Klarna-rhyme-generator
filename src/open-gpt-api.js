import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
export const getResponse = async (prompt) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 150
  });
  return response.data.choices[0];
};
