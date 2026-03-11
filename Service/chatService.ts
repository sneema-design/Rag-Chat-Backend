import genrator from "./rag/generate.ts";
import retrival from "./rag/retrival.ts";

export async function getAnswer(query: string) {
  const context = await retrival(query);
  let answer = await genrator(query, context);
  return answer;
}
