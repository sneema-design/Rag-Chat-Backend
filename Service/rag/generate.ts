import { ChatGroq } from "@langchain/groq";
import { chat_history } from "./memory.ts";
export default async function genrator(question: string, context: string[]) {
  const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY!,
    model: "openai/gpt-oss-20b",
    temperature: 0,
  });
  const history = await chat_history.getMessages();

  const joinedContext = context.join("\n\n");

  const prompt = `
You are a helpful assistant.

Use the context below to answer the user's question.
If the answer is not in the context, then say ask question from the document only.
Conversation History:
${history.map((m) => `${m._getType()}: ${m.content}`).join("\n")}
Context:
${joinedContext}

Question:
${question}
`;

  const response = await model.invoke(prompt);
  await chat_history.addUserMessage(question);
  await chat_history.addAIMessage(response);
  return response.content;
}
