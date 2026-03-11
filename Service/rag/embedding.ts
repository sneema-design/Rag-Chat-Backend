import dotenv from "dotenv"
dotenv.config()
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
export const embeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HUGGING_FACE_API_KEY!,
  model: "sentence-transformers/all-mpnet-base-v2" //
});
