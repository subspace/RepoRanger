import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const openAIApiKey = process.env.REACT_APP_OPEN_AI_API_KEY;

const llm = new OpenAI({
  openAIApiKey,
  temperature: 0.9,
  modelName: "gpt-3.5-turbo",
  // modelName: "gpt-4",
});

export const submitPrompt = async (userPrompt: string, files: string) => {
  try {
    const template = `
      You are an experienced softwarer engineer.
      Respond to the following prompt: {userPrompt}
      Files related to the prompt: {files}
    `;

    const prompt = new PromptTemplate({
      template,
      inputVariables: ["files", "userPrompt"],
    });

    const chain = new LLMChain({ llm, prompt });
    const res = await chain.call({
      userPrompt,
      files,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}