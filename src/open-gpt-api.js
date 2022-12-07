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
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1
  });
  return response.data.choices[0];
};
