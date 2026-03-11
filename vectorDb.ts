import { Pinecone } from "@pinecone-database/pinecone";
import { embeddings } from "./embedding.ts";
import { Document } from "@langchain/core/documents";

export default async function storeVectors(chunks: Document[]) {
  if (!chunks || chunks.length === 0) {
    throw new Error("No chunks provided to store in Pinecone");
  }

  console.log("Chunks to store:", chunks.length);

  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });

  const indexName = process.env.PINECONE_INDEX_NAME!;
  const index = pc.Index(indexName);

  console.log("Connected to Pinecone index:", indexName);

  const texts = chunks.map((chunk) => chunk.pageContent);

  const vectors = await embeddings.embedDocuments(texts);

  console.log("Total embeddings created:", vectors.length);
  console.log("Embedding dimension:", vectors[0].length);

  const records = vectors.map((vector, i) => ({
    id: `vec-${i}`,
    values: vector,
    metadata: {
      text: texts[i],
    },
  }));

  console.log("Upserting vectors into Pinecone...");

  await index.upsert({
    records: records,
  });
  console.log("Vectors successfully stored in Pinecone");
}
