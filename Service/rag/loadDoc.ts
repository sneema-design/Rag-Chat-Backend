import { TextLoader } from "@langchain/classic/document_loaders/fs/text"
export async function loadDocs() {
  const loader = new TextLoader("./knowledge.txt");

  const docs = await loader.load();

  return docs;
}